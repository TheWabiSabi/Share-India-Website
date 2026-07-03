/**
 * Canonical tag taxonomy + validation for the primary/secondary tagging model.
 *
 * - PRIMARY tag  = which website page a post belongs to (e.g. infrastructure-industry).
 * - SECONDARY tag = which in-page section it loads into (e.g. claims-story / blog / news).
 *
 * In Ghost the tags are named "Primary: …" / "Secondary: …" for authoring clarity;
 * the SLUGS below are the stable identifiers used for filtering (never renamed).
 */

/**
 * Website (primary) tag slugs — one per real website page. 26 total:
 * 9 industries + 10 corporate-insurance + 7 retail. Kept in exact sync with the
 * live nav (see list.md); adding a page ⇒ add its slug here and a Ghost tag.
 */
export const PRIMARY_TAGS = [
  // Industries (9)
  'chemical-industry',
  'infrastructure-industry',
  'life-sciences-pharma-industry',
  'logistics-industry',
  'plastic-industry',
  'real-estate-industry',
  'solar-industry',
  'startup-industry',
  'textile-industry',
  // Corporate insurance (10)
  'employee-benefits-insurance',
  'group-travel-insurance',
  'liability-insurance',
  'marine-transit-insurance',
  'media-entertainment-insurance',
  'motor-fleet-insurance',
  'office-package-insurance',
  'property-engineering-insurance',
  'shopkeepers-package-jewellers-block',
  'trade-credit-insurance',
  // Retail (7)
  'retail-cyber',
  'retail-health',
  'home-insurance',
  'retail-life',
  'motor-insurance',
  'term-insurance',
  'retail-travel',
] as const;

/** Section (secondary) tag slugs. Exactly three. */
export const SECONDARY_TAGS = ['news', 'blog', 'claims-story'] as const;

export type PrimaryTag = (typeof PRIMARY_TAGS)[number];
export type SecondaryTag = (typeof SECONDARY_TAGS)[number];

const PRIMARY_SET: Set<string> = new Set(PRIMARY_TAGS);
const SECONDARY_SET: Set<string> = new Set(SECONDARY_TAGS);

/**
 * Which secondary tags a given primary may load. Currently uniform — every page
 * surfaces Claim Stories + Insights (Blog/News). To diverge a single page
 * (e.g. a page without claim stories), override its entry here.
 */
const DEFAULT_SECTIONS: string[] = ['claims-story', 'blog', 'news'];
export const ALLOWED_SECTIONS: Record<string, string[]> = Object.fromEntries(
  PRIMARY_TAGS.map((p) => [p, DEFAULT_SECTIONS]),
);

export function isPrimaryTag(slug: string): boolean {
  return PRIMARY_SET.has(slug);
}

export function isSecondaryTag(slug: string): boolean {
  return SECONDARY_SET.has(slug);
}

/** Thrown when a primary/secondary tag combination violates the plan. */
export class TagValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TagValidationError';
  }
}

/**
 * Enforce that `section` is a known secondary tag allowed under `primary` — i.e.
 * the secondary "fits" the primary it loads after. Throws {@link TagValidationError}
 * otherwise. Callers (API routes) translate this into an HTTP 400.
 */
export function assertValidSection(primary: string, section: string): void {
  if (!PRIMARY_SET.has(primary)) {
    throw new TagValidationError(
      `Unknown primary tag "${primary}". Expected one of the website tags.`,
    );
  }
  if (!SECONDARY_SET.has(section)) {
    throw new TagValidationError(`Unknown secondary tag "${section}".`);
  }
  const allowed = ALLOWED_SECTIONS[primary] ?? [];
  if (!allowed.includes(section)) {
    throw new TagValidationError(
      `Secondary tag "${section}" does not fit primary "${primary}". ` +
        `Allowed sections for this page: ${allowed.join(', ')}.`,
    );
  }
}

/** Strip the "Primary:" / "Secondary:" (or legacy "Section:") prefix for public display. */
export function cleanTagName(name: string): string {
  return name.replace(/^\s*(primary|secondary|section)\s*:\s*/i, '');
}
