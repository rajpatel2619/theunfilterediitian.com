import contributorData from "../data/contributors.json";

type ContributorData = {
  name: string;
  email?: string;
  image?: string;
  bio: string;
  expertiseDescription: string;
  linkedinUrl?: string;
};

export type Contributor = {
  name: string;
  email?: string;
  image?: string;
  bio: string;
  expertiseDescription: string;
  linkedinUrl?: string;
};

function cleanOptionalValue(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

export function getContributors(): Contributor[] {
  return (contributorData as ContributorData[]).map((contributor) => ({
    name: contributor.name,
    email: cleanOptionalValue(contributor.email),
    image: cleanOptionalValue(contributor.image),
    bio: contributor.bio,
    expertiseDescription: contributor.expertiseDescription,
    linkedinUrl: cleanOptionalValue(contributor.linkedinUrl),
  }));
}
