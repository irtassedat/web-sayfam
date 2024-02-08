import React from 'react';
import './App.css';
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from './components/Profile';
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { DataProvider } from './context/DataContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// LoadingAnimation bileşenini import etmek gerekirse
// import LoadingAnimation from './components/LoadingAnimation';

function App() {
  return (
    <>
      <LanguageProvider>
        <DataProvider>
          <ThemeProvider>
            <Header />
            <Skills />
            <Profile />
            <Projects />
            <Footer />
          </ThemeProvider>
        </DataProvider>
      </LanguageProvider>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
}

export default App;