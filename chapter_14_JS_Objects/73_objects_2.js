const user = {
    "admin": {
        "username": "Susagar", 
        "password": "Admin@123"
    },
    "normal": {
        "username": "Pavan",
        "password": "NonAdmin@123"
    }
}
console.log(user.admin);
const {username: username1, password: password1} = user.admin;
console.log(username1);
console.log(password1);
const {username: username2, password: password2} = user.normal;
console.log(username2);
console.log(password2);