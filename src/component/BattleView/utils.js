const affiliations = [
    "Alliance to Restore the Republic",
    "Red Squadron",
    "Rogue Squadron",
    "Massassi Group",
    "Leia Organa's team",
    "Endor strike team",
    "Jedi Order",
    "Bright Tree tribe",
    "New Republic", 
    "Resistance",
    "Apprentice Legislators",
    "Legislative Youth Program",
    "Gungan High Council",
    "Officer corps",
    "Naboo delegation",
    "Lars family"
    ]
    
    const lightQuotes = [`Luminous beings we are, not this crude matter. - Yoda`, 
    `Your focus determines your reality. —Qui-Gon Jinn`,
    `No longer certain that one ever does win a war, I am. —Yoda`,
    `The ability to speak does not make you intelligent. —Qui-Gon Jinn`,
    "Strike me down and I will become more powerful than you could possibly imagine. – Obi-Wan Kenobi",
    "In my experience, there’s no such thing as luck. – Obi-Wan Kenobi",
    "No one’s ever really gone. – Luke Skywalker"
    ]
    
    const darkQuotes = [
        `This will be a day long remembered. it has seen the end of kenobi. it will soon see the end of the rebellion. - Darth Vader`,
        `If You're Not With Me, Then You're My Enemy! - Anakyn Skywalker`,
        `I Find Your Lack Of Faith Disturbing. - Darth Vader`,
        `The Dark Side of the Force is a pathway to many abilities some consider to be unnatural. - Darth Sidious`,
        "When I left you, I was but the learner. Now I am the master. – Darth Vader to Obi Wan Kenobi",
        "You have controlled your fear, now release your anger. Only your hatred can destroy me. -Darth Vader",
        "You come from nothing. You’re nothing. But not to me. – Kylo Ren"
    ]

export const randomNumber = () => {
    let calc = Math.round(Math.random() * (88 - 1 + 1) + 0)
    if(calc === 17 || calc === 0 || calc === undefined){
        randomNumber()
    } else {
        console.log(calc)
        return calc
    }
}

export const randomWinner = (charArray) => {
    return charArray[Math.floor(Math.random() * charArray.length)]
}

export const searchAffiliations = (charAffiliations) => {

    let searchEqualities = charAffiliations.some( i => affiliations.includes(i))

    if(searchEqualities || charAffiliations.length === 0) {
        let randomQuoteIndex = Math.floor(Math.random() * lightQuotes.length)
       
        return {quote: lightQuotes[randomQuoteIndex], side:"Light Side"}
    } else {
        let randomQuoteIndex = Math.floor(Math.random() * darkQuotes.length)
    
        return {quote: darkQuotes[randomQuoteIndex], side: "Dark Side"}
    }
}

