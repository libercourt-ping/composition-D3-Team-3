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
    cls(divContent, "flex mt-[var(--table-mt)] items-center justify-start");
    const table = document.createElement("table");
    table.id = "content";
    cls(table, "ml-4 w-[95%] h-full");
    divContent.appendChild(table);

    const fieldset = document.createElement("fieldset");
    cls(fieldset, "absolute right-[0.5rem] top-[50%]");
    fieldset.style.transform = "translate(0, -50%)";
    const fieldContent = document.createElement("div");
    fieldContent.id = "contourLegend";
    cls(fieldContent, "flex flex-col items-center rounded-lg");
    fieldContent.innerHTML = `
    <button title="Voir la légende" id="replier" onclick="replierLegende('${fieldContent.id}')" class="mb-2 !rounded-2xl !bg-gray-700 py-2 !text-white !font-bold px-1 text-center cursor-pointer !border-1 !border-solid"> \u2B9C </button>
    <table id="legend" class="hidden">
        <tr> <td class='oui'></td> <td>Joueur <br/> sélectionné</td> </tr>
        <tr> <td class='absent'></td> <td>Joueur <br/>absent</td> </tr>
        <tr> <td class='remplacant'></td> <td>Remplaçant <br/>disponible</td> </tr>
        <tr> <td class='non'></td> <td>Aucune <br/> information</td> </tr>
        <tr> <td class='renforts'></td> <td>Renfort pour <br/>une autre <br/>équipe</td> </tr>
        <tr> <td class='previsionnel'></td> <td>Prévisionnel</td> </tr>
    </table>
    `;

    fieldset.appendChild(fieldContent);

    divContent.appendChild(fieldset);
    doc.appendChild(divContent);

    const footer = document.createElement("footer");
    cls(
      footer,
      "fixed bottom-0 left-0 flex w-full max-h-[10vh] min-h-[5vh] bg-gray-800 items-center justify-center"
    );
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
    cls(chat, "min-w-[20rem] top-8 right-0 msg rounded-lg");

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
    for (let j in joueurs) {
      const tr = document.createElement("tr");
      const player = joueurs[j];
      tr.id = `${player.nomComplet}`;
      const fthJ = document.createElement("th");
      const fthJDiv = document.createElement("div");
      thead.appendChild(fthJDiv);
      fthJ.classList.add("th_joueur");
      fthJDiv.textContent = player.prenom;
      fthJDiv.title = player.nomComplet;
      cls(
        fthJDiv,
        "flex m-auto text-center items-center justify-center cursor-pointer"
      );
      fthJDiv.classList.add(player.teammate ? "teammate" : "renfort");
      fthJ.title = player.teammate ? "team" : "renfort";
      fthJ.appendChild(fthJDiv);

      tr.appendChild(fthJ);
      tbody.appendChild(tr);
      cptMatchs[j] = 0;
      for (let z = 0; z < matchs.length; ++z) {
        const match = matchs[z];
        const isFinishMatch = match.date.getTime() < nextMatch.date.getTime();
        const td = document.createElement("td");
        td.id =
          "td_" +
          match.adversaire.replaceAll(" ", "_") +
          "_" +
          player.nomComplet;
        tr.appendChild(td);
        td.classList.add("non");
        if (isFinishMatch) {
          td.classList.add("disabledDate");
        }
        if (
          match.players.includes(player) ||
          match.renfortsAilleurs.includes(player)
        ) {
          ++cptMatchs[j];
        }
      }
      const td = document.createElement("td");
      const divPoints = document.createElement("div");
      const spanPoints = document.createElement("span");
      const counter = matchs.length;
      const nbPlayedMatch = cptMatchs[j];
      const bgClazzes = ["bg-red-400", "bg-yellow-400", "bg-green-400"];
      // On calcule la couleur par rapport au ratio de matchs joués sur le nombre de match total
      const index = parseInt((nbPlayedMatch / counter) * bgClazzes.length);
      const bgClazz = player.teammate
        ? bgClazzes[index]
        : nbPlayedMatch > 1
        ? bgClazzes[0]
        : bgClazzes[2];
      cls(
        divPoints,
        `flex m-auto w-6/10 items-center justify-center ${bgClazz} rounded-xl`
      );
      spanPoints.textContent = nbPlayedMatch;

      divPoints.appendChild(spanPoints);
      td.appendChild(divPoints);
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
      thM.textContent = simplifyClub(adversaire);
      const isAdvRec = adversaire === recepteur;
      thM.classList.add(isAdvRec ? "exterieur" : "interne");
      trhead2.appendChild(thM);
      const thH = document.createElement("th");
      thH.textContent = match.rdv ? `${match.rdv} à ${match.salle}` : "À définir";
      thH.classList.add(isAdvRec ? "h_exterieur" : "h_interne");
      trhead3.appendChild(thH);
      const thScore = document.createElement("th");
      thScore.textContent = !isBlankOrNull(match.scoreClub)
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
        ...match.renfortsAilleurs,
        ...match.remplacants,
        ...match.absents,
      ];
      for (let k = 0; k < allJoueurs.length; ++k) {
        const joueur = allJoueurs[k];
        const club = match.adversaire.replaceAll(" ", "_");
        const td = document.getElementById(
          "td_" + club + "_" + joueur.nomComplet
        );
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
        } else if (match.renfortsAilleurs.includes(joueur)) {
          td.classList.add("renforts");
          td.title = "Renfort dans une autre équipe";
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
    const simplifyAdversaire = simplifyClub(nextMatch.adversaire);
    para.textContent = para.textContent.replace(
      "%MATCH%",
      `${nextMatch.dateFR} - ${simplifyAdversaire}`
    );
  });
}

/**
  * Permet de vérifier si une chaîne est un nombre ou non
  * @author : https://coreui.io/blog/how-to-check-if-string-is-number-in-javascript/
  * @return vrai si c'est le cas, faux sinon
*/
function isNumeric(string) {
  return /^[+-]?\d+(\.\d+)?$/.test(string);
}


function replierLegende(id) {
  const contour = document.getElementById(id);
  const legende = document.getElementById("legend");
  const table = document.getElementById("content");
  const buttonLegende = document.getElementById("replier");
  const clazzes = {
    contour: {
      fond: "bg-gray-200",
      shadow: "shadow-xl/30",
    },
    legend: { on: "flex", off: "hidden" },
    table: { on: "90%", off: "95%" },
    button: {
      text: { on: "\u2B9F", off: "\u2B9C" },
      title: { on: "Cacher la légende", off: "Voir la légende" },
      padding: { on: "px-2", off: "py-2" },
    },
  };
  if (legende.classList.contains(clazzes.legend.off)) {
    contour.classList.add(clazzes.contour.fond);
    legende.classList.remove(clazzes.legend.off);
    legende.classList.add(clazzes.legend.on);
    table.style.width = clazzes.table.on;
    buttonLegende.textContent = clazzes.button.text.on;
    buttonLegende.classList.remove(clazzes.button.padding.off);
    buttonLegende.classList.add(clazzes.button.padding.on);
    contour.classList.add(clazzes.contour.shadow);
    buttonLegende.title = clazzes.button.title.on;
  } else {
    legende.classList.remove(clazzes.legend.on);
    contour.classList.remove(clazzes.contour.fond);
    table.style.width = clazzes.table.off;
    legende.classList.add(clazzes.legend.off);
    buttonLegende.textContent = clazzes.button.text.off;
    buttonLegende.classList.remove(clazzes.button.padding.on);
    contour.classList.remove(clazzes.contour.shadow);
    buttonLegende.classList.add(clazzes.button.padding.off);
    buttonLegende.title = clazzes.button.title.off;
  }
}
