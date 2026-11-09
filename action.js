window.onload = () => {
    // Récupérer les données envoyées par le formulaire (après le ? dans l'URL)
    const paramsString = document.location.search;
    const searchParams = new URLSearchParams(paramsString);

    // Boucle sur chaque donnée
    for (const param of searchParams) {
        console.log(param);

        const elementId = param[0];     // ex : "name"
        const elementValue = param[1];  // ex : "MOKRAOUI"
        const element = document.getElementById(elementId);

        if (element !== null) {
            element.textContent = elementValue;
        }

        // Lien Google Maps pour l'adresse
        if (param[0] === "address") {
            element.href = `https://www.google.com/maps/search/?api=1&query=${elementValue}`;
        }
        // Lien mail pour l'email
        else if (param[0] === "email") {
            element.href = `mailto:${elementValue}?subject=Hello!&body=What's up?`;
        }
    }
};
