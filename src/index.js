import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashbord from './components/Dashbord';
import HomePage from './components/HomePage';
import WelcomePage from './components/WelcomePage';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "dashboard",
        element: <ProtectedRoute element={<Dashbord />}/>,
        children: [
          {
            path: "newUser",
            element: <Dashbord />,
          },
        ]
      },
      {
        path: "welcomePage",
        element: <ProtectedRoute element={<WelcomePage/>}/>,
      }
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
