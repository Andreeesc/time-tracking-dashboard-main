async function getData(){
  try{
    const url = await fetch(`https://andreeesc.github.io/time-tracking-dashboard-main/data.json`)
    // console.log(url.status)
    // console.log(url.ok)

    const response = await url.json()

    return response
  } catch(err){
    console.error(err)
  }
}