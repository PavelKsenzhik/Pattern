function MoveBall(ball, wrapper){
    let coordsOfBall = ball.getBoundingClientRect();
    console.log(coordsOfBall.left);
    let active = 'rgb(87,87,87)';
    let off = '#000'
    ball.addEventListener('click', (event) =>{

        if(event.clientX <= coordsOfBall.left + ball.offsetWidth){
            ball.style.left = wrapper.clientWidth - ball.offsetWidth - wrapper.clientLeft * 2 + 'px';
            ball.style.borderColor = active;
            ball.style.backgroundColor = active;
            wrapper.style.backgroundColor = 'rgba(187,187,187,0.2)';
            wrapper.style.borderColor = active;
        } else {
            ball.style.left = 0 + 'px';
            ball.style.borderColor = off;
            ball.style.backgroundColor = off;
            wrapper.style.borderColor = off;
            wrapper.style.backgroundColor = '#fff';
        }
        
    })
}

export {MoveBall}