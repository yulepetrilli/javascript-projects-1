const accordion = document.getElementsByClassName('container');

for(let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        //toggle add or removes a class of a element
        this.classList.toggle('active');
    });
};