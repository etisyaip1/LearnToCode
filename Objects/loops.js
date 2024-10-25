let fruits = ["apple" , "banana" , "grape" , "tomato", "berries"];

for (let i = 0; i < 3; i++) {
    // i++ means to add , i= 0 is just the starting point we will always start with this in the array. creating a variable and setting it to a number 
    // i < means as long as it is LESS THAN the length of the array
    // i is just keeping track of how many times the loop is running, start at the beginning of the array you are using it for 
    // increment means add one, plus one. without i++ it would be an infinte loop 
    console.log(fruits[i]);
    //only printing out what's true within the array, since i is '0' and it is LESS thna the amount in the array (3) it is proven true. SO ALL of the array (all frutis) are printed.
    // i-- reads array backwards, the reverse increment 
}