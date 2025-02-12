//alert("Hello world!");
//console.log("Hello world!");

//let x = parseInt( prompt("enter x: "));
//let y = 10;
///let result = x + y - 2 * 10;
//console.log(result);


/* let a = 10;
let b = 10;
if (a > b)
    {
    console.log("a > b");
} else if (a == b){
    console.log("a ir vienāds b");
} else {
    console.log("a < b");
} */

  /*  let user = parseInt( prompt("enter number: "));
   if ( user < 0 )
   {
    console.log("Negatīvs");
   }
   if ( user > 0 )
   {
    console.log("Pozitīvs")
   } */

    let age = parseInt( prompt("age: "));
    let pilsonība = false;
    if (( age >= 18) && (pilsonība == true) )
    {
        console.log("Ir pilngadīgs");
    }
    if ((age >= 18) && (pilsonība == false))
        {
            console.log("Ir pilngadīgs, bet nav pilsonis.");
        }
        if ((age < 18) && (pilsonība == true))
            {
                console.log("Ir pilsonis, bet nav pilngadīgs.");
            }