import React from "react";
import { useLocation } from "react-router-dom";
import PokeShow from "../Components/PokeShow";
import "../index.css";
interface LocationState {
  selectedRanges?: number[];
  selectedHints?: number;
  selectedTime?: number;
}

const HomePage: React.FC = () => {
  const location = useLocation();
  const locationState = location.state as LocationState;

  // Provide a default empty array if nothing was choosen
  const ranges = locationState?.selectedRanges || [];
  const hints = locationState?.selectedHints || 3;
  const time = locationState?.selectedTime || 60;

  return (
    <div>
      <PokeShow range={ranges} hints={hints} time={time} />
    </div>
  );
};

export default HomePage;
