class Joueurs {
  constructor(nom, prenom, teammate) {
    this.nom = nom;
    this.prenom = prenom;
    this.teammate = teammate;
    this.nomComplet = `${prenom} ${nom}`;
  }
}

const joueurs = {
  CEDRIC: new Joueurs("BOUQUET", "Cédric", true),
  NATHALIE: new Joueurs("MILLE", "Nathalie", true),
  VINCENT: new Joueurs("PIERSON", "Vincent", true),
  YOHAN: new Joueurs("GUILBERT", "Yohan", true),
  HAMED: new Joueurs("ATMANE", "Hamed", true),
  STEEVE: new Joueurs("MEQUIGNON", "Steeve", true),
  LEO: new Joueurs("BENOÎT", "Léo", false),
  YOLAN: new Joueurs("/", "Yolan", false),
  MATHIS: new Joueurs("DUBRULLE", "Mathis", false),
};

function setConfig(matchs) {
  matchs[0].setPlayers([
    joueurs.YOLAN,
    joueurs.MATHIS,
    joueurs.YOHAN,
    joueurs.STEEVE,
  ]);
  matchs[0].setAbsents([
    joueurs.CEDRIC,
    joueurs.NATHALIE,
    joueurs.LEO,
    joueurs.VINCENT,
    joueurs.HAMED,
  ]);
  matchs[0].setDoubles(
    [joueurs.YOHAN, joueurs.STEEVE],
    [joueurs.MATHIS, joueurs.YOLAN],
  );

  matchs[1].setPlayers([
    joueurs.LEO,
    joueurs.VINCENT,
    joueurs.CEDRIC,
    joueurs.HAMED,
  ]);
  matchs[1].setAbsents([
    joueurs.YOHAN,
    joueurs.STEEVE,
    joueurs.NATHALIE,
    joueurs.MATHIS,
    joueurs.YOLAN,
  ]);
  matchs[1].setDoubles(
    [joueurs.CEDRIC, joueurs.VINCENT],
    [joueurs.HAMED, joueurs.LEO],
  );

  matchs[2].setPlayers([
    joueurs.VINCENT,
    joueurs.CEDRIC,
    joueurs.STEEVE,
    joueurs.HAMED,
  ]);
  matchs[2].setAbsents([
    joueurs.YOHAN,
    joueurs.LEO,
    joueurs.NATHALIE,
    joueurs.MATHIS,
    joueurs.YOLAN,
  ]);
  matchs[2].setDoubles(
    [joueurs.CEDRIC, joueurs.VINCENT],
    [joueurs.STEEVE, joueurs.HAMED],
  );

  matchs[3].setPlayers([
    joueurs.VINCENT,
    joueurs.STEEVE,
    joueurs.HAMED,
    joueurs.YOHAN,
  ]);
  matchs[3].setAbsents([
    joueurs.CEDRIC,
    joueurs.LEO,
    joueurs.NATHALIE,
    joueurs.MATHIS,
    joueurs.YOLAN,
  ]);
  matchs[3].setDoubles(
    [joueurs.YOHAN, joueurs.VINCENT],
    [joueurs.STEEVE, joueurs.HAMED],
  );
  matchs[3].setRdv("8h30");

  matchs[4].setPlayers([joueurs.CEDRIC, joueurs.YOHAN, joueurs.VINCENT]);
  matchs[4].setPrevisionnels([joueurs.STEEVE]);
  matchs[4].setAbsents([
    joueurs.LEO,
    joueurs.NATHALIE,
    joueurs.MATHIS,
    joueurs.YOLAN,
  ]);
  matchs[4].setRemplacants([joueurs.HAMED]);
  matchs[4].setGlobalDoubles(
    [joueurs.YOHAN, joueurs.VINCENT],
    [joueurs.CEDRIC, joueurs.STEEVE],
  );

  matchs[5].setPlayers([joueurs.CEDRIC, joueurs.YOHAN, joueurs.VINCENT]);
  matchs[5].setPrevisionnels([joueurs.HAMED]);
  matchs[5].setAbsents([
    joueurs.STEEVE,
    joueurs.LEO,
    joueurs.NATHALIE,
    joueurs.MATHIS,
    joueurs.YOLAN,
  ]);
  matchs[5].setGlobalDoubles(
    [joueurs.HAMED, joueurs.CEDRIC],
    [joueurs.VINCENT, joueurs.YOHAN],
  );
  matchs[5].setRdv("8h15");

  matchs[6].setPlayers([joueurs.STEEVE, joueurs.CEDRIC, joueurs.YOHAN]);
  matchs[6].setPrevisionnels([joueurs.HAMED]);
  matchs[6].setAbsents([
    joueurs.VINCENT,
    joueurs.LEO,
    joueurs.YOLAN,
    joueurs.MATHIS,
    joueurs.NATHALIE,
  ]);

  matchs[6].setGlobalDoubles(
    [joueurs.CEDRIC, joueurs.YOHAN],
    [joueurs.HAMED, joueurs.STEEVE],
  );
}
