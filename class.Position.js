/**
 *
 * @param x {Number}
 * @param y {Number}
 * @constructor
 */
function Position(x, y)
{
  if (typeof x == "undefined")
    throw new Error("X must be number");
  if (typeof y == "undefined")
    throw new Error("Y must be number");
  this.x = x;
  this.y = y;
}

/**
 *
 * @param widget {Object}
 * @constructor
 */
function Position(widget)
{
  this.x = widget.x.value;
  this.y = widget.y.value;
}

Position.prototype.getX = function()
{
  return this.x;
};

Position.prototype.getY = function()
{
  return this.y;
};
