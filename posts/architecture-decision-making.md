# Architecture Decision Making

A talented team can still end up with a fragile system if its decisions rely on habit, authority, or "best practice" without context. The difference between a team that ships confidently and one that constantly rehashes old choices is usually not raw skill. It is the quality of the decision-making process.

This post introduces a structured approach to making technical decisions, together with a reusable framework you can apply to your own work.

## The real problem

Technical decisions in most organizations follow one of these patterns:

- **The default choice.** Everyone picks what they already know, even when the context has changed.
- **The loudest voice.** The decision goes to whoever argues longest or holds the most seniority.
- **The invisible trade-off.** The team chooses an option without writing down what it gives up, so the cost only surfaces months later.
- **The endless debate.** The same discussion happens repeatedly because no decision was ever properly documented.

These patterns share a root cause: the absence of a shared, repeatable process for evaluating options and recording the result.

When the process is weak, every decision becomes political. When the process is clear, the decision becomes technical again.

## A decision-making strategy

The goal is not to make every decision slowly. The goal is to make important decisions well and then move on.

There are two principles behind the framework:

1. **Separate framing from choosing.** Most bad decisions come from solving the wrong problem. Define the problem and constraints before listing solutions.
2. **Make trade-offs explicit.** Every real option gives something up. If you cannot name what you are giving up, you have not understood the choice.

The framework is intentionally lightweight. It is meant to fit into a design review, a planning session, or an interview, not to create bureaucracy.

For the full reference, see the [Architecture Decision-Making Framework](/sharing-is-caring/frameworks/architecture-decision-making-framework).

## When structured decision-making matters

You get the most value from this approach when a decision is:

- **Hard to reverse** - changing course later will be expensive.
- **Cross-cutting** - it affects multiple teams, services, or systems.
- **Trade-off rich** - every reasonable option has meaningful downsides.
- **Precedent-setting** - other decisions will follow from it.

A database choice, a service boundary, an API versioning strategy, or a migration plan are typical examples. A function name or a library patch usually is not.

The framework is not about making every decision perfect. It is about making important decisions defensible.

## How the framework works

The framework is built around a simple loop:

1. **Frame the problem.** What are you deciding, what constraints apply, and what happens if you do nothing?
2. **Identify real alternatives.** Always include:

    - at least two options
    - "do nothing"

3. **Apply the trade-off lens.** For each alternative, answer:

    - what do we gain?
    - what do we give up?
    - what assumptions are we making?
    - what does it cost to reverse?

4. **Decide and document.** Choose the best fit for the current constraints and capture the reasoning.
5. **Communicate.** Translate the same decision for different audiences, recommendation first.

The centerpiece is the trade-off analysis. Writing down what each option costs forces a level of honesty that most informal discussions skip.

Here is an example teams encounter often: should we start with microservices or a modular monolith?

| | Modular monolith first | Microservices first |
|---|---|---|
| **What we gain** | Simplicity, transactional consistency, lower operational overhead, faster early velocity | Independent deployability, independent scaling, clearer team ownership |
| **What we give up** | Independent deployment, scaling by component | Simplicity, operational maturity, freedom from distributed-system problems |
| **What we assume** | The system and organization are not yet large enough to justify the split | Teams are mature, DevOps practices are strong, boundaries are stable |
| **Cost to reverse** | Medium - extraction is understood but not free | High - merging services is harder than splitting them |

Neither choice is universally correct. The right answer depends on the team, the product stage, and the constraints. The framework makes that dependency visible.

## Putting it into practice

### In design reviews

Instead of asking "what should we build?", start with:

- What problem are we solving?
- What are the two or three real alternatives?
- What does each alternative cost us?

This shifts the conversation from opinion to evaluation.

### In ADRs

An Architecture Decision Record should be short. One page that captures context, options, the chosen path, and consequences is usually enough. The goal is to make the reasoning searchable six months later, not to produce a perfect document.

The framework includes a lightweight ADR template to copy and adapt.

### In stakeholder alignment

The same decision needs different narratives. Engineers need migration detail. Engineering managers need blast radius and effort. Executives need business risk and cost of inaction. Product needs to know what changes for users.

Prepare each version in advance. Recommendation first. Alternatives and risks next.

## What changes when you use it

Teams that adopt a structured approach usually notice three shifts:

- **Fewer repeated debates.** Decisions are documented, so the organization stops re-litigating them.
- **Faster escalation.** When trade-offs are explicit, it is obvious whether a decision belongs in a team room or needs executive input.
- **Better reversals.** When assumptions are written down, the team knows exactly what signal should cause the decision to be revisited.

None of this replaces judgment. It supports it.

## A useful habit

At your next design review, pause before the team picks a favorite option. Ask:

> What are we assuming that could be wrong, and what will it cost us if it is?

That single question, asked consistently, will improve the quality of your technical decisions more than any specific tool.

For the full framework and reusable templates, see the [Architecture Decision-Making Framework](/sharing-is-caring/frameworks/architecture-decision-making-framework).
