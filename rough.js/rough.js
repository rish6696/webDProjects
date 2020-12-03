const x = {
    AddedSugar: false,
    Balanced: false,
    ChefRecommendation: false,
    ContainNuts: false,
    Egg: false,
    GlutenFree: false,
    LactoseFree: true,
    Nuts: false,
    ShellFish: false,
    Soy: false
}
const f = {
    AddedSugar: false,
    Balanced: false,
    ChefRecommendation: false,
    ContainNuts: false,
    Egg: false,
    GlutenFree: false,
    LactoseFree: false,
    Nuts: false,
    ShellFish: false,
    Soy: false
}

console.log(JSON.stringify(x)!==JSON.stringify(f))