!function e(o,t,n){function r(i,c){if(!t[i]){if(!o[i]){var u="function"==typeof require&&require;if(!c&&u)return u(i,!0);if(s)return s(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var l=t[i]={exports:{}};o[i][0].call(l.exports,function(e){var t=o[i][1][e];return r(t?t:e)},l,l.exports,e,o,t,n)}return t[i].exports}for(var s="function"==typeof require&&require,i=0;i<n.length;i++)r(n[i]);return r}({1:[function(e){!function(){function o(){new t}var t=e("./classes/Blackboard");o()}()},{"./classes/Blackboard":4}],2:[function(e,o){o.exports=function(){function e(e){console.log("[BbImage] constructor");var o=Handlebars.compile($("#imageTemplate").text()),t=o(e);this.el=$(t)[0],this.removeButton=$(".btn-delete"),this.removeButton.on("click",removeButtonHandler);var n=200,r=200;this.el.style.left=n+"px",this.el.style.top=r+"px",this._mouseDownHandler=this.mouseDownHandler.bind(this),this._mouseMoveHandler=this.mouseMoveHandler.bind(this),this._mouseUpHandler=this.mouseUpHandler.bind(this),this.el.addEventListener("mousedown",this._mouseDownHandler),console.log(this)}return offsetX=0,offsetY=0,e.prototype.mouseDownHandler=function(e){e.preventDefault(),offsetX=e.offsetX,offsetY=e.offsetY,window.addEventListener("mousemove",this._mouseMoveHandler),window.addEventListener("mouseup",this._mouseUpHandler)},e.prototype.mouseMoveHandler=function(e){e.y-offsetY>195&&(this.el.style.left=e.x-offsetX+"px",this.el.style.top=e.y-offsetY+"px",console.log(e.y-offsetY))},e.prototype.mouseUpHandler=function(){console.log("mouse goes up"),window.removeEventListener("mousemove",this._mouseMoveHandler),window.removeEventListener("mouseup",this._mouseUpHandler)},e.prototype.removeClickHandler=function(){console.log("fire"),bean.fire(this.removeButton,"remove",this)},removeButtonHandler=function(){console.log("in the remove button"),bean.fire(this,"remove",this)},e}()},{}],3:[function(e,o){o.exports=function(){function e(e){this.el=e,console.log("[BbVideo] constructor")}return e}()},{}],4:[function(e,o){o.exports=function(){function o(e){switch(e.preventDefault(),e.currentTarget.getAttribute("data-control")){case"add_project":r();break;case"invite_user":s();break;case"save_project":i();break;case"delete_project":c();break;case"add_image":u();break;case"add_post-it":l();break;case"add_video":f()}}function t(){Array.prototype.forEach.call(document.getElementsByTagName("input"),function(e){e.getAttribute("data-control")?e.addEventListener("click",o):console.log("does not contain data control")}),-1!=document.URL.search("home")&&n()}function n(){var e={image_url:"assets/images/2014-11-30-sunday-rec-projects-bucks-dinosaurs.jpg"},o={image_url:"assets/images/2014-11-30-sunday-rec-projects-wiersma-family-crest.jpg"},t=[e,o];u(t)}function r(){new h}function s(){new p}function i(){console.log("save project")}function c(){console.log("delete_project")}function u(e){if(e instanceof Array)for(var o=0;o<e.length;o++){var t=new d(e[o]);$(".board").append(t.el),bean.on(t,"remove",a)}else e instanceof String&&console.log(e+" is a string")}function a(){console.log("schnauw")}function l(){new v}function f(){new m}var d=e("./BbImage"),m=e("./BbVideo"),p=e("./Invite"),v=e("./Postit"),h=e("./Project");return t}()},{"./BbImage":2,"./BbVideo":3,"./Invite":5,"./Postit":6,"./Project":7}],5:[function(e,o){o.exports=function(){function e(){console.log("[Invite] constructor")}return e}()},{}],6:[function(e,o){o.exports=function(){function e(){console.log("[Postit] constructor")}return e}()},{}],7:[function(e,o){o.exports=function(){function e(){console.log("[Project] constructor")}return e}()},{}]},{},[1]);
//# sourceMappingURL=script.dist.js.map