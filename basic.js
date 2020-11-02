/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
function sumintegers(a, b) {
  if (a === b) {
    return 3 * (a + b);
  } else {
    return a + b;
  }
}
console.log("#1", sumintegers(3, 3));
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
function check(num1, num2) {
  const sum = num1 + num2;

  if (num1 === 50 || num2 === 50 || sum === 50) {
    return true;
  }
    return false;
  
}
console.log("#2", check(50, 30));
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
function removechar(str) {
  return str.slice(0, 3) + str.slice(4);
}
console.log("#3", removechar("on essaye"));

/*
4)
 Create a function to find the largest of three given integers.
*/
function largest(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(num1, "is the largest");
  }
  if (num2 > num1 && num2 > num3) {
    console.log(num2, "is the largest");

  }if(num3>num1 && num3>num2){
    console.log(num3, "is the largest");

  }
}
console.log("#4");
largest(9,7,10);

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
function numbers_in_range(num1,num2) {
    let arrrange1=[]
    let arrrange2=[]
  
    for(let i=40;i<=60;i++){

      arrrange1.push(i)
       

    }
    
    if((arrrange1.includes(num1)) && (arrrange1.includes(num2))){
        console.log(num1,num2 ,'are in the range(40,60)')
      
       
    }else{
        console.log(num1,num2 ,'are not in the range(40,60)');
      
    }
    for(let j=70;j<=100;j++){
    arrrange2.push(j)
    
    
    }
    if((arrrange2.includes(num1)) && (arrrange2.includes(num2))){
        console.log(num1,num2 ,'are in the range(70,100)')
       
       

    }else{
        console.log(num1,num2 ,'are not in the range(70,100)');
      
    }
       
    
    
}
console.log('#5')
numbers_in_range(90,100);
/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
function Display_city(cityname) {
    if(cityname.startsWith('Los')||cityname.startsWith('New')){
        return cityname;
    }else{
        return ''
    }
    
}
console.log( '#7',Display_city('New York'))

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
function sum_elements_of_an_array(arr) {
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
   console.log(sum)
    
}
console.log( '#8')
sum_elements_of_an_array([3,6,7])
/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
function containselement(arr) {
    if(arr.includes(1)||arr.includes(3)){

        return true;
    }
        return false;
    }
    

console.log( '#9',containselement([3,8]))
/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
function notcontainselement(arr) {
    if (!(arr.includes(1)||arr.includes(3))){

        return true;
    }else{
        return false;
    }
    
}
console.log( '#10',notcontainselement([3,8]))
/*
11)
Create a function to find the longest string from a given array of strings.
*/

function longeststring(arr) {
    max_length = arr[0].length;
    for(let i=1;i<arr.length;i++){

        if(arr[i].length>max_length){
            max_length = arr[i].length
            return arr[i];
        }else{
            return arr[0];
        }
    }
    
}
console.log( '#11',longeststring(['amour','constitutionnellement','sympa']))

/*
12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
    */
   function anglestype(degree) {
       if(degree>=0 && degree<=90){
           console.log(" It's an Acute angle")
       }if(degree===90){
        console.log(" It's an Right angle")
       }if(degree>=90 && degree<=180){
        console.log(" It's an Btuse angle")

       }if(degree===180){
        console.log(" It's an Straight angle")

       }
       
   }

console.log('#12')
anglestype(89)

   /*
13)
Create a function to find the index of the greatest element of a given array of integers
*/
function greatest(arr){
 
   let greatest = arr[0];
  for(let i=1;i<arr.length;i++){
      if(arr[i]>greatest){
          greatest=arr[i]
         
      }
  }
  return (arr.indexOf(greatest));
}
console.log('#13', greatest([40,90,30]))
/*
14)
Create a function to get the largest even number from an array of integers.

*/
function largesteven(arr){
    let largest =arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i] % 2 ===0 && arr[i]>largest){
            largest = arr[i];
             
        } 

           
}
return largest;
   
}

console.log('#14',largesteven([2,22,9,60]))
/*
15)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
/*
16)
Create a function to check from two given integers, whether one is positive and another one is negative.
*/
function postive_or_negative(num1,num2){
    if((num1>0 && num2<0) ||(num1<0 && num2>0) ){
      return true;
    }
        
    return false;
    

}
console.log("#16",postive_or_negative(-3,1))
/*
17)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/
function createString(str){
 
  
  if(str.length<3){
    return str.toUpperCase()

  }
  return str = ((str.slice(0,4).toLowerCase() )+ (str.slice(4).toUpperCase()))
  
}
console.log('#17',createString('strive'))

/*
18)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80. */


/*
19)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/
function factors(numb) {
    let str ='';
    if(numb % 3===0 ){
         str = str + 'Diego';
    }if (numb % 5===0 ){
        str = str + 'Riccardo';

    }if (numb % 7===0 ){
        str = str + 'stefano';

    }if(numb % 11 === 0){
        // do something
    }if(str.length===0){
        return String(numb);

    }
    return str;
    
    
    
}

function switchFactors (num) {
    const factors = [3,5,7]
    let str = ''

    for (let factor of factors) {
        if (num % factor === 0) {
            switch (factor) {
                case 3:
                    str += 'Diego'
                    break
                case 5:
                    str += 'Riccardo'
                    break
                case 7:
                    str += 'Stefano'
                    break
                default: break;
            }
        }
    }

    return str.length  === 0 ? String(num) : str
}
console.log('#19',factors(15))

/*
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/
