const jokeComponents = {
    nouns: ["traffic light", "car", "the sea", "shore", "envolope", "stamp", "fried eggs", 
    "knives", "forks", "monks", "breakfast", "window", "door", "chickens", "wasp",
    "ant", "farmer", "mermaids", "teddy bear", "waiter", "electritian", "firefighter", "children",
    "police officer", "polititian", "book", "coffee bean"],

    answers: ["\"Don't look now. I'm changing.\"", "Nothing! It just makes waves.", "\"Stick with me, and we'll go places.\"",
    "\"Oh no! It's out of the frying pan and into the friar!\"", "\"What are you squeaking about? I'm the one with the pane!\"",
    "\"Olé!\"", "\"I must fly now, but I'll give you a buzz later!\"", "\"Lettuce go!\"", "\"I haven't a notion!\"", "\"No thanks. I'm stuffed!\"",
     "\"Let's go for a dip!\"", "\"Wire you insulate!\""]

};

//function to generate a random noun from the nouns list in jokeComponents
const generateNoun = () => {
    randomIndex = Math.floor(Math.random() * jokeComponents.nouns.length);
    return jokeComponents.nouns[randomIndex];
}

//function to generate a random answer from the answer list in jokeComponents
const generateAnswer = () => {
    randomIndex = Math.floor(Math.random() * jokeComponents.answers.length);
    return jokeComponents.answers[randomIndex];
}

//function to generate a random joke
const generateJoke = () => {
    noun1 = generateNoun();
    noun2 = generateNoun();
    //ensures nouns are not the same
    while (noun1 === noun2) {
        noun2 = generateNoun();
    }

    answer = generateAnswer();

    return `What did the ${noun1} say to the ${noun2}? \n${answer}`;

}

//logs generated joke to the console
console.log(generateJoke());