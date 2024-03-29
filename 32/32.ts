/// array no:1
let current_users=["asad","saif","usama","jameel","wajahat"];
// array no:2
let new_users=["sadam","saad","usama","aneel","ayesha"];
////condition lagae hy new user or current user ko check karne ke
new_users.forEach(newoneuser=>{
    let our_condition=(current_users.some(newoneusers=>newoneusers.toLowerCase()===newoneuser.toLowerCase()))
/////
    if(our_condition){
    console.log(`sorry ${newoneuser} is already taken`)
/////
}else {
    console.log(`sorry ${newoneuser} is available`)
}
})


