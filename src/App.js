import React, { useState } from 'react';
import { Routes } from './Components/Routes'
import ThemeContext from './Components/ThemeContext';
import styles from './Components/styles/themeStyles';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  // let theme = useContext(ThemeContext);
  return (
    <div className="App">
      <ThemeContext.Provider value={{currentTheme: theme,
        setCurrentTheme: (themeName) => setTheme(themeName)}}>
        <Routes/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
