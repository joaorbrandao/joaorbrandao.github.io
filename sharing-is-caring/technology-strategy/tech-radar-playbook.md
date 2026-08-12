# Tech Radar Playbook

A playbook for maintaining a technology radar that creates bounded autonomy across engineering teams.

## When to use this playbook

Use it when you want to align technology choices across multiple teams without removing their ability to innovate, or when your organization is accumulating inconsistent tools and patterns.

## What a tech radar is

A tech radar is a shared view of the technologies your organization is using or evaluating. It creates **bounded autonomy**: teams can choose tools, but only within agreed guardrails.

Without a radar, every team makes independent choices. The result is fragmentation, duplicated effort, and a long tail of unsupported tools.

## The four rings

```
           ADOPT
       (use in production)
            ↑
          TRIAL
      (use on a project)
            ↑
          ASSESS
     (worth exploring)
            ↑
           HOLD
      (don't start new
       work with this)
```

| Ring | Meaning | When to move in | When to move out |
| --- | --- | --- | --- |
| **Adopt** | Proven, recommended default | Technology has run successfully in production for multiple teams with no critical blockers | Rarely; only if the ecosystem shifts or a replacement proves superior |
| **Trial** | Promising, use with eyes open | Strong signal from a spike or single production use case | Promoted to Adopt if proven, moved to Hold if problems emerge |
| **Assess** | Worth exploring, watch closely | New technology that may solve a real organizational problem | Promoted to Trial after a successful spike, demoted if interest fades |
| **Hold** | Do not start new work with this | Technology is deprecated, risky, or superseded | Only if a compelling reason to reassess appears |

## Example radar entries

| Technology | Ring | Example rationale |
| --- | --- | --- |
| Kotlin | Adopt | Proven default for backend services |
| PostgreSQL | Adopt | Default relational datastore |
| Kafka | Adopt | Default event streaming platform |
| Temporal.io | Trial | Used in one project; evaluating operational maturity |
| CockroachDB | Trial | Evaluating for global distribution use cases |
| LLM-native tooling | Assess | Watch closely; could change developer workflows |
| Older XML-based config | Hold | Deprecated; prefer type-safe configuration |

## How to run the radar

### Cadence

- Review the radar **quarterly**.
- Accept new proposals at any time, but batch ring changes to the review cycle.
- Publish the radar in a single place that every engineer can find.

### Process

1. **Propose** - anyone can propose a new entry or ring change using the entry template.
2. **Assess** - a small group (e.g., architecture guild, staff engineers) reviews evidence: production experience, community health, security posture, integration effort, support model.
3. **Decide** - place the entry on the radar and document the rationale.
4. **Communicate** - announce changes to the engineering organization.
5. **Revisit** - review existing entries each cycle; demote or remove entries that no longer fit.

### Entry template

Use this for each proposal:

```markdown
## [Technology name]

**Proposed ring:** Adopt / Trial / Assess / Hold

**Date proposed:** YYYY-MM-DD

**Owner:** Name or team

**Problem it solves**
What organizational or technical problem does this address?

**Evidence**
- Production experience: ...
- Community / vendor health: ...
- Integration effort: ...
- Security and compliance notes: ...

**Risks**
What could go wrong?

**Revisit trigger**
When should we reassess this entry?
```

## Common pitfalls

- **Radar as wallpaper** - publishing without enforcing it. Link the radar to project kickoffs, design reviews, and engineering onboarding.
- **No revisit cadence** - entries become stale. Set a review cycle.
- **Too many Adopt entries** - if everything is Adopt, the radar gives no guidance. Be selective.
- **Top-down only** - the radar should reflect real team experience, not only leadership preferences.

## Quick reference

1. Define four rings with clear meanings.
2. Create a lightweight proposal template.
3. Establish a quarterly review cadence.
4. Assign ownership of the radar process.
5. Communicate ring changes to the organization.
6. Use the radar at project kickoffs and design reviews.
7. Revisit existing entries every cycle.
8. Keep Adopt selective - too many defaults is the same as no default.
