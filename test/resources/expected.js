'use strict';

var emitr = require('emitr');

function ApplicationMenu() {
	this.EVENTS = {
		SHOW: 'show',
		HIDE: 'hide'
	};
	this.m_oPropertyHelper = new PropertyHelper;
}

ApplicationMenu.prototype.method = function() {
	throw new caplin.core.Error(
		caplin.core.Error.INVALID_PARAMETERS, 'AttributesNormalizer argument must be a map object'
	);
	var oXmlResourceService = require('service!br.xml-service');
	this._serviceContainer[serviceName].containers.forEach(function(container) {
		var menuItem = ElementUtility.getElementsByClassName(container, 'ul', 'menu-items')[0];
	// comment
	});
};

ApplicationMenu.prototype.more = function() {
	if (transition) {
		for (var i = 1, length = menuItems.children.length; i < length; ++i) {
			menuItems.children[i].firstChild.className = itemStyle;
		}
	} else {
		itemStyle += ' no-transition';
		for (i = 1, length = menuItems.children.length; i < length; ++i) {
			menuItems.children[i].firstChild.className = itemStyle;
		}
	}
};

ApplicationMenu.prototype.aMethod = function() {
	for (var i = 0; i < editIcons.children.length; ++i) {
		editIcons.children[i].style.display = 'none';
	}

	editIcons.insertBefore(confirmIcon, editIcons.firstChild);

	var textInput = ElementUtility.getElementsByClassName(container, 'input', 'rename-input')[0];
};

module.exports = ApplicationMenu;
