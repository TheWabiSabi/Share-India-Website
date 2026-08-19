import type { GhostPost } from '@/lib/ghost';

interface CuratedPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  topic: string;
  opening: string[];
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  closing: string;
}

const AUTHOR = 'Share India Editorial Team';

const IMAGE_BASE_URL = 'https://minio-api.internal.wabisabitech.in/share-india/blog';

const TOPIC_IMAGES: Record<string, string> = {
  'Health Insurance': `${IMAGE_BASE_URL}/stethoscope.jpg`,
  'Term Insurance': `${IMAGE_BASE_URL}/contract.jpg`,
  'Motor Insurance': `${IMAGE_BASE_URL}/transport-cartons.jpg`,
  'Property And Engineering Insurance': `${IMAGE_BASE_URL}/steel-frames-industry.jpg`,
  'Cyber Insurance': `${IMAGE_BASE_URL}/office-working.jpg`,
  'Liability Insurance': `${IMAGE_BASE_URL}/contract.jpg`,
  'Marine Transit Insurance': `${IMAGE_BASE_URL}/shipyard.jpg`,
  'Trade Credit Insurance': `${IMAGE_BASE_URL}/wallstreet.jpg`,
  'Employee Benefits Insurance': `${IMAGE_BASE_URL}/office-work.jpg`,
  'Office Package Insurance': `${IMAGE_BASE_URL}/office-working.jpg`,
  'Startup Insurance': `${IMAGE_BASE_URL}/bulb.jpg`,
  'Construction Industry': `${IMAGE_BASE_URL}/construction.jpg`,
  'Solar Industry': `${IMAGE_BASE_URL}/solar-panel.jpg`,
  'Motor Fleet Insurance': `${IMAGE_BASE_URL}/transport-cartons.jpg`,
  'Group Travel Insurance': `${IMAGE_BASE_URL}/bridge.jpg`,
  'Shopkeepers Package And Jewellers Block': `${IMAGE_BASE_URL}/contract.jpg`,
  'Retail Insurance': `${IMAGE_BASE_URL}/office-working.jpg`,
  'Claims Story': `${IMAGE_BASE_URL}/people.jpg`,
  'Corporate Insurance': `${IMAGE_BASE_URL}/office-work.jpg`,
};

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

const CLOSING_HEADINGS = ['One last thought', 'What to remember', 'The practical takeaway'];

function renderPost(post: CuratedPost, index: number): string {
  const opening = post.opening.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('');
  const sections = post.sections
    .map((section) => {
      const paragraphs = section.paragraphs
        .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
        .join('');
      const bullets = section.bullets?.length
        ? `<ul>${section.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}</ul>`
        : '';
      return `<h2>${escapeHtml(section.heading)}</h2>${paragraphs}${bullets}`;
    })
    .join('');

  const closingHeading = CLOSING_HEADINGS[index % CLOSING_HEADINGS.length];
  return `${opening}${sections}<h2>${closingHeading}</h2><p>${escapeHtml(post.closing)}</p><p><em>Coverage, exclusions, limits and claim requirements vary by insurer and policy. Read the customer information sheet and policy wording before you buy or renew.</em></p>`;
}

function toGhostPost(post: CuratedPost, index: number): GhostPost {
  const categorySlug = post.category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const topicSlug = post.topic.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const tags = [
    { id: 'curated-section-blog', name: 'Blog', slug: 'blog' },
    { id: `curated-category-${categorySlug}`, name: post.category, slug: categorySlug },
    { id: `curated-topic-${topicSlug}`, name: post.topic, slug: topicSlug },
  ];
  const html = renderPost(post, index);
  const wordCount = html
    .replace(/<[^>]+>/g, ' ')
    .trim()
    .split(/\s+/).length;

  return {
    id: `curated-blog-${String(index + 1).padStart(2, '0')}`,
    uuid: `curated-blog-${String(index + 1).padStart(2, '0')}`,
    title: post.title,
    slug: post.slug,
    html,
    excerpt: post.excerpt,
    custom_excerpt: post.excerpt,
    featured: false,
    feature_image: TOPIC_IMAGES[post.topic] ?? `${IMAGE_BASE_URL}/office-working.jpg`,
    published_at: `${post.date}T05:30:00.000Z`,
    created_at: `${post.date}T05:30:00.000Z`,
    updated_at: `${post.date}T05:30:00.000Z`,
    reading_time: Math.max(2, Math.ceil(wordCount / 180)),
    primary_author: { id: 'share-india-editorial', name: AUTHOR, slug: 'share-india-editorial' },
    authors: [{ id: 'share-india-editorial', name: AUTHOR, slug: 'share-india-editorial' }],
    primary_tag: tags[0],
    tags,
  } as unknown as GhostPost;
}

const posts: CuratedPost[] = [
  {
    slug: 'family-floater-or-individual-health-cover',
    title: 'Family Floater or Individual Health Cover? Start With These Three Questions',
    excerpt:
      'A practical way to choose between shared and individual health cover without getting lost in product jargon.',
    date: '2026-08-13',
    category: 'Health Insurance',
    topic: 'Health Insurance',
    opening: [
      'The family floater versus individual policy debate sounds simple until you put real names and ages on the proposal form. A shared limit can work beautifully for a young family, but the same structure may feel tight when parents are older or one member has frequent medical needs.',
      'The useful question is not which format is best in general. It is which format leaves your family with enough cover after the first large claim of the year.',
    ],
    sections: [
      {
        heading: 'Look at who is sharing the cover',
        paragraphs: [
          'A floater gives every insured member access to one common sum insured. That keeps administration simple, but one hospitalisation can reduce what remains for everyone else. Age gaps and known health conditions matter more than the number of people on the policy.',
        ],
        bullets: [
          'List each member, age and ongoing treatment.',
          'Estimate whether two people could need care in the same policy year.',
          'Check how the premium changes when the eldest member moves to the next age band.',
        ],
      },
      {
        heading: 'Compare the policy mechanics, not just the premium',
        paragraphs: [
          'Restoration benefits, room eligibility, co-payments and waiting periods can change the answer. Ask whether restored cover can be used by the same person for the same illness, and whether the benefit triggers after partial or complete exhaustion.',
          'For some families, a floater for parents and children plus a separate policy for older parents is easier to live with than placing everyone under one limit.',
        ],
      },
    ],
    closing:
      'Sketch two realistic hospital bills and see what remains after each one. That small exercise is more revealing than comparing premium columns alone.',
  },
  {
    slug: 'super-top-up-deductible-explained',
    title: 'The Super Top-Up Deductible, Explained With a Normal Hospital Bill',
    excerpt:
      'Super top-ups can add meaningful health cover at a sensible cost, provided you understand who pays the deductible.',
    date: '2026-08-11',
    category: 'Health Insurance',
    topic: 'Health Insurance',
    opening: [
      'Super top-up plans often look like an easy bargain: a large cover amount for a relatively modest premium. The catch is not hidden, but it is easy to misunderstand. The policy starts paying only after eligible expenses cross the stated deductible during the policy period.',
      'Think of the deductible as the part you plan to fund through a base policy, employer cover or your own savings.',
    ],
    sections: [
      {
        heading: 'Use one round number',
        paragraphs: [
          'Suppose your super top-up has a Rs 5 lakh deductible and you incur eligible hospital bills totalling Rs 8 lakh in the year. Subject to the wording, the super top-up may respond to the eligible amount above Rs 5 lakh. It does not mean the insurer pays every rupee after your first small claim.',
          'A top-up and a super top-up may aggregate claims differently, so confirm whether multiple hospitalisations can be combined to cross the threshold.',
        ],
      },
      {
        heading: 'Match the layers before buying',
        paragraphs: [
          'The cleanest structure is one in which your reliable base cover can meet the deductible without creating a cash-flow problem.',
        ],
        bullets: [
          'Keep the policy periods aligned where possible.',
          'Check whether both layers use compatible definitions and exclusions.',
          'Do not assume employer cover will remain unchanged every year.',
          'Tell the hospital and both insurers about the layered arrangement early in a claim.',
        ],
      },
    ],
    closing:
      'A super top-up is useful when the first layer is dependable. If the deductible would have to come from an emergency loan, the structure needs another look.',
  },
  {
    slug: 'room-rent-limit-health-claim',
    title: 'Why the Room Rent Line Can Change Your Entire Health Claim',
    excerpt:
      'Room eligibility can affect more than the room charge. Here is what to inspect before admission day.',
    date: '2026-08-09',
    category: 'Health Insurance',
    topic: 'Health Insurance',
    opening: [
      'Most people notice the room rent clause only when a hospital admission form asks them to choose a room. By then, switching policies is not an option and moving rooms may not be practical.',
      'The concern is not simply paying the difference for a nicer room. Depending on the wording, choosing above your eligibility may affect linked medical charges as well.',
    ],
    sections: [
      {
        heading: 'Find the exact wording',
        paragraphs: [
          'Look for a fixed daily amount, a percentage of sum insured, a named room category or a statement that there is no room cap. Then read how the policy treats associated expenses when the chosen room exceeds that limit.',
          'The customer information sheet is a good starting point, but the detailed policy wording settles how the clause works.',
        ],
      },
      {
        heading: 'Do this before someone is admitted',
        paragraphs: [
          'Call nearby network hospitals and ask what their eligible room categories currently cost. Hospital tariffs change, and an old estimate may no longer be useful.',
        ],
        bullets: [
          'Save the insurer or TPA helpline in your phone.',
          'Keep the latest policy schedule and e-card accessible.',
          'Ask the admission desk for a written estimate by room category.',
          'Request clarification before upgrading rooms during a stay.',
        ],
      },
    ],
    closing:
      'A room that fits the policy can spare your family an argument at discharge. Review this clause at renewal, while you still have time to make a considered choice.',
  },
  {
    slug: 'cashless-health-claim-preauthorisation',
    title: 'Cashless Treatment Is Not Automatic. Here Is How to Prepare',
    excerpt:
      'A calm, step-by-step plan for pre-authorisation, hospital estimates and expenses that may still be payable.',
    date: '2026-08-07',
    category: 'Claims',
    topic: 'Health Insurance',
    opening: [
      'The word cashless can create the impression that a patient simply shows an insurance card and walks away without a bill. In practice, the hospital sends a treatment estimate and medical information for authorisation, and some expenses may remain outside the approved amount.',
      'A little preparation makes the process less stressful for the person handling paperwork while the family focuses on care.',
    ],
    sections: [
      {
        heading: 'For a planned admission',
        paragraphs: [
          'Confirm that the hospital is in the current network and ask its insurance desk when it will submit the request. Share complete medical history and policy details. If the treatment plan changes, a revised authorisation may be needed.',
        ],
        bullets: [
          'Carry the e-card, photo identification and recent consultation papers.',
          'Keep copies of the estimate and every authorisation message.',
          'Ask which consumables or non-medical items are likely to be payable by you.',
        ],
      },
      {
        heading: 'For an emergency',
        paragraphs: [
          'Do not delay urgent care while searching for paperwork. Notify the insurer or TPA as soon as reasonably possible, then have one family member coordinate with the hospital insurance desk. Record names, times and reference numbers.',
          'If cashless approval is not available, ask what is required for reimbursement instead of assuming the underlying claim is over.',
        ],
      },
    ],
    closing:
      'Cashless is a settlement route, not a promise that every charge is covered. Clear records and early communication give the claim team a better file to work with.',
  },
  {
    slug: 'health-claim-document-folder',
    title: 'Build This Health Claim Folder Before You Need It',
    excerpt:
      'One simple digital folder can prevent missing prescriptions, reports and payment proofs during a health claim.',
    date: '2026-08-05',
    category: 'Claims',
    topic: 'Health Insurance',
    opening: [
      'Claims paperwork becomes hardest at exactly the wrong time. Receipts sit in different bags, reports arrive on separate apps and the person who bought the policy may not be the person managing the admission.',
      'A basic shared folder, prepared in advance, can turn that scramble into a checklist.',
    ],
    sections: [
      {
        heading: 'Keep the permanent documents together',
        paragraphs: [
          'Create one folder for documents that do not change with each claim. Give a trusted family member access and review it after every renewal.',
        ],
        bullets: [
          'Policy schedule, customer information sheet and e-card',
          'Insurer, TPA and broker contact details',
          'Identity documents for every insured member',
          'Nominee details and recent policy endorsements',
        ],
      },
      {
        heading: 'Open a dated folder for every treatment',
        paragraphs: [
          'Save consultation notes, prescriptions, diagnostic reports, hospital estimates, final bills, discharge summary and payment proofs in chronological order. Photograph thermal-paper receipts because they fade.',
          'Do not discard cancelled cheques, bank details or original documents until the claim is closed and any query period has passed.',
        ],
      },
    ],
    closing:
      'The best claim folder is boring, current and easy for someone else to understand. Ten minutes after each medical visit is usually enough to keep it that way.',
  },
  {
    slug: 'how-much-term-insurance-do-you-need',
    title: 'How Much Term Insurance Do You Need? Work Backwards From Real Life',
    excerpt:
      'Replace the one-size-fits-all income multiple with a household calculation you can explain.',
    date: '2026-08-03',
    category: 'Life Insurance',
    topic: 'Term Insurance',
    opening: [
      'A round-number cover recommendation is convenient, but families do not live in round numbers. Two people with the same salary can have very different debts, dependants and savings.',
      'Start with the financial jobs your income would have performed, then subtract resources that are genuinely available to the family.',
    ],
    sections: [
      {
        heading: 'Write down the obligations',
        paragraphs: [
          'Use present values where you can, and leave room for costs that rise over time. The goal is not perfect forecasting. It is to avoid forgetting a major responsibility.',
        ],
        bullets: [
          'Outstanding home, education and personal loans',
          'Several years of household expenses',
          'Education or care goals for dependants',
          'A buffer for final expenses and disrupted income',
        ],
      },
      {
        heading: 'Count assets carefully',
        paragraphs: [
          'Emergency savings and investments intended for the same family goals may reduce the gap. A self-occupied home usually should not be treated like cash available for monthly expenses. Employer life cover can change with your job, so be cautious about relying on it for decades.',
          'Review the calculation after a marriage, birth, major loan, salary change or business commitment.',
        ],
      },
    ],
    closing:
      'A useful cover amount has a story behind it: this clears the loan, supports the household and protects specific goals. If you cannot explain the number, recalculate it.',
  },
  {
    slug: 'nominee-details-insurance-review',
    title: 'Your Nominee Details Deserve a Ten-Minute Review',
    excerpt:
      'An outdated phone number or relationship detail can create avoidable work for a family during a claim.',
    date: '2026-08-01',
    category: 'Life Insurance',
    topic: 'Term Insurance',
    opening: [
      'Nomination is often completed quickly at the end of a proposal form and forgotten. Years later, the address is old, the nominee is still described as a minor or a major life event has changed the policyholder’s wishes.',
      'A periodic check is simple and far kinder than leaving relatives to untangle stale records.',
    ],
    sections: [
      {
        heading: 'Check every policy, not only life cover',
        paragraphs: [
          'Review life and health policies as well as any other contract that records a nominee. Confirm the spelling, date of birth, relationship, contact details and allocation where more than one nominee is allowed.',
        ],
      },
      {
        heading: 'Pay attention when a nominee is a minor',
        paragraphs: [
          'Check whether an appointee is recorded and whether those details remain suitable. Keep the acknowledgement for any change request with the policy schedule.',
          'Nomination and legal succession are related but not identical questions. For estate planning or family disputes, take qualified legal advice instead of relying on a form alone.',
        ],
        bullets: [
          'Review after marriage, divorce, a birth or a death.',
          'Tell the nominee where policy records are stored.',
          'Update contact details after moving or changing phone numbers.',
        ],
      },
    ],
    closing:
      'The form takes minutes. The clarity it gives your family can matter for months, so put the review next to your annual insurance renewal checklist.',
  },
  {
    slug: 'zero-depreciation-car-insurance',
    title: 'Is Zero Depreciation Cover Worth It for Your Car?',
    excerpt:
      'A plain-language look at what the add-on changes, what it does not change and when to compare the cost.',
    date: '2026-07-30',
    category: 'Motor Insurance',
    topic: 'Motor Insurance',
    opening: [
      'A motor repair estimate can be surprising even when the accident is covered. Standard own-damage claims may account for depreciation on replaced parts, leaving part of the bill with the owner. A zero depreciation add-on is designed to reduce that particular gap, subject to its terms.',
      'It is useful protection for some cars, but it is not a blanket promise of a zero-rupee repair.',
    ],
    sections: [
      {
        heading: 'What may still come from your pocket',
        paragraphs: [
          'Compulsory and voluntary deductibles, excluded items, consumables, betterment, uncovered damage and repairs outside the approved scope may still be payable. Claim limits or vehicle-age rules can also apply.',
        ],
      },
      {
        heading: 'When the comparison is worth making',
        paragraphs: [
          'Owners of newer cars, vehicles with costly plastic or composite parts, and cars driven frequently in dense traffic often find the add-on easier to justify. For an older vehicle, compare the additional premium with realistic repair exposure and eligibility.',
        ],
        bullets: [
          'Ask how many claims the add-on permits.',
          'Check whether tyres, batteries and consumables are treated separately.',
          'Compare authorised repair options and claim service, not only price.',
        ],
      },
    ],
    closing:
      'Read one sample claim calculation with and without the add-on. Seeing the unpaid lines is the quickest way to understand what you are buying.',
  },
  {
    slug: 'understanding-idv-car-insurance',
    title: 'IDV Is Not Your Car’s Resale Price. Here Is What It Does',
    excerpt: 'Understand the insured declared value before lowering it just to save on premium.',
    date: '2026-07-28',
    category: 'Motor Insurance',
    topic: 'Motor Insurance',
    opening: [
      'During renewal, changing the insured declared value can make the premium move immediately. That makes a lower number tempting. But IDV is tied to how the policy approaches a total loss or theft, not to what a buyer on a marketplace might offer for the car.',
      'The cheapest setting today can create an uncomfortable settlement gap later.',
    ],
    sections: [
      {
        heading: 'Treat it as an insurance value',
        paragraphs: [
          'IDV is established under the policy framework for the insured vehicle and its declared accessories. Age and depreciation matter, while unusual condition or aftermarket work may need separate discussion. It is not a guarantee that every claim will pay that amount.',
        ],
      },
      {
        heading: 'Compare renewal quotes on equal terms',
        paragraphs: [
          'Two quotes with different IDVs and deductibles are not truly comparable. Align the important assumptions before deciding which insurer costs less.',
        ],
        bullets: [
          'Match IDV across the shortlisted quotes.',
          'List declared electrical and non-electrical accessories.',
          'Check add-ons, deductibles and garage access together.',
          'Ask how the insurer handles a total-loss assessment.',
        ],
      },
    ],
    closing:
      'Choose an IDV you would be comfortable seeing on a total-loss file. Premium matters, but so does the number behind the protection.',
  },
  {
    slug: 'car-flood-damage-claim-checklist',
    title: 'Your Car Was Caught in a Flood. Do These Things First',
    excerpt:
      'The first few decisions after water exposure can affect both the engine and the insurance claim.',
    date: '2026-07-26',
    category: 'Claims',
    topic: 'Motor Insurance',
    opening: [
      'Seeing water around a parked car creates an understandable urge to start the engine and check whether it still runs. Resist that urge. If water has entered the engine or electrical system, another start attempt may make the damage worse.',
      'Safety comes first. Once the area is safe, focus on evidence, notification and approved movement of the vehicle.',
    ],
    sections: [
      {
        heading: 'At the scene',
        paragraphs: [
          'Take wide and close photographs showing the water level, location and visible damage. Note the time. Do not wade into moving or contaminated water to retrieve documents.',
        ],
        bullets: [
          'Do not crank or push-start the engine.',
          'Disconnect the battery only if it is safe and you know how.',
          'Call the insurer or assistance number for towing instructions.',
          'Keep towing receipts and the service-centre job card.',
        ],
      },
      {
        heading: 'Before repairs begin',
        paragraphs: [
          'Allow the insurer to arrange inspection where required. Ask the workshop for a written diagnosis and estimate, and do not approve dismantling beyond emergency preservation work without understanding the claim process.',
          'Engine-protection and consumables add-ons can matter in water-ingress cases, but their scope varies. Check the schedule instead of relying on the add-on name.',
        ],
      },
    ],
    closing:
      'The calm sequence is simple: stay safe, do not restart, document the scene, notify the insurer and tow through an agreed route.',
  },
  {
    slug: 'small-business-fire-insurance-stock-records',
    title: 'Fire Insurance Works Better When Your Stock Records Do Too',
    excerpt:
      'For a shop or small factory, everyday stock discipline can make a future property claim much easier to evidence.',
    date: '2026-07-24',
    category: 'Business Insurance',
    topic: 'Property And Engineering Insurance',
    opening: [
      'Many small businesses review fire insurance once a year but update stock every day. If those two records drift apart, the policy limit may no longer reflect what is actually sitting in the premises.',
      'Good records are not just an accounting habit. They help establish what existed, what it cost and how values changed before a loss.',
    ],
    sections: [
      {
        heading: 'Keep evidence away from the premises',
        paragraphs: [
          'A laptop and paper ledger stored beside the stock can be lost in the same event. Use a secure off-site or cloud backup and test whether another person can retrieve it.',
        ],
        bullets: [
          'Purchase invoices and supplier statements',
          'Periodic stock counts and valuation method',
          'Photographs of storage areas and major equipment',
          'Asset register with serial numbers where relevant',
        ],
      },
      {
        heading: 'Review peak-season values',
        paragraphs: [
          'A limit that works in a quiet month may be inadequate before a festival or large customer order. Discuss seasonal increases, goods held in trust and stock at other locations before the exposure arrives.',
          'Also check the policy address, occupancy description and fire-protection information after any renovation or operational change.',
        ],
      },
    ],
    closing:
      'Insurance cannot recreate missing business records. A monthly backup and a quarterly value check make the cover far more useful when the unexpected happens.',
  },
  {
    slug: 'business-interruption-cover-conversation',
    title: 'The Fire Is Out. How Long Can the Business Stay Closed?',
    excerpt:
      'Property damage is only the first half of the problem. Business interruption planning starts with recovery time.',
    date: '2026-07-22',
    category: 'Business Insurance',
    topic: 'Property And Engineering Insurance',
    opening: [
      'A repaired machine does not instantly bring customers, staff and suppliers back into rhythm. After serious property damage, revenue may fall while salaries, rent and finance costs continue.',
      'Business interruption cover is meant to address eligible financial consequences of an insured disruption, but the chosen assumptions need to resemble the way the business would actually recover.',
    ],
    sections: [
      {
        heading: 'Estimate time, not only money',
        paragraphs: [
          'Ask how long it would take to investigate the loss, obtain approvals, replace imported equipment, rebuild, re-certify and regain customers. The indemnity period should be tested against a difficult recovery, not the fastest possible repair.',
        ],
      },
      {
        heading: 'Bring finance and operations into the same room',
        paragraphs: [
          'The policy calculation needs financial data, while the recovery timeline lives with operations. A useful review combines both.',
        ],
        bullets: [
          'Map single points of failure and dependent suppliers.',
          'Separate variable costs from expenses that continue during closure.',
          'Document seasonal sales and planned growth.',
          'Test alternatives such as temporary premises or outsourced production.',
        ],
      },
    ],
    closing:
      'Do not stop the insurance conversation at the replacement cost of the building. Ask what happens to cash flow on day 30, day 90 and day 180.',
  },
  {
    slug: 'cyber-incident-first-24-hours',
    title: 'A Cyber Incident Has Started. Who Makes the First Call?',
    excerpt:
      'A practical first-day checklist for preserving evidence, containing damage and notifying the right partners.',
    date: '2026-07-20',
    category: 'Cyber Insurance',
    topic: 'Cyber Insurance',
    opening: [
      'During a cyber incident, ten people can act quickly in ten different directions. Someone rebuilds a server, someone emails customers and someone negotiates with a vendor. Speed matters, but uncoordinated speed can destroy evidence or create conflicting messages.',
      'The first call should follow a response plan that already names decision-makers, technical support, legal counsel and the insurer’s incident channel.',
    ],
    sections: [
      {
        heading: 'Contain without wiping the trail',
        paragraphs: [
          'Isolate affected systems where appropriate, preserve logs and record every material action. Avoid deleting files or rebuilding machines until the forensic lead has considered the evidence. Continue critical operations through approved contingency procedures.',
        ],
      },
      {
        heading: 'Check the policy before appointing vendors',
        paragraphs: [
          'Cyber policies may have consent, notification and panel-vendor requirements. The response team should know these before an emergency, not discover them after signing an engagement.',
        ],
        bullets: [
          'Open an incident log with times, owners and decisions.',
          'Notify the insurer or broker through the stated channel.',
          'Coordinate technical, legal, privacy and communications work.',
          'Keep invoices and scopes of work tied to the incident.',
        ],
      },
    ],
    closing:
      'Run a tabletop exercise with the phone numbers in the room. A response plan becomes real only when the first three calls are obvious.',
  },
  {
    slug: 'directors-officers-cover-growing-company',
    title: 'When a Growing Company Should Talk About D&O Cover',
    excerpt:
      'Board decisions create personal and corporate exposures well before a company becomes large or listed.',
    date: '2026-07-18',
    category: 'Liability Insurance',
    topic: 'Liability Insurance',
    opening: [
      'Directors and officers insurance is sometimes treated as a policy for listed companies. In reality, disputes involving investors, employees, lenders, regulators or competitors can arise much earlier in a company’s life.',
      'The right time to discuss cover is when decision-making responsibilities are expanding, not after a director receives a legal notice.',
    ],
    sections: [
      {
        heading: 'Notice the trigger points',
        paragraphs: [
          'Fundraising, acquisitions, a formal board, rapid hiring, operations in new jurisdictions and a planned listing can all change management liability. So can a difficult restructuring or insolvency concern.',
        ],
      },
      {
        heading: 'Read beyond the overall limit',
        paragraphs: [
          'Allocation between insured and uninsured matters, defence-cost treatment, investigation cover, exclusions, prior matters and reporting rules can shape the response.',
        ],
        bullets: [
          'Map all entities and board seats that need consideration.',
          'Disclose known disputes and circumstances carefully.',
          'Understand who can approve defence counsel and settlements.',
          'Plan run-off cover around mergers or closures.',
        ],
      },
    ],
    closing:
      'D&O is part of governance, not a substitute for it. Strong minutes, clear authority and timely advice remain the first line of defence.',
  },
  {
    slug: 'professional-indemnity-real-client-mistakes',
    title: 'Professional Indemnity Is About the Mistakes Clients Actually Allege',
    excerpt:
      'Start with your contracts, deliverables and complaints instead of choosing cover from a generic profession label.',
    date: '2026-07-16',
    category: 'Liability Insurance',
    topic: 'Liability Insurance',
    opening: [
      'A consultant may worry about giving incorrect advice. A technology firm may worry about a failed implementation. An architect may worry about a design allegation years after a project ends. All can sit under the broad professional indemnity conversation, but their claim patterns are not interchangeable.',
      'A useful proposal begins with the work clients pay you to perform and what happens when they say it went wrong.',
    ],
    sections: [
      {
        heading: 'Use your contracts as the map',
        paragraphs: [
          'Review scopes of work, service levels, warranties, indemnities, limitation clauses and governing law. Identify subcontracted services and projects in other countries. The insurance application should tell the same story as the contracts.',
        ],
      },
      {
        heading: 'Respect the reporting basis',
        paragraphs: [
          'Many professional indemnity policies respond on a claims-made basis. Prior acts, retroactive dates and timely reporting of claims or circumstances deserve close attention when switching insurers.',
        ],
        bullets: [
          'Keep a central register of complaints and incidents.',
          'Escalate threats of a claim even if no suit has been filed.',
          'Check consent requirements before admitting liability.',
          'Preserve project records after the work is complete.',
        ],
      },
    ],
    closing:
      'The policy should reflect how your firm can disappoint a real client, not an abstract label selected from a drop-down menu.',
  },
  {
    slug: 'marine-cargo-insurance-sales-contract',
    title: 'Before Buying Marine Cargo Cover, Read the Sales Contract',
    excerpt:
      'The delivery terms in a contract often reveal who carries the risk, when it moves and who should arrange insurance.',
    date: '2026-07-14',
    category: 'Marine Insurance',
    topic: 'Marine Transit Insurance',
    opening: [
      'A shipment can be insured by the seller, the buyer, a logistics provider or more than one party. That does not mean each has the same interest or that every policy follows the goods through the whole journey.',
      'Before choosing a transit policy, find the point in the sales contract where risk moves from one party to another. The insurance arrangement should meet that commercial reality.',
    ],
    sections: [
      {
        heading: 'Map the journey door to door',
        paragraphs: [
          'List the warehouse, inland legs, port storage, sea or air voyage, trans-shipment points and final delivery. Note who selects each carrier and who receives the transport documents.',
        ],
        bullets: [
          'Commodity and packing method',
          'Maximum value on one vehicle, vessel or location',
          'Countries, ports and unusual routes',
          'Temperature, theft or breakage sensitivity',
        ],
      },
      {
        heading: 'Agree the evidence before a loss',
        paragraphs: [
          'Commercial invoice, packing list, transport document, delivery receipt and survey evidence can all become important. Train receiving teams to note visible damage or shortage promptly instead of signing a clean receipt out of habit.',
          'Also decide who will notify carriers and preserve recovery rights when damage is found.',
        ],
      },
    ],
    closing:
      'Cargo insurance begins with the contract and the route. Once those are clear, limits and clauses become much easier to test.',
  },
  {
    slug: 'monsoon-cargo-loss-prevention',
    title: 'Monsoon Cargo Losses Often Begin Before the Truck Moves',
    excerpt:
      'Packing, loading photographs and route choices can prevent water damage and strengthen a transit claim.',
    date: '2026-07-12',
    category: 'Risk Management',
    topic: 'Marine Transit Insurance',
    opening: [
      'When cartons arrive wet, the weather gets blamed first. Yet many water-damage losses begin with worn tarpaulins, floor gaps, poor pallet height or cargo loaded against a leaking wall.',
      'Insurance matters after the loss. A short dispatch routine can stop the loss from happening and create a clearer record if it does.',
    ],
    sections: [
      {
        heading: 'Inspect the vehicle and the packaging',
        paragraphs: [
          'Check the roof, doors, floor and side panels before loading. Match packaging to the route and handling, including the possibility of standing water, repeated unloading and outdoor storage.',
        ],
        bullets: [
          'Use pallets or suitable dunnage to lift vulnerable goods.',
          'Seal and label moisture-sensitive packages clearly.',
          'Photograph the empty vehicle and completed loading.',
          'Record vehicle number, seal number and dispatch time.',
        ],
      },
      {
        heading: 'Plan for the interruption',
        paragraphs: [
          'Flooded roads can strand cargo for days. Give drivers an escalation contact and rules for safe parking, route changes and emergency unloading. Monitor weather and avoid forcing a time-sensitive delivery through a closed route.',
          'If damage is discovered, separate affected goods, reduce further loss where safe and notify the relevant parties promptly.',
        ],
      },
    ],
    closing:
      'A two-minute vehicle check and six clear photographs are modest habits. Across a full monsoon season, they can be worth far more than the time they take.',
  },
  {
    slug: 'trade-credit-insurance-customer-concentration',
    title: 'One Customer Owes Half Your Receivables. What Happens If They Stop Paying?',
    excerpt:
      'Customer concentration is easy to see in a spreadsheet and painful to discover through a default.',
    date: '2026-07-10',
    category: 'Trade Credit',
    topic: 'Trade Credit Insurance',
    opening: [
      'A large customer can make growth feel secure. Orders are predictable, production is efficient and the relationship may span years. But if that customer delays payment, disputes invoices or becomes insolvent, the supplier can lose revenue and working capital at the same time.',
      'Trade credit insurance is one tool for managing that exposure, alongside credit controls and deliberate customer diversification.',
    ],
    sections: [
      {
        heading: 'Measure the exposure honestly',
        paragraphs: [
          'Look at current outstanding invoices, approved but unused credit, work in progress and orders that cannot easily be redirected. Group connected buyers where financial trouble could spread across entities.',
        ],
      },
      {
        heading: 'Insurance does not replace credit discipline',
        paragraphs: [
          'Policies commonly require credit limits, reporting and action on overdue accounts. The sales team needs to know when a late payment must be escalated rather than quietly extended.',
        ],
        bullets: [
          'Set authority levels for customer credit.',
          'Review ageing and adverse information regularly.',
          'Record disputes separately from simple late payment.',
          'Understand waiting periods, retention and recovery sharing.',
        ],
      },
    ],
    closing:
      'The goal is not to stop selling to your best customer. It is to ensure one difficult account cannot decide the future of your own business.',
  },
  {
    slug: 'group-health-renewal-data-story',
    title: 'Your Group Health Renewal Has a Story Hidden in the Claims Data',
    excerpt:
      'A useful renewal review looks past the headline loss ratio to understand where employees are actually using cover.',
    date: '2026-07-08',
    category: 'Employee Benefits',
    topic: 'Employee Benefits Insurance',
    opening: [
      'A group health renewal can become a hurried debate about one number: the proposed premium increase. That number matters, but it is the ending of the story, not the beginning.',
      'Claims data can show which benefits employees use, where high-cost cases are emerging and whether policy design still fits the workforce.',
    ],
    sections: [
      {
        heading: 'Ask for patterns, not personal medical details',
        paragraphs: [
          'Review anonymised trends by claim size, diagnosis group, hospital type, location, employee versus dependant status and cashless versus reimbursement route. Protect confidentiality and restrict access to people who need the analysis.',
        ],
      },
      {
        heading: 'Connect the numbers to employee experience',
        paragraphs: [
          'A low-use benefit may be poorly communicated rather than unnecessary. Reimbursement delays may point to documentation problems, while repeated non-payable items may signal a need for clearer education.',
        ],
        bullets: [
          'Separate one-off large claims from recurring trends.',
          'Review room selection, maternity and parental cover experience.',
          'Compare hospital access with employee locations.',
          'Model design changes before asking employees to absorb them.',
        ],
      },
    ],
    closing:
      'A good renewal leaves HR with more than a premium. It should produce a short list of benefit, communication and risk actions for the coming year.',
  },
  {
    slug: 'employees-understand-health-benefits',
    title: 'Employees Cannot Use a Health Benefit They Do Not Understand',
    excerpt:
      'Turn a dense group policy into a few timely messages employees can act on before and during treatment.',
    date: '2026-07-06',
    category: 'Employee Benefits',
    topic: 'Employee Benefits Insurance',
    opening: [
      'HR may spend months negotiating a health plan, then introduce it with one long email and an attachment. Employees open the document only when somebody is already unwell.',
      'Benefit communication works better as a small programme across the year, with each message answering a question people actually ask.',
    ],
    sections: [
      {
        heading: 'Teach the moments that matter',
        paragraphs: [
          'Start with enrolment, adding dependants, finding a network hospital, planned admission, emergency notification, reimbursement and escalation. Use screenshots and phone numbers rather than policy language alone.',
        ],
        bullets: [
          'A one-page benefit summary for the refrigerator',
          'A wallet-sized emergency contact card',
          'A short video showing the cashless process',
          'Quarterly reminders about common non-payable expenses',
        ],
      },
      {
        heading: 'Give managers boundaries',
        paragraphs: [
          'Managers are often the first people contacted during a family emergency. Tell them where to direct the employee without inviting private medical information into team chats or informal spreadsheets.',
          'Collect recurring questions and use them to improve the next message.',
        ],
      },
    ],
    closing:
      'Measure communication by whether an employee knows the next step at 2 a.m., not by whether the launch email was sent.',
  },
  {
    slug: 'office-package-policy-after-moving',
    title: 'Moved Offices? Your Insurance Needs More Than a New Address',
    excerpt:
      'A move changes values, security, fire protection, occupancy and business continuity arrangements.',
    date: '2026-07-04',
    category: 'Business Insurance',
    topic: 'Office Package Insurance',
    opening: [
      'The lease is signed, laptops are moved and the website has the new address. Insurance is easy to leave on the old premises until renewal. That gap can matter because a location is more than a line on the schedule.',
      'A new building changes the physical and operational facts the insurer understood when the policy began.',
    ],
    sections: [
      {
        heading: 'Walk through the new risk',
        paragraphs: [
          'Record construction, floor, access control, fire detection, sprinklers, neighbouring occupancies, backup power and storage. Check landlord responsibilities against your own lease obligations.',
        ],
        bullets: [
          'Update the insured address before moving assets.',
          'Revalue furniture, fit-outs, electronics and stock.',
          'Review burglary protections and key control.',
          'Test evacuation and emergency contacts.',
        ],
      },
      {
        heading: 'Remember the moving period',
        paragraphs: [
          'For a time, property may sit at both offices or travel between them. Contractors may be installing cabling and interiors while employees start work. Discuss the transition instead of assuming the annual office policy automatically stretches across it.',
          'Update business interruption and electronic equipment information once the final setup is known.',
        ],
      },
    ],
    closing:
      'Add insurance to the move plan beside IT, security and facilities. It is much easier to agree the right arrangement before the first truck is loaded.',
  },
  {
    slug: 'startup-insurance-buying-order',
    title: 'A Sensible Order for a Startup’s First Insurance Policies',
    excerpt:
      'Start with contractual and balance-sheet risks, then add protection as the team, product and customers grow.',
    date: '2026-07-02',
    category: 'Startup Insurance',
    topic: 'Startup Insurance',
    opening: [
      'A startup can receive an insurance checklist from an investor, a landlord, an enterprise customer and an employee, all in the same week. Buying every available policy is rarely practical. Buying only the cheapest certificate can be just as unhelpful.',
      'Prioritise the events that could stop the company, breach a contract or create a liability larger than the balance sheet can absorb.',
    ],
    sections: [
      {
        heading: 'Begin with people, property and promises',
        paragraphs: [
          'Map employee benefits and statutory needs, physical assets and premises, professional commitments to customers, data exposure and founder or board responsibilities. Customer contracts often set limits or coverage types that affect the sequence.',
        ],
      },
      {
        heading: 'Let milestones trigger the next review',
        paragraphs: [
          'Funding, the first enterprise contract, international sales, a larger office, a formal board, hardware inventory and rapid hiring can each change the answer.',
        ],
        bullets: [
          'Keep a register of insurance clauses in contracts.',
          'Assign one owner for applications and renewal data.',
          'Report material product or service changes during the year.',
          'Budget for deductibles as well as premiums.',
        ],
      },
    ],
    closing:
      'The best early insurance programme is not the biggest one. It is the one that matches today’s real exposures and has a clear plan for tomorrow’s.',
  },
  {
    slug: 'contractors-all-risk-project-changes',
    title: 'Construction Projects Change Weekly. Does the Insurance Know?',
    excerpt:
      'Extensions, revised values and newly occupied sections can quietly move a project away from its original cover.',
    date: '2026-06-30',
    category: 'Construction Insurance',
    topic: 'Construction Industry',
    opening: [
      'A contractors all risk policy may be arranged from the original project schedule, contract value and completion date. The site then evolves: design changes add cost, monsoon delays shift the timeline and part of the building is handed over early.',
      'If the insurance file still describes the first plan, the project team and insurer may be working with different facts.',
    ],
    sections: [
      {
        heading: 'Create insurance change triggers',
        paragraphs: [
          'The project manager does not need to interpret policy wording, but should know which events must reach the insurance owner.',
        ],
        bullets: [
          'Material increases in contract value',
          'Extensions beyond the insured period',
          'Changes in design, method or major contractors',
          'Testing, commissioning or partial occupation',
          'Long storage or off-site fabrication changes',
        ],
      },
      {
        heading: 'Keep the site record claim-ready',
        paragraphs: [
          'Daily logs, progress photographs, weather records, quality checks, drawings, method statements and incident reports can help explain what happened. Store copies away from the site and keep responsibilities clear across owner, contractor and subcontractors.',
        ],
      },
    ],
    closing:
      'Put insurance on the agenda for monthly project controls. A short update is easier than reconstructing six months of changes after a loss.',
  },
  {
    slug: 'solar-project-insurance-handover-gap',
    title: 'The Solar Project Is Generating Power. Has the Insurance Moved With It?',
    excerpt:
      'The handover from construction to operations is a risk transition, not just a ribbon-cutting date.',
    date: '2026-06-28',
    category: 'Renewable Energy',
    topic: 'Solar Industry',
    opening: [
      'A solar project does not move neatly from construction to normal operation in one moment. Arrays may be energised in stages, testing can continue and punch-list work may overlap with commercial generation.',
      'That makes the insurance handover worth planning early. Construction and operational policies may define completion and testing differently.',
    ],
    sections: [
      {
        heading: 'Agree the transition milestones',
        paragraphs: [
          'Map mechanical completion, energisation, testing, provisional acceptance and final handover. Confirm which party carries risk and which policy is expected to respond at each point, including any defects period.',
        ],
      },
      {
        heading: 'Use operational data from day one',
        paragraphs: [
          'Once generation starts, monitoring and maintenance records become part of the risk story. Establish alert ownership and escalation rather than letting early warnings sit in a dashboard.',
        ],
        bullets: [
          'Update replacement values and revenue assumptions.',
          'Check flood, storm, fire and theft protections on site.',
          'Review spare-part and transformer lead times.',
          'Document warranties and maintenance responsibilities.',
        ],
      },
    ],
    closing:
      'Treat handover as a joint meeting between project, operations, finance and insurance teams. Power generation should not begin with an unanswered coverage gap.',
  },
  {
    slug: 'fleet-renewal-loss-runs-driver-actions',
    title: 'Your Fleet Loss Run Should Change How the Vehicles Are Managed',
    excerpt:
      'Claims data is most valuable when it leads to a driver, route, maintenance or reporting action.',
    date: '2026-06-26',
    category: 'Fleet Insurance',
    topic: 'Motor Fleet Insurance',
    opening: [
      'Fleet claims are often reviewed once, shortly before renewal, to negotiate premium. Then the spreadsheet is filed away. That misses the practical value in the data.',
      'Even a basic loss run can show repeat drivers, locations, manoeuvres, vehicle types and reporting delays that deserve operational attention.',
    ],
    sections: [
      {
        heading: 'Add context to each claim',
        paragraphs: [
          'Capture route, time, weather, load, driver tenure, damage type, third-party involvement and days off road. A claim labelled only as accident tells a risk manager very little.',
        ],
        bullets: [
          'Separate frequency problems from one severe event.',
          'Track reversing, parking and low-speed collisions.',
          'Compare workshops by repair time and repeat work.',
          'Record how quickly incidents are reported.',
        ],
      },
      {
        heading: 'Choose two actions you can measure',
        paragraphs: [
          'A targeted reversing programme may be more useful than generic annual driver training. A route review may help one depot more than installing new technology across every vehicle.',
          'Assign an owner, baseline and review date so the renewal meeting can discuss what changed, not only what was paid.',
        ],
      },
    ],
    closing:
      'The insurer sees a claims history. Your operations team should see a short list of preventable events and decide what to do next.',
  },
  {
    slug: 'business-travel-insurance-exclusions',
    title: 'Five Questions to Ask Before an Employee Flies for Work',
    excerpt:
      'Business travel cover needs to fit the destination, activity, medical history and support plan for the actual trip.',
    date: '2026-06-24',
    category: 'Travel Insurance',
    topic: 'Group Travel Insurance',
    opening: [
      'A yearly travel policy is easy to treat as background administration. Then an employee adds a personal weekend, carries specialist equipment or travels to perform hands-on work at a customer site.',
      'Those details can change what the company expects from the policy and assistance provider.',
    ],
    sections: [
      {
        heading: 'Ask about the real itinerary',
        paragraphs: [
          'Confirm every country, total trip length, planned activities, personal extensions and any known medical needs. Check entry rules and local assistance information separately from insurance.',
        ],
        bullets: [
          'Are manual, offshore or hazardous activities involved?',
          'Who owns and insures laptops or specialist equipment?',
          'How does the traveller request emergency medical help?',
          'What documents are needed for delay, baggage or cancellation claims?',
          'Does the employee know the company escalation contact?',
        ],
      },
      {
        heading: 'Make assistance details usable',
        paragraphs: [
          'A helpline buried in a policy PDF is not enough. Put the number, policy reference and HR contact in the travel pack and on the employee’s phone. Explain when direct payment may be possible and when the traveller may need to pay first.',
        ],
      },
    ],
    closing:
      'The best time to clarify a travel policy is before departure, with the itinerary open and the employee in the conversation.',
  },
  {
    slug: 'jewellers-stock-movement-records',
    title: 'For a Jeweller, Stock Does Not Stop Being a Risk When It Leaves the Safe',
    excerpt:
      'Memo goods, exhibitions, couriers and employee custody all need clear limits and movement records.',
    date: '2026-06-22',
    category: 'Jewellers Insurance',
    topic: 'Shopkeepers Package And Jewellers Block',
    opening: [
      'A jewellery business may have excellent security at the main premises and far less clarity once stock moves to an exhibition, customer viewing, job worker or another branch.',
      'The insurance review should follow the stock through a normal working month, including goods owned by others and goods entrusted to other people.',
    ],
    sections: [
      {
        heading: 'Draw the movement routes',
        paragraphs: [
          'List every reason stock leaves the premises, who carries it, how it travels, where it stays and how receipt is acknowledged. Compare those practices with policy limits and safeguards.',
        ],
        bullets: [
          'Memo and approval goods',
          'Courier and postal movements',
          'Exhibitions and temporary locations',
          'Job workers, repairers and cutters',
          'Employee or director custody',
        ],
      },
      {
        heading: 'Make daily records consistent',
        paragraphs: [
          'Use numbered movement documents, clear descriptions, weights, values, recipient confirmation and timely return entries. Reconcile outstanding items rather than allowing old memos to remain open indefinitely.',
          'Review safe, alarm, camera and key procedures whenever the premises or team changes.',
        ],
      },
    ],
    closing:
      'A jewellers policy is only one part of the control system. Reliable custody records make both prevention and claim explanation stronger.',
  },
  {
    slug: 'product-liability-complaint-register',
    title: 'A Customer Complaint Can Be the First Sign of a Product Claim',
    excerpt:
      'Manufacturers need a clean path from service complaints to quality, legal and insurance teams.',
    date: '2026-06-20',
    category: 'Liability Insurance',
    topic: 'Liability Insurance',
    opening: [
      'The first warning of a product problem may not look like a legal claim. It may be a customer email about overheating, a distributor reporting unusual returns or a service technician replacing the same part repeatedly.',
      'If those signals stay in separate inboxes, the business can miss a pattern until injuries, property damage or a costly recall is alleged.',
    ],
    sections: [
      {
        heading: 'Build one escalation path',
        paragraphs: [
          'Define which complaints must reach quality, legal, leadership and the insurance contact. Preserve the product, packaging, batch data, photographs and communications instead of closing the ticket after a refund.',
        ],
        bullets: [
          'Track model, batch and manufacturing date.',
          'Separate performance complaints from safety concerns.',
          'Record where and how the product was used.',
          'Flag clusters across customers or regions.',
        ],
      },
      {
        heading: 'Do not improvise admissions',
        paragraphs: [
          'Empathy and prompt customer care are important, but employees should not guess at cause or promise compensation before facts are reviewed. Use approved communication and check notification or consent requirements under relevant policies.',
        ],
      },
    ],
    closing:
      'A complaint register is more than a service metric. Used well, it is an early-warning system for quality, safety and liability.',
  },
  {
    slug: 'annual-personal-insurance-review',
    title: 'A Once-a-Year Personal Insurance Review You Can Finish Over Tea',
    excerpt:
      'One short household conversation can catch old nominees, thin cover and missing documents before they become urgent.',
    date: '2026-06-18',
    category: 'Personal Insurance',
    topic: 'Retail Insurance',
    opening: [
      'Insurance reviews are easy to postpone because nothing appears broken. Premiums are paid, policies renew and documents arrive by email. Meanwhile, salaries change, parents age, loans are taken and hospital costs move.',
      'Pick one date each year and review the household together. Tea is optional, but keeping the conversation short helps it happen again next year.',
    ],
    sections: [
      {
        heading: 'Put every policy on one page',
        paragraphs: [
          'List policy number, insurer, insured people, sum insured, renewal date, nominee and emergency contact. Include employer cover but mark it separately because it can change with employment.',
        ],
        bullets: [
          'Check health cover, waiting periods and room eligibility.',
          'Recalculate life cover after loans or family changes.',
          'Review motor IDV, add-ons and driver details.',
          'Update home contents and valuable items.',
          'Store documents where another adult can find them.',
        ],
      },
      {
        heading: 'End with three actions',
        paragraphs: [
          'Do not turn the review into a week-long research project. Decide the three most important follow-ups, name the person responsible and set a date. The rest can wait for the next check.',
        ],
      },
    ],
    closing:
      'The purpose is not to buy something every year. It is to make sure the protection you already pay for still matches the life you are living.',
  },
  {
    slug: 'claim-intimation-first-message',
    title: 'The First Claim Message Should Be Short, Clear and Early',
    excerpt:
      'You do not need every invoice before notifying a loss. Start with the facts you know and preserve the rest.',
    date: '2026-06-16',
    category: 'Claims',
    topic: 'Claims Story',
    opening: [
      'After a loss, teams sometimes wait to notify the insurer until they know the final amount. That can take days or weeks. Others send a hurried message with no location, policy reference or contact person.',
      'A useful first notice is early, factual and easy for the recipient to route. It can be updated as the situation develops.',
    ],
    sections: [
      {
        heading: 'Include the facts available now',
        paragraphs: [
          'State who is reporting, what happened, when and where it happened, what appears damaged, what immediate action was taken and who can coordinate next steps. Attach a few representative photographs if safe.',
        ],
        bullets: [
          'Policy number or insured entity name',
          'Date, time and exact location',
          'Brief factual description without guessing at cause',
          'Emergency services or authorities involved',
          'Name and phone number of the site contact',
        ],
      },
      {
        heading: 'Protect people and property first',
        paragraphs: [
          'Take reasonable steps to prevent further harm, but preserve evidence and damaged property where practical. Ask before beginning permanent repairs or disposing of items, except where safety requires immediate action.',
          'Start a simple expense and decision log from the first day.',
        ],
      },
    ],
    closing:
      'Do not confuse early notice with a final claim submission. The first gets the right people involved; the second can follow with the full evidence.',
  },
  {
    slug: 'health-insurance-portability-preparation',
    title: 'Thinking of Porting Your Health Policy? Start Before Renewal Week',
    excerpt:
      'Portability deserves enough time for comparison, disclosure and underwriting, not a hurried decision near expiry.',
    date: '2026-06-14',
    category: 'Health Insurance',
    topic: 'Health Insurance',
    opening: [
      'A lower premium or a better hospital network can make a new health policy attractive. Porting may allow continuity benefits to move with you, subject to the applicable rules and the new insurer’s underwriting. It is not an automatic swap at the renewal counter.',
      'Starting early gives you time to compare the new wording and answer medical questions properly without risking a break in cover.',
    ],
    sections: [
      {
        heading: 'Compare what changes, not only what continues',
        paragraphs: [
          'Place the current and proposed customer information sheets side by side. Check room eligibility, co-payments, exclusions, restoration, network hospitals and claim service as carefully as the sum insured.',
        ],
        bullets: [
          'Collect policy schedules and claim history from prior years.',
          'List diagnoses, medicines, investigations and pending treatment.',
          'Confirm how continuity credit will be recorded.',
          'Keep the existing policy active until the new arrangement is confirmed.',
        ],
      },
      {
        heading: 'Treat disclosure as a fresh responsibility',
        paragraphs: [
          'Do not assume the new insurer can infer every medical detail from old claims. Answer the proposal questions completely and retain a copy of the submitted form and supporting records.',
        ],
      },
    ],
    closing:
      'Port because the new policy fits better, not because one quote is cheaper. The wording you move into matters for years after the renewal date.',
  },
  {
    slug: 'health-cover-for-ageing-parents',
    title: 'Buying Health Cover for Parents Starts With an Honest Family Conversation',
    excerpt:
      'Medical history, hospital preferences and a realistic premium budget should be discussed before comparing products.',
    date: '2026-06-12',
    category: 'Health Insurance',
    topic: 'Health Insurance',
    opening: [
      'Adult children often begin searching for parental health cover after a worrying test result or a friend’s hospital bill. The instinct is sensible, but the proposal works best when parents are part of the conversation.',
      'Known conditions, regular medicines, previous procedures and preferred hospitals all affect what useful cover looks like.',
    ],
    sections: [
      {
        heading: 'Write down the medical picture first',
        paragraphs: [
          'Create a simple timeline of diagnoses, consultations, surgeries and current treatment. Gather recent reports and prescriptions. Complete disclosure helps the insurer assess the proposal and reduces avoidable disputes later.',
        ],
      },
      {
        heading: 'Plan for premium and participation',
        paragraphs: [
          'Check co-payments, room limits, waiting periods and disease-specific terms. Then decide who will pay the premium, manage renewals and coordinate a claim if the parent is admitted.',
        ],
        bullets: [
          'Check network hospitals close to home.',
          'Save policy and helpline details on both phones.',
          'Budget for expenses the policy may not pay.',
          'Review the arrangement together every year.',
        ],
      },
    ],
    closing:
      'The right policy is one the family understands and can keep renewing. A transparent conversation at the start makes both parts easier.',
  },
  {
    slug: 'term-insurance-medical-disclosure',
    title: 'The Most Important Part of a Term Proposal May Be the Boring Questions',
    excerpt:
      'Habits, medical consultations and other policies deserve careful answers, even when the form feels repetitive.',
    date: '2026-06-10',
    category: 'Life Insurance',
    topic: 'Term Insurance',
    opening: [
      'The cover amount gets most of the attention when someone buys term insurance. The proposal form often feels like paperwork standing between the applicant and the policy. In reality, those questions are the information on which underwriting is based.',
      'A quick or incomplete answer can create a much larger problem for the family than a few extra days spent gathering records.',
    ],
    sections: [
      {
        heading: 'Answer what is asked, with context where needed',
        paragraphs: [
          'Review smoking and tobacco use, alcohol, occupation, travel, existing insurance, family history, medicines, tests and medical consultations. If a question feels ambiguous, ask for clarification in writing rather than guessing.',
        ],
        bullets: [
          'Do not let another person invent approximate medical answers.',
          'Mention investigations even when the result was normal if asked.',
          'Keep copies of reports shared with the insurer.',
          'Review the final proposal before signing or confirming it.',
        ],
      },
      {
        heading: 'Keep the issued record',
        paragraphs: [
          'Save the proposal, medical reports, payment acknowledgement and policy schedule together. Check that name, date of birth, nominee and cover details are correct during the review period.',
        ],
      },
    ],
    closing:
      'The proposal is not a test with good and bad answers. It is a record of the risk, so accuracy is more valuable than trying to look healthier on paper.',
  },
  {
    slug: 'motor-claim-photo-checklist',
    title: 'Six Photographs That Can Make a Motor Claim Easier to Explain',
    excerpt:
      'A few safe, well-framed photographs can preserve the scene before vehicles are moved or repaired.',
    date: '2026-06-08',
    category: 'Claims',
    topic: 'Motor Insurance',
    opening: [
      'After a collision, most people photograph the damaged bumper and stop. That close-up proves damage exists, but it may not explain where the vehicles were, which direction they travelled or what road conditions looked like.',
      'If everyone is safe and local rules permit, capture the wider story before the scene changes.',
    ],
    sections: [
      {
        heading: 'Work from wide to close',
        paragraphs: [
          'Stand somewhere safe and avoid obstructing traffic. Do not argue with another driver or place yourself in danger for a better angle.',
        ],
        bullets: [
          'The full road and direction of travel',
          'Final position of all involved vehicles',
          'Registration plates and visible damage',
          'Road signs, signals and lane markings',
          'Skid marks, debris or a relevant obstruction',
          'The dashboard showing warning lights where safe',
        ],
      },
      {
        heading: 'Add a short factual note',
        paragraphs: [
          'Record the time, location, weather, contact details and any authority reference. Notify the insurer promptly and follow instructions before repairs. Avoid guessing at speed or fault in the first message.',
        ],
      },
    ],
    closing:
      'Good photographs do not decide liability on their own. They give the people reviewing the claim a clearer scene than memory can provide days later.',
  },
  {
    slug: 'ev-insurance-charging-equipment',
    title: 'Your EV Policy and Your Home Charger Solve Different Problems',
    excerpt:
      'An electric vehicle, its battery, charging cable and installed charger may not all sit under one assumption.',
    date: '2026-06-06',
    category: 'Motor Insurance',
    topic: 'Motor Insurance',
    opening: [
      'Buying an electric vehicle adds equipment that a conventional car owner may never have considered. The portable cable travels with the vehicle, while a wall charger becomes part of the home or workplace installation.',
      'Before relying on one policy name, ask where each item is insured and what happens if it is damaged, stolen or causes damage elsewhere.',
    ],
    sections: [
      {
        heading: 'List the equipment and ownership',
        paragraphs: [
          'Record the vehicle, traction battery, portable charger, wall unit, wiring upgrades and any equipment supplied under lease or subscription. Keep invoices and installation certificates.',
        ],
      },
      {
        heading: 'Check the installation as carefully as the insurance',
        paragraphs: [
          'Use an authorised installer, follow electrical load and earthing requirements, and keep the area protected from water and impact. For society or workplace parking, document permissions and maintenance responsibility.',
        ],
        bullets: [
          'Ask how battery damage and depreciation are treated.',
          'Confirm cover for charging accessories.',
          'Review roadside assistance for an exhausted battery.',
          'Tell the home or property insurer about material installation changes.',
        ],
      },
    ],
    closing:
      'The useful question is not simply whether the EV is insured. It is whether every part of the charging setup has a clear owner, maintenance plan and coverage answer.',
  },
  {
    slug: 'property-reinstatement-value-review',
    title: 'The Building Cost Has Changed. Has the Property Sum Insured?',
    excerpt:
      'Market value and rebuilding cost are different numbers, and an old asset schedule can quietly become inadequate.',
    date: '2026-06-04',
    category: 'Property Insurance',
    topic: 'Property And Engineering Insurance',
    opening: [
      'A property schedule may be renewed with last year’s values plus a small percentage. Meanwhile, material, labour, freight and professional costs may have moved differently, and new fit-outs may never have reached the asset register.',
      'The insurance value should reflect the basis required by the policy, not the price for which the land and building might be sold.',
    ],
    sections: [
      {
        heading: 'Break the value into components',
        paragraphs: [
          'Separate buildings, plant, machinery, furniture, stock and other contents. Include installation, freight, duties, debris-related costs or professional fees where the policy basis calls for them.',
        ],
        bullets: [
          'Add capital projects completed during the year.',
          'Remove disposed assets only after confirming records.',
          'Test imported equipment against currency movement.',
          'Review peak stock rather than a convenient average.',
        ],
      },
      {
        heading: 'Involve the people who know replacement lead times',
        paragraphs: [
          'Finance knows book values, but engineering and procurement often know what replacement would actually cost and how long it would take. Use both perspectives at renewal.',
        ],
      },
    ],
    closing:
      'A sum insured is not a number to carry forward automatically. Rebuild it from current assets and the policy basis, then document how you arrived there.',
  },
  {
    slug: 'machinery-breakdown-maintenance-records',
    title: 'A Machinery Breakdown Claim Often Starts With the Maintenance Log',
    excerpt:
      'Service history, alarms and operator notes help distinguish a sudden event from a problem that developed over time.',
    date: '2026-06-02',
    category: 'Engineering Insurance',
    topic: 'Property And Engineering Insurance',
    opening: [
      'When a critical machine stops, the first priority is safe shutdown and restoring production. The cause may not be obvious, and well-intentioned repairs can erase evidence before anyone records the condition.',
      'A clear maintenance history helps engineers, surveyors and claim teams understand what changed and when.',
    ],
    sections: [
      {
        heading: 'Preserve the event record',
        paragraphs: [
          'Save alarms, control-system logs, operator notes, photographs, failed parts and the initial technician’s observations. Record emergency work separately from permanent repair decisions.',
        ],
        bullets: [
          'Preventive and predictive maintenance reports',
          'Lubrication, vibration and temperature records',
          'Recent modifications or control changes',
          'Spare-part history and prior similar failures',
        ],
      },
      {
        heading: 'Notify before the teardown goes too far',
        paragraphs: [
          'Safety work should not wait, but coordinate inspection before disposing of parts or rebuilding the assembly where practical. Keep vendor scopes, quotations and invoices connected to the failure.',
        ],
      },
    ],
    closing:
      'Maintenance records protect uptime first. When a sudden breakdown still occurs, the same records give the claim a credible technical timeline.',
  },
  {
    slug: 'vendor-caused-cyber-incident',
    title: 'The Cyber Incident Started at a Vendor. Your Response Still Starts at Home',
    excerpt:
      'Third-party failures need the same disciplined incident ownership as an attack on your own systems.',
    date: '2026-05-31',
    category: 'Cyber Insurance',
    topic: 'Cyber Insurance',
    opening: [
      'A software provider or payroll vendor may send the first alert, but your customers and employees will still turn to your organisation for answers. Waiting for the vendor’s final investigation can leave important response work undone.',
      'Treat the notice as your incident too, with internal ownership, evidence and policy notification.',
    ],
    sections: [
      {
        heading: 'Establish what is known and unknown',
        paragraphs: [
          'Identify affected services, data, users, integrations and time periods. Preserve vendor notices and contracts, and request regular written updates through an agreed contact.',
        ],
        bullets: [
          'Disable or restrict risky connections where appropriate.',
          'Review logs in systems under your control.',
          'Coordinate legal, privacy and communication advice.',
          'Notify relevant insurers through the required route.',
        ],
      },
      {
        heading: 'Use the contract without depending on it',
        paragraphs: [
          'Indemnities and notification clauses may matter later. They do not replace immediate containment, customer care or regulatory analysis. Record your own costs and decisions from the first day.',
        ],
      },
    ],
    closing:
      'Outsourcing a service does not outsource the disruption. Build vendor incidents into exercises so the internal team knows who acts before complete answers arrive.',
  },
  {
    slug: 'ransomware-backup-restore-test',
    title: 'A Backup Is Only Reassuring After Someone Has Restored It',
    excerpt:
      'Ransomware resilience depends on clean, reachable recovery copies and a team that knows the restoration order.',
    date: '2026-05-29',
    category: 'Cyber Insurance',
    topic: 'Cyber Insurance',
    opening: [
      'A dashboard can show successful backups every night while the organisation remains unprepared to restore a full business service. Credentials may be compromised, dependencies may be missing and nobody may have agreed which system comes first.',
      'Recovery becomes believable when it is tested under realistic constraints.',
    ],
    sections: [
      {
        heading: 'Test the chain, not one file',
        paragraphs: [
          'Choose a critical process and restore the applications, configurations, identities and data it needs into an isolated environment. Measure the time and record manual steps rather than stopping when a sample document opens.',
        ],
        bullets: [
          'Protect recovery credentials separately.',
          'Maintain offline or appropriately isolated copies.',
          'Check retention against how long compromise may go unnoticed.',
          'Assign business owners to validate restored data.',
        ],
      },
      {
        heading: 'Connect the test to the response plan',
        paragraphs: [
          'Decide who can authorise restoration, how forensic preservation will be balanced with recovery, and when customers or staff receive updates. Include external technology and incident-response partners.',
        ],
      },
    ],
    closing:
      'The question is not whether backups exist. It is whether the business can recover safely, in the right order, within a timeframe leadership understands.',
  },
  {
    slug: 'cargo-packaging-claim-evidence',
    title: 'When Cargo Is Damaged, the Packaging Tells Part of the Story',
    excerpt:
      'Keep the carton, pallet, seals and receiving record until the cause and extent of damage are understood.',
    date: '2026-05-27',
    category: 'Marine Insurance',
    topic: 'Marine Transit Insurance',
    opening: [
      'A receiving team may unpack damaged goods, discard wet cartons and clean the area before informing anyone. The response is understandable, but it can remove clues about impact, water entry, handling and packing adequacy.',
      'Once people and property are safe, preserve enough of the shipment to explain how it arrived.',
    ],
    sections: [
      {
        heading: 'Photograph before separating everything',
        paragraphs: [
          'Capture the container or vehicle, seal, pallet arrangement, outer packaging, internal protection, labels and damaged goods. Include scale and identification marks where useful.',
        ],
        bullets: [
          'Note exceptions on the delivery receipt.',
          'Count affected and apparently sound packages.',
          'Retain representative packaging and damaged items.',
          'Notify the carrier and insurer promptly.',
        ],
      },
      {
        heading: 'Reduce further loss without hiding the evidence',
        paragraphs: [
          'Move goods away from water or contamination, segregate them and follow safe handling requirements. Record every salvage, drying or repacking step and obtain guidance before disposal.',
        ],
      },
    ],
    closing:
      'Packaging is not rubbish immediately after a cargo loss. For a short time, it is evidence, so give the claim team a chance to see what the goods travelled through.',
  },
  {
    slug: 'group-personal-accident-benefit',
    title: 'Group Personal Accident Cover Is Not the Same as Group Health Cover',
    excerpt:
      'The two employee benefits respond to different events and should be explained separately.',
    date: '2026-05-25',
    category: 'Employee Benefits',
    topic: 'Employee Benefits Insurance',
    opening: [
      'Employees often recognise the company health card and assume every injury-related cost or consequence sits under the same plan. Group personal accident cover usually addresses defined accidental death or disability benefits, while health insurance focuses on eligible medical expenses.',
      'The distinction matters most when an accident affects income and working ability long after hospital discharge.',
    ],
    sections: [
      {
        heading: 'Explain the benefit in real situations',
        paragraphs: [
          'Use examples involving temporary absence, permanent disability and accidental death, but keep them tied to the actual schedule and definitions. Clarify whether cover applies around the clock or only in specified circumstances.',
        ],
        bullets: [
          'Who is included and when cover begins',
          'Capital sum insured and benefit percentages',
          'Required medical or disability certification',
          'Notification contacts and document requirements',
        ],
      },
      {
        heading: 'Coordinate HR and claim support',
        paragraphs: [
          'An injured employee or family may deal with several processes at once. Give them one internal contact who can explain health, accident, leave and other available support without making promises beyond the policy.',
        ],
      },
    ],
    closing:
      'A benefit is most valuable when employees know it exists before a crisis. Introduce accident cover by explaining the gap it fills beside health insurance.',
  },
  {
    slug: 'maternity-benefit-group-health-design',
    title: 'A Maternity Benefit Needs More Than a Headline Limit',
    excerpt:
      'Waiting rules, newborn cover, hospital costs and employee communication shape how the benefit works in practice.',
    date: '2026-05-23',
    category: 'Employee Benefits',
    topic: 'Employee Benefits Insurance',
    opening: [
      'A company may advertise a maternity limit and believe the benefit is clear. Employees then discover different rules for delivery type, pre- and post-natal expenses, newborn care or enrolment during the year.',
      'A useful design review follows the family journey rather than stopping at one rupee amount.',
    ],
    sections: [
      {
        heading: 'Map the questions employees ask',
        paragraphs: [
          'Review eligibility, waiting requirements, delivery-related limits, complications, newborn inclusion, vaccination, fertility treatment and surrogacy or adoption terms where relevant to the plan.',
        ],
        bullets: [
          'Compare benefit limits with hospitals employees actually use.',
          'Explain when and how a newborn must be enrolled.',
          'Separate covered medical care from non-medical expenses.',
          'Protect privacy in HR communication and escalation.',
        ],
      },
      {
        heading: 'Look at experience, not anecdotes alone',
        paragraphs: [
          'Use anonymised claim and utilisation data to understand gaps. Employee feedback can reveal confusing processes, but benefit decisions should also consider workforce needs, sustainability and fairness across the plan.',
        ],
      },
    ],
    closing:
      'The strongest maternity benefit is one employees can understand early, use with dignity and coordinate without sharing private details widely at work.',
  },
  {
    slug: 'warehouse-stock-accumulation-risk',
    title: 'The Warehouse Looks Normal Until You Add Up Everything Inside',
    excerpt:
      'Stock concentration, temporary overflow and goods awaiting dispatch can push one location far beyond its expected value.',
    date: '2026-05-21',
    category: 'Property Insurance',
    topic: 'Property And Engineering Insurance',
    opening: [
      'Warehouse limits are often based on an average month. A delayed shipment, seasonal build-up or customer return can quietly double the value at one site for several days.',
      'That temporary concentration may be exactly when a fire, flood or theft becomes most damaging.',
    ],
    sections: [
      {
        heading: 'Track the maximum, not only the average',
        paragraphs: [
          'Use inventory data to identify peaks by location and commodity. Include goods in receiving, dispatch yards, temporary sheds and third-party facilities where the business still carries the risk.',
        ],
        bullets: [
          'Set alerts when values approach declared limits.',
          'Record customer-owned and consigned goods separately.',
          'Review storage height and fire-system design after layout changes.',
          'Notify exceptional accumulations through the agreed process.',
        ],
      },
      {
        heading: 'Connect sales plans to storage capacity',
        paragraphs: [
          'Promotions and bulk purchases can create an insurance change before finance sees the final month-end number. Give warehouse and procurement teams a simple escalation threshold.',
        ],
      },
    ],
    closing:
      'A location limit should survive the busiest realistic week, not just match the value reported on a quiet reporting date.',
  },
  {
    slug: 'questions-for-business-insurance-renewal',
    title: 'Seven Better Questions for Your Next Business Insurance Renewal',
    excerpt:
      'Move the renewal conversation beyond premium and ask what has changed, what is unclear and what would happen during a claim.',
    date: '2026-05-19',
    category: 'Business Insurance',
    topic: 'Corporate Insurance',
    opening: [
      'A renewal meeting can become a comparison of last year’s premium and this year’s quotation. That leaves little room to discuss whether the business, policy or claims experience has changed.',
      'Better questions turn renewal into a risk decision rather than an annual purchase order.',
    ],
    sections: [
      {
        heading: 'Put these questions on the agenda',
        paragraphs: [],
        bullets: [
          'Which business changes are not yet reflected in the policy?',
          'Where could one event exceed a location or section limit?',
          'Which exclusions or conditions deserve operational attention?',
          'What did recent claims teach us about documentation or response?',
          'Which deductibles would strain cash flow during a disruption?',
          'What assumptions drive the business interruption values?',
          'Who owns each action after the policy is issued?',
        ],
      },
      {
        heading: 'Record the answers and decisions',
        paragraphs: [
          'A useful renewal note explains why limits, deductibles and extensions were selected. It also captures information still outstanding and conditions that must reach operational teams.',
        ],
      },
    ],
    closing:
      'Price belongs in the meeting, but it should not occupy every minute. The real test is whether the renewed programme fits the business that will exist next year.',
  },
  {
    slug: 'travel-delay-baggage-claim-records',
    title: 'Flight Delayed and Bag Missing? Collect These Records Before Leaving',
    excerpt:
      'Airline acknowledgements, receipts and a simple timeline can make a travel claim much easier to submit.',
    date: '2026-05-17',
    category: 'Travel Insurance',
    topic: 'Group Travel Insurance',
    opening: [
      'After a long delay or a missing bag, most travellers want to reach the hotel and deal with paperwork later. Unfortunately, the easiest time to obtain an airline report is often while you are still at the airport.',
      'Take a few minutes to create the record, then focus on the rest of the trip.',
    ],
    sections: [
      {
        heading: 'Ask the carrier for written confirmation',
        paragraphs: [
          'For baggage, obtain the relevant irregularity or tracing reference and keep baggage tags. For delay or cancellation, save the airline message showing the reason and revised timing where available.',
        ],
        bullets: [
          'Boarding passes and original itinerary',
          'Carrier reports and reference numbers',
          'Photographs of damaged baggage',
          'Receipts for reasonable necessary purchases',
          'Bank details and policy information',
        ],
      },
      {
        heading: 'Check before spending heavily',
        paragraphs: [
          'Policies may define waiting periods, item limits and eligible emergency purchases. Contact the assistance line when practical and keep purchases proportionate to the immediate need.',
        ],
      },
    ],
    closing:
      'A travel claim is easier when the airline record, expense receipts and timeline agree. Collect them as the disruption happens instead of rebuilding the trip from memory later.',
  },
];

export const CURATED_BLOG_POSTS: GhostPost[] = posts.map(toGhostPost);
