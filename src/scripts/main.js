console.log("Welcome to the main module")

import { addPlant } from "./field.js"
import { createPlan } from "./plan.js"

const yearlyPlan = createPlan()
console.log(yearlyPlan)

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
console.log(createAsparagus)
console.log(createCorn)
console.log(createPotato)
console.log(createSoybean)
console.log(createSunflower)
console.log(createWheat)

const carrot = seedObj
addPlant()