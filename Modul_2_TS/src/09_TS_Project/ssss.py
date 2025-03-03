import requests
from bs4 import BeautifulSoup

# URL der IMDb Top 250 Seite
url = 'https://www.imdb.com/chart/top/'

# HTTP-Anfrage senden
response = requests.get(url)

# BeautifulSoup verwenden, um die HTML-Seite zu parsen
soup = BeautifulSoup(response.text, 'html.parser')

# Alle Filme extrahieren
movies = soup.select('.lister-list tr')

# Die Filme in einem passenden JSON-Format speichern
top_250 = []

for movie in movies:
    title = movie.select_one('.titleColumn a').text
    year = movie.select_one('.titleColumn span').text.strip('()')
    director = movie.select_one('.titleColumn a')['title']
    rating = movie.select_one('.imdbRating strong').text
    runtime = movie.select_one('.runtime').text if movie.select_one('.runtime') else "N/A"
    genres = movie.select_one('.genre').text.strip().split(", ") if movie.select_one('.genre') else ["N/A"]

    # Film-Details im Format speichern
    top_250.append([title, year, director, runtime, genres, rating])

# Die Liste der Top 250 Filme ausgeben
print(top_250)
