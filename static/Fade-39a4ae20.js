import{g as D}from"./index-69117898.js";import{p as q,g as C,w as R}from"./wrap-045123f0.js";var y={},S={get exports(){return y},set exports(_){y=_}};(function(_,h){function j(o){return o&&o.__esModule?o:{default:o}}function E(o,r){var a={};for(var e in o)r.indexOf(e)>=0||Object.prototype.hasOwnProperty.call(o,e)&&(a[e]=o[e]);return a}function P(o,r){var a=r.distance,e=r.left,n=r.right,i=r.up,s=r.down,u=r.top,p=r.bottom,m=r.big,v=r.mirror,b=r.opposite,l=(a?a.toString():0)+((e?1:0)|(n?2:0)|(u||s?4:0)|(p||i?8:0)|(v?16:0)|(b?32:0)|(o?64:0)|(m?128:0));if(g.hasOwnProperty(l))return g[l];var w=e||n||i||s||u||p,F=void 0,O=void 0;if(w){if(!v!=!(o&&b)){var d=[n,e,p,u,s,i];e=d[0],n=d[1],u=d[2],p=d[3],i=d[4],s=d[5]}var c=a||(m?"2000px":"100%");F=e?"-"+c:n?c:"0",O=s||u?"-"+c:i||p?c:"0"}return g[l]=(0,f.animation)((o?"to":"from")+" {opacity: 0;"+(w?" transform: translate3d("+F+", "+O+", 0);":"")+`}
     `+(o?"from":"to")+" {opacity: 1;transform: none;} "),g[l]}function x(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:f.defaults,r=arguments.length>1&&arguments[1]!==void 0&&arguments[1],a=o.children,e=(o.out,o.forever),n=o.timeout,i=o.duration,s=i===void 0?f.defaults.duration:i,u=o.delay,p=u===void 0?f.defaults.delay:u,m=o.count,v=m===void 0?f.defaults.count:m,b=E(o,["children","out","forever","timeout","duration","delay","count"]),l={make:P,duration:n===void 0?s:n,delay:p,forever:e,count:v,style:{animationFillMode:"both"},reverse:b.left};return r?(0,k.default)(b,l,l,a):l}Object.defineProperty(h,"__esModule",{value:!0});var t=q,f=C,T=R,k=j(T),M={out:t.bool,left:t.bool,right:t.bool,top:t.bool,bottom:t.bool,big:t.bool,mirror:t.bool,opposite:t.bool,duration:t.number,timeout:t.number,distance:t.string,delay:t.number,count:t.number,forever:t.bool},g={};x.propTypes=M,h.default=x,_.exports=h.default})(S,y);const z=D(y);export{z as F,y as a};
