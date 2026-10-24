const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const src=fs.readFileSync(fs.existsSync(__dirname+'/dist/game.js')?__dirname+'/dist/game.js':__dirname+'/game.js','utf8');
const data=src.slice(src.indexOf('const cast='),src.indexOf('let state='));
const restore=src.slice(src.indexOf('function restore()'),src.indexOf('function track('));
let raw;const context=vm.createContext({localStorage:{getItem:()=>raw}});
const extras=fs.readFileSync(fs.existsSync(__dirname+'/dist/extras.js')?__dirname+'/dist/extras.js':__dirname+'/extras.js','utf8');
vm.runInContext("const KEY='test';"+extras+data+restore,context);
const valid={mode:'cross',stage:3,statement:0,hp:5,found:['mic','alibi','photo','log'],dialogue:[],history:[]};
function run(x){raw=JSON.stringify(x);return vm.runInContext('restore()',context)}
assert.equal(run(valid).stage,3);
assert.equal(run({...valid,hp:0}).hp,5);
assert.equal(run({...valid,hp:-2}).hp,5);
assert.equal(run({...valid,statement:99}).statement,0);
assert.equal(run({...valid,found:['mic','mic','bad']}).found.join(','),'mic');
assert.equal(run({...valid,mode:'dialogue',cursor:99,after:'cross'}),null);
assert.equal(run({...valid,stage:99}),null);
raw='{broken';assert.equal(vm.runInContext('restore()',context),null);
assert.equal(vm.runInContext('trials[5].proof',context),'report');
console.log('Passed: save recovery, invalid state rejection, final evidence consistency.');

assert.equal(vm.runInContext('optionalScenes.length',context),38);
assert.equal(vm.runInContext('new Set(optionalScenes.map(s=>s.id)).size',context),38);
assert.ok(vm.runInContext("optionalScenes.every(s=>s.lines.every(l=>cast[l[0]]&&typeof l[1]==='string'&&['neutral','thought','intense'].includes(l[2])))",context));
vm.runInContext(`let state={mode:'cross',stage:2,statement:2,hp:3,found:['mic','alibi','photo','log'],scene:'courtroom',optionalSeen:[]};
function $(id){return {close(){},focus(){},replaceChildren(){this.children=[]}}}function speak(lines,after,music){state.mode='dialogue';state.dialogue=lines;state.cursor=0;state.after=after}function render(){}openExtras=()=>{};`,context);
vm.runInContext("startOptional('court_2','court')",context);
assert.equal(vm.runInContext('state.mode',context),'dialogue');
vm.runInContext('finishOptional(true)',context);
assert.equal(vm.runInContext('state.mode',context),'cross');
assert.equal(vm.runInContext('state.statement',context),2);
assert.equal(vm.runInContext('state.hp',context),3);
assert.equal(vm.runInContext('state.found.length',context),4);
assert.equal(vm.runInContext('state.optionalSeen.join()',context),'court_2');
vm.runInContext("startOptional('court_2','court');finishOptional(true)",context);
assert.equal(vm.runInContext('state.optionalSeen.length',context),1);
vm.runInContext("state.mode='investigate';startOptional('ghostlight','stage');finishOptional(false)",context);
assert.equal(vm.runInContext('state.mode',context),'investigate');
assert.equal(vm.runInContext('state.optionalSeen.includes("ghostlight")',context),false);
console.log('Passed: 38 investigation and conversation scenes, expression tags, exact return position, no evidence/credibility changes, replay deduplication, skipped scenes.');

vm.runInContext("state.mode='cross';state.stage=3;state.statement=2;state.hp=4;startOptional('duck_tribunal','court');finishOptional(true)",context);
assert.equal(vm.runInContext('state.mode',context),'ending');
assert.equal(vm.runInContext('state.alternateEnding',context),true);
vm.runInContext('rewindAlternate()',context);
assert.equal(vm.runInContext('state.mode',context),'cross');
assert.equal(vm.runInContext('state.statement',context),2);
assert.equal(vm.runInContext('state.hp',context),4);
assert.equal(vm.runInContext('state.alternateEnding',context),false);
vm.runInContext("startOptional('duck_tribunal','court');finishOptional(false)",context);
assert.equal(vm.runInContext('state.mode',context),'cross');
console.log('Passed: alternative ending, rewind restores testimony and credibility, skip keeps normal route.');

vm.runInContext("state.mode='ending';startOptional('duck_tribunal','ending');finishOptional(true);rewindAlternate()",context);assert.equal(vm.runInContext('state.mode',context),'ending');console.log('Passed: post-verdict branch rewinds to normal ending.');

// Exercise the shared investigation menus with a minimal DOM.
const uiElements={};
function element(){return {children:[],style:{},attrs:{},append(x){this.children.push(x)},setAttribute(k,v){this.attrs[k]=v},close(){},focus(){},replaceChildren(){this.children=[]}}}
const ui=vm.createContext({document:{createElement:element},ART:{stage:'stage',booth:'booth'},$:(id)=>uiElements[id]||(uiElements[id]=element()),modal:()=>{throw Error('Case notes must not open a dialog')},render(){vm.runInContext('if(state.notesGroup)drawNotes()',ui)}});
vm.runInContext(extras+data+`let state={mode:'investigate',stage:0,statement:0,hp:5,found:[],optionalSeen:[]};function speak(lines,after){state.mode='dialogue';state.dialogue=lines;state.after=after;state.cursor=0}`,ui);
const discovery=src.slice(src.indexOf('const investigationDialogue='),src.indexOf('function step('));
vm.runInContext(discovery,ui);
vm.runInContext("openExtras('stage')",ui);
assert.equal(uiElements.extraList.children.length,8);
assert.ok(uiElements.extraList.children.some(b=>b.textContent.includes('Disconnected microphone')));
assert.ok(uiElements.extraList.children.some(b=>b.textContent.includes('Velvet curtains')));
vm.runInContext("openExtras('booth')",ui);
assert.equal(uiElements.extraList.children.length,6);
vm.runInContext("openExtras('talk','hank')",ui);
assert.equal(uiElements.extraList.children.length,2);
assert.equal(uiElements.interviewPeople.children.filter(x=>x.onclick).length,6);
vm.runInContext("startOptional('hank_scene','talk');finishOptional(true)",ui);
assert.ok(uiElements.extraList.children[0].textContent.startsWith('✓'));
assert.equal(vm.runInContext('interviewPerson',ui),'hank');
vm.runInContext("examine(0)",ui);
assert.equal(vm.runInContext('state.optionalReturn.id',ui),'mic');
raw=vm.runInContext('JSON.stringify({...state,history:[]})',ui);
assert.ok(vm.runInContext('restore()',context));
vm.runInContext('finishOptional(true)',ui);
assert.equal(vm.runInContext('state.mode',ui),'investigate');
assert.ok(uiElements.extraList.children.some(b=>b.textContent==='✓ Disconnected microphone'));
assert.ok(vm.runInContext('opening.length>=10 && investigationDialogue.every(s=>s.length>=5)',ui));
console.log('Passed: integrated clue/scenery menus, six interview subjects, topic return, inspection save recovery, expanded exposition.');

vm.runInContext("openExtras('talk','vera')",ui);
raw=vm.runInContext('JSON.stringify({...state,dialogue:[],history:[]})',ui);
assert.equal(vm.runInContext('restore().notesGroup',context),'talk');
assert.equal(vm.runInContext('restore().notesPerson',context),'vera');
vm.runInContext('closeNotes()',ui);
assert.equal(vm.runInContext('state.notesGroup',ui),null);
vm.runInContext("state.mode='cross';state.stage=2;state.statement=2;openExtras();closeNotes()",ui);
assert.equal(vm.runInContext('state.statement',ui),2);
console.log('Passed: case notes are non-modal screens; saved interview and exact testimony return.');

vm.runInContext("state.mode='investigate';openExtras('talk','mara')",ui);
assert.equal(uiElements.notesTitle.textContent,'Mara Bell');
assert.equal(uiElements.extraLayout.className,'interview-layout');
assert.equal(uiElements.extraMap.hidden,false);
assert.equal(uiElements.extraMap.children[0].attrs['aria-label'],'Mara Bell');
vm.runInContext("startOptional('mara_night','talk')",ui);
assert.equal(vm.runInContext('state.scene',ui),'booth');
vm.runInContext('finishOptional(false)',ui);
assert.equal(uiElements.notesTitle.textContent,'Mara Bell');
vm.runInContext("openExtras('stage')",ui);
assert.equal(uiElements.notesScreen.className,'');
console.log('Passed: character portrait screens, location-matched dialogue, return to interview, clean location switch.');

assert.equal(vm.runInContext('trials.length',context),6);
assert.equal(vm.runInContext('trials[3].proof',context),'alibi');
assert.equal(vm.runInContext('trials[4].proof',context),'log');
assert.equal(vm.runInContext('trials[5].who',context),'tessa');
assert.ok(vm.runInContext("trials.every(t=>evidence.some(e=>e.id===t.proof)&&t.target>=0&&t.target<t.lines.length&&t.press.length===t.lines.length)",context));
assert.ok(vm.runInContext("optionalScenes.some(s=>s.id==='duck_tribunal'&&s.stage===trials.length-1)",context));
assert.ok(vm.runInContext("evidence.find(e=>e.id==='alibi').text.includes('7:59:10')",context));
assert.ok(vm.runInContext("trials[5].success.some(l=>l[0]==='tessa'&&l[1].includes('I struck him'))",context));
console.log('Passed: six linked contradictions, living-victim reversal, Tessa confession, final-stage secret ending.');
const flow=vm.createContext({});
vm.runInContext(data+`let state={mode:'cross',stage:0,statement:0,hp:5};function $(id){return {close(){},classList:{remove(){},add(){}},offsetWidth:0}}function track(){}function render(){}function speak(lines,after){state.mode='dialogue';state.dialogue=lines;state.cursor=0;state.after=after}function finishOptional(){};`+src.slice(src.indexOf('function submit('),src.indexOf("$('rewindAlternate').onclick"))+src.slice(src.indexOf('function advance('),src.indexOf('const investigationDialogue=')),flow);
for(let n=0;n<6;n++){
 assert.equal(vm.runInContext('state.stage',flow),n);
 vm.runInContext('state.statement=trials[state.stage].target;submit(trials[state.stage].proof)',flow);
 assert.equal(vm.runInContext('state.mode',flow),'dialogue');
 const count=vm.runInContext('state.dialogue.length',flow);
 for(let i=0;i<count;i++)vm.runInContext('advance()',flow);
 assert.equal(vm.runInContext('state.mode',flow),n===5?'ending':'cross');
}
console.log('Passed: all six evidence submissions and success scenes reach the revised verdict.');
