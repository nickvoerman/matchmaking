const socket = io('http://localhost:4343');

function startMM() {
  createLoader();
  const name = document.getElementById('name').value;
  socket.emit('startMM', name);
}

socket.on('matchStarting', (matchSettings) => {
  console.log(matchSettings);
  deleteElement('loader');
})

function createLoader () {
  const loader = `
  <div class="loader" id="loader">
      <img src="assets/loader.svg" />
  </div>

  `;
  document.getElementById('game-div').innerHTML += loader;
}

function deleteElement (elementId) {
      document.getElementById(elementId).remove();
}
