# 🎯 Memeverse- Random GIF Generator 

A **React** application that lets users generate random GIFs (or GIFs by tag) using the **Giphy API**.  
This project demonstrates the use of **custom React hooks**, **state management**, and **API integration** in a clean, reusable way.

---

## ✨ Features
- 🎲 **Random GIFs** with a single click
- 🏷 **Tag-based search** for themed GIFs
- ⚡ **Custom React Hook (`useGif`)** for fetching and managing GIF data
- ⏳ Loading spinner for better UX
- ❌ Error handling for API failures or missing data
- 💡 Clean, component-based architecture

---

## 🛠 Tech Stack
- **React** (Functional Components + Hooks)
- **Axios** for HTTP requests
- **Tailwind CSS** for styling
- **Giphy API** for GIF data

---

## 📂 Project Structure
```text
src/
│
├── components/
│   ├── Random.js       # Displays a random GIF
│   ├── Tag.js          # Displays GIFs filtered by tag
│   └── Spinner.js      # Loading spinner component
│
├── Hooks/
│   └── useGif.js       # Custom hook to fetch GIFs
│
├── App.js              # Main app component
└── index.js            # Entry point
```
2️⃣ Install dependencies

`npm install`

3️⃣ Set up environment variables

Create a .env file in the project root and add your Giphy API key:

For Create React App, prefix with REACT_APP_

`REACT_APP_GIF_KEY=your_giphy_api_key_here`

Restart your dev server after adding the .env file.

4️⃣ Start the development server

`npm start`

📸 Screenshots


<img width="1920" height="1080" alt="Screenshot 2025-08-04 132958" src="https://github.com/user-attachments/assets/eaf4d529-d195-4b32-bd19-437bc56e7021" />






