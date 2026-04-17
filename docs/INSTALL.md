# Installation Guide

## Prerequisites

- Node.js >= 20.0.0
- OpenClaw AI installed and configured

## Installation

### Option 1: npm (recommended)

```bash
npm i -g oh-my-openclaw@latest
omo setup
```

### Option 2: Install script

```bash
git clone https://github.com/shuangxipop1/oh-my-openclaw.git
cd oh-my-openclaw
./install.sh
```

### Option 3: Manual

```bash
# Create OMO directory
mkdir -p ~/.openclaw/omo

# Copy skills
cp -r skills/* ~/.openclaw/omo/

# Verify
omo doctor
```

## Verification

```bash
omo doctor
```

Expected output shows all skills installed and OpenClaw integration working.
