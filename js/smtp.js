
   (function(){
    emailjs.init("EG-_nJoV21R7rXNHD");
 })();


function validate(){
    let name=document.getElementById('name');
    let email=document.getElementById('email');
    let phone=document.getElementById('phone');
    let msg=document.getElementById('message');
    let submit=document.getElementById('submit');
  
  submit.addEventListener("click", (e)=>{
    e.preventDefault()
  
    if(name.value == "" || email.value == "" || phone.value == ""|| msg.value == ""){
      inputempty();
    }

     else {

          var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          var phoneno = /^\d{10}$/;
  
    if (email.value.match(validRegex) && phone.value.match(phoneno)) {
  
      // alert("Valid email address!");
  
      document.contact.email.focus();
  
      // return true;
      sendmail(name.value, email.value, phone.value, msg.value);
      success();
      
      name.value="",
       email.value="",
        phone.value="",
        msg.value="";
  
    } else {
  
      // alert("Invalid email address!");
      error()
  
      document.contact.email.focus();
  
      return false;
  
    }
       

        // if(!sendmail(name.value, email.value, phone.value, msg.value)){
        //     error();
        //     }
    }
  
  })
  }
  validate();
  
  function sendmail(name, email, phone, msg){
    emailjs.send("service_tauvb7s","template_d39oelp",{
        to_name: "Team",
        from_name: name,
        from_email: email,
        from_phone: phone,
        message: msg,
        });
  }
  
  
  function success(){
  swal({
    icon: "success",
    title: "success",
    text: "Mail Sent",
    button: "Close",
  });
  }
  
  function error(){
  swal({
    icon: "error",
    title: "Incorrect Details",
    text: "Check your Email/Phone no",
    button: "Close",
  });
  }
  
  function inputempty(){
  swal({
    icon: "warning",
    title: "Error",
    text: "Please fill all fields",
    button: "Back",
  });
  }
  

  // function ValidateEmail(email) {
  //   let email=document.getElementById('email');

  
  // }