!function e(o,t,n){function s(r,a){if(!t[r]){if(!o[r]){var u="function"==typeof require&&require;if(!a&&u)return u(r,!0);if(i)return i(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var c=t[r]={exports:{}};o[r][0].call(c.exports,function(e){var t=o[r][1][e];return s(t?t:e)},c,c.exports,e,o,t,n)}return t[r].exports}for(var i="function"==typeof require&&require,r=0;r<n.length;r++)s(n[r]);return s}({1:[function(e){!function(){function o(){new t(document.querySelector(".board")),new n}var t=e("./classes/Blackboard"),n=e("./classes/Loginregister");o()}()},{"./classes/Blackboard":4,"./classes/Loginregister":6}],2:[function(e,o){o.exports=function(){function e(e,o,t){console.log("[BbImage] constructor","top boundaries are "+t.top);var n=Handlebars.compile($("#imageTemplate").text()),s=n(e);this.el=$(s)[0],this.boundaries=t,this.removeButton=$(this.el).find(".btn-delete")[0],bean.on(this.removeButton,"click",this.removeClickHandler.bind(this));var i=o.xPos,r=o.yPos;this.el.style.left=i+"px",this.el.style.top=r+"px",this._mouseDownHandler=this.mouseDownHandler.bind(this),this._mouseMoveHandler=this.mouseMoveHandler.bind(this),this._mouseUpHandler=this.mouseUpHandler.bind(this),this.el.addEventListener("mousedown",this._mouseDownHandler)}return e.prototype.mouseDownHandler=function(e){e.preventDefault(),offsetX=e.offsetX,offsetY=e.offsetY,window.addEventListener("mousemove",this._mouseMoveHandler),window.addEventListener("mouseup",this._mouseUpHandler)},e.prototype.mouseMoveHandler=function(e){e.y-offsetY>this.boundaries.top&&(this.el.style.left=e.x-offsetX+"px",this.el.style.top=e.y-offsetY+"px",console.log(e.y-offsetY))},e.prototype.mouseUpHandler=function(){console.log("mouse goes up"),window.removeEventListener("mousemove",this._mouseMoveHandler),window.removeEventListener("mouseup",this._mouseUpHandler)},e.prototype.removeClickHandler=function(){bean.fire(this,"remove",this)},e}()},{}],3:[function(e,o){o.exports=function(){function e(e,o,t){console.log("[BbVideo] constructor","top boundaries are "+t.top);var n=Handlebars.compile($("#videoTemplate").text()),s=n(e);this.el=$(s)[0],this.boundaries=t,this.removeButton=$(".btn-delete"),this.removeButton.on("click",removeButtonHandler);var i=o.xPos,r=o.yPos;this.el.style.left=i+"px",this.el.style.top=r+"px",this._mouseDownHandler=this.mouseDownHandler.bind(this),this._mouseMoveHandler=this.mouseMoveHandler.bind(this),this._mouseUpHandler=this.mouseUpHandler.bind(this),this.el.addEventListener("mousedown",this._mouseDownHandler),console.log(this)}return e.prototype.mouseDownHandler=function(e){e.preventDefault(),offsetX=e.offsetX,offsetY=e.offsetY,window.addEventListener("mousemove",this._mouseMoveHandler),window.addEventListener("mouseup",this._mouseUpHandler)},e.prototype.mouseMoveHandler=function(e){e.y-offsetY>this.boundaries.top&&(this.el.style.left=e.x-offsetX+"px",this.el.style.top=e.y-offsetY+"px",console.log(e.y-offsetY))},e.prototype.mouseUpHandler=function(){console.log("mouse goes up"),window.removeEventListener("mousemove",this._mouseMoveHandler),window.removeEventListener("mouseup",this._mouseUpHandler)},e.prototype.removeClickHandler=function(){console.log("fire"),bean.fire(this.removeButton,"remove",this)},removeButtonHandler=function(){console.log("in the remove button"),bean.fire(this,"remove",this)},e}()},{}],4:[function(e,o){o.exports=function(){function o(e){switch(e.preventDefault(),e.currentTarget.getAttribute("data-control")){case"add_project":s();break;case"invite_user":i();break;case"save_project":r();break;case"delete_project":a();break;case"add_image":u("assets/images/2014-11-30-sunday-rec-projects-bucks-dinosaurs.jpg");break;case"add_post-it":c();break;case"add_video":d()}}function t(e){this.el=e,Array.prototype.forEach.call(document.getElementsByTagName("input"),function(e){e.getAttribute("data-control")?e.addEventListener("click",o):console.log(e+"does not contain data control")}),-1!=document.URL.search("home"),n()}function n(){var e={image_url:"assets/images/2014-11-30-sunday-rec-projects-bucks-dinosaurs.jpg"},o={image_url:"assets/images/2014-11-30-sunday-rec-projects-wiersma-family-crest.jpg"},t=[e,o];u(t)}function s(){new v}function i(){new m}function r(){console.log("save project")}function a(){console.log("delete_project")}function u(e){var o,t=[];if(e instanceof Array)for(var n=0;n<e.length;n++)o=new f(e[n],b,g),t.push(o);else"string"==typeof e&&(o=new f(w,b,g),t.push(o));$.each(t,function(e,o){$(".board").append(o.el),bean.on(o,"remove",l.bind(this))})}function l(e){console.log(this.el),$(".board")[0].removeChild(e.el),console.log(e)}function c(){new h}function d(){new p}var f=e("./BbImage"),p=e("./BbVideo"),m=e("./Invite"),h=e("./Postit"),v=e("./Project"),g={top:"190",bottom:"800",left:"0",right:""},b={xPos:500,yPos:500},w={image_url:"assets/images/2014-11-30-sunday-rec-projects-bucks-dinosaurs.jpg"};return t}()},{"./BbImage":2,"./BbVideo":3,"./Invite":5,"./Postit":7,"./Project":8}],5:[function(e,o){o.exports=function(){function e(){console.log("[Invite] constructor")}return e}()},{}],6:[function(e,o){o.exports=function(){function e(){o()}function o(){$(".loginbutton").on("click",t)}function t(){event.preventDefault();var e={loginEmail:$(".loginEmail").val(),loginPass:$(".loginPass").val()},o={email:$(".loginEmail").val(),password:$(".loginPass").val()},t=$.post("index.php?page=checkusername",o);console.log("got email back "+t);var n=$.post("index.php?page=home",e);n.done(function(e){console.log("Got data back "+e)})}return e}()},{}],7:[function(e,o){o.exports=function(){function e(){console.log("[Postit] constructor")}return e}()},{}],8:[function(e,o){o.exports=function(){function e(){console.log("[Project] constructor")}return e}()},{}]},{},[1]);
//# sourceMappingURL=script.dist.js.map