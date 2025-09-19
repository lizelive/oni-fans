interface Stuff {
    [thing: string]: number;
}

interface Experiance {
    red : number;
    green : number;
    blue : number;
}

interface Recipe {
    workbench_tags: string[];
    reagents: Stuff;
    products: Stuff;
    catalysts?: Stuff;
    energy_cost: number;
    notes?: string;
    experiance?: Experiance;
    time?: number;
}

interface Building {
    required_techs: string[];
    workbench_tags: string[];
}

interface Data {
    building:
    { [building_name: string]: Building };

    recipe:
    { [recipe_name: string]: Recipe };
}

