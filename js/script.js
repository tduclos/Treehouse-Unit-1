/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

//Array filled with quotes to be randomly selected and displayed on index.html

const quotes = [
    {string: 'Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.',
    source: 'Neil Gaiman',
    citation: 'Coraline',
    year: 2002,
    tag: 'Fiction'
    },
    {string: 'I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.',
    source: 'Albert Einstein',
    year:  1929,
    tag: 'Science'
    },
    {string: 'Everything you can imagine is real.',
    source: 'Pablo Picasso',
    },
    {string: 'And, when you want something, all the universe conspires in helping you to achieve it.',
    source: 'Paulo Coelho',
    citation: 'The Alchemist',
    year: 1988,
    tag: 'Fiction'
    },
    {string: 'Whatever you are, be a good one.',
    source: 'Abraham Lincoln',
    tag: 'Politics'
    }   
];

//Uncomment this to verify the array is working as intended in the console
//console.log(quotes);

/*`the 'getRandomQuote function generates and returns a random number from 0 to the length of the quotes array*/

function getRandomQuote(){
    let quoteNum = Math.floor(Math.random()* quotes.length);   
    //uncomment this to verify the function is working in the console
    //console.log(quoteNum);
    return quotes[quoteNum];
};

/*the 'printQuote' function calls the 'getRandomQuote' function and uses the value to pull an object from the array, formats the contents into a string, and displays it on index.html*/

function printQuote(){
    //Uncomment to verify the function is running when called.
    //console.log('Printing quote...');
    let quoteToPrint = getRandomQuote();
    let string =    `<p class="quote"> ${quoteToPrint.string}</p>
                    <p class="source"> ${quoteToPrint.source}`
    if(quoteToPrint.hasOwnProperty('citation')){
            string += `<span class="citation"> ${quoteToPrint.citation} </span>`;
       };
    if(quoteToPrint.hasOwnProperty('year')){
            string += `<span class="citation"> ${quoteToPrint.year} </span>`;
       };
    string += `</p>`;
    //Extra credit part 1: Additional 'tag' property
    if(quoteToPrint.hasOwnProperty('tag')){
        string += `<p>Tag: ${quoteToPrint.tag}</p>`
    }
    document.getElementById('quote-box').innerHTML = string; 
};

//Extra Credit part 3: Quote automatically updates every 30 seconds
setInterval (printQuote, 30000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);