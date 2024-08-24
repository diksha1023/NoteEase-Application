# NoteEase

## Project Overview
**NoteEase** is a secure, user-friendly web application that allows different users to create, manage, and store notes. Developed using React for the frontend and Django for the backend, the application integrates JSON Web Tokens (JWT) to ensure secure authentication and session management.

## Key Features

- **User Authentication**: Secure login and registration system using JWT, which ensures that all note operations are performed by authenticated users.
- **Note Management**: Users can create, edit, delete, and view their notes in a personal and secure environment.
- **Responsive Design**: The React-based frontend ensures a responsive and intuitive user interface across all devices.

## Technologies Used

- **Frontend**: React - Used for building the user interface with efficient state management and dynamic rendering capabilities.
- **Backend**: Django - Provides a robust framework for backend operations, including database interactions, user authentication, and API endpoints.
- **Authentication**: JWT - Implements token-based authentication to secure user sessions and protect routes.
- **Database**: Default Django's SQLite or a choice of PostgreSQL - Used for storing user data and notes efficiently.

## Security Features

- **JWT Authentication**: Ensures that all API requests are authorized and sessions are securely managed.
- **Data Encryption**: Encrypts sensitive data at rest, ensuring that user notes and personal information are securely stored.

## Future Enhancements

- **Rich Text Support**: Implementation of a rich text editor for more dynamic note-taking capabilities.
- **Sharing and Collaboration**: Allow users to share notes and collaborate in real-time.
- **Mobile Application**: Extend the application to a cross-platform mobile application using React Native to enhance accessibility and user engagement.

## Getting Started

To get a local copy up and running follow these simple steps:

## 1. Clone the repository:


## 2. Navigate to the project directory:
- cd NoteEase

## 3. Install dependencies:
#### For the frontend
- cd frontend
- npm install

#### For the backend
- cd ../backend
- pip install -r requirements.txt

## 4. Set up your environment variables:
#### Create a .env file in the backend directory and add:
- JWT_SECRET_KEY='your_secret_key_here'
- DATABASE_URL='your_database_url_here'

## 5.Start the servers:
#### Start the frontend server from the frontend directory
- cd ../frontend
- npm init
- npm run dev

#### Open a new terminal and start the backend server from the backend directory
- cd backend
- python manage.py runserver
