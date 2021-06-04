const form = document.querySelector('#searchForm');
const container = document.querySelector('.container');

form.addEventListener('submit', async function (e) {
   e.preventDefault();
   const searchTerm = form.elements.query.value;
   const config = { params: { q: searchTerm } };
   const res = await axios.get('http://api.tvmaze.com/search/shows?q=', config);
   form.elements.query.value = '';
   removeImages();
   makeImages(res.data);
});

const makeImages = (shows) => {
   for (let result of shows) {
      if (result.show.image) {
         const img = document.createElement('img');
         img.src = result.show.image.medium;
         container.append(img);
      }
   }
}

const removeImages = () => {
   container.innerHTML = '';
}