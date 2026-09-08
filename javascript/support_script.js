function init() 
{
    alert("hello I am inside init");
    var testform = document.getElementById("testform");
    testform.onsubmit = validate;
    
}

function validate() 
{
    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").checked;
    var state = document.getElementById("state").value;
    var support = document.getElementById("support").checked;
    
    var errmsg = "";
    var result = true;
    const pattern = /^[a-zA-Z]/;

    if (name == "") 
    {
        errmsg += "Name field cannot be empty\n";
    }

    if (! name.match (pattern)) 
    {
        errmsg += "Name field can only use letters";
    }

    if(errmsg!="")
    {
      alert(errmsg);
      result=false;

    }
    return result;
}





window.onload=init;