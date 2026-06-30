export type ServiceStatus = "live" | "coming-soon";

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  status: ServiceStatus;
  licenseNote?: string;
  intro: string[];
  commonIssues: string[];
  faqs: ServiceFAQ[];
}

export const services: Service[] = [
  {
    slug: "drywall-repair",
    name: "Drywall Repair",
    shortDescription: "Patch holes, water damage, and cracked seams.",
    status: "live",
    intro: [
      "Drywall damage is one of the most common reasons DFW homeowners post a job — a doorknob hole, a water stain from a slow leak, a crack along a seam after the foundation settles a little in our clay soil. Most patch jobs are a same-visit fix for an experienced craftsman.",
      "Post the job with a photo and your zip code, and craftsmen who work in your area can bid on it directly — no call center, no automatic dispatch to whoever's next in line.",
    ],
    commonIssues: [
      "Doorknob and impact holes",
      "Water stains and soft spots from a past leak",
      "Cracked seams or popped nails from foundation movement",
      "Texture matching after a patch",
    ],
    faqs: [
      {
        question: "Can drywall repair be done in one visit?",
        answer:
          "Small to medium patches (under roughly 2 square feet) are usually a single-visit job. Larger sections, or repairs that need texture matching and paint, may take two visits so the compound can dry and cure properly between coats.",
      },
      {
        question: "Do I need a permit for drywall repair in Texas?",
        answer:
          "Cosmetic drywall patching generally doesn't require a permit. If the damage is tied to structural, electrical, or plumbing work behind the wall, that underlying work may need separate permits or licensed trades — see our guide on permits for handyman work in Texas.",
      },
    ],
  },
  {
    slug: "interior-painting",
    name: "Interior Painting",
    shortDescription: "Single rooms, accent walls, and full-interior repaints.",
    status: "live",
    intro: [
      "From a single accent wall to a full interior repaint before listing a house, painting is a portfolio-driven job — you want to see a craftsman's actual cut lines and finish work before you hire, not just a star rating.",
      "Every painter on the platform has a photo portfolio attached to their profile, so you're comparing real finished rooms, not just price.",
    ],
    commonIssues: [
      "Single room or accent wall repaints",
      "Trim, baseboard, and door painting",
      "Full-interior repaints before selling or moving in",
      "Popcorn ceiling and texture touch-ups before painting",
    ],
    faqs: [
      {
        question: "Does the quote include paint and materials?",
        answer:
          "That depends on the craftsman's bid — some quotes are labor-only with you supplying paint, others are all-in. Bid details always say which, so you can compare apples to apples before accepting.",
      },
    ],
  },
  {
    slug: "furniture-assembly",
    name: "Furniture Assembly",
    shortDescription: "Flat-pack furniture, shelving, and bed frames.",
    status: "live",
    intro: [
      "Flat-pack furniture from a big-box store is usually a 30-60 minute job for someone who's assembled a hundred of them — and a frustrating afternoon for everyone else. Post what you bought, and craftsmen will quote a flat price.",
    ],
    commonIssues: [
      "Bookshelves, dressers, and wardrobes",
      "Bed frames and headboards",
      "Office desks and standing-desk setups",
      "Crib and nursery furniture assembly",
    ],
    faqs: [],
  },
  {
    slug: "general-handyman",
    name: "General Handyman",
    shortDescription: "Small repairs and odd jobs around the house.",
    status: "live",
    intro: [
      "Caulking, door adjustments, weatherstripping, loose cabinet hardware — the small stuff that's easy to put off and annoying to live with. Bundle a few small jobs into one post and a craftsman can usually knock them out in a single visit.",
    ],
    commonIssues: [
      "Door and cabinet adjustments",
      "Caulking and weatherstripping",
      "Loose hardware, hinges, and hooks",
      "Small repair punch-lists",
    ],
    faqs: [],
  },
  {
    slug: "deck-fence-repair",
    name: "Deck & Fence Repair",
    shortDescription: "Board replacement, post repair, and re-staining.",
    status: "live",
    intro: [
      "Texas heat is hard on exterior wood. Loose boards, leaning posts, and sun-faded stain are the most common requests — post photos of the damaged section so craftsmen can bid accurately without an extra trip just to see it.",
    ],
    commonIssues: [
      "Replacing rotted or cracked boards",
      "Re-setting or replacing leaning posts",
      "Re-staining or sealing",
      "Gate and latch repair",
    ],
    faqs: [],
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    shortDescription: "Seasonal cleaning and minor gutter repair.",
    status: "live",
    intro: [
      "Clogged gutters during DFW's spring storms back up fast. Most cleaning jobs are priced by the linear foot or as a flat rate for the house — compare a few bids before you commit, especially for two-story homes.",
    ],
    commonIssues: ["Leaf and debris removal", "Downspout clearing", "Minor reattachment and resealing"],
    faqs: [],
  },
  {
    slug: "tv-mounting",
    name: "TV Mounting",
    shortDescription: "Wall mounting with cable concealment.",
    status: "live",
    intro: [
      "Mounting height, stud location, and whether you want cables hidden in-wall all change the quote — include your TV size and wall type (drywall, brick, stone) when you post so bids come back accurate the first time.",
    ],
    commonIssues: ["Stud and masonry mounting", "In-wall cable concealment", "Soundbar and shelf installation"],
    faqs: [],
  },
  {
    slug: "light-fixture-installation",
    name: "Light Fixture Installation",
    shortDescription: "Swapping existing fixtures — not new wiring.",
    status: "live",
    intro: [
      "Swapping a light fixture, ceiling fan, or chandelier on an existing electrical box is a common handyman job. New wiring, new circuits, or anything that isn't a like-for-like swap on existing wiring falls under licensed electrical work — see the note below.",
    ],
    licenseNote:
      "Like-for-like fixture swaps on existing wiring are commonly handled as handyman work, but new circuits, panel work, or anything beyond a simple swap requires a TDLR-licensed electrician. We'll route jobs that need a license once electrical verification is live on the platform.",
    commonIssues: ["Ceiling fan installation", "Pendant and chandelier swaps", "Switch and dimmer swaps (like-for-like)"],
    faqs: [],
  },
  {
    slug: "plumbing-repair",
    name: "Plumbing Repair",
    shortDescription: "Licensed plumbers — launching soon.",
    status: "coming-soon",
    licenseNote:
      "Plumbing work in Texas requires a license through the Texas State Board of Plumbing Examiners (now part of TDLR). We're building license verification into craftsman onboarding before opening this category, so every plumber on the platform is properly licensed — not just background-checked.",
    intro: [
      "We're not listing plumbing jobs yet. It's tempting to lump a leaky faucet in with general handyman work, but plumbing is a licensed trade in Texas, and we'd rather launch it correctly than launch it fast.",
    ],
    commonIssues: [],
    faqs: [],
  },
  {
    slug: "electrical-repair",
    name: "Electrical Repair",
    shortDescription: "Licensed electricians — launching soon.",
    status: "coming-soon",
    licenseNote:
      "Electrical work in Texas requires a license through TDLR. We're building license verification into craftsman onboarding before opening this category.",
    intro: [
      "Same reasoning as plumbing: electrical work is licensed and regulated in Texas, with real penalties for unlicensed work. This category opens once license verification is live.",
    ],
    commonIssues: [],
    faqs: [],
  },
];

export const liveServices = services.filter((s) => s.status === "live");
export const comingSoonServices = services.filter((s) => s.status === "coming-soon");

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
