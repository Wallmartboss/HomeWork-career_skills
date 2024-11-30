import { useOutletContext } from 'react-router-dom';
const Features = () => {
  const { camper } = useOutletContext();
  return (
    <div>
      <h2>Features of {camper.name}</h2>
      <h3>{camper?.form}</h3>
      <h3>{camper?.length}</h3>
      <h3>{camper?.width}</h3>
      <h3>{camper?.tank}</h3>
      <h3>{camper?.consumption}</h3>
      <h3>{camper?.transmission}</h3>
      <h3>{camper?.engine}</h3>
    </div>
  );
};
//     <div>
//       <h3>{camper?.form}</h3>
//       <h3>{camper?.length}</h3>
//       <h3>{camper?.width}</h3>
//       <h3>{camper?.tank}</h3>
//       <h3>{camper?.consumption}</h3>
//       <h3>{camper?.transmission}</h3>
//       <h3>{camper?.engine}</h3>
//       <h3>Features</h3>
//       <ul>
//         <li>Automatic</li>
//         <li>AC</li>
//         <li>Petrol</li>
//         <li>Kitchen</li>
//         <li>Radio</li>
//       </ul>
//     </div>
//   );
// };

export default Features;
