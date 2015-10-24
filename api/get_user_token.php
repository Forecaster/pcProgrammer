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
  return ERR_EMPTY_USER;
if ($password == "")
  return ERR_EMPTY_PASS;

if (strpos($username, '@') !== false)
{
  $email = validateSanitizeEmail($username);

  if ($email !== false)
    $query = "SELECT * FROM `users` WHERE `email`='$email'";
}
else
  $query = "SELECT * FROM `users` WHERE `username`='$username'";

if ($query == "")
  echo ERR_GENERIC;

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
      echo $session_id;
      return;
    }
    else
    {
      echo ERR_BAD_PASS;
      return;
    }
  }
  else
  {
    echo ERR_NO_USER;
    return;
  }
}
else
{
  log_file($user_id." - ".mysqli_error($con), "../sql.log");
  echo ERR_SQL;
  return;
}