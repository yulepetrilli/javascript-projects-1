const btn = document.querySelector('#new-quote');
const quote = document.querySelector('.quote');
const char = document.querySelector('.character');

const getQuotes = (random) => {
    axios.get('https://friends-quotes-api.herokuapp.com/quotes')
    .then(response => {
        const quotes = response.data;
        let i = Math.floor(random * quotes.length) ;

        if(!random){
            quote.innerHTML = quotes[0].quote;
            char.innerHTML = quotes[0].character;
        } else {
            quote.innerHTML = quotes[i].quote;
            char.innerHTML = quotes[i].character;
        }
    }).catch(error => console.error(error));
};

btn.addEventListener('click', () => {
    let random = Math.random();
    getQuotes(random)
});

getQuotes();
