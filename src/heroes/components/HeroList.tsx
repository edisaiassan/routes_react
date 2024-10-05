import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./";

export const HeroList: React.FC<{ publisher: string }> = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">{
            heroes.map((hero) => (
                <HeroCard key={hero.id}
                    id={hero.id}
                    image={hero.id}
                    title={hero.superhero}
                    subtitle={hero.alter_ego}
                    other={hero.publisher}
                />
            ))
        }
        </div>
    )
}
