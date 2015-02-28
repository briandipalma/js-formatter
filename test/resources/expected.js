'use strict';

var emitr = require('emitr');

function ApplicationMenu() {
	this.EVENTS = {
		SHOW: 'show',
		HIDE: 'hide'
	};
}

ApplicationMenu.prototype.method = function() {
	this._serviceContainer[serviceName].containers.forEach(function(container) {
		var menuItem = ElementUtility.getElementsByClassName(container, 'ul', 'menu-items')[0];
	});
};
