# 🔧 agent.md – Universal Agent Configuration

This file defines the agent network for the project Atlas is operating within. It contains:
- Agent identities and responsibilities
- Execution triggers and inter-agent handoffs
- Optional directives or SOPs for complex tasks

Atlas reads this file on every boot to understand the available swarm structure.

---

## 🤖 Example Agent Definitions

### Name: Scout-Core
- Codename: `discovery`
- Role: Research or data collection agent
- Inputs: keywords, search directives, sources
- Outputs: structured data, discovery logs

### Name: EchoMesh
- Codename: `outreach`
- Role: Communication strategist and auto-messenger
- Inputs: lead data, context, goal
- Outputs: email drafts, sms copy, logs

### Name: Lexify
- Codename: `logic_engine`
- Role: Legal, procedural, or compliance logic
- Inputs: state, policy, entity structure
- Outputs: filing instructions, doc lists

---

## 🧠 Additional Notes
- Atlas does not modify this file.
- New agents may be added to this config any time.
- Directive files may live in `/directives/agentname.md`
