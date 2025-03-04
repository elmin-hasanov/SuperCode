import "./App.css"
import Home from "./pages/Home/Home";


// # Start einer React App

// 1. npm create vite@latest .
// 2. namen eingeben und enter drücken
// 3. React auswählen
// 4. TS asuwahälen
// 5. npm Install //- Installiert alle packet die für react benötigt werden
// 6. npm run dev //- Startet den live server


// # Ordner Strucktur in React
// npm = node packege manager

// node_modules = //- Dort befinden sich alle packet für react die benötig werden um das ganze zum laufen zu bringen

// public //- Dort werden Fotos oder Fonts abgelegt. Hier kann ich ganz normal über den pfad auf die Bilder zugreifen zb: ./public/bild.jpeg

// src // - Hier werden wir zu 95% unsere Zeit verbingen. Hier erstelle ich einen neuen Ordner "components" & "pages"

// src/assets //- Hier kann ich auch bilder ablegen, muss sie aber über "import" importieren um diese zu benutzen

// App.tsx //- das ist unser dreh und angel Punkt unserer App. Hier werden die Seiten verteilt zb "die page <Home/> soll auf pfad "/" erreichbar sein usw (kommt ers später)

// App.css (global) //- Hier sind die Styles für die App.tsx

// index.css (global) //- Hier schriebe ich alle globalen styles rein wir zb * oder root sachen



const App = () => {
  //! Hier schreiben wir TS Code wie zb Funktionen oder States und Hooks



  //! In den return schreiben wir HTML 
  return (
    <>
      <Home/>
    </>


  );
}

export default App;