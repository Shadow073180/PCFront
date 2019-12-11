
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

const handle_login = (data) => {
  
  console.log('Fetching Token')
  console.log(data)
  return fetch('http://localhost:8000/token-auth/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    

  };

export default {
  fetchDaterByID,
  fetchDaters,
  addDater,
  handle_login
}