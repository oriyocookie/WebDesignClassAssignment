// Login 
//
if (document.getElementById("Login")!=null)
{
    document.getElementById("Login").addEventListener("submit",LoginForm, false);
}
// Index page
//
// User page
//
// Detail page
//
if(document.getElementById("toggleComment")!=null)
{
    document.getElementById("toggleComment").addEventListener("click",toggleEdit, false);
}

if(document.getElementById("commentButton")!=null)
{
    document.getElementById("commentButton").addEventListener("click",Comment, false);
}

if(document.getElementById("Comment")!=null)
{
    document.getElementById("Comment").addEventListener("keyup",wordCountComment, false);
}
// Post page
//
if(document.getElementById("postButton")!=null)
{
    document.getElementById("postButton").addEventListener("click",Post, false);
}
if(document.getElementById("postContent")!=null)
{
    document.getElementById("postContent").addEventListener("keyup",wordCountPost, false);
}
if(document.getElementById("postTitle")!=null)
{
    document.getElementById("postTitle").addEventListener("keyup",wordCountPost, false);
}
// Signup page
//
if(document.getElementById("SignUp")!=null)
{
    document.getElementById("SignUp").addEventListener("submit",SignUpForm, false);
}
