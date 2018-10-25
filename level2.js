let checkVariableType = (x) => {
    if(x){
        return Promise.resolve(`${x} is a ${typeof x}`)
    } else {
        const notNumber = new Error(`please input a variable`)
        return Promise.reject(notNumber)
    }
}

checkVariableType("abc").then(res => console.log(res)).catch(err => console.log(err))
checkVariableType(2).then(res => console.log(res)).catch(err => console.log(err))
checkVariableType([]).then(res => console.log(res)).catch(err => console.log(err))
checkVariableType().then(res => console.log(res)).catch(err => console.log(err))
