// import { usePottery } from "./PotteryCatalog"

// import { usePottery } from "./PotteryCatalog";
import {usePottery} from "./PotteryCatalog.js";


// console.log(usePottery)



export const potteryList = () => {
    const potteryUsed = usePottery()

    let potteryHTML = ''; 

for (const pottery of potteryUsed) {
    potteryHTML += `
    
            <section class="pottery" id="pottery--1">
        <h2 class="pottery__shape">${pottery.shape}</h2>
        <div class="pottery__properties">
            ${pottery.shape} weighs ${pottery.weight} grams and is ${pottery.height}cm in height
        </div>
        <div class="pottery__price">Price is ${pottery.price} $</div>
        </section>
    
    `
}
    potteryHTML += '</selection>'
    return potteryHTML

}