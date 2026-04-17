---
name: Ultrawork
description: Parallel execution engine
triggers:
  - "/ultrawork"
  - "ultrawork"
入口点: execute
mode: parallel
agents:
  - executor
  - test-engineer
---
# Ultrawork Skill

High-throughput parallel execution engine.

## Usage

```
/ultrawork "run all tests"
/ultrawork "build and deploy"
```

## Flow

1. Break task into independent subtasks
2. Execute subtasks in parallel
3. Aggregate results
4. Report completion
