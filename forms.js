function LoginForm()
{
    var warn="";
    var rt=true;
    var str_user_inputs = "";

    //username and password format
    var uname_v = /^[a-zA-Z0-9_-]+$/;
    var pswd_v = /^(\S*)?\d+(\S*)?$/;
    //-- validate Username --
    var y=document.forms.Login.uname.value;
    {
	if (y==null || y==""){

	    warn +="Nothing was entered in the username \n";
	    rt=false;

	}
	else if(y.length > 16){
	    warn += "Max length for uname is 16 characters.\n"
	    rt =false;
	}
	else if (uname_v.test(y)==false){
	    warn+="Username can not contain any leading or trailing spaces\n"
	    rt=false;
	}
	else{ // if everything is okay, then collect email 

	    str_user_inputs +=y+"\n";

	}

    }
    //-- validate password --
    var z=document.forms.Login.pswd.value;
    {

	if (z==null || z==""){

	    warn +="password is empty. \n";
	    rt=false;

	}
	if (pswd_v.test(z)==false || z.length<8){
	    warn +="password must be at least 8 letters and contain a non letter character"
	    rt=false;
	}

    }

    //warning
    if(rt==false)
    {

	alert(warn);
	return false;

    }
    else
    {
	str_user_inputs+="LOGGED IN";
	alert(str_user_inputs);
	return false; // should be: return true; when using PHP
	//
    }

}
function SignUpForm()
{
    var warn="";
    var output="SIGNED UP";
    var rt=true;
    var warn="";

    //variables for input
    var email_v = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    var uname_v = /^[a-zA-Z0-9_-]+$/;
    var pswd_v = /^(\S*)?\d+(\S*)?$/;
    var name_v=/([A-Za-z]{2,30}( )[A-Za-z]{2,30})/;
    var date_v=/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    //validate email adress
    var a= document.forms.SignUp.email.value;
    {
	if (a==null || a=="" || email_v.test(a) ==false){
	    warn+="Email is wrong \n"
	    rt=false;
	}
    }
    //validate username
    var b=document.forms.SignUp.uname.value; 
    {
	if (b==null|| b=="" || uname_v.test(b)==false){
	    warn+="Username is wrong \n"
	    rt=false;
	}
    }
    //Real Name
    var c= document.forms.SignUp.name.value;{
	if (c==null || c=="" || name_v.test(c)==false){
	    warn+="Name is wrong \n"
	    rt=false;
	}

    }
    //Password
    var e=document.forms.SignUp.pswd.value;
    {
	if (e==null|| e=="" || pswd_v.test(e)==false){
	    warn+="Password is wrong \n";
	    rt=false;
	}
    }
    //Confirm Password
    var f=document.forms.SignUp.pswdr.value;
    {
	if (f!=e)
	{
	    warn+="Passwords don't match\n";
	    rt=false;
	}
    }

    //Date of Birth 
    //
    var g=document.forms.SignUp.dob.value;
    {
    if (g==null || g=="" || date_v.test(g)==false)
	{
	warn+="Date is wrong \n";
	    rt=false;
	}
    }
    //warning
    if (rt==false){
	alert(warn);
    }
    else {
	alert("SIGNED UP");
    }

}

function Post(){
    var rt=true;
    var warn="";

    var a=document.getElementById("postTitle").value;
    {
	if (a=="")
	{
	    warn+="No title\n";
	    rt=false;
	}
	if (a.length>100)
	{
	    warn+="Title can not have more than 100 characters \n";
	    rt=false;
	}
    }
    var b=document.getElementById("postContent").value;
    {
	if (b==""){
	    warn+="Content is empty\n";
	    rt=false;
	} 

	a=a.replace(/</g,"&lt;").replace(/>/g,"&gt;"); //prevent script tags or any other html injection
	b=b.replace(/</g,"&lt;").replace(/>/g,"&gt;"); //prevent script tags or any other html injection
    }   
    if (rt==false){
	alert(warn);
    }
    if (rt==true) {
	document.getElementById("testBox").innerHTML=a+"<br>"+b;
    }
}
function Comment(){
    var a=document.getElementById("Comment").subject.value;
    {
	rt=true;
	if (a=="" || a=="NULL")
	{
	    alert("comment box empty");
	    rt=false;
	}
	if (a.length>250)
	{
	    alert("character limit reached");	
	    rt=false;
	}

	a=a.replace(/</g,"&lt;").replace(/>/g,"&gt;"); //prevent script tags or any other html injection
	a=a.replace("Oriyo","O***o").replace("Chakma","C****a"); //replaces curse words
	if (rt=true)
	{
	    document.getElementById("testReply").innerHTML="<section>" + a + "</section>";
	}
    }
}
function toggleEdit(){
    var check=document.getElementById("toggleComment");
    if (check.checked==true){
	document.getElementById("Comment").subject.readOnly=false;	
	document.getElementById("toggleEditText").innerHTML="Edit: On";
    }
    else if(check.checked==false){
	alert("You must be logged in to comment"); 
	document.getElementById("Comment").subject.readOnly=true;	
	document.getElementById("toggleEditText").innerHTML="Edit: Off";
    }

}
function wordCountPost(){
    var a=document.getElementById("postTitle").value;
    var b=document.getElementById("postContent").value;
if (a.length <100)
    {
	document.getElementById("wordCounter").innerHTML="Title length: " + a.length + " Content length: " + b.length;
    }
else 
    { 
	document.getElementById("wordCounter").innerHTML="Title length(limit reached!): " + a.length + " Content length: " + b.length;
    }
} 

function wordCountComment(){
    var a=document.getElementById("Comment").subject.value;
if (a.length <250)
    {
	document.getElementById("wordCounter").innerHTML="Comment length: " + a.length + " characters";
    }
    else 
    { 
	document.getElementById("wordCounter").innerHTML="Comment length: " + a.length + " characters(LIMIT REACHED!)";
    }
} 
