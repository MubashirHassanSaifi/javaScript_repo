//alert("hello");
/*you can also run this code on node.js
---------First Method---------------
1)  download & intsall the node.js 
2)  After intallation open the command prompt
3)  open the folder in command prompt  
4)  for enter new folder syntax: cd folderName
5)  to move to the previous folder syntax: cd..
6)  once you have entered in your desired folder
&)  write command : node index.js    //index.js is my javascript file that I want to run with node
                                    // node is the keyword that must be write to run the javascript code.
-------------------------------------------------------------------------------------------------------
----------2nd method------------------
1)  Click on the view button from the top
2)  Click on the terminal
3)  Write the command:  node index.js
*/
console.log('first java script code');

/*-----------------variables-----------------------------
1) use cammel notation like firstName  //notice that 'f' is small and 'N' is capital
2) don't use space or hyphen
3) Case sensitive  firstName and FirstName are differents
4) variable must be meaning full
5) never start with number i.e 1name=''
6) use 'var' keyword or 'let'   //good practice use 'let' keyword 
     i.e  let name='Mubashir';
7)  Each statement ends with the semicolon(;)
8)  string can be written in single quotes or double like 'hello' or "hello"   //good practice 'single'
    */
let firstName='Mubashir Hassan';  //good practice
let lastName='Saifi';
console.log(firstName+" "+lastName);
//-------------or---------
let firstName2='Mubashir Hassan' , lastName2='Saifi';
console.log("2nd method"+" "+firstName2+" "+lastName2);   
//-------------------------------------------------------------------------------------------------

  /*   --------------------------Constant ----------------------
  1) use const keyword for constant
  2) If we want that our variable value never change use 'const'
  3) once you assign the value then you can not reassign
  */
  const pieChart=0.62;
  //-------------------------------------------------------------------------------------------------

  /*--------------------------------Preemtive type /Valu type--------------------
  1) string
  2) number
  3) boolean
  4) null
  5) undefined
  */
  let name='Mubashir';   //string literal
  let age='25';         // number literal
  let isMarried=false;  // boolean literal
  let Salary=undefined;
  let status=null;
  //---------------------------------------------------------------------------------------------------
 
  /*---------Dynamic Typing-------------------  
  1) A language have two types ---1: Static ----2:dynamic
  2) Static type : In this type the datatype of variable can't be changed.
  3)Dynamic type : the datatype of a variable can be changed.
  4) javascript is a dynamic language
  5) 'type of' method is used to find the type of a variable.
  */
 typeof name;//name is a dynamic and its type is string
 // now initialize the name variable by another datatype
 name=123;
 //again check the type of name
 typeof name; // now this time the type of a name is number because its a dynamic 
 //----------------------------------------------------------------------------------------------------

 /*-----Reference type--------------------------
    1) object
    2) array
    3) function
 
 ------object----------
    1) Every thing in js is object.
    2) java script with object oriented programing complete available on visual studio 
    3) Objects can be accessed by two ways the dot notation or baracket.
 */
 let person={
     fName:'farya',
     lName:'hassan'
 }
  //access the object with dot notation
 this.fName =person.fName+" "+"Mubashir";
 console.log(this.fName);
 // access object with bracket
let Name= person['lName']+" "+"Saifi"
 console.log( this.fName+" "+Name);
 //-------------------------------------------------------------------------------------------------

 /*-------Array------------------------------------
  1) In js arran is an object.
  2) used to store more than one object or values.
  3) JS array also a dynamic array you can store any type of data in it. but in other programming language
     array you can't store data who have different datatyp. Means an interger array just store only interger values.
     but in JS array you can store int,float,string any type of data.
  4)'length' property is used to find the length of an array. i.e array.length 
     */
  let personalInfo=['Mubashir hassan','Saifi',03474548395];
  console.log('number='+" "+ personalInfo[2]);
  console.log(personalInfo.length);
  //---------------------------------------------------------------------------------------------------

/*---------Function-----------------------------------------
 1) A block which contain a set of statements.
 2) Reuse again and agin.
 3) use 'function' keyword to declare a function
 4) function can recevie paramerters and return result
*/
// function with no parameters
 function showData()
 {
 console.log('hello world');
 }
 showData();  //function calling
  //pass a value to function
  function showData(name)
  {
      console.log('hello'+' '+name);
  }
showData('Mubashir Hassan Saifi');
//funciton now return a result
function square( number)
{
return number*number;
}
let  ans= square(2);
console.log('squre='+''+ans);  //or console.log(square(2)); 
//-----------------------------------------------------------------------------------------------------
 
/*-----------javaScript output methods-------------------
1) 4-methods.
2) show output in html element .innerHTML i.e document.getElementById.innerHTML('id')
3) show output on html page 'document.write(data);
4) window.alert(message);
5) show output on browser console i.e console.log(message);

*/

let val=document.getElementById('header').innerHTML;
alert(val);
val =document.getElementById('header').innerHTML='hello world';
document.write(val);
//-------------------------------------------------------------------------------------------------------

/*-----------JavaScript operators--------------------------------------
          
------Arithmathic Operators---
1) + , - , *, /, % , ++, --

----Assignments operators----
= ,+= ,*= ,/= ,%=

----Comparison operators-----
1) ==        //equal
2) ===       // value and also datatypes are equal
3) !=        // not equal
4) !==       // values and types are not equals
5) >
6) <
7) >=
8) <=
9) ?         // ternary operators

-------Logical Operators-----
1)  &&   // AND 
2)  ||   // OR 
3)   !   // NOT 

--------Type operator------
1) typeof       //return the type of varable
2) instanceof   // check that instance belong to which object.

*/

let a=5 , b=10;
console.log(a+b);
console.log('type of a=' +''+typeof a);

//---------------------------------------------------------------------------------------------------------

/*--------------javaScript events----------------
1) onblur()  //when an object lose his focus
2) onfocus() //opposite of onblur event when an object get focus
3)addEventListener('eventName',script,boolean);   //event name and script are mandatory

*/

let id=document.getElementById('frm');
id.addEventListener("focus",focusFunction,true);
id.addEventListener("blur",blurFunction,true);
let con;
let x=document.getElementById("EmpId");
function focusFunction()
{
x.style.backgroundColor='black';
x.style.color='white';
}

function blurFunction()
{

   val=x.value;
   if(val==''){
      alert('please enter the employee code');
   }
   else if(val!=null)
   {
         con=confirm('do you want to continue');
   if(con==true)
 {
    alert('You have entered '+' '+val);
 }     
 else{
    x.value='';
 }
}

}


