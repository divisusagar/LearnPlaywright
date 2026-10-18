
function startCoffeeMachine() {
    return new Promise((resolve) => {
        console.log("Starting the coffee machine...");
        setTimeout(() => {
            console.log("Coffee machine is ready");
            resolve("coffee machine is ready");
        }, 2000);
    })
}

function grindCoffeeBeans() {
    return new Promise((resolve) => {
        console.log("Grinding coffee beans...");
        setTimeout(() => {
            console.log("Coffee beans are grounded");
            resolve("ground coffee");
        }, 1000);
    });
}

function boilWater(){
    return new Promise((resolve) => {
        console.log("Boiling water...");
        setTimeout(() => {
            console.log("Water is boiled");
            resolve("boiled water");
        }, 1500);
    });
}

function pourBoilingWaterIntoCup(boiledWater){
    return new Promise((resolve) => {
        console.log("Pouring boiling water into the cup...");
        setTimeout(() => {
            console.log("Boiling water is in the cup");
            resolve(boiledWater + ' in cup');
        }, 500);
    });
}

function addCoffeeToCup(groundCoffee){
    return new Promise((resolve) => {
        console.log("Adding ground coffee to the cup...");
        setTimeout(() => {
            console.log("Coffee is added to the cup");
            resolve(groundCoffee,' is added to boiling water cup');
        }, 500);
    });
}

function stirCoffee(coffeeInCup){
    return new Promise((resolve) => {
         console.log("Stirring the coffee...");
        setTimeout(() => {
            console.log("Coffee is stirred.");
            resolve('Starbugs Coffee ',coffeeInCup);
        }, 300);
    });
}

function enjoyCoffee(finalCoffee){
    console.log('Enjoying my ',finalCoffee);
}

async function makeCoffee(){
    try {
        await startCoffeeMachine();
        await grindCoffeeBeans();
        const boiledWater = await boilWater();
        const waterInCup = await pourBoilingWaterIntoCup(boilWater)
        const coffeeInCup = await addCoffeeToCup(waterInCup)
        const coffeeReady = await stirCoffee(coffeeInCup);
        enjoyCoffee(coffeeReady);
    }
    catch (error){
        console.error("Error occured: ", error);
    }
}
makeCoffee();