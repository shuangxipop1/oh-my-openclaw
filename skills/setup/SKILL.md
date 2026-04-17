---
name: Setup
description: Install and configure oh-my-openclaw
triggers:
  - "/setup"
  - "setup"
入口点: execute
mode: setup
---
# Setup Skill

Install and configure oh-my-openclaw.

## Usage

```
/setup
/setup --force
```

## Effect

Runs the installation process for OMO including:
- Creating necessary directories
- Installing skills
- Configuring hooks
- Verifying installation
