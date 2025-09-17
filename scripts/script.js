window.onload = function () {
  const isMobile = window.innerWidth <= 768;

  d(
    () => {
      if (isMobile) {
        initMobile();
      } else {
        init();
      }
    },
    (res) => {
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
        Joueurs = {};
        CLUB = {};
        DAY = {};
        document.body.remove();
      } else {
        localStorage.setItem(res, true);
        if (isMobile) {
          initMobile();
        } else {
          init();
        }
      }
    }
  );
};
