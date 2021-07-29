const funAnimals = []

funAnimals.push({
    name: "Hygge",
    type: "cat",
    why: "agressive snuggler"
})

funAnimals.push({
    name: "Trecito",
    type: "dog",
    why: "four legs worth of energy at the cost of three"
})

funAnimals.push({
    name: "burger",
    type: "turtle",
    why: "he's pissed bc I held him like a burger dont be burger shaped then idiot"
})

for (let animal of funAnimals) {
    console.log(`${animal.name} the ${animal.type} is fun.  Why, you ask? ${animal.why}`)
}
