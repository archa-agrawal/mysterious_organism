const pAequorFactory = (number, array) => {
    return {
        specimenNumber: number,
        dna: array,   
        mutate: function(){
            let randomIndex = Math.floor(Math.random() * this.dna.length)
            let randomBase = this.dna[randomIndex]
            let newBase= returnRandBase();
            while (newBase === randomBase) {
                newBase= returnRandBase()
            }
            this.dna[randomIndex] = newBase
        },
        compareDna: function(otherDna){
            let sameBase = 0 
            for (let i=0; i<this.dna.length; i++) {
                if (this.dna[i] === otherDna[i]) {
                    sameBase = sameBase + 1
                }
            }
            let percentSimilarity = sameBase*100/15
            console.log(`Specimen ${this.dna.specimenNumber} and specimen ${otherDna.specimenNumber} have ${percentSimilarity}% DNA in common`)
        },
        willLikelySurvive: function(){
            let totalGCContent = 0
            for (let i=0; i< this.dna.length; i++) {
                if (this.dna[i]=== 'G' || this.dna[i]=== 'C') {
                    totalGCContent= totalGCContent + 1
                }
            }
            return totalGCContent*100/15 > 60 
        }
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
    console.log(`specimen #1 and specimen #2 have ${percentSimilarity}% DNA in common`)
} 
const willLikelySurvive = (arr) => {
    let totalGCContent = 0
    for (let i=0; i< arr.length; i++) {
        if (arr[i]=== 'G' || arr[i]=== 'C') {
            totalGCContent= totalGCContent + 1
        }
    }
    return totalGCContent*100/15 > 60 
}
const dna1 = [ 'A', 'T', 'G', 'T', 'T', 'C', 'T', 'A', 'A', 'C', 'A', 'C', 'G', 'T', 'A' ]
const dna2 = [ 'G', 'T', 'C', 'G', 'G', 'G', 'C', 'C', 'G', 'T', 'A', 'C', 'G', 'C', 'A' ]
const dna3 = [ 'G', 'A', 'C', 'A', 'C', 'C', 'C', 'G', 'A', 'A', 'A', 'T', 'A', 'G', 'G' ]
const dna4 = [ 'T', 'T', 'C', 'G', 'G', 'T', 'G', 'G', 'T', 'C', 'C', 'C', 'G', 'T', 'G' ]


const dnaArray = ['', dna1, dna2, dna3, dna4]
const createDatabase = (arr) => {
    const pAequorDatabase = []
    for (let i=1; i<dnaArray.length; i++) {
        let newData = pAequorFactory(i, dnaArray[i])
            pAequorDatabase.push(newData)     
    }
    return pAequorDatabase
}
console.log(createDatabase(dnaArray))
