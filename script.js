// $("#demo").html("<p>before click</p>");

var errormsg = "";

const validateEmail = (email) => {
  console.log("email validation", email);
  var regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  console.log(regex.test(email));
  return regex.test(email);
};

const validatePhone = (phone) => {
  var phoneNum = phone.replace(/[^\d]/g, "");
  return phoneNum.length > 6 && phoneNum.length < 11 ? true : false;
};

$("#submitbtn").click(() => {
  $("#demo").html("after click");
  console.log("in submit button");
  errormsg +=
    $("#Email").val() === ""
      ? "<p>Please Enter Email</p>"
      : validateEmail($("#Email").val())
      ? ""
      : "<p>Email is not valid</p>";
  errormsg +=
    $("#phoneno").val() === ""
      ? "<p>Please Enter Phone Number</p>"
      : validatePhone($("#phoneno").val())
      ? ""
      : "<p>Phone Number is not valid</p>";
  errormsg +=
    $("#password").val() === "" && $("#confirmpassword").val() === ""
      ? "<p>Please Enter Password</p><p>Please Enter Confirm Password</p>"
      : $("#confirmpassword").val() === ""
      ? "<p>Please Enter Confirm Password</p>"
      : $("#password").val() === ""
      ? "<p>Please Enter Password</p>"
      : $("#password").val() === $("#confirmpassword").val()
      ? ""
      : "<p>Password is not Match</p>";
  errormsg =
    errormsg === "" ? "<p>You are registerd successfuly</p>" : errormsg;

  if (errormsg === "") {
    errormsg = "<p>You are registerd successfuly</p>";
    $("#demo").css("color", "green");
  } else if (errormsg !== "<p>You are registerd successfuly</p>") {
    $("#demo").css("color", "red");
  }
  $("#demo").html(errormsg);
  console.log(errormsg);
  return false;
});
