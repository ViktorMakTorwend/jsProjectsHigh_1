(()=>{"use strict";let e={};const t=function(t,n){var o;e[o=t]||(e[o]=[]),e[o].push((function(e){alert("It's time for "+e)})),console.log(e),setInterval((function(){let o=new Date,c=o.getHours()+":"+o.getMinutes()+":"+o.getSeconds();n==c&&function(t,n){if(e[t])for(let o of e[t])o(n)}(t,t+" "+c)}),1e3)},n=function(t){e[t]&&delete e[t],console.log(e)};let o=document.querySelector("#btnCreateRem"),c=document.querySelector("#btnDeleteRem"),u=document.querySelector("#inpText"),l=document.querySelector("#inpTime");o.addEventListener("click",(function(){t(u.value,l.value),u.value="",l.value=""})),c.addEventListener("click",(function(){n(u.value)}))})();