  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function validateForm() {
    var name = document.forms[0]["fname"].value;
    var phone = document.forms[0]["phnumber"].value;
    var email = document.forms[0]["email"].value;
    var agreedTandC = document.forms[0]["tec"].checked;

    
    if (name.length < 3 || name.length > 20) {
        alert("Please enter a valid name (3-20 characters).");
        return false;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!agreedTandC) {
        alert("Please agree to the Terms and Conditions.");
        return false;
    }

    return true; 

  function isValidEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
  }