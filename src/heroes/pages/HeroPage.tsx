import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();

  const hero = useMemo(() => getHeroById(id != undefined ? id : ''), [id]);


  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  }

  if (!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInRightBig">
      <div className="col-4">
        <img src={`/assets/${hero.id}.jpg`} alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
          <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
          <li className="list-group-item"><b>First appearance:</b> {hero.first_appearance}</li></ul>
      </div>
      <button onClick={onBack}>Volver</button>
    </div>
  )
}
