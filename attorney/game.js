'use strict';
const $=id=>document.getElementById(id), KEY='behind-curtain-rewrite-v2';
const cast={iris:['Iris Quill','Defense attorney','defense',0],pip:['Pip Foley','Assistant • former sound technician','defense',1],mara:['Mara Bell','Defendant • sound engineer','defense',2],vera:['Vera Flint','Prosecutor','court',0],hank:['Hank Ledger','Detective','court',1],judge:['Judge','District court','court',2],celia:['Celia Rook','Stage manager','theatre',0],tessa:['Tessa Flash','Theatre critic','theatre',2]};
const evidence=[
  {
    "id": "report",
    "name": "Scene report",
    "tag": "POLICE • EXHIBIT 01",
    "text": "Adrian Vale was found behind the stage desk after the 8:02 blackout. Fatal injury: a blow from the brass award. Medical estimate: 7:50–8:05. Mara’s fingerprints are on the base. SEALED RECOVERY ANNEX — At 8:12, police recovered a detached handle beneath the body. It was concealed until officers moved Vale; it is not visible in the photograph. A fresh coral-coloured thread was caught inside the newly broken joint. The annex was supplied only to the court and counsel, not witnesses or press."
  },
  {
    "id": "mic",
    "name": "Microphone service slip",
    "tag": "THEATRE • EXHIBIT 02",
    "text": "7:55 p.m. — Stage microphone disconnected at the patch panel to stop feedback. Signed: Mara Bell. It remained unplugged until police secured the scene. Auditorium playback speakers remained connected. The publicity schedule lists an 8:02 blackout followed by an 8:03 “return of the author”; Mara was not given that schedule."
  },
  {
    "id": "alibi",
    "name": "Corridor camera",
    "tag": "SECURITY • EXHIBIT 03",
    "text": "Continuous footage, clock independently verified. Mara enters the upstairs booth at 7:56 and leaves at 8:03; no other exit. At 7:59:10, Vale passes the lower landing, visible through the stairwell, drinking from a white mug and straightening his bow tie. His face is clear. He returns towards the stage at 7:59:22. The footage continues unbroken. This is after the 7:58 photograph."
  },
  {
    "id": "photo",
    "name": "Tessa’s 7:58 photograph",
    "tag": "PHOTO • EXHIBIT 04",
    "text": "Original file, timestamp verified: 7:58. The mirror shows Vale lying motionless beside the desk and an award on the floor. A still image establishes a pose, not whether a person is dead. The detached handle is not visible. Tessa’s coral scarf is intact in this earlier photograph. The framing is precise enough to show the collapsed figure while concealing the space behind the desk."
  },
  {
    "id": "log",
    "name": "Playback cue log",
    "tag": "CONSOLE • EXHIBIT 05",
    "text": "8:02:00 — Manual GO from Celia’s stage-left console. Upstairs booth: monitor-only. Cue 17B plays “Mara, put that down!” and a crash, edited from a rehearsal about lowering a speaker. SIGNED AUDIT: the originally approved cue was harmless thunder. At 8:00:20 the replacement file was signed and uploaded from press terminal P1 using Tessa Flash’s personal press key; the terminal’s confirmation photograph shows Tessa operating it. Celia’s station could trigger the cue but could not edit its file. Cue 18, scheduled for 8:03 but cancelled when the performance was stopped, was titled “RESURRECTION / THE THREE DEAD AUTHORS”. Its attached slide identifies three prizewinning literary estates as shell companies paid into the same account belonging to Tessa Flash."
  }
];
const clues=[{name:'Disconnected microphone',id:'mic',bg:'stage',who:'pip',line:'The speakers can play a recording even when the stage microphone is unplugged. Someone wanted an audience for a voice that wasn’t live.'},{name:'Upstairs sound booth',id:'alibi',bg:'booth',who:'mara',line:'Celia sent me upstairs at 7:56. I didn’t leave until after the scream. Please… I only picked up the award because I thought I could help.'},{name:'Critic’s photograph',id:'photo',bg:'stage',who:'pip',line:'Tessa was taking a selfie, but the mirror caught something else. Vale is lying on the floor at 7:58. A pose is not a diagnosis.'},{name:'Stage-manager console',id:'log',bg:'booth',who:'pip',line:'Cue 17B. A rehearsal recording, manually triggered at 8:02 from stage left. Mara’s booth couldn’t have sent that command.'}];
const trials=[
  {
    "title": "A voice in the darkness",
    "who": "hank",
    "target": 1,
    "proof": "mic",
    "lines": [
      "At 8:02, witnesses heard Vale shout, “Mara, put that down!”",
      "His voice came over the stage microphone. He was certainly alive at 8:02.",
      "A crash followed. Mara was found holding the award.",
      "A dispute, the shout, and her fingerprints led us to arrest her."
    ],
    "press": [
      "The blackout was a planned cue. Does that make the voice live?",
      "Check the service time against the time of the shout.",
      "She says she picked up the base after coming downstairs.",
      "Several witnesses can all be misled by the same sound."
    ],
    "success": [
      [
        "iris",
        "The microphone was disconnected at 7:55. The speakers carried a recording, not a live voice!",
        "intense"
      ],
      [
        "hank",
        "Then I treated the time of a sound as the time of an attack.",
        "intense"
      ],
      [
        "vera",
        "A false sound does not tell us when the real blow landed."
      ],
      [
        "judge",
        "Call the witness with the photograph."
      ]
    ]
  },
  {
    "title": "The photograph of a dead man",
    "who": "tessa",
    "target": 2,
    "proof": "photo",
    "lines": [
      "I came to review a play, not participate in one.",
      "At 7:58 I took a perfectly ordinary photograph of myself.",
      "Vale was standing beside his desk at that exact moment.",
      "I heard the shout four minutes later and assumed the worst."
    ],
    "press": [
      "A critic can also have a role in the evening’s publicity.",
      "The file timestamp is verified. Its contents deserve equal attention.",
      "Look at the mirror. Is that a standing figure?",
      "A sound and a photograph are separate observations."
    ],
    "success": [
      [
        "iris",
        "Your own photograph shows Vale lying beside the desk at 7:58!",
        "intense"
      ],
      [
        "tessa",
        "Then… the murder must already have happened. I was looking at the lens, not at him.",
        "thought"
      ],
      [
        "pip",
        "That would put the collapse before the scream. But we should be careful about the word “murder”."
      ],
      [
        "vera",
        "The stage manager will explain why this evening had a scheduled blackout."
      ]
    ]
  },
  {
    "title": "A murder with a prompt book",
    "who": "celia",
    "target": 1,
    "proof": "log",
    "lines": [
      "The Royal needed an opening night no newspaper could ignore.",
      "The 8:02 sound was automatic. My station sent no command.",
      "I sent Mara upstairs because Adrian wanted her out of the scene.",
      "I thought he was waiting behind the desk for his next entrance."
    ],
    "press": [
      "What kind of opening requires the director to hide behind his desk?",
      "The log identifies both the command and its source.",
      "A real instruction can put an innocent person in the wrong story.",
      "Ask what entrance was supposed to follow the blackout."
    ],
    "success": [
      [
        "iris",
        "MANUAL GO. You pressed the button at stage left.",
        "intense"
      ],
      [
        "celia",
        "Yes. I lied because I thought admitting it would make me responsible for his death.",
        "intense"
      ],
      [
        "celia",
        "Adrian was staging his own murder. A photograph of a corpse, a blackout, then his triumphant resurrection at 8:03. My cue was supposed to be thunder."
      ],
      [
        "judge",
        "The deceased booked himself a resurrection?",
        "intense"
      ],
      [
        "celia",
        "He called it immersive publicity. I called it a liability. He promised to credit my sister’s play if I helped."
      ],
      [
        "vera",
        "You admit helping with a hoax. That does not establish when the hoax became a murder."
      ],
      [
        "tessa",
        "Nonsense. The photograph proves he was already dead at 7:58. There could be no later attack.",
        "intense"
      ],
      [
        "iris",
        "Then let us put that claim on the record."
      ]
    ]
  },
  {
    "title": "The victim takes an interval",
    "who": "tessa",
    "target": 0,
    "proof": "alibi",
    "lines": [
      "Vale was dead by 7:58. He could not have walked anywhere after that.",
      "The figure in my photograph is the real Adrian Vale.",
      "Celia’s resurrection story is an excuse invented after the arrest.",
      "Mara could have attacked him before going upstairs."
    ],
    "press": [
      "A photograph freezes one instant. What does continuous footage show a minute later?",
      "We agree about his identity. It is his condition that is disputed.",
      "The archived schedule mentions a return at 8:03.",
      "Mara stays upstairs until 8:03. First establish the latest time Vale was alive."
    ],
    "success": [
      [
        "iris",
        "At 7:59:10, Vale walks past the lower landing drinking from a mug. The camera clock is verified, and his face is clear.",
        "intense"
      ],
      [
        "judge",
        "The corpse took a tea break?",
        "intense"
      ],
      [
        "pip",
        "A coffee break, technically. The cup is in the property inventory."
      ],
      [
        "iris",
        "The photograph captured a performance. Vale returned towards the stage at 7:59:22. Mara remained upstairs until 8:03."
      ],
      [
        "vera",
        "That excludes Mara from the fatal attack, not merely from a sound cue. I withdraw that theory."
      ],
      [
        "tessa",
        "Then arrest the woman at the console. She chose to play the scream.",
        "intense"
      ],
      [
        "celia",
        "I chose GO. I did not choose that recording. Someone changed what my button would play.",
        "intense"
      ],
      [
        "iris",
        "The console remembers the difference."
      ]
    ]
  },
  {
    "title": "The critic’s invisible rewrite",
    "who": "tessa",
    "target": 1,
    "proof": "log",
    "lines": [
      "I spent the interval preparing my review at the press terminal.",
      "Celia uploaded the scream. I never changed a sound file.",
      "My press key was with me throughout the evening.",
      "I know nothing about the cancelled resurrection slide."
    ],
    "press": [
      "The terminal has a signed upload history and a confirmation photograph.",
      "Separate the person who uploaded the file from the person who triggered it.",
      "The audit identifies the key and the operator, not merely an unattended computer.",
      "Why were three allegedly dead authors sharing one living critic’s bank account?"
    ],
    "success": [
      [
        "iris",
        "At 8:00:20, your personal key signed the replacement upload. The terminal’s confirmation photograph shows you doing it. Celia’s station could not edit the file.",
        "intense"
      ],
      [
        "tessa",
        "Fine. I supplied an audio gag. I thought it was part of his ridiculous stunt. That is not murder.",
        "intense"
      ],
      [
        "vera",
        "And the cancelled slide? Three literary estates, one account: yours."
      ],
      [
        "tessa",
        "They were pen names. Marketing arrangements. Literature has always used masks."
      ],
      [
        "celia",
        "He showed me my sister’s handwriting. He said he had found her lost final draft.",
        "intense"
      ],
      [
        "tessa",
        "A facsimile. Your sister was not one of my authors. Vale asked me to manufacture a provenance convincing enough to secure your cooperation."
      ],
      [
        "iris",
        "He promised Celia a tribute, promised you publicity, and secretly scheduled an exposé of the person selling three dead writers’ work."
      ],
      [
        "tessa",
        "He was going to walk out alive and ruin me. Yes, I changed his precious soundtrack. But when I saw him, the detached handle was already under his body. Anyone could see that in my photograph.",
        "intense"
      ],
      [
        "iris",
        "Your photograph? Let us examine exactly what it could show.",
        "intense"
      ]
    ]
  },
  {
    "title": "A detail outside the frame",
    "who": "tessa",
    "target": 0,
    "proof": "report",
    "lines": [
      "My photograph showed the detached handle beneath Vale. That is how I knew where it was.",
      "I never touched him or the broken award.",
      "The coral thread could have come from any old stage costume."
    ],
    "press": [
      "The sealed recovery annex records whether the handle was visible before officers moved the body.",
      "Compare the concealed handle, the newly broken joint, and her scarf in the earlier photograph.",
      "The thread was inside a freshly broken joint, not loose on the stage. This supports the other evidence; colour alone does not identify a killer."
    ],
    "success": [
      [
        "iris",
        "The handle was concealed beneath Vale until police moved him at 8:12. Your photograph cannot show it. The recovery annex was never given to witnesses.",
        "intense"
      ],
      [
        "tessa",
        "The… the angle of the mirror—",
        "intense"
      ],
      [
        "iris",
        "You invented a visible source for hidden knowledge. And a coral thread was trapped inside the fresh break. Your scarf was intact in the photograph taken before the real attack.",
        "intense"
      ],
      [
        "vera",
        "Knowledge alone is not a verdict. But the concealed detail, the fresh trace, your authenticated replacement cue and Vale’s planned exposure require an explanation."
      ],
      [
        "tessa",
        "He came back from the stairs laughing. Said the best review I ever wrote would be my own confession.",
        "intense"
      ],
      [
        "tessa",
        "I struck him with the award. He caught the handle and my scarf as he fell. The handle snapped beneath him. It was just before eight.",
        "intense"
      ],
      [
        "tessa",
        "Then I went to the press terminal. I used the rehearsal clip to make everyone hear Mara’s name at 8:02. Celia would press GO on schedule."
      ],
      [
        "iris",
        "The first dead body was a publicity stunt. The second was real. You hid the murder between an alibi photograph and a fake resurrection.",
        "intense"
      ],
      [
        "judge",
        "A murder disguised as a murder disguised as advertising. I require a recess from that sentence.",
        "intense"
      ],
      [
        "celia",
        "My sister’s play was never in his drawer at all. I helped sell a lie because I wanted her name on the poster.",
        "thought"
      ],
      [
        "mara",
        "And I thought the last thing he did was call for me.",
        "thought"
      ],
      [
        "iris",
        "He did not. That voice belonged to a rehearsal. You were never the person this story was about."
      ],
      [
        "vera",
        "The prosecution requests an investigation into Tessa Flash’s confession and the literary-estate fraud. The case against Mara Bell cannot stand."
      ],
      [
        "judge",
        "Mara Bell… NOT GUILTY.",
        "thought"
      ]
    ]
  }
];
const opening=[["iris","By morning, every newspaper had the same story: a director cried out, a crash followed, and a sound engineer was found holding a bloodied award."],["iris","My client, Mara Bell, had spent the night in a cell. She had asked for a lawyer. What she seemed to need first was someone who would let her finish a sentence."],["mara","They keep asking why Adrian shouted my name. I do not know. I was upstairs, listening to the show through headphones."],["iris","Tell me what you remember, not what you think they want explained."],["mara","The blackout was part of the opening scene. Then I heard him, and the crash. I ran down. He was on the floor behind the desk."],["iris","And the award?"],["mara","I picked it up by the base. It was beside him. I thought I could help, but I cannot even tell you how lifting it was supposed to help."],["iris","Shock does not always produce a sensible sequence of actions. We will establish the sequence of events instead."],["pip","The police have released the stage for our inspection. I used to work at the Royal; I can show you how the sound system fits together."],["mara","Celia is there, and Tessa has stayed to give her statement. Detective Ledger can explain the report. Ms. Flint said she would speak to you before the hearing."],["iris","Then we start with the people who were there, and the room they were in. We have a scene report in the court record. Everything else, we check for ourselves."],["pip","A voice, a weapon, and a time. Let’s find out whether those three things actually belong together."]];
const courtIntro=[['judge','The court is now in session for the trial of Mara Bell.'],['vera','The victim called the defendant’s name. She was then found holding the murder weapon. The evidence speaks clearly.'],['iris','Then I intend to listen very carefully.'],['judge','Detective Ledger, your testimony, please.']];
let state={mode:'title',stage:0,statement:0,hp:5,found:[],dialogue:[],cursor:0,after:'investigate',history:[],selected:'report'};
let sound=false, audio=new Audio(), currentTrack=-1, wantedTrack=0, loaded=new Set(), feedbackAfter=null;
audio.loop=true;audio.volume=.33;
function save(){if(state.mode==='title')return;try{localStorage.setItem(KEY,JSON.stringify(state));$('saveStatus').textContent='Progress saved';}catch{$('saveStatus').textContent='Saving unavailable';}}
function restore(){try{const x=JSON.parse(localStorage.getItem(KEY));if(!x||!['dialogue','investigate','cross','ending'].includes(x.mode)||!Number.isInteger(x.stage)||x.stage<0||x.stage>=trials.length||!Array.isArray(x.found)||!Array.isArray(x.dialogue)||!Array.isArray(x.history))return null;
x.found=[...new Set(x.found.filter(id=>clues.some(c=>c.id===id)))];x.hp=Number.isInteger(x.hp)&&x.hp>0&&x.hp<=5?x.hp:5;x.statement=Number.isInteger(x.statement)&&x.statement>=0&&x.statement<trials[x.stage].lines.length?x.statement:0;
if(x.mode==='dialogue'&&(!Number.isInteger(x.cursor)||x.cursor<0||x.cursor>=x.dialogue.length||!['cross','investigate','ending'].includes(x.after)||!x.dialogue.every(d=>Array.isArray(d)&&cast[d[0]]&&typeof d[1]==='string')))return null;
x.history=x.history.filter(h=>h&&typeof h.who==='string'&&typeof h.line==='string').slice(-100);x.optionalSeen=Array.isArray(x.optionalSeen)?[...new Set(x.optionalSeen.filter(id=>optionalScenes.some(s=>s.id===id)))]:[];if(x.optionalReturn){const r=x.optionalReturn;if(x.mode!=='dialogue'||!['investigate','cross','ending'].includes(r.mode)||!optionalScenes.some(s=>s.id===r.id)&&!clues.some(c=>c.id===r.id)||!Number.isInteger(r.statement)||r.statement<0||r.statement>=trials[x.stage].lines.length)return null;}if(!['stage','booth','talk','court','ending'].includes(x.notesGroup)||x.mode==='dialogue')x.notesGroup=null;if(x.notesGroup){if(x.mode==='cross')x.notesGroup='court';else if(x.mode==='ending')x.notesGroup='ending';else if(!['stage','booth','talk'].includes(x.notesGroup))x.notesGroup='stage';}if(!interviewCast.includes(x.notesPerson))x.notesPerson='mara';return x;}catch{return null;}}
function track(n){wantedTrack=n;if(!sound)return;if(!window.MUSIC?.[n]){if(!loaded.has(n)){loaded.add(n);let s=document.createElement('script');s.src=`assets/music${n}.js`;s.onerror=()=>{loaded.delete(n);sound=false;$('music').textContent='♫ Retry sound'};document.body.append(s);}return;}if(currentTrack!==n){audio.pause();audio.src=MUSIC[n];currentTrack=n;}audio.play().catch(()=>{sound=false;$('music').textContent='♫ Click to play'});}
window.addEventListener('musicready',()=>track(wantedTrack));
function bg(name){$('backdrop').style.backgroundImage=`url("${ART[name]}")`;}
function expressionFor(id,line=''){
 if(id==='iris')return /disconnected since|contradicts you|console log says|police recovered|one more problem|intend to listen/i.test(line)?'intense':'thought';
 if(id==='mara')return /All that time/.test(line)?'thought':'intense';
 if(id==='celia')return state.stage>=3||/may have pressed|snapped|He stole/.test(line)?'intense':'thought';
 if(id==='tessa')return state.stage>=3?'intense':'neutral';
 if(id==='judge')return /NOT GUILTY/.test(line)?'thought':/moment of the attack/.test(line)?'intense':'neutral';
 if(id==='vera')return 'thought';return 'neutral';
}
function person(id,expression='neutral'){const c=cast[id]||cast.iris;const mood=['neutral','thought','intense'].includes(expression)?expression:'neutral';const asset=mood==='neutral'?c[2]:c[2]+'_'+mood;const key=id+':'+mood;$('speaker').textContent=c[0];$('role').textContent=c[1];$('portrait').style.backgroundImage=`url("${ART[asset]||ART[c[2]]}")`;$('portrait').style.backgroundPosition=`${c[3]*50}% top`;$('portrait').setAttribute('aria-label',c[0]+' — '+mood+' expression');if($('portrait').dataset.character!==key){$('portrait').classList.remove('portrait-arrive');void $('portrait').offsetWidth;$('portrait').classList.add('portrait-arrive')}$('portrait').dataset.character=key;$('portrait').dataset.expression=mood;}
function log(who,line){const last=state.history.at(-1);if(!last||last.line!==line)state.history.push({who:cast[who]?.[0]||who,line});if(state.history.length>100)state.history.shift();}
function speak(lines,after,music=null){state.dialogueTrack=music;state.mode='dialogue';state.dialogue=lines;state.cursor=0;state.after=after;render();}
function visible(id,yes){$(id).hidden=!yes;}
function render(){visible('notesScreen',false);const m=state.mode,cross=m==='cross',dialogue=m==='dialogue';updateExtrasUI();const surreal=(m==='ending'&&state.alternateEnding)||(dialogue&&state.optionalReturn?.id==='duck_tribunal'&&state.cursor>=3);document.body.classList.toggle('surreal',!!surreal);visible('duckReveal',!!surreal);visible('rewindAlternate',m==='ending'&&!!state.alternateEnding);document.body.classList.toggle('cross',cross);['title','investigate','ending'].forEach(id=>visible(id,m===id));visible('dialogue',cross||dialogue);visible('portrait',cross||dialogue);visible('crossControls',cross);visible('testimonyBadge',cross);visible('credibility',cross);visible('location',m!=='title'&&m!=='ending');$('record').disabled=m==='title';$('location').textContent=m==='investigate'||(dialogue&&state.after==='investigate')?'Theatre Royal · Before the hearing':'District Court · Courtroom No. 3';
 if(state.notesGroup&&['investigate','cross','ending'].includes(m)){
 ['investigate','ending','dialogue','portrait','crossControls','testimonyBadge','credibility','location','extras','duckReveal'].forEach(id=>visible(id,false));
 visible('notesScreen',true);document.body.classList.remove('cross','surreal');bg(state.notesGroup==='booth'?'booth':m==='investigate'?'stage':'courtroom');track(m==='investigate'?0:1);drawNotes();$('objective').textContent='Examine the scene · Choose a topic · Esc to return';save();return;
 }
 if(m==='title'){bg('stage');track(0);$('resume').hidden=!restore();$('chapter').textContent='CASE 01 — TURNABOUT ON CUE';$('objective').textContent='Find the truth behind the performance.';return;}
 if(m==='investigate'){bg('stage');track(0);$('toCourt').disabled=false;$('objective').textContent='Theatre Royal · Examine the rooms and interview the people involved';}
 if(dialogue){const [who,line,expression]=state.dialogue[state.cursor]||opening[0];person(who,expression||expressionFor(who,line));if(surreal)visible('portrait',false);if(surreal&&who==='judge'){$('speaker').textContent='The Honourable Quack';$('role').textContent='Presiding waterfowl';}$('line').textContent=line;log(who,line);$('next').hidden=false;$('hint').textContent='Enter or Space to continue';if(state.optionalReturn){bg(state.scene);track(state.dialogueTrack??0);$('location').textContent=''+(state.optionalReturn.group==='booth'?'Sound booth':state.optionalReturn.mode==='investigate'?'Theatre Royal':'District Court');$('hint').textContent='Enter to continue · Return when you are ready';}else if(state.after==='investigate'){bg(state.scene||'stage');track(0)}else {bg('courtroom');track(state.dialogueTrack??(state.after==='ending'?3:state.stage>=2?3:1))}$('objective').textContent='Listen carefully. Every detail may matter.';}
 if(cross){const t=trials[state.stage];bg('courtroom');track(state.stage>=2?3:1);person(t.who,t.who==='tessa'&&state.stage>=3?'intense':t.who==='celia'?'thought':'neutral');$('line').textContent='“'+t.lines[state.statement]+'”';log(t.who,t.lines[state.statement]);$('next').hidden=true;$('hint').textContent='Press for details. Present evidence on the statement it contradicts.';$('testimonyTitle').textContent=t.title;$('statementCount').textContent=`STATEMENT ${state.statement+1} / ${t.lines.length}`;$('credibility').textContent='◆'.repeat(state.hp)+'◇'.repeat(5-state.hp);$('objective').textContent='Find the contradiction · ← → browse · P press · E present';$('chapter').textContent=`CASE 01 — CROSS-EXAMINATION ${state.stage+1}${state.stage===trials.length-1?' · FINAL CONTRADICTION':''}`;}
 if(m==='ending'){const alt=!!state.alternateEnding;const section=$('ending');section.querySelector('.eyebrow').textContent=alt?'ALTERNATE ENDING · 01 / THE QUACKENING':'CASE CLOSED';section.querySelector('h1').textContent=alt?'All rise. All quack.':'Not guilty.';section.querySelector('p').textContent=alt?'The verdict was never about you. It was about the breadcrumbs.':'The truth finally has the stage.';$('chapter').textContent=alt?'CASE 01 — THE QUACKENING':'CASE 01 — CASE CLOSED';bg('courtroom');track(alt?3:0);$('endingText').textContent=alt?'The theatre unfolds into a lily pad. Celia becomes Minister of Crumbs. Vera prosecutes the concept of dry land. Mara finally gets her quiet afternoon, although she is now a lighthouse. You are appointed a small but respected pond. CASE ADJOURNED UNTIL THE NEXT MIGRATION.':'Mara is free. Tessa’s confession opens a murder investigation and a spectacular literary-fraud inquiry. Celia brings her sister’s real, unfinished pages out of storage; the Royal will perform them under the right name. Pip bans resurrection cues from all future productions. The judge orders a coffee.';$('objective').textContent=alt?'Alternative ending discovered · Rewind to continue the original case':'Turnabout on Cue · Complete';}

 save();}
function begin(){state={mode:'dialogue',stage:0,statement:0,hp:5,found:[],dialogue:opening,cursor:0,after:'investigate',history:[],selected:'report'};sound=true;$('music').textContent='♫ Sound on';render();}
function advance(){if(state.mode!=='dialogue')return;if(++state.cursor>=state.dialogue.length){if(state.optionalReturn){finishOptional(true);return;}state.mode=state.after;if(state.mode==='cross')state.statement=0;}render();}
const investigationDialogue=[[["iris","The stage microphone is unplugged. Was that part of the show?"],["pip","Feedback, according to Mara’s signed slip. Disconnected at 7:55."],["iris","Then how did an audience hear Vale at 8:02?"],["pip","The speakers could still play recordings. Disconnecting a microphone only removes that live input."],["iris","This attached publicity schedule is stranger: “8:03 — return of the author.”"],["pip","A man who had already arrived apparently intended to arrive again. Theatre."]],[["iris","One door to the booth. No other exit?"],["mara","None. Celia sent me upstairs at 7:56. I stayed until I heard the shout."],["pip","The continuous footage confirms that. Both clocks have been checked."],["iris","Who is that on the lower landing?"],["pip","Vale. At 7:59:10. Face visible, white mug, bow tie. Back towards the stage at 7:59:22."],["mara","He always took coffee before a show. Even when everyone else was rushing."],["iris","Keep that sequence. It tells us more than a single still image."]],[["tessa","My photograph is an embarrassment. Naturally, everyone wants the original."],["iris","The mirror behind you shows Vale lying beside the desk."],["tessa","At 7:58. The police verified the timestamp. I was watching the lens."],["pip","An excellent composition. The desk hides almost everything except the body and the award."],["iris","A body is not necessarily a dead body. Let us record what the image shows and leave the diagnosis open."],["tessa","You have the original. Please do not turn a critic into a photographer as well."]],[["iris","Cue 17B: a manual GO from stage left at 8:02."],["pip","But the approved file was thunder. At 8:00:20 someone replaced it with the rehearsal shout and a crash."],["iris","Does the audit identify who?"],["pip","Tessa’s personal press key, terminal P1. The confirmation photograph shows her at the keyboard. Celia could press GO, but could not edit files from her station."],["iris","And cue 18?"],["pip","Cancelled when the performance was stopped. “RESURRECTION / THE THREE DEAD AUTHORS.” Three literary estates, one bank account belonging to Tessa Flash. There is a slide attached to the export."],["iris","Take the complete export. We need the approved cue, its replacement, and the cancelled finale in the record."]]];
function examine(i){state.notesGroup=null;const c=clues[i];if(!state.found.includes(c.id))state.found.push(c.id);state.optionalReturn={mode:'investigate',statement:state.statement,scene:state.scene||'stage',group:c.bg,id:c.id};state.scene=c.bg;speak([...investigationDialogue[i],['iris',evidence.find(e=>e.id===c.id).name+' added to the court record.']],'investigate');}
function step(d){if(state.mode!=='cross')return;state.statement=(state.statement+d+trials[state.stage].lines.length)%trials[state.stage].lines.length;render();}
function modal(title,html,kicker='CASE 01'){ $('modalTitle').textContent=title;$('modalKicker').textContent=kicker;$('modalBody').innerHTML=html;if(!$('modal').open)$('modal').showModal();}
function feedback(title,text,callback=null){feedbackAfter=callback;modal(title,'<p id="feedbackText"></p><button id="feedbackOK" class="primary">Continue →</button>');$('feedbackText').textContent=text;$('feedbackOK').onclick=()=>{$('modal').close();};}
$('modal').addEventListener('close',()=>{if(feedbackAfter){let f=feedbackAfter;feedbackAfter=null;f();}});
function press(){if(state.mode!=='cross')return;const t=trials[state.stage];feedback('Hold it!',t.press[state.statement]);}
const evidenceNotes={
report:{label:'RECOVERY • 20:12',alt:'Brass theatre award, broken side handle and police recovery folder.',points:[['Broken attachment',64,49,'A side handle has snapped away from the award. This is separate from its solid base.'],['Recovered handle',75,76,'Police recovered this detached handle beneath Vale’s body at 8:12. It was concealed from all witnesses. The sealed annex was supplied only to the court and counsel.'],['Fingerprint record',15,44,'Mara’s fingerprints are on the base. A coral thread was caught inside the newly broken handle joint; the trace supports the other evidence but is not an identification by itself.']]},
mic:{label:'SERVICE • 19:55',alt:'Unplugged stage audio cable beside a patch panel and service slip.',points:[['Unplugged connector',44,57,'The stage microphone was disconnected at 7:55. It could not carry a live voice at 8:02.'],['Service entry',73,81,'Mara signed the maintenance slip. The auditorium playback speakers remained connected.']]},
alibi:{label:'CAMERA 02 • 19:56–20:03',alt:'Security view of the corridor outside the sound booth.',points:[['Only entrance',70,25,'Mara stays upstairs from 7:56 to 8:03. The continuous recording also shows Vale alive on the lower landing at 7:59:10, returning towards the stage at 7:59:22.']]},
photo:{label:'VERIFIED CAPTURE • 19:58',alt:'Tessa’s selfie with Vale collapsed beside his desk in the mirror reflection.',points:[['Mirror reflection',77,48,'Vale lies motionless at 7:58. The photograph proves his pose, not his death; compare the continuous corridor footage.'],['Award on the floor',65,62,'The award lies beside Vale. The detached handle cannot be seen. Tessa’s scarf is intact at this point; the sealed recovery annex records a later trace.']]},
log:{label:'CUE 17B • 20:02:00',alt:'Stage-manager playback console with a GO button and cue monitor.',points:[['Manual trigger',49,54,'The log records a manual GO at 8:02:00 from the stage-manager console, not an automatic cue.'],['Playback file',27,24,'The audit records Tessa’s authenticated replacement at 8:00:20, confirmed by the terminal photograph. The cancelled 8:03 slide exposes three fictional literary estates paid into her account.']]}
};
function evidencePicture(id){return window.ART?.['evidence_'+id]||'';}
function inspectEvidence(id,present){const e=evidence.find(x=>x.id===id),note=evidenceNotes[id];modal(e.name,'<button id="backToRecord">← Back to record</button><div class="inspection"><img id="inspectionImage"><span class="capture-label"></span><div id="detailMarkers"></div></div><p id="inspectionNote" aria-live="polite">Select a numbered detail, or use Tab and Enter to inspect it.</p>','EXAMINE EVIDENCE');$('inspectionImage').src=evidencePicture(id);$('inspectionImage').alt=note.alt;$('modalBody').querySelector('.capture-label').textContent=note.label;note.points.forEach(([label,x,y,text],i)=>{let b=document.createElement('button');b.className='detail-marker';b.style.left=x+'%';b.style.top=y+'%';b.textContent=i+1;b.setAttribute('aria-label',label);b.onclick=()=>{$('inspectionNote').textContent=label+' — '+text;};$('detailMarkers').append(b)});$('backToRecord').onclick=()=>record(present);$('backToRecord').focus();}
function record(present=false){const available=evidence.filter(e=>e.id==='report'||state.found.includes(e.id));if(!available.find(e=>e.id===state.selected))state.selected='report';modal(present?'Present evidence':'Court record','<div class="evidence-grid"><div id="evidenceList" class="evidence-list"></div><div id="evidenceDetail" class="evidence-detail"></div></div>',present?'CHOOSE THE EVIDENCE THAT CONTRADICTS THIS STATEMENT':'EVIDENCE • SELECT AN ITEM TO INSPECT');function select(id){state.selected=id;const e=available.find(x=>x.id===id),note=evidenceNotes[id];$('evidenceList').replaceChildren();available.forEach(x=>{let b=document.createElement('button'),img=document.createElement('img');img.src=evidencePicture(x.id);img.alt='';b.append(img,document.createTextNode(x.name));b.className=x.id===id?'selected':'';b.setAttribute('aria-pressed',String(x.id===id));b.onclick=()=>select(x.id);$('evidenceList').append(b)});const d=$('evidenceDetail');d.innerHTML='<span class="tag"></span><h3></h3><button class="evidence-preview" aria-label="Inspect evidence image"><img><span class="capture-label"></span><span class="inspect-caption">Inspect details ↗</span></button><p></p><div class="evidence-actions"></div>';d.querySelector('.tag').textContent=e.tag;d.querySelector('h3').textContent=e.name;d.querySelector('img').src=evidencePicture(id);d.querySelector('img').alt=note.alt;d.querySelector('.capture-label').textContent=note.label;d.querySelector('.evidence-preview').onclick=()=>inspectEvidence(id,present);d.querySelector('p').textContent=e.text;if(present){let b=document.createElement('button');b.className='primary';b.textContent='Present this evidence →';b.onclick=()=>submit(id);d.querySelector('.evidence-actions').append(b)}}select(state.selected);}
function submit(id){if(state.mode!=='cross')return;const t=trials[state.stage];if(state.statement===t.target&&id===t.proof){$('modal').close();$('burst').classList.remove('show');void $('burst').offsetWidth;$('burst').classList.add('show');track(2);const end=state.stage===trials.length-1;if(!end)state.stage++;state.hp=Math.min(5,state.hp+1);speak(t.success,end?'ending':'cross',end?3:2);}else{state.hp--;save();if(state.hp<=0){feedback('Take a breath. Rebuild the argument.','The court grants a short recess. Review the record, then retry this testimony with restored credibility.',()=>{state.hp=5;state.statement=0;render()})}else feedback('That does not contradict this statement.','You lose one point of credibility. Try pressing the witness for a more precise claim, then match it with a detail in your evidence.',render);}}
$('rewindAlternate').onclick=rewindAlternate;
$('extras').onclick=()=>openExtras();$('exploreStage').onclick=()=>openExtras('stage');$('exploreBooth').onclick=()=>openExtras('booth');$('talkPeople').onclick=()=>openExtras('talk');$('leaveAside').onclick=()=>finishOptional(false);
$('start').onclick=()=>{if(!restore()){begin();return;}modal('Start a new case?','<p>This replaces the saved playthrough in this browser.</p><button id="newCaseConfirm" class="primary">Start new case</button> <button id="keepCase">Keep my save</button>');$('newCaseConfirm').onclick=()=>{$('modal').close();begin()};$('keepCase').onclick=()=>$('modal').close();};$('resume').onclick=()=>{const s=restore();if(s){state=s;render()}};$('next').onclick=advance;$('toCourt').onclick=()=>{if(state.found.length===4)speak(courtIntro,'cross');else feedback('Before the hearing','Pip checks the file. “We have not finished documenting the scene. Let’s take another look around both rooms before we leave.”')};$('prev').onclick=()=>step(-1);$('forward').onclick=()=>step(1);$('press').onclick=press;$('present').onclick=()=>record(true);$('record').onclick=()=>record(false);$('close').onclick=()=>$('modal').close();$('restart').onclick=()=>{state.mode='title';render()};$('caseMenu').onclick=()=>{if(state.mode==='title')return;save();state.mode='title';render()};$('music').onclick=()=>{sound=!sound;$('music').textContent=sound?'♫ Sound on':'♫ Sound off';if(sound)track(wantedTrack);else audio.pause()};$('fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen()}catch{feedback('Fullscreen unavailable','Your browser could not enter fullscreen. You can continue in this window.')}};
$('help').onclick=()=>modal('How to play','<p><b>Investigate</b> the theatre and sound booth, examine objects, and interview the people involved. Discoveries are added to the court record.</p><p><b>Interviews</b> lets you choose a person and a topic. You can revisit conversations, return to the rooms, and speak with people during the hearing and after the verdict.</p><p>During testimony, use <b>← / →</b> to change statements. Press <b>P</b> to ask for more detail. Press <b>E</b> to present evidence that contradicts the current statement.</p><p><b>Enter / Space:</b> advance dialogue. <b>Tab:</b> open the court record when the scene is focused. <b>Esc:</b> close a panel.</p><p>Wrong evidence costs credibility. At zero, retry the testimony. Progress saves automatically in this browser.</p><p>Original cast, story, art and synthesized music. Unofficial fan project, not affiliated with Capcom.</p>');
$('history').onclick=()=>{modal('Transcript','<div class="transcript"></div>');let list=$('modalBody').firstChild;state.history.forEach(x=>{let p=document.createElement('p'),b=document.createElement('b');b.textContent=x.who+': ';p.append(b,document.createTextNode(x.line));list.append(p)})};
document.addEventListener('keydown',e=>{if($('modal').open||e.altKey||e.ctrlKey||e.metaKey)return;if(state.notesGroup&&state.mode!=='title'){if(e.key==='Escape'){e.preventDefault();closeNotes()}return;}const focused=e.target.closest('button,a,input,select,textarea');if(e.key==='Tab'){if(!focused&&state.mode!=='title'){e.preventDefault();record(false)}return}if(focused&&(e.key==='Enter'||e.key===' '))return;if(e.key==='Enter'||e.key===' '){e.preventDefault();advance()}else if(state.mode==='cross'){if(e.key==='ArrowLeft'){e.preventDefault();step(-1)}else if(e.key==='ArrowRight'){e.preventDefault();step(1)}else if(e.key.toLowerCase()==='p')press();else if(e.key.toLowerCase()==='e')record(true)}});
render();

