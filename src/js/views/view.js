import { Array } from 'core-js/library/web/timers';
import icons from 'url:../../img/icons.svg'; //parcel2

export default class View {
    _data;

    render(data) {
        if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);  
      }
  
      _clear() {
          this._parentElement.innerHTML = "";
      }
  
      renderSpinner() {
          const markup = `
                  <div class="spinner">
                  <svg>
                    <use href="${icons}#icon-loader"></use>
                  </svg>
                </div> 
          `;
          this._clear();
          this._parentElement.insertAdjacentHTML('afterbegin', markup);
      };
  
      renderError(message = this._errMessage) {
        const markup = `
          <div class = "errors>
            <div>
              <svg>
                <use href="${icons}#icon-alert-traingle"</use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);  
      }
  
      renderMessage(message = this._successMessage) {
        const markup =  `
          <div class = "message>
            <div>
              <svg>
                <use href="${icons}#icon-smile"</use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);  
      }  
};