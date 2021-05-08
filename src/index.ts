import { createVNode, VNode } from './dom/VNode.js'
import { render } from './dom/render.js'
import { ObjectUtils } from './diff.js'

export default class Main {

}

var a = createVNode('ul', {}, [
	        createVNode('li',{},"Item1"),
	        createVNode('li',{},"Item2"),
	    ]);

var root = document.querySelector('#app');
var r = render(a, root);