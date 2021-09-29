getData()
showData()

async function getData(){
  let url = await fetch(`../../data.json`)
  let response = await url.json()
  return response
}

async function showData(){
  let cards = await getData()

  cards.forEach(card => {
    console.log(card)
  });
}