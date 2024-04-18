// Attend que le contenu de la page soit chargé
document.addEventListener("DOMContentLoaded", function () {
  // Effectue une requête pour récupérer les données sur tous les pays
  fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json()) // Convertit la réponse en JSON
      .then(data => {
          const countryCardsContainer = document.getElementById('country-cards-container'); // Sélectionne le conteneur des cartes de pays
          data.forEach(country => { // Parcourt chaque pays dans les données
              // Crée une nouvelle carte avec Bootstrap Grid System (col-md-4 signifie qu'il y aura 3 cartes par ligne sur un écran moyen)
              const card = document.createElement('div');
              card.classList.add('card', 'col-md-5');

              // Crée une div pour le corps de la carte
              const cardBody = document.createElement('div');
              cardBody.classList.add('card-body');
              card.appendChild(cardBody);

              // Crée une balise img pour afficher le drapeau du pays
              const flag = document.createElement('img');
              flag.src = country.flags.png;
              flag.alt = `Flag of ${country.name.common}`;
              flag.classList.add('card-img-top');
              cardBody.appendChild(flag);

              // Ajoute le nom du pays en tant que titre de la carte
              const name = document.createElement('h5');
              name.classList.add('card-title');
              name.textContent = country.name.common;
              cardBody.appendChild(name);

              // Ajoute la région du pays
              const region = document.createElement('p');
              region.classList.add('card-text');
              region.textContent = `Region: ${country.region}`;
              cardBody.appendChild(region);

              // Ajoute la capitale du pays
              const capital = document.createElement('p');
              capital.classList.add('card-text');
              capital.textContent = `Capital: ${country.capital}`;
              cardBody.appendChild(capital);

              // Ajoute la population du pays
              const population = document.createElement('p');
              population.classList.add('card-text');
              population.textContent = `Population: ${country.population}`;
              cardBody.appendChild(population);

              // Ajoute les langues parlées dans le pays
              const languages = document.createElement('p');
              languages.classList.add('card-text');
              languages.textContent = `Languages: ${Object.values(country.languages).join(', ')}`;
              cardBody.appendChild(languages);

              // Ajoute la carte au conteneur des cartes de pays
              countryCardsContainer.appendChild(card);
          });
      })
      .catch(error => console.log('Error fetching countries:', error)); // Gère les erreurs éventuelles lors de la récupération des données
});
