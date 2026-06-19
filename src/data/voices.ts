// "Real Voices" — first-person interviews with people actually doing the career.
// PUBLISHING GATES (enforced by status/consent below, not by memory):
//   • A voice only renders publicly when `status: "published"` AND `consent: true`.
//   • Draft voices are visible only in local dev (for team review) and are noindexed.
//   • Per-answer `note` fields are internal editorial/fact-check flags — shown only
//     in the draft preview, never in a published page.

export interface VoiceQA {
  q: string;
  a: string;
  note?: string;
}

export interface Voice {
  slug: string;
  name: string;
  rank: string;
  dept: string;
  handle?: string;
  date: string;
  vertical: string;
  consent: boolean;
  status: "draft" | "published";
  intro: string;
  pullQuote: string;
  qa: VoiceQA[];
}

export const VOICES: Voice[] = [
  {
    slug: "abhay-singh",
    name: "Abhay Singh",
    rank: "Deck Cadet (currently serving)",
    dept: "Deck",
    handle: "@merchant_man21",
    date: "June 2026",
    vertical: "merchant-navy",
    // GATED: do not flip to published until (1) Abhay consents to being named/quoted,
    // (2) the tax-day figure is CA-verified (182, not 184), (3) his Q9 answer is complete.
    consent: false,
    status: "draft",
    intro:
      "Abhay is a serving Deck Cadet. He answered nine questions about life and work in the Merchant Navy over WhatsApp — the honest version, not the brochure.",
    pullQuote: "It was my own willingness that brought me here. I genuinely find this environment fascinating.",
    qa: [
      {
        q: "Why did you choose the Merchant Navy?",
        a: "It was my own willingness that took me into this field. I genuinely find this environment fascinating.",
      },
      {
        q: "What are the steps from Class 12 to your first contract?",
        a: "There are three departments — Deck, Engine, and Rating. For Deck and Engine you go through IMU CET or a DG Shipping–approved college (DNS, B.Sc Nautical Science, or B.Tech Marine Engineering). For Ratings, after Class 12 you do a General Purpose Rating (GPR) course at a marine college.",
      },
      {
        q: "IMU CET or the private-college route — how should someone think about it?",
        a: "Use the IMU CET rank to get eligible, then apply to a private college for better sponsorship. The government IMU college — sometimes placement is very less.",
        note: "Anecdotal: frame the government-college placement point as one cadet's experience, or source placement data, before publishing it as fact.",
      },
      {
        q: "How does rank progression work?",
        a: "Different field, different rank — there are three departments (Deck, Engine, Rating), each with its own ladder.",
      },
      {
        q: "What's the honest salary picture?",
        a: "It is never fixed. It depends not only on rank but on the type of ship, the company, the registered country (flag) of the vessel, the charterer, and more. Same rank, different company — completely different salaries.",
      },
      {
        q: "How does the tax-free income actually work?",
        a: "According to the Indian government, if you spend more than the required number of days outside India in a financial year, your foreign income is tax-free as an NRI.",
        note: "FACT-CHECK: Abhay said '184 days'. The NRI threshold under the Income Tax Act is 182 days. Verify with a CA / CBDT–DGS circular and use the correct figure before publishing. His specific number has been left out of this answer pending verification.",
      },
      {
        q: "What does a typical working day look like?",
        a: "There are MLC rules with regulations on working and rest hours, but as a seafarer you have to be ready for the job at any time. There are watches — either at the bridge during sailing, or at cargo operations when in port.",
      },
      {
        q: "How do contracts and personal life work?",
        a: "Contracts depend on rank — the more senior the rank, the shorter the contract. As a Deck Cadet, my contract is seven months.",
      },
      {
        q: "How do you handle the mental side — isolation at sea?",
        a: "There is very little personal time to sit and think about all that. Time runs fast when you work continuously. For me — yes, in the beginning it feels lonely, but later you adapt. We also have several things onboard for…",
        note: "INCOMPLETE: this answer was cut off in the source. Follow up with Abhay for the full response (likely covers onboard recreation) before publishing.",
      },
    ],
  },
];

export function publishedVoices(vertical?: string): Voice[] {
  return VOICES.filter(
    (v) => v.status === "published" && v.consent && (!vertical || v.vertical === vertical),
  );
}

export function getVoice(slug: string): Voice | undefined {
  return VOICES.find((v) => v.slug === slug);
}
