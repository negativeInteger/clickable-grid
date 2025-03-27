import { useState } from "react";

function Matrix() {
  // Total Boxes in the grid
  const totalBoxes = 9;

  // Store colors of each box with default as white
  const [colors, setColors] = useState(Array(totalBoxes).fill('white'));

  // Track clicked boxes
  const [clickedBoxes, setClickedBoxes] = useState([]);

  // Handle Box clicks
  function handleClick(index) {
    if(colors[index] !== 'white') return; // Ignore already clicked boxes

    // Change color of clicked box to green
    const newColors = [...colors];
    newColors[index] = 'green';
    setColors(newColors);

    // Store the order of clicked boxes
    const newClickedBoxes = [...clickedBoxes, index]
    setClickedBoxes(newClickedBoxes);

    // Change color of all to orange in the order they were clicked if last box was clicked
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
    {/* Map over colors to render each box in the matrix  */}
    
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