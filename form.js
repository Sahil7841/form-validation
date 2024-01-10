function validation(event) {
    var name = document.forms.RegForm.Name.value;         // Name
    var address = document.forms.RegForm.Address.value;   //   Address
    var email = document.forms.RegForm.Email.value;       //   email
    var phone = document.forms.RegForm.Telephone.value;   //   phone 
    var password = document.forms.RegForm.Password.value; //   password
    var regName = /^[a-zA-Z]$/;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  
    var regPhone=/^\d{10}$/;	
    var formName = "";
    var formEmail ="";
    var formPassword="";
    var arr = [];
  
  //   Name Validation
    if (name === "") {
      formName = "Empty Name.";
      event.preventDefault();
      arr.push(formName);
    } else {
      if (!regName.test(name)) {
        formName = "Use Correct Alphabates In Your Name Field..";
        event.preventDefault();
        arr.push(formName);

        console.log(regName.test(name));
      } else {
        window.alert("Name is ok.");
      }
    }
  
  //   email Validation
    if (email === "") {
      formEmail = "Empty email.";
      event.preventDefault();
      arr.push(formEmail);
    } else {
      if (!regEmail.test(email)) {
        formName = "Please Enter Your Email Address Properly..";
        event.preventDefault();
        arr.push(formEmail);
      } else {
        window.alert("Email is ok.");
      }
    }
  
    //   Phone Validation
    if (phone === "") {
      formPhone = "Empty phone.";
      event.preventDefault();
      arr.push(formPhone);
    } else {
      if (!regPhone.test(phone)) {
          formPhone = "Please Enter Your Mobile Number Properly..";
        event.preventDefault();
        arr.push(formPhone);
      } else {
        window.alert("Phone is ok.");
      }
    }
  
     // password
  
     if (password === "") {
      formPassword = "Empty password..";
      event.preventDefault();
      arr.push(formPassword);
    } else {
      window.alert("password is ok.");
    }
  
  
    // Address
  
    if (address === "") {
      formAddress = "Empty Address.";
      event.preventDefault();
      arr.push(formAddress);
    } else {
      window.alert("address is ok.");
    }
  
    // arr.forEach((e) => {
    console.log(arr);
    // });
  }
  