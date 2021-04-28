const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

function changeText() {
  memeText.innerHTML = inputText.value;
}

inputText.addEventListener('change', changeText);
