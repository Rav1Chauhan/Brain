# 🧠 Brain

A modern second-brain application that lets users save, organize, and manage useful content from different platforms in one place.

## 🚀 Live Demo

- 🌐 Frontend: https://brain-eta-blue.vercel.app
- ⚙️ Backend API: https://brainly-odme.onrender.com

---

## ✨ Features

- 🔐 User Authentication (JWT)
- 📝 Save and manage content
- 🐦 Twitter/X embed support
- 📺 YouTube embed support
- 🗑️ Delete saved content
- 🔍 Filter content by type
- 🔗 Share your Brain with others
- 📱 Responsive UI
- ⚡ Fast React + Vite frontend

---

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

---

## 📂 Project Structure

```text
Brain/
│
├── Brainly/               # Backend
│   ├── routes/
│   ├── middleware/
│   ├── db.ts
│   └── index.ts
│
└── brainly-frontend/      # Frontend
    ├── src/
    ├── components/
    ├── pages/
    └── hooks/
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/Rav1Chauhan/Brain.git
cd Brain
```

---

## Backend Setup

```bash
cd Brainly
npm install
```

Create a `.env` file:

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET_USER=your_secret_key
```

Run the backend:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd ../brainly-frontend
npm install
```

Create a `.env` file:

```env
VITE_BACKEND_URL=http://localhost:3000
```

Run the frontend:

```bash
npm run dev
```

---

## Environment Variables

### Backend

```env
MONGO_URL=
JWT_SECRET_USER=
```

### Frontend

```env
VITE_BACKEND_URL=
```

---

## API Endpoints

### Authentication

| Method | Endpoint |
|---------|----------|
| POST | `/api/v1/user/signup` |
| POST | `/api/v1/user/signin` |

### Content

| Method | Endpoint |
|---------|----------|
| GET | `/api/v1/content` |
| POST | `/api/v1/content` |
| DELETE | `/api/v1/content` |

### Share

| Method | Endpoint |
|---------|----------|
| POST | `/api/v1/brain/share` |
| GET | `/api/v1/brain/:shareLink` |

---

## Screenshots

Add screenshots here.

```
screenshots/
├── dashboard.png
├── signin.png
├── signup.png
```

---

## Future Improvements

- ⭐ Notes support
- 📁 Folder organization
- 🏷️ Tags
- 🔎 Search functionality
- 🌙 Dark Mode
- 📌 Favorites
- 📤 Import & Export
- 🤝 Real-time collaboration

---

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## Author

**Ravi Chauhan**

- GitHub: https://github.com/Rav1Chauhan
- LinkedIn: www.linkedin.com/in/ravichauhan01

---

## License

This project is licensed under the MIT License.
