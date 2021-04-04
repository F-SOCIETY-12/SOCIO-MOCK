const ADJECTIVES = ['AMAN',
'VANSHIKA',
'RAVI',
'TARUN',
'AYUSH']

const OBJECT = ['KAUSHIK',
'GUPTA',
'SINGH',
'SHARMA',
'PORTER'
]

function getRandomUsername ()
{
    const adj = ADJECTIVES[Math.floor(Math.random() * 5)]
    const obj = OBJECT[Math.floor(Math.random() * 5)]
    return `${adj}--${obj}`
}

/*console.log(getRandomUsername())
console.log(getRandomUsername())
console.log(getRandomUsername())
console.log(getRandomUsername())
console.log(getRandomUsername())
console.log(getRandomUsername())
console.log(getRandomUsername())
console.log(getRandomUsername())*/



module.exports = {
    getRandomUsername
}

