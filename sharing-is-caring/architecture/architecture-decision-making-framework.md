# Architecture Decision-Making Framework

A lightweight, repeatable process for making defensible technical decisions under uncertainty.

## When to use this framework

Use it when a decision is **hard to reverse**, has **cross-cutting impact**, involves a **significant trade-off**, or **sets a precedent** for future decisions.

For routine, local, easily reversible choices - a library version bump, a small refactor, a function signature - prefer speed and judgment instead.

## What makes a decision architectural?

A decision is architectural if it matches one or more of these criteria:

| Criterion | Why it matters |
| --- | --- |
| **Hard to reverse** | Changing course later will cost meaningful time, money, or customer trust. |
| **Cross-cutting impact** | It affects more than one team, service, or subsystem. |
| **Significant trade-off** | Every reasonable option gives up something important. |
| **Sets precedent** | Other decisions will follow from it. |

If none of these apply, write down the rationale briefly and move on.

## The Decision Loop

A five-step process to move from problem to defensible decision.

### 1. Frame the problem and constraints

Before evaluating options, make the problem explicit.

- What is the decision we are actually making?
- What business or technical outcome must this enable?
- What constraints are non-negotiable? (time, budget, regulation, scale, team skills)
- What are we optimizing for? (latency, cost, maintainability, time-to-market, team autonomy)
- What would happen if we did nothing?

If the problem is fuzzy, the decision will be fuzzy. Invest time here.

### 2. Identify real alternatives

Avoid false dichotomies. A good decision review has at least two genuine alternatives plus the status quo.

- **Alternative A** - usually the obvious or popular choice
- **Alternative B** - a different approach that solves the same problem
- **Alternative C: do nothing** - always include this to force honesty about the cost of inaction

For each alternative, describe what it changes and what it leaves unchanged.

### 3. Apply the Trade-off Framework

For each alternative, answer the same four questions:

| Question | What it surfaces |
| --- | --- |
| **What do we gain?** | The benefits this option creates. |
| **What do we give up?** | The costs, limitations, or capabilities we lose. |
| **What are we assuming?** | The beliefs about scale, usage, team maturity, vendor behavior, etc., that must hold true. |
| **What is the cost to reverse?** | The effort, data migration, retraining, or relationship rebuilding required if we are wrong. |

Never skip the assumptions. They are where decisions most often fail.

#### Example: Microservices vs Modular Monolith

| | Modular monolith first | Microservices first |
|---|---|---|
| **Gain** | Simplicity, transactional consistency, lower operational overhead, faster early velocity | Independent deployability, independent scaling, strong team boundaries |
| **Give up** | Independent deployment of services, independent scaling per component | Simplicity, operational maturity required, distributed-system complexity |
| **Assume** | The system and team are not yet large enough to justify the split | Teams are mature, DevOps practices are strong, service boundaries are stable |
| **Cost to reverse** | Medium - service extraction is well understood but not free | High - merging services is harder than extracting them |

> **Recommended answer:** start with a modular monolith. Extract services when you have a proven team boundary and a measurable scaling or deployment bottleneck. Conway's Law means your architecture will mirror your organization anyway.

### 4. Decide and document

Choose the alternative that best fits the current constraints, not the one that is technically pure.

Record the decision in a lightweight ADR. Capture context, the options considered, the chosen path, and the rationale. The goal is to preserve *why* the decision was made, not just *what* was chosen.

See the lightweight ADR template below.

### 5. Communicate and commit

Translate the same decision for different audiences without changing the facts.

| Audience | What they care about | Your focus |
| --- | --- | --- |
| Engineers | Correctness, elegance, impact on their code | Technical detail, migration path, rejected alternatives |
| Tech lead / EM | Velocity, risk, dependencies | Sizing, blast radius, rollback plan |
| Product manager | Feature impact, timelines | What changes for users, timeline implications |
| CTO / VP Eng | Risk, cost, strategic fit | Business case, alternatives, recommendation |
| CFO / CEO | Cost, revenue risk, competitiveness | Money, time, cost of inaction |

Use a recommendation-first structure:

> **We recommend X.** It solves Y and Z, which are our constraints. We considered A and B; A was ruled out because... B was ruled out because... The main risks are... and we will mitigate them by...

## Lightweight ADR template

[ADR Template](/sharing-is-caring/architecture/adr-template)

Keep ADRs short. One to two pages is usually enough. Store them close to the code they affect.

## Escalate and revisit triggers

You do not need consensus to decide, but you do need the right people in the room.

**Escalate when:**

- The decision spans multiple teams and no clear owner exists.
- The trade-offs materially affect product roadmap or budget.
- The cost to reverse is high and the uncertainty is also high.
- Two reasonable alternatives both have strong advocates.

**Revisit when:**

- A core assumption is proven wrong.
- The constraints that shaped the decision have changed.
- The decision is causing repeated pain that exceeds its predicted cost.
- Significant new information becomes available (new technology, new regulation, new scale).

## Quick reference

Before making a high-stakes technical decision:

1. Confirm the decision is actually architectural.
2. Frame the problem and constraints explicitly.
3. Identify at least two real alternatives plus doing nothing.
4. For each alternative, answer: gain, give-up, assumptions, reversal cost.
5. Choose the best fit for current constraints.
6. Document the decision in a lightweight ADR/document.
7. Translate the decision for each audience, recommendation first.
8. Monitor assumptions and revisit when they change.
