import _ from 'lodash';
import printMe from './print.js';

function component(){
  var element = document.createElement('div');
  var btn = document.createElement('button');
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello','webpack'], ' ');
  
  btn.innerHTML ='click me and check the conole!';

  btn.onclick= printMe;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());