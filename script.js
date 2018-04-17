// function getUserName() {
//     var username = prompt('what is your full name?').split(' ');
//     outputUsername(username);
// }

// function outputUsername(NameArray) {
//     // document.getElementById('firstName').innerHTML = nameArray[0];
//     // document.getElementById('lastName').innerHTML = nameArray[nameArray.length - 1];

//     for (var i = 0; i < nameArray.length; i++) {
//         if (i == 0 || (nameArray.length - 1)) {
//             console.log("we got the zeroith element!", nameArray[i]);
//         } else {
//             console.log("not the zeroth");
//         }
//     }
// }

// getUserName();

// var cars = ["jeep", "subaru", "honda"];
// console.log(cars[1]);
// console.log(cars.length);
// cars.push("bmw");
// console.log(cars);

// var removedCar = cars.pop();
// console.log(cars);
// console.log(removedCar);

// cars.unshift("chevy");
// console.log(cars);

// cars.splice(1, 0, "red", "green");
// console.log(cars);

// cars.slice(4);

// var movies = ["Big Daddy", "Jurasic Park", "Bad Boys II", "Up", "Martian Child"];

// // var movies = [];
// // movies.add("Men in Black");
// movies.push("Die Hard");

// movies.splice(3, 4, "Godfather I", "Godfather II", "Godfather III");

// movies.add("Guardians of the Galaxy");

// var subMovies = movies.slice(1, 3);

// movies.pop(movies[0]);

// console.log(movies[1]);

// if, else, and ifelse

// function getUserAge() {
//     var userAge = parseInt(prompt("How old are you?"));
//     if (userAge < 21) {
//         console.log("Sorry, you are too young.");
//     } else if (userAge == 21) { 
//         console.log("barely ok")
//     } else {
//         console.log('plenty old');
//     }
// }

// getUserAge();

// TERNARY OPERATOR

// function getAge() {
//     var age = Parseint(prompt('What is your age again?'));
// //does 5 = 5? if yes
//     (age >= 21) ? console.log('true') : console.log('false');
// }

// getAge();

function chooseAdventure() {
    while (true) {

        var location = prompt("Would you like to go to the store or relax at home? Respond by typing store or home", 'store, home');

        if (location == "store") {
            var what = prompt("Are you going to bake or bbq?", 'bake, bbq');
        }
        if (what == "bake") {
            prompt("You made some awesome cupcakes!");
            break;
        }
        if(what == "bbq") {
            prompt("You made some awesome kabobs!");
            break;
        }
        if (location == home) {
            var activity = prompt("Would you like to go to watch netflix or go swimming?", 'netflix, swimming');
        }
        if (activity == "netflix") {
            prompt("You watched Jessica Jones");
            break;
        }
        if (activity == "swimming") {
            prompt("You cooled off in the pool");
            break;
        }
        else {
            prompt("Sorry, you entered the wrong input or it wasn't lower-case.");
            break;
        }
    }
}

chooseAdventure();