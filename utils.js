export const isWikipediaUrl = (url) => {
    const regex = /^https:\/\/en.wikipedia.org\/wiki\/.+/;
    return regex.test(url);
};

export const getWikipediaTitle = (url) => {
    const regex = /https:\/\/en.wikipedia.org\/wiki\/(.+)/;
    const urlMatch = url.match(regex);
    return urlMatch ? urlMatch[1] : '';
};

export const getPTagText = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const paragraphs = doc.querySelectorAll('p');
    let text = ''
    paragraphs.forEach(paragraph => {
        text += paragraph.innerText + ' ';
    });
    return text; 
};

export const removeUnderscores = (title) => {
    return title.replace(/_/g, ' ');
};

export const countWords = (text) => {
    return text.split(/\s+/).filter(word => word).length;
};