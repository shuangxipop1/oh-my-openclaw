#!/bin/bash
# Oh-My-Openclaw Installer for OpenClaw AI
# Multi-agent orchestration system

set -e

BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}Oh-My-Openclaw Installer${NC}"
echo "========================"

# Check prerequisites
echo -e "${BLUE}Checking prerequisites...${NC}"

# Check Node.js
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}Node.js not found. Please install Node.js >= 20.0.0${NC}"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 20 ]; then
    echo -e "${YELLOW}Node.js version 20+ required. Found: $(node -v)${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Node.js: $(node -v)${NC}"

# Check OpenClaw
if ! command -v openclaw &> /dev/null; then
    echo -e "${YELLOW}OpenClaw AI not found. Please install OpenClaw first.${NC}"
    exit 1
fi
echo -e "${GREEN}✓ OpenClaw AI: installed${NC}"

# Install npm package
echo -e "${BLUE}Installing oh-my-openclaw...${NC}"
npm install -g oh-my-openclaw@latest 2>/dev/null || echo "Package not published yet, using local installation"

# Create OMO directory in OpenClaw
OPENCLAW_DIR="$HOME/.openclaw"
OMO_DIR="$OPENCLAW_DIR/omo"

echo -e "${BLUE}Setting up OMO in OpenClaw...${NC}"

# Create directories
mkdir -p "$OMO_DIR"
mkdir -p "$OPENCLAW_DIR/skills/omo"

# Copy skills to OpenClaw skills directory
# OpenClaw expects skills in ~/.openclaw/skills/<skill-name>/
OPENCLAW_SKILLS_DIR="$OPENCLAW_DIR/skills"
OMO_SKILLS_DIR="$OPENCLAW_SKILLS_DIR/omo"

echo -e "${BLUE}Setting up OMO skills in OpenClaw...${NC}"

# Create OpenClaw skills directory
mkdir -p "$OMO_SKILLS_DIR"

# Copy skills to OpenClaw skills directory (correct location)
if [ -d "$SCRIPT_DIR/skills" ]; then
    cp -r "$SCRIPT_DIR/skills/"* "$OMO_SKILLS_DIR/"
    echo -e "${GREEN}✓ Skills installed to $OMO_SKILLS_DIR${NC}"
fi

# Copy agents
if [ -d "$SCRIPT_DIR/agents" ]; then
    mkdir -p "$OPENCLAW_DIR/agents/omo"
    cp -r "$SCRIPT_DIR/agents/"* "$OPENCLAW_DIR/agents/omo/"
    echo -e "${GREEN}✓ Agents installed${NC}"
fi

# Copy CLAUDE.md
if [ -f "$SCRIPT_DIR/CLAUDE.md" ]; then
    cp "$SCRIPT_DIR/CLAUDE.md" "$OPENCLAW_DIR/CLAUDE.md"
    echo -e "${GREEN}✓ CLAUDE.md installed${NC}"
fi

# Refresh OpenClaw skills
echo -e "${BLUE}Refreshing OpenClaw skills...${NC}"
openclaw skills audit 2>/dev/null || true

echo ""
echo -e "${GREEN}========================"
echo -e "${GREEN}Oh-My-Openclaw Setup Complete!${NC}"
echo "========================"
echo ""
echo "Usage in OpenClaw:"
echo "  /autopilot - Full autonomous execution"
echo "  /ralph     - Persistence loop until completion"
echo "  /ultrawork - Parallel execution engine"
echo "  /team      - Multi-agent coordination"
echo "  /plan      - Strategic planning"
echo "  /ultraqa   - QA cycling workflow"
echo "  /cancel    - Cancel active modes"
echo ""
