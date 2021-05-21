import './App.css';
import ImageCard from "./ImageCard";
import PageHeading from "./PageHeading";
import TextContent from "./TextContent";

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
// 3. Is je component af, maar "gehardcode", alles heeft altijd dezelfde waarde
//    Gebruik props om het component dynamisch te maken
// - [x] Voeg een attribuut toe in de JSX (Kies zelf een naam)
// - [x] Geef het attribuut een waarde
// - [x] In de component functie gebruik maken van de "prop" die is doorgegeven
//      - [x] Props toevoegen als parameter van de component functie
//      - [x] De juist component eruit halen en gebruiken in je component (subject)
// - [x] Interpoleren in JSX
function App() {
    return (
        <div className="App">
            <PageHeading pageTitle={"Image gallery"}/>
            <PageHeading pageTitle={"About"}/>
            <PageHeading pageTitle={"Contact"}/>

            <TextContent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet animi aperiam cumque deserunt ducimus illo impedit ipsa ipsam labore magnam, maiores quaerat quibusdam quo rem sunt tenetur vel veniam.
            </TextContent>

            <TextContent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet animi aperiam cumque deserunt ducimus illo impedit ipsa ipsam labore magnam, maiores quaerat quibusdam quo rem sunt tenetur vel veniam.
            </TextContent>

            <ImageCard subject={"nature"}/>
            <ImageCard subject={"pasta"}/>
            <ImageCard subject={"cat"}/>
            <ImageCard subject={"bouldering"}/>

        </div>
    );
}


export default App;
