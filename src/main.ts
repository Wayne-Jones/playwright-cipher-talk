import Reveal from "reveal.js";
import RevealNotes from "reveal.js/plugin/notes";
import RevealHighlight from "reveal.js/plugin/highlight";
import RevealZoom from "reveal.js/plugin/zoom";
import RevealSearch from "reveal.js/plugin/search";
import "reveal.js/reveal.css";
import "reveal.js/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";
import "./style.css";

const deck = new Reveal({
  hash: true,
  slideNumber: "c/t",
  transition: "slide",
  transitionSpeed: "fast",
  width: 1280,
  height: 720,
  margin: 0.06,
  controls: true,
  progress: true,
  plugins: [RevealNotes, RevealHighlight, RevealZoom, RevealSearch],
});

deck.initialize().then(() => {
  const speaker = document.createElement("div");
  speaker.className = "deck-footer";
  speaker.textContent = "The Playwright Cipher — Commit Your Code 2026";
  document.querySelector(".reveal")?.appendChild(speaker);
});
