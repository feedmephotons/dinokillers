export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  location: string;
  bio: string;
  background: string[];
}

export const team: TeamMember[] = [
  {
    id: 'winston',
    name: 'Winston Fowlkes',
    role: 'Co-Founder',
    image: '/images/winston-headshot.png',
    location: 'Southwest Florida',
    bio: "Originally from Danville, Virginia, Winston moved to Florida in 2011 and built a career spanning marketing, software development, and professional photography and videography. When AI changed the game, he didn't just adopt it — he went all in, multiplying his output across every discipline. His broad skill set found a natural home in construction and roofing, where he's worked with major companies across the state. That cross-industry experience is what makes Dino Killers different — Winston sees problems that specialists miss.",
    background: [
      'Marketing Contractor & Consultant',
      'Software Developer',
      'Professional Photographer & Videographer',
      'AI-Augmented Workflow Pioneer',
      'Construction & Roofing Industry Specialist'
    ]
  },
  {
    id: 'brance',
    name: 'Brance Wages',
    role: 'Co-Founder',
    image: '/images/brance-headshot.png',
    location: 'Naples, FL & Dallas, TX',
    bio: "Brance comes from the real estate world but never stayed in one lane. He founded GeoAI, a geofencing startup that was gaining traction before Covid shut it down — proof he's been at the intersection of tech and business long before it was trendy. Today he runs Roof Wars, a commercial roofing operation spanning Naples and Dallas, and works directly with condo associations across Southwest Florida. That hands-on experience led him to co-found HOA Hunter and HOA Cloud, two platforms that are reshaping how the HOA industry operates.",
    background: [
      'Real Estate Background',
      'Founded GeoAI (Geofencing Startup)',
      'Owner, Roof Wars — Commercial Roofing',
      'Co-Founder, HOA Hunter & HOA Cloud',
      'Direct Condo Association Relationships'
    ]
  }
];
