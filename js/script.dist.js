!function e(o,t,n){function r(i,a){if(!t[i]){if(!o[i]){var c="function"==typeof require&&require;if(!a&&c)return c(i,!0);if(s)return s(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var l=t[i]={exports:{}};o[i][0].call(l.exports,function(e){var t=o[i][1][e];return r(t?t:e)},l,l.exports,e,o,t,n)}return t[i].exports}for(var s="function"==typeof require&&require,i=0;i<n.length;i++)r(n[i]);return r}({1:[function(e){!function(){function o(){new t,new n}var t=e("./classes/Blackboard"),n=e("./classes/Loginregister");o()}()},{"./classes/Blackboard":4,"./classes/Loginregister":6}],2:[function(e,o){o.exports=function(){function e(e){console.log("[BbImage] constructor");var o=Handlebars.compile($("#imageTemplate").text()),t=o(e);this.el=$(t)[0],this.removeButton=$(".btn-delete"),this.removeButton.on("click",removeButtonHandler);var n=500,r=300;this.el.style.left=n+"px",this.el.style.top=r+"px",this._mouseDownHandler=this.mouseDownHandler.bind(this),this._mouseMoveHandler=this.mouseMoveHandler.bind(this),this._mouseUpHandler=this.mouseUpHandler.bind(this),this.el.addEventListener("mousedown",this._mouseDownHandler),console.log(this)}return offsetX=0,offsetY=0,e.prototype.mouseDownHandler=function(e){e.preventDefault(),offsetX=e.offsetX,offsetY=e.offsetY,window.addEventListener("mousemove",this._mouseMoveHandler),window.addEventListener("mouseup",this._mouseUpHandler)},e.prototype.mouseMoveHandler=function(e){e.y-offsetY>195&&(this.el.style.left=e.x-offsetX+"px",this.el.style.top=e.y-offsetY+"px",console.log(e.y-offsetY))},e.prototype.mouseUpHandler=function(){console.log("mouse goes up"),window.removeEventListener("mousemove",this._mouseMoveHandler),window.removeEventListener("mouseup",this._mouseUpHandler)},e.prototype.removeClickHandler=function(){console.log("fire"),bean.fire(this.removeButton,"remove",this)},removeButtonHandler=function(){console.log("in the remove button"),bean.fire(this,"remove",this)},e}()},{}],3:[function(e,o){o.exports=function(){function e(e){this.el=e,console.log("[BbVideo] constructor")}return e}()},{}],4:[function(e,o){o.exports=function(){function o(e){switch(e.preventDefault(),e.currentTarget.getAttribute("data-control")){case"add_project":r();break;case"invite_user":s();break;case"save_project":i();break;case"delete_project":a();break;case"add_image":c();break;case"add_post-it":l();break;case"add_video":f()}}function t(){Array.prototype.forEach.call(document.getElementsByTagName("input"),function(e){e.getAttribute("data-control")?e.addEventListener("click",o):console.log("does not contain data control")}),-1!=document.URL.search("home")&&n()}function n(){var e={image_url:"assets/images/2014-11-30-sunday-rec-projects-bucks-dinosaurs.jpg"},o={image_url:"assets/images/2014-11-30-sunday-rec-projects-wiersma-family-crest.jpg"},t=[e,o];c(t)}function r(){new g}function s(){new m}function i(){console.log("save project")}function a(){console.log("delete_project")}function c(e){if(e instanceof Array)for(var o=0;o<e.length;o++){var t=new d(e[o]);$(".board").append(t.el),bean.on(t,"remove",u)}else e instanceof String&&console.log(e+" is a string")}function u(){console.log("schnauw")}function l(){new v}function f(){new p}var d=e("./BbImage"),p=e("./BbVideo"),m=e("./Invite"),v=e("./Postit"),g=e("./Project");return t}()},{"./BbImage":2,"./BbVideo":3,"./Invite":5,"./Postit":7,"./Project":8}],5:[function(e,o){o.exports=function(){function e(){console.log("[Invite] constructor")}return e}()},{}],6:[function(e,o){o.exports=function(){function e(){o()}function o(){$(".loginbutton").on("click",t)}function t(){event.preventDefault();var e={loginEmail:$(".loginEmail").val(),loginPass:$(".loginPass").val()},o={email:$(".loginEmail").val(),password:$(".loginPass").val()},t=$.post("index.php?page=checkusername",o);console.log("got email back "+t);var n=$.post("index.php?page=home",e);n.done(function(e){console.log("Got data back "+e)})}return e}()},{}],7:[function(e,o){o.exports=function(){function e(){console.log("[Postit] constructor")}return e}()},{}],8:[function(e,o){o.exports=function(){function e(){console.log("[Project] constructor")}return e}()},{}]},{},[1]);
//# sourceMappingURL=script.dist.js.map