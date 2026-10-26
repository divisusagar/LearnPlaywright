# Node.js `readline` and the `@types/node` Auto-Suggestion Fix

Quick notes from a real scenario: typing a `readline` program in VS Code and not getting auto-suggestions for `createInterface()`.

---

## 1. The program

```javascript
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

async function main() {
    // Create the readline interface
    const rl = readline.createInterface({ input, output });

    try {
        // 1. Reading a string
        const name = await rl.question('Enter your name: ');

        // 2. Reading numbers (input always arrives as a string, so convert it)
        const ageInput = await rl.question('Enter your age: ');
        const age = parseInt(ageInput, 10);

        const heightInput = await rl.question('Enter your height (in meters): ');
        const height = parseFloat(heightInput);

        console.log('\n--- Summary of Input ---');
        console.log(`Name: ${name}`);
        console.log(`Age: ${age}`);
        console.log(`Height: ${height}m`);

    } finally {
        // Always close the interface, even if something fails above
        rl.close();
    }
}
main();
```

---

## 2. What each part does

| Part | Meaning |
|---|---|
| `node:readline/promises` | Built-in Node.js module for reading terminal input, **Promise-based** so it works with `await` |
| `stdin as input` | The keyboard input stream, renamed to `input` |
| `stdout as output` | The terminal output stream, renamed to `output` |
| `readline.createInterface({ input, output })` | Creates the object (`rl`) that reads and writes lines |
| `await rl.question('...')` | Prints the prompt, waits for the user to press Enter, returns what they typed |
| `parseInt(text, 10)` | Converts text to a whole number (the `10` means base 10) |
| `parseFloat(text)` | Converts text to a decimal number |
| `try { } finally { rl.close(); }` | `finally` runs whether the code succeeds or fails, so the interface is always closed |

Key points:
- `rl.question()` returns a **Promise**, so it needs `await` inside an `async` function.
- **Everything typed arrives as a string.** Convert it before doing math.
- If you forget `rl.close()`, the program can stay open waiting for input.
- `import` syntax needs ES module mode. Recent Node versions detect it automatically. On older versions, use `"type": "module"` in `package.json` or the `.mjs` extension.

---

## 3. The problem

While typing `readline.`, VS Code did **not** suggest `createInterface`. The code still ran correctly, but the editor offered no help.

## 4. Why it happened

- **Node.js** runs the code, and it knows what `readline` contains.
- **VS Code's suggestions** come from the **TypeScript language server**, which reads **type definition files**.
- Type definitions for Node's built-in modules live in the package **`@types/node`**.
- If that package isn't in the project's `node_modules`, the language server has no list of `readline` members, so it can't suggest anything.

Analogy: Node is the person who knows the language, `@types/node` is the dictionary the editor uses for hints. Without the dictionary, the editor stays silent even though the code is valid.

Suggestions for **JavaScript** files also come from the TypeScript language server, so this applies to `.js` files too.

---

## 5. The fix

```powershell
npm install -D @types/node
```

Then refresh the editor:

1. Press `Ctrl + Shift + P`
2. Run **TypeScript: Restart TS Server**
3. Type `readline.` again (press `Ctrl + Space` if suggestions don't pop up)

Result in this scenario: suggestions appeared after the restart.

### Optional check before installing
```powershell
npm ls @types/node
```
- Shows a version: already installed, so look at the troubleshooting table below.
- `(empty)`: not installed, so run the install command.

---

## 6. Why the restart was needed

The language server reads `node_modules` when it **starts** and keeps what it found in memory. If a package is installed while VS Code is already open, the server may not notice. Restarting makes it re-scan the project.

Other ways to refresh: wait a few seconds, reopen the file, **Developer: Reload Window**, or close and reopen VS Code. If suggestions already appear, no restart is needed.

Use the restart whenever suggestions go missing after installing a package (including other `@types/...` packages).

---

## 7. Common questions

### Do I need `npm init -y` first?
No. `npm init -y` only **creates a `package.json`**. The install command doesn't depend on it. If you already have a `package.json`, skip it.

### Where does the package get installed?
| Location | What goes there |
|---|---|
| Project `node_modules\@types\node` | The installed package (what VS Code reads) |
| `package.json` | New entry under `devDependencies` |
| `package-lock.json` | The exact version installed |
| npm cache folder | A separate downloaded copy that only speeds up future installs |

It is installed **locally in the project**, not globally and not in a temporary location. The cache is not what VS Code uses.

### What does `-D` mean?
Same as `--save-dev`. It records the package under `devDependencies` ("needed for development, not at runtime"). It has nothing to do with *where* the package installs. `@types/node` only provides type information, so `-D` is correct.

### Local vs global
```powershell
npm install -D @types/node     # local: this project's node_modules
npm install -g typescript      # global: user-level npm folder
```

### Which folder does npm use?
npm looks **upward** from where you run the command for the nearest `package.json` (or `node_modules`) and installs there. VS Code also searches upward for `node_modules`, so this normally works.

Useful checks:
```powershell
npm root          # local node_modules path npm is using
npm root -g       # global path, for comparison
npm config get cache    # npm cache location
```

---

## 8. If suggestions are still missing

| Check | What to do |
|---|---|
| Package location | `node_modules` must be in the file's folder or one of its parents |
| `tsconfig.json` has a `types` list | Make sure it includes `"node"` |
| Language mode | Bottom-right of VS Code should say `JavaScript` or `TypeScript`, not `Plain Text` |
| Opened as a single file | Use **File > Open Folder** so VS Code treats it as a project |
| Quick suggestions off | Check `editor.quickSuggestions` in Settings |
| Still unsure | Hover over `readline`. If it shows `any`, or the import shows `Cannot find module`, the types aren't being found |

---

## 9. Bonus: what else improves after installing `@types/node`

- `process.env` and `process.argv` suggestions
- `fs`, `path` and other Node modules get suggestions
- No false red underlines on `import ... from 'node:...'`

These are the Node.js basics worth learning next for automation work.

---

## 10. Playwright note

A real Playwright project (created with `npm init playwright@latest`) already includes `@types/node`, so this problem doesn't appear there. It mostly shows up in loose practice folders.

---

## Summary

| Question | Answer |
|---|---|
| Why no suggestions? | VS Code couldn't find Node's type definitions |
| What fixes it? | `npm install -D @types/node` |
| Is `npm init -y` needed? | No, only creates `package.json` |
| Where does it install? | Locally, in the project's `node_modules` |
| Why restart the TS Server? | So it re-scans `node_modules` and notices the new package |
| Does it apply to `.js` files? | Yes, the TypeScript language server powers JS suggestions too |
