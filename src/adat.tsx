export interface ZeneTipus{
    readonly id: number
    nev: string
    cim: string
    ev: number
    kep: string
}

export const ZENELISTA:ZeneTipus[]=[
    {
        id: 1,
        nev:"Shakira",
        cim:"Hips Don't Lie",
        ev: 2006,
        kep:"/kepek/shakira.jpg"
    },
    {
        id: 2,
        nev:"Michael Jackson",
        cim:"Billie Jean",
        ev: 1983,
        kep:"/kepek/michael.jpg"
    },
    {
        id: 3,
        nev:"Eminem",
        cim:"Without Me",
        ev: 2002,
        kep:"/kepek/eminem.jpg"
    }
]