let wordLen, i, randInd;
let word;
let romaji = "";
let sn = 1;
let ps = ns = 0;

window.onload = function() {
  document.getElementById("btn01").focus();
}

function genWord(){
    word = "";  
    wordLen = Math.floor(Math.random() * (8-0))+1;
    for(i=0; i<=wordLen; i++){
        randInd = Math.floor(Math.random() * (45-0)) + 1;
        word = word+basicHiragana[randInd];
    }

    romaji = wanakana.toRomaji(word); /*'\u002c\u0020' = comma space*/

    document.getElementById("display").innerHTML = word;
    document.getElementById("btn01").disabled = true;
    document.getElementById("btn02").disabled = false;
    document.getElementById("answer").value = "";
    document.getElementById("romaji").innerHTML = "";
    document.getElementById("answer").focus();
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
}

function checkAns(){
    let x = document.getElementById("answer").value.toLowerCase();
    document.getElementById("btn02").disabled = true;
    document.getElementById("btn01").disabled = false;
    document.getElementById("btn01").focus();

    if (x == romaji){
    document.getElementById("romaji").innerHTML = "Correct";
    document.getElementById("ps").innerHTML = ++ps;
    }
    else{
    document.getElementById("ns").innerHTML = ++ns;
    document.getElementById("romaji").innerHTML = "The correct answer is: " + romaji;
    }
    
}

function reset(){
    document.getElementById("btn01").disabled = false;
    document.getElementById("btn02").disabled = true;
    ps = ns = 0;
    document.getElementById("ps").innerHTML = 0;
    document.getElementById("ns").innerHTML = 0;
    document.getElementById("display").innerHTML = "";
    
}

var ans = document.getElementById("answer");
ans.addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        event.preventDefault();
        document.getElementById("btn02").click();
    }
});

// addEventListener("keypress", function(event){
//     if(event.key == "r"){
//         event.preventDefault();
//         reset()
//     }
// });

let numerals = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"]

let basicHiragana = ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も" , "や", "ゆ", "よ" , "ら", "り", "る", "れ", "ろ" , "わ", "を", "ん"]

let advHiragana = ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も" , "や", "ゆ", "よ" , "ら", "り", "る", "れ", "ろ" , "わ", "ん", "ゐ", "ゑ", "を", "が", "ぎ", "ぐ", "げ", "ご" , "ざ", "じ", "ず", "ぜ", "ぞ" , "だ", "ぢ", "づ", "で", "ど", "ば", "び", "ぶ", "べ", "ぼ" , "ぱ", "ぴ", "ぷ", "ぺ", "ぽ" , "ゔぁ", "ゔぃ", "ゔ", "ゔぇ", "ゔぉ" ]


//wanakana code
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((n="undefined"!=typeof globalThis?globalThis:n||self).wanakana={})}(this,(function(n){"use strict";function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},t(n)}function e(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,o,i=[],a=!0,u=!1;try{for(e=e.call(n);!(a=(r=e.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(n){u=!0,o=n}finally{try{a||null==e.return||e.return()}finally{if(u)throw o}}return i}(n,t)||o(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(n){return function(n){if(Array.isArray(n))return i(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||o(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n,t){if(n){if("string"==typeof n)return i(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(n,t):void 0}}function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function a(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=o(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return u=n.done,n},e:function(n){c=!0,a=n},f:function(){try{u||null==e.return||e.return()}finally{if(c)throw a}}}}function u(n){return null===n?"null":n!==Object(n)?t(n):{}.toString.call(n).slice(8,-1).toLowerCase()}function c(n){return"string"!==u(n)||!n.length}function f(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,e=arguments.length>2?arguments[2]:void 0;if(c(n))return!1;var r=n.charCodeAt(0);return t<=r&&r<=e}var s={HIRAGANA:"toHiragana",KATAKANA:"toKatakana"},l={HEPBURN:"hepburn"},v={useObsoleteKana:!1,passRomaji:!1,upcaseKatakana:!1,IMEMode:!1,convertLongVowelMark:!0,romanization:l.HEPBURN},d=12353,h=12449,g=[65377,65381],p=[[12288,12351],g,[12539,12540],[65281,65295],[65306,65311],[65339,65343],[65371,65376],[65504,65518]],y=[].concat([[12352,12447],[12448,12543],g,[65382,65439]],p,[[65313,65338],[65345,65370],[65296,65305],[19968,40959],[13312,19903]]),m=[[0,127]].concat([[256,257],[274,275],[298,299],[332,333],[362,363]]),b=[[32,47],[58,63],[91,96],[123,126]].concat([[8216,8217],[8220,8221]]);function j(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return y.some((function(t){var r=e(t,2),o=r[0],i=r[1];return f(n,o,i)}))}function O(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,e="regexp"===u(t);return!c(n)&&r(n).every((function(n){var r=j(n);return e?r||t.test(n):r}))}var E=Number.isNaN||function(n){return"number"==typeof n&&n!=n};function w(n,t){if(n.length!==t.length)return!1;for(var e=0;e<n.length;e++)if(r=n[e],o=t[e],!(r===o||E(r)&&E(o)))return!1;var r,o;return!0}function A(n,t){void 0===t&&(t=w);var e=null;function r(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(e&&e.lastThis===this&&t(r,e.lastArgs))return e.lastResult;var i=n.apply(this,r);return e={lastResult:i,lastArgs:r,lastThis:this},i}return r.clear=function(){e=null},r}var S=Object.prototype.hasOwnProperty;function k(n,t,e){var r,o=a(n.keys());try{for(o.s();!(r=o.n()).done;)if(N(e=r.value,t))return e}catch(n){o.e(n)}finally{o.f()}}function N(n,e){var r,o,i;if(n===e)return!0;if(n&&e&&(r=n.constructor)===e.constructor){if(r===Date)return n.getTime()===e.getTime();if(r===RegExp)return n.toString()===e.toString();if(r===Array){if((o=n.length)===e.length)for(;o--&&N(n[o],e[o]););return-1===o}if(r===Set){if(n.size!==e.size)return!1;var u,c=a(n);try{for(c.s();!(u=c.n()).done;){if((i=o=u.value)&&"object"===t(i)&&!(i=k(e,i)))return!1;if(!e.has(i))return!1}}catch(n){c.e(n)}finally{c.f()}return!0}if(r===Map){if(n.size!==e.size)return!1;var f,s=a(n);try{for(s.s();!(f=s.n()).done;){if((i=(o=f.value)[0])&&"object"===t(i)&&!(i=k(e,i)))return!1;if(!N(o[1],e.get(i)))return!1}}catch(n){s.e(n)}finally{s.f()}return!0}if(r===ArrayBuffer)n=new Uint8Array(n),e=new Uint8Array(e);else if(r===DataView){if((o=n.byteLength)===e.byteLength)for(;o--&&n.getInt8(o)===e.getInt8(o););return-1===o}if(ArrayBuffer.isView(n)){if((o=n.byteLength)===e.byteLength)for(;o--&&n[o]===e[o];);return-1===o}if(!r||"object"===t(n)){for(r in o=0,n){if(S.call(n,r)&&++o&&!S.call(e,r))return!1;if(!(r in e)||!N(n[r],e[r]))return!1}return Object.keys(e).length===o}}return n!=n&&e!=e}var M=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign({},v,n)};function R(n,t,e){var r=t;function o(n,t){var e=n.charAt(0);return i(Object.assign({"":e},r[e]),n.slice(1),t,t+1)}function i(n,t,r,a){if(!t)return e||1===Object.keys(n).length?n[""]?[[r,a,n[""]]]:[]:[[r,a,null]];if(1===Object.keys(n).length)return[[r,a,n[""]]].concat(o(t,a));var u=function(n,t){if(void 0!==n[t])return Object.assign({"":n[""]+t},n[t])}(n,t.charAt(0));return void 0===u?[[r,a,n[""]]].concat(o(t,a)):i(u,t.slice(1),r,a+1)}return o(n,0)}function C(n){return Object.entries(n).reduce((function(n,t){var r=e(t,2),o=r[0],i=r[1],a="string"===u(i);return n[o]=a?{"":i}:C(i),n}),{})}function I(n,t){return t.split("").reduce((function(n,t){return void 0===n[t]&&(n[t]={}),n[t]}),n)}function K(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return"object"===u(n)&&Object.entries(n).forEach((function(n){var r=e(n,2),o=r[0],i=r[1],a=t;o.split("").forEach((function(n){void 0===a[n]&&(a[n]={}),a=a[n]})),a[""]=i})),function(n){return function n(t,r){return void 0===t||"string"===u(t)?r:Object.entries(r).reduce((function(r,o){var i=e(o,2),a=i[0],u=i[1];return r[a]=n(t[a],u),r}),t)}(JSON.parse(JSON.stringify(n)),t)}}function z(n,t){return t?"function"===u(t)?t(n):K(t)(n):n}var L={a:"あ",i:"い",u:"う",e:"え",o:"お",k:{a:"か",i:"き",u:"く",e:"け",o:"こ"},s:{a:"さ",i:"し",u:"す",e:"せ",o:"そ"},t:{a:"た",i:"ち",u:"つ",e:"て",o:"と"},n:{a:"な",i:"に",u:"ぬ",e:"ね",o:"の"},h:{a:"は",i:"ひ",u:"ふ",e:"へ",o:"ほ"},m:{a:"ま",i:"み",u:"む",e:"め",o:"も"},y:{a:"や",u:"ゆ",o:"よ"},r:{a:"ら",i:"り",u:"る",e:"れ",o:"ろ"},w:{a:"わ",i:"ゐ",e:"ゑ",o:"を"},g:{a:"が",i:"ぎ",u:"ぐ",e:"げ",o:"ご"},z:{a:"ざ",i:"じ",u:"ず",e:"ぜ",o:"ぞ"},d:{a:"だ",i:"ぢ",u:"づ",e:"で",o:"ど"},b:{a:"ば",i:"び",u:"ぶ",e:"べ",o:"ぼ"},p:{a:"ぱ",i:"ぴ",u:"ぷ",e:"ぺ",o:"ぽ"},v:{a:"ゔぁ",i:"ゔぃ",u:"ゔ",e:"ゔぇ",o:"ゔぉ"}},T={".":"。",",":"、",":":"：","/":"・","!":"！","?":"？","~":"〜","-":"ー","‘":"「","’":"」","“":"『","”":"』","[":"［","]":"］","(":"（",")":"）","{":"｛","}":"｝"},x={k:"き",s:"し",t:"ち",n:"に",h:"ひ",m:"み",r:"り",g:"ぎ",z:"じ",d:"ぢ",b:"び",p:"ぴ",v:"ゔ",q:"く",f:"ふ"},J={ya:"ゃ",yi:"ぃ",yu:"ゅ",ye:"ぇ",yo:"ょ"},H={a:"ぁ",i:"ぃ",u:"ぅ",e:"ぇ",o:"ぉ"},U={sh:"sy",ch:"ty",cy:"ty",chy:"ty",shy:"sy",j:"zy",jy:"zy",shi:"si",chi:"ti",tsu:"tu",ji:"zi",fu:"hu"},P=Object.assign({tu:"っ",wa:"ゎ",ka:"ヵ",ke:"ヶ"},H,J),D={yi:"い",wu:"う",ye:"いぇ",wi:"うぃ",we:"うぇ",kwa:"くぁ",whu:"う",tha:"てゃ",thu:"てゅ",tho:"てょ",dha:"でゃ",dhu:"でゅ",dho:"でょ"},q={wh:"う",kw:"く",qw:"く",q:"く",gw:"ぐ",sw:"す",ts:"つ",th:"て",tw:"と",dh:"で",dw:"ど",fw:"ふ",f:"ふ"};function B(){var n=C(L),t=function(t){return I(n,t)};function o(n){return Object.entries(n).reduce((function(n,t){var r=e(t,2),i=r[0],a=r[1];return n[i]=i?o(a):"っ".concat(a),n}),{})}return Object.entries(x).forEach((function(n){var r=e(n,2),o=r[0],i=r[1];Object.entries(J).forEach((function(n){var r=e(n,2),a=r[0],u=r[1];t(o+a)[""]=i+u}))})),Object.entries(T).forEach((function(n){var r=e(n,2),o=r[0],i=r[1];t(o)[""]=i})),Object.entries(q).forEach((function(n){var r=e(n,2),o=r[0],i=r[1];Object.entries(H).forEach((function(n){var r=e(n,2),a=r[0],u=r[1];t(o+a)[""]=i+u}))})),["n","n'","xn"].forEach((function(n){t(n)[""]="ん"})),n.c=JSON.parse(JSON.stringify(n.k)),Object.entries(U).forEach((function(n){var r=e(n,2),o=r[0],i=r[1],a=o.slice(0,o.length-1),u=o.charAt(o.length-1);t(a)[u]=JSON.parse(JSON.stringify(t(i)))})),Object.entries(P).forEach((function(n){var o,i=e(n,2),a=i[0],u=i[1],c=function(n){return n.charAt(n.length-1)},f=function(n){return n.slice(0,n.length-1)},s="x".concat(a),l=t(s);l[""]=u,t("l".concat(f(a)))[c(a)]=l,(o=a,[].concat(r(Object.entries(U)),[["c","k"]]).reduce((function(n,t){var r=e(t,2),i=r[0],a=r[1];return o.startsWith(a)?n.concat(o.replace(a,i)):n}),[])).forEach((function(n){["l","x"].forEach((function(e){t(e+f(n))[c(n)]=t(e+a)}))}))})),Object.entries(D).forEach((function(n){var r=e(n,2),o=r[0],i=r[1];t(o)[""]=i})),[].concat(r(Object.keys(x)),["c","y","w","j"]).forEach((function(t){var e=n[t];e[t]=o(e)})),delete n.n.n,Object.freeze(JSON.parse(JSON.stringify(n)))}var V=null;var W=K({wi:"ゐ",we:"ゑ"});function G(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return!c(n)&&f(n,65,90)}function $(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return!c(n)&&12540===n.charCodeAt(0)}function _(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return!c(n)&&12539===n.charCodeAt(0)}function X(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return!c(n)&&(!!$(n)||f(n,d,12438))}function Z(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];return n.split("").forEach((function(n){if($(n)||_(n))t.push(n);else if(X(n)){var e=n.charCodeAt(0)+96,r=String.fromCharCode(e);t.push(r)}else t.push(n)})),t.join("")}var F=A((function(n,t,e){var r=(null==V&&(V=B()),V);return r=n?function(n){var t=JSON.parse(JSON.stringify(n));return t.n.n={"":"ん"},t.n[" "]={"":"ん"},t}(r):r,r=t?W(r):r,e&&(r=z(r,e)),r}),N);function Q(){var n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;return i?n=o:(n=M(o),i=F(n.IMEMode,n.useObsoleteKana,n.customKanaMapping)),Y(t,n,i).map((function(o){var i=e(o,3),a=i[0],u=i[1],c=i[2];if(null===c)return t.slice(a);var f=n.IMEMode===s.HIRAGANA,l=n.IMEMode===s.KATAKANA||r(t.slice(a,u)).every(G);return f||!l?c:Z(c)})).join("")}function Y(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2?arguments[2]:void 0,r=t.IMEMode,o=t.useObsoleteKana,i=t.customKanaMapping;return e||(e=F(r,o,i)),R(n.toLowerCase(),e,!r)}var nn=[];function tn(n){var t=Object.assign({},M(n),{IMEMode:n.IMEMode||!0}),o=F(t.IMEMode,t.useObsoleteKana,t.customKanaMapping),i=[].concat(r(Object.keys(o)),r(Object.keys(o).map((function(n){return n.toUpperCase()}))));return function(n){var r=n.target;undefined!==r.value&&"true"!==r.dataset.ignoreComposition&&function(n,t,r,o,i){var a=e(function(){var n,t,r,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(0===i&&a.includes(o[0])){var u=e(un(o,a),3);n=u[0],t=u[1],r=u[2]}else if(i>0){var c=e(cn(o,i),3);n=c[0],t=c[1],r=c[2]}else{var f=e(fn(o,(function(n){return!a.includes(n)})),2);n=f[0];var s=e(fn(t=f[1],(function(n){return!O(n)})),2);t=s[0],r=s[1]}return[n,t,r]}(n.value,n.selectionEnd,o),3),u=a[0],c=a[1],f=a[2],s=Q(c,t,r);if(c!==s){var l=u.length+s.length,v=u+s+f;n.value=v,f.length?setTimeout((function(){return n.setSelectionRange(l,l)}),1):n.setSelectionRange(l,l)}}(r,t,o,i)}}function en(n){var t=n.type,e=n.target,r=n.data;/Mac/.test(window.navigator&&window.navigator.platform)&&("compositionupdate"===t&&O(r)&&(e.dataset.ignoreComposition="true"),"compositionend"===t&&(e.dataset.ignoreComposition="false"))}function rn(n,t,e){nn=nn.concat({id:n,inputHandler:t,compositionHandler:e})}function on(n){var t=n.id;nn=nn.filter((function(n){return n.id!==t}))}function an(n){return n&&nn.find((function(t){return t.id===n.getAttribute("data-wanakana-id")}))}function un(n,t){return[""].concat(r(fn(n,(function(n){return t.includes(n)||!O(n,/[0-9]/)}))))}function cn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=fn(r(n.slice(0,t)).reverse(),(function(n){return!O(n)})),i=e(o,2),a=i[0],u=i[1];return[u.reverse().join(""),a.split("").reverse().join(""),n.slice(t)]}function fn(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(n){return!!n},e=[],r=n.length,o=0;o<r&&t(n[o],o);)e.push(n[o]),o+=1;return[e.join(""),n.slice(o)]}var sn={input:function(n){var t=n.target,e=t.value,r=t.selectionStart,o=t.selectionEnd;return console.log("input:",{value:e,selectionStart:r,selectionEnd:o})},compositionstart:function(){return console.log("compositionstart")},compositionupdate:function(n){var t=n.target,e=t.value,r=t.selectionStart,o=t.selectionEnd,i=n.data;return console.log("compositionupdate",{data:i,value:e,selectionStart:r,selectionEnd:o})},compositionend:function(){return console.log("compositionend")}},ln=function(n){Object.entries(sn).forEach((function(t){var r=e(t,2),o=r[0],i=r[1];return n.addEventListener(o,i)}))},vn=function(n){Object.entries(sn).forEach((function(t){var r=e(t,2),o=r[0],i=r[1];return n.removeEventListener(o,i)}))},dn=["TEXTAREA","INPUT"],hn=0,gn=function(){return hn+=1,"".concat(Date.now()).concat(hn)};function pn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return!c(n)&&m.some((function(t){var r=e(t,2),o=r[0],i=r[1];return f(n,o,i)}))}function yn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,e="regexp"===u(t);return!c(n)&&r(n).every((function(n){var r=pn(n);return e?r||t.test(n):r}))}function mn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return f(n,h,12540)}function bn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return!c(n)&&(X(n)||mn(n))}function jn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return!c(n)&&r(n).every(bn)}function On(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return!c(n)&&r(n).every(X)}function En(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return!c(n)&&r(n).every(mn)}function wn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return f(n,19968,40879)}function An(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return!c(n)&&r(n).every(wn)}function Sn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{passKanji:!0},e=r(n),o=!1;return t.passKanji||(o=e.some(An)),(e.some(On)||e.some(En))&&e.some(yn)&&!o}var kn=function(n,t){return $(n)&&t<1},Nn=function(n,t){return $(n)&&t>0},Mn=function(n){return["ヶ","ヵ"].includes(n)},Rn={a:"あ",i:"い",u:"う",e:"え",o:"う"};function Cn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.isDestinationRomaji,o=e.convertLongVowelMark,i="";return n.split("").reduce((function(e,a,u){if(_(a)||kn(a,u)||Mn(a))return e.concat(a);if(o&&i&&Nn(a,u)){var c=t(i).slice(-1);return mn(n[u-1])&&"o"===c&&r?e.concat("お"):e.concat(Rn[c])}if(!$(a)&&mn(a)){var f=a.charCodeAt(0)+-96,s=String.fromCharCode(f);return i=s,e.concat(s)}return i="",e.concat(a)}),[]).join("")}var In=null,Kn={"あ":"a","い":"i","う":"u","え":"e","お":"o","か":"ka","き":"ki","く":"ku","け":"ke","こ":"ko","さ":"sa","し":"shi","す":"su","せ":"se","そ":"so","た":"ta","ち":"chi","つ":"tsu","て":"te","と":"to","な":"na","に":"ni","ぬ":"nu","ね":"ne","の":"no","は":"ha","ひ":"hi","ふ":"fu","へ":"he","ほ":"ho","ま":"ma","み":"mi","む":"mu","め":"me","も":"mo","ら":"ra","り":"ri","る":"ru","れ":"re","ろ":"ro","や":"ya","ゆ":"yu","よ":"yo","わ":"wa","ゐ":"wi","ゑ":"we","を":"wo","ん":"n","が":"ga","ぎ":"gi","ぐ":"gu","げ":"ge","ご":"go","ざ":"za","じ":"ji","ず":"zu","ぜ":"ze","ぞ":"zo","だ":"da","ぢ":"ji","づ":"zu","で":"de","ど":"do","ば":"ba","び":"bi","ぶ":"bu","べ":"be","ぼ":"bo","ぱ":"pa","ぴ":"pi","ぷ":"pu","ぺ":"pe","ぽ":"po","ゔぁ":"va","ゔぃ":"vi","ゔ":"vu","ゔぇ":"ve","ゔぉ":"vo"},zn={"。":".","、":",","：":":","・":"/","！":"!","？":"?","〜":"~","ー":"-","「":"‘","」":"’","『":"“","』":"”","［":"[","］":"]","（":"(","）":")","｛":"{","｝":"}","　":" "},Ln=["あ","い","う","え","お","や","ゆ","よ"],Tn={"ゃ":"ya","ゅ":"yu","ょ":"yo"},xn={"ぃ":"yi","ぇ":"ye"},Jn={"ぁ":"a","ぃ":"i","ぅ":"u","ぇ":"e","ぉ":"o"},Hn=["き","に","ひ","み","り","ぎ","び","ぴ","ゔ","く","ふ"],Un={"し":"sh","ち":"ch","じ":"j","ぢ":"j"},Pn={"っ":"","ゃ":"ya","ゅ":"yu","ょ":"yo","ぁ":"a","ぃ":"i","ぅ":"u","ぇ":"e","ぉ":"o"},Dn={b:"b",c:"t",d:"d",f:"f",g:"g",h:"h",j:"j",k:"k",m:"m",p:"p",q:"q",r:"r",s:"s",t:"t",v:"v",w:"w",x:"x",z:"z"};function qn(){var n,t,o;return null==In&&(n=C(Kn),t=function(t){return I(n,t)},o=function(n,e){t(n)[""]=e},Object.entries(zn).forEach((function(n){var r=e(n,2),o=r[0],i=r[1];t(o)[""]=i})),[].concat(r(Object.entries(Tn)),r(Object.entries(Jn))).forEach((function(n){var t=e(n,2),r=t[0],i=t[1];o(r,i)})),Hn.forEach((function(n){var r=t(n)[""][0];Object.entries(Tn).forEach((function(t){var i=e(t,2),a=i[0],u=i[1];o(n+a,r+u)})),Object.entries(xn).forEach((function(t){var i=e(t,2),a=i[0],u=i[1];o(n+a,r+u)}))})),Object.entries(Un).forEach((function(n){var t=e(n,2),r=t[0],i=t[1];Object.entries(Tn).forEach((function(n){var t=e(n,2),a=t[0],u=t[1];o(r+a,i+u[1])})),o("".concat(r,"ぃ"),"".concat(i,"yi")),o("".concat(r,"ぇ"),"".concat(i,"e"))})),n["っ"]=Bn(n),Object.entries(Pn).forEach((function(n){var t=e(n,2),r=t[0],i=t[1];o(r,i)})),Ln.forEach((function(n){o("ん".concat(n),"n'".concat(t(n)[""]))})),In=Object.freeze(JSON.parse(JSON.stringify(n)))),In}function Bn(n){return Object.entries(n).reduce((function(n,t){var r=e(t,2),o=r[0],i=r[1];if(o)n[o]=Bn(i);else{var a=i.charAt(0);n[o]=Object.keys(Dn).includes(a)?Dn[a]+i:i}return n}),{})}var Vn=A((function(n,t){var e=function(n){return n===l.HEPBURN?qn():{}}(n);return t&&(e=z(e,t)),e}),N);function Wn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=M(t);return r||(r=Vn(o.romanization,o.customRomajiMapping)),Gn(n,o,r).map((function(t){var r=e(t,3),i=r[0],a=r[1],u=r[2];return o.upcaseKatakana&&En(n.slice(i,a))?u.toUpperCase():u})).join("")}function Gn(n,t,e){return e||(e=Vn(t.romanization,t.customRomajiMapping)),R(Cn(n,Wn,Object.assign({},{isDestinationRomaji:!0},t)),e,!t.IMEMode)}function $n(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return!c(n)&&b.some((function(t){var r=e(t,2),o=r[0],i=r[1];return f(n,o,i)}))}function _n(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return!c(n)&&p.some((function(t){var r=e(t,2),o=r[0],i=r[1];return f(n,o,i)}))}var Xn=function(n){return" "===n},Zn=function(n){return"　"===n},Fn=function(n){return/[０-９]/.test(n)},Qn=function(n){return/[0-9]/.test(n)},Yn="en",nt="ja",tt="englishNumeral",et="japaneseNumeral",rt="englishPunctuation",ot="japanesePunctuation",it="kanji",at="hiragana",ut="katakana",ct="space",ft="other";function st(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=Yn,r=nt,o=tt,i=et,a=rt,u=ot,c=it,f=at,s=ut,l=ct,v=ft;if(t)switch(!0){case Fn(n):case Qn(n):return v;case Xn(n):return e;case $n(n):return v;case Zn(n):return r;case _n(n):return v;case j(n):return r;case pn(n):return e;default:return v}else switch(!0){case Zn(n):case Xn(n):return l;case Fn(n):return i;case Qn(n):return o;case $n(n):return a;case _n(n):return u;case wn(n):return c;case X(n):return f;case mn(n):return s;case j(n):return r;case pn(n):return e;default:return v}}function lt(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.compact,o=void 0!==e&&e,i=t.detailed,a=void 0!==i&&i;if(null==n||c(n))return[];var u=r(n),f=u.shift(),s=st(f,o);f=a?{type:s,value:f}:f;var l=u.reduce((function(n,t){var e=st(t,o),r=e===s;s=e;var i=t;return r&&(i=(a?n.pop().value:n.pop())+i),a?n.concat({type:e,value:i}):n.concat(i)}),[f]);return l}var vt=function(n,t){return t&&!jn(n[0])},dt=function(n,t){return!t&&!jn(n[n.length-1])},ht=function(n,t){return t&&!r(t).some(An)||!t&&jn(n)};n.ROMANIZATIONS=l,n.TO_KANA_METHODS=s,n.VERSION="5.0.2",n.bind=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!dn.includes(n.nodeName))throw new Error("Element provided to Wanakana bind() was not a valid input or textarea element.\n Received: (".concat(JSON.stringify(n),")"));var r=tn(t),o=gn();n.setAttribute("data-wanakana-id",o),n.setAttribute("lang","ja"),n.setAttribute("autoCapitalize","none"),n.setAttribute("autoCorrect","off"),n.setAttribute("autoComplete","off"),n.setAttribute("spellCheck","false"),n.addEventListener("input",r),n.addEventListener("compositionupdate",en),n.addEventListener("compositionend",en),rn(o,r,en),!0===e&&ln(n)},n.isHiragana=On,n.isJapanese=O,n.isKana=jn,n.isKanji=An,n.isKatakana=En,n.isMixed=Sn,n.isRomaji=yn,n.stripOkurigana=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.leading,r=void 0!==e&&e,o=t.matchKanji,i=void 0===o?"":o;if(!O(n)||vt(n,r)||dt(n,r)||ht(n,i))return n;var a=i||n,u=new RegExp(r?"^".concat(lt(a).shift()):"".concat(lt(a).pop(),"$"));return n.replace(u,"")},n.toHiragana=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=M(t);if(e.passRomaji)return Cn(n,Wn,e);if(Sn(n,{passKanji:!0})){var r=Cn(n,Wn,e);return Q(r.toLowerCase(),e)}return yn(n)||$n(n)?Q(n.toLowerCase(),e):Cn(n,Wn,e)},n.toKana=Q,n.toKatakana=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=M(t);if(e.passRomaji)return Z(n);if(Sn(n)||yn(n)||$n(n)){var r=Q(n.toLowerCase(),e);return Z(r)}return Z(n)},n.toRomaji=Wn,n.tokenize=lt,n.unbind=function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=an(n);if(null==e)throw new Error("Element provided to Wanakana unbind() had no listener registered.\n Received: ".concat(JSON.stringify(n)));var r=e.inputHandler,o=e.compositionHandler;n.removeAttribute("data-wanakana-id"),n.removeAttribute("data-ignore-composition"),n.removeEventListener("input",r),n.removeEventListener("compositionstart",o),n.removeEventListener("compositionupdate",o),n.removeEventListener("compositionend",o),on(e),!0===t&&vn(n)}}));
