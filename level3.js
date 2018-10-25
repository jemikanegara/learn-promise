let numberValidation = (x) => {
    if(typeof x === 'number'){
        return Promise.resolve(x)
    } else {
        const notNumber = new Error(`input is not a number`)
        return Promise.reject(notNumber)
    }
}

let multipleByTwo = (number) => {
    return Promise.resolve(number * 2)
}

let multipleByThree = (number) => {
    return Promise.resolve(number * 3)
}

let consoleInOrder = async () => {
 await numberValidation(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res)).catch(err => console.log(err))
 numberValidation("").then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res)).catch(err => console.log(err))
}

consoleInOrder()