
export default {

  getData(searchTerm = '') {
          
    if(searchTerm === 'Twilight') return Promise.reject(new Error('Let\'s pretend those books don\'t exist'));
  
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}`)
      .then(response => response.json());
  }
};