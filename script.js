//Task 1 - Declare four variables without assigning values and print them in console
var a,b,c,d;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//How to get value of the variable myvar as output
var myvar=1;
console.log(myvar);//value is printed.

//3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
var firstname='GUVI', Lastname='ZEN',maritalstatus='single',country='India',age=22;

//4. Declare variables to store your first name, last name, marital status, country and age in a single line
var firstname='GUVI';
var  Lastname='ZEN';
var maritalstatus='single';
var country='India';
var age=22;
console.log(`I am ${age} years old`);

//5.Declare variables and assign string, boolean, undefined and null data types
var a=String;
var b=Boolean;
var c=undefined;
var d=null;
console.log(a,b,c,d);

//I am 25 years old. 
// You are 30 years old.
// 6. Convert the string to integer
// parseInt()
// Number()
// Plus sign(+)
var a="I am 25 years old.You are 30 years old."
var b= +a;
var c= parseInt(a);
var d= Number(a);
console.log(b,c,d);

//TASK 2
//SQUARE OF A NUMBER
const square=(n)=>n*n;
console.log(square(5));
//SWAPPING OF 2 NUMBERS
var a=60;
var b=70;
var c=a;
a=b;
b=c;
console.log(a);
console.log(b);
//ADDITION OF THREE NUMBERS
var a=5,b=9,c=10;
var sum=a+b+c;
console.log(sum);
//Celsius to Fahrenheit conversion
var celsius=37;
var fahrenheit=(celsius*9/5) + 32;
console.log(fahrenheit);
//Meter to miles
var metre =100;
var miles = metre/1609.344;
console.log(miles);
//pounds to kgs
var pounds=100;
var kgs = pounds*0.453592;
console.log(kgs);
//calculate batting average
var totalruns=60;
var number=3;
var battingaverage=totalruns/number;
console.log(battingaverage);
//calculate average
var a=[60,50,40];
var sum=0;
for(i in a){
sum+=parseInt(a[i]);
}
console.log(sum/a.length);
//power of any number
var a=5;
var b=5;
var power=Math.pow(a,b);
console.log(power);
//simple interest
var p=100;
var r=5;
var n=2;
var SI=p*n*r/100;
console.log(SI);
//AREA OF EQUILATERAL TRIANGLE
var side=30;
var area=(Math.pow(3,0.5)/4)*(Math.pow(side,2));
console.log(area);
//area of a isoceles triangle
var base=30;
var height=40;
var area=base*height/2;
//volume of prism
var base=50;
var height=100;
var volume=base*height;
console.log(volume);
//area of a triangle
var base=50;
var height=100;
var volume=base*height;
console.log(volume);
//Give the Actual cost and Sold cost, Calculate Discount Of Product
var actualcost = 100;
var soldcost=50;
var discount=actualcost-soldcost;
console.log(discount);
// Given their radius of a circle and find its diameter, circumference and area.
var radius=60;
var circumference=2*Math.PI*radius;
var area=Math.PI*Math.pow(radius,2);
console.log(`circumference:${circumference}
area:${area}`);
//Given two numbers and perform all arithmetic operations.
var a=50;
var b=60;
var c=a+b;
var d=a-b;
var e=a*b;
var f=a/b;
var g=a%b;
console.log(c , d , e , f , g);
//   Display the asterisk pattern as shown below(No loop needed):
console.log(`*****
*****
*****
*****
*****`);
//Calculate electricity bill
//For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?
var watts=100;
var perunit=watts/1000;
var priceperunit=10;
var unitspermonth=perunit*24*31;
var totalbill=unitspermonth*priceperunit;
console.log(totalbill);
//program to calulate CGPA
var marks=566;
var percentage=(marks/600)*100;
var CGPA=percentage/9.5;
console.log(Math.floor(CGPA));
//TASK 3
//Write a loop that makes seven calls to console.log to output the following triangle:
var x=[];
for(i=1;i<=7;i++){
    for(j=1;j<=i;j++){
        x.push('#');
    }
console.log(x.join(""));
x=[];
}
// Iterate through the string array and print it contents
var strArray= ["<option>Jazz</option>",
,"<option>Blues</option>",
,"<option>New Age</option>",
,"<option>Classical</option>",
,"<option>Opera</option>"]
for(i=0;i<strArray.length;i++)
{
    console.log(strArray[i]);
}
//write a code to count the elements in the array . Don’t use length property
var count=0;
var myarray=[11,22,33,44,55];
for(i in myarray){
    count++;
}
console.log(count);
//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.Declare an empty array;
let foods=['pizza','biriyani','pie','mutton biriyani','chicken biriyani','sambar','rasam','veg momos','chicken momos','chicken lasgna', ' beef lasagna' ];
//Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
console.log(foods[4]);
//Find the length of your foods array
console.log(foods.length);
//Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
let friends =["Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"];
    friends[0]="Munnabai"
    console.log(friends);
    // Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.   
    for(i=0;i<friends.length;i++){
        
        if(friends[i]=="CaptianAmerica"){
            break;
        }
        console.log(friends[i]);
    }
    //Find the person is ur friend or not.
    var count=0;
    function friend(n){
        for(i in friends){
            if(friends[i]==n){
                console.log("friend");
                count++;
            }
            if(count==0){
                console.log("not friend");
            }
        }
    }
    friend("iron man");
    //We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
    var friends1 = ['Mari','MaryJane','CaptianAmerica','Munnabai','Jeff','AAK chandran'];
    var friends2 = ['Gabbar','Rajinikanth','Mass','Spiderman','Jeff','ET'];
    var combinedarray=[...friends1,...friends2];
    console.log(combinedarray.sort());
    //Get the first item, the middle item and the last item of the array
    console.log(`first item${friends1[0]}
    middle item:${friends1[friends1.length/2]}
    last item:${friends1[friends.length-1]}`);
    //Add your name to the end of the friends array, and add another name to beginning.
    myname=['joel'];
    anothername=['susithra']
    var friends1 = [...myname,'Mari','MaryJane','CaptianAmerica','Munnabai','Jeff','AAK chandran',...anothername];
    console.log(friends1);
    // Concat all the names the friends array and return as comma “,” seperated string.
    console.log(friends1.join(","));
    //Find the friends names who has letter ‘a’ and return the list.
    for(i in friends1){
        for(j=0;j<friends1[i].length;j++){
            if(friends1[i][j]=='a'){
                console.log(friends1[i]);
                break;
            }
        }
    }
    //Find the avg length of all the friends names. Get the individual length of the names and do the avg.
    var count=0;
    for(i in friends1){
        for(j=0;j<friends1[i].length;j++){
            count++;
        }
    }
    console.log(count/friends1.length);
    // Find the names and return the list starting with letter M.
    for(i in friends1){
        for(j=0;j<friends1[i].length;j++){
            if(j==0 && friends1[i][j]=='M'){
                console.log(friends1[i]);
            }
        }
    }
    //Find the average in the array below.
// Make sure you add only the numbers and do avg.
const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
var sum=0;
for(i in friendsInfo){
    if(friendsInfo[i]===parseInt(friendsInfo[i])){
sum+=friendsInfo[i];
    }
}
console.log(sum);
//Print the contents of the input variable
var input = [
    ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
    ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
    ['0003', 'Winona', 'Ambon', '25/12/1965','Memasak'],
    ['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970','Berkebun']
    ];
    for(i in input){
        for(j=0;j<input[i].length;j++){
            for(k=0;k<input[i][j].length;k++){
                console.log(input[i][j]);
            }
        }
    }
    //What the output
myobject = {1:'one','11':1,'name':'arun'}
// console.log(myobject.11);   // output : error
// console.log(myobject.name); // output : arun

//Add a new key value pair to myobject
// key : ten
// value : ten
var myobject = {1:one,11:1,'name':'arun'};
// var myobject[ten] =ten;
console.log(myobject);

//Write out an object literal to represent the data below.
// Guvi, Geek, 6, IIT-M RP,Chennai.
var details={firstname:"Guvi",lastname:"Geek",address:"IIT-M RP",city:"chennai",};
console.log(details);

// How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)
// Guvi, Geek, 6, IIT-M RP,Chennai.
// Amazon, Inc, 31, SP Infocity, Chennai.
// Google, Alphabet, 34 Amphitheater Parkway, MountainView.
// Tesla, Inc , 32, 333 Santana Row,San Jose.
var a = {
        guvi : ["Guvi","Geek","6","IIT-M RP","Chennai"],
        amazon : ["Amazon", "Inc", "31", "SP Infocity", "Chennai."],
        google: ["Google", "Alphabet", "34 Amphitheater Parkway", "MountainView."],
        Tesla : ["Tesla", "Inc" , "32", "333 Santana Row","San Jose."],
}
console.log(a); 

