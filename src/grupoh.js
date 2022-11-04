function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="/icons/icon-${player1}.svg" alt="bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="/icons/icon-${player2}.svg" alt="bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>

          <ul>
          ${games}
          </ul>          
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", createGame("uruguai", "10:00", "southkorea") +
  createGame("portugal", "13:00", "gana"))
  +
  createCard(
    "28/11",
    "segunda",
    createGame("southkorea", "10:00", "gana")+ createGame("portugal", "16:00", "uruguai"))
  +

  createCard(
    "02/12",
    "sexta",
    createGame("southkorea", "12:00", "portugal") +
      createGame("gana", "12:00", "uruguai")
  ) 
