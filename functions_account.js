
function login()
{
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;

  if (username == "")
  {
    addMessage("Must provide username or email.");
    return false;
  }
  else if (password == "")
  {
    addMessage("Must provide password.");
    return false;
  }
}