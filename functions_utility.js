/**
 * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
 * http://stackoverflow.com/a/171256
 * @param obj1 {Object}
 * @param obj2 {Object}
 * @returns {Object} a new object based on obj1 and obj2
 */
function mergeObjects(obj1, obj2)
{
  var obj3 = {};
  for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
  for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
  return obj3;
}

function updateDebugInfo(text)
{
  var element = document.getElementById("debugInfoBox");

  element.innerHTML = text;
}