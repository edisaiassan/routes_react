import { heroes } from '../data/heroes';

export function getHeroesByPublisher(publisher: string): Heroe[] {
    const publishersValids: string[] = ['DC Comics', 'Marvel Comics'];

    if (!publishersValids.includes(publisher)) {
        throw new Error(`Editorial no válida: ${publisher}`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
}

interface Heroe {
    id: string,
    superhero: string,
    publisher: string,
    alter_ego: string,
    first_appearance: string,
    characters: string
}