
const fetchDaterByID = (daterID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://pet-connections.herokuapp.com/PC/${daterID}`)
    .then((response) => response.json())
}

const fetchDaters = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://pet-connections.herokuapp.com/PC`)
    .then((response) => response.json())
}

const addDater = (daterObject) => {
  return fetch('https://cors-anywhere.herokuapp.com/https://pet-connections.herokuapp.com/PC/', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(daterObject)
  })
}



export default {
  fetchDaterByID,
  fetchDaters,
  addDater
}