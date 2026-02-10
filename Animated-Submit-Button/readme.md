# ✨ Animated Submit Button

A modern, interactive **Submit Button Animation** built using **HTML, CSS, and Vanilla JavaScript**.  
This button transitions through three states:

1. **Default** — “Submit”  
2. **Processing** — Expanding animation + progress bar  
3. **Submitted** — Green success background + animated tick ✔  

This micro-interaction is perfect for forms, landing pages, and UI/UX animation practice.

---

## 🚀 Features
- Smooth width expansion animation  
- Animated “processing” loading bar  
- Success animation with tick icon  
- Multi-color glowing shadows  
- Timed transition (5 seconds)  
- Gradient backgrounds  
- Lightweight — no frameworks  

---

## 🛠 Tech Stack
- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**

---

## 📂 Project Structure
```
Animated-Submit-Button/
│── index.html
│── style.css
└── script.js
```

---

## ⚙️ How It Works

### 1. HTML Button Markup
```
<button id="btn" class="submit">Submit</button>
```

### 2. JavaScript: Button States

#### Processing State
```
btn.setAttribute('class', 'submit process');
btn.innerHTML = 'Processing';
```

#### Submitted State
```
btn.setAttribute('class', 'submit submitted');
btn.innerHTML = "<span class='tick'>&#10004;</span> Submitted";
```

### 3. Timed Transition
A `setTimeout()` function switches the button from **processing → submitted** after 5 seconds.

---

## 🎨 CSS Animations

### Processing Animation
```
.process::before {
  width: 0%;
  animation: processing 5s;
}
```

### Tick Animation
```
@keyframes tick {
  0% { transform: scale(0.1); }
  75% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
```

### Glow Effect
```
box-shadow: 0px 1px 10px #0a990a,
            0px 2px 15px #990a0a,
            0px 3px 20px #0a0a99;
```

---

## ▶️ How to Run
1. Download or extract the project  
2. Open **index.html**  
3. Click the **Submit** button  
4. Watch the animation  

---

## 📌 Learning Outcomes
- CSS gradients & shadows  
- Pseudo-elements (`::before`)  
- Triggering animations with JS  
- Timed transitions  
- UI micro-interaction design  

---

## 📌 Future Enhancements
- Add loading spinner  
- Custom duration input  
- Disable button after completion  
- Callback function support  

---

## 📄 License
MIT License — free to use and modify.

---

## 👤 Author
**Debashis Patra**
