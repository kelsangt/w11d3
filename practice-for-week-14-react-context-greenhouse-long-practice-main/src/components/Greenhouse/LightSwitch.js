import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';


function LightSwitch() {
  const {themeName, setThemeName} = useTheme();

  const nightToggle = () => {
    setThemeName("night")
  }

  const dayToggle = () => {
    setThemeName("day")
  }

  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={dayToggle}>DAY</div>
      <div className="off" onClick={nightToggle}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;