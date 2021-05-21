import './App.css';
import ImageCard from "./ImageCard";

// Beginscherm van applicatie
// Het is JavaScript, maar sommige delen lijken op HTML syntax
// JSX (JavaScript dialect, combinatie JavaScript en HTML)

//Hoe maak je een component
// 1. Begin de HTML gewoon uit te schrijven (maak eerst wat je wil)
// 2. Als je tevreden bent met je pagina kun je een component refactoren/ opschonen
// - [x] Kopieer een component met alle data erin
// - [x] Zet het in een ander JavaScript bestandje
// - [x] Maak een component functie
// - [x] Die component functie returned JSX
// - [x] Optioneel: voeg een DIV toe als je component uit meerdere tags bestaat
// - [x] Exporteer je component functie (export default 'functienaam')
// - [x] Importeer je component functie in APP (of waar je hem wil gebruiken)
// - [x] Gebruik component functie met JSX syntax
function App() {
    return (
        <div className="App">
            <ImageCard />
            <ImageCard />
            <ImageCard />
{/*            <h2>Nature</h2>*/}
{/*            <img src="*/}
{/*https://source.unsplash.com/1600x900/?nature,water" alt=""/>*/}

{/*            <h2>Pasta</h2>*/}
{/*            <img src="*/}
{/*https://source.unsplash.com/1600x900/?pasta" alt=""/>*/}

{/*            <h2>Travel</h2>*/}
{/*            <img src="*/}
{/*https://source.unsplash.com/1600x900/?travel" alt=""/>*/}

{/*            <h2>Cats</h2>*/}
{/*            <img src="*/}
{/*https://source.unsplash.com/1600x900/?cat" alt=""/>*/}



        </div>
    );
}


export default App;
