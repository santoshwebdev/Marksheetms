/*var x=40;
var y=30;
var input="/";

if(input=="+"){
     var c=x+y;
     document.write("Output=",c);
}
else if(input=="-"){
     c=x-y;
     document.write("Output=",c);
}
else if(input=="*"){
     c=x*y;
     document.write("Output=",c);
}
else if(input=="/"){
     c=x/y;
     document.write("Output=",c);
}
else{
     document.write("Invilate input!");
}
*/


/*
//While loop
var num=1;
while(num<10){
     document.write("While loop <br>");
     num=num+1;
}

//do while loop
var x=1;
do{
     document.write("Do while loop <br>");
     x=x+1;
}
while(x<10)

//for loop
var y=1;
for(y; y<10; y=y+1){
   document.write("For loop <br>");
}
*/

/*
//Array starts here
var arr=["name","fname","mname","address"];
document.write(arr[1]);
*/

/*
//function
function add(x,y){
     var c=x+y;
     document.write(c);
}
add(20,30);
*/


/*
function save(){
     var var1=document.getElementById("username").value;
     var var2=document.getElementById("password").value;
     var var3=document.getElementById("cpassword").value;
     

     if(var1==""){
         document.write.getElementById("uname").innerHTML="Enter username";
         return false;
     }

     if(var1==""){
          document.write.getElementById("pass").innerHTML="Enter password";
          return false;
     }

     if(var3==""){
          document.write.getElementById("confirmpassword").innerHTML="Enter confirm password";
     }

     else{
          document.write("<h1>Congratulation Registrasion Successfull");
     }
}
*/

$(function(){
     /*
     $(".heading1").fadeOut(2000);//Element/box hide
     $(".heading1").fadeIn(3000);//Element/box unhide
     $(".heading1").fadeTo(5000,0.9); //Visible capasity time
     $(".heading1").fadeToggle(5000);//Vigible unvisible and unvisible to visible convert
     */
    /*
    $(".heading1").show();
    $(".heading1").hide();
    */
  
   $(".heading1").slideUp(2000);
   $(".heading1").slideDown(2000);
  });