window.itcast||(window.itcast={}),itcast.iScroll=function(t){if(!(this instanceof arguments.callee))return new arguments.callee(t);this.init(t)},itcast.iScroll.prototype={constructor:itcast.iScroll,init:function(t){var o=this;return t.swipeDom&&"object"==typeof t.swipeDom&&(o.parentDom=t.swipeDom),!!o.parentDom&&(o.childDom=o.parentDom.children&&o.parentDom.children[0]?o.parentDom.children[0]:"",!!o.childDom&&(o.settings={},o.settings.swipeType=t.swipeType?t.swipeType:"y",o.settings.swipeDistance=0<=t.swipeDistance?t.swipeDistance:150,void o._scroll()))},setTranslate:function(t){this.currPostion=t,this._addTransition(),this._changeTranslate(this.currPostion)},_addTransition:function(){this.childDom.style.transition="all .2s ease",this.childDom.style.webkitTransition="all .2s ease"},_removeTransition:function(){this.childDom.style.transition="none",this.childDom.style.webkitTransition="none"},_changeTranslate:function(t){"y"==this.settings.swipeType?(this.childDom.style.transform="translateY("+t+"px)",this.childDom.style.webkitTransform="translateY("+t+"px)"):(this.childDom.style.transform="translateX("+t+"px)",this.childDom.style.webkitTransform="translateX("+t+"px)")},_scroll:function(){var o=this,i="y"==o.settings.swipeType,t=i?o.parentDom.offsetHeight:o.parentDom.offsetWidth,n=i?o.childDom.offsetHeight:o.childDom.offsetWidth;n<t&&(i?o.childDom.style.height=t+"px":o.childDom.style.width=t+"px",n=t);var s=o.settings.swipeDistance;o.maxPostion=0,o.minPostion=-(n-t),o.currPostion=0,o.startPostion=0,o.endPostion=0,o.movePostion=0,o.childDom.addEventListener("touchstart",function(t){o.startPostion=i?t.touches[0].clientY:t.touches[0].clientX},!1),o.childDom.addEventListener("touchmove",function(t){t.preventDefault(),o.endPostion=i?t.touches[0].clientY:t.touches[0].clientX,o.movePostion=o.startPostion-o.endPostion,o.currPostion-o.movePostion<o.maxPostion+s&&o.currPostion-o.movePostion>o.minPostion-s&&(o._removeTransition(),o._changeTranslate(o.currPostion-o.movePostion))},!1),window.addEventListener("touchend",function(t){o.currPostion-o.movePostion>o.maxPostion?(o.currPostion=o.maxPostion,o._addTransition(),o._changeTranslate(o.currPostion)):o.currPostion-o.movePostion<o.minPostion?(o.currPostion=o.minPostion,o._addTransition(),o._changeTranslate(o.currPostion)):o.currPostion=o.currPostion-o.movePostion,o._reset()},!1)},_reset:function(){var t=this;t.startPostion=0,t.endPostion=0,t.movePostion=0}};