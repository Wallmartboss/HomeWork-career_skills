import React from 'react';
import acIcon from '../../img/ac.svg';
import automaticIcon from '../../img/automatic.svg';
import bathroomIcon from '../../img/bathroom.svg';
import kitchenIcon from '../../img/kitchen.svg';
import gasIcon from '../../img/gas.svg';
import waterIcon from '../../img/water.svg';
import frigeIcon from '../../img/frige.svg';
import mwoIcon from '../../img/mwo.svg';
import petrolIcon from '../../img/petrol.svg';
import radioIcon from '../../img/radio.svg';
import s from './PropertyIcons.module.css';

// const featureIcons = {
//   //   transmission: { icon: automaticIcon, label: 'Transmission' },
//   //   engine: { icon: petrolIcon, label: 'Engine' },
//   AC: { icon: acIcon, label: 'AC' },
//   bathroom: { icon: bathroomIcon, label: 'Bathroom' },
//   kitchen: { icon: kitchenIcon, label: 'Kitchen' },
//   radio: { icon: radioIcon, label: 'Radio' },
//   refrigerator: { icon: frigeIcon, label: 'Refrigerator' },
//   microwave: { icon: mwoIcon, label: 'Microwave' },
//   gas: { icon: gasIcon, label: 'Gas' },
//   water: { icon: waterIcon, label: 'Water' },
// };
const PropertyIcons = ({ camper }) => {
  const propertyIcons = {
    transmission: { icon: automaticIcon, label: 'Transmission' },
    engine: { icon: petrolIcon, label: 'Engine' },
    AC: { icon: acIcon, label: 'Air Conditioning' },
    microwave: { icon: mwoIcon, label: 'Microwave' },
    refrigerator: { icon: frigeIcon, label: 'Refrigerator' },
    bathroom: { icon: bathroomIcon, label: 'Bathroom' },
    kitchen: { icon: kitchenIcon, label: 'Kitchen' },
    gas: { icon: gasIcon, label: 'Gas' },
    water: { icon: waterIcon, label: 'Water' },
    radio: { icon: radioIcon, label: 'Radio' },
  };

  const availableIcons = Object.keys(propertyIcons).filter(key => camper[key]);

  return (
		<div className={s.propertyIcons}>
      {availableIcons.map(key => (
        <div key={key} className="property-icon">
          <img src={propertyIcons[key].icon} alt={propertyIcons[key].label} />
        </div>
      ))}
    </div>
  );
};

export default PropertyIcons;
