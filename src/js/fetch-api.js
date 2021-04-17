import countriesCardTpl from '../templates/countries-card.hbs';
import countriesListTpl from '../templates/countries-list.hbs';
import API from './fetchCountries';
import getRefs from './get-refs';
import { showSuccess, showError, showNotice } from './show-notification';

import debounce from 'lodash.debounce';

const refs = getRefs();

refs.searchInput.addEventListener('input', debounce(onSearch, 500));

  
function onSearch(e) {
    const searchQuery = e.target.value;
    // console.log(searchQuery);
    pasteInputMarkup('');
    API.fetchCountriesByName(searchQuery)
    .then(responseRenderProcess)
    .catch(onFetchError);
}


function renderCountryCard(country) {
        const markup = countriesCardTpl(country);
        console.log(markup);
        refs.cardContainer.innerHTML=markup;
}

function renderCountryList(country) {
    const markupList = countriesListTpl(country);
    refs.cardContainer.innerHTML = markupList;
}

function onFetchError(error) {
    // alert('ERROR!!!!');
    showError();
}

function responseRenderProcess(response) {
    // console.log(response.length);
    if (response.length > 1 && response.length < 10) {
        renderCountryList(response);
        showNotice();

    }
    else if (response.length > 10) {
        showNotice();
    }
     else if (response.length === 1) {
        renderCountryCard(response);
        showSuccess();
    }
    else {
        showError();
    }
    
}

function pasteInputMarkup(inputMarkup) {
    refs.cardContainer.innerHTML = inputMarkup;
}