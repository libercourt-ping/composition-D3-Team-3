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
  });
}

function init() {
  d(() => {
    const doc = document.getElementById("container");
    doc.style.display = "flex";
    initDesktop(doc);
    const table = document.getElementById("content");
    const thead = document.createElement("thead");
    const trhead = document.createElement("tr");
    const trhead2 = document.createElement("tr");
    const trhead3 = document.createElement("tr");
    const tbody = document.createElement("tbody");
    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(trhead);
    thead.appendChild(trhead2);
    thead.appendChild(trhead3);
    const fth = document.createElement("th");
    fth.classList.add("h-full");
    fth.rowSpan = 3;
    fth.textContent = "Date, Lieu et RDV";
    trhead.appendChild(fth);
    const cptMatchs = {};
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
        const td = document.createElement("td");
        td.id = "td_" + matchs[z].adversaire.nom + "_" + player;
        tr.appendChild(td);
        td.classList.add("non");

        if (matchs[z].players.includes(player)) {
          ++cptMatchs[j];
        }
      }
      const td = document.createElement("td");
      td.textContent = cptMatchs[j];
      tr.appendChild(td);
    }

    const nextMatch = Match.nextMatch();

    for (let i = 0; i < matchs.length; ++i) {
      const match = matchs[i];
      const thD = document.createElement("th");
      thD.classList.add("day");
      thD.textContent = match.dateFR;

      trhead.appendChild(thD);
      const thM = document.createElement("th");
      const adversaire = match.adversaire;
      const recepteur = match.club_recepteur;
      thM.textContent = adversaire.nom;
      const isAdvRec = adversaire.nom === recepteur.nom;
      thM.classList.add(isAdvRec ? "exterieur" : "interne");
      trhead2.appendChild(thM);
      const thH = document.createElement("th");
      thH.textContent = match.rdv ?? "Non défini";
      thH.classList.add(isAdvRec ? "h_exterieur" : "h_interne");
      trhead3.appendChild(thH);
      const isFinishMatch = match.date.getTime() < nextMatch.date.getTime();
      if (isFinishMatch) {
        thD.classList.add("disabledDate");
        thM.classList.add("disabledDate");
        thH.classList.add("disabledDate");
      }
      for (let k = 0; k < match.players.length; ++k) {
        const joueur = match.players[k];
        const club = match.adversaire;
        const td = document.getElementById("td_" + club.nom + "_" + joueur);
        td.classList.remove("non");
        td.classList.add("oui");
        td.title = "Présent";
        if (isFinishMatch) {
          td.classList.add("disabledDate");
        }
      }
      for (let k = 0; k < match.previsionnels.length; ++k) {
        const joueur = match.previsionnels[k];
        const club = match.adversaire;
        const td = document.getElementById("td_" + club.nom + "_" + joueur);
        td.classList.remove("non");
        td.classList.add("previsionnel");
        td.title = "Prévisionnel";
        if (isFinishMatch) {
          td.classList.add("disabledDate");
        }
      }
      for (let k = 0; k < match.remplacants.length; ++k) {
        const joueur = match.remplacants[k];
        const club = match.adversaire;
        const td = document.getElementById("td_" + club.nom + "_" + joueur);
        td.classList.remove("non");
        td.classList.add("remplacant");
        td.title = "Remplaçant disponible";
        if (isFinishMatch) {
          td.classList.add("disabledDate");
        }
      }
      for (let k = 0; k < match.absents.length; ++k) {
        const joueur = match.absents[k];
        const club = match.adversaire;
        const td = document.getElementById("td_" + club.nom + "_" + joueur);
        td.classList.remove("non");
        td.classList.add("absent");
        td.title = "Absent";
        if (isFinishMatch) {
          td.classList.add("disabledDate");
        }
      }
    }
    const nbMatchs = document.createElement("th");
    nbMatchs.textContent = "Nombre de matchs";
    nbMatchs.rowSpan = 3;
    trhead.appendChild(nbMatchs);

    const para = document.getElementById("led");
    para.textContent = para.textContent.replace(
      "%MATCH%",
      `${nextMatch.dateFR} - ${nextMatch.adversaire.ville} (${nextMatch.adversaire.nom})`
    );
  });
}
