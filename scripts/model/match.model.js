class Match {
  static all = [];
  constructor(date, clubA, clubB, reformateHour = true) {
    if (reformateHour) {
      date.setHours(13, 30, 0, 0);
    }
    this.isRecepteurA = clubA.startsWith("LIBERCOURT");
    this.club = this.isRecepteurA ? clubA : clubB;
    this.adversaire = this.isRecepteurA ? clubB : clubA;
    this.club_recepteur = clubA;
    this.date = date;
    this.dateFR = date.toLocaleDateString("fr", { dateStyle: "full" });
    this.players = [];
    this.absents = [];
    this.previsionnels = [];
    this.remplacants = [];
    this.renfortsAilleurs = [];
    if (this.isRecepteurA) {
      this.setRdv("09 h 00")
    }
    Match.all.push(this);
  }

  static simplifyClub(club) {
  const words = club.split(" ");
  const MAX_WORDS_KEPT_IN_CLUB = 3;
  return words
    .filter(
      (val, ind) => ind < MAX_WORDS_KEPT_IN_CLUB && !isNumeric(val) && !val.startsWith("(")
    ).join(" ");
}

  static nextMatch() {
    const today = new Date();

    return Match.all.find((el) => {
      return today.getTime() <= el.date.getTime();
    });
  }

  setScore(scorea, scoreb) {
    this.scoreClub = this.isRecepteurA ? scorea : scoreb;
    this.scoreAdversaire = this.isRecepteurA ? scoreb : scorea;
  }

  setDoubles(paire1, paire2) {
    const joueurs = this.players;
    if (paire1.length + paire2.length != joueurs.length) {
      throw new Error(
        "Le nombre de joueurs ne correspond pas aux doubles indiqués"
      );
    }
    if (paire1.length != 2 || paire2.length != 2) {
      throw new Error("Il faut 2 joueurs par paire de double");
    }
    const isWellRepart = joueurs.every(
      (el) => paire1.includes(el) || paire2.includes(el)
    );
    if (!isWellRepart) {
      throw new Error("Les joueurs du double doivent participer au match");
    }
    this.doubles = {paire1, paire2};
  }

  setPlayers(players) {
    this.players = players;
  }

  setPrevisionnels(players) {
    this.previsionnels = players;
  }

  setRenforts(players) {
    this.renfortsAilleurs = players;
  }

  setRemplacants(players) {
    this.remplacants = players;
  }

  setAbsents(absents) {
    this.absents = absents;
  }

  setRdv(rdv, salle = null) {
    this.rdv = rdv;
    this.salle = salle ?? "la salle";
  }
}
