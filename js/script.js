import { MoveBall } from "./ball.js";
const ball = document.querySelector('.ball__item');
const ballWrapper = document.querySelector('.ball__wrapper')

MoveBall(ball,ballWrapper)


document.querySelector('.click').onclick = (event) =>{
    event.target.classList.toggle('_clicked');
}

