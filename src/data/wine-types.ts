export interface WineTypeEntry {
  slug: string;
  name: string;
  region: string;
  status: 'available' | 'coming-soon';
}

export interface WineTypeGroup {
  label: string;
  entries: WineTypeEntry[];
}

export const wineTypeGroups: WineTypeGroup[] = [
  {
    label: 'Sparkling',
    entries: [
      { slug: 'champagne', name: 'Champagne',  region: 'Champagne, France',    status: 'available' },
      { slug: 'prosecco',  name: 'Prosecco',   region: 'Veneto, Italy',         status: 'coming-soon' },
      { slug: 'cava',      name: 'Cava',        region: 'Catalonia, Spain',      status: 'coming-soon' },
      { slug: 'cremant',   name: 'Crémant',     region: 'Various, France',       status: 'coming-soon' },
    ],
  },
  {
    label: 'White',
    entries: [
      { slug: 'chablis',           name: 'Chablis',                    region: 'Burgundy, France',       status: 'coming-soon' },
      { slug: 'white-burgundy',    name: 'White Burgundy',             region: 'Burgundy, France',       status: 'coming-soon' },
      { slug: 'sancerre',          name: 'Sancerre',                   region: 'Loire Valley, France',   status: 'coming-soon' },
      { slug: 'pouilly-fume',      name: 'Pouilly-Fumé',               region: 'Loire Valley, France',   status: 'coming-soon' },
      { slug: 'alsace-riesling',   name: 'Alsace Riesling',            region: 'Alsace, France',         status: 'coming-soon' },
      { slug: 'mosel-riesling',    name: 'Mosel Riesling',             region: 'Mosel, Germany',         status: 'coming-soon' },
      { slug: 'soave',             name: 'Soave',                      region: 'Veneto, Italy',          status: 'coming-soon' },
      { slug: 'albarino-wine',     name: 'Albariño',                   region: 'Rías Baixas, Spain',     status: 'coming-soon' },
      { slug: 'white-bordeaux',    name: 'White Bordeaux',             region: 'Bordeaux, France',       status: 'coming-soon' },
    ],
  },
  {
    label: 'Red',
    entries: [
      { slug: 'barolo',                name: 'Barolo',                    region: 'Piedmont, Italy',          status: 'available' },
      { slug: 'barbaresco',            name: 'Barbaresco',                region: 'Piedmont, Italy',          status: 'coming-soon' },
      { slug: 'brunello-di-montalcino',name: 'Brunello di Montalcino',    region: 'Tuscany, Italy',           status: 'coming-soon' },
      { slug: 'chianti-classico',      name: 'Chianti Classico',          region: 'Tuscany, Italy',           status: 'coming-soon' },
      { slug: 'amarone',               name: 'Amarone',                   region: 'Veneto, Italy',            status: 'coming-soon' },
      { slug: 'red-burgundy',          name: 'Red Burgundy',              region: 'Burgundy, France',         status: 'coming-soon' },
      { slug: 'bordeaux-rouge',        name: 'Bordeaux Rouge',            region: 'Bordeaux, France',         status: 'coming-soon' },
      { slug: 'chateauneuf-du-pape',   name: 'Châteauneuf-du-Pape',       region: 'Rhône Valley, France',     status: 'coming-soon' },
      { slug: 'rioja-reserva',         name: 'Rioja Reserva',             region: 'Rioja, Spain',             status: 'coming-soon' },
      { slug: 'ribera-del-duero-wine', name: 'Ribera del Duero',          region: 'Castile, Spain',           status: 'coming-soon' },
    ],
  },
  {
    label: 'Fortified & Dessert',
    entries: [
      { slug: 'port',   name: 'Port',   region: 'Douro, Portugal',  status: 'coming-soon' },
      { slug: 'sherry', name: 'Sherry', region: 'Jerez, Spain',     status: 'coming-soon' },
      { slug: 'sauternes', name: 'Sauternes', region: 'Bordeaux, France', status: 'coming-soon' },
    ],
  },
];
