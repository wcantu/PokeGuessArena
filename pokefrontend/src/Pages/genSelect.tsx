import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PokemonRangeButtons from "../Components/PokemonRangeButtons";
import "../index.css";
const GenSelectPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedRanges, setSelectedRanges] = useState<number[]>([]);
  const [selectedHint, setSelectedHint] = useState<number>(0);
  const [selectTime, setSelectedTime] = useState<number>(0);
  const handleRangesSelected = (ranges: number[]) => {
    setSelectedRanges(ranges);
  };
  const handleHintsSelected = (hints: number) => {
    setSelectedHint(hints);
  };
  const handleTimeSelected = (time: number) => {
    setSelectedTime(time);
  };

  const handleGoNextClick = () => {
    navigate("/HomePage", { state: { selectedRanges, selectedHint } });
  };

  return (
    <div>
      <PokemonRangeButtons
        onRangesSelected={handleRangesSelected}
        onHintSelected={handleHintsSelected}
        onTimeSelected={handleTimeSelected}
        handleClick={handleGoNextClick}
      />
    </div>
  );
};

export default GenSelectPage;
