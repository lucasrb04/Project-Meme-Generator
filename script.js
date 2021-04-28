const inputText = document.querySelector('#text-input');

inputText.addEventListener('keyup', () => {
  const memeText = document.querySelector('#meme-text');
  memeText.innerHTML = inputText.value;
});

const loadFile = (event) => {
  const output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = () => {
    URL.revokeObjectURL(output.src); // free memory
  };
};
