import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './App.css';
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from './components/Profile';
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { DataProvider } from './context/DataContext';
import { ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import LoadingAnimation from './components/LoadingAnimation';

function App() {
  const { theme } = useTheme();
  const { language } = useLanguage(); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Modal.setAppElement('#root');
    setLoading(true);

    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(loadingTimeout);
  }, [language]);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        <DataProvider>
          <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
            <Header />
            <Skills />
            <Profile />
            <Projects />
            <Footer />
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
          </div>
        </DataProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
