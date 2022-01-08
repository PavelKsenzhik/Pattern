function hello(){
    console.log('Hello');
    
}

document.querySelector('.click').onclick = (event) =>{
    event.target.classList.toggle('_clicked');
}

hello();