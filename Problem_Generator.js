function generateProblem() {
    var challenges = [
        "Go far away from your house without money and attempt to buy something ",
        "Solve this random math problem: " + generateRandomMathProblem(),
        "You are the greater problem ",
        "Count the number of items in your room without getting up ",
        "Try to touch your toes without bending your knees ",
        "Name five countries in Africa in 10 seconds ",
        "Describe the plot of your favorite movie in just three sentences ",
        "Write a short poem about the nearest object to your right ",
        "Draw a quick doodle of a cat without lifting your pen from the paper ",
        "Learn and perform a magic trick from an online tutorial ",
        "Cook a meal using only three ingredients from your kitchen ",
        "Try to juggle three objects, even if they are not meant for juggling",
        "Recite the alphabet backward as fast as you can ",
        "Create a funny, one-sentence story ",
        "Send a positive message to the fifth contact in your phone ",
        "Learn a new word and use it in a sentence ",
        "Do 10 jumping jacks ",
        "Hold a plank position for one minute ",
        "Find and wear a piece of clothing that you haven't worn in the last year ",
        "Write a letter to your future self ",
        "Fly",
        "Try to stand on one leg for two minutes ",
        "Create a fictional superhero with a unique power and costume ",
        "Compose a haiku about the current weather ",
        "Memorize and recite a famous quote ",
        "Name three things you are grateful for today ",
        "Do 20 push-ups ",
        "Recall and share your earliest childhood memory ",
        "Invent a new dance move and perform it ",
        "Learn a quick magic card trick and show it to someone ",
        "Describe your dream vacation destination in vivid detail ",
        "Find a book and read the first page out loud ",
        "Recite the multiplication table for the number 7 ",
        "Adopt someone",
        "Try to do a handstand against a wall ",
        "Share a fun fact about yourself that most people don't know ",
        "Attempt to do a cartwheel ",
        "Sing a snippet of your favorite song ",
        "Make a list of five goals you want to achieve in the next year ",
        "Tell a joke, and make someone laugh ",
        "Find and name three constellations in the night sky ",
        "Create a short story using only emojis ",
        "Balance a spoon on your nose for 30 seconds ",
        "Recall and recite a nursery rhyme from your childhood ",
        "Mime an everyday activity, and see if someone can guess what it is ",
        "Do 15 high knees in place ",
        "Build a structure using only playing cards ",
        "Recite a tongue twister three times without making a mistake ",
        "Find and wear a hat you haven't worn in a while ",
        "Compose a tweet about your day in exactly 140 characters ",
        "Try to touch your nose with your tongue ",
        "Create a new handshake and teach it to someone ",
        "Write down five things that make you smile ",
        "Jump as high as you can three times in a row ",
        "Find a random word in the dictionary and create a sentence using it ",
        "Make a paper airplane and see how far it can fly ",
        "Donate to a charity",
        "Recall the last dream you had and share a detail about it ",
        "Balance a book on your head while standing for one minute ",
        "Pick a random item in your room and create a short commercial for it ",
        "Do your best impression of a famous celebrity ",
        "Write a note of encouragement to yourself and read it out loud ",
        "Find a pen and spin it in your hand for 30 seconds ",
        "Recall the lyrics to your favorite childhood song ",
        "Create a silly dance and perform it for someone ",
        "Spell your name backward as quickly as possible ",
        "Recite a famous quote from a movie or book in front of random person(s)",
        "Try to solve a Rubik's Cube, even if you've never done it before ",
        "Pick a color and find five objects in your surroundings of that color ",
        "Make a list of your top three favorite movies and explain why you love them ",
        "Hold your breath for as long as you can ",
        "Find a motivational quote and share it with someone to brighten their day ",
        "Do 10 push-ups in a row ",
        "Recall and share a memorable moment from your childhood ",
        "Take a deep breath and savor the scent of your surroundings ",
        "Close your eyes and listen to the sounds around you for one minute ",
        "Recall a funny joke and share it with someone to make them laugh "

    ];

    var randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
    var problemElement = document.getElementById("problem");

    problemElement.innerHTML = "Problem: " + randomChallenge;
}

function generateRandomMathProblem() {
    var operators = ['+', '-', '*', '/'];
    var operator = operators[Math.floor(Math.random() * operators.length)];
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;

    var problemText = "";
    switch (operator) {
        case '+':
        case '-':
        case '*':
            problemText = `${num1} ${operator} ${num2}`;
            break;
        case '/':
            // Ensure division is a valid operation
            num2 = (num2 !== 0) ? num2 : 1;
            problemText = `${num1} ${operator} ${num2}`;
            break;
    }

    return problemText;
}

function generateQuadraticEquation() {
    var coefficients = [
        Math.floor(Math.random() * 5) + 1, // coefficient for x^2
        Math.floor(Math.random() * 10) + 1, // coefficient for x
        Math.floor(Math.random() * 10) + 1  // constant term
    ];

    var equation = `${coefficients[0]}x^2`;

    if (coefficients[1] > 0) {
        equation += ` + ${coefficients[1]}x`;
    } else if (coefficients[1] < 0) {
        equation += ` - ${Math.abs(coefficients[1])}x`;
    }

    if (coefficients[2] > 0) {
        equation += ` + ${coefficients[2]}`;
    } else if (coefficients[2] < 0) {
        equation += ` - ${Math.abs(coefficients[2])}`;
    }

    return `Solve the quadratic equation: ${equation} = 0`;
}