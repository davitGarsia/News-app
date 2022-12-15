import View from './view.js';

class NewsView extends View {
  _parentElement = document.querySelector('.recipe');
  _errorMessage =
    'We could not anything with that name. Please try another keyword';
  _message = '';

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  addHandlerReadMore(handler) {
    btnMore.addEventListener('click', function () {
      handler();
    });
  }

  _generateMarkup() {
    return `
    <figure class="recipe__fig">
    <h1 class="news__title">
    <span>${this._data.title}</span>
            <img src="${this._data.img}" alt="${this._data.title}" class="recipe__img" />
            </h1>
          </figure>


          <div class="recipe__directions">
            <h2 class="heading--2">news</h2>
            <? class="box1">
            <div class="box2">
            <p class="recipe__directions-text">
            ${this._data.content}
              <span class="dots">...</span>

              </p>
            </div>
        </div>
`;
  }
}

export default new NewsView();
