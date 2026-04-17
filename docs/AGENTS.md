# Agent Catalog

## Core Agents

| Agent | Description |
|-------|-------------|
| `architect` | System design and architecture planning |
| `executor` | Code implementation and execution |
| `critic` | Code review and quality assurance |
| `test-engineer` | Test writing and validation |
| `debugger` | Issue diagnosis and fixing |
| `planner` | Task breakdown and scheduling |

## Usage

Agents are invoked automatically by skills:

- **Autopilot**: architect → executor → critic → repeat
- **Ralph**: executor → debugger (persistence loop)
- **Team**: planner → architect → executor → critic
