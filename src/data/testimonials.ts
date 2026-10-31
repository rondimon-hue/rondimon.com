// Sources: LinkedIn recommendations (Ron's profile, PDF export) and client reviews
// on santafefacilitator.com. Wording is verbatim except obvious spelling fixes;
// "…" marks a trim. Titles are the recommender's current LinkedIn headline.
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  source: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'I’m not usually a fan of high-level visioning exercises… This was the complete opposite, and I left feeling energized and confident in the team’s ability to execute and keep this going.',
    name: 'Deputy CFO',
    role: 'Facilitation client (anonymous)',
    source: 'santafefacilitator.com',
  },
  {
    quote:
      'Ron is simply unmatched in ability as a performance management consultant — one who listens as much as talks, who provides thoughtful feedback to customers challenged with the toughest performance problems.',
    name: 'Phyllis Davidson',
    role: 'VP, Principal Analyst, Forrester',
    source: 'LinkedIn recommendation',
  },
  {
    quote:
      'Ron has excellent communication skills and is very effective in executive dialogues. He has a unique knowledge of business processes and how technology can improve those processes. Ron is someone that I would want with me in any complex business situation.',
    name: 'Ken Hohenstein',
    role: 'Chief Revenue & Executive Officer, OneStream Software',
    source: 'LinkedIn recommendation',
  },
  {
    quote:
      'Customers who he works with absolutely love Ron. He doesn’t stop before he reaches his goal, yet does so with showing everyone the utmost respect. Ron navigates seamlessly through highly political customer environments.',
    name: 'Frank Buytendijk',
    role: 'Futurist, ethicist and keynote speaker',
    source: 'LinkedIn recommendation',
  },
  {
    quote:
      'Ron is one of the finest business professionals I’ve ever had the privilege of working with. He’s extremely bright and knowledgeable, customers adore him and he takes initiative and gets stuff done without needing any oversight.',
    name: 'Howard Dresner',
    role: 'Chief Research Officer, Dresner Advisory Services',
    source: 'LinkedIn recommendation',
  },
];
