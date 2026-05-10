export interface RegionPath {
  key: string;
  label: string;
  path: string;
  labelX: number;
  labelY: number;
}

export interface CountryMap {
  key: string;
  name: string;
  flag: string;
  viewBox: string;
  outline: string;
  regions: RegionPath[];
}

export const countryMaps: CountryMap[] = [
  {
    key: "france",
    name: "France",
    flag: "🇫🇷",
    viewBox: "0 0 360 410",
    outline: "M 207,5 L 355,113 L 346,165 L 302,226 L 346,341 L 285,364 L 222,403 L 89,356 L 111,212 L 74,175 L 14,123 L 83,109 L 97,62 L 152,52 Z",
    regions: [
      { key: "champagne",  label: "Champagne",  path: "M 221,71 L 277,71 L 277,118 L 221,118 Z",   labelX: 249, labelY: 95  },
      { key: "alsace",     label: "Alsace",     path: "M 322,94 L 355,94 L 355,165 L 322,165 Z",   labelX: 290, labelY: 130 },
      { key: "burgundy",   label: "Burgundy",   path: "M 263,160 L 291,160 L 291,236 L 263,236 Z", labelX: 277, labelY: 198 },
      { key: "loire",      label: "Loire",      path: "M 83,141 L 221,141 L 221,189 L 83,189 Z",   labelX: 152, labelY: 165 },
      { key: "bordeaux",   label: "Bordeaux",   path: "M 111,255 L 152,255 L 152,306 L 111,306 Z", labelX: 131, labelY: 280 },
      { key: "rhone",      label: "Rhône",      path: "M 263,236 L 291,236 L 291,344 L 263,344 Z", labelX: 307, labelY: 290 },
      { key: "languedoc",  label: "Languedoc",  path: "M 194,339 L 263,339 L 263,377 L 194,377 Z", labelX: 228, labelY: 358 },
      { key: "provence",   label: "Provence",   path: "M 277,330 L 346,330 L 346,377 L 277,377 Z", labelX: 311, labelY: 353 },
    ],
  },
  {
    key: "italy",
    name: "Italy",
    flag: "🇮🇹",
    viewBox: "0 0 285 520",
    outline: "M 9,69 L 141,32 L 177,80 L 169,186 L 212,296 L 245,323 L 283,371 L 280,387 L 220,482 L 215,482 L 220,456 L 185,335 L 143,282 L 95,229 L 57,166 Z",
    regions: [
      { key: "piedmont", label: "Piedmont", path: "M 12,72 L 88,75 L 88,148 L 12,145 Z",  labelX: 50,  labelY: 110 },
      { key: "veneto",   label: "Veneto",   path: "M 95,55 L 178,80 L 174,118 L 92,112 Z", labelX: 133, labelY: 87  },
      { key: "tuscany",  label: "Tuscany",  path: "M 65,160 L 150,160 L 152,248 L 60,248 Z", labelX: 105, labelY: 204 },
      { key: "south",    label: "South",    path: "M 145,290 L 220,290 L 218,355 L 143,350 Z", labelX: 182, labelY: 322 },
    ],
  },
  {
    key: "spain",
    name: "Spain",
    flag: "🇪🇸",
    viewBox: "0 0 380 330",
    outline: "M 0,0 L 165,12 L 378,12 L 324,136 L 248,255 L 117,317 L 12,280 L 0,178 Z",
    regions: [
      { key: "rioja",     label: "Rioja",      path: "M 174,38 L 234,38 L 234,78 L 174,78 Z", labelX: 204, labelY: 58  },
      { key: "ribera",    label: "Ribera",     path: "M 144,80 L 204,80 L 204,106 L 144,106 Z", labelX: 174, labelY: 93  },
      { key: "riasbaixes",label: "Rías Baixas",path: "M 5,38 L 55,38 L 55,90 L 5,90 Z",  labelX: 30,  labelY: 64  },
      { key: "priorat",   label: "Priorat",    path: "M 285,90 L 325,90 L 325,118 L 285,118 Z", labelX: 305, labelY: 104 },
      { key: "jerez",     label: "Jerez",      path: "M 80,272 L 118,272 L 118,304 L 80,304 Z", labelX: 99,  labelY: 288 },
    ],
  },
  {
    key: "germany",
    name: "Germany & Austria",
    flag: "🇩🇪",
    viewBox: "0 0 440 430",
    outline: "M 2,155 L 26,75 L 74,9 L 197,51 L 211,192 L 175,353 L 158,358 L 50,358 L 2,344 Z M 104,344 L 158,306 L 254,310 L 271,348 L 254,395 L 170,400 Z",
    regions: [
      { key: "mosel",   label: "Mosel",   path: "M 15,215 L 55,215 L 55,270 L 15,270 Z",   labelX: 35,  labelY: 243 },
      { key: "rhine",   label: "Rhine",   path: "M 48,200 L 92,200 L 92,270 L 48,270 Z",   labelX: 110, labelY: 235 },
      { key: "austria", label: "Austria", path: "M 215,305 L 265,305 L 265,360 L 215,360 Z", labelX: 240, labelY: 332 },
    ],
  },
  {
    key: "portugal",
    name: "Portugal",
    flag: "🇵🇹",
    viewBox: "0 0 200 350",
    outline: "M 0,0 L 192,0 L 192,350 L 29,350 L 8,288 L 0,225 L 10,168 L 0,100 Z",
    regions: [
      { key: "vinhoverde", label: "Vinho Verde", path: "M 0,0 L 192,0 L 192,55 L 0,55 Z",    labelX: 96, labelY: 28  },
      { key: "douro",      label: "Douro",       path: "M 0,55 L 192,55 L 192,120 L 0,120 Z", labelX: 96, labelY: 88  },
      { key: "alentejo",   label: "Alentejo",    path: "M 0,185 L 192,185 L 192,320 L 0,320 Z", labelX: 96, labelY: 252 },
    ],
  },
  {
    key: "california",
    name: "California",
    flag: "🇺🇸",
    viewBox: "0 0 240 520",
    outline: "M 30,0 L 235,80 L 230,240 L 215,380 L 180,480 L 90,510 L 5,440 L 0,300 L 15,120 Z",
    regions: [
      { key: "napa",    label: "Napa",    path: "M 40,100 L 110,100 L 110,175 L 40,175 Z",  labelX: 75,  labelY: 138 },
      { key: "sonoma",  label: "Sonoma",  path: "M 10,90 L 55,90 L 55,160 L 10,160 Z",      labelX: 33,  labelY: 125 },
      { key: "oregon",  label: "Oregon",  path: "M 15,0 L 230,0 L 225,80 L 15,60 Z",        labelX: 120, labelY: 35  },
    ],
  },
  {
    key: "southamerica",
    name: "South America",
    flag: "🌎",
    viewBox: "0 0 320 480",
    outline: "M 0,0 L 185,0 L 220,80 L 310,160 L 300,280 L 250,400 L 160,475 L 80,460 L 10,380 L 0,240 Z",
    regions: [
      { key: "mendoza", label: "Mendoza (AR)", path: "M 20,200 L 120,200 L 120,300 L 20,300 Z", labelX: 70,  labelY: 250 },
      { key: "chile",   label: "Chile",        path: "M 130,100 L 200,100 L 200,380 L 130,380 Z", labelX: 165, labelY: 240 },
    ],
  },
  {
    key: "southafrica",
    name: "South Africa",
    flag: "🇿🇦",
    viewBox: "0 0 400 340",
    outline: "M 0,80 L 80,0 L 290,0 L 395,100 L 395,220 L 330,330 L 200,335 L 80,310 L 0,210 Z",
    regions: [
      { key: "stellenbosch", label: "Stellenbosch", path: "M 60,220 L 140,220 L 140,290 L 60,290 Z", labelX: 100, labelY: 255 },
      { key: "swartland",    label: "Swartland",    path: "M 30,140 L 110,140 L 110,210 L 30,210 Z", labelX: 70,  labelY: 175 },
    ],
  },
  {
    key: "australia",
    name: "Australia",
    flag: "🇦🇺",
    viewBox: "0 0 480 420",
    outline: "M 60,0 L 350,0 L 475,120 L 470,300 L 380,415 L 230,415 L 80,380 L 0,250 L 10,100 Z",
    regions: [
      { key: "barossa",  label: "Barossa",        path: "M 270,270 L 340,270 L 340,330 L 270,330 Z", labelX: 305, labelY: 300 },
      { key: "margaret", label: "Margaret River", path: "M 30,280 L 100,280 L 100,360 L 30,360 Z",  labelX: 65,  labelY: 320 },
      { key: "victoria", label: "Victoria",       path: "M 310,310 L 420,310 L 420,390 L 310,390 Z", labelX: 365, labelY: 350 },
    ],
  },
  {
    key: "newzealand",
    name: "New Zealand",
    flag: "🇳🇿",
    viewBox: "0 0 160 480",
    outline: "M 70,0 L 155,60 L 150,180 L 80,260 L 60,260 L 0,180 L 10,60 Z M 80,280 L 155,310 L 150,430 L 90,475 L 30,450 L 5,370 L 40,290 Z",
    regions: [
      { key: "marlborough",  label: "Marlborough",   path: "M 60,190 L 148,190 L 148,255 L 60,255 Z", labelX: 104, labelY: 222 },
      { key: "centralotago", label: "Central Otago", path: "M 60,370 L 148,370 L 148,430 L 60,430 Z", labelX: 104, labelY: 400 },
    ],
  },
];
