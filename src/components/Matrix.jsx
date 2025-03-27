import { useState } from "react";

function Matrix() {
  // Create 3 X 3 grid (9 boxes)
  const totalBoxes = 9;

  // Store box colors (initially all white)
  const [colors, setColors] = useState(Array(totalBoxes).fill('white'));

  // Track which boxes were clicked
  const [clickedBoxes, setClickedBoxes] = useState([]);

  // Handle Box clicks
  function handleClick(index) {
    if(colors[index] !== 'white') return; // Ignore already clicked boxes

    // Change clicked box to green
    const newColors = [...colors];
    newColors[index] = 'green';
    setColors(newColors);

    // Store the order of clicked boxes
    const newClickedBoxes = [...clickedBoxes, index]
    setClickedBoxes(newClickedBoxes);

    // If this was the last click (9th box), change all to orange in order
    if(newClickedBoxes.length === totalBoxes) {
      newClickedBoxes.forEach((pos, i) => {
        setTimeout(() => {
          setColors((prevColors) => {
            const updatedColors = [...prevColors];
            updatedColors[pos] = 'orange';
            return updatedColors;
          });
        }, i * 500); // Delay each update
      });
    }
  }

  return (
    <>    
    <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 100px)', gap: '5px' }}>
      {
        colors.map((color, index) => (
          <div
          key={index}
          onClick={() => handleClick(index)}
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: color,
            border: '1px solid black',
            cursor: 'pointer'
          }}
          ></div>
        ))
        }
    </div>
    </>

  );
}

export default Matrix