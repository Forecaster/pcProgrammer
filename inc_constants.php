<?
define("ERR_GENERIC"        , "Err:1");
define("ERR_USER_NOT_FOUND" , "Err:2");
define("ERR_BAD_PASS"       , "Err:3");
define("ERR_BAD_EMAIL"      , "Err:4");
define("ERR_NO_USER"        , "Err:5");
define("ERR_NO_PASS"        , "Err:6");
define("ERR_NO_EMAIL"       , "Err:7");
define("ERR_USER_EXISTS"    , "Err:8");
define("ERR_EMAIL_EXISTS"   , "Err:9");
define("ERR_SQL"            , "Err:10");
define("ERR_NO_ID"          , "Err:11");
define("ERR_NO_TYPE"        , "Err:12");
define("ERR_NO_TOKEN"       , "Err:13");
define("ERR_TOKEN_EXPIRED"  , "Err:14");

define("OP_SUCCESS", "true:operation successful");

define("ENCRYPT_COST"     , 10);

define("ERROR_DESCRIPTION", array(
    1 => array("Generic Error", "This error means something went wrong internally for an unknown reason, or for a reason that cannot be exposed externally. Please contact the administrator for more information."),
    2 => array("User not found", "There was no user matching the provided token. This most likely means the token has expired."),
    3 => array("Invalid password", "The provided password was incorrect."),
    4 => array("Invalid email", "The provided email was incorrect."),
    5 => array("No user provided", "We received a null or empty string in the user field."),
    6 => array("No password provided", "We received a null or empty string in the password field."),
    7 => array("No email provided", "We received a null or empty string in the email field"),
    8 => array("Username already exists", "You tried to register a new user using a name that is already in use. Try a different name."),
    9 => array("Email already exists", "You tried to register a new user using an email that is already in use. Try a different email."),
    10 => array("A database error occurred", "A database query failed. This can be caused by a few issues. The database could be unavailable, invalid symbols could have been passed or there is a bug in the code. Please contact the administrator for more information."),
    11 => array("No identifier provided", "You must provide an identifier, which is a string that identifies your application. This is used to mark entries in logs to help with tracking down issues. This string should optimally be the name of your application and be consistent across all your api calls."),
    12 => array("No type provided", "When requesting a list the list type must be specified."),
    13 => array("No token provided", "When requesting user specific data a user token must be provided."),
    14 => array("Token expired", "Too much time passed since the last request using this token. The token expired. Please request a new token."),
));