// The management cycle from Enterprise Performance Management Done Right, as Ron
// describes it in "The Management Operating System" (archive, 2013) and
// "8 Principles of Enterprise Performance Management" (archive, 2013).
// Used by /advisor (self-check) and /solution-designer.

export interface Stage {
  id: 'strategy' | 'debate' | 'commit' | 'gather' | 'understand' | 'connect';
  name: string;
  /** Ron's own description of the stage */
  summary: string;
  /** Self-check statements, rated from "Not yet" to "Consistently" */
  statements: string[];
  /** Where to start if this is the weakest stage */
  nextStep: string;
  offer: { id: string; label: string };
  reading: { slug: string; title: string }[];
}

export const stages: Stage[] = [
  {
    id: 'strategy',
    name: 'Strategy',
    summary: 'Strategic objectives everyone can act on: where the cycle starts and what every other stage is measured against.',
    statements: [
      'Our strategic objectives are clear, and people on the front line can explain how their work connects to them.',
      'Leaders’ actions and resource decisions are consistent with the strategy.',
    ],
    nextStep: 'Make the strategy meaningful to the people who carry it out, and agree how you will measure it.',
    offer: { id: 'facilitation', label: 'Strategic facilitation' },
    reading: [{ slug: 'closing-the-strategy-execution-gap', title: 'Closing the Strategy-Execution Gap' }],
  },
  {
    id: 'debate',
    name: 'Debate',
    summary: 'Scenarios, what-if models and strategic plans. This is where targets come from.',
    statements: [
      'We test targets with scenarios and what-if models before we commit to them.',
      'We know what levels of performance are possible for our business in the future.',
    ],
    nextStep: 'Build a small set of scenarios and what-if models so targets come from evidence rather than last year plus a percentage.',
    offer: { id: 'facilitation', label: 'Strategic facilitation' },
    reading: [{ slug: 'getting-better-at-getting-ready-scenario-planning-for-compet', title: 'Getting Better at Getting Ready: Scenario Planning for Competitive Advantage' }],
  },
  {
    id: 'commit',
    name: 'Commit',
    summary: 'Budgets, plans and forecasts that document who is on the hook for what, by when.',
    statements: [
      'Our budgets, plans and forecasts make clear who is on the hook for what, by when.',
      'We have accountability at all levels for achieving what we’ve committed to.',
    ],
    nextStep: 'Connect targets to plans and forecasts with named owners and dates, so commitments are visible and trackable.',
    offer: { id: 'advisory', label: 'Strategy-to-execution advisory' },
    reading: [
      { slug: 'enterprise-planning', title: 'Enterprise Planning' },
      { slug: 'enterprise-planning-forecasting-flow', title: 'Enterprise Planning & Forecasting Flow' },
    ],
  },
  {
    id: 'gather',
    name: 'Gather',
    summary: 'Collecting your data and turning it into usable information, so managers can answer “where are we, right now?”',
    statements: [
      'Managers can quickly answer “where are we, right now?”',
      'Financial and operational results come together in the same reports.',
    ],
    nextStep: 'Turn data into information people actually use: the right reports, in the right format, for the right people.',
    offer: { id: 'advisory', label: 'Strategy-to-execution advisory' },
    reading: [
      { slug: '8-ingredients-to-turn-data-into-useful-information', title: '8 Ingredients to Turn Data into Useful Information' },
      { slug: '8-report-types-for-better-information-delivery', title: '8 Report Types for Better Information Delivery' },
    ],
  },
  {
    id: 'understand',
    name: 'Understand',
    summary: 'Analyzing results against history, predictions and trends until you get to the root cause of performance, positive and negative.',
    statements: [
      'We compare results to history, forecasts and trends until we find the root cause, good or bad.',
      'Everyone works from the same facts and speaks a common business language.',
    ],
    nextStep: 'Agree on common definitions and the business questions that matter, then build the analysis to answer them.',
    offer: { id: 'workshops', label: 'Spark Labs workshops' },
    reading: [
      { slug: 'answering-business-questions', title: 'Answering Business Questions' },
      { slug: 'why-are-my-numbers-different-than-yours', title: 'Why Are My Numbers Different Than Yours?' },
    ],
  },
  {
    id: 'connect',
    name: 'Close the loop',
    summary: 'Bringing the parts together with common data and definitions, so each stage feeds the next: the backbone of a management operating system.',
    statements: [
      'Actual results are compared to the commitments made in planning, and what we learn feeds the next cycle.',
      'Planning, reporting and analysis share common data and definitions.',
    ],
    nextStep: 'Connect the stages into one closed loop with shared data, so strategy, plans and results stay in step.',
    offer: { id: 'advisory', label: 'Strategy-to-execution advisory' },
    reading: [
      { slug: 'the-management-operating-system', title: 'The Management Operating System' },
      { slug: 'a-management-operating-system', title: 'A Management Operating System' },
    ],
  },
];
