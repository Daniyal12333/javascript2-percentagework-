/*
var S1= parseInt(prompt("English"));
var S2= parseInt(prompt("Mathematics"));
var S3= parseInt(prompt("Urdu"));

var p, total;
 total= 300;

 p = (S1+S2+S3)/total * 100; 
 console.log(p +"%");
 if (p>80) {
     console.log("Grade A*");
 }
  if (p> 70 & p<80) {
      console.log("Grade A");
  }
  if (p>50 && p<70) {
      console.log("Grade B");
  }
  if (p<50) {
      console.log("Grade C");
  }
  */
  
  
  
  
  /*
 var sub = [];
 sub[0]= parseInt(prompt("English"));
 sub[1]= parseInt(prompt("Mathematics"));
 sub[2]= parseInt(prompt("Urdu"));
  
  var p, total;
 total= 300;

 p = (sub[0]+sub[1]+sub[2])/total * 100; 
 console.log(p +"%");
 if (p>80) {
     console.log("Grade A*");
 }
  if (p> 70 && p<80) {
      console.log("Grade A");
  }
  if (p>50 && p<70) {
      console.log("Grade B");
  }
  if (p<50) {
      console.log("Grade C");
  }
  */
  
  
  
  
  
 var sub = [];
 sub[0]= parseInt(prompt("English"));
 sub[1]= parseInt(prompt("Mathematics"));
 sub[2]= parseInt(prompt("Urdu"));
  
  var p, total;
 total= 300;
 var subtotal= 100;
 var sub1p,sub2p,sub3p;
 sub1p = sub[0]/subtotal * 100;
 sub2p = sub[1]/subtotal * 100;
 sub3p = sub[2]/subtotal * 100;
 sub.splice(0,0,sub1p,sub2p,sub3p); 
 console.log("percentage of English is " + sub1p + "%");
 console.log("percentage of Mathematics is " + sub2p + "%");
 console.log("percentage of Urdu is " + sub3p + "%");
 

 p = (sub[0]+sub[1]+sub[2])/total * 100; 
 console.log("Total percentage is " + p +"%");
 if (p>80) {
     console.log("Grade A*");
 }
  if (p> 70 && p<80) {
      console.log("Grade A");
  }
  if (p>50 && p<70) {
      console.log("Grade B");
  }
  if (p<50) {
      console.log("Grade C");
  }
  
  