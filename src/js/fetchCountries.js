import countriesCardTpl from '../templates/countries-card.hbs';

const refs = {
    cardContainer:document.querySelector('.js-card-container')
}

fetch('https://restcountries.eu/rest/v2/name/Ukraine')
    .then(response => {
    // console.log(response.json());
    return response.json();
})
    .then(country => {
        console.log(country);
        const markup = countriesCardTpl(country);
        console.log(markup);
        refs.cardContainer.innerHTML=markup;
    })
    .catch(error => {
        console.log(error);
    })
