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
  createCard("20/11", "domingo", createGame("qatar", "16:00", "ecuador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("senegal", "13:00", "netherlands")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("qatar", "10:00", "senegal") +
      createGame("netherlands", "16:00", "ecuador")
  ) +

   createCard(
     "29/11",
     "terça",
     createGame("ecuador", "12:00", "senegal") +
       createGame("netherlands", "12:00", "qatar")
   ) 
