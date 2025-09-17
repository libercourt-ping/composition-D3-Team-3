var Joueurs = {
  NATHALIE: "Nathalie MILLE",
  VINCENT: "Vincent PIERSON",
  YOHAN: "Yohan GUILBERT",
  CEDRIC: "Cédric BOUQUET",
  QUENTIN: "Quentin DUBRULLE",
  HAMED: "Hamed ATMANE",
  FRED: "Frédéric BERTOUX",
  RENFORT: "Mathéo DERVAUX",
  RENFORT2: "Léo BENOÎT",
};

function setConfig(matchs) {
  matchs[0].setPlayers([
    Joueurs.CEDRIC,
    Joueurs.VINCENT,
    Joueurs.YOHAN,
    Joueurs.FRED,
  ]);
  matchs[0].setAbsents([Joueurs.HAMED, Joueurs.QUENTIN, Joueurs.NATHALIE]);
  matchs[0].setRdv("08 h 10");

  matchs[1].setPlayers([
    Joueurs.CEDRIC,
    Joueurs.VINCENT,
    Joueurs.YOHAN,
    Joueurs.FRED,
  ]);
  matchs[1].setAbsents([Joueurs.HAMED, Joueurs.NATHALIE, Joueurs.QUENTIN]);

  matchs[2].setPlayers([
    Joueurs.CEDRIC,
    Joueurs.YOHAN,
    Joueurs.RENFORT,
    Joueurs.RENFORT2,
  ]);
  matchs[2].setAbsents([
    Joueurs.VINCENT,
    Joueurs.QUENTIN,
    Joueurs.HAMED,
    Joueurs.NATHALIE,
  ]);
  matchs[2].setRemplacants([Joueurs.FRED]);
  matchs[2].setPrevisionnels([]);
  matchs[2].setRdv("08 h 40");
  
  matchs[3].setPlayers([Joueurs.CEDRIC, Joueurs.NATHALIE]);
  matchs[3].setPrevisionnels([Joueurs.QUENTIN]);
  matchs[3].setRemplacants([Joueurs.FRED, Joueurs.YOHAN]);
  matchs[3].setAbsents([Joueurs.VINCENT, Joueurs.HAMED]);
  
  matchs[4].setPlayers([Joueurs.VINCENT, Joueurs.CEDRIC]);
  matchs[4].setAbsents([Joueurs.HAMED]);
  matchs[4].setRdv("08 h 20");
  
  matchs[5].setPlayers([Joueurs.VINCENT]);
  matchs[5].setAbsents([Joueurs.HAMED]);
  matchs[5].setRemplacants([Joueurs.CEDRIC]);
//   matchs[5].setRdv("08 h 20");

  matchs[6].setPlayers([Joueurs.VINCENT]);
  matchs[6].setPrevisionnels([Joueurs.HAMED]);
  matchs[6].setAbsents([]);
  matchs[6].setRemplacants([Joueurs.CEDRIC]);
}
