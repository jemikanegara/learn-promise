let numberOrNot = (x) => {
    if(typeof x === 'number'){
        return Promise.resolve(`${x} is a number`)
    } else {
        const notNumber = new Error(`${x} is NOT a number`)
        return Promise.reject(notNumber)
    }
}

numberOrNot(2).then(response => console.log(response)).catch(error => console.log(error))
numberOrNot(555).then(response => console.log(response)).catch(error => console.log(error))
numberOrNot(true).then(response => console.log(response)).catch(error => console.log(error))
