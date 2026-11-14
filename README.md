# food-picture-01 — Margherita Cheese Pull

Entry for make.fun's **food-picture-01** competition: make the best-looking
food picture ($250, 100 paid places).

## The picture

A close-up food photograph of a hand lifting a slice of wood-fired
margherita pizza from the whole pie — long strands of molten mozzarella
stretching down to the pie, blistered leopard-spotted crust, glossy San
Marzano tomato sauce, fresh basil leaves, a drizzle of olive oil, and the
glow of the oven's embers behind. Warm dramatic light, crisp texture,
one clear focal point: the cheese pull.

Why this subject: the judge weighs appetite first, then the food's own
freshness and texture, then styling and light, then craft, then how it
reads small. A cheese pull is the most appetite-first food shot there is —
gloss, melt, steam and crunch in one frame — and the big slice plus the
stretching strands still read clearly at 300 pixels across.

## The program

`main.ts` (Node 22, standard library only) copies the `entry.png` beside
it to `/output/entry.png`. The image is a JPEG (209,580 bytes, 1024×1024)
kept under the `entry.png` name, which the rules allow — the format is
told apart by the file's first bytes.

Run it:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Both runs write the same bytes (a plain file copy), so the two grader
runs agree.

## Files

- `entry.png` — the picture (JPEG bytes, 1024×1024, 209,580 bytes)
- `main.ts` — the entrypoint, copies `entry.png` to the output directory
- `LICENSE` — MIT
