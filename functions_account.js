
function logout()
{
  var session = getSession();
  if (session)
  {
    $.post("user_logout.php", {session_id: session})
        .success(function(payload)
        {
          addMessage("Logged out.");
          document.cookie = "";
        })
        .fail(function(payload)
        {
          addMessage("")
        });
  }
}

function login(user, pass)
{
  if (typeof user == "undefined")
  {
    user = document.getElementById("loginUsername").value;
    pass = document.getElementById("loginPassword").value;
  }

  if (user == "")
  {
    addMessage("Must provide username or email.");
    return false;
  }
  if (pass == "")
  {
    addMessage("Must provide password.");
    return false;
  }

  $.post("api/user_login.php", {identifier: "self", username: user, password: pass})
      .success(function(payload)
      {
        console.log("Success");
        if (payload.indexOf("Err") > 0)
        {
          if (payload == "Err:2")
            addMessage("Unable to find user");
          else if (payload == "Err:3")
            addMessage("Wrong password");
          else if (payload == "Err:4")
            addMessage("Unable to verify email.");
          else
            addMessage("An unknown error occurred.");
        }
        else
        {
          addMessage("Logged in successfully");
          accessMyPage();
        }
      })
      .fail(function(payload)
      {
        addMessage("An error occurred when trying to connect to the server.");
        console.log(payload);
      });
}

function getSession()
{
  var cookie = document.cookie;

  if (typeof cookie == "string")
  {
    var cookies = cookie.split(";");

    for (var i = 0; i < cookies.length; i++)
    {
      var entry = cookies[i].split("=");
      if (entry[0] == "PHPSESSID")
        return entry[1];
    }
  }

  return false;
}

function accessMyPage()
{
  var session = getSession();

  if (typeof session == "string")
  {
    $.post("api/get_user_info.php", {session_id: session})
        .success(function(payload)
        {
          user = JSON.parse(payload);
          var date = new Date();
          date.setDate(user.joined);
          document.getElementById("menuMyAccountTitle").innerHTML = "My Account: " + user.username;
          document.getElementById("menuMyAccountEmail").innerHTML = user.email;
          document.getElementById("menuMyAccountJoined").innerHTML = date.getTime();
          document.getElementById("menuMyAccountPrograms").innerHTML = "Stuff";
          menuOpen("menuMyAccount");
        })
        .fail(function(payload)
        {
          if (payload.status == "404")
            addMessage("Failed send request. Target not found. Please try again.");
          else if (payload.status == "500")
            addMessage("An internal error occurred. Please report this to the administrator!");
          else
            addMessage("An unknown error occurred.");
        })
  }
  else
  {
    menuOpen("menuMyAccountLogin");
  }
}