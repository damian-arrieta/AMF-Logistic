export interface Character {
    id: number;
    name: string;
    gender: string;
    status: string;
    image: string;
    created: Date;
    species: string;
    location: {
        name: string
    };
    origin: {
        name: string
    }
}