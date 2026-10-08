(function(){
var base=location.pathname.replace(/\/(design-[^/]+|logos)\/?(index\.html)?$/,'/');
var items=[['design-a-scrapbook/','A · Scrapbook'],['design-b-transit/','B · Transit'],['design-c-cinematic/','C · Cinematic'],['design-d-foundation/','D · Foundation'],['design-e-pathways/','E · Pathways'],['logos/','Logos']];
var css='#pj{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:99999;display:flex;gap:4px;align-items:center;background:rgba(15,15,15,.92);backdrop-filter:blur(8px);padding:6px;border-radius:99px;font:600 13px system-ui,sans-serif;box-shadow:0 6px 24px rgba(0,0,0,.35);max-width:96vw;overflow-x:auto}#pj a{color:#fff;text-decoration:none;padding:8px 13px;border-radius:99px;white-space:nowrap;opacity:.8}#pj a:hover{opacity:1;background:rgba(255,255,255,.15)}#pj a.on{background:#fff;color:#000;opacity:1}#pj a.all{background:#ffd23f;color:#000;opacity:1}';
var s=document.createElement('style');s.textContent=css;document.head.appendChild(s);document.body.style.paddingBottom='72px';
var d=document.createElement('div');d.id='pj';d.setAttribute('aria-label','Design switcher');
var h='<a class="all" href="'+base+'">← All designs</a>';
items.forEach(function(i){h+='<a href="'+base+i[0]+'"'+(location.pathname.indexOf(i[0].replace('/',''))>-1?' class="on"':'')+'>'+i[1]+'</a>'});
d.innerHTML=h;document.body.appendChild(d);
})();
