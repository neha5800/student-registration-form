function validateForm(){
    var name=document.getElementById("name").value;
    var num =document.getElementById("num").value;
    var roll=document.getElementById("roll").value;
    var email =document.getElementById("email").value;
    var contact=document.getElementById("contact").value;

if(name==""){
    alert("Please enter your name");
    return false;
   
}
if(num==""){
    alert("Please enter your class ");
    return false;
   
}
if(roll==""){
    alert("Please enter your roll no.");
    return false;
   
}

if(contact== "10"){
    alert("contact no. contains 10 digits.");
    return false;
}



return true;
}


// function to create data in the form
function showData(){
   
    var studentList;
    if(localStorage.getItem("studentList")==null){
        studentList=[];
    }
    else{
        studentList=JSON.parse(localStorage.getItem("studentList"));

    }

    var html="";
    studentList.forEach(function(element,index){
        html +="<tr>";
        html +="<td>" + element.name + "</td>";
        html +="<td>"+element.num+"</td>";
        html +="<td>"+element.roll+"</td>";
        html +="<td>"+element.email+"</td>";
        html +="<td>"+element.contact+"</td>";
        html+='<td><button onclick="updateData('+index+')" class="btn"><i class="fa-solid fa-user-pen"></i></button><button onclick="deleteData('+index+')" class="btn"><i class="fa-solid fa-trash"></i></button></td>';
         html+="</tr>";
    });
    document.querySelector("#studentData ").innerHTML=html;
  
}
document.onload=showData();
//function to reading or adding data in the form
function AddData(){
    if(validateForm()==true){
        var name =document.getElementById("name").value;
        var num =document.getElementById("num").value;
        var roll=document.getElementById("roll").value;
        var email =document.getElementById("email").value;

        var contact =document.getElementById("contact").value;

        var studentList;
        if(localStorage.getItem("studentList")==null){
            studentList=[];
        }
        else{
            studentList=JSON.parse(localStorage.getItem("studentList"));
    
        }
        studentList.push({
            name:name,
            num:num,
            roll:roll,
            email:email,
            contact:contact,
        });
        localStorage.setItem("studentList",JSON.stringify(studentList));
        showData();
        document.getElementById("name").value="";
        document.getElementById("num").value="";
        document.getElementById("roll").value="";
        document.getElementById("email").value="";
        document.getElementById("contact").value="";

    }
      
}
//function to delete the data
function deleteData(index){
    var studentList;
    if(localStorage.getItem("studentList")==null){
        studentList=[];
    } else{
        studentList=JSON.parse(localStorage.getItem("studentList"));
    }
    studentList.splice(index,1);
    localStorage.setItem("studentList",JSON.stringify(studentList));
    showData();
}


//function to update data
function updateData(index){
     document.getElementById("add").style.display="block";
     document.getElementById("Update").style.display="block";

    var studentList;
    if(localStorage.getItem("studentList")==null){
        studentList=[];
    } else{
        studentList=JSON.parse(localStorage.getItem("studentList"));
    }
    document.getElementById("name").value=studentList[index].name;
    document.getElementById("num").value=studentList[index].num;
    document.getElementById("roll").value=studentList[index].roll;
    document.getElementById("email").value=studentList[index].email; 
     document.getElementById("contact").value=studentList[index].contact;
    
document.querySelector("#Update").onclick=function(){
    studentList[index].name=document.getElementById("name").value;
    studentList[index].num=document.getElementById("num").value;
    studentList[index].roll=document.getElementById("roll").value;
    studentList[index].email=document.getElementById("email").value;
    studentList[index].contact=document.getElementById("contact").value;

    localStorage.setItem("studentList",JSON.stringify(studentList));
    showData();
}
}
 



