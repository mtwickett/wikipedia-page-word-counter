function getWikipediaTitle(url) {
    const regex = /https:\/\/en.wikipedia.org\/wiki\/(.+)/;
    const urlMatch = url.match(regex);
    return urlMatch ? urlMatch[1] : '';
}

export { getWikipediaTitle };