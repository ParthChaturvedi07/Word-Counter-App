let textArea = document.getElementById("textarea");
let characters = document.getElementById("characters");
let words = document.getElementById("words");
let sentences = document.getElementById("sentences");
let paragraphs = document.getElementById("paragraphs");

textArea.addEventListener("input", () => {
    let text = textArea.value.trim();

    characters.textContent = text.length;

    let wordArray = text.match(/\w+/g);
    words.textContent = wordArray ? wordArray.length : 0;

    let sentenceArray = text.split(/[.|!|?]+/g);
    sentences.textContent = sentenceArray.length - 1;

    let paragraphArray = text.split(/\n/);
    paragraphs.textContent = paragraphArray.length;
});
