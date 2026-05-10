import { geoPath, geoMercator } from 'd3-geo';
import * as topojson from 'topojson-client';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import type { Feature, FeatureCollection, Geometry } from 'geojson';

// process.cwd() is the project root during both `astro dev` and `astro build`
const atlas = JSON.parse(
  readFileSync(resolve(process.cwd(), 'node_modules/world-atlas/countries-110m.json'), 'utf-8'),
);

const W = 480;
const H = 460;
const PAD = 24;

// [west, south, east, north] in degrees
type BBox4 = [number, number, number, number];

interface RegionDef {
  key: string;
  label: string;
  bbox: BBox4;
}

interface CountryDef {
  key: string;
  name: string;
  flag: string;
  /** ISO 3166-1 numeric IDs as strings (matches world-atlas feature.id) */
  isoIds?: string[];
  /** Use instead of isoIds for non-standard territories */
  customCoords?: number[][];
  /** Constrain the map viewport to this bbox (degrees) instead of full country extent */
  viewBbox?: BBox4;
  regions: RegionDef[];
}

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

// ─── Helper: GeoJSON polygon from bbox ──────────────────────────────────────
function bboxFeature(bbox: BBox4): Feature<Geometry> {
  const [w, s, e, n] = bbox;
  return {
    type: 'Feature',
    properties: {},
    geometry: { type: 'Polygon', coordinates: [[[w,s],[e,s],[e,n],[w,n],[w,s]]] },
  };
}

// ─── Country definitions ─────────────────────────────────────────────────────
const COUNTRY_DEFS: CountryDef[] = [
  {
    key: 'france', name: 'France', flag: '🇫🇷',
    isoIds: ['250'],
    regions: [
      { key: 'champagne',  label: 'Champagne',  bbox: [ 3.2, 48.4,  5.2, 49.7] },
      { key: 'alsace',     label: 'Alsace',     bbox: [ 7.1, 47.4,  7.9, 49.1] },
      { key: 'burgundy',   label: 'Burgundy',   bbox: [ 3.8, 46.4,  5.6, 48.1] },
      { key: 'loire',      label: 'Loire',      bbox: [-2.8, 46.8,  3.2, 48.2] },
      { key: 'bordeaux',   label: 'Bordeaux',   bbox: [-1.8, 44.3,  0.3, 45.6] },
      { key: 'rhone',      label: 'Rhône',      bbox: [ 4.4, 43.4,  6.1, 46.2] },
      { key: 'languedoc',  label: 'Languedoc',  bbox: [ 2.2, 42.8,  5.6, 44.6] },
      { key: 'provence',   label: 'Provence',   bbox: [ 5.3, 43.0,  7.6, 44.6] },
    ],
  },
  {
    key: 'italy', name: 'Italy', flag: '🇮🇹',
    isoIds: ['380'],
    regions: [
      { key: 'piedmont', label: 'Piedmont', bbox: [ 6.9, 43.9,  9.4, 46.5] },
      { key: 'veneto',   label: 'Veneto',   bbox: [10.4, 44.9, 13.0, 46.8] },
      { key: 'tuscany',  label: 'Tuscany',  bbox: [ 9.6, 42.3, 12.4, 44.6] },
      { key: 'south',    label: 'South',    bbox: [14.0, 37.5, 18.6, 41.5] },
    ],
  },
  {
    key: 'spain', name: 'Spain', flag: '🇪🇸',
    isoIds: ['724'],
    regions: [
      { key: 'rioja',      label: 'Rioja',       bbox: [-3.6, 41.9, -1.4, 42.8] },
      { key: 'ribera',     label: 'Ribera',      bbox: [-4.6, 41.2, -2.6, 41.9] },
      { key: 'riasbaixes', label: 'Rías Baixas', bbox: [-9.0, 42.1, -8.1, 43.1] },
      { key: 'priorat',    label: 'Priorat',     bbox: [ 0.5, 40.9,  1.1, 41.5] },
      { key: 'jerez',      label: 'Jerez',       bbox: [-6.5, 36.4, -5.8, 37.2] },
    ],
  },
  {
    key: 'germany', name: 'Germany & Austria', flag: '🇩🇪',
    isoIds: ['276', '40'],
    regions: [
      { key: 'mosel',   label: 'Mosel',   bbox: [ 6.5, 49.5,  7.5, 51.0] },
      { key: 'rhine',   label: 'Rhine',   bbox: [ 7.6, 49.4,  8.6, 51.0] },
      { key: 'austria', label: 'Austria', bbox: [14.5, 47.7, 17.2, 48.8] },
    ],
  },
  {
    key: 'portugal', name: 'Portugal', flag: '🇵🇹',
    isoIds: ['620'],
    regions: [
      { key: 'vinhoverde', label: 'Vinho Verde', bbox: [-9.0, 41.0, -7.4, 42.2] },
      { key: 'douro',      label: 'Douro',       bbox: [-8.0, 40.8, -6.5, 41.7] },
      { key: 'alentejo',   label: 'Alentejo',    bbox: [-8.5, 37.5, -6.5, 39.5] },
    ],
  },
  {
    key: 'california', name: 'California', flag: '🇺🇸',
    // Simplified geographically-accurate California outline
    customCoords: [
      [-124.4, 42.0], [-120.0, 42.0], [-120.0, 39.0],
      [-114.6, 37.0], [-114.6, 32.5], [-117.1, 32.5],
      [-117.3, 33.1], [-118.5, 34.0], [-119.7, 34.4],
      [-120.7, 35.0], [-121.5, 36.3], [-122.4, 37.8],
      [-124.2, 40.4], [-124.4, 42.0],
    ],
    regions: [
      { key: 'napa',   label: 'Napa',   bbox: [-122.6, 38.1, -122.0, 38.9] },
      { key: 'sonoma', label: 'Sonoma', bbox: [-123.0, 38.2, -122.4, 38.9] },
      { key: 'oregon', label: 'Oregon', bbox: [-123.5, 44.8, -122.5, 46.0] },
    ],
  },
  {
    key: 'southamerica', name: 'South America', flag: '🌎',
    isoIds: ['32', '152'], // Argentina + Chile
    // Zoom into the wine-producing central/northern area
    viewBbox: [-74, -42, -62, -22],
    regions: [
      { key: 'mendoza', label: 'Mendoza', bbox: [-70.0, -35.5, -67.5, -32.5] },
      { key: 'chile',   label: 'Chile',   bbox: [-71.8, -38.0, -69.5, -30.0] },
    ],
  },
  {
    key: 'southafrica', name: 'South Africa', flag: '🇿🇦',
    isoIds: ['710'],
    regions: [
      { key: 'stellenbosch', label: 'Stellenbosch', bbox: [18.8, -34.2, 19.3, -33.7] },
      { key: 'swartland',    label: 'Swartland',    bbox: [18.4, -33.7, 19.4, -33.1] },
    ],
  },
  {
    key: 'australia', name: 'Australia', flag: '🇦🇺',
    isoIds: ['36'],
    regions: [
      { key: 'barossa',  label: 'Barossa',        bbox: [138.5, -35.0, 139.5, -34.0] },
      { key: 'margaret', label: 'Margaret River', bbox: [114.8, -34.4, 115.5, -33.6] },
      { key: 'victoria', label: 'Victoria',       bbox: [143.5, -37.8, 146.5, -36.5] },
    ],
  },
  {
    key: 'newzealand', name: 'New Zealand', flag: '🇳🇿',
    isoIds: ['554'],
    regions: [
      { key: 'marlborough',  label: 'Marlborough',   bbox: [173.0, -41.8, 174.5, -41.2] },
      { key: 'centralotago', label: 'Central Otago', bbox: [168.5, -45.8, 170.5, -44.8] },
    ],
  },
];

// ─── Main generator (runs at Astro build time in Node.js) ────────────────────
export function generateMaps(): CountryMap[] {
  const countries = topojson.feature(
    atlas as Parameters<typeof topojson.feature>[0],
    (atlas as any).objects.countries,
  ) as FeatureCollection;

  return COUNTRY_DEFS.map(def => {
    // Build the country outline feature
    let outlineFeature: Feature | FeatureCollection;

    if (def.customCoords) {
      outlineFeature = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [def.customCoords],
        },
      };
    } else {
      const feats = countries.features.filter(f =>
        def.isoIds!.includes(String(f.id)),
      );
      outlineFeature = feats.length === 1
        ? feats[0]
        : { type: 'FeatureCollection', features: feats };
    }

    // Create projection — zoom into viewBbox if specified, else fit country
    const projection = geoMercator();
    const fitTarget = def.viewBbox ? bboxFeature(def.viewBbox) : outlineFeature;
    projection.fitExtent([[PAD, PAD], [W - PAD, H - PAD]], fitTarget as any);

    const pathGen = geoPath(projection);

    // Country outline SVG path string
    const outlinePath =
      outlineFeature.type === 'FeatureCollection'
        ? (outlineFeature as FeatureCollection).features
            .map(f => pathGen(f) ?? '')
            .join(' ')
        : (pathGen(outlineFeature as Feature) ?? '');

    // Region paths + label positions
    const regionPaths: RegionPath[] = def.regions.map(r => {
      const rf = bboxFeature(r.bbox);
      const rPath = pathGen(rf) ?? '';
      const [cx, cy] = pathGen.centroid(rf);
      return {
        key:    r.key,
        label:  r.label,
        path:   rPath,
        labelX: Math.round(cx),
        labelY: Math.round(cy),
      };
    });

    return {
      key:     def.key,
      name:    def.name,
      flag:    def.flag,
      viewBox: `0 0 ${W} ${H}`,
      outline: outlinePath,
      regions: regionPaths,
    };
  });
}
