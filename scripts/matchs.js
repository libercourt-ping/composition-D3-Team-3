var Joueurs = {
  NATHALIE: "Nathalie MILLE",
  VINCENT: "Vincent PIERSON",
  YOHAN: "Yohan GUILBERT",
  CEDRIC: "Cédric BOUQUET",
  QUENTIN: "Quentin DUBRULLE",
  HAMED: "Hamed ATMANE",
  FRED: "Frédéric BERTOUX",
};

var CLUB = {
  LIBERCOURT: new Club("Libercourt", "Libercourt CP"),
  BETHUNE: new Club("Béthune", "Béthune-Beuvry ASTT"),
  DUISANS: new Club("Duisans", "Duisans ES"),
  TILLOY_MOFFlAINES: new Club("Tilloy les Mofflaines", "Tilloy MOFF TT"),
  HULLUCH: new Club("Hulluch", "Haisnes-Hulluch TT"),
  LEFOREST: new Club("Leforest", "Leforest TT"),
  ARLEUX_GOHELLE: new Club("Arleux en Gohelle", "Arleux/Gohelle"),
  MEURCHIN: new Club("Meurchin", "Meurchin Espoir"),
};

var DAY = {
  SEMAINE1: new Date("09/21/2025"),
  SEMAINE2: new Date("09/28/2025"),
  SEMAINE3: new Date("10/12/2025"),
  SEMAINE4: new Date("11/16/2025"),
  SEMAINE5: new Date("11/30/2025"),
  SEMAINE6: new Date("12/14/2025"),
  SEMAINE7: new Date("01/11/2026"),
};

var matchs = [
  new Match(DAY.SEMAINE1, CLUB.BETHUNE, CLUB.BETHUNE),
  new Match(DAY.SEMAINE2, CLUB.ARLEUX_GOHELLE, CLUB.LIBERCOURT),
  new Match(DAY.SEMAINE3, CLUB.LEFOREST, CLUB.LEFOREST),
  new Match(DAY.SEMAINE4, CLUB.DUISANS, CLUB.LIBERCOURT),
  new Match(DAY.SEMAINE5, CLUB.TILLOY_MOFFlAINES, CLUB.TILLOY_MOFFlAINES),
  new Match(DAY.SEMAINE6, CLUB.MEURCHIN, CLUB.MEURCHIN),
  new Match(DAY.SEMAINE7, CLUB.HULLUCH, CLUB.LIBERCOURT),
];

matchs[0].setPlayers([
  Joueurs.CEDRIC,
  Joueurs.VINCENT,
  Joueurs.YOHAN,
  Joueurs.FRED,
]);
matchs[0].setAbsents([Joueurs.HAMED, Joueurs.QUENTIN, Joueurs.NATHALIE]);
matchs[0].setRdv("8h10 à la salle");

matchs[1].setPlayers([
  Joueurs.CEDRIC,
  Joueurs.VINCENT,
  Joueurs.YOHAN,
  Joueurs.FRED,
]);
matchs[1].setAbsents([Joueurs.HAMED, Joueurs.NATHALIE, Joueurs.QUENTIN]);

matchs[2].setPlayers([Joueurs.CEDRIC, Joueurs.FRED, Joueurs.YOHAN]);
matchs[2].setAbsents([Joueurs.VINCENT, Joueurs.QUENTIN, Joueurs.HAMED]);
matchs[2].setRemplacants([]);
matchs[2].setPrevisionnels([Joueurs.NATHALIE]);
matchs[2].setRdv("8h30 à la salle");

matchs[3].setPlayers([Joueurs.CEDRIC, Joueurs.NATHALIE]);
matchs[3].setPrevisionnels([Joueurs.QUENTIN, Joueurs.YOHAN]);
matchs[3].setRemplacants([Joueurs.FRED]);
matchs[3].setAbsents([Joueurs.VINCENT, Joueurs.HAMED]);

matchs[4].setPlayers([Joueurs.VINCENT, Joueurs.CEDRIC]);
matchs[4].setAbsents([Joueurs.HAMED]);

matchs[5].setPlayers([Joueurs.VINCENT]);
matchs[5].setAbsents([Joueurs.HAMED]);
matchs[5].setRemplacants([Joueurs.CEDRIC]);

matchs[6].setPlayers([Joueurs.VINCENT]);
matchs[6].setPrevisionnels([Joueurs.HAMED]);
matchs[6].setAbsents([]);
matchs[6].setRemplacants([Joueurs.CEDRIC]);
