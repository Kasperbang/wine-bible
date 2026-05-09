export interface GrapeEntry {
  slug: string;
  name: string;
  origin: string;
  status: 'available' | 'coming-soon';
}

export interface GrapeGroup {
  label: string;
  entries: GrapeEntry[];
}

export const grapeGroups: GrapeGroup[] = [
  {
    label: 'Red Grapes',
    entries: [
      { slug: 'pinot-noir',         name: 'Pinot Noir',          origin: 'Burgundy, France',       status: 'available' },
      { slug: 'cabernet-sauvignon', name: 'Cabernet Sauvignon',  origin: 'Bordeaux, France',       status: 'coming-soon' },
      { slug: 'merlot',             name: 'Merlot',              origin: 'Bordeaux, France',       status: 'coming-soon' },
      { slug: 'syrah',              name: 'Syrah / Shiraz',      origin: 'Rhône Valley, France',   status: 'coming-soon' },
      { slug: 'grenache',           name: 'Grenache / Garnacha', origin: 'Spain / Southern France',status: 'coming-soon' },
      { slug: 'nebbiolo',           name: 'Nebbiolo',            origin: 'Piedmont, Italy',        status: 'coming-soon' },
      { slug: 'sangiovese',         name: 'Sangiovese',          origin: 'Tuscany, Italy',         status: 'coming-soon' },
      { slug: 'tempranillo',        name: 'Tempranillo',         origin: 'Rioja, Spain',           status: 'coming-soon' },
      { slug: 'malbec',             name: 'Malbec',              origin: 'Cahors / Mendoza',       status: 'coming-soon' },
      { slug: 'cabernet-franc',     name: 'Cabernet Franc',      origin: 'Loire Valley, France',   status: 'coming-soon' },
      { slug: 'mourvedre',          name: 'Mourvèdre',           origin: 'Southern France / Spain',status: 'coming-soon' },
      { slug: 'barbera',            name: 'Barbera',             origin: 'Piedmont, Italy',        status: 'coming-soon' },
      { slug: 'gamay',              name: 'Gamay',               origin: 'Beaujolais, France',     status: 'coming-soon' },
      { slug: 'zinfandel',          name: 'Zinfandel / Primitivo',origin: 'California / Puglia',   status: 'coming-soon' },
      { slug: 'corvina',            name: 'Corvina',             origin: 'Veneto, Italy',          status: 'coming-soon' },
      { slug: 'montepulciano',      name: 'Montepulciano',       origin: 'Abruzzo, Italy',         status: 'coming-soon' },
      { slug: 'nero-davola',        name: "Nero d'Avola",        origin: 'Sicily, Italy',          status: 'coming-soon' },
      { slug: 'aglianico',          name: 'Aglianico',           origin: 'Southern Italy',         status: 'coming-soon' },
      { slug: 'touriga-nacional',   name: 'Touriga Nacional',    origin: 'Douro, Portugal',        status: 'coming-soon' },
      { slug: 'carmenere',          name: 'Carménère',           origin: 'Chile / Bordeaux',       status: 'coming-soon' },
    ],
  },
  {
    label: 'White Grapes',
    entries: [
      { slug: 'chardonnay',         name: 'Chardonnay',          origin: 'Burgundy, France',       status: 'coming-soon' },
      { slug: 'sauvignon-blanc',    name: 'Sauvignon Blanc',     origin: 'Loire Valley, France',   status: 'coming-soon' },
      { slug: 'riesling',           name: 'Riesling',            origin: 'Germany / Alsace',       status: 'coming-soon' },
      { slug: 'pinot-gris',         name: 'Pinot Gris / Grigio', origin: 'Alsace / Northern Italy',status: 'coming-soon' },
      { slug: 'gewurztraminer',     name: 'Gewürztraminer',      origin: 'Alsace, France',         status: 'coming-soon' },
      { slug: 'viognier',           name: 'Viognier',            origin: 'Rhône Valley, France',   status: 'coming-soon' },
      { slug: 'chenin-blanc',       name: 'Chenin Blanc',        origin: 'Loire Valley, France',   status: 'coming-soon' },
      { slug: 'albarino',           name: 'Albariño',            origin: 'Rías Baixas, Spain',     status: 'coming-soon' },
      { slug: 'gruner-veltliner',   name: 'Grüner Veltliner',    origin: 'Austria',                status: 'coming-soon' },
      { slug: 'muscat',             name: 'Muscat / Moscato',    origin: 'Mediterranean',          status: 'coming-soon' },
      { slug: 'roussanne',          name: 'Roussanne',           origin: 'Rhône Valley, France',   status: 'coming-soon' },
      { slug: 'vermentino',         name: 'Vermentino',          origin: 'Sardinia / Provence',    status: 'coming-soon' },
      { slug: 'fiano',              name: 'Fiano',               origin: 'Campania, Italy',        status: 'coming-soon' },
      { slug: 'assyrtiko',          name: 'Assyrtiko',           origin: 'Santorini, Greece',      status: 'coming-soon' },
      { slug: 'garganega',          name: 'Garganega',           origin: 'Veneto, Italy',          status: 'coming-soon' },
    ],
  },
];
