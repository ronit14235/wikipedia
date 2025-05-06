function handleSubmit(event){
    event.preventDefault();
    
    const inputValue = document.querySelector('.js-search-input').value;
    const searchQuery = inputValue.trim();

    console.log(searchQuery);
}

const form = document.querySelector('.js-search-form');
form.addEventListener('submit', handleSubmit);