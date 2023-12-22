// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }





// const month = "Aprail"

// switch (month) {
//     case "jan":
//         console.log("January");
//         break;

//     case "feb":
//         console.log("feb");
//         break;

//     case "march":
//         console.log("march");
//         break;

//     case "april":
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }



const foo = 0;

switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Value of foo matches this criteria; execution starts from here
    console.log(0);
  // Forgotten break! Execution falls through
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
// Logs 0 and 1

