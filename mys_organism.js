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

const mutation = (arr) => {
    let randomIndex = Math.floor(Math.random() * arr.length)
    let randomBase = arr[randomIndex]

    while (randomBase != arr[randomIndex]) {
        let newBase = returnRandBase()
        arr[randomIndex] = newBase
        console.log(newBase)
    }
    return arr
}
const dna = [ 'A', 'T', 'G', 'T', 'T', 'C', 'T', 'A', 'A', 'C', 'A', 'C', 'G', 'T', 'A' ]
console.log(mutation(dna))
