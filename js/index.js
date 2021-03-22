const countryName = document.createElement("div");
countryName.id = "country_name";

const countryText = document.createElement('p');
countryText.className = 'nameCountry';

function displayCountry(evt) {
  countryText.textContent = evt.target.getAttribute("data-name");
  countryName.style.top = evt.pageY + 40 + 'px';
  countryName.style.left = evt.pageX - 60 + 'px';
  countryName.appendChild(countryText);
  document.body.appendChild(countryName);
}

function removeCountry(evt) {
  document.body.removeChild(document.getElementById('country_name'));
}


