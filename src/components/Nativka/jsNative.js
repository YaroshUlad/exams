const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];
const names = []
for (let i in students) {
    const res = students[i].name
    names[i] = res
}
//console.log(names)
const newscores = []
for (let i in students) {
    newscores[i] = {...students[i], scores: students[i].scores + 10}
}
//console.log(newscores)

const myFind = (arr, findFn) => {
    for (let i in arr) {
        if (findFn(arr[i])) {
            return arr[i]
            break
        }
    }
}
const arrs = [2, 3, 4, 5, 6]
//console.log(myFind(students, el => el.name === 'John'))

//________________________________my .concat_______________________________
const myConcat = (arr1, arr2) => {
    const arr3 = [...arr1, ...arr2]
    return arr3
}
const array1 = [1, 2, 3, 4, 5, 6, 7]
const array2 = [4, 5, 6]
//console.log(myConcat(array1,array2))
//console.log(array1.concat(array2))
//______________________________my .fill____________________________

const myFill = (arr, fillSymbol, startIndex, endIndex) => {
    let resultArray = []
    for (let i in arr) {
        if ((i < startIndex && startIndex !== undefined) || i >= endIndex) {
            resultArray[i] = arr[i]
        }
        if ((i >= startIndex && i < endIndex) || (startIndex === undefined && endIndex === undefined)) {
            resultArray[i] = fillSymbol
        }
        if (i >= startIndex && endIndex === undefined) {
            resultArray[i] = fillSymbol
        }
    }
    return resultArray
}
//console.log(myFill(array1, 'p', 2, 4))
//console.log(array1.fill('p', 2, 4))

//_________________________my filter________________________________

const myFilter = (arr, filterFunc) => {
    let resultArr = []
    for (let i in arr){
        if (filterFunc(arr[i])){
            resultArr.push(arr[i])
        }
    }
    return resultArr
}

//console.log(myFilter(array1,el=>el!==3))
//console.log(array1.filter(el=>el!==3))

//______________________________my map______________________

const myMap = (arr,mapFunc) => {
    let resArray = []
    for (let i in arr){
        resArray[i] = mapFunc(arr[i])
    }
    return resArray
}
//console.log(myMap(array1, el=>el+1))
//console.log(array1.map(el=>el+1))



//_____________________________4 lesson___________________

//reduce уменьшение до одного значения

const nums = [1,2,3,4,5] //

const sum = nums.reduce((pr,cur)=>pr+cur ,0)//callback, previus value, current value

console.log(sum)

const max = nums.reduce((acc,el)=>acc>el?acc:el)
console.log(max)

let studentss = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },{
        id: 4,
        name: "John",
        age: 23,
        isMarried: false,
        scores: 100
    }
];

const stCopy = studentss.reduce((pr,el)=> {
    pr.push({...el});
    return pr;
},[])

const best = studentss.reduce((pr,cur)=>{
    if (cur.scores>100){
        pr.push(cur)
    }
    return pr
},[])

console.log(best)

const sts = studentss.reduce((pr,cur)=>{
    pr[cur.id] = {...cur}
    delete pr[cur.id].id
    return pr
} ,{})
console.log(sts)