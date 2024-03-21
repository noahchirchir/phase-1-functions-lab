function distanceFromHqInBlocks(blockNumber) {
    const hq = 42; 
    return Math.abs(blockNumber - hq); 
    distanceFromHqInBlocks
};
function distanceFromHqInFeet(blockNumber) {
    const feetPerBlock = 264; // Assuming 1 block is equivalent to 264 feet
    return distanceFromHqInBlocks(blockNumber) * feetPerBlock; // Utilize distanceFromHqInBlocks function and convert blocks to feet
}
function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264; // Assuming 1 block is equivalent to 264 feet
    return Math.abs(endBlock - startBlock) * feetPerBlock; // Calculate the absolute difference in blocks and convert to feet
}

function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);

    if (distance <= 400) {
        return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot for distance between 400 and 2000 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; 
    } else {
        return 'cannot travel that far';
    }
}