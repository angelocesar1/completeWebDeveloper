var database = [
    {
        username: 'Neusa',
        password: 'rodrigues'
    },
    {
        username: 'Maya',
        password: 'kpop'
    },
    {
        username: 'Lito',
        password: 'webba'
    }
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

function isUserValid(user, pass) {
    for (i=0; i < database.length; i++) {
        if(user === database[i].username && pass === database[i].password) {
            return true
        } 
    } 
    return false
}

function signIn(user, pass) {
    if(isUserValid(user, pass)) {
        console.log(newsFeed)
    } else {
        alert('Wrong username or password.')
    }
}

signIn(usernamePrompt, passwordPrompt);