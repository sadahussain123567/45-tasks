let usernames=["asad","saif","admin","usman"];
usernames=[]
if(usernames.length === 0){
console.log("your array is empty we need to find some users")
}else{
    usernames.forEach(oneuser => {
        if(oneuser ==="admin"){
            console.log(`hello ${oneuser},would  you like to see a status report`)
        }else{
            console.log(`hello ${oneuser}, thank you for login in again`)
        }
    });
}


































