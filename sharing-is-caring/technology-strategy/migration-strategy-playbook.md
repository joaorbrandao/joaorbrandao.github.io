# Migration Strategy Playbook

A playbook for replacing legacy systems incrementally and safely.

## When to use this playbook

Use it when you need to replace, refactor, or retire a legacy system, service, data store, or API without stopping the business.

## The Strangler Fig pattern

Instead of a big-bang rewrite, route traffic through a facade and replace capabilities piece by piece.

```
BEFORE:
[All traffic] → [Legacy system]

DURING:
[All traffic] → [Facade / proxy] → [Legacy system]
                              ↘ [New service A]  (migrated)

AFTER:
[All traffic] → [New system]
                [Legacy system decommissioned]
```

The facade lets you migrate capability by capability, validate parity, and roll back quickly.

## Migration principles

| Principle | Why it matters |
| --- | --- |
| **Never big bang** | Risk is too concentrated; rollback is catastrophic |
| **Migrate data last** | Data migration is the hardest and most irreversible step |
| **Run in parallel** | Compare outputs before cutover |
| **Use feature flags for cutover** | Flip traffic percentage gradually; roll back instantly |
| **Define "done" upfront** | Migrations fail when the legacy system never dies |

## Step-by-step playbook

### 1. Identify seams

Find natural boundaries in the legacy system: bounded contexts, data ownership boundaries, or API surfaces. Each seam is a candidate for incremental extraction.

### 2. Introduce a facade or proxy

Place a thin routing layer in front of the legacy system. This layer will gradually send traffic to new components while the rest of the system keeps working.

### 3. Migrate capability by capability

Pick the seam with the highest pain or lowest risk first. Build the new capability behind the facade, then route a small percentage of traffic to it.

### 4. Validate parity

Run both systems in parallel. Compare outputs, latency, error rates, and side effects. Define tolerance thresholds before comparing.

### 5. Gradual cutover

Increase traffic to the new system in stages:

- 1% → 10% → 50% → 100%
- At each stage, monitor error rates, latency, and business metrics.
- Keep the ability to revert to the legacy path at every stage.

### 6. Decommission the legacy system

Define decommission as part of the plan before you start. "Done" means the legacy system is removed, dependencies are updated, documentation is archived, and the team is no longer supporting it.

## Cutover checklist

- [ ] Data parity validated between old and new systems
- [ ] Error rate within acceptable threshold for current traffic percentage
- [ ] Latency within acceptable threshold
- [ ] Rollback path tested and documented
- [ ] Runbook updated for the new system
- [ ] On-call team trained on failure modes
- [ ] Feature flag or routing switch in place
- [ ] Legacy decommission date scheduled

## Common pitfalls

- **The legacy system never dies** - without a decommission date, old and new systems run forever.
- **Data migration first** - migrating data before behavior makes rollbacks expensive.
- **No rollback plan** - a cutover without a tested rollback is a one-way door.
- **Skipping parity validation** - assuming the new system works the same way without evidence.
- **Cutting over too fast** - moving to 100% before observing real traffic patterns.

## Quick reference

1. Never rewrite everything at once.
2. Put a facade or proxy in front of the legacy system.
3. Migrate one capability or seam at a time.
4. Validate parity while running both systems.
5. Cut over traffic gradually using feature flags.
6. Test the rollback path before each stage.
7. Schedule the legacy system decommission date upfront.
8. "Done" means the old system is gone.
