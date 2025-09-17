// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onChildAdded,
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNsIreUAr5U3DMGYnLDF81fFGV1BzRiMU",
  authDomain: "pingi-12e44.firebaseapp.com",
  databaseURL:
    "https://pingi-12e44-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pingi-12e44",
  storageBucket: "pingi-12e44.firebasestorage.app",
  messagingSenderId: "48665608785",
  appId: "1:48665608785:web:1c19c4582eb8b2e64f2e70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const messagesRef = ref(db, "messages");

onChildAdded(messagesRef, (snapshot) => {
  const msg = snapshot.val();

  const messages = document.getElementById("messages");

  const lastAuthor = Array.from(document.getElementsByTagName("span"))
    .filter((el) => el.classList.contains("chat-author"))
    .at(-1);

  const isSameAuthor = lastAuthor && lastAuthor.textContent === msg.author;

  const date = msg.date;
  const lastDate = Array.from(document.getElementsByTagName("span"))
    .filter((el) => el.classList.contains("chat-date"))
    .at(-1);
  const isSameDate = lastDate && lastDate.textContent === date;

  const div = document.createElement("div");
  cls(div, "flex flex-col w-full mt-2 items-start");

  if (!isSameDate) {
    const spanDate = document.createElement("span");
    cls(spanDate, "chat-date text-center w-full italic");
    spanDate.textContent = date;
    div.appendChild(spanDate);
  }

  const spanMsg = document.createElement("span");
  cls(spanMsg, "chat-msg px-3");
  spanMsg.textContent = msg.text;

  if (!(isSameDate && isSameAuthor)) {
    const spanAuthor = document.createElement("span");
    cls(spanAuthor, "chat-author");
    spanAuthor.textContent = msg.author;
    div.appendChild(spanAuthor);
  }
  div.appendChild(spanMsg);
  messages.appendChild(div);
});

// 6️⃣ Fonction pour envoyer un message
window.sendMessage = (author, texte) => {
  const date = new Date();
  const frDate = date.toLocaleDateString("fr", { dateStyle: "full" });
  if (texte.trim() === "") return;
  push(messagesRef, { author, text: texte, date: frDate });
};
