const plantsInField = [];

export const addPlant = (seedObj) => {
    plantsInField.push(seedObj)
}
export const usePlants = () => {
    return plantsInField
}