import { isWikipediaUrl, getWikipediaTitle } from './utils';


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('word-count-form').addEventListener('submit', (event) => {
        event.preventDefault()
        const url = document.getElementById('wikipedia-url').value;
        console.log(url)

        if (!isWikipediaUrl(url)) {
            alert('Please enter a valid Wikipedia URL.');
            return;
        };

        const title = getWikipediaTitle(url);
        console.log(title)
    });
});

