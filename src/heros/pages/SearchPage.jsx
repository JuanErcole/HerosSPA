import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string'
import { HeroCard } from '../components/HeroCard'
import { getHeroByName } from '../helpers/getHeroByName';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const heros = getHeroByName(q);

  const {searchText, onInputChange} = useForm({
    searchText:'',
  });

  const onSearchSubmit = (e) =>{    
    e.preventDefault();
    if(searchText.trim().length <= 1) return

    navigate(`?q=${ searchText }`)

  }


  return (
    <>
      <h1>Seacrh</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text" 
              placeholder='Buscar Heroe' 
              className='form-control'
              name='searchText'
              value={ searchText }
              onChange ={ onInputChange }
              autoComplete='off'
            />
            <button className='btn btn-outline-primary mb-3 mt-3'>
              Buscar
            </button>
          </form>
        </div> 

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {
            ( q === '' )
            ? <div className="alert alert-primary">Busar un heroe</div>
            : ( heros.length === 0 )
              && <div className="alert alert-danger">No se encontraron resultados para <b>{ q }</b> </div>
          }

          

          {heros.map( hero => ( 
            <HeroCard key={hero.id} {...hero}/>)
          )}

        </div>
      </div>
    </>
  )
}
