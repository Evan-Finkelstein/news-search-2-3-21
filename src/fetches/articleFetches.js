export const getArticles = () => {
    return fetch('http://newsapi.org/v2/top-headlines?country=us&apiKey=c17e24b41608401cb00746870dfc308e')
        .then(res => res.json());
    // .then(json => json.results);
};

export const searchArticle = (search) => {
    return fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=c17e24b41608401cb00746870dfc308e`)
        .then(res => res.json());
    // .then(json => json.results);
};
