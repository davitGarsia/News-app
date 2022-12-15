import View from './view.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage =
    'No news found with your query. Please try a different keyword!';
  _message = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(result) {
    return `
    <li class="preview">
            <a class="preview__link--active" href="#${result.id}">
              <figure class="preview__fig">
                <img src="${result.img}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${result.title}</h4>

              </div>
            </a>
          </li>`;
  }
}

export default new ResultsView();
