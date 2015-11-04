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
  die(ERR_NO_ID);
elseif ($username == "")
  die(ERR_EMPTY_USER);
elseif ($password == "")
  die(ERR_EMPTY_PASS);
elseif ($email == "")
  die(ERR_EMPTY_EMAIL);

$email = validateSanitizeEmail($email);
if ($email === false)
  die(ERR_BAD_EMAIL);

//Check username
$query = "SELECT * FROM `users` WHERE `username` = '$username'";

$result = mysqli_query($con, $query);

if ($result)
{
  if (mysqli_num_rows($result) > 0)
    die(ERR_USER_EXISTS);
}
else
{
  log_file($user_id." - ".mysqli_error($con), "../sql.log");
  die(ERR_SQL);
}

//check email
$query = "SELECT * FROM `users` WHERE `email` = '$email'";

$result = mysqli_query($con, $query);

if ($result)
{
  if (mysqli_num_rows($result) > 0)
    die(ERR_USER_EXISTS);
}
else
{
  log_file($user_id." - ".mysqli_error($con), "../sql.log");
  die(ERR_SQL);
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
  die(OP_SUCCESS);
}
else
{
  log_file($user_id." - ".mysqli_error($con), "../sql.log");
  die(ERR_SQL);
}
