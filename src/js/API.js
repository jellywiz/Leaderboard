class API {
  constructor() {
    this.key = '1VW6HT8c5s1FbtgoJHo6';
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  }

  // Get data from API
  getData = async () => {
    const result = await fetch(`${this.url + this.key}/scores/`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    }).then((response) => response.json()).catch((error) => error);
    return result;
  }

  // Add data to API
  addData = async (name, score) => {
    const result = await fetch(`${this.url + this.key}/scores/`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ user: name, score: score }),
    }).then((response) => response.json()).catch((error) => error);
    return result;
  }
}

export default API;
