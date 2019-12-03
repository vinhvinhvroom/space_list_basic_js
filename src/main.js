// Meets Expectations
let researcherSpaceItems = [ new SpaceItem("rock", .50, 5), new SpaceItem("insect", 2.00, 2), new SpaceItem("twig", 2.50, 4), new SpaceItem("plant", 2.00) ]

let summary = (array) => {
  let total = 0
  let list = array.map((item) => {
    total += item.totalCost()
    return `${item.statement()}\n`
  })
  return(`Dear Researcher,\n\nI bought you:\n\n${list.join('')}\n\nYou owe me $${total.toFixed(2)}.`)
}

console.log(summary(researcherSpaceItems))


// // Optional
// let inventoryLab1 = {
//   fruit: 2,
//   grain: 2,
//   plant: 5,
//   grassBlade: 5,
//   rock: 10,
//   mushroom: 11,
//   twig: 3,
//   insect: 1,
//   soilSample: 5
// };
//
// let inventoryLab2 = {
//   fruit: 2,
//   grain: 2,
//   plant: 5,
//   grassBlade: 5,
//   rock: 10,
//   mushroom: 11,
//   twig: 6,
//   insect: 10,
//   soilSample: 5
// };
