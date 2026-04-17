---
name: Autopilot
description: Full autonomous execution from idea to code
triggers:
  - "/autopilot"
  - "autopilot"
入口点: execute
mode: autonomous
agents:
  - architect
  - executor
  - critic
---
# Autopilot Skill

Full autonomous execution agent that takes a task from idea to implementation.

## Usage

```
/autopilot "build a REST API for managing tasks"
```

## Flow

1. Architect analyzes requirements
2. Executor implements code
3. Critic reviews implementation
4. Repeat until complete
