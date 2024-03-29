"use strict";
////////////function banaya hy///////////////////
function make_shirt(size = "large", printmessage = " i love typescript") {
    console.log(` creating a ${size} shirt with the ${printmessage} prints on shirt`);
}
//////function ko call kia hy//////////////////////
make_shirt();
///medium size se bnae hy///////////////////////////////
make_shirt("medium");
////////size bhe change ke hy or message bhe change kia hy
make_shirt("small", "i love python");
