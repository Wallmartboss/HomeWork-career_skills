const Features = ({camper}) => {
  return (
    <div>
      <h3>{camper?.form}</h3>
      <h3>{camper?.length}</h3>
      <h3>{camper?.width}</h3>
      <h3>{camper?.tank}</h3>
      <h3>{camper?.consumption}</h3>
      <h3>{camper?.transmission}</h3>
      <h3>{camper?.engine}</h3>
      <h3>Features</h3>
      <ul>
        <li>Automatic</li>
        <li>AC</li>
        <li>Petrol</li>
        <li>Kitchen</li>
        <li>Radio</li>
      </ul>
    </div>
  );
};

export default Features;
