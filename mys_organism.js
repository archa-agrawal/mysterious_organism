const pAequorFactory = (number, array) => {
    return {
    specimenNumber: number,
    dna: array
    }
}
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
}

const mutate = (arr) => {
    let randomIndex = Math.floor(Math.random() * arr.length)
    let randomBase = arr[randomIndex]
    let newBase= returnRandBase();
      
    while (newBase === randomBase) {
        newBase= returnRandBase()
        console.log(newBase)
    }
    arr[randomIndex] = newBase
    return arr
}

const compareDna = (arr1, arr2) => {
    let sameBase = 0 
    for (let i=0; i<arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            sameBase = sameBase + 1
        }
    }
    let percentSimilarity = sameBase*100/15
    console.log(`specimen #1 and specimen #2 have ${percentSimilarity}% DNA in common)
} 


const dna = [ 'A', 'T', 'G', 'T', 'T', 'C', 'T', 'A', 'A', 'C', 'A', 'C', 'G', 'T', 'A' ]
console.log(mutate(dna))
