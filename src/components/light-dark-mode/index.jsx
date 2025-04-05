import "./style.css";
import useLocalStorage from "./useLocalStorage";
export default function LightDarkMode() {
    const [theme, setTheme] = useLocalStorage('theme',"dark");
    function handleToggleTheme(){
        setTheme(theme === "dark" ? "light" : "dark");
        
        
    }
  return (

    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p className="text">Hello World!</p>
        <button onClick={handleToggleTheme}>Toggle</button>
      </div>
    </div>
  );
}
