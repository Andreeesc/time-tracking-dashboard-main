getData()
showData()

async function getData(){
  let url = await fetch(`../../data.json`)
  let response = await url.json()
  return response
}

async function showData(){
  let cards = await getData()
  let html = '' 

  cards.forEach(card => {   
    let htmlCards = `
              <div class="card">
                <div class="card-image">
                  <figure>
                    <img src="./assets/images/icon-${card.title.toLowerCase()}.svg" alt="">
                  </figure>
                </div>
                <div class="card-info">
                  <div class="card-title">
                    <span>${card.title}</span>
                    <img src="./assets/images/icon-ellipsis.svg" alt="">
                  </div>
                  <div class="card-hours">
                    <h2>${card.timeframes.weekly.current}hrs</h2>
                    <span>Last Week - ${card.timeframes.weekly.previous}hrs</span>
                  </div>
                </div>
              </div>
    `
    html += htmlCards
  });

  let card = document.querySelector('.cards');
  card.innerHTML = html;
}