class Journal {
    constructor(selector) {
        this.journal = document.querySelector(`${selector} .journal`);
        this.showButton = document.querySelector(`${selector} .log`);
        this.clearButton = document.querySelector(`${selector} .journal__clear`);

        this.showButton.addEventListener('click', this.toggleJournal);
        this.clearButton.addEventListener('click', this.clearJournal.bind(this));
    }
    toggleJournal() {
        this.closest('.calc').classList.toggle('calc--journal-open');
    };
    clearJournal() {
        let list = this.journal.querySelector('.journal__list');
        list.innerHTML = '';
        let item = document.createElement('li');
        item.className = 'journal__item journal__item--empty';
        item.textContent = 'There is no journal yet';
        list.appendChild(item);
    }
    add(string) {
        let list = this.journal.querySelector('.journal__list');
        if (list.firstElementChild.classList.contains('journal__item--empty')) {
            list.innerHTML = '';
        }
        let item = document.createElement('li');
        item.className = 'journal__item';
        item.innerHTML = string;
        list.insertBefore(item, list.children[0]);
    }
}

export default Journal;