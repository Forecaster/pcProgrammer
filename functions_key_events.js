document.onkeydown = onKeyDown;
document.onkeyup = onKeyUp;

function onKeyDown(e)
{
  if (e.keyCode == 16)
    shift = 1;
  //else
  //  console.log(e.keyCode);
}

function onKeyUp(e)
{
  if (e.keyCode == 16)
    shift = 0;
  //else if (e.keyCode == 13) //Enter key

  //console.log("Released key: " + e.key)
  //console.log(e);
}


