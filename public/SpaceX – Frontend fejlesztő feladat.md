SpaceX – Frontend fejlesztői feladat

A feladat áttekintése
Készíts egy egyoldalas (SPA) webalkalmazást, amelyen keresztül a SpaceX rakétáit nemcsak megjelenítjük, hanem aktívan "menedzseljük" is egy szimulált felületen. A feladat célja a frontend gondolkodásmódod, kódminőséged, valamint az adatkezelési és UX-érzéked felmérése.

1. Adatlekérés és előkészítés
Az adatokat az alábbi nyilvános API-ról kell betölteni:
Endpoint: https://api.spacexdata.com/v4/rockets
A nyers API választ ne közvetlenül használd a komponensekben. Készíts egy mapper réteget, amely a válaszból egy saját, belső adatmodellt állít elő – csak azokat a mezőket tartsd meg, amelyekre az alkalmazás logikája ténylegesen szükséges (pl. név, aktív státusz, fokozatok száma, hajtóművek száma, teherbírás LEO-ra, magasság, átmérő, súly, kép).
2. Interaktív funkciók
Flotta-kalkulátor. Minden rakéta mellett legyen egy „Hozzáadás a flottához" gomb. A képernyő tetején (sticky vagy fix sávban) folyamatosan jelenjen meg:
a flottába helyezett rakéták összesített teherbírása (LEO, kg),
a flottába helyezett rakéták átlagos kilövési költsége (a 3. pont képlete alapján).
A flottából rakétákat el is lehessen távolítani.
Aktív / Összes kapcsoló. Egy toggle gombbal váltani lehessen a következő két nézet között:
„Csak az aktív rakéták",
„Összes rakéta".
A lista azonnal, újratöltés nélkül frissüljön.
Összehasonlító nézet. A felhasználó pontosan két rakétát kijelölhet, és ekkor jelenjen meg egy összehasonlító táblázat, amelyben a két rakéta főbb paraméterei (legalább: magasság, átmérő, súly, fokozatok száma, hajtóművek száma, LEO teherbírás, kilövési költség) egymás mellett láthatók.
3. Kilövési költség kalkuláció
Az API nem ad vissza konkrét kilövési árat, ezért egy saját függvényben kell kiszámolni rakétánként az alábbi szabályok szerint:
Alapdíj: $5,000,000
Ha a rakéta több mint 2 fokozatú (stages > 2): +10% felár az addigi összegre
Minden egyes hajtómű (engines.number) után: +$50,000
4. Technikai elvárások
Loading state. Amíg az API válaszol, jelenjen meg egy „Kapcsolódás a SpaceX szerveréhez…" felirat. A betöltést egy szándékos 3 másodperces setTimeout késleltesse, hogy a loading állapot megvalósítása jól látható legyen.
Alapértelmezett rendezés. A lista induláskor kilövési költség szerint, növekvő sorrendben jelenjen meg.

Tech stack:
- Vanilla JavaScript (semmilyen frontend framework, mint React, Vue, Svelte – nem használható)
- CSS könyvtár szabadon választható (Tailwind, Bootstrap, saját CSS, stb.)
- A vizuális megjelenés igazodjon a SpaceX hivatalos oldalának stílusvilágához (sötét háttér, letisztult betűtípus)
- Hosting. A kész alkalmazást deployolva, élő linken várjuk (Vercel, Netlify vagy hasonló).

Mit várunk a leadáskor
- Élő, működő demó link
- A forráskód GitHub (vagy hasonló) repositoryban, publikus elérhetőséggel
- Rövid README a futtatás módjáról és az esetleges fejlesztői döntésekről