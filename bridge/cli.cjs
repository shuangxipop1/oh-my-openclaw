#!/usr/bin/env node
// OMO CLI Bridge for OpenClaw AI

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const BLUE = '\x1b[34m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RED = '\x1b[31m';
const NC = '\x1b[0m';

const log = {
  blue: (msg) => console.log(`${BLUE}${msg}${NC}`),
  green: (msg) => console.log(`${GREEN}${msg}${NC}`),
  yellow: (msg) => console.log(`${YELLOW}${msg}${NC}`),
  red: (msg) => console.log(`${RED}${msg}${NC}`),
};

const HOME_DIR = process.env.HOME || process.env.USERPROFILE;
const OMO_DIR = path.join(HOME_DIR, '.openclaw', 'omo');
const OPENCLAW_DIR = path.join(HOME_DIR, '.openclaw');

function showHelp() {
  log.blue('Oh-My-Openclaw CLI');
  console.log('==================');
  console.log('');
  console.log('Usage: omo <command>');
  console.log('');
  console.log('Commands:');
  console.log('  setup     Install or refresh OMO');
  console.log('  doctor    Verify installation');
  console.log('  help      Show this help');
  console.log('');
  console.log('Skills in OpenClaw:');
  console.log('  /autopilot - Full autonomous execution');
  console.log('  /ralph     - Persistence loop');
  console.log('  /ultrawork - Parallel execution');
  console.log('  /team      - Multi-agent coordination');
  console.log('  /plan      - Strategic planning');
  console.log('  /ultraqa   - QA cycling workflow');
  console.log('  /cancel    - Cancel active modes');
  console.log('');
}

function runDoctor() {
  log.blue('OMO Doctor');
  console.log('==========');
  console.log('');

  let issues = 0;

  // Check Node.js
  try {
    const nodeVersion = process.version;
    const majorVersion = parseInt(nodeVersion.split('.')[0].slice(1));
    if (majorVersion >= 20) {
      log.green(`✓ Node.js: ${nodeVersion}`);
    } else {
      log.red(`✗ Node.js: ${nodeVersion} (need 20+)`);
      issues++;
    }
  } catch (e) {
    log.red('✗ Node.js not found');
    issues++;
  }

  // Check OpenClaw
  try {
    execSync('openclaw --version', { stdio: 'ignore' });
    log.green('✓ OpenClaw AI: installed');
  } catch (e) {
    log.yellow('⚠ OpenClaw AI: not found in PATH');
  }

  // Check OMO directory
  if (fs.existsSync(OMO_DIR)) {
    log.green(`✓ OMO skills: ${OMO_DIR}`);
  } else {
    log.yellow(`⚠ OMO skills: not installed (run 'omo setup')`);
  }

  // Check skills
  const skills = ['autopilot', 'ralph', 'ultrawork', 'team', 'plan', 'ultraqa', 'cancel', 'omo-setup', 'setup'];
  let skillsInstalled = 0;
  skills.forEach(skill => {
    const skillPath = path.join(OMO_DIR, skill);
    if (fs.existsSync(skillPath)) {
      skillsInstalled++;
    }
  });
  log.green(`✓ Skills installed: ${skillsInstalled}/${skills.length}`);

  console.log('');
  if (issues === 0) {
    log.green('All checks passed!');
  } else {
    log.yellow(`${issues} issue(s) found`);
  }
}

function runSetup() {
  log.blue('Running OMO setup...');
  console.log('');

  // Create directories
  fs.mkdirSync(OMO_DIR, { recursive: true });
  fs.mkdirSync(path.join(OPENCLAW_DIR, 'skills', 'omo'), { recursive: true });

  // Copy skills from package
  const srcSkills = path.join(__dirname, '..', 'skills');
  if (fs.existsSync(srcSkills)) {
    fs.readdirSync(srcSkills).forEach(skill => {
      const src = path.join(srcSkills, skill);
      const dest = path.join(OMO_DIR, skill);
      if (fs.statSync(src).isDirectory()) {
        fs.cpSync(src, dest, { recursive: true });
      }
    });
    log.green('✓ Skills copied');
  }

  console.log('');
  log.green('Setup complete!');
  console.log('Usage: /autopilot, /ralph, /team, /plan, /ultraqa, /cancel');
}

const args = process.argv.slice(2);
const command = args[0] || 'help';

switch (command) {
  case 'setup':
    runSetup();
    break;
  case 'doctor':
    runDoctor();
    break;
  case 'help':
  default:
    showHelp();
}
