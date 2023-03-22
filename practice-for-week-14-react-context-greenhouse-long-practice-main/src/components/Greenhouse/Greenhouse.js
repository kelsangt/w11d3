import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

import ThemeProvider from '../../context/ThemeContext';
import { useTheme } from '../../context/ThemeContext';

function Greenhouse() {
  const {themeName, setThemeName} = useTheme();
  let varImage;
  if (themeName === "day"){
    varImage = dayImage;
  } else {
    varImage = nightImage;
  }
  return (
    <section>
      <img  className='greenhouse-img'
            src={varImage}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;