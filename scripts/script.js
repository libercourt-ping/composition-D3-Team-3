let matchs = [];

async function getMatches() {
  const matches = await fetch("../json/matches.json")
    .then(async (res) => {
      if (!res.ok) {
        return await fetch("./json/matches.json").then((_res) => {
          if (!_res.ok) {
            throw new Error("Erreur de chargement du fichier");
          }
          return _res.json();
        });
      }
      return res.json();
    })
    .catch(() => {
      return getElements();
    });
  const isBlankOrNull = (el) =>
    el == null || (typeof el === "string" && el.length === 0);
  matchs = matches.data.map((el) => {
    const day = el.datereelle.substring(3, 5);
    const month = el.datereelle.substring(0, 2);
    const year = el.datereelle.substring(6);
    const finalDate = `${day}/${month}/${year}`;
    const match = new Match(new Date(finalDate), el.equa, el.equb);
    if (!isBlankOrNull(el.scorea) && !isBlankOrNull(el.scoreb)) {
      const scorea = parseInt(el.scorea, 10);
      const scoreb = parseInt(el.scoreb, 10);
      
      match.setScore(scorea, scoreb);
    }
    return match;
  });
  setConfig(matchs);
}

window.onload = function () {
  const isMobile = window.innerWidth <= 768;

  d(
    async () => {
      await getMatches();

      if (isMobile) {
        initMobile();
      } else {
        init();
      }
    },
    async (res) => {
      localStorage.clear();
      const a = prompt("Identifiant de connexion");
      const s = a.toLocaleLowerCase().replaceAll(" ", "");
      const [c, m] = s.split("/");
      const kc = "bGliZXJjb3VydA==";
      const km = "ZDNlMw==";
      const _c = dcr(c);
      const _m = dcr(m);

      if (_c !== kc || _m !== km) {
        matchs = [];
        joueurs = {};
        CLUB = {};
        DAY = {};
        document.body.remove();
      } else {
        localStorage.setItem(res, true);
        await getMatches();
        if (isMobile) {
          initMobile();
        } else {
          init();
        }
      }
    }
  );
};
function getElements() {
  return {
    data: [
      {
        datereelle: "01/01/2026",
        equa: "Moi",
        equb: "Eux",
        scorea: "0",
        scoreb: "0",
      },
      {
        datereelle: "02/01/2026",
        equa: "Moi",
        equb: "Eux",
        scorea: "0",
        scoreb: "0",
      },
      {
        datereelle: "03/01/2026",
        equa: "Moi",
        equb: "Eux",
        scorea: "0",
        scoreb: "0",
      },
      {
        datereelle: "04/01/2026",
        equa: "Moi",
        equb: "Eux",
        scorea: "0",
        scoreb: "0",
      },
      {
        datereelle: "05/01/2026",
        equa: "Moi",
        equb: "Eux",
        scorea: "0",
        scoreb: "0",
      },
      {
        datereelle: "06/01/2026",
        equa: "Moi",
        equb: "Eux",
        scorea: "0",
        scoreb: "0",
      },
      {
        datereelle: "07/01/2026",
        equa: "Moi",
        equb: "Eux",
        scorea: "0",
        scoreb: "0",
      },
    ],
  };
}
