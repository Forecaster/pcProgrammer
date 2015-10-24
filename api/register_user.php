<?
require_once "krumo/class.krumo.php";
require_once "inc_common_functions.php";
require_once "../inc_connect.php";
require_once "../inc_constants.php";

$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];
$user_id = $_POST['identifier'];

if ($user_id == "")
{
  echo ERR_NO_ID;
  return;
}
elseif ($username == "")
{
  echo ERR_EMPTY_USER;
  return;
}
elseif ($password == "")
{
  echo ERR_EMPTY_PASS;
  return;
}
elseif ($email == "")
{
  echo ERR_EMPTY_EMAIL;
  return;
}

$email = validateSanitizeEmail($email);
if ($email === false)
{
  echo ERR_BAD_EMAIL;
  return;
}

//Check username
$query = "SELECT * FROM `users` WHERE `username` = '$username'";

$result = mysqli_query($con, $query);

if ($result)
{
  if (mysqli_num_rows($result) > 0)
  {
    echo ERR_USER_EXISTS;
    return;
  }
}
else
{
  log_file($user_id." - ".mysqli_error($con), "../sql.log");
  echo ERR_SQL;
  return;
}

//check email
$query = "SELECT * FROM `users` WHERE `email` = '$email'";

$result = mysqli_query($con, $query);

if ($result)
{
  if (mysqli_num_rows($result) > 0)
  {
    echo ERR_USER_EXISTS;
    return;
  }
}
else
{
  log_file($user_id." - ".mysqli_error($con), "../sql.log");
  echo ERR_SQL;
  return;
}

//Encrypt password
$salt = strtr(base64_encode(mcrypt_create_iv(16, MCRYPT_DEV_URANDOM)), '+', '.');
$salt = sprintf("$2a$%02d$", ENCRYPT_COST) . $salt;

$store_password = crypt($password, $salt);

$time = time();

//Add new user
$query = "INSERT INTO `users` (`username`, `email`, `password`, `joined`) VALUES ('$username', '$email', '$store_password', '$time')";

$result = mysqli_query($con, $query);

if ($result)
{
  echo "0:User registered successfully";
  return;
}
else
{
  log_file($user_id." - ".mysqli_error($con), "../sql.log");
  echo ERR_SQL;
  return;
}
