;(function($,window,document,undefined){'use strict';var pluginName="menuButton";var menuClass=".button-dropdown";var defaults={propertyName:"value"};function Plugin(element,options){this.options=$.extend({},defaults,options);this._defaults=defaults;this._name=pluginName;this.$element=$(element);this.init();}Plugin.prototype={constructor:Plugin,init:function(){this.toggle();},toggle:function(el,options){if(this.$element.data('dropdown')==='show'){this.hideMenu();}else{this.showMenu();}},showMenu:function(){this.$element.data('dropdown','show');this.$element.find('ul').show();if(this.$overlay){this.$overlay.show();}else{this.$overlay=$('<div style="position: fixed; top: 0px;left: 0px; right: 0px; bottom: 0px; z-index: 999;"></div>');this.$element.append(this.$overlay);}},hideMenu:function(){this.$element.data('dropdown','hide');this.$element.find('ul').hide();this.$overlay.hide();}};$.fn[pluginName]=function(options){return this.each(function(){if($.data(this,"plugin_"+pluginName)){$.data(this,"plugin_"+pluginName).toggle();}else{$.data(this,"plugin_"+pluginName,new Plugin(this,options));}});};$(document).on('click','[data-buttons=dropdown]',function(e){var $dropdown=$(e.currentTarget);$dropdown.menuButton();});$(document).on('click','[data-buttons=dropdown] > a',function(e){e.preventDefault();});})(jQuery,window,document);