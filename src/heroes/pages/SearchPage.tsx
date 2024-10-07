import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import queryString from 'query-string'
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components";

export const SearchPage = () => {

  //searchtText == al searchText del useForm

  const navigate = useNavigate(); //hook para navegar entre rutas
  const location = useLocation(); //hook para obtener la locacion actual

  const { q = '' } = queryString.parse(location.search) //parsea la query string y obtiene el valor de q
  const heroesFileterd = getHeroesByName(typeof q === 'string' ? q : ''); //obtiene los heroes que coincidan con la busqueda

  console.log(q);

  const { searchText, onInputChange } = useForm({
    searchText: ''
  })

  const onSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  }
  return (
    <div className="p-3">
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {(q === '') ?
            <div className="alert alter-primary bg-primary text-white">
              Search a hero
            </div> : null}
          {
            (heroesFileterd.length === 0) ?
              <div className="alert alter-danger bg-danger text-white">
                There is no result <b>{q}</b>
              </div> : null}
          { 
            heroesFileterd.map((hero) => (
              <HeroCard
                key={hero.id}
                id={hero.id}
                image={hero.id}
                title={hero.superhero}
                subtitle={hero.alter_ego}
                other={hero.publisher}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
