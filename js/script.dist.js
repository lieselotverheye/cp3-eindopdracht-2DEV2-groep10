!function e(t,n,o){function r(s,i){if(!n[s]){if(!t[s]){var a="function"==typeof require&&require;if(!i&&a)return a(s,!0);if(c)return c(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return r(n?n:e)},l,l.exports,e,t,n,o)}return n[s].exports}for(var c="function"==typeof require&&require,s=0;s<o.length;s++)r(o[s]);return r}({1:[function(e){!function(){function t(e){switch(e.preventDefault(),e.currentTarget.getAttribute("data-control")){case"add_project":r();break;case"invite_user":c();break;case"save_project":s();break;case"delete_project":i();break;case"add_image":a();break;case"add_post-it":u();break;case"add_video":l()}}function n(){Array.prototype.forEach.call(document.getElementsByTagName("a"),function(e){e.addEventListener("click",t),e.getAttribute("data-control")||console.log("does not contain data control")}),o()}function o(){var e={image_url:"assets/images/2014-11-30-sunday-rec-projects-bucks-dinosaurs.jpg"},t={image_url:"assets/images/2014-11-30-sunday-rec-projects-wiersma-family-crest.jpg"},n=[e,t];a(n)}function r(){new v}function c(){new g}function s(){console.log("save project")}function i(){console.log("delete_project")}function a(e){if(e instanceof Array)for(var t=0;t<e.length;t++){var n=new f(e[t]);$("#container").append(n.el),bean.on(n,"remove",removeHandler.bind(n))}else e instanceof String&&console.log(e+" is a string")}function u(){new p}function l(){new d}var f=e("./classes/BbImage"),d=e("./classes/BbVideo"),g=e("./classes/Invite"),p=e("./classes/Postit"),v=e("./classes/Project");this.removeHandler=function(e){console.log("aargh"),this.el.removeChild(e.el)},n()}()},{"./classes/BbImage":2,"./classes/BbVideo":3,"./classes/Invite":4,"./classes/Postit":5,"./classes/Project":6}],2:[function(e,t){t.exports=function(){function e(e){console.log("[BbImage] constructor");var t=Handlebars.compile($("#imageTemplate").text()),n=t(e);this.el=$(n),this.removeButton=$(".btn-delete"),bean.on(this.removeButton,"click",this.removeClickHandler.bind(this))}return e.prototype.removeClickHandler=function(){bean.fire(this,"remove",this)},e}()},{}],3:[function(e,t){t.exports=function(){function e(e){this.el=e,console.log("[BbVideo] constructor")}return e}()},{}],4:[function(e,t){t.exports=function(){function e(){console.log("[Invite] constructor")}return e}()},{}],5:[function(e,t){t.exports=function(){function e(){console.log("[Postit] constructor")}return e}()},{}],6:[function(e,t){t.exports=function(){function e(){console.log("[Project] constructor")}return e}()},{}]},{},[1]);
//# sourceMappingURL=script.dist.js.map