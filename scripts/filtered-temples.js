const temples = [
    { name: "Kirtland Temple", location: "Ohio, USA", dedicated: 1836, area: 15000, image: "https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-1275-main.jpg" },
    { name: "Salt Lake Temple", location: "Utah, USA", dedicated: 1893, area: 253000, image: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg" },
    { name: "Accra Ghana Temple", location: "Ghana", dedicated: 2004, area: 17500, image: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg" },
    { name: "Aba Nigeria Temple", location: "Nigeria", dedicated: 2005, area: 11500, image: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg" },
    { name: "Rome Italy Temple", location: "Italy", dedicated: 2019, area: 41000, image: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg" },
    { name: "Paris France Temple", location: "France", dedicated: 2017, area: 44000, image: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg" },
    { name: "Durban South Africa Temple", location: "South Africa", dedicated: 2020, area: 19800, image: "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936-main.jpg" },
    { name: "Freiberg Germany Temple", location: "Germany", dedicated: 1985, area: 21000, image: "https://churchofjesuschristtemples.org/assets/img/temples/freiberg-germany-temple/freiberg-germany-temple-16459-main.jpg" },
    { name: "Manila Philippines Temple", location: "Philippines", dedicated: 1984, area: 26600, image: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg" }
];

function displayTemples(list) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    list.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${temple.image}" alt="${temple.name} in ${temple.location}" loading="lazy">
            <h3>${temple.name}</h3>
            <p><strong>${temple.location}</strong></p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area.toLocaleString()} sq ft</p>
        `;

        gallery.appendChild(card);
    });
}

document.getElementById("home").addEventListener("click", () => displayTemples(temples));
document.getElementById("old").addEventListener("click", () => displayTemples(temples.filter(t => t.dedicated < 1900)));
document.getElementById("new").addEventListener("click", () => displayTemples(temples.filter(t => t.dedicated > 2000)));
document.getElementById("large").addEventListener("click", () => displayTemples(temples.filter(t => t.area > 90000)));
document.getElementById("small").addEventListener("click", () => displayTemples(temples.filter(t => t.area < 10000)));

displayTemples(temples);

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
