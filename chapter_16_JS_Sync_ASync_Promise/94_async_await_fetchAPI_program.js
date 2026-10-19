 const fetchUserInfo = async () => {
   try { 
   const response = await fetch('https://reqres.in/api/users/100'); // fetch() is async step, so need await
   if(!response.ok) {
        throw new Error("user data is not found ....")
   }
   else {
    // parse JSON response
        const userData = await response.json(); // .json() is async step, so need await
        console.log(userData);
   }
   }
   catch (error) {
    console.error(error);
   }
 }
 // call the function
 fetchUserInfo();