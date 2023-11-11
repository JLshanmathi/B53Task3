//Question:1  comparing two JSON  with same proprties without order.
let obj1 = {"name":"person1","age":5};
let obj2 = {"age":5,"name":"person1"};
let json1=JSON.stringify(obj1);
let json2=JSON.stringify(obj2);
if(json1===json2)
{
    console.log("Equal");
}
else{
    console.log("Not Equal");
}

//Question:2 Displaying the Names and flags of all countries in Rest countries API.

var request=new XMLHttpRequest();
//step 2
request.open("GET","https://restcountries.com/v3.1/all",true)
//step 3
request.send();
//step 4
request.onload=function(){
    var data=request.response;
    var result=JSON.parse(data);
    for(var i=0;i<result.length;i++){
        console.log(result[i].name.common,':',result[i].flags.png);
    }
}

//question :3 printing all the names,regions,subregions,population of all countries in Rest countries API.

//step 1
var request1=new XMLHttpRequest();
//step 2
request1.open("GET","https://restcountries.com/v3.1/all",true)
//step 3
request1.send();
//step 4
request1.onload=function(){
    var data1=request1.response;
    var result1=JSON.parse(data1);
    for(var i=0;i<result1.length;i++){
        console.log('Name:',result1[i].name.common,'Region:',result1[i].region,'Subregion:',result1[i].subregion,'Population:',result1[i].population);
    }
}

//Task 1: Simple Programs todo for variables:

 //Declare four variables without assigning values and print them in console
 let a,b,c,d;
 console.log("variabls without assigning values:", a,b,c,d);

 
 //How to get value of the variable myvar as output.
 let myVar="Hi people";
 console.log("Value of myVar is:"+myVar);
 
 //3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
 var firstName ="John" ;
 var lastName = "Doe";
 var maritalStatus = true;
 var country = "USA";
 var age = 30;
 console.log(firstName,lastName,maritalStatus,country,age);
 
 //4. Declare variables to store your first name, last name, marital status, country and age in a single line
 var person={firstName:"John",lastName:"Doe",maritalStatus:true,country:"USA",age:30};
 
 //5. Declare variables and assign string, boolean, undefined and null data types
 var str = "I am a String!";
 var bool = true;
 var undef;
 var nul = null;
 console.log(str,bool,undef,nul);
 
 //6. Convert the string to integer
 var Num = parseInt('12');
 var num=+('12');
 console.log("using parseInt:",Num);
 console.log("Using + operator:", num);
 
//7. Write 6 statement which provide truthy & falsey values.
let x = null;
let y = undefined;
let z = "";
let m = true;
let n = {};
let o = [];

console.log("Truthy value: ",x && m );
console.log("Falsey value: ",!x || !y);

//Task 2: Simple Programs todo for Operators

 //Square of a number
 var num = 10;
 var square=num*num;
 console.log("square of a number:",square);
 
 //Display the asterisk pattern as shown below(No loop needed):
 
 //Calculate electricity bill?
 //For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?
 var unitsConsumed=100;
 var ratePerUnit=0.10;
 var totalAmount=unitsConsumed *ratePerUnit;
 console.log('Your Electricity Bill is $',totalAmount);
 
 //Program To Calculate CGPA
 var marksMaths=85;
 var marksPhysics=90;
 var marksChemistry=80;
 var marksEnglish=75;
 var cgpa=(marksMaths+marksPhysics+marksChemistry+marksEnglish)/4;
 console.log("CGPA : ",cgpa)
 
 //Give the Actual cost and Sold cost, Calculate Discount Of Product.
 var actualCost=2000;
 var soldPrice=1800;
 var discountPercentage=(actualCost-soldPrice)*100/actualCost;
 console.log("Discount Percentage : "+discountPercentage+"%");
 
 //Calculate Batting Average
 var ballsFaced=100;
 var runsScored=50;
 var battingAverage=runsScored/ballsFaced*100;
 console.log("Batting average:", battingAverage);
 
 //Calculate five test scores and print their average
 
 function score(arr){
 let sum=0;
 for (let i=0;i<arr.length;i++)
 {
 sum=sum+arr[i];
 }
 return sum/5;
 }
 console.log("Average of 5 Test scores:", score([85,90,78,92,88]));
 
 //Celsius to Fahrenheit conversion using function
 function celsiusToFahrenheit(celsius){
   return ((celsius * 9 / 5 ) + 32 );
 }
 console.log("celcius to Franheit:",celsiusToFahrenheit(36));
 
 //Meter to miles
 function meterToMiles(meter){
     return (meter * 0.000621371);
 }
 console.log("Meter to Miles:", meterToMiles(1000));
 
 //pounds to kilogram
 function poundsToKilograms(pounds){
    return (pounds * 0.453592);
    }
 console.log("Pounds to Kg:", poundsToKilograms(200));
 
 //Swapping 2 numbers
 function swapNumbers(a, b) {
      let temp = a;
      a = b;
      b = temp;
      console.log('swapped numbers are', a , 'and' , b);
 }
 swapNumbers(5,10);
 
 //Power of any number x ^ y.
 function powerOfNumber(x,y){
     return Math.pow(x,y);
 }
 console.log("power of number:", powerOfNumber(2,3));
 
 //Calculate Simple Interest
 function simpleInterest(principal,rate,time){
     return (principal*rate*time)/100;
 }
 console.log("simple interest:", simpleInterest(1000,5,2));
 
 //Calculate area of an equilateral triangle
 function calculateAreaEquilateralTriangle(sideLength){
   return (Math.sqrt(3)*Math.pow((sideLength),2))/(4*Math.tan(Math.PI/6
   ));
 }
 console.log("EquilateralTriangle:", calculateAreaEquilateralTriangle(5));
 
 //Area Of Isosceles Triangle
 function isoscelesTriangleArea(base,height){
 return (base*height)/2;
 }
 console.log("Isocles Triangle:", isoscelesTriangleArea(8,6));
 
 //Volume Of Sphere
 function volumeSphere(radius){
   return ((4/3)*Math.PI*(Math.pow(radius,3)));
 }
 console.log("volume of sphere:", volumeSphere(5));
 
 //Volume Of Prism
 function volumePrism(length,width,height){
   return (length*width*height);
 }
 console.log("volume of prism:", volumePrism(7,5,4));
 
 //Find area of a triangle.
 function findAreaTriangle(base,height){
   return (0.5 * base * height);
 }
 console.log("Area of Triangle:",findAreaTriangle(9,6));
 
 //Given their radius of a circle and find its diameter, circumference and area.
 function findDiameterCircleAndCircumferenceAndArea(radius){
   let diameter = 2 * radius;
   let circumference = 2 * Math.PI * radius;
   let area = Math.PI * Math.pow(radius,2);
   console.log("The Diameter of the Circle: "+diameter);
   console.log("The Circumference of the Circle: "+circumference);
   console.log("The Area of the Circle: "+area);
 }
 
 //Given two numbers and perform all arithmetic operations.
 function performArithmeticOperations(num1, num2) {
 let result = "Result:\n";
 result += `Addition : ${num1 + num2}\n`;
 result += `Subtraction : ${num1 - num2}\n`;
 result += `Multiplication : ${num1 * num2}\n`;
 result += `Division : ${num1 / num2}`;
 return result;
 }
 console.log(performArithmeticOperations(10, 2));
 
 //Display the asterisk pattern as shown below(No loop needed):
 // *****
 // *****
 // *****
 // *****
 // *****
 console.log("*****");
 console.log("*****");
 console.log("*****");
 console.log("*****");
 console.log("*****");
 

      var friends1 = [
        "Mari",
        "MaryJane",
        "CaptianAmerica",
        "Munnabai",
        "Jeff",
        "AAK chandran"
        ];
        
        var friends2 = [
        "Gabbar",
        "Rajinikanth",
        "Mass",
        "Spiderman",
        "Jeff",
        "ET",
        ];
//Get the first item, the middle item and the last item of the array
console.log(friends1[0]); // Outputs: Mari
console.log(friends1[Math.floor(friends1.length / 2)]); // Outputs: MaryJane
console.log(friends1[friends1.length - 1]); // Outputs: AAK Chandran
console.log(friends2[0]); // Outputs: Gabbar
console.log(friends2[Math.floor(friends2.length / 2)]); // Outputs: Mass
console.log(friends2[friends2.length - 1]); // Outputs: ET

//2. Add your name to the end of the friends array, and add another name to beginning.
var friends1=[
    "Mari",
    "MaryJane",
    "Captain America",
    "Munnabai",
    "Jeff",
    "AAK Chandran"];
var friends2 = [
        "Gabbar",
        "Rajinikanth",
        "Mass",
        "Spiderman",
        "Jeff",
        "ET",
        ];
    friends1.push("Aak Chandran");
    friends2.unshift("Sachin Tendulkar");
    console.log("Updated Friends Array: "+ friends1);
    console.log("Updated Friends Array: "+ friends2);

//3. Add Mr or Ms to the names in the friends array.
function prefixNames(arr){
    for (let i=0;i<arr.length;i++){
        arr[i]= 'Mr.'+arr[i];
        }
    return arr;
};
console.log('Updated friend list with Mr./Ms');
console.log(prefixNames(friends1));

//4. Concat all the names the friends array and return as comma “,” seperated string.
function concatName(arr){
    let str='';
    for(let i=0;i<arr.length;i++){
        if(str==''){
            str+=arr[i];
        }else {
            str +=','+arr[i];
        }
    }
    return str;
}
console.log('Comma separated String from the friends array');
console.log(concatName(friends1));

//5. Find the friends names who has letter ‘a’ and return the list.
var friends1 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    
    var friends2 = [
    "Gabbar",
    "Rajinikanth",
    "Mass",
    "Spiderman",
    "Jeff",
    "ET",
    ];
    function findFriendsWithLetterA(arr) {
      const result = [];
      for (const name of arr) {
          if (/a/gi.test(name)) {
            result.push(name);
          }
      }
      
      return result;
  };
  console.log("List of friends with 'a':");
  console.log(findFriendsWithLetterA(friends1));
  //6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.
  var friends1 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    
    var friends2 = [
    "Gabbar",
    "Rajinikanth",
    "Mass",
    "Spiderman",
    "Jeff",
    "ET",
    ];
    function getAvgNameLength(arr) {
        let totalLen = 0;
        for (let i=0;i<arr.length;i++) {
            totalLen += arr[i].length;
        }
        
        return totalLen / arr.length;
    }
    console.log(`The average length of friend's names is: ${getAvgNameLength(friends1)}`);

    //7. Find the names and return the list starting with letter M.
    var friends1 = [
        "Mari",
        "MaryJane",
        "CaptianAmerica",
        "Munnabai",
        "Jeff",
        "AAK chandran"
        ];
        
        var friends2 = [
        "Gabbar",
        "Rajinikanth",
        "Mass",
        "Spiderman",
        "Jeff",
        "ET",
        ];
        function findNamesStartingWithM(arr) {
            let resultArr = [];
            for (let i=0;i<arr.length;i++) {
                if (arr[i][0] === 'M'){
                    resultArr.push(arr[i]);
                }
                }
            
            return resultArr;
        }
        console.log(`List of names starting with M: ${findNamesStartingWithM(friends1).join(', ')}`);
        console.log(`List of names starting with M: ${findNamesStartingWithM(friends2).join(', ')}`);

//8. Find the name with max characters and return the name.
var friends1 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    
    var friends2 = [
    "Gabbar",
    "Rajinikanth",
    "Mass",
    "Spiderman",
    "Jeff",
    "ET",
    ];
    function getNameWithMaxCharacters(arr){
        let maxLength = 0;
        let maxName = '';
        arr.forEach((name)=>{
            if (name.length > maxLength){
                maxLength = name.length;
                maxName = name;
            }
        });
        return maxName;
    }
    console.log(`The name with maximum characters is :${getNameWithMaxCharacters(friends1)}`);
    console.log(`The name with maximum characters is :${getNameWithMaxCharacters(friends2)}`);
    
//9. Find the name with min characters and return the name.
var friends1 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    
    var friends2 = [
    "Gabbar",
    "Rajinikanth",
    "Mass",
    "Spiderman",
    "Jeff",
    "ET",
    ];
    function getNameWithMinCharacters(arr){
        let minLength = Infinity;
        let minName = '';
        arr.forEach((name)=>{
            if (name.length < minLength){
                minLength = name.length;
                minName = name;
            }
        });
        return minName;
    }
    console.log(`The name with minimum characters is : ${getNameWithMinCharacters(friends1)}`);
    console.log(`The name with minimum characters is : ${getNameWithMinCharacters(friends2)}`);

// Find the average in the array below.
// Make sure you add only the numbers and do avg.

const friendsInfo = [6, 12, "Mari", 1, true, "Munnabai", "200", "CaptianAmerica", 8, 10];
let sum = 0;
for(let i=0 ;i<friendsInfo.length; i++){
    if(typeof friendsInfo[i] === 'number'){
       sum += friendsInfo[i];  
    }
}
console.log('Average of all number elements: ',sum/3);

//Print the contents of the input variable

var input = [
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]


function dataHandling(input){
for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input[i].length; j++) {
        console.log(input[i][j]);
        }
}
}
dataHandling(input);


//Task 3: Simple Programs todo for Condition , Looping and Arrays

//1. Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for(let i=1;i<=7;i++){
    let str='';
    for(let j=1;j<=i;j++){
        str+="#";
    }
    console.log(str);
}
//2. Iterate through the string array and print it contents

var strArray= ["<option>Jazz</option>",
,"<option>Blues</option>",
,"<option>New Age</option>",
,"<option>Classical</option>",
,"<option>Opera</option>"]
for(i in strArray){
    console.log(strArray[i]+"<br/>")
}

//write a code to count the elements in the array without using length property
//Declare an empty array;
var arr=[];
var myarray=[11,22,33,44,55];
arr.push(myarray)
console.log('The number of element is', +arr[0].length);

//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.

let foods=[
    'Pizza', 'Sushi','Tacos','Fish and Chips','Chicken Tikka Masala','Beef St',
    'Roast','Lasagna','Steak','Rice','Bread','Cake','Ice Cream','Donuts','ApplePie','Cheesecake','Eclair','Gingerbread Man','Hot Dog','Hamburger','Fries'
    ]
//Find the length of your foods array
console.log(`Length of the foods array is ${foods.length}`);
//How can you find your fifth favorite food?
console.log(`My fifth favorite food is ${foods[4]}`);

//Find the person is ur friend or not.

const friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];

function dataHandling(input, name){
    for (var i = 0; i < input.length; i++) {
        if (name === input[i]){
          return ("ur friend");
      }else{
          continue;
      }
      }
return ("not a friend");
}
let found = dataHandling(friends,"Jeff");
    console.log(found);

//What the output:
//Add a new key value pair to myobject
//key : ten
//value : ten
myobject = {1:"one","11":1,"name":"arun"}
myobject['ten']="ten"
console.log("After adding key-value pair");
console.log(myobject);




// How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)

//     Guvi, Geek, 6, IIT-M RP,Chennai.
//     Amazon, Inc, 31, SP Infocity, Chennai.
//     Google, Alphabet, 34 Amphitheater Parkway, MountainView.
//     Tesla, Inc , 32, 333 Santana Row,San Jose.
    
    const companies = [{
        companyName:"Guvi",
        location:"Geek",
        age:6,
        address:{
          city:"IIT-M RP",
          state:"Chennai."
        },
      },{
        companyName:"Amazon",
        location:"Inc",
        age:31,
        address:{
          streetNumber:31,
          streetName:"SP Infocity",
          city:"Chennai.",
        },
        },{
        companyName:"Google",
        location:"Alphabet",
        age:34,
        address:{
          streetNumber:333,
          streetName:"Santana Row",
          city:"San Jose.",
        },
        },{
        companyName:"Tesla",
        location:"Inc",
        age:32,
        address:{
          streetNumber:333,
          streetName:"Santana Row",
          city:"San Jose.",
          }
        },];
        companies.forEach((company)=>{
            console.log(`${company.companyName}, ${company.location} , ${company.age} , ${company.address.city}
            `)
          });
    









    
    










        
        