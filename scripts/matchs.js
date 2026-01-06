class Joueurs {
  constructor(nom, prenom, teammate) {
    this.nom = nom;
    this.prenom = prenom;
    this.teammate = teammate;
    this.nomComplet = `${prenom} ${nom}`;
  }
}

const joueurs = {
  NATHALIE: new Joueurs("MILLE", "Nathalie", true),
  VINCENT: new Joueurs("PIERSON", "Vincent", true),
  YOHAN: new Joueurs("GUILBERT", "Yohan", true),
  CEDRIC: new Joueurs("BOUQUET", "Cédric", true),
  QUENTIN: new Joueurs("DUBRULLE", "Quentin", true),
  HAMED: new Joueurs("ATMANE", "Hamed", true),
  FRED: new Joueurs("BERTOUX", "Frédéric", true),
  MATHEO: new Joueurs("DERVAUX", "Mathéo", false),
  LEO: new Joueurs("BENOÎT", "Léo", false),
  HUGO: new Joueurs("DUBRULLE", "Hugo", false),
  STEVE: new Joueurs("MEQUIGNON", "Steeve", false),
  KAHYS: new Joueurs("?", "Kahys", false)
};

function setConfig(matchs) {
  matchs[0].setPlayers([
    joueurs.CEDRIC,
    joueurs.VINCENT,
    joueurs.YOHAN,
    joueurs.FRED,
  ]);
  matchs[0].setAbsents([
    joueurs.HAMED,
    joueurs.QUENTIN,
    joueurs.NATHALIE,
    joueurs.MATHEO,
    joueurs.HUGO,
    joueurs.LEO,
    joueurs.STEVE,
    joueurs.KAHYS
  ]);
  matchs[0].setDoubles(
    [joueurs.CEDRIC, joueurs.FRED],
    [joueurs.VINCENT, joueurs.YOHAN]
  );
  matchs[0].setRdv("08 h 10");

  matchs[1].setPlayers([
    joueurs.CEDRIC,
    joueurs.VINCENT,
    joueurs.YOHAN,
    joueurs.FRED,
  ]);
  matchs[1].setAbsents([
    joueurs.HAMED,
    joueurs.NATHALIE,
    joueurs.QUENTIN,
    joueurs.MATHEO,
    joueurs.HUGO,
    joueurs.LEO,
    joueurs.STEVE,
    joueurs.KAHYS
  ]);
  matchs[1].setDoubles(
    [joueurs.CEDRIC, joueurs.YOHAN],
    [joueurs.VINCENT, joueurs.FRED]
  );

  matchs[2].setPlayers([
    joueurs.CEDRIC,
    joueurs.YOHAN,
    joueurs.MATHEO,
    joueurs.LEO,
  ]);
  matchs[2].setAbsents([joueurs.VINCENT, joueurs.HAMED, joueurs.NATHALIE, joueurs.STEVE, joueurs.HUGO, joueurs.KAHYS]);
  matchs[2].setRemplacants([joueurs.FRED]);
  matchs[2].setRenforts([joueurs.QUENTIN]);
  matchs[2].setPrevisionnels([]);
  matchs[2].setDoubles(
    [joueurs.CEDRIC, joueurs.YOHAN],
    [joueurs.MATHEO, joueurs.LEO]
  );
  matchs[2].setRdv("08 h 40");

  matchs[3].setPlayers([
    joueurs.CEDRIC,
    joueurs.NATHALIE,
    joueurs.FRED,
    joueurs.YOHAN,
  ]);
  matchs[3].setPrevisionnels([]);
  matchs[3].setRemplacants([]);
  matchs[3].setAbsents([
    joueurs.VINCENT,
    joueurs.HAMED,
    joueurs.QUENTIN,
    joueurs.MATHEO,
    joueurs.HUGO,
    joueurs.LEO,
    joueurs.STEVE,
    joueurs.KAHYS
  ]);
  matchs[3].setDoubles(
    [joueurs.CEDRIC, joueurs.YOHAN],
    [joueurs.NATHALIE, joueurs.FRED]
  );

  matchs[4].setPlayers([
    joueurs.VINCENT,
    joueurs.CEDRIC,
    joueurs.YOHAN,
    joueurs.HUGO,
  ]);
  matchs[4].setPrevisionnels([]);
  matchs[4].setRemplacants([]);
  matchs[4].setAbsents([
    joueurs.NATHALIE,
    joueurs.HAMED,
    joueurs.MATHEO,
    joueurs.HUGO,
    joueurs.FRED,
    joueurs.LEO,
    joueurs.QUENTIN,
    joueurs.STEVE,
    joueurs.KAHYS
  ]);
  matchs[4].setDoubles(
    [joueurs.CEDRIC, joueurs.HUGO],
    [joueurs.VINCENT, joueurs.YOHAN]
  );
  matchs[4].setRdv("08 h 15");

  matchs[5].setPlayers([joueurs.VINCENT, joueurs.YOHAN, joueurs.STEVE, joueurs.KAHYS]);
  matchs[5].setPrevisionnels([]);
  matchs[5].setAbsents([
    joueurs.FRED,
    joueurs.HAMED,
    joueurs.MATHEO,
    joueurs.HUGO,
    joueurs.LEO,
    joueurs.CEDRIC,
    joueurs.NATHALIE, 
    joueurs.QUENTIN
  ]);
  matchs[5].setRdv("08 h 15");
  matchs[5].setDoubles([joueurs.VINCENT, joueurs.YOHAN],[joueurs.STEVE, joueurs.KAHYS]);

  matchs[6].setPlayers([joueurs.VINCENT, joueurs.CEDRIC, joueurs.YOHAN, joueurs.HUGO]);
  matchs[6].setAbsents([
    joueurs.MATHEO,
    joueurs.FRED,
    joueurs.LEO,
    joueurs.NATHALIE,
    joueurs.KAHYS,
    joueurs.STEVE,
    joueurs.HAMED,
    joueurs.QUENTIN
  ]);
  matchs[6].setRdv("08 h 40", "Salle LANGLET, complexe Antoine Victor, Libercourt");
  matchs[6].setDoubles([joueurs.VINCENT, joueurs.YOHAN],[joueurs.CEDRIC, joueurs.HUGO]);
}
