# 🎬 Netflix Glow Button Animation

A visually stunning **Netflix-style glowing button animation** created using **HTML, CSS, and Vanilla JavaScript**.  
This project features a neon red glow hover effect with **120 animated vertical bars**, giving the button a dynamic and interactive look.

Perfect for learning DOM manipulation, CSS transitions, and UI micro-interactions.

---

## 🖼️ Project Preview
(Add your project screenshot here if needed)

---

## 🚀 Features
- Netflix-style neon glow effect  
- 120 animated bars created dynamically  
- Smooth hover animations  
- Fully centered and responsive layout  
- Randomized animation delays  
- Lightweight and dependency-free  

---

## 🛠️ Tech Stack
- **HTML5**  
- **CSS3**  
- **JavaScript (Vanilla)**  

---

## 📂 Project Structure
```
Netflix-Glow-Button/
│── index.html
│── style.css
└── favicon.ico
```

---

## ⚙️ How It Works

### 1. HTML Structure
A centered button:

```
<a href="#" class="btn">NETFLIX</a>
```

### 2. JavaScript Animation Logic
The script generates **120 span elements** dynamically:

```
for (let i = 0; i < 120; i++) {
    let span = document.createElement('span');
    span.style.left = `${i * 2}px`;
    span.style.transitionDelay = (Math.random() * 1) + 's';
    btn.appendChild(span);
}
```

Each span grows from bottom → top on hover.

### 3. CSS Glow Effect
```
.btn:hover {
    filter: drop-shadow(0 0 10px #e50914)
            drop-shadow(0 0 30px #e50914);
    color: #fff;
}
```

Hovering triggers glow + animated vertical lines.

---

## ▶️ How to Run
1. Extract the project  
2. Open `index.html` in your browser  
3. Hover over the button to see the glow animation  

---

## 📌 Learning Outcomes
- DOM element creation  
- CSS transitions & transforms  
- Neon glow UI effect  
- Centered layout with Flexbox  

---

## 📌 Future Enhancements
- Add multicolor glow options  
- Add ripple or click animations  
- Add auto-looping animation without hover  
- Convert into a reusable component  

---

## 📄 License
MIT License — free to use and modify.

---

## 👤 Author
**Debashis Patra**
