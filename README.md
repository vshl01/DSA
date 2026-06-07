# DSA

Data Structures & Algorithms practice — **language-agnostic**. Solutions are
written in whatever language fits (TypeScript, Rust, etc.).

## Structure

Solutions are grouped by **topic**, each in its own folder. Files can be in any
language; the extension tells you which:

```
DSA/
├── Sorting/
│   └── sorting-I/
│       ├── selection_sort.ts     # TypeScript
│       └── selection_sort.rs     # Rust
├── Recursion/        (coming soon)
├── Backtracking/     (coming soon)
└── ...
```

## Running a file

**TypeScript** — Node runs `.ts` files directly (requires Node **v22.6+**, v23+ recommended):

```bash
node Sorting/sorting-I/selection_sort.ts
```

**Rust** — compile and run a standalone file with `rustc`:

```bash
rustc Sorting/sorting-I/selection_sort.rs -o /tmp/sol && /tmp/sol
```

## Tooling

Language-specific config lives at the repo root and only affects files of that
language:

- [`tsconfig.json`](./tsconfig.json) — strict TypeScript settings for all `.ts` files.
- [`package.json`](./package.json) — TypeScript dev dependency + scripts.

Type-check all TypeScript:

```bash
npm install
npm run type-check
```

## License

MIT
