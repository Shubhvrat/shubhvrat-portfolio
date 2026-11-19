export type Project = {
  slug: string
  name: string
  category: string
  summary: string
  year: string
  artClass: string
  role: string
  challenge: string
  approach: string
  outcome: string
  services: string[]
}

export const projects: Project[] = [
  {
    slug: 'lyfes',
    name: 'Lyfe’s',
    category: 'Fitness platform',
    summary: 'A calmer way to manage clients, sessions, and the everyday work of running a fitness studio.',
    year: '2025',
    artClass: 'bg-lime-50',
    role: 'Product design · Frontend development',
    challenge: 'Independent trainers relied on scattered spreadsheets and messages to manage clients. Missed renewals and scheduling gaps made it hard to deliver a consistent experience.',
    approach: 'I brought client profiles, scheduling, renewals, and trainer coordination into one clear workspace. The interface keeps the next useful action visible while giving owners a quick view of studio activity.',
    outcome: 'The new platform gives trainers a more reliable daily workflow and makes it easier to keep every client supported from onboarding through renewal.',
    services: ['Product strategy', 'UX and UI design', 'Web development']
  },
  {
    slug: 'sip24seven',
    name: 'Sip24Seven',
    category: 'Fintech · Mobile app',
    summary: 'A thoughtful investing experience that makes mutual funds easier to understand and manage.',
    year: '2025',
    artClass: 'bg-orange-50',
    role: 'Product design · Mobile development',
    challenge: 'New investors needed a simpler way to understand their investments. Existing flows made it difficult to see progress, compare funds, and make confident decisions.',
    approach: 'I designed a mobile experience around clear portfolio summaries, useful fund comparisons, and timely updates. A connected admin portal gives the team control over content and customer support.',
    outcome: 'Investors get a more transparent view of their money, while the operations team can manage the experience from one connected system.',
    services: ['Research and discovery', 'Mobile product design', 'Admin portal']
  },
  {
    slug: 'dignity',
    name: 'Dignity',
    category: 'Manufacturing · SaaS',
    summary: 'A focused production system for quality checks, process visibility, and confident factory decisions.',
    year: '2024',
    artClass: 'bg-cyan-50',
    role: 'UX and UI design · Web development',
    challenge: 'Production teams needed a dependable way to track shield pressing, validate quality, and spot process issues. Paper records made information slow to find and difficult to compare.',
    approach: 'I shaped a practical factory dashboard with readable production status, guided quality checks, and a shared record of each process. The layout works for quick checks on the floor and deeper review at a desk.',
    outcome: 'Teams can see production and validation status in one place, helping them catch issues earlier and keep a consistent record of work.',
    services: ['Workflow mapping', 'Interface design', 'Production software']
  }
]
