function MoveBall(ball, wrapper){
    let coordsOfBall = ball.getBoundingClientRect();
    console.log(coordsOfBall.left);
    
    ball.addEventListener('mousemove', (event) =>{
        
        console.log(event.clientX);
        
    })
}

export {MoveBall}