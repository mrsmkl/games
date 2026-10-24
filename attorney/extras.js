'use strict';
// Optional scenes never add required evidence, change credibility or advance a trial.
const optionalScenes=[
{id:'ghostlight',group:'stage',name:'The ghost light',x:81,y:39,lines:[['iris','One lamp, and an entire empty theatre. Is someone still rehearsing?','thought'],['pip','Ghost light. They leave it on so nobody walks off the stage in the dark.','neutral'],['iris','I was hoping for a theatrical explanation.','thought'],['pip','The theatrical explanation is ghosts. The insurance explanation is stairs.','thought']]},
{id:'curtains',group:'stage',name:'Velvet curtains',x:90,y:22,lines:[['iris','These curtains must weigh more than my entire office.','thought'],['pip','And they still move more smoothly than your filing cabinet.','thought'],['iris','The lower drawer has a system.','intense'],['pip','Yes. It only opens when you apologise to it.','thought']]},
{id:'mirror',group:'stage',name:'The gold mirror',x:31,y:39,lines:[['iris','From here, the mirror makes the room look twice as large.','thought'],['pip','Set design. Give an audience one room and convince them there is another behind it.','neutral'],['iris','A useful trick. Until the second room shows something the first one tried to hide.','thought']]},
{id:'desk',group:'stage',name:'The director’s desk',x:61,y:58,lines:[['iris','Every drawer has a little brass label. None of them says “miscellaneous”.','thought'],['pip','Directors prefer “creative development”.','thought'],['iris','That is what I am calling my lower drawer from now on.','neutral'],['pip','It still needs an apology.','thought']]},
{id:'seats',group:'stage',name:'Empty audience',x:42,y:88,lines:[['iris','It feels different with nobody watching.','thought'],['pip','Mara always said the best sound check is an empty room. You can hear what the building wants to do.','neutral'],['iris','And what does this one want?','thought'],['pip','For somebody to finish the show.','thought']]},
{id:'spotlight',group:'stage',name:'A pool of light',x:63,y:24,lines:[['pip','Stand in that light and the whole audience looks dark.','neutral'],['iris','So the person everyone can see may see the least.','thought'],['pip','You are going to use that in court, aren’t you?','thought'],['iris','Only if I can make it sound less rehearsed.','neutral']]},
{id:'patchbay',group:'booth',name:'Patch bay',x:9,y:34,lines:[['iris','I count approximately a thousand ways to plug the wrong thing in.','thought'],['pip','Colour coding. Labels. And never trusting whoever says they will remember.','neutral'],['iris','That last rule seems broadly useful.','thought'],['pip','It is why I put dates on your coffee.','thought']]},
{id:'headphones',group:'booth',name:'Worn headphones',x:81,y:61,lines:[['mara','The left cushion is splitting. I kept meaning to replace it.','neutral'],['iris','But it was comfortable.','thought'],['mara','It sounded familiar. You learn what is wrong with a room by hearing it through something you know.','thought'],['iris','Then we will keep listening through your version of events.','thought']]},
{id:'plans',group:'booth',name:'Pinned stage plans',x:21,y:21,lines:[['pip','Three versions of the same set. The desk moves every time.','neutral'],['iris','A carefully planned production?','thought'],['pip','A director who discovered sightlines two days before opening.','thought'],['iris','I have met judges with the same relationship to calendars.','neutral']]},
{id:'stool',group:'booth',name:'The sound engineer’s stool',x:31,y:73,lines:[['iris','This stool has one polished patch and no backrest.','thought'],['mara','You don’t sit still during a performance. Not if you are listening properly.','neutral'],['iris','I spend most of my working day standing too.','neutral'],['mara','Then I hope your shoes are kinder than mine.','thought']]},
{id:'mara_first',group:'talk',name:'Mara · First night backstage',lines:[['iris','How did you start working here?','thought'],['mara','I volunteered to carry cables. Someone handed me a headset and never asked for it back.','thought'],['mara','During my first show I missed a thunder cue. An actor stamped his foot and everyone applauded.','neutral'],['iris','A theatre that forgives a late thunderstorm can survive hearing the truth.','thought']]},
{id:'mara_future',group:'talk',name:'Mara · After the hearing',lines:[['mara','Everyone keeps asking what I will do if I am cleared.','intense'],['iris','You don’t owe anyone a five-year plan today.','thought'],['mara','I would like to go somewhere without a headset. Just for an afternoon.','thought'],['iris','Then that is the plan. One quiet afternoon.','neutral']]},
{id:'pip_work',group:'talk',name:'Pip · Why leave the theatre?',lines:[['iris','You still know every cable in this building. Why did you leave?','thought'],['pip','I got tired of being asked to make bad decisions sound better.','neutral'],['iris','And you chose a law office?','thought'],['pip','I said I was tired. I did not say I had thought it through.','thought']]},
{id:'iris_pen',group:'talk',name:'Pip · The fountain-pen hairpin',lines:[['pip','Does that pen in your hair actually write?','thought'],['iris','It was my first mentor’s. She told me to keep something sharp near my head.','neutral'],['pip','For thinking?','thought'],['iris','For signing the invoice before a grateful client leaves.','thought']]},
{id:'celia_order',group:'talk',name:'Celia · Keeping the show together',lines:[['iris','You seem to know where everything belongs.','thought'],['celia','Someone has to. The audience remembers the person in the spotlight, not the person who got them there.','thought'],['iris','Does that bother you?','thought'],['celia','Only when they start believing the spotlight made itself.','thought']]},
{id:'tessa_review',group:'talk',name:'Tessa · A kinder review',lines:[['tessa','People think critics enjoy a bad evening. I bought a ticket too, you know.','neutral'],['iris','Have you ever changed your mind about a performance?','thought'],['tessa','Once. I read an old review and realised I had described my own bad day.','thought'],['iris','Then there is hope for all of us who wrote something too confidently.','thought']]},
{id:'court_0',group:'court',stage:0,name:'Pip · Before the first question',lines:[['iris','My hands have decided this is an excellent time to forget how paper works.','thought'],['pip','Put the file down. Breathe. Ask one question, not the whole case.','neutral'],['iris','And if the answer is not what I expect?','thought'],['pip','Then we will finally have learned something.','thought']]},
{id:'court_1',group:'court',stage:1,name:'Hank · Getting it right',lines:[['hank','I wrote “certain” in my notebook. I should have written “reported”.','thought'],['iris','You can correct it.','neutral'],['hank','I know. I just wish correcting a word could give someone back the night they spent in a cell.','thought'],['iris','It cannot. But getting the next word right still matters.','thought']]},
{id:'court_2',group:'court',stage:2,name:'Vera · What the evidence owes us',lines:[['vera','You are looking at me as though I resent the correction.','thought'],['iris','Most people dislike losing an argument.','thought'],['vera','An argument is replaceable. A person’s freedom is not. Bring me something better than my theory.','neutral'],['iris','I intend to.','intense']]},
{id:'court_3',group:'court',stage:3,name:'Pip · One detail left',lines:[['pip','You have gone very quiet.','neutral'],['iris','I am trying not to turn a suspicion into a fact just because I want it to be one.','thought'],['pip','Good. We have already seen what happens when someone does that.','thought'],['iris','One claim. One exhibit. Let them meet.','intense']]},
{id:'duck_tribunal',group:'court',stage:3,name:'Judge · One last procedural question',lines:[['iris','One last question, Your Honour… does this court actually have jurisdiction?','thought'],['judge','At last. Someone has asked the correct question.','thought'],['pip','Why did all the clocks just stop?','intense'],['judge','This court has been a duck since 1847.','intense'],['iris','The court? Or the building?','intense'],['judge','Yes.','thought'],['vera','I withdraw my species.','intense'],['celia','Is this still about the murder?','intense'],['judge','Murder? Counsel, this is the annual inspection of bread.','neutral'],['pip','Then where is the jury?','intense'],['judge','Behind you.','intense'],['iris','Twelve ducks in powdered wigs rise from the gallery. The moon cracks open like an egg. Somewhere, a bailiff stamps my soul: APPROVED FOR POND USE.','intense']]},
{id:'after_mara',group:'ending',name:'Mara · A quiet afternoon',lines:[['mara','I keep waiting for someone to call me back into the courtroom.','thought'],['iris','You can leave whenever you like.','neutral'],['mara','Then I think I will walk. No music. No headphones.','thought'],['iris','One quiet afternoon. Just as planned.','thought']]},
{id:'after_vera',group:'ending',name:'Vera · Until next time',lines:[['vera','A sound argument, Ms. Quill. Eventually.','thought'],['iris','Was that a compliment?','neutral'],['vera','Do not make me repeat myself. The transcript will be available.','neutral'],['pip','I am framing it.','thought']]}
];
optionalScenes.push(...[
  {
    "id": "mara_night",
    "group": "talk",
    "character": "mara",
    "name": "The night of the performance",
    "lines": [
      [
        "iris",
        "Start before the blackout. What was your job that evening?",
        "neutral"
      ],
      [
        "mara",
        "Sound. The opening scene used a live microphone, then a storm recording. At 7:55 the microphone started feeding back, so I disconnected it and signed the service slip.",
        "thought"
      ],
      [
        "iris",
        "Did disconnecting it silence the whole theatre?",
        "neutral"
      ],
      [
        "mara",
        "No. Live microphones and recorded playback are separate inputs. The speakers still worked. Celia told me to monitor the upstairs equipment while she called the show from stage left.",
        "thought"
      ],
      [
        "iris",
        "Why did you come down?",
        "neutral"
      ],
      [
        "mara",
        "I heard Adrian call my name. I thought he needed me. Then I saw him beside the desk. The award was on the floor, and I lifted its base before I understood what had happened.",
        "thought"
      ],
      [
        "iris",
        "You have been telling everyone what you touched. We also need to establish when you could have been there.",
        "neutral"
      ]
    ]
  },
  {
    "id": "mara_vale",
    "group": "talk",
    "character": "mara",
    "name": "Working for Adrian Vale",
    "lines": [
      [
        "iris",
        "What was Adrian like to work for?",
        "neutral"
      ],
      [
        "mara",
        "He could hear one loose screw vibrating from the back row. When he praised a sound cue, you felt like you had built the weather.",
        "thought"
      ],
      [
        "mara",
        "Then he would change the cue five minutes before a show and ask why you had not anticipated him.",
        "thought"
      ],
      [
        "iris",
        "The police heard you had argued.",
        "neutral"
      ],
      [
        "mara",
        "He wanted the storm louder. I told him the equipment had limits. Half the staff heard us. That does not mean I wanted him dead.",
        "thought"
      ],
      [
        "iris",
        "No. But I want to hear the difficult parts from you, before the prosecutor puts them to me.",
        "neutral"
      ],
      [
        "mara",
        "Then write this down too: I loved doing this job. Even on the nights I hated working for him.",
        "thought"
      ]
    ]
  },
  {
    "id": "pip_building",
    "group": "talk",
    "character": "pip",
    "name": "How the theatre works",
    "lines": [
      [
        "iris",
        "Give me a tour without the technical vocabulary.",
        "neutral"
      ],
      [
        "pip",
        "Stage below. Sound booth above. One corridor in and out of that booth. The stage manager stands in the wing beside a separate console.",
        "neutral"
      ],
      [
        "iris",
        "Why have two places to control sound?",
        "neutral"
      ],
      [
        "pip",
        "The engineer prepares it; the stage manager calls the timing. During this show the upstairs desk was set to monitor only. You can listen there without being able to fire a cue.",
        "neutral"
      ],
      [
        "iris",
        "And a cue is…",
        "neutral"
      ],
      [
        "pip",
        "A saved instruction: play this file, change that light. A scheduled blackout is ordinary theatre. What someone does during it is another question.",
        "neutral"
      ],
      [
        "iris",
        "So we should follow each signal back to the place it actually came from.",
        "neutral"
      ]
    ]
  },
  {
    "id": "pip_history",
    "group": "talk",
    "character": "pip",
    "name": "Theatre Royal’s last opening",
    "lines": [
      [
        "iris",
        "There are more fresh posters than fresh paint here.",
        "neutral"
      ],
      [
        "pip",
        "Opening night money. The Royal needed a hit. Vale promised this play would bring the critics back.",
        "neutral"
      ],
      [
        "iris",
        "You sound as though you have heard the promise before.",
        "neutral"
      ],
      [
        "pip",
        "I worked here long enough to see a standing ovation followed by an unpaid invoice. People stay because the next show might be the one.",
        "neutral"
      ],
      [
        "iris",
        "Did you know Mara then?",
        "neutral"
      ],
      [
        "pip",
        "She repaired a headset I was about to throw away. Said a cracked casing was no reason to stop listening.",
        "neutral"
      ],
      [
        "iris",
        "Now we return the favour.",
        "neutral"
      ]
    ]
  },
  {
    "id": "celia_night",
    "group": "talk",
    "character": "celia",
    "name": "Calling the show",
    "lines": [
      [
        "iris",
        "Where were you before the opening?",
        "neutral"
      ],
      [
        "celia",
        "Stage left. The prompt book and cue console are there. If a scene begins without me, it begins by accident.",
        "neutral"
      ],
      [
        "iris",
        "You sent Mara to the upstairs booth.",
        "neutral"
      ],
      [
        "celia",
        "After the microphone trouble. Someone had to watch the levels. I could not abandon my station every time Adrian changed his mind.",
        "neutral"
      ],
      [
        "iris",
        "Was the blackout his idea?",
        "neutral"
      ],
      [
        "celia",
        "It was in the blocking. Darkness, a pause, then the opening image. An audience will tolerate darkness if it trusts you.",
        "neutral"
      ],
      [
        "iris",
        "And when the shout came?",
        "neutral"
      ],
      [
        "celia",
        "I kept the show together for as long as I could. You make that sound like a suspicious occupation.",
        "neutral"
      ]
    ]
  },
  {
    "id": "celia_sister",
    "group": "talk",
    "character": "celia",
    "name": "A life behind the curtain",
    "lines": [
      [
        "iris",
        "How long have you worked at the Royal?",
        "neutral"
      ],
      [
        "celia",
        "Long enough to recognise the building by the noises it makes when it is empty.",
        "neutral"
      ],
      [
        "iris",
        "Did you always want to manage a stage?",
        "neutral"
      ],
      [
        "celia",
        "My sister wanted to write for one. I preferred arranging things that could actually be made to happen.",
        "neutral"
      ],
      [
        "iris",
        "Does she still write?",
        "neutral"
      ],
      [
        "celia",
        "No. She died before she could see a proper production.",
        "neutral"
      ],
      [
        "iris",
        "I am sorry.",
        "neutral"
      ],
      [
        "celia",
        "People say that, and then the next cue arrives. Is there anything else you need?",
        "neutral"
      ]
    ]
  },
  {
    "id": "tessa_night",
    "group": "talk",
    "character": "tessa",
    "name": "The view from the front row",
    "lines": [
      [
        "iris",
        "What did you actually see before the blackout?",
        "neutral"
      ],
      [
        "tessa",
        "The set. That ridiculous gold mirror. Adrian at his desk earlier in the evening. Then I was checking the photograph I had taken of myself.",
        "neutral"
      ],
      [
        "iris",
        "Were you watching him continuously?",
        "neutral"
      ],
      [
        "tessa",
        "I am a critic, Ms. Quill, not a security camera.",
        "neutral"
      ],
      [
        "iris",
        "The difference may matter. May we examine the original photograph?",
        "neutral"
      ],
      [
        "tessa",
        "Yes. The original file, not the cropped version I intended to post. The police checked the camera time.",
        "neutral"
      ],
      [
        "iris",
        "Thank you. An image can preserve a detail neither of us thought to look for.",
        "neutral"
      ]
    ]
  },
  {
    "id": "tessa_play",
    "group": "talk",
    "character": "tessa",
    "name": "The play everyone came to see",
    "lines": [
      [
        "iris",
        "Why did this opening attract so much attention?",
        "neutral"
      ],
      [
        "tessa",
        "Vale was selling it as his great return: a family drama about a house whose rooms remember different versions of the same night.",
        "neutral"
      ],
      [
        "iris",
        "An awkward theme for this evening.",
        "neutral"
      ],
      [
        "tessa",
        "He spoke more about his genius than about the play. I had hoped the writing would be less exhausting than the publicity.",
        "neutral"
      ],
      [
        "iris",
        "Had you read it before?",
        "neutral"
      ],
      [
        "tessa",
        "Only a short press extract. A critic should distinguish what she has read from what she assumes she recognises.",
        "neutral"
      ],
      [
        "iris",
        "A useful rule for a witness too.",
        "neutral"
      ],
      [
        "tessa",
        "Yes. You may stop underlining it with your voice.",
        "neutral"
      ]
    ]
  },
  {
    "id": "hank_scene",
    "group": "talk",
    "character": "hank",
    "name": "Securing the crime scene",
    "lines": [
      [
        "iris",
        "Walk me through what happened when the police arrived.",
        "neutral"
      ],
      [
        "hank",
        "We separated the witnesses, secured the stage, and called the medical team. The report distinguishes observations from the estimated time of death.",
        "neutral"
      ],
      [
        "iris",
        "How precise is that estimate?",
        "neutral"
      ],
      [
        "hank",
        "A window: 7:50 to 8:05. The witnesses gave us 8:02 for the shout. Those are two different kinds of information.",
        "neutral"
      ],
      [
        "iris",
        "And the award?",
        "neutral"
      ],
      [
        "hank",
        "We recorded the base and the fingerprints. A detached handle was recovered beneath the body at 8:12. That detail stayed out of the public release.",
        "neutral"
      ],
      [
        "iris",
        "I will use the written report. A recollection of a report is how details get lost.",
        "neutral"
      ]
    ]
  },
  {
    "id": "hank_arrest",
    "group": "talk",
    "character": "hank",
    "name": "Why Mara was arrested",
    "lines": [
      [
        "iris",
        "You had more than fingerprints when you arrested Mara?",
        "neutral"
      ],
      [
        "hank",
        "Several witnesses heard her name, then found her with the award. We also learned she had argued with Vale.",
        "neutral"
      ],
      [
        "iris",
        "But each witness may be repeating the same sound. That is not several independent accounts of a blow.",
        "neutral"
      ],
      [
        "hank",
        "Fair criticism. We had a scene to preserve and frightened people to question. A quick explanation made them easier to organise.",
        "neutral"
      ],
      [
        "iris",
        "Easy explanations are hard to put down.",
        "neutral"
      ],
      [
        "hank",
        "Tell me about it. My notebook has permanent ink and very temporary conclusions.",
        "neutral"
      ],
      [
        "iris",
        "Then leave room in the margin.",
        "neutral"
      ]
    ]
  },
  {
    "id": "vera_case",
    "group": "talk",
    "character": "vera",
    "name": "The prosecution’s case",
    "lines": [
      [
        "vera",
        "Ms. Quill. I assume you came to discuss evidence, not negotiate a headline.",
        "neutral"
      ],
      [
        "iris",
        "I want to know which part of the accusation you consider strongest.",
        "neutral"
      ],
      [
        "vera",
        "The sequence. A dispute, a voice naming the defendant, a crash, and the defendant holding the weapon. Each observation supports the next.",
        "neutral"
      ],
      [
        "iris",
        "Provided they occurred in the order the witnesses think they did.",
        "neutral"
      ],
      [
        "vera",
        "Precisely. Challenge a link with evidence and I will examine it. Suggest that everyone is mistaken because your client is sympathetic, and I will object.",
        "neutral"
      ],
      [
        "iris",
        "You will have something concrete.",
        "neutral"
      ],
      [
        "vera",
        "Then we both have work to do.",
        "neutral"
      ]
    ]
  },
  {
    "id": "vera_method",
    "group": "talk",
    "character": "vera",
    "name": "What a trial is for",
    "lines": [
      [
        "iris",
        "Do you ever worry about walking into court with the wrong story?",
        "neutral"
      ],
      [
        "vera",
        "Every competent prosecutor should. Worry is useful if it makes you verify something.",
        "neutral"
      ],
      [
        "iris",
        "And if verification arrives halfway through a hearing?",
        "neutral"
      ],
      [
        "vera",
        "Then the argument changes. The charge is not a personal promise I must keep at someone else’s expense.",
        "neutral"
      ],
      [
        "iris",
        "You make that sound easy.",
        "neutral"
      ],
      [
        "vera",
        "I said what the job requires, not how it feels.",
        "neutral"
      ],
      [
        "iris",
        "For once, we agree before the judge has asked us to.",
        "neutral"
      ]
    ]
  }
]);
optionalScenes.forEach(s=>{s.day=s.group==='ending'?2:1;});
optionalScenes.find(s=>s.id==='duck_tribunal').stage=8;optionalScenes.find(s=>s.id==='duck_tribunal').day=2;
optionalScenes.find(s=>s.id==='after_vera').lines=[['vera','Your assistant left you a very carefully selected truth.','thought'],['iris','You made me keep reading.','thought'],['vera','You did the reading yourself. Do not make me repeat the compliment.','neutral']];
optionalScenes.push(...[{"id":"d2_mara_night","group":"talk","day":2,"character":"mara","name":"The night between hearings","lines":[["mara","I kept replaying Celia’s confession. I thought that meant I could stop being afraid.","thought"],["iris","It meant we had to test what she admitted. I should have said that more clearly.","thought"],["mara","Will you tell me if the answer changes again?","thought"],["iris","Before I promise you an ending. Yes.","thought"]]},{"id":"d2_mara_award","group":"talk","day":2,"character":"mara","name":"The award you picked up","lines":[["iris","Did the award feel heavy when you lifted it?","thought"],["mara","No. I thought I was shaking too hard to notice.","thought"],["iris","The lab found a hollow replica and a solid original.","thought"],["mara","He was on the floor, and I was holding a prop. I could not even tell which part of the room was real.","thought"]]},{"id":"d2_celia_confession","group":"talk","day":2,"character":"celia","name":"What you actually remember","lines":[["celia","I struck him. I will not pretend otherwise because a report gives me a way out.","thought"],["iris","We are separating what you did from what somebody else did later.","thought"],["celia","He fell so neatly. Behind the desk, away from me. Then the handle broke and I ran to my station.","thought"],["iris","Tell the court exactly that. No reconstructed ending.","thought"]]},{"id":"d2_celia_credit","group":"talk","day":2,"character":"celia","name":"Your sister’s name","lines":[["celia","He promised to put her name on the poster if I kept the opening running.","thought"],["iris","What happened before you struck him?","thought"],["celia","He called her unfinished pages worthless and said he could invent a better dead sister. I lost my temper.","thought"],["iris","His cruelty was real. So was your anger. Neither tells us who loaded the rig.","thought"]]},{"id":"d2_tessa_contract","group":"talk","day":2,"character":"tessa","name":"The publicity agreement","lines":[["tessa","I was hired to report a miracle: a director returning from the dead with three lost masterpieces.","thought"],["iris","You were hired to disguise advertising as criticism.","thought"],["tessa","Yes. There is no elegant way to say it. Pip handled the technical side and the estates.","thought"],["iris","The contract will be more useful than an elegant version.","thought"]]},{"id":"d2_tessa_upload","group":"talk","day":2,"character":"tessa","name":"The scream file","lines":[["iris","Why did you upload a recording naming Mara?","thought"],["tessa","Pip sent the file as the revised publicity cue. Vale had approved a fake death. I thought the name was part of that stunt.","thought"],["iris","You did not ask Mara whether she agreed to be part of it.","thought"],["tessa","No. I thought an explanation at 8:03 would make everything harmless. There was no explanation.","thought"]]},{"id":"d2_hank_lab","group":"talk","day":2,"character":"hank","name":"Correcting the inventory","lines":[["hank","The same shape and finish. One base, one detached handle. We assumed they belonged together.","thought"],["iris","And a third item under the scenery.","thought"],["hank","The solid original. It reached the lab in a separate bag. Matching the fracture surfaces exposed the mistake.","thought"],["iris","Put that correction in the record as plainly as you put the first conclusion.","thought"]]},{"id":"d2_hank_recorder","group":"talk","day":2,"character":"hank","name":"Why the second channel was late","lines":[["hank","The first export followed Mara’s route. Overnight the recorder team recovered the damaged index for the other channel.","thought"],["iris","Nobody changed the time stamps?","thought"],["hank","No. Both channels match the verified time signal. We kept the original storage and documented the recovery.","thought"],["iris","Then the surprise belongs to our theory, not to the clock.","thought"]]},{"id":"d2_vera_reopen","group":"talk","day":2,"character":"vera","name":"Reopening the apparent solution","lines":[["iris","You could have asked for a verdict after the confession.","thought"],["vera","With unsigned medical findings and an unfinished inventory? That would have been convenient, not complete.","thought"],["iris","I wanted it to be complete.","thought"],["vera","So did I. Wanting is not an evidentiary standard.","thought"]]},{"id":"d2_vera_estates","group":"talk","day":2,"character":"vera","name":"Three authors, one owner","lines":[["vera","The estates are paper companies, not the deceased authors advertised in the programme.","thought"],["iris","Tessa was the face. Who controlled them?","thought"],["vera","The bank-certified archive answers that. Read the ownership instructions alongside the rig revision.","thought"],["iris","A financial record and a stage cue. The strangest pair of documents I have ever compared.","thought"]]},{"id":"d2_pip_contract","group":"talk","day":2,"character":"pip","name":"Your name on the contract","lines":[["iris","Why did you not tell me you were the technical producer?","thought"],["pip","I thought Celia had turned a tasteless stunt into a murder. My freelance invoice would only confuse your defense.","thought"],["iris","You decided which facts I needed.","thought"],["pip","I helped you find the microphone slip. I helped you prove Mara was upstairs. Those facts have not changed.","thought"]]},{"id":"d2_pip_rig","group":"talk","day":2,"character":"pip","name":"The maintenance cabinet","lines":[["iris","The safety recorder places you at the cabinet at eight.","thought"],["pip","There was supposed to be a paper banner for the resurrection. I checked its release.","thought"],["iris","The recorded test load is rather heavy for paper.","thought"],["pip","The theatre reuses counterweights. You cannot read a whole mechanism from one number.","thought"]]},{"id":"d2_stage_desk","group":"stage","name":"The cleared desk","x":62,"y":58,"day":2,"lines":[["iris","Now that the scenery has been lifted, you can see the gap underneath.","thought"],["hank","That is where we recovered the solid award. The first photograph never showed this space.","thought"],["iris","A room can look familiar while still withholding half its contents.","thought"]]},{"id":"d2_stage_poster","group":"stage","name":"An unfinished poster","x":88,"y":25,"day":2,"lines":[["celia","There is a blank strip where my sister’s name was going to go.","thought"],["iris","Do not let them fill it with another invented author.","thought"],["celia","I will bring her own pages. Even if they are unfinished.","thought"]]},{"id":"d2_booth_chair","group":"booth","name":"Pip’s old work stool","x":31,"y":73,"day":2,"lines":[["iris","Yesterday Pip made a joke about this stool.","thought"],["mara","He knew where everything was. We all trusted people who knew where things were.","thought"],["iris","Knowing a room is not the same as telling the truth about it.","thought"]]},{"id":"d2_booth_labels","group":"booth","name":"Two sets of labels","x":12,"y":25,"day":2,"lines":[["hank","Audio on the front. Rig service inside.","thought"],["iris","Celia only saw the front panel.","thought"],["hank","The independent recorder is why the second set of instructions survived.","thought"]]},{"id":"d2_court_0","group":"court","stage":4,"day":2,"name":"Iris · A still image","lines":[["iris","Yesterday I treated the photograph like a death certificate. Today I will ask what it actually records.","thought"],["vera","Take your time, Ms. Quill. Then make the record precise.","thought"]]},{"id":"d2_court_1","group":"court","stage":5,"day":2,"name":"Iris · An admission","lines":[["iris","Celia confessed to a strike. I supplied the word “fatal”. That difference matters.","thought"],["vera","Take your time, Ms. Quill. Then make the record precise.","thought"]]},{"id":"d2_court_2","group":"court","stage":6,"day":2,"name":"Iris · The empty defense chair","lines":[["iris","I keep turning to ask Pip a question. I need to stop doing that.","thought"],["vera","Take your time, Ms. Quill. Then make the record precise.","thought"]]},{"id":"d2_court_3","group":"court","stage":7,"day":2,"name":"Iris · The second channel","lines":[["iris","The audio file explains what they heard. The isolated recorder explains what happened.","thought"],["vera","Take your time, Ms. Quill. Then make the record precise.","thought"]]},{"id":"d2_court_4","group":"court","stage":8,"day":2,"name":"Iris · An answer without a guide","lines":[["iris","The evidence does not need a reassuring voice beside me. It needs to be read.","thought"],["vera","Take your time, Ms. Quill. Then make the record precise.","thought"]]},{"id":"after_celia","day":2,"group":"ending","name":"Celia · Her real pages","lines":[["celia","My sister’s play ends halfway through an argument.","thought"],["iris","Then leave it unfinished. Under her own name.","thought"],["celia","That would be a very small opening night.","thought"],["iris","After this one, that sounds rather good.","neutral"]]}]);
const interviewCast=['mara','pip','celia','tessa','hank','vera'];
const interviewOwners={mara_first:'mara',mara_future:'mara',pip_work:'pip',iris_pen:'pip',celia_order:'celia',tessa_review:'tessa'};
let interviewPerson=null;
function extrasContext(){return state.mode==='cross'?'court':state.mode==='ending'?'ending':'investigate';}
function availableExtras(group){return optionalScenes.filter(s=>s.day===(state.day||1)&&(s.group===group||(group==='ending'&&s.id==='duck_tribunal'))&&(group!=='court'||s.stage===state.stage));}
function openExtras(group,character=null){
 const context=extrasContext();if(!['investigate','cross','ending'].includes(state.mode))return;
 group=context==='court'?'court':context==='ending'?'ending':(['stage','booth','talk'].includes(group)?group:'stage');
 state.notesGroup=group;if(character)state.notesPerson=character;render();$('notesTitle').focus();
}
function closeNotes(){state.notesGroup=null;render();$('extras').focus();}
const interviewRooms={mara:'booth',pip:'booth',celia:'stage',tessa:'stage',hank:'courtroom',vera:'courtroom'};
const interviewGreetings={mara:'Ask me anything. I want someone to understand what happened.',pip:'Where do you want to start? The people, the building, or the cables?',celia:'I can spare a moment. A theatre does not stop needing to be run.',tessa:'If you want my account, I would prefer to give it in my own words.',hank:'My notebook is open. Let’s make sure we get the details right.',vera:'You have my attention, Ms. Quill. What would you like to discuss?'};
function drawNotes(){
 const context=extrasContext(),group=state.notesGroup;
 if(group==='talk')interviewPerson=state.notesPerson||interviewPerson;
 state.optionalSeen=state.optionalSeen||[];
 const titles={stage:'Theatre stage',booth:'Sound booth',talk:'Interviews',court:'Courtroom conversations',ending:'Outside the courtroom'};
 $('notesScreen').className=group==='talk'?'interview-screen':'';
 $('notesScreen').style.backgroundImage='';
 $('notesTitle').textContent=titles[group];
 $('notesBack').textContent=context==='court'?'← Return to testimony':context==='ending'?'← Return to verdict':'← Return to investigation';
 ['extraTabs','interviewPeople','extraMap','extraList'].forEach(id=>$(id).replaceChildren());
 $('notesBack').onclick=closeNotes;
 if(context==='investigate'){[['stage','Theatre stage'],['booth','Sound booth'],['talk','Interviews']].forEach(([id,name])=>{const b=document.createElement('button');b.textContent=name;b.setAttribute('aria-pressed',String(id===group));b.onclick=()=>openExtras(id);$('extraTabs').append(b)})}
 let items=availableExtras(group);
 if(group==='talk'){
  if(!interviewCast.includes(interviewPerson))interviewPerson='mara';state.notesPerson=interviewPerson;
  const chooser=document.createElement('label');chooser.className='interview-picker';chooser.textContent='Interview';
  const select=document.createElement('select');select.setAttribute('aria-label','Choose a character to interview');
  interviewCast.forEach(id=>{const option=document.createElement('option');option.value=id;option.textContent=cast[id][0];select.append(option)});
  select.value=interviewPerson;select.onchange=()=>openExtras('talk',select.value);chooser.append(select);$('interviewPeople').append(chooser);
  interviewCast.forEach(id=>{const b=document.createElement('button');b.textContent=cast[id][0];b.setAttribute('aria-pressed',String(id===interviewPerson));b.onclick=()=>openExtras('talk',id);$('interviewPeople').append(b)});
  items=items.filter(s=>(s.character||interviewOwners[s.id])===interviewPerson);
  const intro=document.createElement('p');intro.className='interview-description';intro.textContent=cast[interviewPerson][0]+' · '+cast[interviewPerson][1];$('interviewPeople').append(intro);
 }
 const mapped=group==='stage'||group==='booth';
 if(mapped){
  const leads=clues.map((c,i)=>({...c,lead:i,x:c.x??[16,56,35,73][i],y:c.y??[68,39,65,39][i]})).filter(c=>c.bg===group&&c.day===(state.day||1));
  items=[...items.slice(0,2),...leads,...items.slice(2)];
 }
 $('extraMap').hidden=!(mapped||group==='talk');$('extraLayout').className=mapped?'mapped':group==='talk'?'interview-layout':'unmapped';
 if(group==='talk'){
  const c=cast[interviewPerson];
  $('notesTitle').textContent=c[0];
  $('notesScreen').style.backgroundImage='linear-gradient(90deg,#081923dd,#0c202a99),url("'+ART[interviewRooms[interviewPerson]]+'")';
  const portrait=document.createElement('div');portrait.className='interview-portrait';portrait.style.backgroundImage='url("'+ART[c[2]]+'")';portrait.style.backgroundPosition=(c[3]*50)+'% top';portrait.setAttribute('role','img');portrait.setAttribute('aria-label',c[0]);$('extraMap').append(portrait);
  const caption=document.createElement('div');caption.className='interview-caption';
  const role=document.createElement('p');role.className='eyebrow';role.textContent=c[1];caption.append(role);
  const quote=document.createElement('p');quote.textContent='“'+interviewGreetings[interviewPerson]+'”';caption.append(quote);$('extraMap').append(caption);
 }

 if(mapped){const img=document.createElement('img');img.src=ART[group];img.alt=titles[group]+' with inspection points';$('extraMap').append(img)}
 items.forEach((s,i)=>{
  const lead=Number.isInteger(s.lead),seen=lead?state.found.includes(s.id):state.optionalSeen.includes(s.id);
  const act=()=>{if(lead){examine(s.lead)}else startOptional(s.id,group)};
  const b=document.createElement('button');b.textContent=(seen?'✓ ':i+1+'. ')+s.name;b.onclick=act;$('extraList').append(b);
  if(mapped){const marker=document.createElement('button');marker.className='detail-marker';marker.textContent=seen?'✓':i+1;marker.style.left=s.x+'%';marker.style.top=s.y+'%';marker.setAttribute('aria-label','Inspect '+s.name);marker.onclick=act;$('extraMap').append(marker)}
 });
}
function startOptional(id,group){const scene=optionalScenes.find(x=>x.id===id);if(!scene||scene.day!==(state.day||1)||!['investigate','cross','ending'].includes(state.mode))return;state.optionalReturn={mode:state.mode,statement:state.statement,scene:state.scene||'stage',group,id,character:interviewPerson};state.scene=group==='booth'?'booth':group==='talk'?(interviewRooms[interviewPerson]||'stage'):group==='stage'?'stage':'courtroom';state.notesGroup=null;speak(scene.lines,state.optionalReturn.mode,state.optionalReturn.mode==='investigate'?0:1);}
function finishOptional(complete){const back=state.optionalReturn;if(!back)return;if(complete){state.optionalSeen=[...new Set([...(state.optionalSeen||[]),back.id])]}if(complete&&back.id==='duck_tribunal'){state.alternateReturn={mode:back.mode,stage:state.stage,statement:back.statement,hp:state.hp};state.alternateEnding=true;state.optionalReturn=null;state.mode='ending';render();return;}state.mode=back.mode;state.statement=back.statement;state.scene=back.scene;state.optionalReturn=null;render();openExtras(back.group,back.character);}
function updateExtrasUI(){const eligible=['investigate','cross','ending'].includes(state.mode);$('extras').hidden=!eligible||!!state.alternateEnding;$('explorePrompt').hidden=state.mode!=='investigate';$('leaveAside').hidden=!state.optionalReturn;$('extras').textContent=state.mode==='ending'?'After the verdict':state.mode==='cross'?'Quiet moment':'Explore & talk';}

function rewindAlternate(){if(!state.alternateEnding)return;const back=state.alternateReturn;state.stage=back&&Number.isInteger(back.stage)?back.stage:trials.length-1;state.statement=back&&Number.isInteger(back.statement)?back.statement:0;state.hp=back&&Number.isInteger(back.hp)?back.hp:5;state.alternateEnding=false;state.alternateReturn=null;state.mode=back?.mode==='ending'?'ending':'cross';state.scene='courtroom';render();}

