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
  createCard("21/11", "segunda", createGame("england", "10:00", "iran") +
  createGame("eua", "16:00", "wales"))
  +
  createCard(
    "25/11",
    "sexta",
    createGame("wales", "07:00", "iran")+ createGame("england", "16:00", "eua"))
  +

  createCard(
    "29/11",
    "terça",
    createGame("iran", "16:00", "eua") +
      createGame("wales", "16:00", "england")
  ) 
