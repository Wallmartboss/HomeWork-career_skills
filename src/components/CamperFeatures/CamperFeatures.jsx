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
import s from './CamperFeatures.module.css';

const featureIcons = {
  //   transmission: { icon: automaticIcon, label: 'Transmission' },
  //   engine: { icon: petrolIcon, label: 'Engine' },
  AC: { icon: acIcon, label: 'AC' },
  bathroom: { icon: bathroomIcon, label: 'Bathroom' },
  kitchen: { icon: kitchenIcon, label: 'Kitchen' },
  radio: { icon: radioIcon, label: 'Radio' },
  refrigerator: { icon: frigeIcon, label: 'Refrigerator' },
  microwave: { icon: mwoIcon, label: 'Microwave' },
  gas: { icon: gasIcon, label: 'Gas' },
  water: { icon: waterIcon, label: 'Water' },
};

const CamperFeatures = ({ features }) => {
  if (!features || typeof features !== 'object') {
    return <p>No features available</p>;
  }
  return (
    <div className={s.features}>
      {Object.entries(features).map(([key, value]) => {
        const feature = featureIcons[key];
        if (!feature) return null;
        if (typeof value === 'boolean' && !value) return null;

        return (
          <div key={key} className={s.featureItem}>
            <img
              src={feature.icon}
              alt={feature.label}
              className={s.featureIcon}
            />
            <span>
              {feature.label}:{' '}
              {typeof value === 'boolean' ? 'Yes' : value.toString()}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CamperFeatures;
