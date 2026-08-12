# Build vs Buy vs Borrow Framework

A decision framework for choosing whether to build, buy, or borrow a technology capability.

## When to use this framework

Use it when selecting a tool, platform, library, or vendor for a capability that has meaningful cost, integration effort, or switching risk.

For trivial, low-risk choices - a utility library, a well-known formatter - use judgment and move on.

## The decision flow

Work through the four questions in order.

### 1. Is this core to our competitive differentiation?

If the capability is central to what makes your product or company different, build it.

| Answer | Bias |
| --- | --- |
| Yes | Build |
| No | Continue to question 2 |

Core domain logic, proprietary algorithms, and unique customer experiences usually belong here.

### 2. Does a mature solution exist?

If the problem is solved well by the market, do not build it from scratch.

| Answer | Bias |
| --- | --- |
| Yes, mature commercial product | Buy |
| Yes, mature open-source project | Borrow (OSS) |
| No, nothing fits | Build (or delay) |

### 3. What is the total cost of ownership?

Look past the sticker price.

| Path | Cost components |
| --- | --- |
| **Build** | Development time + maintenance + operations + opportunity cost |
| **Buy** | License or usage fees + integration + training + vendor lock-in risk |
| **Borrow (OSS)** | Integration + maintenance burden + security patching + community health risk |

Rule of thumb: integration effort often consumes 40–60% of the total cost for bought or borrowed solutions.

### 4. What is the switching cost if we are wrong?

| Switching cost | Bias |
| --- | --- |
| High | Prefer the reversible option, or abstract the choice behind an internal interface |
| Low | Optimize for speed |

## Decision matrix

| Scenario | Recommendation | Reason |
| --- | --- | --- |
| Auth / SSO | Buy | Commodity, security-critical, high build cost |
| Payment processing | Buy | Regulatory complexity, not core to most businesses |
| Message queue | Borrow (Kafka, RabbitMQ) | Solved problem, mature ecosystem |
| Search | Borrow (Elasticsearch, OpenSearch) | Commodity, but needs tuning |
| Internal analytics | Buy (Datadog, Grafana Cloud) | High operational cost to self-host |
| Core domain logic | Build | Competitive differentiation |

## Common pitfalls

- **"We can build it better"** - almost never true for commodity infrastructure.
- **Underestimating integration cost** - budget 40–60% of the vendor or OSS cost for integration, customization, and rollout.
- **Ignoring vendor lock-in** - wrap proprietary services behind internal interfaces when switching cost is high.
- **Treating build as free** - ongoing maintenance, security patches, and operational burden are real costs.

## Quick reference

Before choosing build, buy, or borrow:

1. Confirm whether the capability is core to differentiation.
2. Check whether a mature solution already exists.
3. Estimate total cost of ownership over 2–3 years.
4. Estimate the cost to switch if the choice is wrong.
5. Prefer build for core differentiators.
6. Prefer buy for commodity, security-critical, or regulated capabilities.
7. Prefer borrow for mature, well-supported open-source infrastructure.
8. Abstract high-lock-in choices behind internal interfaces.
