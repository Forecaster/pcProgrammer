if (!Array.prototype.pushUnique)
{
  Array.prototype.pushUnique = function (object)
  {
    var scan = 0;
    this.forEach(function (entry)
    {
      if (entry == object)
        scan++;
    });

    if (scan == 0)
    {
      this.push(object);
      return true;
    }
    else
      return false;
  };
}

if (!String.prototype.insert)
{
  String.prototype.insert = function ()
  {
    var string = this;
    for (var i = 0; i < arguments.length; i++)
    {
      var target = "{" + i + "}";
      string = string.replace(target, arguments[i].toString());
    }

    return string;
  }
}

if (!String.prototype.nl2br)
{
  String.prototype.nl2br = function()
  {
    return this.replace("\n", "<br>");
  }
}