(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(53)},24:function(e,t,a){},25:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),s=a.n(r),i=(a(24),a(3)),c=a(55),o=a(56),m=a(57),d=(a(25),a(16)),u=a.n(d),h=a(5),p=a(6),g=a(9),y=a(7),E=a(4),b=a(10),v=(a(14),function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(g.a)(this,Object(y.a)(t).call(this))).state={selectedIndex:0,ovumImg:"img/ovum.png"},e.prevButtonClicked=e.prevButtonClicked.bind(Object(E.a)(e)),e.nextButtonClicked=e.nextButtonClicked.bind(Object(E.a)(e)),e.handleMouseEnter=e.handleMouseEnter.bind(Object(E.a)(e)),e.handleMouseLeave=e.handleMouseLeave.bind(Object(E.a)(e)),e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.ovumTransition,5e3),document.getElementsByTagName("body")[0].setAttribute("style","overflow-x:hidden;overflow-y:hidden;background:#d8e5f4;");var e=document.querySelector(".carousel"),t=document.querySelector(".carousel2"),a=e.offsetHeight,n=t.offsetHeight,l=Math.round(a/2/Math.tan(Math.PI/6)),r=Math.round(n/2/Math.tan(Math.PI/8)),s=60*this.state.selectedIndex*-1,i=45*this.state.selectedIndex*-1,c=e.querySelectorAll(".carousel__cell");e.style.transform="translateZ("+-l+"px) rotateX("+s+"deg)";var o=t.querySelectorAll(".carousel__cell2");t.style.transform="translateZ("+-r+"px) rotateX("+i+"deg)";for(var m=this.state.selectedIndex%6,d=this.state.selectedIndex%8,u=0;u<c.length;u++){var h=c[u];u==m||u==m-1?(h.style.zIndex=3e3,h.style.opacity=1):m<5&&u==m+1?(h.style.zIndex=2500,h.style.opacity=.5):5==u?(h.style.zIndex=2500,h.style.opacity=.5):(h.style.zIndex=2e3,h.style.opacity=.1)}for(u=0;u<o.length;u++){(g=o[u]).style.zIndex=u==d||u==d-1?3e3:u==d+1?2500:2e3}for(u=0;u<c.length;u++){h=c[u];if(u<6){var p=60*u;h.style.transform="rotateX("+p+"deg) translateZ("+l+"px)"}else h.style.opacity=0,h.style.transform="none"}for(u=0;u<o.length;u++){var g=o[u];if(u<8){p=45*u;g.style.transform="rotateX("+p+"deg) translateZ("+r+"px)"}else g.style.opacity=0,g.style.transform="none"}}},{key:"rotateCarousel",value:function(e){var t=document.querySelector(".carousel"),a=document.querySelector(".carousel2"),n=t.offsetHeight,l=a.offsetHeight,r=60*this.state.selectedIndex*-1,s=45*this.state.selectedIndex*-1,i=n,c=l,o=Math.round(i/2/Math.tan(Math.PI/6)),m=Math.round(c/2/Math.tan(Math.PI/8));t.style.transform="translateZ("+-o+"px) rotateX("+r+"deg)",a.style.transform="translateZ("+-m+"px) rotateX("+s+"deg)";for(var d=t.querySelectorAll(".carousel__cell"),u=a.querySelectorAll(".carousel__cell2"),h=this.state.selectedIndex%6,p=this.state.selectedIndex%8,g=0;g<d.length;g++){var y=d[g];g==h||g==h-1?(y.style.zIndex=3e3,y.style.opacity=1):h<5&&g==h+1?(y.style.zIndex=2500,y.style.opacity=.5):5==h&&0==g?(y.style.zIndex=2500,y.style.opacity=.5):(y.style.zIndex=2e3,y.style.opacity=.1)}for(g=0;g<u.length;g++){var E=u[g];g==p||g==p-1?(E.style.zIndex=3e3,E.style.opacity=1):p<7&&g==p+1?(E.style.zIndex=2500,E.style.opacity=.5):7==p&&0==g?(E.style.zIndex=2500,E.style.opacity=.5):(E.style.zIndex=2e3,E.style.opacity=.1)}}},{key:"prevButtonClicked",value:function(){this.state.selectedIndex;this.setState({selectedIndex:this.state.selectedIndex-1},function(){this.rotateCarousel(this.state.selectedIndex)})}},{key:"nextButtonClicked",value:function(){this.state.selectedIndex;this.setState({selectedIndex:this.state.selectedIndex+1},function(){this.rotateCarousel(this.state.selectedIndex)})}},{key:"updateTransition",value:function(){var e=document.querySelector("div.inner_scene1");return e?e.className="inner_scene":(e=document.querySelector("div.inner_scene")).className="inner_scene1",e}},{key:"ovumTransition",value:function(){var e=document.querySelector("img.ovum_img");return e?e.className="ovum_img2":(e=document.querySelector("img.ovum_img2")).className="ovum_img",e}},{key:"sceneTransition",value:function(){var e=document.querySelector("div.scene_none");return e&&(e.className="scene"),e}},{key:"handleMouseEnter",value:function(e){this.setState({ovumImg:"img/ovum_me.png"})}},{key:"handleMouseLeave",value:function(){this.setState({ovumImg:"img/ovum.png"})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"opencall_container",style:{width:window.innerWidth,height:window.innerHeight}},l.a.createElement("div",{className:"container",style:{width:window.innerWidth,height:window.innerHeight}},l.a.createElement("img",{src:this.state.ovumImg,className:"ovum_img",onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave}),l.a.createElement("img",{src:"img/spermy.gif",className:"sperm_img"}),l.a.createElement("img",{src:"img/spermy4.gif",className:"sperm_img4"}),l.a.createElement("img",{src:"img/ovum.png",className:"sperm_img3"}),l.a.createElement("img",{src:"img/spermy2.gif",className:"sperm_img2"}),l.a.createElement("div",{className:"inner_scene1"},l.a.createElement("img",{src:"img/daddy_logo-16.png",className:"img_apply2"})),l.a.createElement("div",{className:"forAnimation"},l.a.createElement("div",{className:"scene"},l.a.createElement("div",{className:"carousel"},l.a.createElement("div",{className:"carousel__cell"},l.a.createElement("div",{className:"carousel__cell_in",style:{textAlign:"center",paddingTop:"1%"}},l.a.createElement("span",{className:"span_white"},l.a.createElement("span",{className:"title"},"OPEN CALL FOR DADDIES"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",{className:"fancy_title"}," Nahee is looking for daddy residents who will raise her baby together 7 years later.")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"title_small_text"},l.a.createElement("span",{className:"span_white",style:{fontWeight:"normal"}}," Be a part of the experimental family living around beautiful nature.",l.a.createElement("br",null),"Experience parenting as a temporary daddy.")))),l.a.createElement("div",{className:"carousel__cell"},l.a.createElement("div",{className:"carousel__cell_in"},l.a.createElement("div",{className:"carousel_title"},l.a.createElement("img",{src:"img/introduction.png",className:"each_title"})),l.a.createElement("div",{className:"carousel_content"},l.a.createElement("span",{className:"span_white"},"Nahee Kim who is IRL extended version of Nahee.app plans to have a baby by herself 7 years later(around Summer 2026) with sperm donation. She is looking for daddy residents who are going to dedicate a certain amount of time in their life to raise the baby. Daddy residents will live together with Nahee and the baby in the same house which is supposed to be located in nice area either in South Korea or the United States close to nature and get stipend during their residency period. ",l.a.createElement("br",null),l.a.createElement("br",null),"The term residency, which is the term used for the programs run by art-related institutions to invite artists within their premises and offer conditions encouraging creativity, is applied in this \u2018daddy residency\u2019 also. The aim of this residency program is providing time and space for the applicants to think about their meaning of caring as a parent and creatively define the existing family system together.")))),l.a.createElement("div",{className:"carousel__cell"},l.a.createElement("div",{className:"carousel__cell_in"},l.a.createElement("div",{className:"carousel_title"},l.a.createElement("img",{src:"img/offering.png",className:"each_title"})),l.a.createElement("div",{className:"carousel_content"},l.a.createElement("span",{className:"span_white"},"\u261e\u21e2 opportunity to experience parenting in real life",l.a.createElement("br",null),l.a.createElement("br",null),"\u261e\u21e2 place to stay",l.a.createElement("br",null),l.a.createElement("br",null),"\u261e\u21e2 stipend (about $700/month)",l.a.createElement("br",null),l.a.createElement("br",null),"\u261e\u21e2 daddy master classes",l.a.createElement("br",null),l.a.createElement("br",null),"\u261e\u21e2 family photo",l.a.createElement("br",null),l.a.createElement("br",null),"\u261e\u21e2 invitations to annual family retreat",l.a.createElement("br",null),l.a.createElement("br",null),"\u261e\u21e2 recommendation letter for each daddy\u2019s future partner about their acheivement",l.a.createElement("br",null))))),l.a.createElement("div",{className:"carousel__cell"},l.a.createElement("div",{className:"carousel__cell_in"},l.a.createElement("div",{className:"carousel_title"},l.a.createElement("img",{src:"img/eligibility.png",className:"each_title"})),l.a.createElement("div",{className:"carousel_content"},l.a.createElement("span",{className:"span_white"},"\u261e\u21e2 older than 30 by the time the residency starts",l.a.createElement("br",null),l.a.createElement("br",null),"\u261e\u21e2 all gender",l.a.createElement("br",null),l.a.createElement("br",null),"\u261e\u21e2 fluent English or Korean speaker",l.a.createElement("br",null),l.a.createElement("br",null))))),l.a.createElement("div",{className:"carousel__cell"},l.a.createElement("div",{className:"carousel__cell_in"},l.a.createElement("div",{className:"carousel_title"},l.a.createElement("img",{src:"img/timeline.png",className:"each_title"})),l.a.createElement("div",{className:"carousel_content"},l.a.createElement("span",{className:"span_white"},"> application closed ",l.a.createElement("div",{className:"title_small_text"},"(July 31 2025)"),l.a.createElement("br",null),"> select candidates for interview",l.a.createElement("div",{className:"title_small_text"},"(Sep 2025)"),l.a.createElement("br",null),"> interview1",l.a.createElement("div",{className:"title_small_text"},"(Oct 2025)")," ",l.a.createElement("br",null),"> pregnancy",l.a.createElement("div",{className:"title_small_text"},"(Nov 2025 - Feb 2026)")," ",l.a.createElement("br",null),"> interview2",l.a.createElement("div",{className:"title_small_text"},"(Mar 2026)")," ",l.a.createElement("br",null),"> final selection ",l.a.createElement("div",{className:"title_small_text"},"(on the third month of pregrancy)")," "),"   "),"   ")),l.a.createElement("div",{className:"carousel__cell"},l.a.createElement("div",{className:"carousel__cell_in"},l.a.createElement("div",{className:"carousel_title"},l.a.createElement("img",{src:"img/faq.png",className:"each_title"})),l.a.createElement("div",{className:"carousel_content"},l.a.createElement("span",{className:"span_white"},"Q1) What\u2019s the difference between being a daddy resident and babysitting?",l.a.createElement("br",null),l.a.createElement("div",{className:"title_small_text"},"You will rear the baby with me. This residency is not for asking residents to care for the child instead of me. The actual time with the baby will be temporary but you will be one of the \u2018parents\u2019 of my child and will be asked to keep this relationship for the rest of your and my baby\u2019s life (if you want to).")," ",l.a.createElement("br",null),"Q2) Is a married person also eligible to apply?",l.a.createElement("br",null),l.a.createElement("div",{className:"title_small_text"},"yes"),l.a.createElement("br",null),"Q3) Why do you launch this open call seven years before the residency begins?",l.a.createElement("br",null),l.a.createElement("div",{className:"title_small_text"},"Becoming a parent is serious business and hard work. I want to give plenty of time to me and the applicants to think about whether they are ready to be a parent."),l.a.createElement("br",null),"Q4) What is daddy master class?",l.a.createElement("br",null),l.a.createElement("div",{className:"title_small_text"},"I plan to invite selected applicants\u2019 inspirational caregivers in one place and ask them to give classes to the residents. The classes could happen in any format in which they(inspirational daddies) want to share their experience and knowledge about having and caring a baby."),l.a.createElement("br",null),"Q5) Who\u2019s going to be the baby\u2019s biological father?",l.a.createElement("br",null),l.a.createElement("div",{className:"title_small_text"},"I'm working on creating Daddy.app which is artificial intelligence to help Nahee develop her dynamic family in real life. Nahee and Daddy.app will dream together about their ideal baby. The features of the biological father of the baby will be determined based on what they are dreaming."),l.a.createElement("br",null),"Q6) What if Nahee marries someone before the start of the residency?",l.a.createElement("br",null),l.a.createElement("div",{className:"title_small_text"},"Nahee will try best to make this residency happened. Let's hope that her partner can understand this situation."),l.a.createElement("br",null),l.a.createElement("br",null)))))))),l.a.createElement("div",{className:"carousel-options"},l.a.createElement("p",null,l.a.createElement("button",{className:"previous-button",onClick:function(t){return e.prevButtonClicked(t)}},l.a.createElement("img",{src:"img/arrowup2.png",className:"arrowup"})),l.a.createElement("button",{className:"next-button",onClick:function(t){return e.nextButtonClicked(t)}},l.a.createElement("img",{src:"img/arrowdown.png",className:"arrowdown"})),l.a.createElement("a",{href:"https://forms.gle/HacnLpYr6ZgwUf1U6",className:"next-button",target:"_blank"}," ",l.a.createElement("img",{src:"img/daddy_apply-14.png",className:"applybtn"}),l.a.createElement("img",{src:"img/daddy_arrow_apply.png",className:"applyarrowimg"}))))),l.a.createElement("div",{className:"container2",style:{position:"fixed",top:"0",left:"0",width:window.innerWidth,height:window.innerHeight,background:"transparent",pointerEvents:"none"}},l.a.createElement("div",{className:"scene2"},l.a.createElement("div",{className:"carousel2"},l.a.createElement("div",{className:"carousel__cell2"},l.a.createElement("div",{className:"carousel__cell_in2"},l.a.createElement("img",{src:"img/daddy_objects-04.png",style:{}}))),l.a.createElement("div",{className:"carousel__cell2"},l.a.createElement("div",{className:"carousel__cell_in2"},l.a.createElement("img",{src:"img/daddy_objects-06.png",style:{}}),l.a.createElement("img",{src:"img/daddy_objects-05.png",style:{}}),l.a.createElement("img",{src:"img/daddy_objects-07.png",style:{}}))),l.a.createElement("div",{className:"carousel__cell2"},l.a.createElement("div",{className:"carousel__cell_in2"},l.a.createElement("img",{src:"img/daddy_objects-05.png",style:{}}),l.a.createElement("img",{src:"img/daddy_objects-06.png",style:{}}),l.a.createElement("img",{src:"img/daddy_objects-07.png",style:{}}))),l.a.createElement("div",{className:"carousel__cell2"},l.a.createElement("div",{className:"carousel__cell_in2"},l.a.createElement("img",{src:"img/daddy_objects-07.png",style:{}}),l.a.createElement("img",{src:"img/daddy_objects-06.png",style:{}}))),l.a.createElement("div",{className:"carousel__cell2"},l.a.createElement("div",{className:"carousel__cell_in2"},l.a.createElement("img",{src:"img/daddy_objects-06.png",style:{}}),l.a.createElement("img",{src:"img/daddy_objects-07.png",style:{}}))),l.a.createElement("div",{className:"carousel__cell2"},l.a.createElement("div",{className:"carousel__cell_in2"},l.a.createElement("img",{src:"img/daddy_objects-07.png",style:{}}),l.a.createElement("img",{src:"img/daddy_objects-06.png",style:{}}),l.a.createElement("img",{src:"img/daddy_objects-05.png",style:{}})))))))}}]),t}(l.a.Component)),_=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(g.a)(this,Object(y.a)(t).call(this))).state={},e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"",style:{width:window.innerWidth,height:window.innerHeight}},l.a.createElement("div",{style:{margin:"0px auto"}},l.a.createElement("p",{className:"main_p"},"Blog for Socially Engaged Games"),l.a.createElement("p",{className:"main_p"},l.a.createElement("p",{className:"desc_title"},"091119 My goal for the class"),l.a.createElement("p",{className:"desc_p"},"I want to create a game about regretful moments in human memories. It\u2019s interesting since people think they may change their present by making different choices in the past. It seems like they are treating those choices like variables in programs and then hope it can change the result of some functions. I\u2019d like to engage more physical materials for this course since I have usually worked with virtual elements in the past projects and feel a bit tired of the interactions happening in the virtual world. But I have few fabrication skills so first I need to figure out how far i can achieve if i want to build a game in the physical world.")),l.a.createElement("div",null,l.a.createElement("img",{src:"fruit-03.png",style:{width:"65%",padding:"8%",paddingTop:"1%"}})),l.a.createElement("div",null,l.a.createElement("a",{style:{width:"65%",padding:"8%"},href:"https://docs.google.com/document/d/1OE1BUrcPlyuCXSZnUnrujAtJGAwzTs-h3LjNTBL5oHY/edit?usp=sharing",target:"_blank",className:"outside"},"\u2197\ufe0e game concept 1 ")),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("img",{src:"social_game-01.png",style:{width:"65%",padding:"8%",paddingTop:"1%"}})),l.a.createElement("div",null,l.a.createElement("a",{style:{width:"65%",padding:"8%"},href:"https://drive.google.com/file/d/1BzCnPAZI-myhKJYfHSwrqN9RJu4HzJFs/view?usp=sharing",target:"_blank",className:"outside"},"\u2197\ufe0e sandspiel",l.a.createElement("br",null),l.a.createElement("img",{src:"datapng.png",style:{padding:"8%",paddingTop:"1%"}})," ")),l.a.createElement("br",null)))}}]),t}(l.a.Component),f=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(g.a)(this,Object(y.a)(t).call(this))).state={},e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"",style:{width:window.innerWidth,height:window.innerHeight}},l.a.createElement("div",{style:{margin:"0px auto"}},l.a.createElement("div",null,l.a.createElement("img",{src:"fruit-03.png",style:{width:"65%",padding:"8%",paddingTop:"1%"}})),l.a.createElement("div",null,l.a.createElement("a",{style:{width:"65%",padding:"8%"},href:"https://www.evernote.com/shard/s673/client/snv?noteGuid=b21981f1-c6d0-4093-8b23-3b27d23a2474&noteKey=a0110ac67b81f03c3337a1d3efca7bd2&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs673%2Fsh%2Fb21981f1-c6d0-4093-8b23-3b27d23a2474%2Fa0110ac67b81f03c3337a1d3efca7bd2&title=daddy.app",target:"_blank",className:"outside"},"\u2197\ufe0e notes ")),l.a.createElement("br",null)))}}]),t}(l.a.Component),w=u()({render:function(){var e,t,a,r,s,d;return l.a.createElement(c.a,null,l.a.createElement("div",{id:"app",className:"App",style:{margin:"0px auto",height:"100%"}},l.a.createElement(n.Fragment,null,l.a.createElement(o.a,null,l.a.createElement(m.a,(e={exact:!0,path:"/"},Object(i.a)(e,"exact",!0),Object(i.a)(e,"render",function(){return l.a.createElement("div",{style:{margin:"0px auto",height:"100%"}},l.a.createElement("div",{id:"shade_div"}),l.a.createElement("div",{style:{position:"relative",borderBottom:"1px solid black",height:"100%"}},l.a.createElement("canvas",{id:"canvas",resize:"true"}),l.a.createElement("img",{src:"handshake_erotica_s.png",id:"handshakeErotica",className:"maskedImg"}),l.a.createElement("img",{src:"web_l-02_s.png",id:"torrentsOfSex",className:"maskedImg"}),l.a.createElement("img",{src:"daddy_illustration_tan_s-01_s.png",id:"daddyResidency",className:"maskedImg"})),l.a.createElement("div",{id:"edit",onclick:"openIntro()"},"edit edit edit edit edit edit edit edit edit edit edit edit edit edit edit edit edit edit edit edit edit edit edit edit edit edit"),l.a.createElement("a",{id:"cv",href:"naheekim__cv_2020.pdf",target:"_blank"},"openCV openCV openCV openCV openCV openCV openCV openCV openCV openCV openCV openCV openCV openCV openCV openCV openCV openCV openCV openCV openCV openCV openCV openCV"),l.a.createElement("div",{id:"intro"},"import NaheeApp from \u2018nahee\u2019",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),"/*",l.a.createElement("br",null),"Nahee Kim(she/they) is an artist, teacher, and web programmer whose performing \u201cnahee.app\u201d in social media. \u201cnahee.app\u201d was started from pseudo programs which interpret Nahee\u2019s sexual identity, preference, and experiences as algorithms. \u201cnahee.app\u201d creates sex docs by tweaking existing network protocols\u2019 communication mechanism into provocative interactions, speculative sex toys and matching applications. For now running \u201cDaddy Residency\u201d which is an experiment to seek new approaches of building family. Nahee is based in New York and Seoul.",l.a.createElement("br",null),"*/",l.a.createElement("br",null),l.a.createElement("br",null),"},",l.a.createElement("div",{id:"back",onClick:"closeIntro()"},"\u2715\u2715\u2715\u2715\u2715\u2715\u2715\u2715\u2715\u2715\u2715\u2715\u2715\u2715\u2715\u2715\u2715\u2715\u2715"),l.a.createElement("a",{href:"https://www.instagram.com/nahee.app/",id:"insta",target:"_blank"},"instagram"),l.a.createElement("a",{href:"https://github.com/nahbee10/nahee.app",id:"github",target:"_blank"},"github")))}),e)),l.a.createElement(m.a,(t={exact:!0,path:"/shellhouse"},Object(i.a)(t,"exact",!0),Object(i.a)(t,"render",function(){return l.a.createElement("div",null,l.a.createElement("img",{src:"babycounter.png",style:{width:"100%"}}))}),t)),l.a.createElement(m.a,(a={exact:!0,path:"/torrents_of_sex"},Object(i.a)(a,"exact",!0),Object(i.a)(a,"render",function(){return l.a.createElement("div",null,l.a.createElement("br",null),"\xa0\xa0\xa0\xa0",l.a.createElement("a",{href:"https://lapses-screening.s3.amazonaws.com/torrents_of_sex.pdf",style:{width:"100%",margin:"36px"}},"Download"))}),a)),l.a.createElement(m.a,(r={exact:!0,path:"/game-blog"},Object(i.a)(r,"exact",!0),Object(i.a)(r,"render",function(){return l.a.createElement(_,null)}),r)),l.a.createElement(m.a,(s={exact:!0,path:"/works"},Object(i.a)(s,"exact",!0),Object(i.a)(s,"render",function(){return l.a.createElement(f,null)}),s)),l.a.createElement(m.a,(d={exact:!0,path:"/"},Object(i.a)(d,"exact",!0),Object(i.a)(d,"render",function(){return l.a.createElement(v,null)}),d))))))}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.97dfabd4.chunk.js.map