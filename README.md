
# 🌐 Wikipedia Search App

A lightweight and user-friendly web application that lets users search for Wikipedia articles in real-time using the official [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page). Built with HTML, CSS, and vanilla JavaScript — no frameworks or build tools required.

---

## 📸 Preview

![Homepage Screenshot](assets/homepage.png)

---

## 📁 Directory Structure

```

WIKIPEDIA/
├── index.html          
├── main.js            
├── styles.css         
└── assets/            

````

---

## 🚀 Features

- 🔍 **Live Wikipedia Search** – Fetches and displays results instantly
- 🌀 **Loading Spinner** – Visual feedback during API calls
- ⚡ **Asynchronous JavaScript** – Clean async/await implementation
- 🌐 **External Links** – Opens Wikipedia pages in new tabs
- 🧹 **Clean UI** – Neatly styled results with titles, snippets, and links

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/wikipedia-search-app.git
cd wikipedia-search-app
````

### 2. Open the App

Simply open `index.html` in your browser — no setup needed!

```bash
start index.html
```

---

## 🔧 How It Works

1. User submits a search query via a form.
2. JavaScript fetches search results from Wikipedia’s API.
3. Results (title, snippet, link) are rendered dynamically on the page.
4. A loading spinner is shown while data is being fetched.

---

## 📄 File Descriptions

* **`index.html`** – Page layout and form elements
* **`main.js`** – Handles form events, API interaction, and result display
* **`styles.css`** – Basic styling for layout and responsiveness
* **`assets/homepage.png`** – Screenshot of the homepage UI

---

## 📜 License

This project is open source under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute it.

---

## Acknowledgements

* [Wikipedia REST API](https://www.mediawiki.org/wiki/API:Main_page)
* Vanilla JS, HTML, and CSS