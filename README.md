# Takoh Clovert Nfua Portfolio Website

## Overview

This project is a modern and responsive personal portfolio website built with React.js and custom CSS. It serves as a professional online presence to showcase my skills, experience, projects, and contact information while providing visitors with an engaging and visually appealing experience.

The website follows a premium dark-themed design with glassmorphism effects, smooth layouts, responsive components, and an integrated contact form powered by EmailJS.

---

## Features

* Modern and responsive user interface
* Premium dark theme design
* Mobile-friendly layout
* Professional hero section
* About section with career journey timeline
* Skills section with proficiency indicators
* Project showcase section
* Contact form with EmailJS integration
* Direct WhatsApp contact
* GitHub profile links
* Smooth section navigation
* Custom CSS animations and effects

---

## Technologies Used

### Frontend

* React JS
* JavaScript (ES6+)
* HTML5
* CSS3

### Services

* EmailJS

### Design

* Glassmorphism UI
* Responsive Design
* Flexbox
* CSS Grid

---

## Installation

Clone the repository:

```bash
git clone https://github.com/takohclovert7/my-tcn-portfolio.git
```

Navigate into the project directory:

```bash
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Contact Form Setup

This project uses EmailJS to handle contact form submissions.

### Install EmailJS

```bash
npm install @emailjs/browser
```

### Configure EmailJS

1. Create an account at EmailJS.
2. Create an Email Service.
3. Create an Email Template.
4. Copy your:

   * Service ID
   * Template ID
   * Public Key

Update the Contact component with your credentials:

```javascript
emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  form.current,
  "YOUR_PUBLIC_KEY"
);
```

---

## Sections

### Hero

Introduces visitors to who I am and what I do.

### About

Provides information about my educational background, development journey, and professional growth.

### Skills

Displays my technical skills and proficiency levels across multiple technologies.

### Projects

Showcases selected projects with:

* Overview
* Purpose
* Technologies Used
* GitHub Repository
* Demo Documentation

### Contact

Allows visitors to:

* Send messages directly through EmailJS
* Contact me via email
* Connect through WhatsApp
* Visit my GitHub profile

---

## Future Improvements

* Project filtering system
* Blog section
* Dark/Light theme switcher
* Project detail pages
* Resume download feature
* Advanced animations using Framer Motion
* Multi-language support

---

## Author

### Takoh Clovert Nfua

Full Stack Developer & Mobile App Engineer

GitHub:
https://github.com/takohclovert7

---

## License

This project is open source and available for learning, inspiration, and personal use.
