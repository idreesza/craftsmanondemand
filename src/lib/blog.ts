export interface BlogSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  readTime: string;
  tldr: string;
  sections: BlogSection[];
  faqs: BlogFAQ[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "drywall-repair-cost-dallas-fort-worth",
    title: "How Much Does Drywall Repair Cost in Dallas-Fort Worth?",
    description:
      "A breakdown of what drives drywall repair pricing in DFW — patch size, texture matching, paint, and how to compare quotes fairly.",
    datePublished: "2026-06-19",
    readTime: "6 min read",
    tldr:
      "Small patches (doorknob holes, nail pops) are typically the lowest-cost repair and often priced as a flat call-out fee. Larger sections, water-damaged drywall, and anything needing texture matching costs more because of drying time between coats and the skill needed to blend texture invisibly. Get multiple bids — price spread on drywall work is wide because labor, not material, is most of the cost.",
    sections: [
      {
        heading: "What actually drives the price",
        paragraphs: [
          "Drywall material itself is cheap — a sheet costs a few dollars per square foot. Almost all of what you're paying for is labor: cutting and fitting the patch, taping seams, applying joint compound in multiple thin coats with drying time between each, sanding, and — if your walls have texture — matching that texture so the patch is invisible once painted.",
          "That's why a tiny hole and a slightly bigger hole can have similar prices: most of the job is setup and drying time, not square footage.",
        ],
      },
      {
        heading: "Factors that change the quote",
        paragraphs: ["The biggest cost drivers craftsmen weigh when bidding a drywall job:"],
        list: [
          "Size of the damaged area — small holes vs. multi-foot sections",
          "Whether texture matching is needed (smooth walls are faster than orange-peel or knockdown texture)",
          "Number of visits required (some jobs need a return visit for a second coat or paint)",
          "Whether the damage points to an underlying issue — a water stain might mean a roof or plumbing leak that needs fixing first",
          "Access — a patch behind furniture or in a tight closet takes longer than open wall space",
        ],
      },
      {
        heading: "Why bids vary more than you'd expect",
        paragraphs: [
          "Drywall is one of the categories where bid spread tends to be widest, because two craftsmen can look at the same hole and have very different ideas about how many coats it needs or whether texture matching is worth the extra time. That's exactly why comparing more than one quote matters here — and why we show you each craftsman's rating, verification status, and price side by side rather than auto-assigning the first available pro.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is drywall repair cheaper than full replacement?",
        answer:
          "For localized damage, yes — patching is almost always cheaper than replacing a full sheet. Full replacement usually only makes sense when damage covers a large continuous area or when mold/water damage has compromised the paper backing across a wide section.",
      },
      {
        question: "Should I paint the same day as the repair?",
        answer:
          "Joint compound needs to fully dry and be sanded smooth before it will take paint evenly — rushing this is the most common reason a patch is visible after painting. Most craftsmen will tell you whether your specific repair can be painted same-day or needs to cure overnight.",
      },
    ],
  },
  {
    slug: "permits-for-handyman-work-in-texas",
    title: "Do You Need a Permit for Handyman Work in Texas?",
    description:
      "What's actually licensed in Texas, what isn't, and why a single job — like a leaky faucet plus drywall damage — can involve both at once.",
    datePublished: "2026-06-19",
    readTime: "5 min read",
    tldr:
      "Texas has no general statewide handyman license — most repair, painting, and assembly work doesn't require one. But electrical, plumbing, HVAC, and a handful of other trades are licensed at the state level through TDLR, with real penalties for unlicensed work. Cities also layer on their own permit rules for things like structural changes. The practical upshot: know which part of your job is regulated before you hire.",
    sections: [
      {
        heading: "The short version",
        paragraphs: [
          "Texas doesn't issue a general 'handyman license.' If someone is patching drywall, painting, assembling furniture, or doing general small repairs, there's no state license required for that work.",
          "What is licensed: electrical, plumbing, HVAC, fire sprinkler, irrigation, and elevator work are all regulated at the state level, mostly through the Texas Department of Licensing and Regulation (TDLR), which absorbed the old Texas State Board of Plumbing Examiners in 2019.",
        ],
      },
      {
        heading: "Why this matters for a job that mixes both",
        paragraphs: [
          "Plenty of real jobs blend a licensed and unlicensed task in one visit — a classic example is drywall damage caused by a slow leak behind a wall. The drywall patch itself doesn't need a license. Fixing the leak that caused it does, if it goes beyond a simple fixture swap.",
          "The fines for skipping the license aren't symbolic, either: unlicensed plumbing work carries a mandatory penalty per violation, and electrical or HVAC violations can run into thousands of dollars per violation, per day, on top of being a criminal misdemeanor. That risk sits with whoever did the unlicensed work — and arguably with whoever knowingly hired or routed it.",
        ],
      },
      {
        heading: "City-level permits are a separate layer",
        paragraphs: [
          "Even for work that doesn't need a state license, some Texas cities require their own permits for things like structural changes, fence height variances, or electrical/plumbing work pulled by a licensed contractor (the permit is usually on the contractor, not the homeowner). Rules vary city to city across the DFW metroplex, so when in doubt, a quick call to your city's building/permits department is worth it before larger projects.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can a handyman legally fix a leaky faucet in Texas?",
        answer:
          "It depends on the scope. Simple aerator or washer replacement is commonly treated as handyman-level work, but supply line, valve, or drain line repairs fall under licensed plumbing work in most interpretations. When the scope is unclear, the safer route is a licensed plumber.",
      },
      {
        question: "What happens if I hire someone unlicensed for licensed work?",
        answer:
          "Beyond the legal exposure for the worker, unlicensed electrical or plumbing work can also create insurance and resale problems — it may not be coverable if something goes wrong, and it can surface as an issue in a home inspection later.",
      },
    ],
  },
  {
    slug: "how-to-compare-contractor-bids",
    title: "How to Compare Contractor Bids Without Getting Burned",
    description:
      "The lowest bid isn't always the best one. A practical framework for comparing quotes on home repair work.",
    datePublished: "2026-06-19",
    readTime: "5 min read",
    tldr:
      "Compare bids on four things, not just price: verification status, rating history, what's actually included in the quote, and how the bid was produced (in-person look vs. guess from a photo). The cheapest quote that was never actually inspected in person is often the most expensive one by the time the job's done.",
    sections: [
      {
        heading: "Price is the easiest thing to compare, and the least reliable one alone",
        paragraphs: [
          "It's tempting to sort by price and stop there. The problem is that an unusually low bid is sometimes low because the craftsman hasn't actually seen the job in person, or has scoped it more narrowly than a competing bid that looks more expensive but includes more of the work.",
        ],
      },
      {
        heading: "What to actually check before accepting",
        paragraphs: ["A few questions that separate a good bid from a risky one:"],
        list: [
          "Was the quote based on an in-person look, or a guess from your written description and photos?",
          "Does the price include materials, or is it labor-only?",
          "Is the craftsman verified — and what does that verification actually cover (identity and background check, not necessarily a trade license for licensed work)?",
          "What does their rating history actually say — one job with five stars is a different signal than fifty",
          "Is there a clear plan if the scope turns out to be bigger than expected once they're on site?",
        ],
      },
      {
        heading: "Why a destination fee changes the incentives",
        paragraphs: [
          "A lot of marketplaces let craftsmen bid blind from a written description, which rewards whoever's fastest to respond rather than whoever's most accurate. A small destination fee — paid before the in-person visit and refunded if you don't accept any quote — filters out guesses and gets you a quote based on someone actually looking at the job, while protecting you if it doesn't work out.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I always pick the verified craftsman over a cheaper unverified one?",
        answer:
          "Verification is one signal among several, not an automatic tiebreaker — but for jobs involving access to your home while you're not there, or higher-value work, it's a reasonable default to weigh heavily.",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
