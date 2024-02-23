import React, { useState } from 'react';
import '../Styles/tailwind.css'
// Define a functional component named PokemonRangeButtons using React's functional component syntax
const PokemonRangeButtons: React.FC = () => {
  // Define state to store the selected ranges using the useState hook
  const [selectedRanges, setSelectedRanges] = useState<number[]>([]);

  // Define a function to handle the click event of range buttons
  const handleRangeButtonClick = (start: number, end: number) => {
    // Generate an array of numbers representing the new selected ranges
    const newSelectedRanges = Array.from({ length: end - start + 1 }, (_, index) => start + index);
    // Update the selectedRanges state by concatenating the new selected ranges with the existing ones
    setSelectedRanges([...selectedRanges, ...newSelectedRanges]);
  };

  // Define a function to handle the click event of the "Select All" button
  const handleSelectAllClick = () => {
    // Select all ranges from 1 to 151
    const allRanges = Array.from({ length: 905 }, (_, index) => index + 1);
    // Update the selectedRanges state with all ranges
    setSelectedRanges(allRanges);
  };

  // Define a function to handle the click event of the "Deselect All" button
  const handleDeselectAllClick = () => {
    // Deselect all ranges by setting the selectedRanges state to an empty array
    setSelectedRanges([]);
  };

  return (
    <div className="selectbut">
        <div>
        {/* Select all the generations */}
        <button className="flex items-center justify-center" onClick={handleSelectAllClick}>
            <img src="/Images/Select All button.png" alt="Select All Button" className="w-6 h-6 mr-2 object-top-left" />
        </button>


        {/* Deselect all the generations */}
        <button className="flex items-center justify-center" onClick={handleDeselectAllClick}>
            <img src = "/Images/deselect all button.png" alt =" Deselect Button"  className="w-6 h-6 mr-2 object-top-left" />
        </button>
        </div>

       <div className="genbutton">
             {/*Generation Button Clicks Selecting Poke Dex ID's */}

        <button onClick={() => handleRangeButtonClick(1, 151)}>
        <img src = "/Images/Gen I.png" alt =" GEN 1 " />
        </button>
        
        <button onClick={() => handleRangeButtonClick(152, 251)}>
            <img src = "/Images/Gen 2.png" alt ='GEN 2 '/>
        </button>
        <button onClick={() => handleRangeButtonClick(252, 386)}>
            <img src = "/Images/Gen I-1.png" alt = 'GEN 3 '/>
        </button>

        <button onClick={() => handleRangeButtonClick(387, 493)}>
            <img src ="/Images/Gen I-2.png" alt = 'GEN 4 '/>
        </button>

        <button onClick={()=> handleRangeButtonClick(494, 649)}>
            <img src="/Images/Gen I-3.png" alt = 'GEN 5 '/>
        </button>

        <button onClick={()=> handleRangeButtonClick(650,721)}>
            <img src= "/Images/Gen I-4.png" alt = "GEN 6 "/>
        </button>

        <button onClick={()=> handleRangeButtonClick(722,809)}>
            <img src = "/Images/Gen I-5.png" alt = "GEN 7 "/>
        </button>
        
        <button onClick={()=> handleRangeButtonClick(810,905)}>
            <img src= "/Images/Gen I-6.png" alt = "GEN 8 "/>
        </button>
       </div>
   
    </div>



  );
};

export default PokemonRangeButtons;
