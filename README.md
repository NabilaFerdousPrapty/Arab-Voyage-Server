
# ArabVoyage Server

ArabVoyage is a web application designed to help users find and explore tourist spots around the world. This server-side application is built using Node.js, Express, and MongoDB.

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the ArabVoyage server, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/arabvoyage-server.git
   cd arabvoyage-server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your MongoDB credentials and other configuration details:
   ```
   PORT=5000
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   ```

## Configuration

The server configuration is managed through environment variables. Ensure you have the following variables set in your `.env` file:

- `PORT`: The port on which the server will run.
- `DB_USER`: Your MongoDB username.
- `DB_PASSWORD`: Your MongoDB password.

## API Endpoints

### Add a Spot
- **Endpoint:** `POST /addSpot`
- **Description:** Add a new tourist spot.
- **Request Body:**
  ```json
  {
    "spotName": "string",
    "countryName": "string",
    "locationName": "string",
    "shortDescription": "string",
    "image": "string",
    "average_cost": "number",
    "season": "string",
    "travelTime": "string",
    "totalVisitorsPerYear": "number",
    "email": "string"
  }
  ```

### Get All Spots
- **Endpoint:** `GET /spots`
- **Description:** Retrieve all tourist spots.

### Get My List
- **Endpoint:** `GET /myList/:email`
- **Description:** Retrieve tourist spots added by a specific user.
- **URL Parameters:** `email` - User's email.

### Get Tourist Spots by Country
- **Endpoint:** `GET /touristSpots/:country_Name`
- **Description:** Retrieve tourist spots by country name.
- **URL Parameters:** `country_Name` - Name of the country.

### Get Single Spot
- **Endpoint:** `GET /singleSpot/:id`
- **Description:** Retrieve a single tourist spot by ID.
- **URL Parameters:** `id` - Spot ID.

### Update Spot
- **Endpoint:** `PUT /updateSpot/:id`
- **Description:** Update details of a tourist spot.
- **URL Parameters:** `id` - Spot ID.
- **Request Body:** Same as Add a Spot.

### Delete Spot
- **Endpoint:** `DELETE /deleteSpot/:id`
- **Description:** Delete a tourist spot by ID.
- **URL Parameters:** `id` - Spot ID.

### Get All Countries
- **Endpoint:** `GET /countries`
- **Description:** Retrieve all countries.

## Usage

1. **Start the server:**
   ```bash
   npm start
   ```

2. **Access the server:**
   Open your browser and navigate to `http://localhost:5000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```
