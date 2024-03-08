var database = [
    {
        username: 'Neusa',
        password: 'rodrigues'
    },
]

var newsFeed = [
    {
        username: 'Manuel',
        timeline: 'Real Madrid lost 11-0 to barcelona, I\'m ready to end it all :('
    },
    {
        username: 'Djanyra',
        timeline: 'OMG all my hair fell out'

    },
    {
        username: 'Cesare',
        timeline: 'Karate is not a sport, it\'s a way of life!'
    }
]

var usernamePrompt = prompt('Please enter your username.');
var passwordPrompt = prompt('Please enter your password.');

function signIn(user, pass) {
    if(user === database[0].username && pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert('Wrong username or password!');
    }
}

signIn(usernamePrompt, passwordPrompt);