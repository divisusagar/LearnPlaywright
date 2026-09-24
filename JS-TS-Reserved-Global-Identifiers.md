# JavaScript / TypeScript — Reserved & Global Identifiers to Avoid in Variable Naming

A quick-reference list of names that should **not** be used as variable names in JavaScript or TypeScript — either because they are reserved keywords (will cause errors) or global identifiers (will cause silent bugs/shadowing).

---

## 1. JS Reserved Keywords
*(Will cause a `SyntaxError` — cannot be used as variable names at all)*

```
break       case        catch       class       const
continue    debugger    default     delete      do
else        export      extends     finally     for
function    if          import      in          instanceof
new         return      super       switch      this
throw       try         typeof      var         void
while       with        yield       let         static
enum        await       implements  package     protected
interface   private     public
```

---

## 2. Reserved Values / Literals

```
true        false       null        undefined   NaN         Infinity
```

---

## 3. Common Browser Global Objects / Properties
*(Won't cause an error, but will silently shadow the real global — e.g. `name`)*

```
name        window      document    location    history
status      top         self        parent      frames
event       screen      navigator   console     alert
open        close       print       focus       blur
length      origin      href        title       body
```

---

## 4. Common Built-in Object / Constructor Names
*(Avoid overwriting these — breaks any later code relying on the real object)*

```
Array       Object      String      Number      Boolean
Function    Symbol      Map         Set         Promise
Date        Math        JSON        RegExp      Error
Proxy       Reflect     WeakMap     WeakSet     Int8Array
```

---

## 5. Common Function / Utility Names
*(Technically allowed to shadow, but risky and confusing)*

```
parseInt    parseFloat  isNaN       isFinite    encodeURIComponent
decodeURIComponent      setTimeout  setInterval clearTimeout
fetch       requestAnimationFrame   escape      unescape
```

---

## 6. TypeScript-Specific Reserved Words
*(Only reserved when using TS-specific syntax/features)*

```
type        interface   namespace   declare     abstract
as          is          keyof       readonly    infer
never       unknown     any         module      satisfies
```

---

## Quick Reference Table

| Category | Examples | What Happens If Used |
|---|---|---|
| Reserved keywords | `var`, `class`, `return` | **SyntaxError** — code won't run |
| Global browser objects | `name`, `window`, `document`, `location` | Silent shadowing / deprecated warnings |
| Built-in constructors | `Array`, `Date`, `Math`, `JSON` | Overwrites the real thing — breaks later code using it |
| Common utility functions | `fetch`, `setTimeout`, `parseInt` | Silently shadows the real function |

---

## Practical Rule of Thumb

1. **Use descriptive, specific names** instead of generic ones — e.g. `userName` instead of `name`, `pageTitle` instead of `title`, `apiResponse` instead of `response`.
2. **Enable TypeScript / a linter (ESLint)** in your editor — it flags collisions automatically, so you don't need to memorize this list.
3. If your IDE underlines a variable name or shows a warning tooltip the moment you type it, that's your signal something is colliding with a global — rename it right away.
