(()=>{var r={451:r=>{function t(r){let t=0;for(let n of r)t+=+n;return t}r.exports={square:function(r){return r**2},cube:function(r){return r**3},avg:function(r){return t(r)/r.length},digitsSum:function(r){return t(String(r).split(""))}}}},t={};function n(e){var u=t[e];if(void 0!==u)return u.exports;var o=t[e]={exports:{}};return r[e](o,o.exports,n),o.exports}(()=>{let r=n(451),t=r.cube(2)+r.square(2);console.log(t)})()})();