var r=Object.defineProperty;var c=(e,t,i)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var s=(e,t,i)=>(c(e,typeof t!="symbol"?t+"":t,i),i);class h{constructor(){s(this,"retryCount",0);s(this,"maxRetry",5);this.init()}init(){this.printBoiler(),this.emitLog("tag",{msg:"initialized"}),this.jstagReady(),this.addListeners()}addListeners(){window.addEventListener("message",t=>{if(t.source===window)switch(t.data.action){case"getConfig":this.emitLog("tag","get config"),this.getConfig();break;case"getEntity":this.emitLog("tag","get entity"),this.getEntity();break;case"getUID":this.emitLog("tag","get UID");break;case"getExperiences":this.emitLog("tag","get experiences");break;default:this.emitLog("tag",`invalid action: ${t.data.action}`);break}})}emitLog(t,i){console.log(`lyticsdev ::: ${t} ::`,i)}jstagReady(){if(this.retryCount++,this.retryCount>=this.maxRetry){this.emitLog("tag",{msg:"max retry reached"});return}typeof window.jstag<"u"?(this.emitLog("tag","found jstag"),setTimeout(()=>{this.getConfig()},2e3),this.getEntity()):(this.emitLog("tag",{msg:"jstag not found trying again in 2 seconds",retryCount:this.retryCount}),setTimeout(()=>this.jstagReady(),2e3))}jstagExist(){return typeof window.jstag<"u"&&typeof window.jstag.call<"u"}getConfig(){this.jstagExist()&&window.jstag.call("entityReady",()=>{this.dispatchEvent("config",window.jstag.config)})}getEntity(){this.jstagExist()&&window.jstag.call("entityReady",t=>{window.jstag.getid(i=>{t.data._uid=i,this.dispatchEvent("entity",t)})})}printBoiler(){console.log(`
    ============================================================
    ============================================================
    _        _   _       
    | |  _  _| |_(_)__ ___
    | |_| || |  _| / _(_-<
    |____\\_, |\\__|_\\__/__/
         |__/             
    ============================================================
    Lytics Developer Tools Extension Active
    ============================================================
    `)}dispatchEvent(t,i){const o=d=>{const a=new WeakSet;return JSON.stringify(d,(y,n)=>{if(n!==null&&typeof n=="object"){if(a.has(n))return;a.add(n)}return n})},g=new CustomEvent(t,{detail:{data:o(i)}});document.dispatchEvent(g)}}typeof window.TagLink<"u"?window.TagLink:new h;
