
# 📝 Basic Form Web App

A clean and simple **Form Submission UI** built using **HTML, CSS, and Vanilla JavaScript**.  
This project demonstrates form validation, input handling, and a popup confirmation message once the form is successfully submitted.

---

## 🚀 Features
- Full Name, Age, Mobile, Email, Qualification & Address fields  
- Required field validation  
- Success popup upon valid submission  
- Smooth popup animation  
- Fully responsive layout  
- Beginner-friendly codebase  

---

## 🛠️ Tech Stack
- **HTML5**  
- **CSS3**  
- **JavaScript (Inline)**  

---

## 📂 Project Structure
```
Basic-Form/
│── index.html
└── style.css
```

---

## ⚙️ How It Works

### 1. Field Validation
JavaScript checks all fields before submission:

```
if (fullName == '') { alert('Enter Full Name'); return; }
```

### 2. Popup Message
When all fields are valid:

```
popupResult.style.display = 'flex';
```

### 3. Popup Animation
CSS handles the success animation:

```
@keyframes tick {
  0% { transform: scale(0.1); }
  75% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
```

### 4. Responsive Design
Inputs, labels, and popup adjust automatically for smaller screens.

---

## ▶️ How to Run
1. Download or extract the project  
2. Open `index.html`  
3. Fill out the form  
4. Press **Submit**  
5. Success popup will appear  

---

## 📌 Learning Outcomes
- Form creation  
- DOM value handling  
- Field validation  
- Popup UI design  
- Responsive layout basics  

---

## 📌 Future Enhancements
- Email & mobile validation  
- Popup close button  
- Backend integration  
- Persist data in LocalStorage  

---

## 📄 License
MIT License — free to use and modify.

---

## 👤 Author

**Debashis Patra**

Enjoy building and extending this creative JavaScript project! 🚀
