class Match {
  static all = [];
  constructor(date, club, club_recepteur, reformateHour = true) {
    if (reformateHour) {
      date.setHours(13, 30, 0, 0);
    }
    this.adversaire = club;
    this.club = CLUB.LIBERCOURT;
    this.club_recepteur = club_recepteur;
    this.date = date;
    this.dateFR = date.toLocaleDateString("fr", { dateStyle: "full" });
    this.players = [];
    this.absents = [];
    this.previsionnels = [];
    this.remplacants = [];
    this.rdv = club === club_recepteur ? null : "9h à la salle";
    Match.all.push(this);
  }

  static nextMatch() {
    const today = new Date();

    return Match.all.find((el) => {
      return today.getTime() <= el.date.getTime();
    });
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
