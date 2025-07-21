# 🌤️ Weather App – Frontend

This is the **React-based frontend** of the Weather App built for the Fidenz Technologies assignment. It authenticates users using **Auth0**, displays real-time weather data using the **OpenWeatherMap API**, and communicates securely with the Spring Boot backend.

---

## 🚀 Features

- 🔐 Auth0 login system (email/password)
- 🌍 View weather of cities displayed in cards
- 🌤️ Weather cards with temperature, humidity, wind, and cloud status
- 💬 Detailed weather modal with sunrise/sunset and pressure
- 🎨 Clean, responsive UI using custom styling
- 🔗 Secure communication with backend via Auth0 JWT tokens

---

## 🧪 Test Credentials (pre-configured)

Credentials can be found on the assignment file 

These credentials are already created in the Auth0 dashboard and assigned to the app.

---

## 🛠️ Getting Started

### 1. Clone the repo

#### git clone https://github.com/faslanfowmy/Weather-App-Frontend.git
###cd Weather-App-Frontend

2. Install dependencies

npm install

3.Run the App

npm run dev


 Then go to ---http://localhost:5173 (This is the port allowed in the backend server) so run the frontend on this port itself.


## 📁 Folder Structure

weather-app-frontend/
├── public/                     # Static files
│   └── index.html              # Main HTML file
├── src/                        # Source code
│   ├── assets/                 # Images, icons, etc.
│   ├── components/             # Reusable React components
│   ├── styles/                 # CSS files or modules
│   ├── App.jsx                 # Root component
│   └── main.jsx                # ReactDOM.render entry
├── .gitignore                  # Ignored files
├── package.json                # Project metadata and dependencies
├── README.md                   # Project documentation
└── vite.config.js              # Vite configuration






