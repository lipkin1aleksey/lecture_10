function Journal(selector) {
    let result = '';

    const journal = document.querySelector(`${selector} .journal`);
    const showButton = document.querySelector(`${selector} .log`);
    const clearButton = document.querySelector(`${selector} .journal__clear`)
    
    showButton.addEventListener('click', toggleJournal);
    clearButton.addEventListener('click', clearJournal);

    function toggleJournal() {
        this.closest('.calc').classList.toggle('calc--journal-open');
    };
    function clearJournal() {
        let list = journal.querySelector('.journal__list');
        list.innerHTML = '';
        let item = document.createElement('li');
        item.className = 'journal__item journal__item--empty';
        item.textContent = 'There is no journal yet';
        list.appendChild(item);
    }
    this.add = function (string) {
        let list = journal.querySelector('.journal__list');
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