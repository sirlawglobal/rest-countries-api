const cardContainer = document.querySelector(".card-container");

let cardHTML = ""
countryData.forEach((data) =>{

cardHTML += `
<div class="card" data-region="${data.region}">
<div class = "flag-container">
<img src=${data.flags.svg} alt="flag">
</div>


<div class="card-content">
   <h3 class="country-name">${data.name}</h3>

   <div>
      <p>Population:<span>${data.population}</span></p>
  <p>Region:<span class="country-region">${data.region}</span></p>
  <p>Capital: <span>${data.capital}</span></p>
   </div>

</div>

</div>
`
})

cardContainer.innerHTML = cardHTML


    // Get references to HTML elements
    const searchInput = document.getElementById('searchInput');
    const categorySelect = document.getElementById('categorySelect');
   //  const cardContainer = document.getElementById('cardContainer');
    const cards = document.querySelectorAll('.card');

    // Add event listeners
    searchInput.addEventListener('input', search);
    categorySelect.addEventListener('change', search);

    // Search function
    function search() {
      const searchTerm = searchInput.value.toLowerCase();
      const selectedCategory = categorySelect.value.toLowerCase();

      cards.forEach(card => {
        const cardName = card.querySelector('h3').textContent.toLowerCase();
        const cardRegion = card.getAttribute('data-region').toLowerCase();

        const matchesSearch = cardName.includes(searchTerm);
        const matchesCategory = selectedCategory === '' || cardRegion === selectedCategory;

        if (matchesSearch && matchesCategory) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }



