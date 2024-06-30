# BrainSlayers GiftFinder App

GiftFinder is a dynamic single-page application designed to help adults find the perfect LEGO gifts for kids. The app was developed as part of a 24-hour hackathon for LEGO and BrainStation. It aims to enhance the old search feature, making decision-making faster and more efficient, ultimately reducing the time users spend on the app and increasing conversion rates.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- Dynamic search functionality for finding LEGO gifts.
- Client-side developed with Vite, React, HTML, JavaScript, and SASS.
- Server-side built with Node.js, Express.js for RESTful APIs.
- Custom endpoints to fetch product data.
- Utilises modern npm packages for optimised performance.

## Technologies Used

### Frontend

- **Vite**
- **React**
- **HTML**
- **JavaScript**
- **SASS**
- **npm Packages:**
  - `sass`
  - `axios`
  - `react-router-dom`

### Backend

- **Express.js**
- **npm Packages:**
  - `cors`
  - `dotenv`
  - `express`

## Repositories

Frontend Repository: giftfinder-client
Backend Repository: giftfinder-server

## Installation

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

### Clone the Repository

#### Client

```zsh
git clone https://github.com/mohamedoa/giftfinder-client.git
cd giftfinder-client
npm install
```

#### Server

```zsh
git clone https://github.com/mohamedoa/giftfinder-server.git
cd giftfinder-server
npm install
```

### Install Dependencies

#### Client-side

```zsh
cd Client
npm install
```

#### Server-side

```zsh
cd ../Server
npm install
```

## Usage

### Running the Client

```zsh
cd Client
npm run dev
```

### Running the Server

```zsh
cd Server
npm run dev
```

### Configuration

Both the client and server require environment variables to be set. Copy the .env.sample file to .env in both repositories and configure the necessary variables.

## API Endpoints

### Base URL

`http://localhost:8081/`

### Endpoints

- **GET /products**: Retrieve a list of all available products.
- **GET /products/:id**: Retrieve details of a specific product by ID.
- **GET /categories**: Retrieve a list of all available categories.
- **GET /categories/:id/products**: Retrieve details of a specific product by category ID.

Developed during a hackathon by a dedicated team at LEGO and BrainStation. Let's make gift-finding a breeze!
