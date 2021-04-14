import countriesCardTpl from '../templates/countries-card.hbs';
import API from './fetchCountries';
import getRefs from './get-refs';

const refs = getRefs();

refs.searchInput.addEventListener('input', onSearch);

  
function onSearch(e) {
    const input = e.currentTarget;
    const searchQuery = input.value;
    // console.log(searchQuery);

    API.fetchCountriesByName(searchQuery)
    .then(renderCountryCard)
    .catch(onFetchError);
}


function renderCountryCard(country) {
        const markup = countriesCardTpl(country);
        console.log(markup);
        refs.cardContainer.innerHTML=markup;
}

function onFetchError(error) {
    alert('ERROR!!!!');
}