Build Error


Error evaluating Node.js code
./app/globals.css

Error evaluating Node.js code
CssSyntaxError: tailwindcss: /mnt/g/_OneDrive/OneDrive/Desktop/Py Apps/ifbb-argentina/app/globals.css:1:1: Cannot apply unknown utility class `bg-background`. Are you using CSS modules or similar and missing `@reference`? https://tailwindcss.com/docs/functions-and-directives#reference-directive
    [at Input.error (turbopack:///[project]/node_modules/.pnpm/postcss@8.5.6/node_modules/postcss/lib/input.js:135:16)]
    [at Root.error (turbopack:///[project]/node_modules/.pnpm/postcss@8.5.6/node_modules/postcss/lib/node.js:146:32)]
    [at Object.Once (/mnt/g/_OneDrive/OneDrive/Desktop/Py Apps/ifbb-argentina/node_modules/.pnpm/@tailwindcss+postcss@4.1.15/node_modules/@tailwindcss/postcss/dist/index.js:18:6915)]
    [at process.processTicksAndRejections (node:internal/process/task_queues:105:5)]
    [at async LazyResult.runAsync (turbopack:///[project]/node_modules/.pnpm/postcss@8.5.6/node_modules/postcss/lib/lazy-result.js:293:11)]
    [at async transform (turbopack:///[turbopack-node]/transforms/postcss.ts:70:34)]
    [at async run (turbopack:///[turbopack-node]/ipc/evaluate.ts:92:23)]

Import trace:
  Client Component Browser:
    ./app/globals.css [Client Component Browser]
    ./app/layout.tsx [Server Component]