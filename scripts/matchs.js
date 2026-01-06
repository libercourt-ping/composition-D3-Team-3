class Joueur {
  /**
   *
   * @param {string} nom
   * @param {string} prenom
   * @param {boolean} [teammate=true]
   * @param {boolean} [hasRealPlayers=true]
   */
  constructor(nom, prenom, teammate = true, hasRealPlayers = true) {
    this.nom = nom;
    this.prenom = prenom;
    this.teammate = teammate;
    this.hasRealPlayers = hasRealPlayers;
    this.nomComplet = `${prenom} ${nom}`;
  }
}

const joueurs = {
  // CEDRIC: new Joueur("BOUQUET", "Cédric"),
  // VINCENT: new Joueur("PIERSON", "Vincent"),
  // YOHAN: new Joueur("GUILBERT", "Yohan"),
  // HAMED: new Joueur("ATMANE", "Hamed"),
  // STEEVE: new Joueur("MEQUIGNON", "Steeve"),
  // NATHALIE: new Joueur("MILLE", "Nathalie", true, false),
  // LEO: new Joueur("BENOÎT", "Léo", false),
  // YOLAN: new Joueur("/", "Yolan", false),
  // MATHIS: new Joueur("DUBRULLE", "Mathis", false),
};

/**
 *
 * @param {Match[]} matchs
 */
function setConfig(matchs) {
  if (matchs.length === 0) {
    console.log("Aucun match prévu pour l'instant")
    return;
  }
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

  matchs[4].setPlayers([
    joueurs.CEDRIC,
    joueurs.YOHAN,
    joueurs.VINCENT,
    joueurs.HAMED,
  ]);
  matchs[4].setAbsents([
    joueurs.LEO,
    joueurs.NATHALIE,
    joueurs.MATHIS,
    joueurs.YOLAN,
  ]);
  matchs[4].setRemplacants([joueurs.STEEVE]);
  matchs[4].setGlobalDoubles(
    [joueurs.YOHAN, joueurs.VINCENT],
    [joueurs.CEDRIC, joueurs.HAMED],
  );

  matchs[5].setPlayers([
    joueurs.CEDRIC,
    joueurs.YOHAN,
    joueurs.HAMED,
    joueurs.STEEVE,
  ]);
  matchs[5].setRemplacants([joueurs.VINCENT]);
  matchs[5].setAbsents([
    joueurs.LEO,
    joueurs.NATHALIE,
    joueurs.MATHIS,
    joueurs.YOLAN,
  ]);
  matchs[5].setGlobalDoubles(
    [joueurs.YOHAN, joueurs.CEDRIC],
    [joueurs.HAMED, joueurs.STEEVE],
  );
  matchs[5].setRdv("8h10");

  matchs[6].setPlayers([
    joueurs.STEEVE,
    joueurs.CEDRIC,
    joueurs.YOHAN,
    joueurs.HAMED,
  ]);
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
