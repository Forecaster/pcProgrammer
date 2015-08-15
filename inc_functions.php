<?
function hash_password($userEmail, $password)
{
  $hashed_pass = strtolower($userEmail).$password;
  for ($i = 0; $i < 1000; $i++)
  {
    $hashed_pass = hash("SHA512", $userEmail . $password);
  }

  return $hashed_pass;
}

function isAssoc(array $array) {
  return (bool)count(array_filter(array_keys($array), 'is_string'));
}

/**
 * Expects first level of array to be number keyed, second levels associative
 * Assumes keys are consistent for all sub-arrays
 * @param $array {Array}
 * @return string
 */
function csv_2($array)
{
  if (!isAssoc($array))
  {
    $row_delimiter = ";";
    $col_delimiter = ",";

    $csv = "";

    if (isset($array) && is_array($array))
    {
      foreach ($array[0] as $key => $value)
      {
        $csv .= $key . $col_delimiter;
      }
      $csv = substr($csv, 0, -1);
      $csv .= $row_delimiter;

      for ($i = 0; $i < count($array); $i++)
      {
        foreach ($array[$i] as $value)
        {
          $csv .= $value . $col_delimiter;
        }
        $csv = substr($csv, 0, -1);
        $csv .= $row_delimiter;
      }
      $csv = substr($csv, 0, -1);
    }
    else
      return "Input is not array! (" . gettype($array) . ")";

    if ($csv != "")
      return $csv;
    else
      return "Array conversion to csv string failed!";
  }
  else
    return "Array is associative!";
}

function csv($array)
{
  function breakdown($array, $level, $col_delimiter)
  {
    $level += 1;
    $csv = "[".$level;
    foreach ($array as $key => $value)
    {
      if (is_array($value))
        $csv .= breakdown($value, $level, $col_delimiter);
      else
      {
        $csv .= $key."=".$value.$col_delimiter;
      }
    }
    $csv .= "]";
    return $csv;
  }

  if (isset($array) && is_array($array))
  {
    $level = 0;
    $row_delimiter = ";";
    $col_delimiter = ",";

    $csv = "";
    foreach ($array as $key => $value)
    {
      if (is_array($value))
      {
        foreach ($array as $key2 => $value2)
        {
          $csv .= $key2 . "=" . $value2 . $col_delimiter;
        }
        $csv = substr($csv, 0, -1);
        $csv .= $row_delimiter;
      }
      else
        $csv .= $key . "=" . $value . $row_delimiter;
    }

    $csv = substr($csv, 0, -1);
    return $csv;
  }

  return false;
}

function parse_csv($csv_string)
{
  if (isset($csv_string) && strlen($csv_string) > 3)
  {
    return explode(";", $csv_string);
  }
  else
    return false;
}