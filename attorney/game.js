'use strict';
const $=id=>document.getElementById(id), KEY='behind-curtain-one-performer-v5';
const cast={
  "iris": [
    "Iris Quill",
    "Defense attorney",
    "defense",
    0
  ],
  "pip": [
    "Pip Foley",
    "Assistant • former sound technician",
    "defense",
    1
  ],
  "mara": [
    "Mara Bell",
    "Defendant • sound engineer",
    "defense",
    2
  ],
  "vera": [
    "Vera Flint",
    "Prosecutor",
    "court",
    0
  ],
  "hank": [
    "Hank Ledger",
    "Detective",
    "court",
    1
  ],
  "judge": [
    "Judge",
    "District court",
    "court",
    2
  ],
  "celia": [
    "Celia Rook",
    "Stage manager",
    "theatre",
    0
  ],
  "tessa": [
    "Tessa Flash",
    "Theatre critic",
    "theatre",
    2
  ],
  "ghost": [
    "Adrian Vale’s ghost",
    "The final witness",
    "theatre",
    1
  ],
  "vale": [
    "Adrian Vale",
    "Director • also “Hank Ledger”",
    "theatre",
    1
  ]
};
const evidence=[
  {
    "id": "report",
    "name": "Scene report",
    "tag": "POLICE • EXHIBIT 01",
    "text": "Adrian Vale, theatre director, was found behind the desk after the 8:02 p.m. blackout. Preliminary opinion: death from a blow, with the apparent brass theatre award treated as the weapon. Full laboratory inventory pending. Clinical certification field: pending. The medical estimate is 7:50–8:05 p.m. Mara’s fingerprints are on the award’s base. Officers recovered a broken handle from underneath the body at 8:12 p.m., after securing the scene. Until recovery, the handle was concealed by the body. This recovery detail was withheld from public reports."
  },
  {
    "id": "mic",
    "name": "Microphone service slip",
    "tag": "THEATRE • EXHIBIT 02",
    "text": "7:55 p.m. — Stage microphone disconnected at the patch panel to stop feedback. Signed: Mara Bell. It remained unplugged until police secured the scene. The auditorium speakers were still connected to the playback console."
  },
  {
    "id": "alibi",
    "name": "Corridor camera",
    "tag": "SECURITY • EXHIBIT 03",
    "text": "Continuous corridor footage: Mara enters the upstairs sound booth at 7:56 p.m. and leaves at 8:03 p.m. There is no other exit. The camera clock was checked against the police time signal."
  },
  {
    "id": "photo",
    "name": "Tessa’s 7:58 photograph",
    "tag": "PHOTO • EXHIBIT 04",
    "text": "Original photograph, timestamp verified: 7:58 p.m. In the gold mirror behind Tessa, Vale is collapsed beside the desk. The award is already on the floor. The detached handle is not visible in this photograph. The original file timestamp was verified against the camera clock; the time is shown in the evidence overlay."
  },
  {
    "id": "log",
    "name": "Playback cue log",
    "tag": "CONSOLE • EXHIBIT 05",
    "text": "8:02:00 p.m. — Manual GO, cue 17B: VALE_REHEARSAL_EDIT.wav. Trigger source: stage-manager console, stage left. The upstairs booth was in monitor-only mode. The clip contains “Mara, put that down!” followed by a crash. In the unedited rehearsal, he was asking Mara to lower a speaker."
  },
  {
    "id": "camera2",
    "name": "Restored landing footage",
    "tag": "DAY 2 • CAMERA CONTINUATION",
    "art": "alibi",
    "text": "Recovered overnight from the recorder’s second channel. Synchronized with the booth footage: 7:59:10 — Vale crosses the lower landing alive, carrying coffee; 7:59:22 — returns towards stage. Mara remains in the upstairs booth until 8:03. At 8:01:40 Vale sits behind the stage desk. Recording continuity and his identity are independently verified."
  },
  {
    "id": "lab",
    "name": "Two-award laboratory report",
    "tag": "DAY 2 • CORRECTED FORENSICS",
    "art": "report",
    "text": "Overnight inventory separates two matching awards. A: hollow resin replica, brass paint, breakaway handle, Mara’s prints on base. B: solid brass original, recovered under desk scenery with blood and tissue; its broken handle lay beneath Vale. Preliminary scene labels had grouped A’s base and B’s handle as one object. The injury reconstruction describes a potentially fatal impact from above, not A’s light resin body. Separate trace material is consistent with a superficial injury from A. This is a materials and reconstruction report, not a clinical examination of a body. Both handles share the same moulded shape."
  },
  {
    "id": "packet",
    "name": "Publicity rehearsal packet",
    "tag": "DAY 2 • SEALED PRESS ARCHIVE",
    "art": "photo",
    "text": "Recovered from Tessa’s embargoed press folder overnight. Vale planned a fake death at 7:58 and an 8:03 resurrection to announce three supposedly rediscovered plays. He deliberately provoked Celia while a breakaway replica was on the desk, then played dead for Tessa’s photograph. Tessa agreed to publicize the stunt and uploaded the scream file supplied by Pip; Celia was promised a credit for her late sister. None received the rigging instructions. The signed publicity contract names Pip Foley as technical producer. Tessa admits the estates and provenance were fabricated marketing. The complete packet retains its old illusion diagrams and safety appendix."
  },
  {
    "id": "relay",
    "name": "Isolated rig safety recorder",
    "tag": "DAY 2 • HARDWARE AUDIT",
    "art": "log",
    "text": "Independent safety recorder, disconnected from the audio editor. At 8:00:31, Pip Foley’s personal service key enabled an undocumented relay on cue 17B; the booth camera shows him at the maintenance cabinet. His load test recorded 4.8 kg. At 8:02:00 Celia’s manual GO both played the scream and released that load directly over Vale’s desk. Celia’s console displayed AUDIO ONLY. The old public cue log did not include this isolated rig channel. The export preserves both actuator and interlock channels, including certificate references."
  },
  {
    "id": "ledger",
    "name": "Escrow instructions and cue revision",
    "tag": "DAY 2 • BANK-CERTIFIED ARCHIVE",
    "art": "report",
    "text": "The bank’s register extract identifies Pip Foley as registered owner of all three fictional literary estates; Tessa was a paid publicity front. Vale had scheduled an 8:03 projection exposing the estates and Pip’s diverted royalties. At 8:00:46 Pip signed revision R17: “Replace banner load with award B. Remove safety catch. Suppress relay label on operator display. Keep cue 18 cancelled.” The revision hash matches the isolated recorder. A confirmation photograph shows Pip approving R17. The escrow archive was immutable before the performance; police recovered it independently overnight. Original page folds and cross-referenced deed riders are preserved."
  }
];
const clues=[
  {
    "name": "Disconnected microphone",
    "id": "mic",
    "bg": "stage",
    "who": "pip",
    "line": "The speakers can play a recording even when the stage microphone is unplugged. Someone wanted an audience for a voice that wasn’t live.",
    "day": 1
  },
  {
    "name": "Upstairs sound booth",
    "id": "alibi",
    "bg": "booth",
    "who": "mara",
    "line": "Celia sent me upstairs at 7:56. I didn’t leave until after the scream. Please… I only picked up the award because I thought I could help.",
    "day": 1
  },
  {
    "name": "Critic’s photograph",
    "id": "photo",
    "bg": "stage",
    "who": "pip",
    "line": "Tessa was taking a selfie, but the mirror caught something else. Vale is already on the floor at 7:58. Keep that time in mind.",
    "day": 1
  },
  {
    "name": "Stage-manager console",
    "id": "log",
    "bg": "booth",
    "who": "pip",
    "line": "Cue 17B. A rehearsal recording, manually triggered at 8:02 from stage left. Mara’s booth couldn’t have sent that command.",
    "day": 1
  },
  {
    "name": "Recorder’s second channel",
    "id": "camera2",
    "bg": "booth",
    "who": "hank",
    "day": 2,
    "x": 28,
    "y": 35
  },
  {
    "name": "Reopened property inventory",
    "id": "lab",
    "bg": "stage",
    "who": "hank",
    "day": 2,
    "x": 65,
    "y": 70
  },
  {
    "name": "Embargoed press folder",
    "id": "packet",
    "bg": "stage",
    "who": "tessa",
    "day": 2,
    "x": 30,
    "y": 60
  },
  {
    "name": "Rig safety cabinet",
    "id": "relay",
    "bg": "booth",
    "who": "hank",
    "day": 2,
    "x": 12,
    "y": 40
  },
  {
    "name": "Certified escrow archive",
    "id": "ledger",
    "bg": "booth",
    "who": "vera",
    "day": 2,
    "x": 72,
    "y": 60
  }
];
const trials=[
  {
    "title": "A voice in the darkness",
    "who": "hank",
    "target": 1,
    "proof": "mic",
    "lines": [
      "At 8:02, witnesses heard Vale shout, “Mara, put that down!”",
      "His voice came over the stage microphone. He was certainly alive at 8:02.",
      "A crash followed. When the lights returned, Mara was holding the award.",
      "Her fingerprints match the base. That is why we arrested her."
    ],
    "press": [
      "Several audience members agree on the time. The blackout was a scheduled lighting cue.",
      "The detective assumed the microphone was live. Is there a document that tests that assumption?",
      "Mara says she picked it up afterward. Holding a weapon is not the same as using it.",
      "Fingerprints tell us who touched an object, but rarely when."
    ],
    "success": [
      [
        "hank",
        "Wait—the microphone was unplugged? Then I wrote down the time of the sound as though it were the time of the crime.",
        "intense"
      ],
      [
        "iris",
        "The stage microphone had been disconnected since 7:55. That voice could not have been transmitted live!"
      ],
      [
        "vera",
        "The speakers were still working. A recording is possible. But possibility does not establish the time of death."
      ],
      [
        "judge",
        "Then we need something more reliable than a voice in the dark. Call the next witness."
      ]
    ],
    "day": 1
  },
  {
    "title": "The last sighting",
    "who": "tessa",
    "target": 2,
    "proof": "photo",
    "lines": [
      "I was in the front row before the performance. A dreadful view of the understudies.",
      "At 7:58 I took a photograph of myself with the gold mirror behind me.",
      "Vale was still standing beside his desk at that time. I am absolutely certain.",
      "Then came the blackout, that awful shout, and the crash."
    ],
    "press": [
      "An excellent view of the stage, then. Including the mirror beside the desk.",
      "The original file and the checked camera clock agree. The photograph really is from 7:58.",
      "Is her memory consistent with what her own camera captured? Look at the photograph in the record.",
      "The recording tells us when the sound played, not when the blow landed."
    ],
    "success": [
      [
        "iris",
        "Your photograph contradicts you. In the mirror, Vale is already collapsed, with the award beside him. At 7:58."
      ],
      [
        "tessa",
        "Oh. I… remembered him from earlier. I never looked at the reflection."
      ],
      [
        "iris",
        "Mara was upstairs from 7:56 to 8:03. The false scream drew her down to a crime that had already happened."
      ],
      [
        "vera",
        "Then whoever controlled that scream controlled our timeline. I call the stage manager."
      ]
    ],
    "day": 1
  },
  {
    "title": "The person behind the cue",
    "who": "celia",
    "target": 1,
    "proof": "log",
    "lines": [
      "I run a precise theatre. Cues are planned weeks in advance.",
      "The 8:02 sound was automatic. Only Mara’s upstairs booth could control it.",
      "I stayed at my stage-left station throughout the blackout.",
      "When the lights returned, I saw Mara gripping that broken handle."
    ],
    "press": [
      "The blackout was planned. Was the scream on the original cue sheet?",
      "Automatic, she says. Compare that claim with the trigger source in the console log.",
      "That puts her beside the stage-manager console. A convenient place to control the sound.",
      "The broken handle? Notice exactly what she claims to have seen."
    ],
    "success": [
      [
        "iris",
        "The console log says MANUAL GO. From your station, Ms. Rook. Mara’s booth was in monitor-only mode."
      ],
      [
        "celia",
        "I… may have pressed it. An accidental cue. That does not make me a murderer."
      ],
      [
        "vera",
        "The defense has proved a false timeline, but not who struck the blow.",
        "intense"
      ],
      [
        "iris",
        "There is one more problem. Ms. Rook said she saw Mara gripping the broken handle."
      ]
    ],
    "day": 1
  },
  {
    "title": "A detail she could not have seen",
    "who": "celia",
    "target": 0,
    "proof": "report",
    "lines": [
      "I saw the broken handle in Mara’s hand from my station. I never went near Vale’s body.",
      "Anyone could have noticed it when the lights came back.",
      "I only triggered a sound cue. You cannot prove anything else."
    ],
    "press": [
      "Which exhibit records where the police actually recovered the handle? A photograph cannot show something hidden under the body.",
      "The handle is hidden under Vale. That detail was never disclosed during testimony.",
      "The recording, the false account, and the hidden handle must be considered together."
    ],
    "success": [
      [
        "iris",
        "The police recovered the handle from underneath Vale’s body at 8:12. It remained concealed until they moved him. Mara held the base. From your station, you could not have seen that broken piece."
      ],
      [
        "celia",
        "He… he snapped it when he grabbed my wrist. I never meant—"
      ],
      [
        "judge",
        "Ms. Rook. Are you describing the moment of the attack?"
      ],
      [
        "celia",
        "He stole my sister’s play. Every line. I confronted him before the curtain… I struck him. Then I ran the scheduled cue instead of stopping the show. I wanted a few more minutes before anyone found him."
      ],
      [
        "mara",
        "All that time, I thought I should have come down sooner."
      ],
      [
        "iris",
        "The sound was a lie, Mara. Your story wasn’t."
      ],
      [
        "vera",
        "The confession changes the case. But the signed medical report and full property inventory are due tomorrow. I request an overnight adjournment before the court enters a verdict."
      ],
      [
        "judge",
        "Granted. Ms. Rook will remain available for questioning. Ms. Bell, the court will resume tomorrow morning."
      ],
      [
        "mara",
        "One more night?",
        "thought"
      ],
      [
        "iris",
        "One more night. I will be here when the doors open.",
        "thought"
      ]
    ],
    "day": 1
  },
  {
    "title": "The photograph’s second meaning",
    "who": "tessa",
    "target": 1,
    "proof": "camera2",
    "lines": [
      "Yesterday I accepted that the photograph showed Vale’s death.",
      "After 7:58 he could not possibly have walked anywhere.",
      "Celia confessed to striking him before that photograph."
    ],
    "press": [
      "A photograph records a pose. Yesterday we attached a diagnosis.",
      "Compare the recovered second channel with the photograph’s time.",
      "A confession to an action is not proof of every consequence."
    ],
    "success": [
      [
        "iris",
        "The recovered footage shows Vale walking with coffee at 7:59:10. He survived whatever happened before your photograph.",
        "intense"
      ],
      [
        "judge",
        "The deceased took an interval?"
      ],
      [
        "tessa",
        "Yes. He told me he intended to get up again. I concealed the publicity arrangement because it looked monstrous once he really died.",
        "thought"
      ],
      [
        "vera",
        "Mara remained upstairs until 8:03. Her exclusion now rests on continuous footage, not a supposed time of death from a still image."
      ],
      [
        "iris",
        "But Celia struck him. What exactly did she strike him with?"
      ]
    ],
    "day": 2
  },
  {
    "title": "The confession and the wrong weapon",
    "who": "celia",
    "target": 0,
    "proof": "lab",
    "lines": [
      "The award I swung was the same solid brass object that killed him.",
      "Its handle broke. That is why I knew what the concealed piece looked like.",
      "I lied about seeing Mara hold it because I was afraid to admit my own attack."
    ],
    "press": [
      "The overnight inventory separates two objects previously labelled as one.",
      "Two replicas can share a handle shape. Which base carried Mara’s prints?",
      "That explains the lie. It does not decide which injury was fatal."
    ],
    "success": [
      [
        "iris",
        "You swung award A: a hollow resin replica. Award B, the solid brass original, caused the fatal injury from above.",
        "intense"
      ],
      [
        "hank",
        "We grouped a base from one award with a handle from the other. The full inventory and laboratory work corrected that preliminary assumption.",
        "thought"
      ],
      [
        "celia",
        "He gave me something that would break, made me think I had killed him, and then went for coffee?",
        "intense"
      ],
      [
        "iris",
        "He exploited a real confrontation for a staged death. You are responsible for striking him, but the evidence does not make that strike the murder."
      ],
      [
        "vera",
        "And someone later put the real award above the desk. Who designed the rest of this performance?"
      ]
    ],
    "day": 2
  },
  {
    "title": "The critic’s second job",
    "who": "tessa",
    "target": 1,
    "proof": "packet",
    "lines": [
      "I agreed to publish an outrageous opening-night photograph.",
      "Celia designed the entire stunt. No outside technician was involved.",
      "I uploaded the scream but never went near the rigging."
    ],
    "press": [
      "The embargoed folder describes the photograph and the later resurrection.",
      "Look at the technical producer named in the signed publicity contract.",
      "The audio upload and the mechanical preparation are different actions."
    ],
    "success": [
      [
        "iris",
        "The signed packet names Pip Foley as technical producer. My assistant.",
        "intense"
      ],
      [
        "pip",
        "I freelanced for the show. That does not mean I killed anyone. I helped you get an innocent woman out of this.",
        "thought"
      ],
      [
        "tessa",
        "He supplied the sound edit. I was meant to sell a resurrection and three rediscovered masterpieces. I did not know about anything above the desk."
      ],
      [
        "celia",
        "And my sister’s lost play?"
      ],
      [
        "tessa",
        "Invented provenance. I am sorry. The handwriting was copied. You were promised the credit to keep you working.",
        "thought"
      ],
      [
        "iris",
        "Pip. You knew the show’s design yesterday, while I was relying on you to explain its evidence."
      ],
      [
        "pip",
        "I thought the stunt had gone wrong. I wanted the person who actually pressed GO to answer for it.",
        "thought"
      ],
      [
        "vera",
        "Mr. Foley, leave the defense bench. You will answer as a witness."
      ]
    ],
    "day": 2
  },
  {
    "title": "What the GO button really did",
    "who": "pip",
    "target": 0,
    "proof": "relay",
    "lines": [
      "Cue 17B only played sound. It could not release a physical object.",
      "Celia chose when to press GO. I was away from the stage at 8:02.",
      "Any rig setting left in the cabinet was merely old theatre machinery."
    ],
    "press": [
      "The audio log was only one channel. Read the independent safety recorder.",
      "A person can prepare a mechanism before another person unknowingly triggers it.",
      "The recorder timestamps a new service-key operation at 8:00:31."
    ],
    "success": [
      [
        "iris",
        "The isolated recorder links cue 17B to a release above the desk. You enabled it at 8:00:31; the maintenance camera and your service key identify you.",
        "intense"
      ],
      [
        "hank",
        "The load test measured 4.8 kilograms. Exactly the mass of the brass award."
      ],
      [
        "pip",
        "The release was for a paper banner. Someone must have substituted the load after I tested it.",
        "intense"
      ],
      [
        "iris",
        "You tested the weight of the award, then concealed the relay from Celia’s display. Her button played the alibi and released the weapon together."
      ],
      [
        "vera",
        "We have the mechanism and its operator. The remaining question is whether this was an error or an intended substitution."
      ],
      [
        "pip",
        "I never authorized an award in that rig. You cannot produce an instruction that says I did.",
        "intense"
      ]
    ],
    "day": 2
  },
  {
    "title": "The producer’s final revision",
    "who": "pip",
    "target": 0,
    "proof": "ledger",
    "lines": [
      "I never ordered the brass award substituted or the safety catch removed.",
      "I was only a technician. The fake literary estates belonged to Tessa.",
      "Helping the defense would make no sense if I had planned the murder."
    ],
    "press": [
      "The bank archive contains an authenticated, immutable cue revision, not a recollection.",
      "Follow beneficial ownership rather than the name on the publicity poster.",
      "A helpful guide can also steer which apparent solution the defense reaches."
    ],
    "success": [
      [
        "iris",
        "Revision R17: replace the banner with award B, remove the catch, suppress the relay label, cancel cue 18. Signed by you at 8:00:46. The photograph and hardware hash confirm it.",
        "intense"
      ],
      [
        "pip",
        "Vale was going to take everything. The royalties, the estates, the story I built for him.",
        "intense"
      ],
      [
        "vera",
        "The register names you. Tessa sold the fraud, and the royalties went through your accounts. Vale intended to expose the arrangement."
      ],
      [
        "pip",
        "He wanted to resurrect himself over my public ruin. So I made sure he stayed dead.",
        "intense"
      ],
      [
        "pip",
        "He sat on his mark at 8:01:40, waiting for the blackout. Celia pressed GO at 8:02. The scream covered the fall. Nobody looked up."
      ],
      [
        "iris",
        "Celia’s real anger supplied a false murder. Tessa’s staged photograph supplied a false time. Mara’s name supplied a false suspect. And you supplied us with a convincing false solution.",
        "intense"
      ],
      [
        "pip",
        "I knew which exhibits you would need. I thought you would stop after the confession.",
        "thought"
      ],
      [
        "iris",
        "Yesterday I did. Today we checked the parts you did not show us."
      ],
      [
        "judge",
        "We have the confession. Detective Ledger, arrange the witness’s detention."
      ],
      [
        "hank",
        "Before that, I need to check one last detail in the publicity packet. Excuse me.",
        "thought"
      ],
      [
        "iris",
        "Hank leaves his notebook on the table and goes through the service door. The lights dim. A pale figure appears beyond the witness rail.",
        "thought"
      ],
      [
        "ghost",
        "I had hoped to hear my own obituary without interrupting. You have made that rather difficult.",
        "thought"
      ],
      [
        "mara",
        "Adrian?",
        "intense"
      ],
      [
        "ghost",
        "You remembered my temper. My vanity. Some of you remembered things I deserved to be ashamed of. But you have been speaking as though there was nothing else."
      ],
      [
        "ghost",
        "The caretaker’s daughter used to think stage directions were a test she kept failing. We spent a winter reading them together after rehearsals. She stopped being afraid of the small print.",
        "thought"
      ],
      [
        "tessa",
        "You never mentioned that in an interview."
      ],
      [
        "ghost",
        "It was her achievement. Not a story for my press release."
      ],
      [
        "celia",
        "That does not erase what you did to my sister.",
        "thought"
      ],
      [
        "ghost",
        "No. It does not. I am asking you to remember a whole person, not to declare him good.",
        "thought"
      ],
      [
        "judge",
        "We do not accept testimony from apparitions.",
        "intense"
      ],
      [
        "ghost",
        "Then question the words, not the lighting. Every document you need is already in the court record."
      ],
      [
        "iris",
        "No new exhibits. I open the same pages again.",
        "thought"
      ]
    ],
    "day": 2
  },
  {
    "day": 2,
    "title": "The witness who should not be here",
    "who": "ghost",
    "target": 1,
    "proof": "relay",
    "lines": [
      "I will speak only about what was recorded before that opening night ended.",
      "Pip’s service key alone removed every restraint on the award.",
      "The scream and the falling load shared the same GO command."
    ],
    "press": [
      "No supernatural sight is needed to read an existing export.",
      "The recorder has an interlock channel as well as an actuator channel. Inspect the full document.",
      "That establishes the trigger. Does it identify every person who made the release possible?"
    ],
    "success": [
      [
        "iris",
        "The reverse-side channel register records a separate safety interlock. Pip enabled the actuator, but the restraint remained engaged until 8:01:56.",
        "intense"
      ],
      [
        "ghost",
        "And the later authorization?"
      ],
      [
        "iris",
        "Certificate C-03. The certificate directory is already attached to the same export: a judicial arts-trust terminal assigned to this bench. The hardware photograph confirms its operator."
      ],
      [
        "judge",
        "That certificate only opens the secondary latch. It cannot move the counterweight unless—",
        "intense"
      ],
      [
        "vera",
        "Unless the actuator is armed. You have just described why both approvals were necessary."
      ],
      [
        "judge",
        "I am reading the same document as counsel. That is not an admission."
      ],
      [
        "iris",
        "Then let us read the document that explains your interest in it."
      ],
      [
        "ghost",
        "I will continue. I am in no hurry.",
        "thought"
      ]
    ]
  },
  {
    "day": 2,
    "title": "The name under the fold",
    "who": "ghost",
    "target": 0,
    "proof": "ledger",
    "lines": [
      "Pip’s name on the register means nobody else could receive the estate proceeds.",
      "The register and the deed rider were certified together before the performance.",
      "The court already holds every page needed to trace that arrangement."
    ],
    "press": [
      "The register names a registered owner. The retained deed rider defines who benefits.",
      "Check the folded reverse side; a certified summary is not the whole instrument.",
      "No new account record has arrived. Re-examine what is already in the court record."
    ],
    "success": [
      [
        "iris",
        "The folded rider identifies Pip as nominee, not sole beneficiary. The proceeds are payable to the presiding judge’s private arts trust. Certificate C-03 authorizes its execution.",
        "intense"
      ],
      [
        "judge",
        "The trust preserves neglected works. It was not created for my personal enrichment.",
        "intense"
      ],
      [
        "ghost",
        "I discovered the rider. At 8:03 I intended to show who owned the supposedly dead writers."
      ],
      [
        "iris",
        "Pip wanted his role concealed. You wanted the beneficiary concealed. You allowed the armed rig to release, then presided over the trial of the woman chosen to take the blame.",
        "intense"
      ],
      [
        "judge",
        "Vale, that is impossible. You could not have survived the release. I watched the authorization complete—",
        "intense"
      ],
      [
        "vera",
        "Already what?"
      ],
      [
        "judge",
        "Put out the reflector. Whoever is wearing that face is standing beside the service door.",
        "intense"
      ],
      [
        "iris",
        "A reflector? That is a remarkably practical objection to a haunting."
      ],
      [
        "ghost",
        "One final point, Ms. Quill. Then we can put an end to this performance."
      ]
    ]
  },
  {
    "day": 2,
    "title": "Two names, one performer",
    "who": "ghost",
    "target": 1,
    "proof": "packet",
    "lines": [
      "No exhibit has been added since I appeared.",
      "Adrian Vale and Hank Ledger must be two different men.",
      "If the figure before you is a performance, the authenticated records still remain."
    ],
    "press": [
      "The illusion and costume appendices have been in the publicity packet throughout.",
      "Read the performer credit on the retained costume sheet, not only the role name.",
      "Expose the performance without throwing away the independently authenticated records."
    ],
    "success": [
      [
        "iris",
        "The packet contains an old costume sheet: role, Detective Hank Ledger. Performer, Adrian Vale. The build includes a padded coat, beard pieces, a false hairline and a different voice.",
        "intense"
      ],
      [
        "ghost",
        "One performer. Two names. The detective was a role I wrote years before this opening.",
        "thought"
      ],
      [
        "iris",
        "And the angled pane in the illusion diagram reflects a living performer. There is no ghost."
      ],
      [
        "iris",
        "The reflection disappears. Adrian Vale steps through the service door carrying Hank’s coat and beard. He puts the notebook back in his pocket.",
        "thought"
      ],
      [
        "vale",
        "I was Hank when you met him. I was Hank when I brought you the reports. There never was a second man waiting somewhere to change places with me.",
        "thought"
      ],
      [
        "mara",
        "Then whose body did I find?",
        "intense"
      ],
      [
        "vale",
        "The lifelike rehearsal figure from the packet’s substitution sequence. I slipped through the desk’s escape hatch at the start of the blackout. The replacement took my place. The real award fell onto it."
      ],
      [
        "iris",
        "And the blood? The laboratory report?"
      ],
      [
        "vale",
        "My shallow injury from the earlier strike was real. It left traces on the stage and the replica. The laboratory examined the objects and reconstructed a potentially fatal impact. It never certified that I had died."
      ],
      [
        "iris",
        "The scene report’s clinical certificate was still pending. We turned an assumed death and an injury reconstruction into a certainty.",
        "thought"
      ],
      [
        "vale",
        "I saw the real award lodged in the figure when I returned. Someone had tried to kill me. As Hank, I had the figure moved as sealed scenic material and claimed the medical team had taken the body. That second claim was a lie. There was no body to examine."
      ],
      [
        "vera",
        "I learned his identity during the overnight inventory. Tessa helped prepare the reflection and the clerk arranged the lighting. Iris was not told. We wanted the authorizing officer to respond in open court."
      ],
      [
        "iris",
        "You let Mara spend another night believing she faced a murder charge.",
        "intense"
      ],
      [
        "vale",
        "Yes. Fear made me choose the investigation over her. I can tell you why. I cannot make that fair.",
        "thought"
      ],
      [
        "mara",
        "Then do not ask this to be a happy reunion.",
        "intense"
      ],
      [
        "iris",
        "The performance explains the witness. It does not prove the accusation. The authenticated terminal photograph, the two rig channels and the certified rider do that."
      ],
      [
        "vale",
        "Pip armed the trap. Your authorization removed its last restraint at 8:01:56. You intended the award to strike me. The recorder identifies your terminal and your face."
      ],
      [
        "judge",
        "You should have been on your mark. You were on the camera. I watched the release complete.",
        "intense"
      ],
      [
        "pip",
        "The figure… I thought I had watched you die.",
        "intense"
      ],
      [
        "iris",
        "You both intended to kill him. His escape changes the outcome of the attack, not what you did."
      ],
      [
        "vera",
        "I request that you stand down. The attempted killing, fraud, impersonation and handling of this prosecution must all be reviewed independently—including my part in it."
      ],
      [
        "celia",
        "I meant what I said about you. The bad parts.",
        "thought"
      ],
      [
        "vale",
        "You were entitled to. Your sister’s pages should be heard under her own name. No invention. No publicity miracle.",
        "thought"
      ],
      [
        "iris",
        "For the first time, he waits for an answer instead of supplying the next line.",
        "thought"
      ],
      [
        "vale",
        "And the story about the child was true. It did not need a ghost. I simply did not know how to ask you to hear it as myself.",
        "thought"
      ],
      [
        "iris",
        "An independent duty judge takes over. There has been no death, and Mara took no part in the attempted killing. The charge against her is dismissed.",
        "thought"
      ],
      [
        "mara",
        "I am taking my quiet afternoon. Alone.",
        "thought"
      ],
      [
        "vale",
        "For once, I will stay offstage.",
        "thought"
      ]
    ]
  }
];
const opening=[
  [
    "iris",
    "By morning, every newspaper had the same story: a director cried out, a crash followed, and a sound engineer was found holding a bloodied award."
  ],
  [
    "iris",
    "My client, Mara Bell, had spent the night in a cell. She had asked for a lawyer. What she seemed to need first was someone who would let her finish a sentence."
  ],
  [
    "mara",
    "They keep asking why Adrian shouted my name. I do not know. I was upstairs, listening to the show through headphones."
  ],
  [
    "iris",
    "Tell me what you remember, not what you think they want explained."
  ],
  [
    "mara",
    "The blackout was part of the opening scene. Then I heard him, and the crash. I ran down. He was on the floor behind the desk."
  ],
  [
    "iris",
    "And the award?"
  ],
  [
    "mara",
    "I picked it up by the base. It was beside him. I thought I could help, but I cannot even tell you how lifting it was supposed to help."
  ],
  [
    "iris",
    "Shock does not always produce a sensible sequence of actions. We will establish the sequence of events instead."
  ],
  [
    "pip",
    "The police have released the stage for our inspection. I used to work at the Royal; I can show you how the sound system fits together."
  ],
  [
    "mara",
    "Celia is there, and Tessa has stayed to give her statement. Detective Ledger can explain the report. Ms. Flint said she would speak to you before the hearing."
  ],
  [
    "iris",
    "Then we start with the people who were there, and the room they were in. We have a scene report in the court record. Everything else, we check for ourselves."
  ],
  [
    "pip",
    "A voice, a weapon, and a time. Let’s find out whether those three things actually belong together."
  ]
];
const courtIntro=[
  [
    "judge",
    "The court is now in session for the trial of Mara Bell."
  ],
  [
    "vera",
    "The victim called the defendant’s name. She was then found holding the murder weapon. The evidence speaks clearly."
  ],
  [
    "iris",
    "Then I intend to listen very carefully."
  ],
  [
    "judge",
    "Detective Ledger, your testimony, please."
  ]
];
const day2Opening=[["iris","Day 2. 8:15 a.m. I expected a signed report and a verdict. Detective Ledger was waiting outside with two property bags."],["hank","We made a mistake in the first inventory. There are two awards. The lab has separated them, and the recorder team recovered a second camera channel."],["iris","Does this change Celia’s confession?"],["hank","It changes what her confession proves. You need to see the material before court."],["vera","I have reopened access to the theatre. Tessa’s embargoed folder and a bank-certified archive arrived overnight as well. Everyone will be questioned again."],["mara","Yesterday you said we had the answer.","thought"],["iris","Yesterday we had a confession. Today we make sure it answers the right question.","thought"],["pip","I can help sort the records. We should be careful not to lose sight of what Celia admitted.","neutral"],["iris","We will check every part of it. Start with the new material in the stage and booth."]];
const day2Intro=[["judge","Day two. Before a verdict, the court will hear the newly recovered evidence."],["vera","The prosecution no longer treats yesterday’s reconstruction as established. A confession must agree with the physical record."],["iris","We begin with the photograph. Its timestamp was correct. Our interpretation was not."],["judge","Ms. Flash. Return to the witness stand."]];
function activeClues(){return clues.filter(c=>c.day===(state.day||1));}
function evidenceFor(id){return evidence.find(e=>e.id===id);}

let state={day:1,mode:'title',stage:0,statement:0,hp:5,found:[],dialogue:[],cursor:0,after:'investigate',history:[],selected:'report'};
let sound=false, audio=new Audio(), currentTrack=-1, wantedTrack=0, loaded=new Set(), feedbackAfter=null;
audio.loop=true;audio.volume=.33;
function save(){if(state.mode==='title')return;try{localStorage.setItem(KEY,JSON.stringify(state));$('saveStatus').textContent='Progress saved';}catch{$('saveStatus').textContent='Saving unavailable';}}
function restore(){try{const x=JSON.parse(localStorage.getItem(KEY));if(!x||!['dialogue','investigate','cross','ending','intermission'].includes(x.mode)||!Number.isInteger(x.stage)||x.stage<0||x.stage>=trials.length||!Array.isArray(x.found)||!Array.isArray(x.dialogue)||!Array.isArray(x.history))return null;
x.day=x.day===2?2:1;if(x.day===1&&x.stage>3&&x.mode!=='intermission'&&!(x.mode==='dialogue'&&x.after==='intermission'))return null;if(x.day===2&&x.stage<4)return null;
x.found=[...new Set(x.found.filter(id=>clues.some(c=>c.id===id&&c.day<=x.day)))];x.hp=Number.isInteger(x.hp)&&x.hp>0&&x.hp<=5?x.hp:5;x.statement=Number.isInteger(x.statement)&&x.statement>=0&&x.statement<trials[x.stage].lines.length?x.statement:0;
if(x.mode==='dialogue'&&(!Number.isInteger(x.cursor)||x.cursor<0||x.cursor>=x.dialogue.length||!['cross','investigate','ending','intermission'].includes(x.after)||!x.dialogue.every(d=>Array.isArray(d)&&cast[d[0]]&&typeof d[1]==='string')))return null;
x.readDetails=Array.isArray(x.readDetails)?x.readDetails.filter(id=>['relay','ledger','packet','report'].includes(id)):[];x.history=x.history.filter(h=>h&&typeof h.who==='string'&&typeof h.line==='string').slice(-100);x.optionalSeen=Array.isArray(x.optionalSeen)?[...new Set(x.optionalSeen.filter(id=>optionalScenes.some(s=>s.id===id)))]:[];if(x.optionalReturn){const r=x.optionalReturn;if(x.mode!=='dialogue'||!['investigate','cross','ending'].includes(r.mode)||!optionalScenes.some(s=>s.id===r.id)&&!clues.some(c=>c.id===r.id)||!Number.isInteger(r.statement)||r.statement<0||r.statement>=trials[x.stage].lines.length)return null;}if(!['stage','booth','talk','court','ending'].includes(x.notesGroup)||x.mode==='dialogue')x.notesGroup=null;if(x.notesGroup){if(x.mode==='cross')x.notesGroup='court';else if(x.mode==='ending')x.notesGroup='ending';else if(!['stage','booth','talk'].includes(x.notesGroup))x.notesGroup='stage';}if(!interviewCast.includes(x.notesPerson))x.notesPerson='mara';return x;}catch{return null;}}
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
function person(id,expression='neutral'){$('portrait').classList.toggle('ghost-portrait',id==='ghost');const c=cast[id]||cast.iris;const mood=['neutral','thought','intense'].includes(expression)?expression:'neutral';const asset=mood==='neutral'?c[2]:c[2]+'_'+mood;const key=id+':'+mood;$('speaker').textContent=c[0];$('role').textContent=c[1];$('portrait').style.backgroundImage=`url("${ART[asset]||ART[c[2]]}")`;$('portrait').style.backgroundPosition=`${c[3]*50}% top`;$('portrait').setAttribute('aria-label',c[0]+' — '+mood+' expression');if($('portrait').dataset.character!==key){$('portrait').classList.remove('portrait-arrive');void $('portrait').offsetWidth;$('portrait').classList.add('portrait-arrive')}$('portrait').dataset.character=key;$('portrait').dataset.expression=mood;}
function log(who,line){const last=state.history.at(-1);if(!last||last.line!==line)state.history.push({who:cast[who]?.[0]||who,line});if(state.history.length>100)state.history.shift();}
function speak(lines,after,music=null){state.dialogueTrack=music;state.mode='dialogue';state.dialogue=lines;state.cursor=0;state.after=after;render();}
function visible(id,yes){$(id).hidden=!yes;}
function render(){document.body.classList.toggle('ghost-hearing',state.mode==='cross'&&trials[state.stage]?.who==='ghost'||state.mode==='dialogue'&&state.dialogue[state.cursor]?.[0]==='ghost');visible('notesScreen',false);$('chapter').textContent='DAY '+(state.day||1)+' — TURNABOUT ON CUE';const m=state.mode,cross=m==='cross',dialogue=m==='dialogue';updateExtrasUI();const surreal=(m==='ending'&&state.alternateEnding)||(dialogue&&state.optionalReturn?.id==='duck_tribunal'&&state.cursor>=3);document.body.classList.toggle('surreal',!!surreal);visible('duckReveal',!!surreal);visible('rewindAlternate',m==='ending'&&!!state.alternateEnding);document.body.classList.toggle('cross',cross);['title','investigate','ending','intermission'].forEach(id=>visible(id,m===id));visible('dialogue',cross||dialogue);visible('portrait',cross||dialogue);visible('crossControls',cross);visible('testimonyBadge',cross);visible('credibility',cross);visible('location',m!=='title'&&m!=='ending'&&m!=='intermission');$('record').disabled=m==='title';$('location').textContent=m==='investigate'||(dialogue&&state.after==='investigate')?'Theatre Royal · Day '+(state.day||1):'District Court · Day '+(state.day||1);
 if(state.notesGroup&&['investigate','cross','ending'].includes(m)){
 ['investigate','ending','dialogue','portrait','crossControls','testimonyBadge','credibility','location','extras','duckReveal'].forEach(id=>visible(id,false));
 visible('notesScreen',true);document.body.classList.remove('cross','surreal');bg(state.notesGroup==='booth'?'booth':m==='investigate'?'stage':'courtroom');track(m==='investigate'?0:1);drawNotes();$('objective').textContent='Examine the scene · Choose a topic · Esc to return';save();return;
 }
 if(m==='title'){bg('stage');track(0);$('resume').hidden=!restore();$('chapter').textContent='CASE 01 — TURNABOUT ON CUE';$('objective').textContent='Find the truth behind the performance.';return;}
 if(m==='intermission'){bg('courtroom');track(0);$('objective').textContent='Day 1 complete · Progress saved';$('chapter').textContent='DAY 1 — ADJOURNED';}
 if(m==='investigate'){bg('stage');track(0);$('toCourt').disabled=false;$('investigate').querySelector('.eyebrow').textContent='DAY '+(state.day||1)+' · INVESTIGATION';$('investigate').querySelector('h2').innerHTML=state.day===2?'Read the scene<br>again.':'Every room<br>has a story.';$('investigate').querySelector('p').textContent=state.day===2?'Review the new reports in both rooms and speak to everyone again before the second hearing.':'Walk the stage, examine the sound booth, and hear the accounts of the people who were here.';$('objective').textContent='Theatre Royal · Examine the rooms and interview the people involved';}
 if(dialogue){const [who,line,expression]=state.dialogue[state.cursor]||opening[0];person(who,expression||expressionFor(who,line));if(surreal)visible('portrait',false);if(surreal&&who==='judge'){$('speaker').textContent='The Honourable Quack';$('role').textContent='Presiding waterfowl';}$('line').textContent=line;log(who,line);$('next').hidden=false;$('hint').textContent='Enter or Space to continue';if(state.optionalReturn){bg(state.scene);track(state.dialogueTrack??0);$('location').textContent=''+(state.optionalReturn.group==='booth'?'Sound booth':state.optionalReturn.mode==='investigate'?'Theatre Royal':'District Court');$('hint').textContent='Enter to continue · Return when you are ready';}else if(state.after==='investigate'){bg(state.scene||'stage');track(0)}else {bg('courtroom');track(state.dialogueTrack??(state.after==='ending'?3:state.stage>=2?3:1))}$('objective').textContent='Listen carefully. Every detail may matter.';}
 if(cross){const t=trials[state.stage];bg('courtroom');track(state.stage>=2?3:1);person(t.who,(t.who==='pip'&&state.stage>=7)||(t.who==='tessa'&&state.stage>=4)?'intense':t.who==='celia'?'thought':'neutral');$('line').textContent='“'+t.lines[state.statement]+'”';log(t.who,t.lines[state.statement]);$('next').hidden=true;$('hint').textContent='Press for details. Present evidence on the statement it contradicts.';$('testimonyTitle').textContent=t.title;$('statementCount').textContent=`STATEMENT ${state.statement+1} / ${t.lines.length}`;$('credibility').textContent='◆'.repeat(state.hp)+'◇'.repeat(5-state.hp);$('objective').textContent='Find the contradiction · ← → browse · P press · E present';$('chapter').textContent=`DAY ${state.day||1} — CROSS-EXAMINATION ${state.stage-(state.day===2?4:0)+1}${state.stage===trials.length-1?' · FINAL CONTRADICTION':''}`;}
 if(m==='ending'){const alt=!!state.alternateEnding;const section=$('ending');section.querySelector('.eyebrow').textContent=alt?'ALTERNATE ENDING · 01 / THE QUACKENING':'CASE CLOSED';section.querySelector('h1').textContent=alt?'All rise. All quack.':'Not guilty.';section.querySelector('p').textContent=alt?'The verdict was never about you. It was about the breadcrumbs.':'The truth finally has the stage.';$('chapter').textContent=alt?'CASE 01 — THE QUACKENING':'CASE 01 — CASE CLOSED';bg('courtroom');track(alt?3:0);$('endingText').textContent=alt?'The theatre unfolds into a lily pad. Celia becomes Minister of Crumbs. Vera prosecutes the concept of dry land. Mara finally gets her quiet afternoon, although she is now a lighthouse. You are appointed a small but respected pond. CASE ADJOURNED UNTIL THE NEXT MIGRATION.':'Mara is free. Adrian Vale is alive—and was Hank Ledger throughout the case. His escape left the attackers believing their trap had killed him. Pip and the former presiding judge face investigation for the attempted killing and fraud. Vale’s impersonation and the prosecution’s staged haunting also face independent review. Celia brings out her sister’s real pages. Mara takes her quiet afternoon without an audience.';$('objective').textContent=alt?'Alternative ending discovered · Rewind to continue the original case':'Turnabout on Cue · Complete';}

 save();}
function begin(){state={day:1,mode:'dialogue',stage:0,statement:0,hp:5,found:[],dialogue:opening,cursor:0,after:'investigate',history:[],selected:'report'};sound=true;$('music').textContent='♫ Sound on';render();}
function advance(){if(state.mode!=='dialogue')return;if(++state.cursor>=state.dialogue.length){if(state.optionalReturn){finishOptional(true);return;}state.mode=state.after;if(state.mode==='cross')state.statement=0;}render();}
const investigationDialogue=[[["iris","The microphone stand is still facing the empty front row. Why is there a cable on the floor?"],["pip","Mara disconnected the stage mic at the patch panel. Here is the service slip: 7:55, her signature."],["iris","Yet everyone heard Vale at 8:02."],["pip","These are separate routes into the speakers. Unplug a microphone and you lose that live input. A recording can still play through the same speakers."],["iris","Then hearing a voice does not establish that someone was speaking at that moment. Let’s keep the slip."]],[["iris","There is only one door into this booth?"],["mara","One door, no other exit. Celia sent me up after the microphone trouble. I stayed until I heard Adrian."],["pip","The corridor camera records you entering at 7:56 and leaving at 8:03. The police checked its clock."],["iris","What can you see from here?"],["mara","The stage through the window, but not behind the desk. I was watching the levels, not looking down the whole time."],["iris","The footage establishes where you were. We still need to establish when the attack happened."]],[["tessa","If the angle makes me look startled, that is because the front row lighting is criminal."],["iris","We are interested in the mirror behind you. May I enlarge the original?"],["tessa","You may. I took it at 7:58. The police checked the file and the camera clock."],["pip","Look at the reflection. Vale is already collapsed beside the desk, with the award on the floor."],["tessa","I thought… I remembered him standing there. I had not looked at that corner of the image."],["iris","That is why we keep the original. Four minutes before the shout, something was already badly wrong."]],[["iris","This export lists the audio cues and the commands that started them. Can it distinguish a timer from a person pressing a button?"],["pip","Yes. Cue 17B, 8:02 precisely. Manual GO. Trigger source: the stage-manager console at stage left."],["iris","Could the upstairs booth have sent it?"],["pip","It was in monitor-only mode. This command came from the downstairs station. The log can be reviewed here in the booth."],["iris","And the file?"],["pip","An edited rehearsal: “Mara, put that down!” and a crash. In the full recording, he was asking her to lower a speaker."],["iris","The words were real. The situation the audience imagined was not. Add the log and recording notes to the record."]],[["hank","The recorder team recovered a second channel overnight. Here is the continuous export."],["iris","Has its clock been checked?"],["hank","Against the first channel and the time signal. The verification sheet is attached."],["iris","I will take the full sequence."],["hank","The landing and stage-desk segments are indexed by timestamp. The original storage remains sealed."]],[["hank","The laboratory has corrected the property inventory. Items A and B now have separate entries."],["iris","What was corrected?"],["hank","Their materials, weights and fracture matches. The original scene labels are included so the correction can be traced."],["iris","And the medical findings?"],["hank","Signed and attached. Here is the complete report."]],[["tessa","This was embargoed until after the performance. There is not much point in that now."],["iris","Is it complete?"],["tessa","The schedule, publicity agreement, supplier credits and correspondence. I kept the originals."],["iris","I will need to ask about some of the names in it."],["tessa","I expected that. Just distinguish what I signed from what someone merely sent me."]],[["hank","An independent unit records activity in the maintenance cabinet. This is its export."],["iris","Can the sound editor alter it?"],["hank","No. The examiner verified the recorder separately. Operator authentication, load readings and event times are all included."],["iris","Are the units and channel names documented?"],["hank","On the attached key. You will not have to guess what a number measures."]],[["vera","The bank supplied a certified archive, including the ownership instructions and production attachments."],["iris","Is any of it still awaiting authentication?"],["vera","No. The signatures, confirmation image and revision hash have been checked."],["iris","Then I can put the documents to the witnesses."],["vera","Yes. Read the originals carefully. I have not written a conclusion for you."]]];
function examine(i){state.notesGroup=null;const c=clues[i];if(!c||c.day!==(state.day||1))return;if(!state.found.includes(c.id))state.found.push(c.id);state.optionalReturn={mode:'investigate',statement:state.statement,scene:state.scene||'stage',group:c.bg,id:c.id};state.scene=c.bg;speak([...investigationDialogue[i],['iris',evidence.find(e=>e.id===c.id).name+' added to the court record.']],'investigate');}
function step(d){if(state.mode!=='cross')return;state.statement=(state.statement+d+trials[state.stage].lines.length)%trials[state.stage].lines.length;render();}
function modal(title,html,kicker='CASE 01'){ $('modalTitle').textContent=title;$('modalKicker').textContent=kicker;$('modalBody').innerHTML=html;if(!$('modal').open)$('modal').showModal();}
function feedback(title,text,callback=null){feedbackAfter=callback;modal(title,'<p id="feedbackText"></p><button id="feedbackOK" class="primary">Continue →</button>');$('feedbackText').textContent=text;$('feedbackOK').onclick=()=>{$('modal').close();};}
$('modal').addEventListener('close',()=>{if(feedbackAfter){let f=feedbackAfter;feedbackAfter=null;f();}});
function press(){if(state.mode!=='cross')return;const t=trials[state.stage];feedback('Hold it!',t.press[state.statement]);}
const evidenceNotes={
report:{label:'RECOVERY • 20:12',alt:'Brass theatre award, broken side handle and police recovery folder.',points:[['Broken attachment',64,49,'A side handle has snapped away from the award. This is separate from its solid base.'],['Recovered handle',75,76,'Police recovered this detached handle beneath Vale’s body at 8:12. It could not have been seen from Celia’s station.'],['Fingerprint record',15,44,'Mara’s fingerprints were on the base. They do not establish when she touched the award.']]},
mic:{label:'SERVICE • 19:55',alt:'Unplugged stage audio cable beside a patch panel and service slip.',points:[['Unplugged connector',44,57,'The stage microphone was disconnected at 7:55. It could not carry a live voice at 8:02.'],['Service entry',73,81,'Mara signed the maintenance slip. The auditorium playback speakers remained connected.']]},
alibi:{label:'CAMERA 02 • 19:56–20:03',alt:'Security view of the corridor outside the sound booth.',points:[['Only entrance',70,25,'Continuous footage records Mara entering at 7:56 and leaving at 8:03. There is no other exit.']]},
photo:{label:'VERIFIED CAPTURE • 19:58',alt:'Tessa’s selfie with Vale collapsed beside his desk in the mirror reflection.',points:[['Mirror reflection',77,48,'Vale is collapsed beside the desk at 7:58, four minutes before the recorded shout.'],['Award on the floor',65,62,'The award is beside Vale. The detached handle cannot be seen; consult the recovery report for its location.']]},
log:{label:'CUE 17B • 20:02:00',alt:'Stage-manager playback console with a GO button and cue monitor.',points:[['Manual trigger',49,54,'The log records a manual GO at 8:02:00 from the stage-manager console, not an automatic cue.'],['Playback file',27,24,'VALE_REHEARSAL_EDIT.wav contains the shout and crash. The upstairs booth was monitor-only.']]}
};
function evidencePicture(id){return window.ART?.['evidence_'+(evidenceFor(id)?.art||id)]||'';}
const documentDetails={"relay":{"label":"Reverse-side channel register","text":"The same export’s reverse-side register separates ACTUATOR from SAFETY INTERLOCK. Pip’s 8:00:31 operation armed the actuator; a separate restraint remained engaged. At 8:01:56 certificate C-03 released that restraint. The attached certificate directory assigns C-03 to the presiding judge’s judicial arts-trust terminal; its embedded confirmation photograph shows the judge personally approving the release. Both channels were required for the 8:02 drop. These entries were in the original export, not a later submission."},"ledger":{"label":"Folded deed rider","text":"Unfolded rider to the same bank-certified instructions: Pip Foley is the registered nominee; beneficial proceeds pass to the presiding judge’s private arts trust. C-03 is the trust’s execution certificate, matching the attached directory. The rider and register share the original certification. The headline register entry was not a statement that Pip was the only beneficiary."},"packet":{"label":"Illusion and costume appendix","text":"Retained repertory costume sheet: “DETECTIVE HANK LEDGER — performer: ADRIAN VALE.” Padding, beard pieces, altered hairline and vocal placement belong to a single performer, not a double. Adjacent diagrams show (1) a seated performer leaving through the desk hatch as a lifelike rehearsal figure replaces him during blackout and (2) a living performer reflected in an angled clear pane. The portable reflection frame places its performer beside a service door. These are the packet’s original pages."},"report":{"label":"Clinical certification field","text":"The original scene report records an assumed death. Its clinical certification field remains PENDING: no signed death certificate is attached. The laboratory exhibit concerns materials, traces and an injury reconstruction; it is not a post-mortem examination. Read the two documents separately before treating their conclusions as interchangeable."}};
function notesFor(id){const base=evidenceNotes[id]||{label:'DAY 2 • DOCUMENT EXTRACT',alt:'Related scene illustration. The findings are in the written exhibit.',points:[['Read findings',50,50,evidenceFor(id).text]]};const detail=documentDetails[id];return detail&&state.stage>=9?{...base,points:[...base.points,[detail.label,75,72,detail.text]]}:base;}
function inspectEvidence(id,present){const e=evidence.find(x=>x.id===id),note=notesFor(id);modal(e.name,'<button id="backToRecord">← Back to record</button><div class="inspection"><img id="inspectionImage"><span class="capture-label"></span><div id="detailMarkers"></div></div><p id="inspectionNote" aria-live="polite">Select a numbered detail, or use Tab and Enter to inspect it.</p>','EXAMINE EVIDENCE');$('inspectionImage').src=evidencePicture(id);$('inspectionImage').alt=note.alt;$('modalBody').querySelector('.capture-label').textContent=note.label;note.points.forEach(([label,x,y,text],i)=>{let b=document.createElement('button');b.className='detail-marker';b.style.left=x+'%';b.style.top=y+'%';b.textContent=i+1;b.setAttribute('aria-label',label);b.onclick=()=>{$('inspectionNote').textContent=label+' — '+text;if(documentDetails[id]?.label===label){state.readDetails=[...new Set([...(state.readDetails||[]),id])];save();}};$('detailMarkers').append(b)});$('backToRecord').onclick=()=>record(present);$('backToRecord').focus();}
function record(present=false){const available=evidence.filter(e=>e.id==='report'||state.found.includes(e.id));if(!available.find(e=>e.id===state.selected))state.selected='report';modal(present?'Present evidence':'Court record','<div class="evidence-grid"><div id="evidenceList" class="evidence-list"></div><div id="evidenceDetail" class="evidence-detail"></div></div>',present?'CHOOSE THE EVIDENCE THAT CONTRADICTS THIS STATEMENT':'EVIDENCE • SELECT AN ITEM TO INSPECT');function select(id){state.selected=id;const e=available.find(x=>x.id===id),note=notesFor(id);$('evidenceList').replaceChildren();available.forEach(x=>{let b=document.createElement('button'),img=document.createElement('img');img.src=evidencePicture(x.id);img.alt='';b.append(img,document.createTextNode(x.name));b.className=x.id===id?'selected':'';b.setAttribute('aria-pressed',String(x.id===id));b.onclick=()=>select(x.id);$('evidenceList').append(b)});const d=$('evidenceDetail');d.innerHTML='<span class="tag"></span><h3></h3><button class="evidence-preview" aria-label="Inspect evidence image"><img><span class="capture-label"></span><span class="inspect-caption">Inspect details ↗</span></button><p></p><div class="evidence-actions"></div>';d.querySelector('.tag').textContent=e.tag;d.querySelector('h3').textContent=e.name;d.querySelector('img').src=evidencePicture(id);d.querySelector('img').alt=note.alt;d.querySelector('.capture-label').textContent=note.label;d.querySelector('.evidence-preview').onclick=()=>inspectEvidence(id,present);d.querySelector('p').textContent=e.text+(state.readDetails?.includes(id)&&documentDetails[id]?'\n\n'+documentDetails[id].text:'');if(present){let b=document.createElement('button');b.className='primary';b.textContent='Present this evidence →';b.onclick=()=>submit(id);d.querySelector('.evidence-actions').append(b)}}select(state.selected);}
function submit(id){if(state.mode!=='cross')return;const t=trials[state.stage];if(id!=='report'&&!state.found.includes(id))return;if(state.statement===t.target&&id===t.proof){$('modal').close();$('burst').classList.remove('show');void $('burst').offsetWidth;$('burst').classList.add('show');track(2);const end=state.stage===trials.length-1,overnight=state.stage===3;if(!end)state.stage++;state.hp=Math.min(5,state.hp+1);speak(t.success,end?'ending':overnight?'intermission':'cross',end?3:2);}else{state.hp--;save();if(state.hp<=0){feedback('Take a breath. Rebuild the argument.','The court grants a short recess. Review the record, then retry this testimony with restored credibility.',()=>{state.hp=5;state.statement=0;render()})}else feedback('That does not contradict this statement.','You lose one point of credibility. Try pressing the witness for a more precise claim, then match it with a detail in your evidence.',render);}}
function startDayTwo(){if(state.mode!=='intermission')return;state.day=2;state.stage=4;state.statement=0;state.hp=5;state.notesGroup=null;state.scene='stage';speak(day2Opening,'investigate',0);}
$('nextDay').onclick=startDayTwo;
$('rewindAlternate').onclick=rewindAlternate;
$('extras').onclick=()=>openExtras();$('exploreStage').onclick=()=>openExtras('stage');$('exploreBooth').onclick=()=>openExtras('booth');$('talkPeople').onclick=()=>openExtras('talk');$('leaveAside').onclick=()=>finishOptional(false);
$('start').onclick=()=>{if(!restore()){begin();return;}modal('Start a new case?','<p>This replaces the saved playthrough in this browser.</p><button id="newCaseConfirm" class="primary">Start new case</button> <button id="keepCase">Keep my save</button>');$('newCaseConfirm').onclick=()=>{$('modal').close();begin()};$('keepCase').onclick=()=>$('modal').close();};$('resume').onclick=()=>{const s=restore();if(s){state=s;render()}};$('next').onclick=advance;$('toCourt').onclick=()=>{if(activeClues().every(c=>state.found.includes(c.id)))speak(state.day===2?day2Intro:courtIntro,'cross');else feedback('Before the hearing','Pip checks the file. “We have not finished documenting the scene. Let’s take another look around both rooms before we leave.”')};$('prev').onclick=()=>step(-1);$('forward').onclick=()=>step(1);$('press').onclick=press;$('present').onclick=()=>record(true);$('record').onclick=()=>record(false);$('close').onclick=()=>$('modal').close();$('restart').onclick=()=>{state.mode='title';render()};$('caseMenu').onclick=()=>{if(state.mode==='title')return;save();state.mode='title';render()};$('music').onclick=()=>{sound=!sound;$('music').textContent=sound?'♫ Sound on':'♫ Sound off';if(sound)track(wantedTrack);else audio.pause()};$('fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen()}catch{feedback('Fullscreen unavailable','Your browser could not enter fullscreen. You can continue in this window.')}};
$('help').onclick=()=>modal('How to play','<p><b>Investigate</b> the theatre and sound booth, examine objects, and interview the people involved. Discoveries are added to the court record.</p><p><b>Interviews</b> lets you choose a person and a topic. You can revisit conversations, return to the rooms, and speak with people during the hearing and after the verdict.</p><p>During testimony, use <b>← / →</b> to change statements. Press <b>P</b> to ask for more detail. Press <b>E</b> to present evidence that contradicts the current statement.</p><p><b>Enter / Space:</b> advance dialogue. <b>Tab:</b> open the court record when the scene is focused. <b>Esc:</b> close a panel.</p><p>Wrong evidence costs credibility. At zero, retry the testimony. Progress saves automatically in this browser.</p><p>Original cast, story, art and synthesized music. Unofficial fan project, not affiliated with Capcom.</p>');
$('history').onclick=()=>{modal('Transcript','<div class="transcript"></div>');let list=$('modalBody').firstChild;state.history.forEach(x=>{let p=document.createElement('p'),b=document.createElement('b');b.textContent=x.who+': ';p.append(b,document.createTextNode(x.line));list.append(p)})};
document.addEventListener('keydown',e=>{if($('modal').open||e.altKey||e.ctrlKey||e.metaKey)return;if(state.notesGroup&&state.mode!=='title'){if(e.key==='Escape'){e.preventDefault();closeNotes()}return;}const focused=e.target.closest('button,a,input,select,textarea');if(e.key==='Tab'){if(!focused&&state.mode!=='title'){e.preventDefault();record(false)}return}if(focused&&(e.key==='Enter'||e.key===' '))return;if(e.key==='Enter'||e.key===' '){e.preventDefault();advance()}else if(state.mode==='cross'){if(e.key==='ArrowLeft'){e.preventDefault();step(-1)}else if(e.key==='ArrowRight'){e.preventDefault();step(1)}else if(e.key.toLowerCase()==='p')press();else if(e.key.toLowerCase()==='e')record(true)}});
render();

