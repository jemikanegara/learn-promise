let numberOrNot = (x) => {
    return new Promise(
        (resolve, reject) => {
            if(typeof x === 'number'){
                resolve(`${x} is a number`)
            } else {
                const notNumber = new Error(`${x} is NOT a number`)
                reject(notNumber)
            }
        }
    )
}

numberOrNot(2).then(response => console.log(response)).catch(error => console.log(error))
numberOrNot(555).then(response => console.log(response)).catch(error => console.log(error))
numberOrNot(true).then(response => console.log(response)).catch(error => console.log(error))
