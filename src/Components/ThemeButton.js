import React, { useContext } from 'react';
import styles from './styles/themeStyles';
import ThemeContext from './ThemeContext';

const ThemeButton = () => {
  let theme = useContext(ThemeContext);

  const handleChangeTheme = () => {
    let themeArr = Object.getOwnPropertyNames(styles);
    let currentIdx = themeArr.indexOf(theme.currentTheme);
    if (currentIdx === themeArr.length - 1) {
        theme.setCurrentTheme(themeArr[0]);
    } else {
        theme.setCurrentTheme(themeArr[currentIdx + 1]);
    }
  };
  return (
    <>
      <div style={styles[theme.currentTheme]}>Something</div>
      <button onClick={handleChangeTheme}>Change Theme</button>
    </>
  );
};

export default ThemeButton;
