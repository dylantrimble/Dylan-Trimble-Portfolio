
$("#about").on("click", function(event){
    event.preventDefault();
    $(".home-screen").show();
    $(".contact-screen").hide();
    $(".portfolio-screen").hide();
    $("#textChange").text("About Me")
    //$("#textChange").attr("class", "navbar-brand home animated fadeInDown");
});
$("#portfolio").on("click", function(event){
    event.preventDefault();
    $(".home-screen").hide();
    $(".contact-screen").hide();
    $(".portfolio-screen").show();
    document.body.style.backgroundImage = "url('images/guages.jpg')";
    $("#textChange").text("Portfolio")
    //$("#textChange").attr("class", "navbar-brand home animated fadeInDown");
});
$("#contact").on("click", function(event){
    event.preventDefault();
    $(".home-screen").hide();
    $(".contact-screen").show();
    $(".portfolio-screen").hide();
    $("#textChange").text("Contact")
    //$("#textChange").attr("class", "navbar-brand home animated fadeInDown");
});

var config = {
    apiKey: "AIzaSyCMi-Wyub3lEvU7HsO4wrJJFwF7U3P16xo",
    authDomain: "portfoliocontacts-2546a.firebaseapp.com",
    databaseURL: "https://portfoliocontacts-2546a.firebaseio.com",
    projectId: "portfoliocontacts-2546a",
    storageBucket: "portfoliocontacts-2546a.appspot.com",
    messagingSenderId: "348185402074",
    appId: "1:348185402074:web:ef5593e61b02bee09ce3e3"
  };
  
  firebase.initializeApp(config);
  var database = firebase.database();

  $("#add-contact").on("click", function(event) {
    event.preventDefault();
  
    var contactName = $("#contact-name-input").val().trim();
    var companyInput = $("#company-input").val().trim();
    var userInfo = $("#number-input").val().trim();
  

    var newUser = {
      name: contactName,
      company: companyInput,
      info: userInfo,
    };
    
    database.ref().push(newUser);


    console.log(newUser.name);
    console.log(newUser.company);
    console.log(newUser.info);
});