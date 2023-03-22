import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

import ThemeProvider from '../../context/ThemeContext';
import { useTheme } from '../../context/ThemeContext';

function Greenhouse() {
  const {themeName} = useTheme();
  let testvariable = dayImage
  if (themeName === "night"){
    testvariable = nightImage;
  } else {
    testvariable= dayImage;
  }
  return (
    <section>
      <img  className='greenhouse-img'
            src={testvariable}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;