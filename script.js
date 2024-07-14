import { isWikipediaUrl, getWikipediaTitle, getPTagText, countWords, removeUnderscores } from './utils.js';

const main = () => {
    document.addEventListener('DOMContentLoaded', () => {

        document.getElementById('word-count-form').addEventListener('submit', (event) => {
            event.preventDefault()

            const url = document.getElementById('wikipedia-url').value;
            if (!isWikipediaUrl(url)) {
                alert('Please enter a valid Wikipedia URL.');
                return;
            };
    
            const title = getWikipediaTitle(url);
            fetch(`https://en.wikipedia.org/w/api.php?action=parse&page=${title}&prop=text&formatversion=2&origin=*&format=json`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    if (!data.parse) {
                        throw new Error('API response does not contain parse data');
                    }
                    const text = getPTagText(data.parse.text);
                    const wordCount = countWords(text);
                    const page_title = removeUnderscores(title)
                    document.getElementById('number-of-words').textContent = wordCount;
                    document.getElementById('word-count-display').classList.remove('hidden');
                    document.getElementById('title').textContent = page_title;
                })
                .catch(error => console.error('Error:', error));
        });
    });
};

main();


