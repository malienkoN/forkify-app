import View from './View.js';
import previewView from './previewView.js';

class resultsView extends View {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recepies found for your query! Please try again!';
    _message = '';

    _generateMarkup() {
        return this._data.map(result => previewView.render(result, false)).join('');
    }

    setCopyrightYear() {
        const curYear = new Date().getFullYear();
        this._parentElement.closest('.search-results').querySelector('.copyright > span').textContent = curYear;
    }
}

export default new resultsView();