---
name: Ralph
description: Self-referential loop until task completion
triggers:
  - "/ralph"
  - "ralph"
入口点: execute
mode: persistence
agents:
  - executor
  - debugger
---
# Ralph Skill

Persistence loop agent that continues execution until task completion.

## Usage

```
/ralph "implement user authentication"
```

## Flow

1. Execute current task
2. Verify result
3. If incomplete, retry with learned corrections
4. Repeat until verification passes
