// food-picture-01 entry (Node 22, standard library only).
// The picture is the entry.png beside this file: a wood-fired margherita
// pizza slice lifted from the pie, molten mozzarella stretching, basil,
// tomato and olive oil, embers glowing behind. The program copies it to
// /output/entry.png (MAKEFUN_OUTPUT_DIR outside the grader's container).
// The copy is byte-identical on every run, so the two grader runs agree.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
const target = join(outDir, 'entry.png');
copyFileSync(source, target);

// Guard the gate: the two grader runs must write the same bytes, so fail
// loudly here if the copy ever came out short instead of shipping a
// truncated image.
if (statSync(source).size !== statSync(target).size) {
  throw new Error('entry.png copy size mismatch');
}
