# Talk-And-Talk Chat App

**Talk-And-Talk** is a full-stack chat application that enables real-time communication between users. It supports private and group messaging, user authentication, and a responsive UI using modern web technologies.

## 🚀 Features

- 🔐 User Authentication & Authorization with JWT
- 🟢 Real-Time Messaging via Socket.io
- 🔁 Online status indicators to see who's currently active
- Cloudinary integration for image storage
- 🚀 Global state management with Zustand
- 🎨 Theme customization with 30+ themes to choose from

## 🛠️ Tech Stack

**Frontend**:  
- React.js
- Tailwind CSS and DaisyUI for styling
- Lucide React for icons

**Backend**:  

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- Socket.io  
- JWT for Authentication
- Cloudinary for image storage


## 🧑‍💻 Getting Started

### Prerequisites

- Node.js and npm
- MongoDB installed locally or access to MongoDB Atlas

### Installation

## Setup environment variables 
.env file

```js
MONGODB_URI=...
PORT=5001
JWT_SECRET=...

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

NODE_ENV=development
```

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm start
```

## 🗂️ Database Schema

### User Model
- `email`: String (unique)
- `fullName`: String
- `password`: String (hashed)
- `profilePic`: String (URL)
- `timestamps`: Created and updated times

### Message Model
- `senderId`: ObjectId (ref: User)
- `receiverId`: ObjectId (ref: User)
- `text`: String
- `image`: String (URL)
- `timestamps`: Created and updated times



# ✍️ Author
Nishtha Doshi
