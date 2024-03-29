let username=["sadam","asad","mahad","admin"];
////////
username.forEach(oneuser => {
    if(oneuser ==="admin"){
        console.log(`hello ${oneuser},you like to see a status report`)
    }else{
        console.log(`hello ${oneuser}, thank you for login in again`)
    }
});