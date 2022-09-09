let validateBrackets = (str) => {
    let bracketsPattern = []
    for(let i in str) {  

        if((str[i] == '{') || (str[i] == '[') || (str[i] == '(')) {
            bracketsPattern.push(str[i])
        } else if(str[i] == '}'|| (str[i] == ']') || (str[i] == ')')) {
           bracketsPattern.push(str[i])
        }  
       
    }
    
    if(bracketsPattern.length % 2 !== 0) {
        return false
    }
    
    for(let i in bracketsPattern) {
        
        let nextChar = i++
        
        if(bracketsPattern[i] === '{' && (bracketsPattern[nextChar] !== '[' || bracketsPattern[nextChar] !== '(')) {
            return false
        } else if(bracketsPattern[i] === '[' && bracketsPattern[nextChar] !== '{') {
            return false
        } else if(bracketsPattern[i] === '(' && (bracketsPattern[nextChar] === '{' || bracketsPattern[nextChar] === '[')) {
            return false
        }

        if(bracketsPattern[i] === '}' && (bracketsPattern[nextChar] === ']' || bracketsPattern[nextChar] === ')')) {
            return false
        } else if(bracketsPattern[i] === ']' && bracketsPattern[nextChar] === ')') {
            return false
        }  
        return true
    }   
}
console.log(validateBrackets("{asd}"))
console.log(validateBrackets("{[(asd)]}"))
console.log(validateBrackets("[{asd}]"))
console.log(validateBrackets("[(asd])"))
console.log(validateBrackets("{aaa[bbb(ccc)ddd]eee}"))

// Examples:
// {asd} – true
// {[(asd)]} – true
// [{asd}] – false // order is not right
// [(asd]) – false // there is closing medium bracket, but the last opening bracket is small
// {aaa[bbb(ccc)ddd]eee} – true

    