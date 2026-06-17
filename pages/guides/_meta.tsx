import { SolutionsIcon,PlaybooksIcon,DiscoverIcon } from "../../components/svg/NavIcon";

import style from "../docs/sidebar.module.scss";

export default {
  "discover-mixpanel": {
    type: "separator",
    title: (
      <div className={style.titleContainer}>
        <DiscoverIcon /> DISCOVER
      </div>
    ),
  },
  "mixpanel-introduction": "Mixpanel Introduction",
  "self-guided-tours": "Self-Guided Tours",
  "changelog": {
      title: "What's New? ↗",
      href: "/changelogs",
    newWindow: true
    },
  "solutions-and-workflows": {
    type: "separator",
    title: (
      <div className={style.titleContainer}>
        <SolutionsIcon /> WORKFLOWS
      </div>
    ),
  },
  "guides-by-use-case": "Guides by Use Case",
  "guides-by-workflow": "Guides by Workflow",
  "guides-by-topic": "Guides by Topic",
  "mixpanel-ai": {
    type: "separator",
    title: (
      <div className={style.titleContainer}>
        <DiscoverIcon /> MIXPANEL AI
      </div>
    ),
  },
  "mixpanel-agent": {
      title: "Use Mixpanel Agent",
      href: "/guides/guides-by-use-case/empower-your-team/mixpanel-agent",
      newWindow: false
    },
  "mixpanel-mcp": {
    title: "Use Mixpanel MCP",
    href: "/guides/guides-by-use-case/empower-your-team/mcp",
    newWindow: false
  },
  "mcp-by-industry": {
    title: "MCP by Industry",
    href: "/guides/guides-by-use-case/empower-your-team/mcp/mcp-by-industry",
    newWindow: false
  },
  "mcp-integration": {
    title: "MCP Integration",
    href: "/guides/guides-by-use-case/empower-your-team/mcp/integrations",
    newWindow: false
    },
  "mixpanel-headless": {
      title: "Use Mixpanel Headless",
      href: "/guides/guides-by-use-case/empower-your-team/headless",
      newWindow: false
    },
  "best-practices-and-playbooks": {
    type: "separator",
    title: (
      <div className={style.titleContainer}>
        <PlaybooksIcon /> PLAYBOOKS
      </div>
    ),
  },
  "benchmarks": "Benchmarks",
  "board-templates": "Template Gallery",
  "strategic-playbooks": "Strategic Playbooks",
  "glossary": "Glossary"
}
