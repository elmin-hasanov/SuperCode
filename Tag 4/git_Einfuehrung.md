1. Git vorteile
   - Daten sind immer gespeichert
   - Zusammenarbeit möglich
   - Direkte verbindung zu vs Code
   - Wir können auf alte versionen zugreifen

2. Wie erstelle ich ein Repo
    
    - auf das + Icon klicken.
    - Owner, Title hinzufügen 
    - privat vs public

   1. **WICHTIG**: ERST ORDNER IN VS REINZIEHEN DANN ERST EINGEBEN!
   2. git init ---> Initalisiert ein neues Git Reposetory im Aktuellen Verzeichnis. (Lokal)
   3. git add README.md ---> (optional) Fügt eine Readme.md datei hinzu
   4. git commit -m "first commit" ---> Erstellt ein neune Commit mit dem Kommentar " first commit " der alle änderungen im Ordner speichert (am besten kurz halten und auf Englsich)
   5. git branch -M main  ---> Erstellt einen main branch
   6. git remote add origin https://github.com/MarzioCostantini/test_repo.git ---> Fügt ein neue Remote Reposetory hinzu mit dem Namen "origin" (Lokales Repo wird dann zu einen Remote Repo umgewandelt -> Daten sind nun Online)
   7. git push -u origin main ---> Lädt all lokalen Commits auf des Remote Repo names origin hoch und legt main als Standard Branch fest. Das "-u" argument gibt an, das der loakle Branch beim nächsten mal, wenn "git push" ausgeführt wird, automatisch mit dem Remote Repo synchonisiert wird.
 
3. Git Befehle
    - **git add .**  -> fügt eine Änderung aus den Arbeisverzeichnis zu Staging area hinzu (ALLE)
    - **git add _FILENAME_** -> fügt nur eine spezielle Datei in die Staging area hinzu (EINZELN)
    - **git commit -m "TEXT was geändert wurde"** => erstelltz ein neune commit mit der Nachricht "Text was geändert wurde"
    - **git push** -> ladet die datein die zuvor mit git add . in die staging area bewegt worden sidn in das git repo

    - git log -> hier kann ich mir alle Commits angucken die gemacht worden sind  (mit "q" kann ich die Ansicht verlassen)
    - git status -> hier kann ich sehen welche datein veränder worden sind
    - git pull -> damit lade ich die geänderte datein runter (benötigen wir wenn wir mit mehreren rechner oder kollegen arbeiten)
  
4. Git in VS Code einrichten 
      1. git --version schauen ob es da ist
      2. git config --global user.name "YOUR_USERNAME"
      3. git config --global user.email "EMAIL"
      4. git config --global --list -> To check the info you just provided
