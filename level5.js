 let numberValidation = (x) => {
   
    if(typeof x === 'number'){
        return Promise.resolve(x)
    } else {
        throw `input is not a number`
    }
}

 let multipleByTwo = (number) => {
    return Promise.resolve(number * 2)
}

 let multipleByThree = (number) => {
    return Promise.resolve(number * 3)
}

async function asyncFunction() {
    let result = await numberValidation(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => {return res}).catch(err => {return err})
    console.log(result)    
}

asyncFunction()