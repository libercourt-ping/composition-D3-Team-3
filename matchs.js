var matchs = [
  new Match(DAY.SEM1, CLUB.BET, CLUB.BET),
  new Match(DAY.SEM2, CLUB.ARL, CLUB.LIB),
  new Match(DAY.SEM3, CLUB.LEF, CLUB.LEF),
  new Match(DAY.SEM4, CLUB.DUI, CLUB.LIB),
  new Match(DAY.SEM5, CLUB.TIL, CLUB.TIL),
  new Match(DAY.SEM6, CLUB.MEU, CLUB.MEU),
  new Match(DAY.SEM7, CLUB.HUL, CLUB.LIB),
];

matchs[0].setPlayers([
  Joueurs.CEDRIC,
  Joueurs.VINCENT,
  Joueurs.YOHAN,
  Joueurs.FRED,
]);
matchs[0].setAbsents([Joueurs.HAMED, Joueurs.QUENTIN, Joueurs.NATHALIE]);
matchs[0].setRdv("8h10 à la salle");

matchs[1].setPlayers([Joueurs.CEDRIC, Joueurs.VINCENT, Joueurs.YOHAN, Joueurs.FRED]);
matchs[1].setAbsents([Joueurs.HAMED, Joueurs.NATHALIE, Joueurs.QUENTIN]);

matchs[2].setPlayers([Joueurs.VINCENT, Joueurs.CEDRIC]);
matchs[2].setAbsents([Joueurs.HAMED]);

matchs[3].setPlayers([Joueurs.CEDRIC, Joueurs.NATHALIE]);
matchs[3].setPrevisionnels([Joueurs.QUENTIN, Joueurs.YOHAN]);
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
