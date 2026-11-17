(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
var tabs=[].slice.call(document.querySelectorAll('.tw-tabs [role=tab]'));tabs.forEach(function(t){t.addEventListener('click',function(){tabs.forEach(function(o){var s=o===t;o.setAttribute('aria-selected',s);$(o.getAttribute('aria-controls')).hidden=!s;});});});
var ss=$('sz-s');if(ss){var sv=$('sz-v'),st=$('sz-t');on([ss,sv,st],function(){var v=parseFloat(sv.value)||0,s=ss.value,m;
 m=s==='us_m'?v:s==='us_w'?v-1.5:s==='uk'?v+0.5:(v-33)/1.333;
 if(m<2||m>17){$('sz-o').innerHTML='<strong>Check the size</strong><p>Enter a shoe size in the chosen system.</p>';return;}
 var L=[['S',4,6],['M',6.5,9],['L',9.5,12],['XL',12.5,15]],i=m<6.25?0:m<9.25?1:m<12.25?2:3,top=m>=L[i][2]-0.25&&i<3,up=st.value==='thick'&&top,dn=st.value==='thin'&&m<=L[i][1]+0.25&&i>0,f=up?i+1:i;
 $('sz-o').innerHTML='<strong>Size '+L[f][0]+'</strong><p>Usually fits US men&rsquo;s '+L[f][1]+'&ndash;'+L[f][2]+'.</p>'+(up?'<p>You are at the top of a range in thick socks, so we sized up.</p>':top?'<p>You are at the top of the range: size up for thick or tight-knit socks.</p>':dn?'<p>At the bottom of a range, thin socks in size '+L[i-1][0]+' may sit neater.</p>':'')+'<span class="tw-pill">Check the packet chart</span>';});}
var fa=$('ff-a');if(fa){var fc=$('ff-c'),fs=$('ff-s');var A={office:['Cotton blend','merino blend'],run:['Synthetic blend','merino blend'],hike:['Merino blend','synthetic blend'],lounge:['Wool blend','cotton terry'],formal:['Fine cotton (mercerised)','fine merino']};
 on([fa,fc,fs],function(){var a=A[fa.value],p=a[0],alt=a[1],n=[];if(fc.value==='cold'&&fa.value!=='run'){p=fa.value==='formal'?'Fine merino':'Merino or wool blend';alt='thicker cushioned knit';}if(fc.value==='hot'&&fa.value==='hike'){p='Lightweight merino blend';}if(fs.value==='sweat'&&p.indexOf('otton')>-1){alt=p.toLowerCase();p='Merino or synthetic blend';n.push('Cotton holds sweat; a wicking fibre keeps feet drier.');}if(fs.value==='cold')n.push('Choose a cushioned or terry sole for extra warmth.');if(fs.value==='sens')n.push('Look for flat, hand-linked toe seams and a smooth, fine knit.');
  $('ff-o').innerHTML='<strong>'+p+'</strong><p>Alternative: '+alt+'.</p>'+(n.length?'<ul><li>'+n.join('</li><li>')+'</li></ul>':'')+'<span class="tw-pill">2&ndash;5% elastane for fit</span>';});}
var hs=$('hm-s');if(hs){var ht=$('hm-t');var H={loafer:['No-show','with a silicone heel grip'],trainer:['Ankle or no-show','ankle socks stop rubbing at the heel tab'],hightop:['Crew','so the sock clears the top of the shoe'],dress:['Over-the-calf','or crew, so no skin shows when seated'],boot:['Crew','to stop the boot rubbing your leg'],hike:['Crew or boot height','with cushioning under heel and toe']};
 on([hs,ht],function(){var h=H[hs.value],t=ht.value,x=t==='crop'&&(hs.value==='loafer'||hs.value==='trainer')?'Cropped trousers show the ankle, so hidden socks look cleanest.':t==='short'&&hs.value==='dress'?'With shorts, a fine crew sock or no-show looks more relaxed.':t==='long'&&hs.value==='dress'?'Tall socks stay up and keep a neat line when you sit.':'';
  $('hm-o').innerHTML='<strong>'+h[0]+'</strong><p>'+h[0]+' height, '+h[1]+'.</p>'+(x?'<p>'+x+'</p>':'');});}
})();
