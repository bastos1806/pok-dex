import PropTypes from 'prop-types';

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  }

function PokemonCard({ pokemon }) {
    // console.log(props)
    // const pokemon = { name: "mew" };
    return (
        <figure>
        {pokemon.imgSrc ? (<img src={pokemon.imgSrc} />) : (<p>???</p>)}
        <figcaption>{pokemon.name}</figcaption>
         </figure>
    );
   
  }

  
  
  export default PokemonCard;