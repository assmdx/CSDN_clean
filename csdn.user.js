// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://blog.csdn.net/u013165921/article/details/78230778
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //删除广告
    var child=document.querySelector("body > div.pulllog-box");
    child.parentNode.removeChild(child);

    var child2 =document.querySelector("#kp_box_476 > div > div.light-box");
    child2.parentNode.removeChild(child2);


    var child3 =document.querySelector("#inlineFrameExample");
    child3.parentNode.removeChild(child3);


    var child4 =document.querySelector("#adContent");
    child4.parentNode.removeChild(child4);

    //点击阅读更多
    var e = document.createEvent("MouseEvents");
    e.initEvent("click", true, true);　　　　　　　　　　　　　　//这里的click可以换成你想触发的行为
    document.getElementById("btn-readmore").dispatchEvent(e);　　　//这里的clickME可以换成你想触发行为的DOM结点
})();