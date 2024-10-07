
/* export const HeroCard: React.FC<{
    id: string,
    superhero: string,
    publisher: string,
    alter_ego: string,
    first_appearance: string,
    characters: string,
}> = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
  return (
    <div>HeroCard</div>
  )
}
 */

import { Link } from "react-router-dom";


export const HeroCard: React.FC<{
    id: string,
    title: string,
    subtitle: string,
    image: string,
    other: string,
}> = ({
    id,
    title,
    subtitle,
    image,
    other,
}) => {

        const heroImage = `./assets/${image}.jpg`;

        return (
            <Link className="col" to={`/hero/${id}`}>
                <div className="card p-3">
                    <div className="row no-gutters">
                        <div className="col-4">
                            <img src={heroImage} className="card-img" alt={title} />
                        </div>
                    </div>
                    <h4>{title}</h4>
                    <h3>{subtitle}</h3>
                    <p>{other}</p>
                </div>
            </Link>
        )
    }
