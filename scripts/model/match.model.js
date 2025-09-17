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
    this.rdv = !this.isRecepteurA ? null : "09 h 00";
    Match.all.push(this);
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

  setPlayers(players) {
    this.players = players;
  }

  setPrevisionnels(players) {
    this.previsionnels = players;
  }

  setRemplacants(players) {
    this.remplacants = players;
  }

  setAbsents(absents) {
    this.absents = absents;
  }

  setRdv(rdv) {
    this.rdv = rdv;
  }
}
