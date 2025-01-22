const user=[
    {
        username:"pappu",
        password:"pappu@123"
    },{
        username:"kiran",
        password:"kiran@123"
    }
];
var currntuser = null;
export function userlogin(username,passworde){
    if(username===user[0].username && passworde===user[0].password){
        currntuser=user[0];
        console.log("login success");
    }else{
        console.log("login failed");
    }
}
export function logoutuser(){
    currntuser=null;
    console.log("LogOut");
}

