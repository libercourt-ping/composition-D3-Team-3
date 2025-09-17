var Joueurs = {
  NATHALIE: "Nathalie MILLE",
  VINCENT: "Vincent PIERSON",
  YOHAN: "Yohan GUILBERT",
  CEDRIC: "Cédric BOUQUET",
  QUENTIN: "Quentin DUBRULLE",
  HAMED: "Hamed ATMANE",
  FRED: "Frédéric BERTOUX",
  RENFORT: "Jeune Equipe Ludo (imposé)",
};

function setConfig(matchs) {
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

  matchs[2].setPlayers([Joueurs.CEDRIC, Joueurs.YOHAN, Joueurs.NATHALIE, Joueurs.RENFORT]);
  matchs[2].setAbsents([Joueurs.VINCENT, Joueurs.QUENTIN, Joueurs.HAMED]);
  matchs[2].setRemplacants([Joueurs.FRED]);
  matchs[2].setPrevisionnels([]);
  matchs[2].setRdv("8h40 à la salle");

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
}
