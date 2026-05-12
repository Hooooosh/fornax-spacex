# SpaceX Frontend Fejlesztői Feladat

### Áttekintés

Ez a projekt egy Fornax ICT számára készített demóprogram. 

A teljes feladatleírást megtalálod [itt](./public/SpaceX%20–%20Frontend%20fejlesztő%20feladat.md).

### Helyi Devszerver Felállítása

1. Töltsd le, vagy clone-ozd le a projektet a [Github oldalról](https://github.com/Hooooosh/fornax-spacex)
2. A gyökérben nyiss meg egy parancssort, és futtasd a következőket:
    - `npm install`
    - `npx vite` vagy `npm run dev`

### Megjegyzések

- Több helyen használtam láthatatlan `<template>`-t közvetlenül .html-ben, mivel js-ben nyers innerHtml stringeket a tailwind compiler nem szokta észrevenni, és a beágyazott css classokból sokszor a csakis ott írtakat kihagyja.
- A WaterfallText kezelője class lett, hogy a jobban tudjam követni a komponens alapú webappok struktúráját, és hogy futásidő alatt ne legyen bármilyen okból hibalehetőség.
- A betöltő fetch kérésre a feladatleírás szerint került egy 3 másodperces manuális késleltetés. Ezt a [FETCH_DELAY](src\api\getRockets.js) konstanson keresztül lehet változtatni.

### Fontos Linkek

- Repo link: https://github.com/Hooooosh/fornax-spacex
- Élő oldal: https://fornax-spacex.vercel.app/

### Használt Technológiák

- TailwindCSS
