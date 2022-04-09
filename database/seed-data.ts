


interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}


export const seedData: SeedData = {
    entries:[
        {
            description: 'Terminada: Levantarse',
            status: 'closed',
            createdAt: Date.now(),
        },
        {
            description: 'Haciendo: Ducharse',
            status: 'doing',
            createdAt: Date.now(),
        },
        {
            description: 'Pendiente: Desayunar',
            status: 'open',
            createdAt: Date.now(),
        }
    ]
}