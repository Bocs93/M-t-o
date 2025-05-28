const apiKey = "27632193e6943a29c1fceeabbef30cba"; // Ta clé OpenWeather
const input = document.getElementById("city-input");
const suggestionsContainer = document.getElementById("suggestions-container");
const cityDisplay = document.getElementById("city-display");
const hourlyPanel = document.querySelector(".hourly");

let debounceTimeout;

// 🔍 Autocomplétion dynamique
input.addEventListener("input", () => {
  clearTimeout(debounceTimeout);
  const query = input.value.trim();

  if (query.length < 1) {
    suggestionsContainer.innerHTML = "";
    return;
  }

  debounceTimeout = setTimeout(async () => {
    try {
      const response = await fetch(
        `https://geo.api.gouv.fr/communes?nom=${encodeURIComponent(
          query
        )}&fields=departement&boost=population&limit=5`
      );

      if (!response.ok) throw new Error("Erreur API");

      const data = await response.json();
      suggestionsContainer.innerHTML = "";

      if (data.length === 0) {
        suggestionsContainer.innerHTML =
          "<div class='suggestion-item'>Aucune ville trouvée</div>";
        return;
      }

      data.forEach((commune) => {
        const suggestion = document.createElement("div");
        suggestion.classList.add("suggestion-item");
        suggestion.textContent = `${commune.nom} (${commune.departement.nom})`;

        suggestion.addEventListener("click", () => {
          input.value = commune.nom;
          suggestionsContainer.innerHTML = "";

          // 🏙️ Affiche la ville sélectionnée
          cityDisplay.textContent = `Votre bulletin météo du jour pour : ${commune.nom}`;

          // ☁️ Récupère la météo
          fetchHourlyForecast(commune.nom);
        });

        suggestionsContainer.appendChild(suggestion);
      });
    } catch (error) {
      console.error("Erreur de récupération des suggestions :", error);
      suggestionsContainer.innerHTML =
        "<div class='suggestion-item'>Erreur de chargement</div>";
    }
  }, 300);
});

// 🎯 Gestion de l'appui sur Entrée
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const city = input.value.trim();
    if (city) {
      cityDisplay.textContent = `Votre bulletin météo du jour pour : ${city}`;
      fetchHourlyForecast(city);
      suggestionsContainer.innerHTML = "";
    }
  }
});

// 🌤️ Requête OpenWeather - prévisions horaires
function fetchHourlyForecast(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}&lang=fr`
  )
    .then((res) => res.json())
    .then((data) => {
      if (!data.list) throw new Error("Ville introuvable");
      updateHourly(data.list.slice(0, 4)); // 4 prochaines tranches de 3h
    })
    .catch((error) => {
      console.error("Erreur API météo :", error);
      alert("Ville introuvable ou erreur réseau.");
    });
}

// 🕓 Met à jour l'affichage des prévisions horaires
function updateHourly(hours) {
  hourlyPanel.innerHTML = "";
  hours.forEach((hour) => {
    const date = new Date(hour.dt * 1000);
    const hourLabel = `${date.getHours()}h`;
    const temp = Math.round(hour.main.temp);
    const icon = hour.weather[0].icon;
    const description = hour.weather[0].description;

    hourlyPanel.innerHTML += `
      <div class="hour">
        <p>${hourLabel}</p>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
        <p>${temp}°</p>
      </div>
    `;
  });
}



