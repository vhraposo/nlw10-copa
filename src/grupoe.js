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
  createCard("23/11", "quarta", createGame("germany", "10:00", "japan") +
  createGame("spain", "13:00", "costarica"))
  +
  createCard(
    "27/11",
    "domingo",
    createGame("japan", "07:00", "costarica")+ createGame("spain", "16:00", "germany"))
  +

  createCard(
    "01/12",
    "quinta",
    createGame("japan", "16:00", "spain") +
      createGame("costarica", "16:00", "germany")
  ) 
