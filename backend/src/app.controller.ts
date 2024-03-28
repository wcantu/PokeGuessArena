import { Injectable } from '@nestjs/common'; 
import Pokedex from 'pokedex-promise-v2'; // Importing Pokedex class from the 'pokedex-promise-v2' package

@Injectable() 
export class PokemonService { 
  private readonly pokedex: Pokedex; // Declaring a private readonly property pokedex of type Pokedex

  constructor() { 
    this.pokedex = new Pokedex(); // Instantiating a new Pokedex object and assigning it to the pokedex property
  }

  async getPokemonByName(name: string) { // Declaring an asynchronous function getPokemonByName which takes a string parameter 'name'
    try { // Starting a try block to catch errors
      const pokemon = await this.pokedex.getPokemonByName(name); // Calling the getPokemonByName method of the pokedex object to fetch the details of a Pokemon by its name
      return pokemon; // Returning the fetched Pokemon data
    } catch (error) { // Catching any errors that occur during the execution of the try block
      console.error('Error fetching Pokemon:', error); // Logging the error to the console
      throw error; 
    }
  }
}



