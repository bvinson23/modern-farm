console.log("Welcome to the main module")

import { addPlant, usePlants } from "./field.js"
import { createPlan } from "./plan.js"

const yearlyPlan = createPlan()
console.log(yearlyPlan)

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
const seedObj = "carrot"
addPlant(seedObj)
usePlants()
console.log(usePlants())