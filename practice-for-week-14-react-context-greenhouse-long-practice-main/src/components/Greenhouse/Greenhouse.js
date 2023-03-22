import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

import ThemeProvider from '../../context/ThemeContext';
import { useTheme } from '../../context/ThemeContext';

function Greenhouse() {
  const {themeName, setThemeName} = useTheme();
  // let testvariable = dayImage
  let varImage;
  setThemeName("night")
  if (themeName === "day"){
    varImage = dayImage;
    // testvariable = nightImage;
  } else {
    varImage = nightImage;
    // testvariable= dayImage;
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