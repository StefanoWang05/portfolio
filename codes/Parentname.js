/*if name is set to your dad’s name or hi to your mom if name is your mom’s name. If it’s neither of them, say Hello stranger! as before*/

var Dadsname = "Jack"
var Mumsname= "Jade"
var Name = prompt("Please enter your name", "<name goes here>");
if (Dadsname===Name ){
    console.log("Hi Dad!");
   }else if(Mumsname===Name){
    console.log("Hi Mom!");
   }else {
       console.log("Hi stranger");
    }
