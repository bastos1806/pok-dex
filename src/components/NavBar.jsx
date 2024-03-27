



function NavBar ({handleClickNext, handleClickBefore, pokemonIndex, pokemonList}) {


    return (
        <nav>
            {pokemonIndex > 0 && <button onClick={handleClickBefore}>Previous</button>}
            {pokemonIndex < pokemonList.length - 1 && <button onClick={handleClickNext}>Next</button>}
        </nav>


    );


}



export default NavBar;