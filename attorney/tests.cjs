const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const base=fs.existsSync(__dirname+'/dist/game.js')?__dirname+'/dist/':__dirname+'/';
const src=fs.readFileSync(base+'game.js','utf8'),extras=fs.readFileSync(base+'extras.js','utf8');
const data=src.slice(src.indexOf('const cast='),src.indexOf('let state='));
let raw;const elements={};
function element(){return {children:[],style:{},attrs:{},classList:{add(){},remove(){}},offsetWidth:0,append(x){this.children.push(x)},replaceChildren(){this.children=[]},setAttribute(k,v){this.attrs[k]=v},focus(){},close(){}}}
const ctx=vm.createContext({localStorage:{getItem:()=>raw},document:{createElement:element},ART:{stage:'stage',booth:'booth',courtroom:'courtroom'},$:(id)=>elements[id]||(elements[id]=element())});
vm.runInContext("const KEY='test';"+extras+data+src.slice(src.indexOf('function restore()'),src.indexOf('function track('))+`let state={};let sound=false;function render(){if(state.notesGroup)drawNotes()}function track(){}function save(){}function feedback(){}function speak(lines,after){state.mode='dialogue';state.dialogue=lines;state.after=after;state.cursor=0;render()}`+src.slice(src.indexOf('function begin()'),src.indexOf('function step('))+src.slice(src.indexOf('function submit('),src.indexOf("$('nextDay').onclick")),ctx);
const run=s=>vm.runInContext(s,ctx);
function finish(){const n=run('state.dialogue.length-state.cursor');for(let i=0;i<n;i++)run('advance()')}
function reload(){raw=run('JSON.stringify(state)');const s=run('restore()');assert.ok(s);run('state=restore()');return s}
run('begin()');assert.equal(run('state.day'),1);finish();assert.equal(run('state.mode'),'investigate');
assert.equal(run('trials.length'),12);assert.equal(run('activeClues().length'),4);
assert.equal(run("availableExtras('talk').some(s=>s.day===2)"),false);
assert.equal(run("availableExtras('court').some(s=>s.id==='duck_tribunal')"),false);
run("openExtras('stage')");assert.equal(elements.extraList.children.length,8);
assert.equal(elements.extraList.children.some(b=>/Rig|Restored|Escrow/.test(b.textContent)),false);
run("openExtras('talk','mara')");assert.equal(elements.notesTitle.textContent,'Mara Bell');reload();assert.equal(run('state.notesPerson'),'mara');
run("startOptional('mara_night','talk')");assert.equal(run('state.mode'),'dialogue');finish();assert.equal(run('state.day'),1);run('closeNotes()');
run('examine(4)');assert.equal(run('state.found.includes("camera2")'),false);assert.equal(run('state.mode'),'investigate');
for(let i=0;i<4;i++){run(`examine(${i})`);reload();finish();run('closeNotes()')}
assert.equal(run('state.found.length'),4);
run("speak(courtIntro,'cross')");finish();
function win(n){assert.equal(run('state.stage'),n);run('state.statement=trials[state.stage].target;submit(trials[state.stage].proof)');assert.equal(run('state.mode'),'dialogue');reload();finish()}
for(let n=0;n<4;n++){win(n);assert.equal(run('state.mode'),n===3?'intermission':'cross')}
assert.equal(run('state.day'),1);assert.equal(run('state.stage'),4);reload();
assert.equal(run('state.mode'),'intermission');run('startDayTwo()');assert.equal(run('state.day'),2);reload();finish();
assert.equal(run('state.mode'),'investigate');assert.equal(run('activeClues().length'),5);
assert.equal(run('activeClues().every(c=>!state.found.includes(c.id))'),true);
run("openExtras('talk','pip')");assert.equal(elements.extraList.children.some(b=>b.textContent.includes('Your name on the contract')),false);assert.ok(elements.extraList.children.some(b=>b.textContent.includes('The office lunch rota')));
assert.equal(run("availableExtras('talk').every(s=>s.day===2)"),true);
run('closeNotes()');
for(let i=4;i<9;i++){run(`examine(${i})`);reload();finish();run('closeNotes()')}
assert.equal(run('state.found.length'),9);
run("openExtras('talk','pip')");assert.ok(elements.extraList.children.some(b=>b.textContent.includes('Your name on the contract')));run('closeNotes()');
const progress=run('JSON.stringify([state.stage,state.hp,state.found])');
run("startOptional('d2_pip_lunch','talk')");finish();run('closeNotes()');
run("startOptional('d2_drawer','booth')");finish();run('closeNotes()');
assert.equal(run('JSON.stringify([state.stage,state.hp,state.found])'),progress);
assert.ok(run("optionalScenes.filter(s=>s.day===2&&['stage','booth'].includes(s.group)).length>=12"));
assert.ok(run("['mara','pip','celia','tessa','hank','vera'].every(id=>optionalScenes.some(s=>s.day===2&&s.character===id&&!s.requires))"));
run("speak(day2Intro,'cross')");finish();
for(let n=4;n<12;n++){win(n);assert.equal(run('state.mode'),n===11?'ending':'cross')}
assert.equal(run('trials[8].who'),'pip');assert.ok(run("trials[8].success.some(l=>l[0]==='pip'&&l[1].includes('stayed dead'))"));reload();
console.log('Passed: Day 1 investigation and four contradictions → saved overnight break → Day 2 investigation, apparent confession and final ghost witness → new verdict.');
run("state.mode='cross';state.day=2;state.stage=11;state.statement=2;state.hp=3;startOptional('duck_tribunal','court')");finish();assert.equal(run('state.alternateEnding'),true);run('rewindAlternate()');assert.equal(run('state.mode'),'cross');assert.equal(run('state.statement'),2);assert.equal(run('state.hp'),3);
run("startOptional('duck_tribunal','court');finishOptional(false)");assert.equal(run('state.mode'),'cross');
assert.ok(run('trials.every(t=>t.target>=0&&t.target<t.lines.length&&t.press.length===t.lines.length&&evidence.some(e=>e.id===t.proof))'));
assert.ok(run('new Set(optionalScenes.map(s=>s.id)).size===optionalScenes.length'));
assert.ok(run("optionalScenes.every(s=>s.lines.every(l=>cast[l[0]]&&typeof l[1]==='string'&&['neutral','thought','intense'].includes(l[2])))"));
raw='{bad';assert.equal(run('restore()'),null);
raw=JSON.stringify({day:1,mode:'cross',stage:8,statement:0,hp:5,found:[],dialogue:[],history:[]});assert.equal(run('restore()'),null);
console.log('Passed: day-gated topics and evidence, save/resume at every discovery and testimony, unique scenes, valid speakers, secret ending and exact rewind.');

assert.equal(run('evidence.length'),10);
assert.equal(run("evidence.map(e=>e.id).join(',')"),'report,mic,alibi,photo,log,camera2,lab,packet,relay,ledger');
assert.ok(run("trials.slice(-3).every(t=>t.who==='ghost')"));
assert.ok(run("trials[11].success.some(l=>l[0]==='vale'&&l[1].includes('never was a second man'))"));
assert.ok(run("trials[11].success.some(l=>l[0]==='judge'&&l[1].includes('nobody left to stop it'))"));
vm.runInContext(src.slice(src.indexOf('const evidenceNotes='),src.indexOf('function inspectEvidence(')),ctx);
run('state.stage=8');assert.equal(run("notesFor('relay').points.length"),1);
run('state.stage=9');assert.equal(run("notesFor('relay').points.length"),2);
assert.ok(run("notesFor('ledger').points.some(p=>p[0]==='Folded deed rider')"));
assert.ok(run("trials[8].success.some(l=>l[0]==='ghost'&&l[1].includes('whole person'))"));
console.log('Passed: unchanged ten-exhibit inventory, late document details, Vale’s ghost as final witness, staged haunting, judge admission, same-person reveal, attempted murder, balanced remembrance.');

assert.equal(run("cast.ghost[0]"),'Adrian Vale’s ghost');
assert.equal(run("cast.ghost[2]"),'theatre');
assert.equal(run("cast.ghost[3]"),1);
assert.ok(run("documentDetails.packet.text.includes('performer: ADRIAN VALE')"));
assert.ok(run("documentDetails.report.text.includes('no signed death certificate')"));
assert.ok(run("trials[11].success.some(l=>l[0]==='iris'&&l[1].includes('both intended to kill'))"));
console.log('Passed: Vale portrait crop, shared identity in existing packet, uncertified death, attempted-killing resolution.');

assert.ok(run("documentDetails.relay.text.includes('sole release trigger')"));
assert.ok(run("trials[9].success.some(l=>l[1].includes('cancelled that visit'))"));
assert.equal(/secondary latch|SAFETY INTERLOCK|two rig channels|8:01:56/.test(src),false);
console.log('Passed: single rig trigger, forged inspection clearance and judge connection.');
