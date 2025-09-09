const types = ['news', 'blogs', 'claims_story'] as const;

export type AllTypes = (typeof types)[number];
