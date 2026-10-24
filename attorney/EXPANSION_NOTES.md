# Optional scenes and expression expansion

22 optional scenes: 10 scenery inspections, 6 conversations, 4 courtroom asides and 2 epilogues. They do not change evidence, credibility or trial progression. Completion is saved; skipping is allowed. Returning preserves the exact testimony statement. Mid-scene reload resumes the dialogue.

## Art

Built-in image-generation edits of the existing three cast lineups. Six variant sheets in `assets/expressions.js`; sixteen new facial variants for eight speaking characters, with the victim unchanged. Source expression tags and scene dialogue are in `extras.js`. Neutral expressions retain the original art. New poses were intentionally not generated.

Shared prompt: Preserve identities, costume colors, props, body poses, full-body framing, exact left/center/right positions, figure sizes and background. Change only facial expressions. Keep the original polished anime style and 3:2 framing. No text or extra faces.

### defense_thought

LEFT Iris: thoughtful, knitted brows, closed mouth considering evidence. CENTER Pip: warmly amused, playful raised eyebrow and small smile. RIGHT Mara: relieved gentle smile, softened brows, hopeful eyes.

### defense_intense

LEFT Iris: forceful determined objection, lowered brows, mouth open speaking, confident focus. CENTER Pip: startled realization, widened eyes, slightly open mouth. RIGHT Mara: frightened and tearful, anxious brows, eyes glistening, tense mouth.

### court_thought

LEFT Vera: skeptical analytical frown, one raised eyebrow, closed mouth. CENTER Hank: sheepish embarrassed smile, eyebrows lifted apologetically. RIGHT Judge: warm approving smile with kind eyes.

### court_intense

LEFT Vera: shocked and visibly rattled, eyes wide, mouth slightly open. CENTER Hank: shocked alarm, wide eyes, mouth open. RIGHT Judge: stern commanding eyebrows, mouth open calling for order.

### theatre_thought

LEFT Celia: cold guarded suspicion, tense tight smile, narrowed eyes. CENTER Adrian: preserve original appearance unchanged. RIGHT Tessa: embarrassed apologetic smile, lifted worried brows.

### theatre_intense

LEFT Celia: unraveling under pressure, frightened wide eyes, tears, trembling open mouth, one subtle sweat bead. CENTER Adrian: preserve original appearance unchanged. RIGHT Tessa: shocked gasp, widened eyes and open mouth.

## Validation

`node tests.cjs`: save recovery; scene IDs and expression tags; preservation of evidence, credibility and testimony position; replay deduplication; skipped-scene behavior. Browser: investigation map, completion and skip controls, mid-scene save/resume, expression changes, courtroom return, epilogue and case verdict.

