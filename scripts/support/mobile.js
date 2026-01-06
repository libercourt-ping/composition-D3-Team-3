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

  // Initialisation du chat
  const qui = localStorage.getItem("ACCOUNT");
  if (!qui) {
    const acc = prompt("Votre prénom : ");
    localStorage.setItem("ACCOUNT", acc);
  }
  const account = localStorage.getItem("ACCOUNT");
  const messager = document.createElement("div");
  messager.textContent = account.substring(0, 3);
  const chat = document.createElement("div");
  const messages = document.createElement("div");
  cls(messages, "px-4 py-2 h-[50vh] overflow-auto mb-3");
  messages.id = "messages";
  cls(
    messager,
    "absolute flex items-center text-base justify-center bottom-1 right-1 w-10 h-10 rounded-full chat cursor-pointer border-black border-2 border-dotted select-none"
  );
  const width = (95 * window.innerWidth) / 100;
  cls(
    chat,
    `min-w-[${width}px] max-h-[80vh] h-[60vh] bottom-8 right-0 msg rounded-lg`
  );

  doc.appendChild(messager);
  messager.appendChild(chat);
  const h4Chat = document.createElement("h5");
  h4Chat.textContent = "Chat Ping";
  cls(h4Chat, "text-white");
  chat.appendChild(h4Chat);
  chat.appendChild(messages);
  const form = document.createElement("form");
  const divSaisie = document.createElement("div");
  const saisie = document.createElement("textarea");
  cls(saisie, "resize-none border");
  saisie.id = "entry";
  const submit = document.createElement("button");
  cls(submit, "border rounded-sm p-2 submit");
  submit.type = "submit";
  submit.textContent = "Envoyer";
  divSaisie.appendChild(saisie);
  divSaisie.appendChild(submit);
  cls(divSaisie, "flex w-full items-center py-2 px-0 justify-around");
  form.appendChild(divSaisie);
  cls(form, "flex w-full");
  chat.appendChild(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const entry = document.getElementById("entry").value;
    document.getElementById("entry").value = "";
    const author = localStorage.getItem("ACCOUNT");
    window.sendMessage(author, entry);
  });

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
      const disabledClass = isFinishMatch ? "disabled-match" : "enabled";
      cls(
        div,
        `${marginTop} w-full flex flex-col border rounded teams ${disabledClass}`
      );
      const divTitle = document.createElement("div");
      cls(divTitle, "flex flex-col w-full items-start justify-center p-1");

      div.appendChild(divTitle);
      const spanTitle1 = document.createElement("div");
      const spanTitle2 = document.createElement("div");
      const spanRDV = document.createElement("span");
      const divScore = document.createElement("div");
      const spanScoreTitle = document.createElement("span");
      const spanScore = document.createElement("span");
      const adversaire = match.adversaire;
      const recepteur = match.club_recepteur;
      const isAdvRec = adversaire === recepteur;
      spanTitle1.textContent = match.dateFR;
      spanTitle2.textContent = Match.simplifyClub(adversaire);
      spanTitle2.classList.add(
        isAdvRec ? "exterieur-mobile" : "interne-mobile"
      );
      spanRDV.textContent = `RDV : ${
        match.rdv ? `${match.rdv} à ${match.salle}` : "À définir"
      }`;
      spanScoreTitle.textContent = "Score\u00A0:\u00A0";
      spanScore.textContent = !isBlankOrNull(match.scoreClub)
        ? `${match.scoreClub} - ${match.scoreAdversaire}`
        : "À venir";
      spanScore.classList.add(
        match.scoreClub > match.scoreAdversaire
          ? "winner"
          : match.scoreClub < match.scoreAdversaire
          ? "loser"
          : "match-nul"
      );
      cls(spanTitle1, "title italic");
      cls(spanTitle2, "title");
      cls(spanRDV, "rdv");
      cls(divScore, "flex items-center justify-start w-full font-bold");
      cls(spanScoreTitle, "bg-white");
      cls(spanScore, "px-1");
      divTitle.appendChild(spanTitle1);
      divTitle.appendChild(spanTitle2);
      divTitle.appendChild(spanRDV);
      divScore.appendChild(spanScoreTitle);
      divScore.appendChild(spanScore);
      divTitle.appendChild(divScore);

      if (nextMatch.dateFR === match.dateFR) {
        cls(spanTitle1, "next-match");
        cls(spanTitle2, "next-match");
      }
      const classDiv =
        "flex flex-col w-full items-center justify-start relative py-2";

      const divPlayers = document.createElement("div");
      div.appendChild(divPlayers);
      cls(divPlayers, "flex flex-row items-stretch space-around");
      if (
        match.players.length > 0 ||
        match.previsionnels.length > 0 ||
        match.renfortsAilleurs.length > 0
      ) {
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
            joueur.textContent = jp.prenom;
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
            joueur.textContent = jp.prenom;
            divJoueursPresents.appendChild(joueur);
          }
        }
        if (match.renfortsAilleurs.length > 0) {
          const spanRenforts = document.createElement("span");
          spanRenforts.textContent = "Renforts";
          cls(spanRenforts, "renforts font-bold");
          divJoueursPresents.appendChild(spanRenforts);
          for (let jPr = 0; jPr < match.renfortsAilleurs.length; ++jPr) {
            const jp = match.renfortsAilleurs[jPr];
            const joueur = document.createElement("span");
            cls(joueur, "italic");
            joueur.textContent = jp.prenom;
            divJoueursPresents.appendChild(joueur);
          }
        }
      }
      const realAbsents = match.absents.filter(el => el.teammate);
      if (match.remplacants.length > 0 || realAbsents.length > 0) {
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
            joueur.textContent = jp.prenom;
            divJoueursRemplacants.appendChild(joueur);
          }
        }
  
        if (realAbsents.length > 0) {
          const spanAbsents = document.createElement("span");
          spanAbsents.textContent = "Absents";
          cls(spanAbsents, "absents font-bold");
          divJoueursRemplacants.appendChild(spanAbsents);
          for (let jPr = 0; jPr < realAbsents.length; ++jPr) {
            const jp = realAbsents[jPr];
            const joueur = document.createElement("span");
            cls(joueur, "italic");
            joueur.textContent = jp.prenom;
            divJoueursRemplacants.appendChild(joueur);
          }
        }
        divPlayers.appendChild(divJoueursRemplacants);
      }

      if (match.doubles) {
        const divDoubles = document.createElement("div");
        cls(divDoubles, "flex w-full flex-col items-center");
        const h5 = document.createElement("h5");
        h5.textContent = "Doubles";
        divDoubles.appendChild(h5);
        const { paire1, paire2 } = match.doubles;
        const [j1, j2] = paire1;
        const [j3, j4] = paire2;
        const divPaires = document.createElement("div");
        cls(divPaires, "flex w-full flex-col items-center");
        const shadow =
          "black 1px 1px, black -1px 1px, black 1px -1px, black -1px -1px";
        const spanP1 = document.createElement("span");
        cls(spanP1, "text-indigo-300 !font-bold italic");
        spanP1.style.textShadow = shadow;
        const spanP2 = document.createElement("span");
        cls(spanP2, "text-orange-300 !font-bold italic");
        spanP2.style.textShadow = shadow;
        spanP1.textContent = `${j1.prenom} - ${j2.prenom}`;
        spanP2.textContent = `${j3.prenom} - ${j4.prenom}`;
        divPaires.appendChild(spanP1);
        divPaires.appendChild(spanP2);
        divDoubles.appendChild(divPaires);

        div.appendChild(divDoubles);
      }

      content.appendChild(div);
    }
  });
}
