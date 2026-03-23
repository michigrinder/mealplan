# Meal Plan (Mike & Ana)

Interaktive Wochenplanung als statische Web-App.  
Funktioniert lokal (auch auf dem iPhone) und kann über GitHub Pages geteilt werden.

## Dateien
- `index.html`: Einstiegspunkt der Web-App.
- `style.css`: Styling.
- `script.js`: komplette App-Logik.
- `meal_plan_structured.csv`: Datenquelle zum Laden/Ersetzen.
- `AGENTS.md`: Contributor-Hinweise.

## Funktionen
- Getrennte Planung für **Mike** und **Ana**
- Zeilen hinzufügen, bearbeiten, verschieben (Tag/Meal), löschen
- CSV laden (`CSV laden`)
- CSV exportieren (`Plan exportieren`)
- Aufklappbare Einkaufsliste mit Filtern (`Beide`, `Nur Mike`, `Nur Ana`)

## Nutzung lokal
1. `index.html` im Browser öffnen.
2. Optional iPhone: Datei in der Dateien-App öffnen.

## CSV-Formate (Import)
1. Kombiniert: `Day,Meal,Food,Mike_amount,Ana_amount`
2. Personenbasiert: `Person,Day,Meal,Food,Amount`

## Daten-Workflow (ohne Token, empfohlen)
Die App kann auf GitHub Pages **nicht direkt ins Repo schreiben**.  
Deshalb:
1. In der App Änderungen machen.
2. `Plan exportieren` klicken.
3. Exportierte Datei als `meal_plan_structured.csv` im Repo ersetzen.
4. Commit & Push:
   - `git add meal_plan_structured.csv`
   - `git commit -m "chore: update meal plan data"`
   - `git push`

## GitHub Pages
1. Repo nach GitHub pushen.
2. `Settings -> Pages -> Deploy from a branch`.
3. Branch `main`, Ordner `/root`.
4. URL: `https://<username>.github.io/<repo>/`

## Zugriffsschutz
GitHub Pages hat keinen echten eingebauten Passwortschutz für statische Seiten.  
Für echten Schutz: Cloudflare Access (Allowlist deiner E-Mail-Adressen, kein Self-Service).
