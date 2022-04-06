// code your solution here

// const superbowlWin = (array) => {
//     let result = array.find((o) => o.result === "W")
//     if(result !== undefined) {
//         return result.year;
//     }
// }

function superbowlWin(array) {
    const chosenElement = array.find(({ result }) => {
        return result === "W";
    })
    return chosenElement ? chosenElement.year : undefined
}