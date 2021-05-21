import './App.css';

// Beginscherm van applicatie
// Het is JavaScript, maar sommige delen lijken op HTML syntax
// JSX (JavaScript dialect, combinatie JavaScript en HTML)

//Hoe maak je een component
// 1. Begin de HTML gewoon uit te schrijven (maak eerst wat je wil)
// 2. Als je tevreden bent met je pagina kun je een component refactoren/ opschonen
// - [] Kopieer een component met alle data erin
// - [] Zet het in een ander JavaScript bestandje
// - [] Maak een component functie
// - [] Die component functie returned JSX
// - [] Importeer je component functie in APP (of waar je hem wil gebruiken)
// - [] Gebruik component functie met JSX syntax
function App() {
    return (
        <div className="App">
            <h2>Nature</h2>
            <img src="
https://source.unsplash.com/1600x900/?nature,water" alt=""/>

            <h2>Pasta</h2>
            <img src="
https://source.unsplash.com/1600x900/?pasta" alt=""/>

            <h2>Travel</h2>
            <img src="
https://source.unsplash.com/1600x900/?travel" alt=""/>

            <h2>Cats</h2>
            <img src="
https://source.unsplash.com/1600x900/?cat" alt=""/>



        </div>
    );
}


export default App;
