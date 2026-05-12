# 🚀 A Portfolio Website

## 📌 Overview

This is my portfolio website built with **HTML**, **CSS**, and **Vanilla JavaScript**. The project was created to showcase my skills, services, projects, and frontend development experience in a modern and responsive interface.

The portfolio uses a custom **Single Page Application (SPA)** routing system powered by the **JavaScript History API**, allowing seamless navigation between sections without reloading the page.

It is fully responsive and optimized for desktop, tablet, and mobile devices.

---

# ✨ Features

* Responsive design for desktop, tablet, and mobile devices
* Custom Vanilla JavaScript routing system
* History API navigation
* Mobile navigation drawer
* Dark mode toggle
* Smooth UI interactions and animations
* Font Awesome icons integration
* Project showcase section
* Services section
* Contact section
* Download CV button
* Clean and modern user interface

---

# 🛠 Technologies Used

## Frontend

* HTML5
* CSS3
* Vanilla JavaScript

## Libraries & Tools

* Font Awesome
* Live Server
* VS Code

## Deployment

* Netlify

---

# 📁 Project Structure

```bash
portfolio/
│
├── index.html
├── style.css
├── about.css
├── contactme.css
├── language.css
├── myproject.css
├── service.css
├── script.js
├── _redirects
│
├── assets/
│   ├── icons/
│   ├── images/
│   └── cv/
│
└── README.md
```

---

# 🔀 Routing System

This project uses the JavaScript History API for client-side routing.

Example routes:

```bash
/
/about
/services
/projects
/contact
/language
```

Navigation is handled without page reloads using:

```js
history.pushState()
```

and:

```js
window.addEventListener("popstate")
```

The routing system works by showing and hiding different sections already available inside the `index.html` file.

---

# 📱 Mobile Navigation

The mobile navigation menu uses a hamburger button with JavaScript toggle logic.

Features:

* Open and close drawer menu
* Automatically closes after selecting a route
* Responsive navigation layout

---

# 🌙 Dark Mode

The portfolio includes a dark mode feature that allows users to switch between light and dark themes.

The theme toggle is controlled with JavaScript and CSS class manipulation.

---

# ⚡ Installation & Setup

## Clone the Repository

```bash
git clone https://github.com/yourusername/your-portfolio.git
```

---

## Open the Project

Open the project folder in VS Code.

---

## Run with Live Server

Install the Live Server extension in VS Code and run:

```bash
Open with Live Server
```

---

# 🌍 Netlify Deployment

This project is configured for Netlify deployment.

A `_redirects` file is included to support History API routing.

Contents of `_redirects`:

```bash
/* /index.html 200
```

This prevents 404 errors when refreshing routes.

---

# 📂 Website Sections

## Home

Introduction and landing section.

## About

Personal background, profile, and experience.

## Languages

Programming languages and technologies.

## Services

Services provided including:

* Frontend Development
* Backend Development
* App Development
* Graphics Design

## Projects

Showcase of completed and ongoing projects.

## Contact

Contact information and social media links.

---

# 🚧 Future Improvements

Planned future updates include:

* Backend integration
* Contact form functionality
* Database connection
* Blog section
* Project filtering system
* Improved animations
* Accessibility improvements
* Performance optimization

---

# 🧠 Challenges Faced

Some challenges encountered during development include:

* Building custom SPA routing in Vanilla JavaScript
* Handling browser navigation using the History API
* Making the navigation responsive
* Managing mobile drawer interactions
* Supporting Netlify route refresh handling

These challenges helped improve my understanding of JavaScript routing and frontend architecture.

---

# 📚 Learning Outcomes

Through this project, I learned:

* How SPA routing works internally
* How the History API works
* DOM manipulation techniques
* Responsive web design
* Mobile-first development
* Event delegation
* UI state management
* Frontend deployment with Netlify

---

# 👨‍💻 Author

## Oyekale Praise Stephen

Frontend Developer | App Developer | Graphics Designer

---

# 📄 License

This project is open-source and available for personal and educational use.

---

# 🔗 Live Demo


```bash
https://your-portfolio.netlify.app
```

---

# 💻 GitHub Repository

Add your GitHub repository link here:

```bash
https://github.com/yourusername/your-portfolio
```
