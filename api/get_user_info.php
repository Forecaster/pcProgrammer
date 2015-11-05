<?
if (isset($_POST['session_id']))
{
  session_id($_POST['session_id']);
  session_start();
  echo json_encode($_SESSION);
}
