const termekLista = [
    { nev: "Táska 1", ar: 20 },
    { nev: "Táska 2", ar: 30 },
    { nev: "Táska 3", ar: 25 },
    // Ide add hozzá további termékeket
];

const vasarlasButton = document.getElementById("vasarlasButton");

vasarlasButton.addEventListener("click", () => {
    window.location.href = "termek.html"; // Ezzel a kóddal az új oldalra navigálsz
});
const vasarlasOldal = document.getElementById("vasarlasOldal");



    // A termékek listájának megjelenítése
    termekLista.forEach((termek, index) => {
        const termekElem = document.createElement("div");
        termekElem.classList.add("termek");
        termekElem.innerHTML = `
            <p>${termek.nev}</p>
            <p>Ár: $${termek.ar}</p>`;
       

    });
