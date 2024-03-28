import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../index.css";
interface PokeShowProps {
  range: number[];
  hints: number;
  time: number;
}

const PokeShow: React.FC<PokeShowProps> = ({ range, hints }) => {
  hints = 5;
  const [randomPokemonId, setRandomPokemonId] = useState<number | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [pokemonName, setPokemonName] = useState<string>("");
  const [score, setScore] = useState(0);
  const [revealedIndex, setRevealedIndex] = useState(0);
  const [revealedIndices, setRevealedIndices] = useState<number[]>([]);
  const [revealAttempts, setRevealAttempts] = useState(0);
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const fetchNewPokemon = () => {
    // reset the indices/attemps for new pokemon
    setRevealedIndices([]);
    setRevealAttempts(0);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    if (range.length > 0) {
      const randomIndex = Math.floor(Math.random() * range.length);
      const selectedPokemonId = range[randomIndex];
      setRandomPokemonId(selectedPokemonId);
      const formattedId = String(selectedPokemonId).padStart(3, "0");
      const baseUrl =
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images";
      const imageUrl = `${baseUrl}/${formattedId}.png`;
      setImageUrl(imageUrl);

      const pokeAPIUrl = `https://pokeapi.co/api/v2/pokemon/${selectedPokemonId}`;
      axios
        .get(pokeAPIUrl)
        .then((response) => {
          const pokeName = response.data.name;
          const cleanedName = pokeName.includes("-")
            ? pokeName.split("-")[0]
            : pokeName;
          setPokemonName(cleanedName);
          setRevealedIndex(-1); // Reset revealed index on new Pokémon
        })
        .catch((error) => {
          console.error("Error fetching Pokemon data:", error);
        });
    } else {
      setRandomPokemonId(null);
      setImageUrl("");
      setPokemonName("");
    }
  };

  useEffect(() => {
    fetchNewPokemon();
  }, [range]);

  const guessFunc = (event) => {
    const inputVal = event.target.value.trim().toLowerCase();
    if (inputVal === pokemonName.toLowerCase()) {
      setScore((prevScore) => prevScore + 1);
      fetchNewPokemon();
      event.target.value = "";
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === " ") {
      fetchNewPokemon();
      event.preventDefault(); // Prevents adding space to the input
    } else if (event.key === "Shift") {
      revealNextLetter();
    }
  };

  const revealNextLetter = () => {
    if (revealAttempts < hints) {
      const unrevealedIndices = pokemonName
        .split("")
        .map((_, index) => index)
        .filter((index) => !revealedIndices.includes(index));

      let indicesToReveal: number[] = [];
      let revealCount = revealAttempts === 2 && pokemonName.length > 5 ? 2 : 1;

      for (let i = 0; i < revealCount && unrevealedIndices.length > 0; i++) {
        const randomIndex = Math.floor(
          Math.random() * unrevealedIndices.length,
        );
        indicesToReveal.push(unrevealedIndices[randomIndex]);
        unrevealedIndices.splice(randomIndex, 1); // Remove chosen index
      }

      setRevealedIndices(revealedIndices.concat(indicesToReveal));
      setRevealAttempts(revealAttempts + 1);
    }
  };

  return (
    <div>
      <div className="pokemon-name-reveal">
        {pokemonName.split("").map((letter, index) => (
          <span key={index} className="letter">
            {revealedIndices.includes(index) ? letter : "_"}
          </span>
        ))}
      </div>
      {randomPokemonId !== null ? (
        <>
          <p>ID: {randomPokemonId}</p>
          <img
            className="pokemon-image"
            src={imageUrl}
            alt={`Pokemon #${randomPokemonId}`}
          />
        </>
      ) : (
        <p>No Pokemon range selected.</p>
      )}
      <h1 style={{ color: "#303030" }}>{pokemonName}</h1>
      <textarea
        ref={inputRef}
        placeholder="Enter Pokemon name :)"
        rows={1}
        className="round me-3 border border-gray-300"
        onChange={guessFunc}
        onKeyDown={handleKeyDown}
      />
      <h2>Score: {score}</h2>
    </div>
  );
};

export default PokeShow;
