//Start the coffee machine - 2 sec
//Grid coffee beans - 1 sec
// Boil water - 1.5 sec
// Pour boiled water into a cup - 0.5 sec
// Add ground coffee to the cup - 0.5 sec
// Stir the coffee - 0.3 sec
// Enjoy the coffee

function startCoffeeMachine(callback){
    console.log("Starting the coffee machine...");
    setTimeout(function(){
        console.log("Coffee machine is ready");
        callback("coffee machine is ready")
    }, 2000);
}

function grindCoffeeBeans(callback){
    console.log("Grinding coffee beans...");
    setTimeout(function(){
        console.log("Coffee beans are grounded");
        callback("ground coffee")
    }, 1000);
}

function boilWater(callback){
    console.log("Boiling water...");
    setTimeout(function(){
        console.log("Water is boiled");
        callback("boiled water")
    }, 1500);
}

function pourBoilingWaterIntoCup(boiledWater, callback){
    console.log("Pouring boiling water into the cup...");
    setTimeout(function(){
        console.log("Boiling water is in the cup");
        callback(boilWater + ' in cup');
    }, 500);
}

function addCoffeeToCup(groundCoffee, callback){
    console.log("Adding ground coffee to the cup...");
    setTimeout(function(){
        console.log("Coffee is added to the cup");
        callback(groundCoffee,' is added to boiling water cup');
    }, 500);
}

function stirCoffee(coffeeInCup, callback){
    console.log("Stirring the coffee...");
    setTimeout(function(){
        console.log("Coffee is stirred.");
        callback('enjoyable ',coffeeInCup);
    }, 300);
}

function enjoyCoffee(finalCoffee){
    console.log('Enjoying my ',finalCoffee);
}

// callback-hell
startCoffeeMachine(function(coffeeMachineStatus){
    grindCoffeeBeans(function(groundCoffee){
        boilWater(function(boiledWater){
            pourBoilingWaterIntoCup(boiledWater, function(waterInCup){
                addCoffeeToCup(groundCoffee, function(coffeeInCup){
                    stirCoffee(coffeeInCup, function(finalCoffee){
                        enjoyCoffee(finalCoffee);
                    })
                })

            })
        })
    })
})

