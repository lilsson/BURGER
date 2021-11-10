let toggleburger = document.getElementById('toggleburger');
let navbarLinks = document.getElementById('navbarLinks');

toggleburger.addEventListener('click', function(){
    navbarLinks.classList.toggle('active');
})

// input

let button = document.querySelector('.button');
let input = document.querySelector('.input-form');
let ul = document.querySelector('.input-ul');
let form = document.querySelector('.form-wraper');



form.addEventListener('submit', function(event) {
    event.preventDefault();

    // 1. get input value
    let value = input.value;

    // 2.add input value in ul 
    if (value != ' ') {
        let li = document.createElement('li');

        let btnDelete = document.createElement('button');
        btnDelete.textContent = 'Delete';
        btnDelete.addEventListener('click', function() {
            li.remove();
        })
        
    
        li.textContent = value;
    
        li.appendChild(btnDelete);
        ul.appendChild(li);

         // 3.clear input
        input.value = ' ';
    }
   
});


document.querySelector('.clearlist').addEventListener('click', function() {
    ul.innerHTML = ' ';
})