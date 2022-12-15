import { API_URL } from './config.js';
import { API_KEY } from './config.js';
import { getJSON } from './helpers.js';
import { RES_PER_PAGE } from './config.js';

export const state = {
  news: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
};

// const API_KEY = '284c8656-7d31-4090-b3f3-4e6941ae712e';
// const id =
//   'technology/2022/aug/02/pixel-buds-pro-review-google-apple-airpods-android';

export const loadNews = async function (id) {
  try {
    const data = await getJSON(
      `${API_URL}content.guardianapis.com/${id}&show-fields=all&api-key=${API_KEY}`
    );

    const dataArray = Object.entries(data.response.results);
    console.log(dataArray);

    const news = dataArray[0][1];
    console.log(news);
    state.news = {
      id: news.id,
      title: news.webTitle,
      img: news.fields.thumbnail,
      content: news.fields.bodyText,
    };
    console.log(state.news);
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(
      `${API_URL}${query}&show-fields=all&page-size=60&api-key=${API_KEY}`
    );

    const dataArray = Object.entries(data.response.results);
    //console.log(dataArray);

    state.search.results = dataArray.map(story => {
      return {
        title: story[1].webTitle,
        description: story[1].fields.trailText,
        img: story[1].fields.thumbnail,
        id: story[1].id,
      };
    });
    //console.log(state.search.results);
  } catch (err) {
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage; //0;
  const end = page * state.search.resultsPerPage; //9;

  return state.search.results.slice(start, end);
};
