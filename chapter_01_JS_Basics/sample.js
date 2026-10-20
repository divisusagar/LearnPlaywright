// setTimeout(() => {
//   console.log("0. Coffee Preparation");
// }, 3000);

// setTimeout(() => {
//   console.log("1. Boil Water");
// }, 5000);


console.log('*'.repeat(50))

setTimeout(() => {
  console.log("1. Boil water");

  setTimeout(() => {
    console.log("2. Add coffee powder");

    setTimeout(() => {
      console.log("3. Add milk");

      setTimeout(() => {
        console.log("4. Add sugar");

        setTimeout(() => {
          console.log("5. Serve coffee");
        }, 5000);
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);

