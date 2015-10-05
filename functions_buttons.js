
function loadUrl()
{
  if (elements[0].value != "")
    loadProgram(elements[0].value);
  else if (elements[2].value != "")
    parseProgramFromJson(elements[2].value);
  else
    addMessage("Enter a url or parse a program into the box for loading!");
  //elements[0].value = "";
  menuExit();
}