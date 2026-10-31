// Ron's offers, shared by the home page and /work-with-me.
// Background lines come from Ron's CV, santafefacilitator.com and this site.
export interface Offer {
  id: string;
  title: string;
  /** One line for the home page */
  summary: string;
  for: string;
  body: string;
  work: string[];
  background: string;
  links: { href: string; label: string }[];
}

export const offers: Offer[] = [
  {
    id: 'advisory',
    summary: 'Connect strategy, planning and performance, and get real value from the platforms you already have.',
    title: 'Strategy-to-execution advisory',
    for: 'CFOs, CIOs, and finance and planning leaders',
    body: 'Independent advice on connecting strategy, planning and performance: where your planning and performance management stand today, where they need to go, and how to get real value from the investments you’ve already made.',
    work: [
      'Enterprise performance management (EPM) roadmaps',
      'Finance transformation and Connected Planning',
      'Value realization and ROI business cases',
      'Management operating system and KPI/OKR design',
      'Acquisition integration (systems and processes)',
    ],
    background: 'Helped pioneer EPM at Hyperion, was on Anaplan’s founding team, and built Deloitte’s global Anaplan practice to $80M+ in annual revenue.',
    links: [
      { href: '/advisor', label: 'Try the Advisor self-check' },
      { href: '/solution-designer', label: 'Try the Solution designer' },
      { href: 'https://epmroadmap.co', label: 'EPM Roadmaps' },
    ],
  },
  {
    id: 'facilitation',
    summary: 'Structured sessions that get the right people to a decision they’ll act on.',
    title: 'Strategic facilitation',
    for: 'Leadership teams, boards, nonprofits and public-sector groups',
    body: 'Structured dialogue that gets the right people to a decision they’ll act on, from strategic off-sites to high-stakes panels.',
    work: [
      'Strategic and long-range planning',
      'Scenario modeling and PESTLE scenarios',
      'KPI and OKR refreshes',
      'Strategic off-sites and growth brainstorms',
      'Stakeholder mapping',
      'Expert panel moderation',
    ],
    background: 'Sessions for organizations ranging from Deloitte and Google to youth sports, universities and social start-ups.',
    links: [{ href: 'https://santafefacilitator.com', label: 'santafefacilitator.com' }],
  },
  {
    id: 'workshops',
    summary: 'Quick, hands-on workshops to solve a specific problem or explore a new opportunity.',
    title: 'Spark Labs workshops',
    for: 'Founders, consultants, creatives, business leaders and corporate teams',
    body: 'Quick, hands-on workshops to solve a specific problem or explore a new opportunity. Built for people who learn by doing.',
    work: [
      'Strategy, growth and decision-making',
      'Execution, operations and finance',
      'Sales, influence and communication',
      'Thinking, creativity and visual sense-making',
      'Technology and modern work',
    ],
    background: '45+ hands-on modules across five series.',
    links: [{ href: 'https://sparklabs.studio', label: 'sparklabs.studio' }],
  },
  {
    id: 'keynotes',
    summary: 'Keynotes, panels and half-day workshops your audience can use on Monday morning.',
    title: 'Keynotes and talks',
    for: 'Conference and event organizers, and corporate events',
    body: 'Keynotes, panel discussions and half-day workshops, customized to your audience and industry. I like interactive formats: the audience should leave with something they can use Monday morning.',
    work: [
      'The management operating system',
      'Value selling: from features to outcomes',
      'Scenario planning for competitive advantage',
      'Turning data into decisions',
      'The KPI trap: measuring what matters',
    ],
    background: 'Stages include ODTUG Kscope, OAUG Collaborate and Ohio State University. My Connected Planning webinar with Deloitte has 24,000+ views.',
    links: [
      { href: '/books#speaking', label: 'All talks and videos' },
      { href: '/speaker-kit', label: 'Speaker kit' },
    ],
  },
  {
    id: 'mentoring',
    summary: 'Strategy, financial modeling, growth and funding, for founders and executives.',
    title: 'Founder and executive mentoring',
    for: 'Early-stage founders and executives',
    body: 'Guidance on strategy, financial modeling, growth and funding: the questions I work through with founders in UNM’s accelerator and as an angel investor.',
    work: [
      'Business model and strategy',
      'Financial modeling',
      'Growth and go-to-market',
      'Funding strategy and investor readiness',
    ],
    background: 'Lead faculty and acting executive director of UNM’s Center for Responsible Entrepreneurship accelerator; angel investor and advisor with New Mexico Angels.',
    links: [{ href: 'https://business.unm.edu/center-for-responsible-entrepreneurship/index.html', label: 'UNM Center for Responsible Entrepreneurship' }],
  },
];
