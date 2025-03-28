# Movie API

Movie API är ett RESTful API som låter användare hantera information om filmer. APIet erbjuder CRUD-operationer för att skapa, hämta, uppdatera och ta bort filmer i en Mongodb databas. APIet har möjlighet att fungera som en backend för en frontend-applikation.

Temat för detta API är filmer, och varje film innehåller information som titel, genre, datum vid skapelse och regissör.

## Installation

För att köra detta projekt lokalt, följ dessa steg:

1. Klona repositoryn.

2. Gå till projektmappen restfulapi.

3. Installera npm med npm install.

4. Du behöver en .env fil med följande info: MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/Filmdb?retryWrites=true&w=majority
PORT=4000. För att lyckas med MongoDb anslutningen så behövs MongoDb Atlas samt att skapa en databas med namnet "Filmdb". Autentiserings info kommer att finnas vid "edit connection".

5. Starta med npm start, apiet är tillgängligt på din localhost. 

## api endpoints
1. Hämta alla filmer
* URL: http://localhost:4000/api/movies/
* Metod: GET
* Hämtar en lista av alla filmer

2. Skapa en ny film
* URL: http://localhost:4000/api/movies/
* Metod: POST
* Skapar en ny film i databasen

3. Uppdatera en film
* URL: http://localhost:4000/api/movies/:id
* Metod: PUT
* Uppdaterar en film efter filmens unika id representerat i compass.

4. Ta bort en film
* URL: http://localhost:4000/api/movies/:id
* Metod: DELETE
* Tar bort en filmen vars id angetts


Metod: GET

Beskrivning: Hämtar en lista med alla filmer i databasen.

## Felmeddelanden

- **400 Bad Request**: När en förfrågan saknar nödvändiga info.
- **404 Not Found**: När filmen inte finns i databasen.
- **500 Internal Server Error**: Om något oväntat skett på servern.