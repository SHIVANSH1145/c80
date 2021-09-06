nameofthestudent_array=[];
 function submit(){

var displaystudentname=[];

for( var f=1;f <=4;f++){

    var nameis=document.getElementById("name_of_the_student_"+f).value;
  nameofthestudent_array.push(nameis);
}
var lengthofarray=nameofthestudent_array.length;
for(var i=0;i<=lengthofarray;i++){

    displaystudentname.push("<h4>name -"+nameofthestudent_array[i]+"</h4>")
}

document.getElementById("display_name_with_commas").innerHTML=displaystudentname;

var removecommas=displaystudentname.join(" ");

document.getElementById("display_name_without_commas").innerHTML=removecommas;

document.getElementById("submit_button").style.display="none";

document.getElementById("sort_button").style.display="inline-block";
 }
 
function sorting(){

nameofthestudent_array.sort();
var displaystudentname=[];

var lengthofarray=nameofthestudent_array.length;
for(var i=0;i<=lengthofarray;i++){

    displaystudentname.push("<h4>name -"+nameofthestudent_array[i]+"</h4>")
}

document.getElementById("display_name_with_commas").innerHTML=displaystudentname;

var removecommas=displaystudentname.join(" ");

document.getElementById("display_name_without_commas").innerHTML=removecommas;
}
 