class Match {
  /**
   * @type {Match[]}
   */
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
      this.setRdv("09 h 00");
    }
    Match.all.push(this);
  }

  /**
   *
   * @param {string} club
   * @returns
   */
  static simplifyClub(club) {
    const words = club.split(" ");
    const MAX_WORDS_KEPT_IN_CLUB = 3;
    return words
      .filter(
        (val, ind) =>
          ind < MAX_WORDS_KEPT_IN_CLUB &&
          !isNumeric(val) &&
          !val.startsWith("("),
      )
      .join(" ");
  }

  /**
   * récupère le prochain match à jouer si prévu
   * @returns {Match | undefined}
   */
  static nextMatch() {
    const today = new Date();

    return Match.all.find((el) => {
      return today.getTime() <= el.date.getTime();
    });
  }

  /**
   *
   * @param {number} scorea
   * @param {number} scoreb
   */
  setScore(scorea, scoreb) {
    this.scoreClub = this.isRecepteurA ? scorea : scoreb;
    this.scoreAdversaire = this.isRecepteurA ? scoreb : scorea;
  }

  /**
   *
   * @param {Joueur[]} paire1
   * @param {Joueur[]} paire2
   */
  setDoubles(paire1, paire2) {
    const joueurs = this.players;
    if (paire1.length + paire2.length != joueurs.length) {
      throw new Error(
        "Le nombre de joueurs ne correspond pas aux doubles indiqués",
      );
    }
    if (paire1.length != 2 || paire2.length != 2) {
      throw new Error("Il faut 2 joueurs par paire de double");
    }
    const isWellRepart = joueurs.every(
      (el) => paire1.includes(el) || paire2.includes(el),
    );
    if (!isWellRepart) {
      throw new Error("Les joueurs du double doivent participer au match");
    }
    this.doubles = { paire1, paire2 };
  }

  /**
   *
   * @param {Joueur[]} paire1
   * @param {Joueur[]} paire2
   */
  setDoublesPrevisionnels(paire1, paire2) {
    const joueurs = this.previsionnels;
    if (paire1.length + paire2.length != joueurs.length) {
      throw new Error(
        "Le nombre de joueurs ne correspond pas aux doubles indiqués",
      );
    }
    if (paire1.length != 2 || paire2.length != 2) {
      throw new Error("Il faut 2 joueurs par paire de double");
    }
    const isWellRepart = joueurs.every(
      (el) => paire1.includes(el) || paire2.includes(el),
    );
    if (!isWellRepart) {
      throw new Error("Les joueurs du double doivent participer au match");
    }
    this.doubles = { paire1, paire2 };
  }

  /**
   *
   * @param {Joueur[]} paire1
   * @param {Joueur[]} paire2
   */
  setGlobalDoubles(paire1, paire2) {
    const joueurs = [...this.previsionnels, ...this.players];
    if (paire1.length + paire2.length != joueurs.length) {
      throw new Error(
        "Le nombre de joueurs ne correspond pas aux doubles indiqués",
      );
    }
    if (paire1.length != 2 || paire2.length != 2) {
      throw new Error("Il faut 2 joueurs par paire de double");
    }
    const isWellRepart = joueurs.every(
      (el) => paire1.includes(el) || paire2.includes(el),
    );
    if (!isWellRepart) {
      throw new Error("Les joueurs du double doivent participer au match");
    }
    this.doubles = { paire1, paire2 };
  }

  /**
   *
   * @param {Joueur[]} absents
   */
  setPlayers(players) {
    this.players = players;
  }

  /**
   *
   * @param {Joueur[]} absents
   */
  setPrevisionnels(players) {
    this.previsionnels = players;
  }

  /**
   *
   * @param {Joueur[]} absents
   */
  setRenforts(players) {
    this.renfortsAilleurs = players;
  }

  /**
   *
   * @param {Joueur[]} absents
   */
  setRemplacants(players) {
    this.remplacants = players;
  }

  /**
   *
   * @param {Joueur[]} absents
   */
  setAbsents(absents) {
    this.absents = absents;
  }

  setRdv(rdv, salle = null) {
    this.rdv = rdv;
    this.salle = salle ?? "la salle";
  }
}
