// genSelect.tsx
import React, { useState } from 'react';
import PokemonRangeButtons from '../Components/GenRange';
import GoNext from '../Components/GoNext';

const GenSelectPage: React.FC = () => {
  const [selectedRanges, setSelectedRanges] = useState<number[]>([]);
  return (
    <div>
      <PokemonRangeButtons />
      <GoNext />
    </div>
  );
};

export default GenSelectPage;
 