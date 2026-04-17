# Contributing

Contributions welcome!

## Development

```bash
# Clone
git clone https://github.com/shuangxipop1/oh-my-openclaw.git
cd oh-my-openclaw

# Install
npm install

# Test CLI
node bridge/cli.cjs doctor
```

## Adding New Skills

1. Create `skills/<skill-name>/SKILL.md`
2. Create `skills/<skill-name>/__init__.py`
3. Add entry point function
4. Update documentation
