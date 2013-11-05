var occurrence = require('string-occurrence');
var splice = require('string-splice');

/**
 * Add tags, brakets, etc., around matching keywords
 * in strings.
 * @param  {String} str    
 * @param  {String} substr 
 * @param  {String} tag    
 * @param  {String} endTag 
 * @return {String}        
 */

module.exports = function(str, substr, tag, endTag){
  var instances = occurrence(str, substr);
  if (!instances) return str;
  for (var i = instances.length - 1; i>= 0; i--){
    var inst = instances[i];
    str = splice(str, inst.to, inst.to, endTag);
    str = splice(str, inst.from, inst.from, tag);
  }
  return str;
};