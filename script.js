function openGmail(email) {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailUrl, '_blank');
}



function openNav() {
    document.getElementById("mySidenav").style.width = "80%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }