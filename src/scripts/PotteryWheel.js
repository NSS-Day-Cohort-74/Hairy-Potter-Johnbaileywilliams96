let potteryId = 1;

export const makePottery = (shape, weight, height) => {
    const potteryProperties = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryId

     };
    potteryId++;
    return potteryProperties
 }
    
