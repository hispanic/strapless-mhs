var generateFavicon=function(){console.log("generate fav");var e=document.createElement("canvas"),t,n=document.getElementById("favicon"),o=document.getElementById("get_color1"),l=document.getElementById("get_color2"),c=document.getElementById("get_color3"),d=document.getElementById("get_color4");if(e.getContext){e.height=e.width=16,t=e.getContext("2d");var s=window.getComputedStyle(o).color,i=window.getComputedStyle(l).color,a=window.getComputedStyle(c).color,r=window.getComputedStyle(d).color;t.fillStyle=s,t.fillRect(1,1,7,7),t.fillStyle=i,t.fillRect(9,9,15,15),t.fillStyle=a,t.fillRect(9,1,15,7),t.fillStyle=r,t.fillRect(1,9,7,15),n.href=e.toDataURL("image/png")}},writeLessFiles=function(){return new Promise(function(e,t){var n=document.createElement("link");n.id="less_css",n.rel="stylesheet/less",n.type="text/css",n.href="/less/index.less?v="+Date.now(),document.head.appendChild(n);var o=document.createElement("script");o.id="less_js",o.type="text/javascript",o.src="/js/dev/less.min.js",o.onload=function(){e()},document.head.appendChild(o)})},updateScheme=function(){event.preventDefault();var e="#"+document.getElementById("seed_color").value,t="#"+document.getElementById("background_color").value,n=document.getElementById("color_wheel").value;return document.getElementById("less_js")?(less.modifyVars({"@base-color":e}),less.pageLoadFinished.then(function(){generateFavicon()})):writeLessFiles().then(function(){less.modifyVars({"@background":t,"@base-color":e,"@color-wheel":n}),less.pageLoadFinished.then(function(){generateFavicon()})}),!1};!function(){generateFavicon()}();