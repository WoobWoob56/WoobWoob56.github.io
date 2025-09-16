window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("codehere").textContent =
    "This is a test of utilizing HTML, CSS, and JavaScript to display GIS information.";

  // Initialize Leaflet map
  const map = L.map("map").setView([46.4953, -84.3453], 13); // Sault Ste. Marie

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  L.marker([46.4953, -84.3453])
    .addTo(map)
    .bindPopup("Sault Ste. Marie, MI")
    .openPopup();
    // Add geocoder (search bar) control
L.Control.geocoder({
  defaultMarkGeocode: true
}).addTo(map);
});
