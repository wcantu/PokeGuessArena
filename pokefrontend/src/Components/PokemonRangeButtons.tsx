import React, { useState } from "react";
import "../index.css";
interface PokemonRangeButtonsProps {
  onRangesSelected: (selectedRanges: number[]) => void;
  onHintSelected: (selectedHints: number) => void;
  onTimeSelected: (selectedHints: number) => void;
  handleClick: () => void;
}

const PokemonRangeButtons: React.FC<PokemonRangeButtonsProps> = ({
  onRangesSelected,
  onHintSelected,
  onTimeSelected,
  handleClick,
}) => {
  const [rangesSelected, setRangesSelected] = useState<number[]>([]);
  const [timeSelected, setTimeSelected] = useState<number>(0);
  const [hintsSelected, setHintsSelected] = useState<number>(0);
  const updateRangeSelected = (range: number[]) => {
    setRangesSelected(range);
    onRangesSelected(range);
  };

  const handleRangeButtonClick = (start: number, end: number) => {
    const newRange = Array.from(
      { length: end - start + 1 },
      (_, index) => start + index,
    );

    const updateTimeSelected = (time: number) => {
      setTimeSelected(time);
      onTimeSelected(time);
    };
    const handleTimeButtonClick = (time: number) => {
      const newTime = time;
    };

    // Check if the newly clicked range is already included in the selected ranges
    const isNewRangeSelected = newRange.every((val) =>
      rangesSelected.includes(val),
    );

    let updatedRanges;
    if (isNewRangeSelected) {
      // If the new range is already selected, remove it from the selected ranges
      updatedRanges = rangesSelected.filter((val) => !newRange.includes(val));
    } else {
      // Add the new range to the previous ranges
      updatedRanges = [...rangesSelected, ...newRange];
    }

    setRangesSelected(updatedRanges);
    onRangesSelected(updatedRanges);
  };

  const handleSelectAllClick = () => {
    const allRanges = Array.from({ length: 905 }, (_, index) => index + 1);
    updateRangeSelected(allRanges);
  };

  const handleDeselectAllClick = () => {
    updateRangeSelected([]);
  };

  return (
    <div className="genbutton">
      <div>
        <button onClick={handleSelectAllClick}>
          <img src="/Images/Select All button.png" alt="Select All Button" />
        </button>
        <button onClick={handleDeselectAllClick}>
          <img src="/Images/deselect all button.png" alt="Deselect Button" />
        </button>
      </div>

      <div className="genbutton">
        <button onClick={() => handleRangeButtonClick(1, 151)}>
          <img src="/Images/Gen I.png" alt=" GEN 1 " />
        </button>

        <button onClick={() => handleRangeButtonClick(152, 251)}>
          <img src="/Images/Gen 2.png" alt="GEN 2 " />
        </button>
        <button onClick={() => handleRangeButtonClick(252, 386)}>
          <img src="/Images/Gen I-1.png" alt="GEN 3 " />
        </button>

        <button onClick={() => handleRangeButtonClick(387, 493)}>
          <img src="/Images/Gen I-2.png" alt="GEN 4 " />
        </button>

        <button onClick={() => handleRangeButtonClick(494, 649)}>
          <img src="/Images/Gen I-3.png" alt="GEN 5 " />
        </button>

        <button onClick={() => handleRangeButtonClick(650, 721)}>
          <img src="/Images/Gen I-4.png" alt="GEN 6 " />
        </button>

        <button onClick={() => handleRangeButtonClick(722, 809)}>
          <img src="/Images/Gen I-5.png" alt="GEN 7 " />
        </button>

        <button onClick={() => handleRangeButtonClick(810, 905)}>
          <img src="/Images/Gen I-6.png" alt="GEN 8 " />
        </button>
        {/* Go Next*/}
        <div className="next-button">
          <button onClick={handleClick}>
            <img src="/Images/nextbutton.png" alt="Next Button" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonRangeButtons;
