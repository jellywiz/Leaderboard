import '../style.css';
import Person from './person.js';
import API from './API.js';
import { recentScores, refreshBtn, submitBtn } from './elements.js';

const lodash = require('lodash');

const api = new API();

const render = async () => {
  recentScores.innerHTML = '';
  const response = await api.getData();
  const persons = new Person(response);
  persons.players = lodash.sortBy(persons.players, ['score']).reverse();
  persons.players.forEach((person) => {
    const li = document.createElement('li');
    li.innerHTML = `${person.user} : ${person.score}`;
    recentScores.appendChild(li);
  });
};
submitBtn.addEventListener('click', async () => {
  const name = document.querySelector('.name-input').value;
  const score = document.querySelector('.score-input').value;
  await api.addData(name, score);
  render();
});

refreshBtn.addEventListener('click', () => {
  render();
});

window.onload = render();
