export interface RegionEntry {
  slug: string;
  name: string;
  country: string;
  status: 'available' | 'coming-soon';
}

export interface RegionGroup {
  label: string;
  entries: RegionEntry[];
}

export const regionGroups: RegionGroup[] = [
  {
    label: 'France',
    entries: [
      { slug: 'champagne',             name: 'Champagne',              country: 'France',      status: 'available' },
      { slug: 'burgundy',              name: 'Burgundy',               country: 'France',      status: 'coming-soon' },
      { slug: 'bordeaux',              name: 'Bordeaux',               country: 'France',      status: 'coming-soon' },
      { slug: 'rhone-valley',          name: 'Rhône Valley',           country: 'France',      status: 'coming-soon' },
      { slug: 'loire-valley',          name: 'Loire Valley',           country: 'France',      status: 'coming-soon' },
      { slug: 'alsace',                name: 'Alsace',                 country: 'France',      status: 'coming-soon' },
      { slug: 'provence',              name: 'Provence',               country: 'France',      status: 'coming-soon' },
      { slug: 'languedoc-roussillon',  name: 'Languedoc-Roussillon',   country: 'France',      status: 'coming-soon' },
    ],
  },
  {
    label: 'Italy',
    entries: [
      { slug: 'piedmont',   name: 'Piedmont',   country: 'Italy', status: 'coming-soon' },
      { slug: 'tuscany',    name: 'Tuscany',    country: 'Italy', status: 'coming-soon' },
      { slug: 'veneto',     name: 'Veneto',     country: 'Italy', status: 'coming-soon' },
      { slug: 'campania',   name: 'Campania',   country: 'Italy', status: 'coming-soon' },
      { slug: 'sicily',     name: 'Sicily',     country: 'Italy', status: 'coming-soon' },
    ],
  },
  {
    label: 'Spain',
    entries: [
      { slug: 'rioja',            name: 'Rioja',              country: 'Spain',    status: 'coming-soon' },
      { slug: 'priorat',          name: 'Priorat',            country: 'Spain',    status: 'coming-soon' },
      { slug: 'ribera-del-duero', name: 'Ribera del Duero',   country: 'Spain',    status: 'coming-soon' },
      { slug: 'rias-baixas',      name: 'Rías Baixas',        country: 'Spain',    status: 'coming-soon' },
      { slug: 'jerez',            name: 'Jerez',              country: 'Spain',    status: 'coming-soon' },
    ],
  },
  {
    label: 'Germany & Austria',
    entries: [
      { slug: 'mosel',      name: 'Mosel',      country: 'Germany', status: 'coming-soon' },
      { slug: 'rheingau',   name: 'Rheingau',   country: 'Germany', status: 'coming-soon' },
      { slug: 'pfalz',      name: 'Pfalz',      country: 'Germany', status: 'coming-soon' },
      { slug: 'wachau',     name: 'Wachau',     country: 'Austria', status: 'coming-soon' },
    ],
  },
  {
    label: 'Portugal',
    entries: [
      { slug: 'douro',        name: 'Douro Valley',  country: 'Portugal', status: 'coming-soon' },
      { slug: 'vinho-verde',  name: 'Vinho Verde',   country: 'Portugal', status: 'coming-soon' },
    ],
  },
  {
    label: 'New World',
    entries: [
      { slug: 'napa-valley',      name: 'Napa Valley',      country: 'USA',         status: 'coming-soon' },
      { slug: 'sonoma',           name: 'Sonoma County',    country: 'USA',         status: 'coming-soon' },
      { slug: 'willamette-valley',name: 'Willamette Valley',country: 'USA',         status: 'coming-soon' },
      { slug: 'marlborough',      name: 'Marlborough',      country: 'New Zealand', status: 'coming-soon' },
      { slug: 'barossa-valley',   name: 'Barossa Valley',   country: 'Australia',   status: 'coming-soon' },
      { slug: 'mendoza',          name: 'Mendoza',          country: 'Argentina',   status: 'coming-soon' },
    ],
  },
];
