// Question 1
//Mutating array methods are ones that change the object after the method has been used.
// Mutation in context of JavaScript arrays is basically changing the array itself instead of returning a new array with the new changes whereas 
//Non-Mutation is returning a whole new array which has all the changes. 
//Non-mutating methods do not change the object after the method has been used. 

//e.g of mutating methods;
//array.copyWithin(), array.fill(), array.pop(), array.push(), array.reverse()

//e.g of non-mutating methods;
//array.concat(), array.includes(), array.indexOf, array.join(), array.lastIndexOf, array.toString()
 


// Question 2
const array = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
array.push('Kotlin')
array.splice(3,0,'Java')
array.shift()
array.unshift('Scala', 'Swift')
array.splice(5,1, 'Go', 'Rust')


console.log(array)


// Question 3
//The value of fruit will be 'orange'



//Question 4
function maxFromArray(numbers) {
    let max = numbers[0];                      
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {               
            max = numbers[i];
        }
    }
    return max;                                
}

const randomNumbers = [27, 64, 47, 85];
console.log(maxFromArray(randomNumbers));


//Question 5
const numbers = [65, 44, 12, 4];
numbers.forEach(valTimesIndex)

document.getElementById("demo").innerHTML = numbers;

function valTimesIndex(item, index, arr) 
{
  arr[index] = item * index;
}

