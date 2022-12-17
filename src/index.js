import generateDadJoke from './generateDadJoke';
import './styles/main.scss';
import laughingYao from './assets/laughing_yao.svg';

const laughingYaoImg = document.querySelector("#laughing-yao-img");
laughingYaoImg.src = laughingYao;

const jokeBtn = document.querySelector("#jokeBtn");
jokeBtn.addEventListener("click", generateDadJoke);

generateDadJoke();
