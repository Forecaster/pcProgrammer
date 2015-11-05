<?
require_once "krumo/class.krumo.php";
require_once "inc_common_functions.php";
require_once "../inc_connect.php";
require_once "../inc_constants.php";

$username = $_POST['username'];
$password = $_POST['password'];
$user_id = $_POST['identifier'];
$query = "";

if ($username == "")
  die(ERR_NO_USER);
if ($password == "")
  die(ERR_NO_PASS);

if (strpos($username, '@') !== false)
{
  $email = validateSanitizeEmail($username);

  if ($email !== false)
    $query = "SELECT * FROM `users` WHERE `email`='$email'";
}
else
  $query = "SELECT * FROM `users` WHERE `username`='$username'";

if ($query == "")
  die(ERR_GENERIC);

$result = mysqli_query($con, $query);

if ($result)
{
  if (mysqli_num_rows($result) > 0)
  {
    $data = mysqli_fetch_assoc($result);
    $stored_hash = $data['password'];
    if ($stored_hash == crypt($password, $stored_hash))
    {
      session_start();
      $session_id = session_id();
      $_SESSION['username'] = $username;
      die($session_id);
    }
    else
      die(ERR_BAD_PASS);
  }
  else
    die(ERR_NO_USER);
}
else
{
  log_file($user_id." - ".mysqli_error($con), "../sql.log");
  die(ERR_SQL);
}