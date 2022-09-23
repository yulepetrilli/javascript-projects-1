const openBtn = document.getElementById('open-btn');
const container = document.getElementById('modal-container');
const closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', function(){
    container.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
    container.style.display = 'none';
});


/* Closing the modal when clicking anywhere in the window */
window.addEventListener('click', function(e){
    if(e.target === container){
        container.style.display = 'none';
    }
});