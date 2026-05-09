export interface SubZone {
  name: string;
  grapes: string[];
  character: string;
  wines: string[];
}

export interface Region {
  label: string;
  grapes: string[];
  character: string;
  wines: string[];
  link?: string;
  subzones: SubZone[];
}

export interface Country {
  label: string;
  grapes: string[];
  character: string;
  regions: Record<string, Region>;
}

export const wineWorldData: Record<string, Country> = {
  france: {
    label: "France",
    grapes: ["Pinot Noir","Chardonnay","Cabernet Sauvignon","Merlot","Syrah","Grenache","Sauvignon Blanc","Riesling"],
    character: "The reference point for the world's classic grape varieties and wine styles. Terroir expression above all else. From cool northern sparklings to powerful southern reds.",
    regions: {
      champagne: {
        label: "Champagne", grapes: ["Pinot Noir","Chardonnay","Pinot Meunier"],
        character: "Cool chalk subsoil, marginal climate, non-vintage blending. Autolytic complexity from extended lees aging.",
        wines: ["NV Brut","Blanc de Blancs","Blanc de Noirs","Rosé","Vintage","Prestige Cuvée"],
        link: "regions/champagne/",
        subzones: [
          { name: "Montagne de Reims", grapes: ["Pinot Noir"], character: "South/east-facing plateau south of Reims. Structured, red-fruit backbone. Grand Cru villages: Ambonnay, Bouzy, Verzenay.", wines: ["NV Brut","Blanc de Noirs","Vintage"] },
          { name: "Vallée de la Marne", grapes: ["Pinot Meunier"], character: "River valley through Épernay. Frost-resistant Meunier dominates. Fruit-forward, round, accessible style.", wines: ["NV Brut"] },
          { name: "Côte des Blancs", grapes: ["Chardonnay"], character: "Chalk escarpment south of Épernay. Mineral, citrus, white flower. Source of finest Blanc de Blancs. Grand Cru: Avize, Cramant, Le Mesnil-sur-Oger.", wines: ["Blanc de Blancs","Vintage","Prestige Cuvée"] },
          { name: "Côte de Sézanne", grapes: ["Chardonnay"], character: "Continuation of Côte des Blancs with softer, less mineral style. Predominantly grower Champagnes.", wines: ["Blanc de Blancs","NV Brut"] },
          { name: "Aube (Côte des Bar)", grapes: ["Pinot Noir"], character: "100 km south of Épernay. Kimmeridgian limestone — same soil as Chablis. Powerful, expressive. Heartland of grower Champagne.", wines: ["NV Brut","Blanc de Noirs","Vintage"] },
        ]
      },
      burgundy: {
        label: "Burgundy", grapes: ["Pinot Noir","Chardonnay","Gamay","Aligoté"],
        character: "The most terroir-driven wines in the world. Four-tier land classification. Fragrant Pinot Noir and mineral Chardonnay. Producer identity as important as vineyard.",
        wines: ["Bourgogne Rouge","Village Burgundy","Premier Cru","Grand Cru","Chablis","Beaujolais Crus"],
        link: "grapes/pinot-noir/",
        subzones: [
          { name: "Chablis", grapes: ["Chardonnay"], character: "Northernmost Burgundy. Kimmeridgian limestone. Steely, austere, mineral Chardonnay. Grand Cru sites: Les Clos, Vaudésir, Grenouilles, Blanchot.", wines: ["Chablis","Chablis Premier Cru","Chablis Grand Cru"] },
          { name: "Côte de Nuits", grapes: ["Pinot Noir"], character: "Northern Côte d'Or. Almost all red Grand Crus. Key communes: Gevrey-Chambertin, Morey-Saint-Denis, Chambolle-Musigny, Vougeot, Vosne-Romanée. Romanée-Conti (DRC) is here.", wines: ["Village Burgundy","Premier Cru","Grand Cru"] },
          { name: "Côte de Beaune", grapes: ["Pinot Noir","Chardonnay"], character: "Southern Côte d'Or. Finest reds: Pommard, Volnay. Finest whites: Meursault, Puligny-Montrachet, Chassagne-Montrachet. Only red Grand Cru: Corton.", wines: ["Village Burgundy","Premier Cru","Grand Cru","White Burgundy"] },
          { name: "Côte Chalonnaise", grapes: ["Pinot Noir","Chardonnay"], character: "South of Beaune. More affordable. Appellations: Mercurey, Rully, Givry (reds), Montagny (white). Good quality-to-value ratio.", wines: ["Mercurey","Rully","Givry","Montagny"] },
          { name: "Mâconnais", grapes: ["Chardonnay"], character: "Predominantly white. Pouilly-Fuissé is the flagship: rich, mineral Chardonnay from limestone. More southerly and riper than Côte de Beaune.", wines: ["Mâcon-Villages","Pouilly-Fuissé","Saint-Véran"] },
          { name: "Beaujolais", grapes: ["Gamay"], character: "Southernmost Burgundy. Gamay on granite. Light, fresh, low tannin. Ten Crus (Moulin-à-Vent, Fleurie, Morgon, Moulin-à-Vent) are capable of real complexity and aging.", wines: ["Beaujolais Nouveau","Beaujolais-Villages","Fleurie","Morgon","Moulin-à-Vent","Brouilly"] },
        ]
      },
      bordeaux: {
        label: "Bordeaux", grapes: ["Cabernet Sauvignon","Merlot","Cabernet Franc","Petit Verdot","Sémillon","Sauvignon Blanc"],
        character: "Blended reds of power and structure. Left Bank: Cabernet-dominant, tannic, age-worthy. Right Bank: Merlot-dominant, rounder, earlier-maturing. The classified château system defines global wine value.",
        wines: ["Médoc Cru Classé","Saint-Émilion Grand Cru","Pomerol","White Bordeaux","Sauternes"],
        subzones: [
          { name: "Médoc / Haut-Médoc", grapes: ["Cabernet Sauvignon","Merlot","Cabernet Franc"], character: "Left Bank. Gravel over clay. Cabernet-dominant blends. Commune AOCs: Pauillac (Lafite, Mouton, Latour), Saint-Julien, Margaux, Saint-Estèphe. 1855 Classification governs.", wines: ["Pauillac","Saint-Julien","Margaux","Saint-Estèphe","Cru Bourgeois"] },
          { name: "Saint-Émilion", grapes: ["Merlot","Cabernet Franc"], character: "Right Bank plateau. Clay and limestone. Merlot-dominant, rich, plush. Premiers Grands Crus Classés A: Cheval Blanc, Ausone, Angélus, Pavie.", wines: ["Saint-Émilion Grand Cru","Saint-Émilion Premier Grand Cru Classé"] },
          { name: "Pomerol", grapes: ["Merlot","Cabernet Franc"], character: "Right Bank. Smallest top appellation; no official classification. Iron-rich clay (crasse de fer). Dense, velvety Merlot. Pétrus is the iconic reference.", wines: ["Pomerol"] },
          { name: "Graves / Pessac-Léognan", grapes: ["Cabernet Sauvignon","Sémillon","Sauvignon Blanc"], character: "South of the city. Serious reds and whites. Pessac-Léognan has its own classification. Haut-Brion is the only 1855 wine outside the Médoc.", wines: ["Pessac-Léognan Rouge","Pessac-Léognan Blanc","Graves Blanc"] },
          { name: "Sauternes & Barsac", grapes: ["Sémillon","Sauvignon Blanc","Muscadelle"], character: "Botrytis-affected sweet whites. Morning fog from the Ciron river creates noble rot conditions. Château d'Yquem is Premier Cru Supérieur. Rich, unctuous, decade-scale aging.", wines: ["Sauternes","Barsac"] },
        ]
      },
      rhone: {
        label: "Rhône Valley", grapes: ["Syrah","Grenache","Mourvèdre","Viognier","Marsanne","Roussanne"],
        character: "Two contrasting zones divided by 50 km of non-vineyard land. North: granite-soiled, single-variety Syrah of power and elegance. South: warm, Mediterranean, blended Grenache-based wines.",
        wines: ["Côte-Rôtie","Hermitage","Crozes-Hermitage","Châteauneuf-du-Pape","Condrieu","Gigondas"],
        subzones: [
          { name: "Northern Rhône", grapes: ["Syrah","Viognier","Marsanne","Roussanne"], character: "Steep granite hillsides along the river. 100% Syrah reds: Côte-Rôtie, Hermitage, Crozes-Hermitage, Cornas, Saint-Joseph. Viognier co-fermented in Côte-Rôtie. Great white Hermitage from Marsanne/Roussanne.", wines: ["Côte-Rôtie","Hermitage","Crozes-Hermitage","Cornas","Condrieu","Saint-Joseph"] },
          { name: "Southern Rhône", grapes: ["Grenache","Syrah","Mourvèdre","Cinsault"], character: "Mediterranean climate. Warm, spicy, generous. Châteauneuf-du-Pape allows 13+ varieties. Gigondas, Vacqueyras, Rasteau offer similar style at lower cost. Also powerful Grenache-based whites.", wines: ["Châteauneuf-du-Pape","Gigondas","Vacqueyras","Côtes du Rhône","Lirac","Rasteau"] },
        ]
      },
      loire: {
        label: "Loire Valley", grapes: ["Sauvignon Blanc","Chenin Blanc","Cabernet Franc","Melon de Bourgogne","Gamay"],
        character: "France's longest river produces remarkable diversity. Dry Sauvignon Blanc in the east (Sancerre), complex Chenin Blanc across Anjou and Touraine, light Cabernet Franc reds, Muscadet at the Atlantic mouth.",
        wines: ["Sancerre","Pouilly-Fumé","Vouvray","Chinon","Muscadet","Anjou Blanc","Crémant de Loire"],
        subzones: [
          { name: "Pays Nantais (Muscadet)", grapes: ["Melon de Bourgogne"], character: "Atlantic mouth of the Loire. Light, dry, high-acid Muscadet. Muscadet Sèvre-et-Maine sur Lie (aged on lees) adds complexity. Classic oyster wine.", wines: ["Muscadet","Muscadet Sèvre-et-Maine sur Lie"] },
          { name: "Anjou-Saumur", grapes: ["Chenin Blanc","Cabernet Franc"], character: "Heart of Chenin Blanc diversity: Savennières (dry, austere), Demi-Sec, and botrytis-sweet Coteaux du Layon. Reds: Saumur-Champigny, elegant Cabernet Franc.", wines: ["Savennières","Coteaux du Layon","Saumur-Champigny","Crémant de Loire"] },
          { name: "Touraine", grapes: ["Cabernet Franc","Chenin Blanc","Gamay"], character: "Chinon, Bourgueil, Saint-Nicolas-de-Bourgueil: classic light Cabernet Franc, earthy with pencil-shaving and red fruit. Vouvray: all styles of Chenin from bone dry to moelleux.", wines: ["Chinon","Bourgueil","Vouvray","Montlouis-sur-Loire"] },
          { name: "Upper Loire (Sancerre / Pouilly)", grapes: ["Sauvignon Blanc","Pinot Noir"], character: "Flint (silex) and chalk soils. Sancerre and Pouilly-Fumé: benchmark dry Sauvignon Blanc with mineral tension. Sancerre also makes light, elegant Pinot Noir.", wines: ["Sancerre Blanc","Sancerre Rouge","Pouilly-Fumé","Menetou-Salon"] },
        ]
      },
      alsace: {
        label: "Alsace", grapes: ["Riesling","Gewurztraminer","Pinot Gris","Pinot Blanc","Pinot Noir","Muscat"],
        character: "Narrow strip along the Vosges mountain foothills. Sheltered, warm, dry microclimate despite northern latitude. Germanic varieties at their most aromatic and full-bodied. Wines labelled by variety, not village.",
        wines: ["Alsace Riesling","Gewurztraminer","Pinot Gris","Crémant d'Alsace","Vendanges Tardives","Sélection de Grains Nobles"],
        subzones: [
          { name: "Grand Cru Vineyards (51 sites)", grapes: ["Riesling","Gewurztraminer","Pinot Gris","Muscat"], character: "51 officially classified Grand Cru sites, each with distinct soils and only specific permitted varieties. Finest: Schlossberg (granite), Rangen (volcanic), Hengst (calcareous marl), Rosacker (limestone).", wines: ["Alsace Grand Cru Riesling","Alsace Grand Cru Gewurztraminer"] },
          { name: "Route des Vins", grapes: ["All Alsace varieties"], character: "The main body of Alsace production. Bone-dry to off-dry styles. Gewurztraminer: rose petal, lychee, spice — the most immediately expressive variety in Alsace.", wines: ["Alsace Riesling","Alsace Gewurztraminer","Alsace Pinot Gris","Crémant d'Alsace"] },
        ]
      },
      provence: {
        label: "Provence", grapes: ["Grenache","Cinsault","Mourvèdre","Syrah","Rolle/Vermentino"],
        character: "World's largest rosé-producing region. Pale, dry, savoury rosé from blends of Grenache, Cinsault, Mourvèdre. Bandol is the serious appellation for age-worthy Mourvèdre-based reds and rosés.",
        wines: ["Côtes de Provence Rosé","Bandol Rouge","Bandol Rosé","Les Baux-de-Provence"],
        subzones: [
          { name: "Bandol", grapes: ["Mourvèdre","Grenache","Cinsault"], character: "Finest appellation of Provence. Minimum 50% Mourvèdre in reds. Dark, dense, earthy — needs 5–10 years. Also distinctive rosé. Domaine Tempier is the benchmark.", wines: ["Bandol Rouge","Bandol Rosé"] },
          { name: "Côtes de Provence", grapes: ["Grenache","Cinsault","Syrah","Rolle"], character: "The main appellation: ~90% rosé. Sub-zones: Sainte-Victoire, Fréjus, La Londe, Pierrefeu. The pale, dry 'Provence rosé' style that defines the category globally.", wines: ["Côtes de Provence Rosé","Côtes de Provence Rouge"] },
          { name: "Les Baux-de-Provence", grapes: ["Grenache","Syrah","Mourvèdre"], character: "Rocky, wind-swept foothills of the Alpilles. Strong organic/biodynamic focus. Powerful, structured reds. Mas de la Dame, Domaine de Trévallon (sold as IGT due to Cabernet content).", wines: ["Les Baux-de-Provence Rouge","Les Baux-de-Provence Rosé"] },
        ]
      },
      languedoc: {
        label: "Languedoc-Roussillon", grapes: ["Grenache","Syrah","Mourvèdre","Carignan","Cinsault","Roussanne","Grenache Blanc"],
        character: "France's largest wine region. Massive diversity from Mediterranean coast to high-altitude interior. Increasing quality from serious individual estates and appellations. Old-vine Carignan and Grenache are the treasure.",
        wines: ["Pic Saint-Loup","Faugères","Saint-Chinian","Minervois","Corbières","Banyuls","Rivesaltes"],
        subzones: [
          { name: "Pic Saint-Loup", grapes: ["Syrah","Grenache","Mourvèdre"], character: "Cool microclimate north of Montpellier on elevated limestone. The Languedoc's most structured, elegant reds. Mas Bruguière, Clos Marie are reference producers.", wines: ["Pic Saint-Loup Rouge","Pic Saint-Loup Blanc"] },
          { name: "Faugères", grapes: ["Grenache","Syrah","Mourvèdre","Carignan"], character: "Schist soils in the Hérault hills. Distinctive mineral, rustic quality. Good-value reds with real terroir expression. Alquier, Léon Barral.", wines: ["Faugères Rouge","Faugères Blanc"] },
          { name: "Saint-Chinian", grapes: ["Grenache","Syrah","Mourvèdre"], character: "Mixed clay-limestone (south) and schist (north) soils. The schist zone makes the most serious wines: warm, spicy, concentrated but with mineral freshness.", wines: ["Saint-Chinian Rouge","Saint-Chinian Blanc"] },
          { name: "Roussillon (Banyuls & Maury)", grapes: ["Grenache","Carignan","Syrah"], character: "Spanish border. Hot, dry, ancient schist. Home of France's finest fortified wines: Banyuls (oxidative-aged Grenache) and Maury (concentrated, age-worthy). Also serious dry reds from old-vine Grenache.", wines: ["Banyuls","Banyuls Grand Cru","Maury Sec","Côtes du Roussillon Villages"] },
        ]
      },
    }
  },

  italy: {
    label: "Italy",
    grapes: ["Nebbiolo","Sangiovese","Barbera","Dolcetto","Montepulciano","Aglianico","Corvina","Glera"],
    character: "20 regions, each with distinct indigenous varieties. From Barolo's towering tannin to Brunello's power, Amarone's richness, and Soave's delicacy. Indigenous varieties dominate at quality level.",
    regions: {
      piedmont: {
        label: "Piedmont", grapes: ["Nebbiolo","Barbera","Dolcetto","Moscato","Cortese"],
        character: "Northwestern Italy. The Langhe hills south of Turin. Barolo and Barbaresco from Nebbiolo are Italy's finest reds. Barbera and Dolcetto for everyday drinking. Moscato d'Asti and Gavi for whites.",
        wines: ["Barolo DOCG","Barbaresco DOCG","Barbera d'Asti","Barbera d'Alba","Dolcetto d'Alba","Gavi DOCG","Moscato d'Asti DOCG"],
        link: "wine-types/barolo/",
        subzones: [
          { name: "Barolo DOCG", grapes: ["Nebbiolo"], character: "The Langhe hills south of Alba. Five main communes: La Morra (Tortonian soils, aromatic), Barolo (transition), Castiglione Falletto (Helvetian), Serralunga d'Alba (most austere), Monforte d'Alba (mixed). Minimum 38 months aging.", wines: ["Barolo","Barolo Riserva","Barolo MGA (single-vineyard)"] },
          { name: "Barbaresco DOCG", grapes: ["Nebbiolo"], character: "Northeast of Alba. Same grape as Barolo, more accessible style. Three communes: Barbaresco, Neive, Treiso. Angelo Gaja redefined quality here from the 1960s onward.", wines: ["Barbaresco","Barbaresco Riserva","Barbaresco Single-Vineyard (Sorì)"] },
          { name: "Barbera d'Asti & d'Alba", grapes: ["Barbera"], character: "The everyday red of Piedmont. High acid, low tannin, deep colour. Asti is the finest expression. Oak-aged Superiore versions show real complexity at modest prices.", wines: ["Barbera d'Asti","Barbera d'Alba","Barbera d'Asti Superiore DOCG"] },
          { name: "Gavi DOCG", grapes: ["Cortese"], character: "Southeast Piedmont near Alessandria. Crisp, high-acid, mineral white from the Cortese grape. Neutral but food-versatile. La Scolca is the historic reference producer.", wines: ["Gavi","Gavi di Gavi"] },
          { name: "Moscato d'Asti DOCG", grapes: ["Moscato Bianco"], character: "Delicately sweet, low-alcohol (5–5.5%), lightly sparkling white. Peach, apricot, elderflower, orange blossom. From the Canelli area. Best drunk young and cold.", wines: ["Moscato d'Asti"] },
        ]
      },
      tuscany: {
        label: "Tuscany", grapes: ["Sangiovese","Cabernet Sauvignon","Merlot","Vernaccia","Trebbiano"],
        character: "Central Italy. Sangiovese dominates in Chianti Classico, Brunello, and Vino Nobile. Bolgheri launched the 'Super Tuscan' movement with international varieties. Rolling hills, cypress trees, galestro and alberese soils.",
        wines: ["Chianti Classico DOCG","Brunello di Montalcino DOCG","Bolgheri Sassicaia","Vino Nobile di Montepulciano DOCG","Vernaccia di San Gimignano"],
        subzones: [
          { name: "Chianti Classico DOCG", grapes: ["Sangiovese"], character: "Between Florence and Siena. Galestro (friable limestone-schist) and alberese (clay-limestone) soils. Three tiers: Chianti Classico, Riserva, Gran Selezione. Castello di Ama, Isole e Olena, Fonterutoli.", wines: ["Chianti Classico","Chianti Classico Riserva","Chianti Classico Gran Selezione"] },
          { name: "Brunello di Montalcino DOCG", grapes: ["Sangiovese Grosso (Brunello)"], character: "South of Siena around the Montalcino hilltop. Italy's most age-worthy wine: minimum 5 years (6 for Riserva). Complex, earthy, dried cherry, tar. Biondi-Santi created the modern style.", wines: ["Brunello di Montalcino","Brunello Riserva","Rosso di Montalcino"] },
          { name: "Bolgheri / Super Tuscans", grapes: ["Cabernet Sauvignon","Merlot","Cabernet Franc","Syrah"], character: "Coastal Tuscany. International varieties outside DOC rules → sold as IGT Toscana. Sassicaia (first Super Tuscan, 1968), Ornellaia, Masseto (pure Merlot). International structure, Tuscan richness.", wines: ["Bolgheri Sassicaia DOC","Ornellaia","Masseto","Guado al Tasso"] },
          { name: "Vino Nobile di Montepulciano DOCG", grapes: ["Prugnolo Gentile (Sangiovese)"], character: "Southeast Siena on clay-sandy soils. Style sits between Chianti Classico and Brunello: earthy, structured, cherry-and-herb character. Avignonesi, Poliziano are benchmarks.", wines: ["Vino Nobile di Montepulciano","Vino Nobile Riserva","Rosso di Montepulciano"] },
        ]
      },
      veneto: {
        label: "Veneto", grapes: ["Corvina","Garganega","Glera","Molinara","Rondinella"],
        character: "Northeast Italy. Italy's highest-volume DOC wine production. Valpolicella/Amarone from Corvina — from light fresh to massively concentrated dried-grape wines. Soave from Garganega. Prosecco from Glera.",
        wines: ["Amarone della Valpolicella DOCG","Valpolicella Ripasso","Soave Classico DOC","Prosecco DOCG","Bardolino"],
        subzones: [
          { name: "Valpolicella & Amarone", grapes: ["Corvina","Rondinella","Molinara"], character: "Northwest of Verona. Three styles from the same grapes: Valpolicella (fresh, light), Ripasso (re-fermented on Amarone skins, richer), Amarone (dried-grape appassimento — 15–17% ABV, dense, bitter-sweet finish).", wines: ["Valpolicella","Valpolicella Ripasso DOC","Amarone della Valpolicella DOCG","Recioto della Valpolicella"] },
          { name: "Soave Classico DOC", grapes: ["Garganega","Trebbiano di Soave"], character: "East of Verona on volcanic basalt. Garganega-dominant whites: almond, citrus, white peach, mineral texture. Soave Classico zone is significantly superior to generic Soave.", wines: ["Soave","Soave Classico","Soave Superiore DOCG","Recioto di Soave DOCG (sweet)"] },
          { name: "Prosecco Conegliano-Valdobbiadene DOCG", grapes: ["Glera"], character: "Steep Treviso hillsides. Charmat method (tank-fermented). Light, frothy, apple, pear, white flower. Rive (single-vineyard) are the finest. Cartizze is the prized sub-zone.", wines: ["Prosecco DOC","Prosecco Superiore DOCG","Prosecco Rive","Cartizze DOCG"] },
        ]
      },
      south: {
        label: "Southern Italy & Sicily", grapes: ["Aglianico","Nero d'Avola","Nerello Mascalese","Fiano","Greco","Falanghina"],
        character: "Ancient volcanic soils, extreme heat tempered by altitude and maritime influence. Aglianico is the great southern red: tannic, acidic, age-worthy. Sicily increasingly important with Etna leading a new generation.",
        wines: ["Taurasi DOCG","Fiano di Avellino DOCG","Greco di Tufo DOCG","Etna Rosso DOC","Nero d'Avola"],
        subzones: [
          { name: "Taurasi DOCG (Campania)", grapes: ["Aglianico"], character: "Campanian Apennines at 400–700 m. Aglianico at its most powerful: volcanic clay soils, very high tannin and acid. 'The Barolo of the South.' Minimum 3 years aging (4 for Riserva). Feudi di San Gregorio, Mastroberardino.", wines: ["Taurasi","Taurasi Riserva"] },
          { name: "Fiano di Avellino DOCG (Campania)", grapes: ["Fiano"], character: "High-altitude whites around Avellino. Hazelnut, white flower, pear, subtle mineral. Remarkable aging potential for a white. Among Italy's most serious white wines.", wines: ["Fiano di Avellino"] },
          { name: "Etna DOC (Sicily)", grapes: ["Nerello Mascalese","Carricante"], character: "Active volcano, northeastern Sicily. Black volcanic basalt soils. Nerello Mascalese: pale, Pinot Noir-like, mineral, age-worthy. Altitude: 400–1,000 m. Contrada (single-vineyard) system now rivalling Burgundy in ambition.", wines: ["Etna Rosso","Etna Bianco","Etna Rosato"] },
          { name: "Nero d'Avola (Sicily)", grapes: ["Nero d'Avola"], character: "Sicily's signature red variety. Best from Noto and Pachino in the southeast — limestone soils, extreme heat. Dark fruit, tar, dried herbs, velvety tannin. Also Cerasuolo di Vittoria DOCG (blend with Frappato).", wines: ["Nero d'Avola","Cerasuolo di Vittoria DOCG"] },
        ]
      },
    }
  },

  spain: {
    label: "Spain",
    grapes: ["Tempranillo","Garnacha","Monastrell","Albariño","Verdejo","Palomino"],
    character: "Diverse geography from Atlantic-influenced Galicia to hot Mediterranean south. Tempranillo dominant for reds. Unique oak-aging tradition (crianza/reserva/gran reserva) defines classical style. World-class Sherry from Jerez.",
    regions: {
      rioja: {
        label: "Rioja", grapes: ["Tempranillo","Garnacha","Graciano","Mazuelo"],
        character: "Spain's most famous red wine region. Atlantic-influenced north Spain. Tempranillo dominates. Long oak-aging tradition creates the classic vanilla-and-cedar style. New wave single-vineyard wines challenging the house blend.",
        wines: ["Rioja Joven","Rioja Crianza","Rioja Reserva","Rioja Gran Reserva","Rioja Blanco"],
        subzones: [
          { name: "Rioja Alta", grapes: ["Tempranillo","Garnacha","Graciano"], character: "Western, higher altitude, most Atlantic climate. Clay-limestone and chalk soils. Most elegant sub-zone: higher acidity, finer tannin, longest-lived wines. López de Heredia, La Rioja Alta SA, Muga.", wines: ["Rioja Reserva","Rioja Gran Reserva"] },
          { name: "Rioja Alavesa", grapes: ["Tempranillo"], character: "Basque Country side of the Ebro. Highest altitude, coolest zone. Clay-limestone. Fruit-forward, aromatic style. Artadi, Remelluri, Bodegas Roda.", wines: ["Rioja Crianza","Rioja Reserva"] },
          { name: "Rioja Oriental (formerly Baja)", grapes: ["Garnacha","Tempranillo","Monastrell"], character: "Eastern Rioja, Mediterranean influence. Hot, dry, alluvial soils. Riper, fuller, higher alcohol. Historically used for blending; now producing interesting single-origin wines.", wines: ["Rioja","Garnacha-dominant blends"] },
        ]
      },
      ribera: {
        label: "Ribera del Duero", grapes: ["Tinto Fino (Tempranillo)","Garnacha","Cabernet Sauvignon","Merlot"],
        character: "High plateau (700–900 m) on the Duero river. Extreme continental climate: hot days, cold nights. Concentrated, powerful Tinto Fino with remarkable freshness and structure. Vega Sicilia is Spain's most prestigious wine.",
        wines: ["Ribera del Duero Crianza","Ribera del Duero Reserva","Ribera del Duero Gran Reserva","Vega Sicilia Único"],
        subzones: [
          { name: "Western Ribera (Peñafiel zone)", grapes: ["Tinto Fino"], character: "Sandy soils over clay-limestone. Classic concentrated, oak-aged style. Protos, Pesquera (Alejandro Fernández, who defined the modern style in 1972) are key producers.", wines: ["Ribera del Duero Crianza","Ribera Reserva"] },
          { name: "Eastern Ribera (Roa / Valbuena zone)", grapes: ["Tinto Fino"], character: "Limestone-rich soils. Freshest and most structured wines. Vega Sicilia and Dominio de Pingus are here. The most age-worthy wines of the appellation.", wines: ["Ribera Gran Reserva","Single-Vineyard Ribera"] },
        ]
      },
      riasbaixes: {
        label: "Rías Baixas", grapes: ["Albariño"],
        character: "Galicia, northwest Spain. Atlantic, rainy, green. Albariño produces Spain's finest aromatic whites: intense peach, citrus, saline mineral, high acidity. Granite and sandy soils. Best drunk young but ages surprisingly well.",
        wines: ["Rías Baixas Albariño"],
        subzones: [
          { name: "Val do Salnés", grapes: ["Albariño"], character: "Largest and finest sub-zone. Coastal granite, alluvial soils. Classic style: bright, citrus, mineral, clean saline finish. Pazo de Señoráns, Do Ferreiro, Martin Codax.", wines: ["Rías Baixas Albariño"] },
          { name: "O Rosal & Condado do Tea", grapes: ["Albariño","Loureiro","Treixadura"], character: "Further south on the Miño river. Blends more common. Richer, more aromatic style with more stone fruit. Different mineral character from Val do Salnés.", wines: ["Rías Baixas Albariño","Rías Baixas Blends"] },
        ]
      },
      priorat: {
        label: "Priorat", grapes: ["Garnacha","Cariñena (Carignan)","Cabernet Sauvignon","Syrah"],
        character: "Catalonia. Ancient black slate and quartz soils (llicorella). One of only two Spanish DOCq wines (alongside Rioja). Extremely concentrated, mineral, powerful reds from old-vine Garnacha and Carignan on near-vertical terraces.",
        wines: ["Priorat DOCq","Montsant DOC"],
        subzones: [
          { name: "Core Priorat (Gratallops, Porrera, Scala Dei)", grapes: ["Garnacha","Cariñena"], character: "The historic heart. Dramatic llicorella slate terraces. Álvaro Palacios (L'Ermita), Clos Mogador, Vall Llach, Cims de Porrera. Wines of extraordinary depth, mineral intensity, and aging potential.", wines: ["Priorat DOCq","Priorat Vi de Vila (village wine)"] },
          { name: "Montsant DOC", grapes: ["Garnacha","Cariñena","Syrah"], character: "Surrounds Priorat with different soils (limestone and clay). Similar varieties at more accessible prices. Often called 'the Priorat for those who can't afford Priorat.' Celler de Can Roca.", wines: ["Montsant DOC"] },
        ]
      },
      jerez: {
        label: "Jerez (Sherry)", grapes: ["Palomino","Pedro Ximénez","Moscatel"],
        character: "Andalucía. Fortified wines from chalky albariza soils. Unique biological (flor yeast) and oxidative aging via the solera system. Among the most complex wines in the world, and dramatically undervalued.",
        wines: ["Fino","Manzanilla","Amontillado","Oloroso","Palo Cortado","Pedro Ximénez"],
        subzones: [
          { name: "Jerez de la Frontera", grapes: ["Palomino","Pedro Ximénez"], character: "The main Sherry town. Fino and Oloroso production. Solera fractional blending system. González Byass (Tío Pepe), Lustau, Valdespino are benchmark producers.", wines: ["Fino Jerez","Oloroso","Amontillado","Palo Cortado","Pedro Ximénez"] },
          { name: "Sanlúcar de Barrameda", grapes: ["Palomino"], character: "Coastal town at the Guadalquivir mouth. Sea breezes sustain thicker flor, producing Manzanilla: even lighter, drier, and more saline than Fino. Hidalgo La Gitana is the iconic reference.", wines: ["Manzanilla","Manzanilla Pasada","Manzanilla en Rama"] },
        ]
      },
    }
  },

  germany: {
    label: "Germany & Austria",
    grapes: ["Riesling","Spätburgunder (Pinot Noir)","Grüner Veltliner","Zweigelt","Blaufränkisch","Müller-Thurgau"],
    character: "Germany: the world's most precise Riesling — bone dry to intensely sweet, from ice-cold slate vineyards. The Prädikat system classifies by ripeness. Austria: powerful dry Grüner Veltliner and Riesling from Danube terraces.",
    regions: {
      mosel: {
        label: "Mosel", grapes: ["Riesling"],
        character: "Steep blue Devonian slate vineyards along the Mosel river. Germany's most delicate Riesling: 7–12% ABV, piercing acidity, liquid mineral character. Petrol note develops with age. Mittelmosel is the quality heart.",
        wines: ["Mosel Kabinett","Mosel Spätlese","Mosel Auslese","Beerenauslese","Trockenbeerenauslese","Eiswein"],
        subzones: [
          { name: "Mittelmosel", grapes: ["Riesling"], character: "The great loops of the middle Mosel. Deep blue Devonian slate. Finest vineyards: Bernkasteler Doctor, Wehlener Sonnenuhr, Piesporter Goldtröpfchen, Graacher Himmelreich. JJ Prüm, Wegeler, Dr. Loosen.", wines: ["Kabinett","Spätlese","Auslese","TBA","Eiswein"] },
          { name: "Saar", grapes: ["Riesling"], character: "Southern Mosel tributary. Even more austere and mineral than Mittelmosel. Coolest sub-zone. Scharzhofberg is the legendary vineyard. Egon Müller (Scharzhofberger TBA among world's most expensive wines), Van Volxem.", wines: ["Saar Riesling","Saar Spätlese","Saar Auslese"] },
          { name: "Ruwer", grapes: ["Riesling"], character: "Tiny northern tributary. Elegance and floral delicacy above all. Maximin Grünhaus (von Schubert) and Karthäuserhof are the main estates. Wines of extraordinary lightness and precision.", wines: ["Ruwer Riesling","Ruwer Auslese"] },
        ]
      },
      rhine: {
        label: "Rhine Regions (Rheingau, Rheinhessen, Pfalz)", grapes: ["Riesling","Spätburgunder","Grauburgunder","Weißburgunder"],
        character: "Rheingau: classical dry Riesling from south-facing quartzite slopes. Rheinhessen: Germany's largest region, increasingly producing world-class dry Riesling. Pfalz: warmer, fuller-bodied Riesling and serious Spätburgunder.",
        wines: ["Rheingau Riesling","Rheinhessen Riesling","Pfalz Riesling","Ahr Spätburgunder"],
        subzones: [
          { name: "Rheingau", grapes: ["Riesling","Spätburgunder"], character: "South-facing on the Rhine bend between Wiesbaden and Rüdesheim. Quartzite and slate. Classic dry German Riesling: full, rich, structured. Schloss Johannisberg (Spätlese invented here 1775), Robert Weil.", wines: ["Rheingau Riesling","Rüdesheimer Riesling"] },
          { name: "Rheinhessen", grapes: ["Riesling","Silvaner","Scheurebe"], character: "Germany's largest wine region (26,000 ha). Variable quality but the 'Rheinhessen Switzerland' area (Westhofen, Flörsheim-Dalsheim) produces world-class dry Riesling. Wittmann, Kühling-Gillot, Klaus Peter Keller.", wines: ["Rheinhessen Riesling","Rheinhessen Silvaner"] },
          { name: "Pfalz", grapes: ["Riesling","Spätburgunder","Dornfelder"], character: "South of Rheinhessen. Germany's warmest and second-largest region. Mittelhaardt is the quality zone: Forst, Deidesheim, Wachenheim. Rieslings of great richness. Also serious Spätburgunder. Dr. Bürklin-Wolf, Von Winning.", wines: ["Pfalz Riesling","Pfalz Spätburgunder"] },
          { name: "Ahr", grapes: ["Spätburgunder (Pinot Noir)"], character: "South of Cologne. Germany's finest red wine zone. Cool steep-sided valley with slate and greywacke soils. Elegant, aromatic, silky Spätburgunder. Meyer-Näkel, Deutzerhof, Jean Stodden.", wines: ["Ahr Spätburgunder"] },
        ]
      },
      austria: {
        label: "Austria", grapes: ["Grüner Veltliner","Riesling","Zweigelt","Blaufränkisch","St. Laurent"],
        character: "Austria makes some of Europe's most precise dry whites and increasingly important reds. Grüner Veltliner — white pepper, mineral, bone dry — is the signature. Wachau Riesling rivals Alsace. Burgenland for reds and botrytis sweets.",
        wines: ["Wachau Smaragd Riesling","Grüner Veltliner","Blaufränkisch","Ruster Ausbruch","Trockenbeerenauslese"],
        subzones: [
          { name: "Wachau", grapes: ["Riesling","Grüner Veltliner"], character: "Dramatic Danube gorge with gneiss and terraced vineyards. Three-tier system: Steinfeder (lightest), Federspiel (medium), Smaragd (richest, most powerful). F.X. Pichler, Prager, Domäne Wachau.", wines: ["Wachau Riesling Smaragd","Wachau Grüner Veltliner Smaragd"] },
          { name: "Kremstal & Kamptal", grapes: ["Grüner Veltliner","Riesling"], character: "East of Wachau. Loess and primary rock soils. The largest production zone for quality Austrian whites. Bründlmayer (Kamptal Riesling Heiligenstein is world-class), Salomon, Nigl.", wines: ["Kamptal Grüner Veltliner","Kremstal Riesling","Kamptal DAC"] },
          { name: "Burgenland", grapes: ["Zweigelt","Blaufränkisch","St. Laurent"], character: "Eastern Austria on the Hungarian border. Lake Neusiedl creates botrytis conditions for legendary sweet wines (Ruster Ausbruch, TBA). Also Austria's finest reds: Blaufränkisch (peppery, mineral, age-worthy).", wines: ["Blaufränkisch","Zweigelt","Ruster Ausbruch","Burgenland TBA"] },
        ]
      },
    }
  },

  portugal: {
    label: "Portugal",
    grapes: ["Touriga Nacional","Touriga Franca","Tinta Roriz","Alvarinho","Arinto","Baga"],
    character: "Atlantic and continental climates with unique indigenous varieties. Douro: Port and increasingly celebrated dry table wines. Alentejo: warm, generous, accessible reds. Vinho Verde: fresh, low-alcohol whites. All offer extraordinary value.",
    regions: {
      douro: {
        label: "Douro / Port", grapes: ["Touriga Nacional","Touriga Franca","Tinta Roriz","Tinta Barroca","Tinto Cão"],
        character: "Steep schist terraces along the Douro river gorge. Port is the historic fortified wine; dry Douro table wines are now among Portugal's finest. Three sub-zones with progressively drier continental climate eastward.",
        wines: ["Vintage Port","LBV (Late Bottled Vintage) Port","Tawny Port","Colheita Port","Dry Douro Red","Douro White"],
        subzones: [
          { name: "Cima Corgo", grapes: ["Touriga Nacional","Touriga Franca","Tinta Roriz"], character: "Middle Douro. The quality heart of the region. Steep schist slopes. Most top single-quinta Ports and fine dry Douro table wines originate here. Quinta do Crasto, Quinta Vale Dona Maria, Ramos Pinto.", wines: ["Vintage Port","LBV","Douro Tinto","Douro Branco"] },
          { name: "Baixo Corgo", grapes: ["Tinta Barroca","Tinta Roriz","Touriga Franca"], character: "Western Douro, most Atlantic influence. Cooler and wetter. Lighter-style Ports and table wines. Higher production volumes. Also the base of much Tawny production.", wines: ["Ruby Port","Tawny Port","Douro Tinto"] },
          { name: "Douro Superior", grapes: ["Touriga Nacional","Syrah","Tinta Roriz"], character: "Easternmost, hottest, driest Douro sub-zone. Continental extremes. Low yields, high concentration. Fewest producers but quality ascending rapidly. Symington's Quinta do Vesúvio.", wines: ["Single-Quinta Vintage Port","Douro Superior Tinto"] },
        ]
      },
      alentejo: {
        label: "Alentejo", grapes: ["Aragonez (Tinta Roriz)","Trincadeira","Alicante Bouschet","Antão Vaz","Arinto"],
        character: "Hot, dry central plain covering a third of Portugal. Warm, generous, fruit-forward reds with rounded tannins. Much more accessible than Douro. Eight sub-zones including Reguengos, Évora, and the cooler Portalegre.",
        wines: ["Alentejo Tinto","Alentejo Branco","Alentejo Reserva"],
        subzones: [
          { name: "Reguengos & Évora", grapes: ["Aragonez","Trincadeira","Alicante Bouschet"], character: "The two largest sub-zones. Granite and schist. Rich, ripe, accessible reds. Herdade do Esporão is Alentejo's flagship estate (organic). Also Herdade dos Grous, Adega Mayor.", wines: ["Alentejo Tinto","Alentejo Reserva","Alentejo Branco"] },
          { name: "Portalegre", grapes: ["Aragonez","Trincadeira","Touriga Nacional","Garnacha"], character: "Highest-altitude Alentejo at the Serra de São Mamede foothills. Granite soils. Fresher, more structured than lowland Alentejo. Cooler nights preserve acidity. João Portugal Ramos.", wines: ["Portalegre Tinto","Portalegre Branco"] },
        ]
      },
      vinhoverde: {
        label: "Vinho Verde & Dão", grapes: ["Alvarinho","Loureiro","Arinto","Encruzado","Touriga Nacional"],
        character: "Two distinct northern regions. Vinho Verde: Atlantic Minho, light and fresh whites from Atlantic rain. Dão: granite plateau, the finest red and white table wines of central Portugal.",
        wines: ["Vinho Verde","Alvarinho (Monção-Melgaço)","Dão Tinto","Dão Encruzado"],
        subzones: [
          { name: "Monção & Melgaço (Alvarinho)", grapes: ["Alvarinho"], character: "Northernmost Vinho Verde on the Spanish border. Granite. 100% Alvarinho (same as Rías Baixas Albariño). Portugal's finest white: peach, apricot, mineral, serious aging potential. Anselmo Mendes, Soalheiro.", wines: ["Alvarinho Vinho Verde","Late Harvest Alvarinho"] },
          { name: "Vinho Verde (multi-variety)", grapes: ["Loureiro","Arinto","Trajadura","Azal"], character: "Multi-variety blends across the Minho river basin. Classic style: light, slightly frizzante, 9–11% ABV, high acid, best young. The world's best-selling Vinho Verde (Casal Garcia) comes from here.", wines: ["Vinho Verde Branco","Vinho Verde Rosé"] },
          { name: "Dão DOC", grapes: ["Touriga Nacional","Encruzado","Tinta Roriz"], character: "Granite plateau at altitude surrounded by pine forests. Portugal's answer to Burgundy: fragrant, earthy Touriga Nacional reds; mineral Encruzado whites. Quinta dos Roques, Niepoort Dão.", wines: ["Dão Tinto","Dão Encruzado Branco","Dão Reserva"] },
        ]
      },
    }
  },

  california: {
    label: "California (USA)",
    grapes: ["Cabernet Sauvignon","Pinot Noir","Chardonnay","Zinfandel","Merlot","Sauvignon Blanc"],
    character: "Mediterranean climate with Pacific cooling. Napa Valley: world-class Cabernet Sauvignon of power and precision. Sonoma: more diverse, cooler, with excellent Pinot Noir and Chardonnay. Central Coast: growing reputation, strong value.",
    regions: {
      napa: {
        label: "Napa Valley", grapes: ["Cabernet Sauvignon","Merlot","Chardonnay","Sauvignon Blanc"],
        character: "30-mile valley north of San Francisco. Multiple sub-AVAs with distinct soils and aspects. Benchmark New World Cabernet: ripe, full-bodied, structured, age-worthy. Screaming Eagle, Harlan, Opus One are trophy wines commanding Bordeaux-level prices.",
        wines: ["Napa Cabernet Sauvignon","Napa Merlot","Napa Chardonnay","Napa Sauvignon Blanc"],
        subzones: [
          { name: "Rutherford & Oakville", grapes: ["Cabernet Sauvignon","Merlot"], character: "Classic Napa bench soils: deep, well-drained alluvial gravels. 'Rutherford Dust' — a distinctive earthy, dusty quality in the tannin. Opus One, Mondavi Reserve, Inglenook (Rubicon).", wines: ["Napa Cabernet Sauvignon","Napa Red Blend"] },
          { name: "Stags Leap District", grapes: ["Cabernet Sauvignon"], character: "Eastern Napa, volcanic palisade cliffs. More elegant, soft-tannin style than Rutherford. Won the 1976 Paris Judgment (Stag's Leap Wine Cellars SLV). Clos du Val, Silverado Vineyards.", wines: ["Stags Leap Cabernet Sauvignon"] },
          { name: "Howell Mountain & Mountain AVAs", grapes: ["Cabernet Sauvignon","Zinfandel","Cabernet Franc"], character: "Hillside sites above the fog line at 400–900 m. Volcanic soils. More structured, tannic, lower-yielding. The longest-lived Napa Cabernets. Dunn Vineyards (Howell Mountain) is the benchmark.", wines: ["Mountain Napa Cabernet","Zinfandel"] },
          { name: "Carneros (Napa & Sonoma)", grapes: ["Chardonnay","Pinot Noir"], character: "Coolest sub-zone, straddling Napa and Sonoma, at the head of San Francisco Bay. Marine fog and wind. Best Chardonnay and Pinot Noir base wines in Napa. Domaine Carneros (Taittinger), Etude.", wines: ["Carneros Chardonnay","Carneros Pinot Noir"] },
        ]
      },
      sonoma: {
        label: "Sonoma County", grapes: ["Pinot Noir","Chardonnay","Zinfandel","Cabernet Sauvignon"],
        character: "More diverse and generally cooler than Napa. Pacific fog pushes inland through the Petaluma Gap and Bodega Bay. Russian River Valley for world-class Pinot Noir. Sonoma Coast for extreme maritime style. Dry Creek Valley for Zinfandel.",
        wines: ["Russian River Pinot Noir","Sonoma Chardonnay","Dry Creek Zinfandel","Sonoma Coast Pinot Noir"],
        subzones: [
          { name: "Russian River Valley", grapes: ["Pinot Noir","Chardonnay"], character: "Morning fog, cool afternoons, early harvest. The finest New World Pinot Noir appellation: deep, rich, complex with earthy, spicy Burgundian character. Williams Selyem, Rochioli, Kosta Browne, Gary Farrell.", wines: ["Russian River Pinot Noir","Russian River Chardonnay"] },
          { name: "Sonoma Coast", grapes: ["Pinot Noir","Chardonnay","Syrah"], character: "Extreme maritime influence on steep coastal ridges. Lean, mineral, high-acid Pinot Noir — the most Burgundian in California. Sea Smoke, Littorai, Wayfarer, Peter Michael (Knights Valley).", wines: ["Sonoma Coast Pinot Noir","Sonoma Coast Chardonnay"] },
          { name: "Dry Creek Valley", grapes: ["Zinfandel","Cabernet Sauvignon","Sauvignon Blanc"], character: "Warm, dry inland valley. Old-vine Zinfandel, some 100+ years old: dark fruit, black pepper, high alcohol, complex. Ridge Vineyards (Lytton Springs, Geyserville) is the absolute benchmark.", wines: ["Dry Creek Zinfandel","Dry Creek Sauvignon Blanc"] },
        ]
      },
      oregon: {
        label: "Oregon (Willamette Valley)", grapes: ["Pinot Noir","Chardonnay","Pinot Gris","Pinot Blanc"],
        character: "Cool, rainy Pacific Northwest. Willamette Valley is Oregon's premier zone. The most successful New World Pinot Noir region — more Burgundian in restraint and acidity than California. Multiple sub-AVAs with distinct soils.",
        wines: ["Willamette Valley Pinot Noir","Oregon Chardonnay","Oregon Pinot Gris"],
        subzones: [
          { name: "Dundee Hills", grapes: ["Pinot Noir","Chardonnay"], character: "Red Jory volcanic basalt soil — unique to Oregon. Distinctive iron-rich, earthy, savoury Pinot Noir with earthy depth. Eyrie Vineyards (founding estate, 1965), Domaine Drouhin Oregon, Domaine Serene.", wines: ["Dundee Hills Pinot Noir"] },
          { name: "Eola-Amity Hills", grapes: ["Pinot Noir","Chardonnay"], character: "Van Duzer Corridor brings afternoon Pacific winds directly into this zone, creating the coolest afternoons in the Willamette. Fresher, more structured, higher-acid Pinot Noir. Cristom, Bethel Heights.", wines: ["Eola-Amity Hills Pinot Noir"] },
          { name: "Chehalem Mountains", grapes: ["Pinot Noir","Pinot Gris","Riesling"], character: "Diverse soils: Jory volcanic, Laurelwood wind-blown silt, Willakenzie sedimentary. Each produces distinct wine. Adelsheim (introduced Pinot Gris to Oregon), Rex Hill, Raptor Ridge.", wines: ["Chehalem Mountains Pinot Noir","Oregon Pinot Gris"] },
        ]
      },
    }
  },

  southamerica: {
    label: "South America",
    grapes: ["Malbec","Cabernet Sauvignon","Carmenère","Torrontés","Sauvignon Blanc","Pinot Noir"],
    character: "Argentina and Chile produce excellent wine at all price points. Argentina: high-altitude Mendoza Malbec of world-class quality. Chile: diverse geography from cool Pacific coastal valleys to warm interior for Cabernet and Carmenère.",
    regions: {
      mendoza: {
        label: "Mendoza (Argentina)", grapes: ["Malbec","Cabernet Sauvignon","Bonarda","Torrontés","Chardonnay"],
        character: "Andes foothills at 600–1,500 m altitude. Dry, sunny, continental climate with cold nights preserving acidity. Malbec achieves its finest world expression here: dark, plush, violet-floral, velvet tannin — completely different from French Cahors.",
        wines: ["Mendoza Malbec","Luján de Cuyo Malbec","Uco Valley Malbec","Torrontés","Mendoza Cabernet"],
        subzones: [
          { name: "Luján de Cuyo", grapes: ["Malbec","Cabernet Sauvignon"], character: "Argentina's first DOC (2006). 900–1,100 m altitude. Oldest Malbec vines, planted in the late 1800s. Classic, full-bodied, structured style. Achaval Ferrer, Catena Zapata (Adrianna), Clos de los Siete.", wines: ["Luján de Cuyo Malbec","Luján de Cuyo Cabernet Sauvignon"] },
          { name: "Uco Valley (Valle de Uco)", grapes: ["Malbec","Cabernet Franc","Chardonnay","Pinot Noir"], character: "High altitude (1,000–1,500 m). Coldest Mendoza sub-zone. Alluvial fans over limestone. More elegant, less jammy Malbec with cooler freshness. Clos des Andes, Zuccardi Valle de Uco (world-class), Achaval Ferrer Finca.", wines: ["Uco Valley Malbec","Uco Valley Cabernet Franc","Uco Valley Chardonnay"] },
          { name: "Maipú", grapes: ["Malbec","Tempranillo","Bonarda"], character: "Closest sub-zone to Mendoza city. Sandy soils on lower alluvial fans. Historic zone; some of the oldest Malbec vines in Mendoza. Trapiche, Norton, Finca Flichman.", wines: ["Maipú Malbec","Maipú Tempranillo"] },
        ]
      },
      chile: {
        label: "Chile", grapes: ["Carmenère","Cabernet Sauvignon","Sauvignon Blanc","Chardonnay","Pinot Noir","Syrah"],
        character: "Unique geography: Andes to the east, Pacific to the west, Atacama Desert in the north, Patagonia in the south. Coastal valleys (Casablanca, San Antonio) for whites and Pinot Noir; warm interior for Cabernet and Carmenère. Outstanding value across the range.",
        wines: ["Maipo Cabernet Sauvignon","Colchagua Carmenère","Casablanca Sauvignon Blanc","San Antonio Pinot Noir"],
        subzones: [
          { name: "Maipo Valley", grapes: ["Cabernet Sauvignon","Carmenère","Sauvignon Blanc"], character: "Near Santiago. Chile's Médoc equivalent. Alluvial soils from Andes. Classic Cabernet: blackcurrant, cedar, structured. Almaviva (Mouton-Rothschild + Concha y Toro), Don Melchor (Concha y Toro), Viña Santa Rita Casa Real.", wines: ["Maipo Cabernet Sauvignon","Maipo Red Blend"] },
          { name: "Colchagua Valley", grapes: ["Carmenère","Cabernet Sauvignon","Syrah","Merlot"], character: "Chile's richest, warmest central valley. Carmenère — the 'lost Bordeaux variety' rediscovered in Chile in 1994 — thrives here: dark fruit, green pepper notes, soft plush tannin. Montes, Lapostolle (Clos Apalta), Casa Lapostolle.", wines: ["Colchagua Carmenère","Colchagua Red Blend","Colchagua Syrah"] },
          { name: "Casablanca & San Antonio Valleys", grapes: ["Sauvignon Blanc","Chardonnay","Pinot Noir","Syrah"], character: "Coastal valleys cooled by Pacific fog and the Humboldt Current. Chile's finest Sauvignon Blanc: tropical yet precise. Also serious Pinot Noir. Casa Marin, Emiliana, William Fèvre Chile.", wines: ["Casablanca Sauvignon Blanc","Casablanca Pinot Noir","San Antonio Sauvignon Blanc"] },
        ]
      },
    }
  },

  southafrica: {
    label: "South Africa",
    grapes: ["Chenin Blanc (Steen)","Pinotage","Cabernet Sauvignon","Syrah","Sauvignon Blanc","Cinsault"],
    character: "Cape Winelands radiating from Cape Town. Diverse mountain terroir: granitic soils, ocean influence, old bush vines. Chenin Blanc is the volume grape but also produces world-class single-site wines. Pinotage is unique to South Africa.",
    regions: {
      stellenbosch: {
        label: "Stellenbosch", grapes: ["Cabernet Sauvignon","Merlot","Pinotage","Chenin Blanc","Sauvignon Blanc"],
        character: "The Napa Valley of South Africa. Mountain backdrop, diverse granitic and clay soils. Premier Cabernet-based blends, old-vine Chenin Blanc, and increasingly serious Syrah. The Cape's most prestigious appellation.",
        wines: ["Stellenbosch Cabernet Sauvignon","Stellenbosch Red Blend","Stellenbosch Chenin Blanc","Stellenbosch Pinotage"],
        subzones: [
          { name: "Helderberg & Simonsberg", grapes: ["Cabernet Sauvignon","Merlot","Cabernet Franc"], character: "Mountain ranges creating distinct sub-zones. Decomposed granite soils. Finest Cape Bordeaux blends. Vergelegen, Tokara, Rust en Vrede, Alto Estate.", wines: ["Cape Bordeaux Blend","Stellenbosch Cabernet Sauvignon"] },
          { name: "Polkadraai Hills & Bottelary", grapes: ["Chenin Blanc","Cabernet Sauvignon","Syrah"], character: "Western Stellenbosch. Lower altitude, warmer. Old-vine Chenin Blanc on weathered granite. Mulderbosch, Keermont, Boekenhoutskloof. Diverse styles from fresh to oxidative.", wines: ["Old Vine Chenin Blanc","Stellenbosch Syrah"] },
        ]
      },
      swartland: {
        label: "Swartland", grapes: ["Chenin Blanc","Syrah","Grenache","Cinsault","Mourvèdre"],
        character: "Dry Mediterranean inland region north of Cape Town. Old, unirrigated granite and schist bush vines. South Africa's most exciting new wave. Eben Sadie (Sadie Family Wines) sparked a revolution in the 2000s. Rich, complex, authentic wines.",
        wines: ["Swartland Syrah","Swartland Chenin Blanc","Swartland Grenache","Swartland Red Blend"],
        subzones: [
          { name: "Paardeberg", grapes: ["Chenin Blanc","Syrah","Grenache"], character: "Granite mountain in the heart of Swartland. Old-vine Chenin Blanc and Rhône varieties. Sadie Family Wines' finest single-site wines originate here. The Swartland's spiritual centre.", wines: ["Old Vine Chenin Blanc","Paardeberg Syrah"] },
          { name: "Riebeekberg & Kasteelberg", grapes: ["Syrah","Grenache","Mourvèdre","Chenin Blanc"], character: "Cooler, higher altitude. Schist and granite. Elegant, peppery Syrah. Mullineux & Leeu (acclaimed Syrah from iron-rich and granite single-sites), AA Badenhorst, David & Nadia.", wines: ["Swartland Syrah","Grenache","GSM Blend"] },
        ]
      },
    }
  },

  australia: {
    label: "Australia",
    grapes: ["Shiraz (Syrah)","Cabernet Sauvignon","Chardonnay","Riesling","Grenache","Semillon"],
    character: "Warm, geographically vast continent producing diverse styles. Barossa: iconic old-vine Shiraz. Clare & Eden Valleys: benchmark dry Riesling. Margaret River: elegant Cabernet. Yarra Valley and Mornington: cool-climate Pinot Noir. Hunter Valley: aged Sémillon is unique to Australia.",
    regions: {
      barossa: {
        label: "Barossa & Eden Valley (SA)", grapes: ["Shiraz","Grenache","Cabernet Sauvignon","Riesling","Mourvèdre"],
        character: "South Australia. Barossa Valley floor is hot, dry, and has some of the world's oldest Shiraz vines (150+ years). Eden Valley sits on a cooler high plateau above, producing fine Riesling and more elegant Shiraz. Penfolds Grange defines the Australian wine identity globally.",
        wines: ["Barossa Shiraz","Eden Valley Riesling","GSM (Grenache-Shiraz-Mourvèdre)","Penfolds Grange"],
        subzones: [
          { name: "Barossa Valley floor", grapes: ["Shiraz","Grenache","Cabernet Sauvignon"], character: "Flat, hot, sandy loam and red-brown earth over clay. Old-vine Shiraz of extraordinary concentration: blackberry, dark chocolate, leather, licorice, tobacco. Henschke (Hill of Grace), Penfolds, Torbreck, Two Hands.", wines: ["Barossa Shiraz","Old Vine GSM","Barossa Cabernet Sauvignon"] },
          { name: "Eden Valley", grapes: ["Riesling","Shiraz","Viognier"], character: "High plateau (400–550 m) above Barossa. Significantly cooler. Australia's finest dry Riesling: steely, lemon-lime, floral, developing petrol note with age. Also more restrained, elegant Shiraz. Henschke (Mount Edelstone), Pewsey Vale, Yalumba.", wines: ["Eden Valley Riesling","Eden Valley Shiraz"] },
        ]
      },
      margaret: {
        label: "Margaret River (WA)", grapes: ["Cabernet Sauvignon","Chardonnay","Sauvignon Blanc","Merlot","Cabernet Franc"],
        character: "Western Australia's maritime peninsula cooled by the Indian Ocean. Elegant, structured Cabernet Sauvignon often compared to Pauillac. Also benchmark Chardonnay and Sauvignon Blanc-Sémillon blends. Very different from South Australian style.",
        wines: ["Margaret River Cabernet Sauvignon","Margaret River Chardonnay","Margaret River SBS (Sauvignon Blanc-Sémillon)"],
        subzones: [
          { name: "Wilyabrup (Northern Margaret River)", grapes: ["Cabernet Sauvignon","Merlot","Cabernet Franc"], character: "Gravel and laterite loam soils. The finest Cabernet sub-zone. Elegant, structured, cedar and blackcurrant. Cape Mentelle, Moss Wood, Leeuwin Estate (Art Series Chardonnay is one of Australia's finest).", wines: ["Cabernet Sauvignon","Cabernet Merlot Blend"] },
          { name: "Karridale (Southern Margaret River)", grapes: ["Chardonnay","Pinot Noir","Shiraz"], character: "Cooler, wetter than northern sub-zones. The best Chardonnay zone. Devil's Lair, Voyager Estate.", wines: ["Margaret River Chardonnay","Pinot Noir"] },
        ]
      },
      victoria: {
        label: "Victoria (Yarra, Mornington)", grapes: ["Pinot Noir","Chardonnay","Shiraz","Pinot Gris"],
        character: "Cool-climate Victoria produces Australia's finest Pinot Noir and Chardonnay. Yarra Valley: rolling hills east of Melbourne. Mornington Peninsula: maritime, elegant. Both are the antithesis of big, warm Australian reds.",
        wines: ["Yarra Valley Pinot Noir","Yarra Valley Chardonnay","Mornington Peninsula Pinot Noir"],
        subzones: [
          { name: "Yarra Valley", grapes: ["Pinot Noir","Chardonnay","Shiraz","Cabernet Sauvignon"], character: "Rolling hills east of Melbourne. Volcanic and clay soils. Victoria's coolest major region. Elegant Pinot Noir and Chardonnay. De Bortoli, Coldstream Hills (James Halliday), Yering Station, Gembrook Hill.", wines: ["Yarra Pinot Noir","Yarra Chardonnay","Yarra Shiraz"] },
          { name: "Mornington Peninsula", grapes: ["Pinot Noir","Chardonnay","Pinot Gris"], character: "Maritime peninsula south of Melbourne, cooled by Bass Strait. Silky, elegant, perfumed Pinot Noir. Stonier, Paringa Estate, Ten Minutes by Tractor, Kooyong.", wines: ["Mornington Pinot Noir","Mornington Chardonnay","Mornington Pinot Gris"] },
        ]
      },
    }
  },

  newzealand: {
    label: "New Zealand",
    grapes: ["Sauvignon Blanc","Pinot Noir","Pinot Gris","Chardonnay","Riesling","Syrah"],
    character: "Small, quality-focused country with two distinct islands and dramatically different climates. Marlborough: world benchmark for aromatic, intense Sauvignon Blanc. Central Otago: world's most southerly major region, exceptional Pinot Noir. Both have unique terroir with no close global parallel.",
    regions: {
      marlborough: {
        label: "Marlborough", grapes: ["Sauvignon Blanc","Pinot Noir","Chardonnay","Riesling","Pinot Gris"],
        character: "South Island's northeast corner. Wairau and Awatere valleys. Maritime, sunny days, cold nights, free-draining stony soils. Benchmark Sauvignon Blanc: passionfruit, grapefruit, nettles, intense aromatics. Cloudy Bay made it famous in 1985.",
        wines: ["Marlborough Sauvignon Blanc","Marlborough Pinot Noir","Marlborough Riesling","Marlborough Chardonnay"],
        subzones: [
          { name: "Wairau Valley", grapes: ["Sauvignon Blanc","Chardonnay","Pinot Noir"], character: "Original and largest sub-zone. Stony riverbed alluvial soils. Classic aromatic, vibrant, tropical Sauvignon Blanc style. Cloudy Bay, Hunter's, Seresin Estate, Dog Point.", wines: ["Marlborough Sauvignon Blanc"] },
          { name: "Awatere Valley", grapes: ["Sauvignon Blanc","Riesling","Pinot Noir"], character: "Colder, windier, drier than Wairau with more austere mineral character. Higher acid, less tropical, more herb and flint. More structured Sauvignon Blanc with better aging potential. Vavasour, Yealands Estate.", wines: ["Awatere Sauvignon Blanc","Awatere Riesling"] },
          { name: "Southern Valleys (Brancott, Ben Morven)", grapes: ["Sauvignon Blanc","Pinot Noir"], character: "Elevated clay soils in the foothills. Richer, less aromatic Sauvignon Blanc. Brancott — where Montana planted New Zealand's first commercial Sauvignon Blanc vines in 1973.", wines: ["Southern Valleys Sauvignon Blanc"] },
        ]
      },
      centralotago: {
        label: "Central Otago", grapes: ["Pinot Noir","Riesling","Pinot Gris","Chardonnay"],
        character: "World's most southerly major wine region (45°S). Continental climate: extreme daily temperature range, cold nights, intense UV. Ancient schist soils. New Zealand's finest Pinot Noir: structured, mineral, spiced, with genuine aging potential.",
        wines: ["Central Otago Pinot Noir","Central Otago Riesling","Central Otago Pinot Gris"],
        subzones: [
          { name: "Bannockburn", grapes: ["Pinot Noir","Chardonnay"], character: "Warmest sub-zone on the Clutha River. Schist and clay soils. Richest, most muscular Central Otago Pinot Noir — yet still with mineral freshness. Felton Road (Blocks 3 & 5 are world-class), Mt Difficulty.", wines: ["Bannockburn Pinot Noir"] },
          { name: "Wanaka (Rippon)", grapes: ["Pinot Noir","Riesling","Osteiner"], character: "Lake Wanaka amphitheatre setting — one of the world's most photographed vineyards. Biodynamic. More savory and mineral Pinot Noir than Bannockburn. Riesling of extraordinary delicacy.", wines: ["Wanaka Pinot Noir","Wanaka Riesling"] },
          { name: "Gibbston Valley", grapes: ["Pinot Noir","Riesling","Pinot Gris"], character: "Highest altitude, coolest sub-zone in Central Otago. Most delicate and aromatic Pinot Noir. Gibbston Valley Winery, Peregrine Wines, Brennan Wines.", wines: ["Gibbston Pinot Noir","Gibbston Riesling"] },
        ]
      },
    }
  },
};
