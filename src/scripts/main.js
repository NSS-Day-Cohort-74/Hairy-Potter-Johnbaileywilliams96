import {makePottery} from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
// import { usePottery } from "./PotteryCatalog.js"
import {toSellOrNotToSell} from "./PotteryCatalog.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery('mug', 1, 3)
let platter = makePottery('platter', 5, 3)
let bowl = makePottery('bowl', 5, 7)
let vase = makePottery('vase', 2, 9)
let pitcher = makePottery('pitcher', 7, 8)



// console.log(mug, platter, bowl, vase, pitcher)

// Fire each piece of pottery in the kiln


let potteryFiredObjectMug = firePottery(mug, 2000)
let potteryFiredObjectPlatter = firePottery(platter, 2300)
let potteryFiredObjectBowl = firePottery(bowl, 2600)
let potteryFiredObjectVase = firePottery(vase, 2200)
let potteryFiredObjectPitcher = firePottery(pitcher, 2100)


// console.log(potteryFiredObjectMug, potteryFiredObjectPlatter, potteryFiredObjectBowl, potteryFiredObjectVase, potteryFiredObjectPitcher)


// Determine which ones should be sold, and their price
let potteryToMongerMug = toSellOrNotToSell(mug)
let potteryToMongerPlatter = toSellOrNotToSell(platter)
let potteryToMongerBowl = toSellOrNotToSell(bowl)
let potteryToMongerVase = toSellOrNotToSell(vase)
let potteryToMongerPitcher = toSellOrNotToSell(pitcher)


console.log(potteryToMongerMug, potteryToMongerPlatter, potteryToMongerBowl, potteryToMongerVase, potteryToMongerPitcher)
// Invoke the component function that renders the HTML list

