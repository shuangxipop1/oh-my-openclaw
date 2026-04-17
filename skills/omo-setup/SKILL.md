---
name: OMO Setup
description: Install or refresh oh-my-openclaw configuration
triggers:
  - "/omo-setup"
  - "omo-setup"
入口点: execute
mode: setup
---
# OMO Setup Skill

Install or refresh oh-my-openclaw configuration.

## Usage

```
/omo-setup
/omo-setup --force
```

## Options

- `--force`: Force reinstallation
- `--skip-hooks`: Skip hook installation
