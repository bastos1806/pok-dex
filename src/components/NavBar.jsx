




function NavBar ({handleClickNext, handleClickBefore, pokemonIndex, pokemonList, setPokemonIndex}) {


const handleClickGoodPokemon = (index) => {
    setPokemonIndex(index);
}

    return (
        <nav>
            {pokemonList.map((pokemon, index) => (
                <button key={index} onClick={() => handleClickGoodPokemon(index)}>{pokemon.name}
                 </button>
                ))}
                
            {/* {pokemonIndex > 0 && <button onClick={handleClickBefore}>Previous</button>}
            {pokemonIndex < pokemonList.length - 1 && <button onClick={handleClickNext}>Next</button>} */}
        </nav>


    );


}



export default NavBar;