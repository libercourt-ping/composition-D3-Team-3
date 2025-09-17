function initDesktop(doc) {
  d(() => {
    const div = document.createElement("div");
    cls(div, "flex w-full items-center justify-between");

    const divLogo = document.createElement("div");
    divLogo.id = "logo";
    cls(
      divLogo,
      "flex items-center justify-start ml-4 w-18 h-18 rounded-full p-2 border-2"
    );

    const spanInfo = document.createElement("span");
    spanInfo.id = "info";
    cls(spanInfo, "hidden");

    const divFlex = document.createElement("div");
    divFlex.classList.add("flex");

    const img = document.createElement("img");
    img.src = "./images/logo.png";
    img.width = "50";
    img.height = "50";

    divFlex.appendChild(img);
    spanInfo.appendChild(divFlex);

    const divFlexCol = document.createElement("div");
    cls(divFlexCol, "flex flex-col");

    const spanCP = document.createElement("span");
    spanCP.textContent = "Club pongiste libercourtois";
    const spanP = document.createElement("span");
    spanP.textContent = "Président\u00A0:\u00A0Thierry GUILBERT";
    divFlexCol.appendChild(spanCP);
    divFlexCol.appendChild(spanP);
    spanInfo.appendChild(divFlexCol);

    divLogo.appendChild(spanInfo);
    div.appendChild(divLogo);

    const div2 = document.createElement("div");
    cls(div2, "flex items-center justify-center w-full");

    const subDiv2 = document.createElement("div");
    cls(subDiv2, "flex flex-col items-center justify-center");
    subDiv2.id = "title";
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    h1.textContent = "Planning - Ping pong";
    h2.textContent = "Saison 2025-2026, phase 1";
    subDiv2.appendChild(h1);
    subDiv2.appendChild(h2);

    div2.appendChild(subDiv2);
    div.appendChild(div2);
    doc.appendChild(div);

    const divContent = document.createElement("div");
    cls(
      divContent,
      "flex w-[var(--table-width)] mt-[var(--table-mt)] items-center justify-center"
    );
    const table = document.createElement("table");
    table.id = "content";
    cls(table, "w-full h-full");
    divContent.appendChild(table);
    doc.appendChild(divContent);

    const spanFlex1 = document.createElement("span");
    cls(spanFlex1, "flex-1");
    doc.appendChild(spanFlex1);

    const footer = document.createElement("footer");
    cls(footer, "flex w-full h-[12vh] bg-gray-800 items-center justify-center");
    const para = document.createElement("p");
    para.id = "led";
    cls(para, "led inline-block text-[36px] bold");
    para.textContent = "PROCHAIN MATCH : %MATCH%";

    footer.appendChild(para);
    doc.appendChild(footer);

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
    cls(messages, "px-4 max-h-[20rem] overflow-auto mb-3");
    messages.id = "messages";
    cls(
      messager,
      "absolute flex items-center text-base justify-center top-1 right-1 w-10 h-10 rounded-full chat cursor-pointer border-black border-2 border-dotted"
    );
    cls(chat, "min-w-[20rem] top-8 right-0 msg rounded");

    doc.appendChild(messager);
    messager.appendChild(chat);
    const h4 = document.createElement("h5");
    h4.textContent = "Chat Ping";
    cls(h4, "text-white");
    chat.appendChild(h4);
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
  });
}

function init() {
  d(() => {
    const doc = document.getElementById("container");
    cls(document.body, "relative");
    // On n'utilise pas cls pour la ligne ci-dessous car il y a un change du style.display dans le code
    doc.style.display = "flex";
    initDesktop(doc);
    const table = document.getElementById("content");
    const thead = document.createElement("thead");
    const trhead = document.createElement("tr");
    const trhead2 = document.createElement("tr");
    const trhead3 = document.createElement("tr");
    const trhead4 = document.createElement("tr");
    const tbody = document.createElement("tbody");
    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(trhead);
    thead.appendChild(trhead2);
    thead.appendChild(trhead3);
    thead.appendChild(trhead4);
    const fth = document.createElement("th");
    fth.classList.add("h-full");
    fth.rowSpan = 4;
    fth.textContent = "Date, Lieu et RDV";
    trhead.appendChild(fth);
    const cptMatchs = {};
    const nextMatch = Match.nextMatch();
    for (let j in Joueurs) {
      const tr = document.createElement("tr");
      const player = Joueurs[j];
      tr.id = `${player}`;
      const fthJ = document.createElement("th");
      fthJ.classList.add("th_joueur");
      fthJ.textContent = player;

      tr.appendChild(fthJ);
      tbody.appendChild(tr);
      cptMatchs[j] = 0;
      for (let z = 0; z < matchs.length; ++z) {
        const match = matchs[z];
        const isFinishMatch = match.date.getTime() < nextMatch.date.getTime();
        const td = document.createElement("td");
        td.id = "td_" + match.adversaire.replaceAll(" ", "_") + "_" + player;
        tr.appendChild(td);
        td.classList.add("non");
        if (isFinishMatch) {
          td.classList.add("disabledDate");
        }
        if (match.players.includes(player)) {
          ++cptMatchs[j];
        }
      }
      const td = document.createElement("td");
      td.textContent = cptMatchs[j];
      tr.appendChild(td);
    }

    for (let i = 0; i < matchs.length; ++i) {
      const match = matchs[i];

      const thD = document.createElement("th");
      thD.classList.add("day");
      thD.textContent = match.dateFR;

      trhead.appendChild(thD);
      const thM = document.createElement("th");
      const adversaire = match.adversaire;
      const recepteur = match.club_recepteur;
      thM.textContent = adversaire;
      const isAdvRec = adversaire === recepteur;
      thM.classList.add(isAdvRec ? "exterieur" : "interne");
      trhead2.appendChild(thM);
      const thH = document.createElement("th");
      thH.textContent = match.rdv ? `${match.rdv} à la salle` : "À définir";
      thH.classList.add(isAdvRec ? "h_exterieur" : "h_interne");
      trhead3.appendChild(thH);
      const thScore = document.createElement("th");
      thScore.textContent = match.scoreClub
        ? `${match.scoreClub} - ${match.scoreAdversaire}`
        : "À venir";
      thScore.classList.add(
        match.scoreClub > match.scoreAdversaire
          ? "winner"
          : match.scoreClub < match.scoreAdversaire
          ? "loser"
          : "match-nul"
      );
      trhead4.appendChild(thScore);
      const isFinishMatch = match.date.getTime() < nextMatch.date.getTime();
      if (isFinishMatch) {
        thD.classList.add("disabledDate");
        thM.classList.add("disabledDate");
        thH.classList.add("disabledDate");
        thScore.classList.add("disabledDate");
      }
      const allJoueurs = [
        ...match.players,
        ...match.previsionnels,
        ...match.remplacants,
        ...match.absents,
      ];
      for (let k = 0; k < allJoueurs.length; ++k) {
        const joueur = allJoueurs[k];
        const club = match.adversaire.replaceAll(" ", "_");
        const td = document.getElementById("td_" + club + "_" + joueur);
        td.classList.remove("non");
        if (match.players.includes(joueur)) {
          td.classList.add("oui");
          td.title = "Présent";
        } else if (match.previsionnels.includes(joueur)) {
          td.classList.add("previsionnel");
          td.title = "Prévisionnel";
        } else if (match.absents.includes(joueur)) {
          td.classList.add("absent");
          td.title = "Absent";
        } else if (match.remplacants.includes(joueur)) {
          td.classList.add("remplacant");
          td.title = "Remplaçant disponible";
        }
      }
    }
    const nbMatchs = document.createElement("th");
    nbMatchs.textContent = "Nombre de matchs";
    nbMatchs.rowSpan = 4;
    trhead.appendChild(nbMatchs);

    const para = document.getElementById("led");
    para.textContent = para.textContent.replace(
      "%MATCH%",
      `${nextMatch.dateFR} - ${nextMatch.adversaire}`
    );
  });
}
