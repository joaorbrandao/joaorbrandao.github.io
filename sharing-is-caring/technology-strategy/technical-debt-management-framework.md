# Technical Debt Management Framework

A practical framework for making technical debt visible, sized, and manageable.

## When to use this framework

Use it when structural shortcuts, aging code, or outdated patterns are slowing teams down, increasing risk, or raising the cost of change.

## Reframe: debt is not inherently bad

Technical debt is a tool. It becomes dangerous only when it is **unmanaged**: invisible, unmeasured, and unaddressed.

## The debt taxonomy

| Type | Description | Example |
| --- | --- | --- |
| **Deliberate** | A conscious shortcut taken with known cost | Hardcoded configuration to hit a deadline |
| **Inadvertent** | A poor decision made unknowingly | A design that only reveals problems under scale |
| **Bit rot** | Code that was correct when written but has become outdated | Deprecated library, obsolete pattern |
| **Architectural** | Structural decisions that constrain future work | Monolith preventing independent team scaling |

## The debt quadrant (Fowler)

Only one quadrant is acceptable:

```
               Reckless          Prudent
              ┌─────────────────────────────┐
   Deliberate │ "We don't have  │ "We must  │
              │  time for       │ ship now, │
              │  design"        │ refactor  │
              │                 │ later"    │
              ├─────────────────┼───────────┤
 Inadvertent  │ "What's         │ "Now we   │
              │  layering?"     │ know how  │
              │                 │ we should │
              │                 │ have done │
              │                 │ it"       │
              └─────────────────────────────┘
```

Acceptable: **prudent-deliberate**. The other three represent either ignorance or negligence.

## Managing debt

### 1. Make it visible

Maintain a debt register in your backlog or wiki. Every item should include:

| Field | Purpose |
| --- | --- |
| **Item** | Short name and location |
| **Type** | Deliberate / Inadvertent / Bit rot / Architectural |
| **Description** | What is wrong and why it matters |
| **Business impact** | How it slows delivery, raises risk, or increases cost |
| **Size / cost** | Estimated effort or opportunity cost |
| **Target date** | When it should be resolved |
| **Owner** | Who is accountable |

### 2. Attach business impact

Translate debt into language stakeholders understand:

| Engineering framing | Business framing |
| --- | --- |
| "The service is hard to change" | "A medium feature takes 3x longer here than in other services" |
| "Onboarding is slow" | "Each new engineer loses 2 weeks per year to tribal knowledge" |
| "We cannot scale this component" | "Peak traffic causes a known outage risk" |
| "The library is deprecated" | "We are one CVE away from an unpatched critical dependency" |

### 3. Negotiate a percentage

Aim for 15–20% of every sprint to be debt reduction. Frame it as protecting velocity, not slowing feature work.

### 4. Set a horizon

Architectural debt should have a target resolution date. Without one, it will stay in the backlog indefinitely.

## Debt register template

```markdown
## [Debt item name]

**Location:** service / module / area

**Type:** Deliberate / Inadvertent / Bit rot / Architectural

**Description:**
What is the problem?

**Business impact:**
How does this affect delivery, cost, or risk?

**Estimated size:** T-shirt size or days

**Target resolution date:** YYYY-MM-DD

**Owner:** Name or team

**Resolution approach:**
How will we fix it?
```

## Common pitfalls

- **Shame-driven debt management** - debt is not a moral failing; treat it as inventory.
- **Paying it off without measuring impact** - prioritize debt by cost of inaction, not by how ugly the code is.
- **No target date** - "someday" means never for architectural debt.
- **Ignoring prudent-deliberate debt** - taking shortcuts is fine if the cost is known and budgeted.

## Quick reference

1. Classify debt by type.
2. Only accept prudent-deliberate debt.
3. Keep a visible, prioritized debt register.
4. Attach business impact to every item.
5. Negotiate 15–20% of sprint capacity for debt work.
6. Set target dates for architectural debt.
7. Review the register monthly.
8. Treat debt as inventory, not shame.
