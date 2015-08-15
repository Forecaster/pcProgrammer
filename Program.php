<?


class Program
{

  /**
   * Program constructor.
   * @param [$urlCode] {String}
   */
  public function __construct($url)
  {
    $this->url = $url;
    $this->code = "";
    $this->json = "";
    $this->program = "";
  }

  /**
   * @return string
   */
  public function getUrl()
  {
    return $this->url;
  }

  /**
   * @return string
   */
  public function getJson()
  {
    return $this->json;
  }

  /**
   * @return string
   */
  public function getProgram()
  {
    return $this->program;
  }

  /**
   * @return string
   */
  public function getCode()
  {
    return $this->code;
  }



  /**
   * @return bool
   */
  public function extract_code()
  {
    $match = preg_match('/(?:http|https)\:\/\/.*\/([A-Za-z0-9]{8})/', $this->url, $matches);

    if ($match)
    {
      $this->code = $matches[1];
      return true;
    }
    return false;
  }

  /**
   * @return bool
   */
  public function import()
  {
    $raw_url = "http://pastebin.com/raw.php?i=" . $this->code;

    $json = file_get_contents($raw_url);
    if ($json && $json != "")
    {
      $this->json = $json;
      return true;
    }
    else
      return false;
  }

  public function jsonDecode()
  {
    if ($this->json != "")
    {
      $program_array = json_decode($this->json, true);

      if ($program_array)
      {
        $this->program = $program_array;
        return true;
      }
      else
        return "Decode failed!";
    }
    else
      return "Content empty!";
  }
}