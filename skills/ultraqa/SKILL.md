---
name: Ultraqa
description: QA cycling workflow
triggers:
  - "/ultraqa"
  - "ultraqa"
入口点: execute
mode: qa
agents:
  - test-engineer
  - critic
  - debugger
---
# Ultraqa Skill

QA cycling workflow for continuous quality assurance.

## Usage

```
/ultraqa "validate entire codebase"
/ultraqa "security audit"
```

## Flow

1. Generate test cases
2. Execute tests
3. Critic analyzes failures
4. Debugger fixes issues
5. Repeat until quality passes
