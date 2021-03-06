// 还要注意， 任何位于 / src 的本地代码都可以关联到 process.env.NODE_ENV 环境变量， 所以以下检查也是有效的：
import {
  cube
} from './math.js';

if(process.env.NODE_ENV !== 'production'){
  console.log('Looks like we are in development mode !');
}
function component() {
  var element = document.createElement('pre');
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5) 
  ].join('\n\n');
  return element;
}

document.body.appendChild(component());