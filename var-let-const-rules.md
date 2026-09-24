# `var`, `let`, `const` — Key Properties & Rules

## 1. Scope
| Keyword | Scope Type |
|---|---|
| `var` | Function-scoped (or global if declared outside any function) |
| `let` | Block-scoped (`{ }` — if, for, while, or any standalone block) |
| `const` | Block-scoped (same as `let`) |

---

## 2. Redeclaration
*(declaring the same name twice in the same scope)*

| Keyword | Allowed? |
|---|---|
| `var` | ✅ Yes — no error |
| `let` | ❌ No — `SyntaxError` |
| `const` | ❌ No — `SyntaxError` |

---

## 3. Reassignment
*(changing the value after declaration)*

| Keyword | Allowed? |
|---|---|
| `var` | ✅ Yes |
| `let` | ✅ Yes |
| `const` | ❌ No — `TypeError` |

> **Important nuance:** `const` only locks the *binding* (variable name), not the *contents*. Objects/arrays declared with `const` can still be mutated:
> ```js
> const obj = { name: "test" };
> obj.name = "updated"; // ✅ allowed
> obj = {};              // ❌ TypeError
> ```

---

## 4. Hoisting

| Keyword | Hoisted? | Accessing before declaration |
|---|---|---|
| `var` | Yes | `undefined` (no error) |
| `let` | Yes (but in "Temporal Dead Zone") | `ReferenceError` |
| `const` | Yes (but in "Temporal Dead Zone") | `ReferenceError` |

---

## 5. Must be Initialized at Declaration?

| Keyword | Requires initial value? |
|---|---|
| `var` | No — `var x;` is valid |
| `let` | No — `let x;` is valid |
| `const` | **Yes** — `const x;` throws `SyntaxError: Missing initializer` |

---

## 6. Global Object Property Creation
*(in browsers, at top-level scope)*

| Keyword | Becomes a property of `window`? |
|---|---|
| `var` | ✅ Yes — `var x = 1;` → `window.x === 1` |
| `let` | ❌ No |
| `const` | ❌ No |

---

## 7. Loop Behavior (Closures)

- `var` → shares **one** variable across all loop iterations (classic bug — all callbacks see the final value).
- `let` → creates a **fresh binding per iteration** (each callback sees its own value).
- `const` → cannot be used with `let`-style counters (`for (const i = 0; i < 3; i++)` throws, since `i++` reassigns) — but works fine in `for...of` / `for...in` where the variable isn't reassigned each loop.

---

## Summary Cheat Sheet

| Rule | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function | Block | Block |
| Redeclare | ✅ | ❌ | ❌ |
| Reassign | ✅ | ✅ | ❌ |
| Hoisted | ✅ (as `undefined`) | ✅ (TDZ) | ✅ (TDZ) |
| Needs initial value | ❌ | ❌ | ✅ |
| Attaches to `window` | ✅ | ❌ | ❌ |

---

## Practical Rule

1. **Default to `const`.**
2. **Use `let`** only when you know the value will change.
3. **Avoid `var`** entirely in modern JS/TS — it's kept only for legacy compatibility and causes the scoping/hoisting bugs shown above.
