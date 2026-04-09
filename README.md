# 🏋️‍♂️ FitTrack AI

### Personal Fitness, Diet & Attendance Management System

FitTrack AI is a modern mobile application designed to help users stay consistent with their fitness journey by combining **workout planning, diet recommendations, and attendance tracking** into one unified platform.

---

## 📱 Features

### 🧠 Personalized Fitness Plans

* Generates workout routines based on user data
* Supports beginner and intermediate levels
* Displays sets, reps, and exercises

---

### 🥗 Smart Diet Recommendations

* Calculates BMI and BMR
* Suggests daily calorie intake
* Provides macronutrient breakdown (Protein, Carbs, Fats)

---

### 📅 Attendance & Streak Tracking (Unique Feature)

* Daily gym check-in system
* Tracks consistency with calendar view
* Displays streak count 🔥
* Motivates users to stay disciplined

---

### 📊 Dashboard Overview

* Daily calorie goals
* Workout summary
* Attendance percentage
* Current streak

---

## 🛠️ Tech Stack

### 📱 Frontend

* Flutter (Dart)
* Provider (State Management)

### ⚙️ Backend

* R Programming
* Plumber API

### 🗄️ Database

* SQLite / MySQL

---

## 🧠 R Programming Usage

R is used as the core computation engine for:

* BMI Calculation
* BMR Calculation (Mifflin-St Jeor Formula)
* Calorie recommendations (Bulk / Cut / Maintain)
* API endpoints using Plumber

---

## 📐 System Architecture

User Input → Flutter App → R Backend (Plumber API) → Database → Response to App

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/fittrack-ai.git
cd fittrack-ai
```

---

### 2️⃣ Setup Frontend (Flutter)

```bash
cd frontend
flutter pub get
flutter run
```

---

### 3️⃣ Setup Backend (R)

```bash
cd backend
Rscript plumber.R
```

---

### 4️⃣ Database Setup

* Configure SQLite/MySQL as required
* Update connection settings

---

## 📂 Project Structure

```
fittrack-ai/
│
├── frontend/        # Flutter app
├── backend/         # R + Plumber API
├── database/        # Database scripts
├── README.md
```

---

## 📊 Core Calculations

### BMI

```
BMI = weight / (height in meters)^2
```

### BMR (Mifflin-St Jeor)

```
Male:    10×weight + 6.25×height - 5×age + 5  
Female:  10×weight + 6.25×height - 5×age - 161

💡 Why This Project?
Most apps focus only on fitness OR diet.
FitTrack AI combines:

* Fitness tracking ✅
* Diet planning ✅
* Attendance consistency ✅

👉 Helping users build discipline and long-term habits.

🔮 Future Enhancements

* AI-based workout recommendations
* Food image recognition
* Wearable device integration
* Social leaderboard & challenges

🤝 Contribution
Contributions are welcome!
Feel free to fork this repo and submit a pull request.

📜 License
This project is open-source and available under the MIT License.

👨‍💻 Author
**Aryan Chavan**
Engineering Student | Developer

⭐ Support
If you like this project, give it a ⭐ on GitHub!
