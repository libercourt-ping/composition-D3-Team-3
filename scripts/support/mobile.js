function initSupportMobile(doc) {
  const div = document.createElement("div");
  cls(div, "flex w-full items-center justify-between bg-gray-300");

  const divLogo = document.createElement("div");
  divLogo.id = "logo-mobile";
  cls(
    divLogo,
    "flex items-center justify-start ml-4 w-12 h-12 rounded-full p-2 border-2"
  );

  const img = document.createElement("img");
  img.src = "./images/logo.png";
  img.width = "50";
  img.height = "50";

  div.appendChild(divLogo);

  const div2 = document.createElement("div");
  cls(div2, "flex items-center justify-center w-full");

  const subDiv2 = document.createElement("div");
  cls(subDiv2, "flex flex-col items-center justify-center");
  subDiv2.id = "title-mobile";
  const h3 = document.createElement("h3");
  const h4 = document.createElement("h4");
  h3.textContent = "Planning - Ping pong";
  h4.textContent = "Saison 2025-2026, phase 1";
  subDiv2.appendChild(h3);
  subDiv2.appendChild(h4);

  div2.appendChild(subDiv2);
  div.appendChild(div2);
  doc.appendChild(div);

  const divContent = document.createElement("div");
  cls(divContent, "flex flex-col h-[85vh] w-full overflow-auto mt-2 py-2 px-8");
  doc.appendChild(divContent);
  return divContent;
}

function initMobile() {
  d(() => {
    const doc = document.getElementById("container");
    doc.style.display = "flex";
    const content = initSupportMobile(doc);
    const nextMatch = Match.nextMatch();
    for (let i = 0; i < matchs.length; ++i) {
      const match = matchs[i];
      const isFinishMatch = match.date.getTime() < nextMatch.date.getTime();
      const div = document.createElement("div");
      const marginTop = i === 0 ? "mt-2" : "mt-4";
      const disabledClass = isFinishMatch ? 'disabled-match' : 'enabled';
      cls(div, `${marginTop} w-full flex flex-col border rounded teams ${disabledClass}`);
      const divTitle = document.createElement("div");
      cls(divTitle, "flex flex-col w-full items-start justify-center p-1");

      div.appendChild(divTitle);
      const spanTitle1 = document.createElement("div");
      const spanTitle2 = document.createElement("div");
      const spanRDV = document.createElement("span");
      const adversaire = match.adversaire;
      const recepteur = match.club_recepteur;
      const isAdvRec = adversaire.nom === recepteur.nom;
      spanTitle1.textContent = match.dateFR;
      spanTitle2.textContent = adversaire.nom;
      spanTitle2.classList.add(
        isAdvRec ? "exterieur-mobile" : "interne-mobile"
      );
      spanRDV.textContent = `RDV : ${match.rdv ?? "À définir"}`;
      cls(spanTitle1, "title italic");
      cls(spanTitle2, "title");
      cls(spanRDV, "rdv");
      divTitle.appendChild(spanTitle1);
      divTitle.appendChild(spanTitle2);
      divTitle.appendChild(spanRDV);

      if (nextMatch.dateFR === match.dateFR) {
        cls(spanTitle1, "next-match");
        cls(spanTitle2, "next-match");
      }
      const classDiv =
        "flex flex-col w-full items-center justify-start relative py-2";

      const divPlayers = document.createElement("div");
      div.appendChild(divPlayers);
      cls(divPlayers, "flex flex-row items-stretch space-around");
      if (match.players.length > 0 || match.previsionnels.length > 0) {
        const divJoueursPresents = document.createElement("div");
        cls(divJoueursPresents, classDiv + " possibles");
        if (match.players.length > 0) {
          const spanPresents = document.createElement("span");
          spanPresents.textContent = "Présents";
          cls(spanPresents, "presents font-bold");
          divJoueursPresents.appendChild(spanPresents);
          for (let jPr = 0; jPr < match.players.length; ++jPr) {
            const jp = match.players[jPr];
            const joueur = document.createElement("span");
            cls(joueur, "italic");
            joueur.textContent = jp.split(" ")[0];
            divJoueursPresents.appendChild(joueur);
          }
          divPlayers.appendChild(divJoueursPresents);
        }
        if (match.previsionnels.length > 0) {
          const spanPrevisionnels = document.createElement("span");
          spanPrevisionnels.textContent = "Prévisionnels";
          cls(spanPrevisionnels, "previsionnels font-bold");
          divJoueursPresents.appendChild(spanPrevisionnels);
          for (let jPr = 0; jPr < match.previsionnels.length; ++jPr) {
            const jp = match.previsionnels[jPr];
            const joueur = document.createElement("span");
            cls(joueur, "italic");
            joueur.textContent = jp.split(" ")[0];
            divJoueursPresents.appendChild(joueur);
          }
        }
      }

      if (match.remplacants.length > 0 || match.absents.length > 0) {
        const divJoueursRemplacants = document.createElement("div");
        cls(divJoueursRemplacants, classDiv + " impossibles");
        if (match.remplacants.length > 0) {
          const spanRemplacants = document.createElement("span");
          spanRemplacants.textContent = "Remplaçants";
          cls(spanRemplacants, "remplacants font-bold");
          divJoueursRemplacants.appendChild(spanRemplacants);
          for (let jPr = 0; jPr < match.remplacants.length; ++jPr) {
            const jp = match.remplacants[jPr];
            const joueur = document.createElement("span");
            cls(joueur, "italic");
            joueur.textContent = jp.split(" ")[0];
            divJoueursRemplacants.appendChild(joueur);
          }
        }

        if (match.absents.length > 0) {
          const spanAbsents = document.createElement("span");
          spanAbsents.textContent = "Absents";
          cls(spanAbsents, "absents font-bold");
          divJoueursRemplacants.appendChild(spanAbsents);
          for (let jPr = 0; jPr < match.absents.length; ++jPr) {
            const jp = match.absents[jPr];
            const joueur = document.createElement("span");
            cls(joueur, "italic");
            joueur.textContent = jp.split(" ")[0];
            divJoueursRemplacants.appendChild(joueur);
          }
        }
        divPlayers.appendChild(divJoueursRemplacants);
      }

      content.appendChild(div);
    }
  });
}
