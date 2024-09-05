export function removeCard() {
  const prevCard = document.querySelector(".card");
  if (prevCard) prevCard.remove();
}

export function showError(header, messageError) {
  const errorElement = document.querySelector(".card");
  if (!errorElement) {
    const html = `<div class="card">${messageError}</div>`;
    header.insertAdjacentHTML("afterend", html);
  }
}

export function addCard(
  header,
  { name, country, temp_c, conditionText, image }
) {
  const html = `
  <div class="card">
  <h2 class="card-city">${name} <span>${country}</span></h2>
  <div class="card-weather">
  <div class="card-value">${temp_c}<sup>°c</sup></div>
  <img class="card-img" src="${image}" alt="Weather Icon" />
  </div>
  <div class="card-description">${conditionText}</div>
  </div>`;
  header.insertAdjacentHTML("afterend", html);
}
