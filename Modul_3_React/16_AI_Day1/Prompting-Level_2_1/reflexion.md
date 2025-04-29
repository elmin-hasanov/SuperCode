# 🧾 Aufgabenbeschreibung

🏁 **Lernziel:** Nach dieser Übung kannst du die Few-shot-Technik einsetzen, um die KI gezielt zu einem bestimmten Stil oder Vorgehen zu führen.

Bei Few-shot Prompting gibst du der KI ein oder mehrere Beispiele mit, aus denen sie lernen kann, wie \*\*\*\*du etwas möchtest. Die KI orientiert sich dann an Stil, Struktur oder Logik dieser Beispiele, um besseren, zielgerichteten Output zu erzeugen – vor allem bei komplexeren Aufgaben. Der Begriff stammt aus dem maschinellen Lernen und beschreibt ursprünglich Modelle, die aus sehr wenigen Beispielen verallgemeinern können.

# ✍️ Prompts

## ✍️ Mein Prompt 1

Erstelle mir weiter Buttons und Code format beibehalten

const Button = ({ label }) => (
<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 
          rounded-lg shadow-md transition duration-300">
{label}
</button>
);

## 🧠 Was hat gut funktioniert?

const Button = ({ label }) => (
<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 
          rounded-lg shadow-md transition duration-300">
{label}
</button>
);

const SecondaryButton = ({ label }) => (
<button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 
          rounded-lg shadow-md transition duration-300">
{label}
</button>
);

const SuccessButton = ({ label }) => (
<button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 
          rounded-lg shadow-md transition duration-300">
{label}
</button>
);

const DangerButton = ({ label }) => (
<button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 
          rounded-lg shadow-md transition duration-300">
{label}
</button>
);
