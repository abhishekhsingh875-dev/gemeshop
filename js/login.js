function switchTab(tab){
    document.querySelectorAll(" .tab-btn")
    .forEach(b=>b.classList.remove("active"))
    

 if(tab=== "login"){
    document.getElementById("loginForm").classList.remove("hidden")
    document.getElementById("signupForm").classList.add("hidden")
    document.querySelectorAll(".tab-btn")[0].classList.add("active")

 }
 else{
     document.getElementById("signupForm").classList.remove("hidden")
     document.getElementById("loginForm").classList.add("hidden")
    document.querySelectorAll(".tab-btn")[1].classList.add("active")
 }
}
// signup form
function handlesignup(){
    const username=document.getElementById("signupusername").value.trim();
    const password=document.getElementById("signuppassword").value.trim();
    const confirm = document.getElementById("signupconfirm").value.trim();
    const error = document.getElementById("signuperror");

    if(!username || !password || !confirm){
        error.textContent="Please fill in All informantion!";
        return;
    }
    if(username.length<6){
        error.textContent="Username must be at least 6 characters!";
        return;
    }
    if(password.length<6)
    {
        error.textContent="Password must be at least 6 characters!";
        return;
    }
    if(password!==confirm){
        error.textContent="Pasword did not match!";
        return;
 
    }
    const users = JSON.parse(localStorage.getItem("users")||"[]");
    const exists= users.find(u=>u.username===username);
    if(exists){
        error.textContent="The name is already taken";
        return;
    }


    users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  // Auto login after signup
  localStorage.setItem("loggedInUser", username);
  window.location.href = "page1.html";


}
// login form
function handlelogin() {
  const username = document.getElementById("loginusername").value.trim();
  const password = document.getElementById("loginpassword").value.trim();
  const error    = document.getElementById("loginerror");

  if (!username || !password) {
    error.textContent = "Please fill in All informantion!";
    return;
  }
    //  checking users
    const users= JSON.parse(localStorage.getItem("users")|| "[]");
    const user = users.find(u=>u.username===username && u.password===password);
    if(!user){
        error.textContent="Wrong username of passowrd, please try again";
        return;

    }
    // saving the data of user
    localStorage.setItem("loggedinuser",username);
    window.location.href="page1.html";
}
