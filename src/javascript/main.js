var $ = global.$ = global.jQuery = require('jquery');
var app = require('app/app');
var bootstrapCollapse = require('libs/bootstrap/collapse.js');
$(function(){
	bootstrapCollapse($);
	app.start();	
});