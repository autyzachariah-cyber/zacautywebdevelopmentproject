function init() 
{
    var testform = document.getElementById("testform");
    testform.onsubmit = validate;
    
}

function validate() 
{
    var name = document.getElementById("name").value;
    var state = document.getElementById("state").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    

    //For the name validation//
    var errmsg = "";
    var result = true;
    const pattern = /^[a-zA-Z]+$/;



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

//https://teamtreehouse.com/community/any-videos-specifically-tackling-how-to-validate-multiple-checkboxes-in-an-html-form-using-only-javascript
//https://codepen.io/ericbutler555/pen/zyMXdm?editors=1011
    if(!gender){
       alert("Please select an option for gender");
    }


//https://teamtreehouse.com/community/any-videos-specifically-tackling-how-to-validate-multiple-checkboxes-in-an-html-form-using-only-javascript
//https://codepen.io/ericbutler555/pen/zyMXdm?editors=1011
//https://dev.to/abhay_yt_52a8e72b213be229/mastering-queryselector-and-queryselectorall-in-javascript-1d44
    if(document.querySelectorAll('.support:checked').length < 1) {
       alert("Please select at least 1 form of support required");
       result = false;
    }
//
    if(state==""){
        alert("Please select a state.");
        result = false;
    }

    return result;

    


}
function showText(){
    document.getElementById("nameTip").innerHTML= "Name should contain only alphabetical characters";
}

function hideText(){
    document.getElementById("nameTip").innerHTML= "";
}


window.onload=init;