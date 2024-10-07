import { heroes } from "../data/heroes";
import { Heroe } from "./getHeroesByPublisher";

export function getHeroesByName(name = ''): Heroe[] {
    name = name.toLocaleLowerCase().trim();

    if (name.length <= 0) return [];

    return heroes.filter((hero) => hero.superhero.toLocaleLowerCase().includes(name));
}