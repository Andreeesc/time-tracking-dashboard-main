getData()
// showData()

const slugify = (text) => {
  if (!text || typeof text !== 'string') {
    throw new Error('Parameter "text" must be a string');
  }

  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};

async function getData(){
  const url = await fetch(`../../data.json`)
  const response = await url.json()
  return response
}

async function showData(period){
  const cards = await getData()
  const html = cards.map(({title, timeframes}) => {  
    
    return `
      <div class="card">
        <div class="card-image">
          <figure>
            <img src="./assets/images/icon-${slugify(title)}.svg" alt="">
          </figure>
        </div>
        <div class="card-info">
          <div class="card-title">
            <span>${title}</span>
            <img src="./assets/images/icon-ellipsis.svg" alt="">
          </div>
          <div class="card-hours">
            <h2>${timeframes[period].current}hrs</h2>
            <span>Last Week - ${timeframes[period].previous}hrs</span>
          </div>
        </div>
      </div>
    `
  });

  let card = document.querySelector('.cards');
  card.innerHTML = html.join('');
}