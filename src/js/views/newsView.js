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

  // addHandlerReadMore(handler) {
  //   this._parentElement.addEventListener('click', e => {
  //     if (e.target.matches('.read-more')) {
  //       e.preventDefault();
  //       handler();
  //     }
  //   });
  // }

  _generateMarkup() {
    return `
    <figure class="recipe__fig">
            <img src="${this._data.img}" alt="Tomato" class="recipe__img" />
            <h1 class="recipe__title">
              <span>${this._data.title}</span>
            </h1>
          </figure>
  
          <div class="recipe__details">
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use ></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--minutes">45</span>
              <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use 
              </svg>
              <span class="recipe__info-data recipe__info-data--people">4</span>
              <span class="recipe__info-text">servings</span>
  
              <div class="recipe__info-buttons">
                <button class="btn--tiny btn--increase-servings">
                  <svg>
                    <use ></use>
                  </svg>
                </button>
                <button class="btn--tiny btn--increase-servings">
                  <svg>
                    <use ></use>
                  </svg>
                </button>
              </div>
            </div>
              
  
            <div class="recipe__user-generated">
              <svg>
                <use ></use>
              </svg>
            </div>
            <button class="btn--round">
              <svg class="">
                <use ></use>
              </svg>
            </button>
          </div>
  
          <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
              <li class="recipe__ingredient">
                <svg class="recipe__icon">
                  <use href="src/img/icons.svg#icon-check"></use>
                </svg>
                <div class="recipe__quantity">1000</div>
                <div class="recipe__description">
                  <span class="recipe__unit">g</span>
                  pasta
                </div>
              </li>
  
              <li class="recipe__ingredient">
                <svg class="recipe__icon">
                  <use href="src/img/icons.svg#icon-check"></use>
                </svg>
                <div class="recipe__quantity">0.5</div>
                <div class="recipe__description">
                  <span class="recipe__unit">cup</span>
                  ricotta cheese
                </div>
              </li>
            </ul>
          </div>

          <div class="recipe__directions">
          <h2 class="heading--2">news</h2>
          <div class="box1">
          <div class="box2">
          <p class="recipe__directions-text">
          ${this._data.content}
            </p>

          </div> 
          <button class="read-more">Read More</button>
      </div>
          <a
            class="btn--small recipe__btn"
            href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use "></use>
            </svg>
          </a>
        </div>`;
  }
}

export default new NewsView();

// ${this._data.content.slice(0, 500)}
//             <span class="dots">...</span><span class="more">${this._data.content.slice(
//               501,
//               -1
//             )}
