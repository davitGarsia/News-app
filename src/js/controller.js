'use strict';

import * as model from './model.js';
import newsView from './views/newsView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

const moreText = document.querySelector('.more');
const btnMore = document.querySelector('.read-more');

// const query = 'berlin';
// const API = 'https://content.guardianapis.com/search?q=';
// const API_KEY = '284c8656-7d31-4090-b3f3-4e6941ae712e';
const recipeContainer = document.querySelector('.recipe');
// const id =
//   'technology/2022/aug/02/pixel-buds-pro-review-google-apple-airpods-android';

// const state = {
//   news: {},
//   search: {
//     query: '',
//     results: [],
//   },
// };
let id;

const controlNews = async function () {
  try {
    const id = window.location.hash.slice(1);

    //const id = document.getElementById('preview').getAttribute('href');

    //console.log(id);

    if (!id) return;

    // render spinner

    // loading news
    await model.loadNews(id);

    // rendering news
    newsView.render(model.state.news);
  } catch (err) {
    newsView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);

    resultsView.render(model.getSearchResultsPage());

    // render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage));

  paginationView.render(model.state.search);
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

recipeContainer.addEventListener('click', e => {
  if (e.target.matches('.read-more')) {
    e.preventDefault();
  }
  if (moreText.style.display === 'none') {
    btnMore.innerHTML = 'read less';
    moreText.style.display = 'inline';
  } else {
    btnMore.innerHTML = 'Read more';
    moreText.style.display = 'none';
  }
});

const init = function () {
  newsView.addHandlerRender(controlNews);
  searchView.addHandleSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();

//`https://content.guardianapis.com/search?q=content.guardianapis.com/${id}&api-key=test`;
