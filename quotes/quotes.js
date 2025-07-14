// 

const quote = document.getElementById('quote');
const image = document.getElementById('image');
const getQuote = document.getElementById('get-quote');
const QUOTE_API = 'https://dummyjson.com/quotes/random';
const IMAGE_API = 'https://dog.ceo/api/breeds/image/random/3';

getQuote.addEventListener('click', async () => {
    const quoteResponse = await fetch(QUOTE_API);
    const quoteData = await quoteResponse.json();
    quote.textContent = quoteData.quote;

    const imageResponse = await fetch(IMAGE_API);
    const imageData = await imageResponse.json();
    image.src = imageData.message[0];
});