---
name: Team
description: Multi-agent coordination
triggers:
  - "/team"
  - "team"
入口点: execute
mode: coordinated
agents:
  - planner
  - architect
  - executor
  - critic
---
# Team Skill

Multi-agent coordination workflow.

## Usage

```
/team "build e-commerce checkout"
/team "design microservices architecture"
```

## Flow

1. Planner breaks down project into tasks
2. Architect designs system
3. Executors implement in parallel
4. Critics review continuously
