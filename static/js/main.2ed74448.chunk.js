(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(53)},23:function(e,a,t){},24:function(e,a,t){},53:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(8),s=t.n(r),c=(t(23),t(3)),i=t(55),m=t(56),o=t(57),d=(t(24),t(9)),u=t.n(d),p=t(10),h=t(11),g=t(14),b=t(12),E=t(4),y=t(15),_=(t(28),function(e){function a(){var e;return Object(p.a)(this,a),(e=Object(g.a)(this,Object(b.a)(a).call(this))).state={selectedIndex:0,ovumImg:"img/ovum.png"},e.prevButtonClicked=e.prevButtonClicked.bind(Object(E.a)(e)),e.nextButtonClicked=e.nextButtonClicked.bind(Object(E.a)(e)),e.handleMouseEnter=e.handleMouseEnter.bind(Object(E.a)(e)),e.handleMouseLeave=e.handleMouseLeave.bind(Object(E.a)(e)),e}return Object(y.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){setInterval(this.ovumTransition,5e3),document.getElementsByTagName("body")[0].setAttribute("style","overflow-x:hidden;overflow-y:hidden;background:#d8e5f4;");var e=document.querySelector(".carousel"),a=document.querySelector(".carousel2"),t=e.offsetHeight,l=a.offsetHeight,n=Math.round(t/2/Math.tan(Math.PI/6)),r=Math.round(l/2/Math.tan(Math.PI/8)),s=60*this.state.selectedIndex*-1,c=45*this.state.selectedIndex*-1,i=e.querySelectorAll(".carousel__cell");e.style.transform="translateZ("+-n+"px) rotateX("+s+"deg)";var m=a.querySelectorAll(".carousel__cell2");a.style.transform="translateZ("+-r+"px) rotateX("+c+"deg)";for(var o=this.state.selectedIndex%6,d=this.state.selectedIndex%8,u=0;u<i.length;u++){var p=i[u];u==o||u==o-1?(p.style.zIndex=3e3,p.style.opacity=1):o<5&&u==o+1?(p.style.zIndex=2500,p.style.opacity=.5):5==u?(p.style.zIndex=2500,p.style.opacity=.5):(p.style.zIndex=2e3,p.style.opacity=.1)}for(u=0;u<m.length;u++){(g=m[u]).style.zIndex=u==d||u==d-1?3e3:u==d+1?2500:2e3}for(u=0;u<i.length;u++){p=i[u];if(u<6){var h=60*u;p.style.transform="rotateX("+h+"deg) translateZ("+n+"px)"}else p.style.opacity=0,p.style.transform="none"}for(u=0;u<m.length;u++){var g=m[u];if(u<8){h=45*u;g.style.transform="rotateX("+h+"deg) translateZ("+r+"px)"}else g.style.opacity=0,g.style.transform="none"}}},{key:"rotateCarousel",value:function(e){var a=document.querySelector(".carousel"),t=document.querySelector(".carousel2"),l=a.offsetHeight,n=t.offsetHeight,r=60*this.state.selectedIndex*-1,s=45*this.state.selectedIndex*-1,c=l,i=n,m=Math.round(c/2/Math.tan(Math.PI/6)),o=Math.round(i/2/Math.tan(Math.PI/8));a.style.transform="translateZ("+-m+"px) rotateX("+r+"deg)",t.style.transform="translateZ("+-o+"px) rotateX("+s+"deg)";for(var d=a.querySelectorAll(".carousel__cell"),u=t.querySelectorAll(".carousel__cell2"),p=this.state.selectedIndex%6,h=this.state.selectedIndex%8,g=0;g<d.length;g++){var b=d[g];g==p||g==p-1?(b.style.zIndex=3e3,b.style.opacity=1):p<5&&g==p+1?(b.style.zIndex=2500,b.style.opacity=.5):5==p&&0==g?(b.style.zIndex=2500,b.style.opacity=.5):(b.style.zIndex=2e3,b.style.opacity=.1)}for(g=0;g<u.length;g++){var E=u[g];g==h||g==h-1?(E.style.zIndex=3e3,E.style.opacity=1):h<7&&g==h+1?(E.style.zIndex=2500,E.style.opacity=.5):7==h&&0==g?(E.style.zIndex=2500,E.style.opacity=.5):(E.style.zIndex=2e3,E.style.opacity=.1)}}},{key:"prevButtonClicked",value:function(){this.state.selectedIndex;this.setState({selectedIndex:this.state.selectedIndex-1},function(){this.rotateCarousel(this.state.selectedIndex)})}},{key:"nextButtonClicked",value:function(){this.state.selectedIndex;this.setState({selectedIndex:this.state.selectedIndex+1},function(){this.rotateCarousel(this.state.selectedIndex)})}},{key:"updateTransition",value:function(){var e=document.querySelector("div.inner_scene1");return e?e.className="inner_scene":(e=document.querySelector("div.inner_scene")).className="inner_scene1",e}},{key:"ovumTransition",value:function(){var e=document.querySelector("img.ovum_img");return e?e.className="ovum_img2":(e=document.querySelector("img.ovum_img2")).className="ovum_img",e}},{key:"sceneTransition",value:function(){var e=document.querySelector("div.scene_none");return e&&(e.className="scene"),e}},{key:"handleMouseEnter",value:function(e){this.setState({ovumImg:"img/ovum_me.png"})}},{key:"handleMouseLeave",value:function(){this.setState({ovumImg:"img/ovum.png"})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"opencall_container",style:{width:window.innerWidth,height:window.innerHeight}},n.a.createElement("div",{className:"container",style:{width:window.innerWidth,height:window.innerHeight}},n.a.createElement("img",{src:this.state.ovumImg,className:"ovum_img",onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave}),n.a.createElement("img",{src:"img/spermy.gif",className:"sperm_img"}),n.a.createElement("img",{src:"img/spermy4.gif",className:"sperm_img4"}),n.a.createElement("img",{src:"img/ovum.png",className:"sperm_img3"}),n.a.createElement("img",{src:"img/spermy2.gif",className:"sperm_img2"}),n.a.createElement("div",{className:"inner_scene1"},n.a.createElement("img",{src:"img/daddy_logo-16.png",className:"img_apply2"})),n.a.createElement("div",{className:"forAnimation"},n.a.createElement("div",{className:"scene"},n.a.createElement("div",{className:"carousel"},n.a.createElement("div",{className:"carousel__cell"},n.a.createElement("div",{className:"carousel__cell_in",style:{textAlign:"center",paddingTop:"1%"}},n.a.createElement("span",{className:"span_white"},n.a.createElement("span",{className:"title"},"OPEN CALL FOR DADDIES"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("span",{className:"fancy_title"}," Nahee is looking for daddy residents who will raise her baby together 7 years later.")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"title_small_text"},n.a.createElement("span",{className:"span_white",style:{fontWeight:"normal"}}," Be a part of the experimental family living around beautiful nature.",n.a.createElement("br",null),"Experience parenting as a temporary daddy.")))),n.a.createElement("div",{className:"carousel__cell"},n.a.createElement("div",{className:"carousel__cell_in"},n.a.createElement("div",{className:"carousel_title"},n.a.createElement("img",{src:"img/introduction.png",className:"each_title"})),n.a.createElement("div",{className:"carousel_content"},n.a.createElement("span",{className:"span_white"},"Nahee Kim who is IRL extended version of Nahee.app plans to have a baby by herself 7 years later(around Summer 2026) with sperm donation. She is looking for daddy residents who are going to dedicate a certain amount of time in their life to raise the baby. Daddy residents will live together with Nahee and the baby in the same house which is supposed to be located in nice area either in South Korea or the United States close to nature and get stipend during their residency period. ",n.a.createElement("br",null),n.a.createElement("br",null),"The term residency, which is the term used for the programs run by art-related institutions to invite artists within their premises and offer conditions encouraging creativity, is applied in this \u2018daddy residency\u2019 also. The aim of this residency program is providing time and space for the applicants to think about their meaning of caring as a parent and creatively define the existing family system together.")))),n.a.createElement("div",{className:"carousel__cell"},n.a.createElement("div",{className:"carousel__cell_in"},n.a.createElement("div",{className:"carousel_title"},n.a.createElement("img",{src:"img/offering.png",className:"each_title"})),n.a.createElement("div",{className:"carousel_content"},n.a.createElement("span",{className:"span_white"},"\u261e\u21e2 opportunity to experience parenting in real life",n.a.createElement("br",null),n.a.createElement("br",null),"\u261e\u21e2 place to stay",n.a.createElement("br",null),n.a.createElement("br",null),"\u261e\u21e2 stipend (about $700/month)",n.a.createElement("br",null),n.a.createElement("br",null),"\u261e\u21e2 daddy master classes",n.a.createElement("br",null),n.a.createElement("br",null),"\u261e\u21e2 family photo",n.a.createElement("br",null),n.a.createElement("br",null),"\u261e\u21e2 invitations to annual family retreat",n.a.createElement("br",null),n.a.createElement("br",null),"\u261e\u21e2 recommendation letter for each daddy\u2019s future partner about their acheivement",n.a.createElement("br",null))))),n.a.createElement("div",{className:"carousel__cell"},n.a.createElement("div",{className:"carousel__cell_in"},n.a.createElement("div",{className:"carousel_title"},n.a.createElement("img",{src:"img/eligibility.png",className:"each_title"})),n.a.createElement("div",{className:"carousel_content"},n.a.createElement("span",{className:"span_white"},"\u261e\u21e2 older than 30 by the time the residency starts",n.a.createElement("br",null),n.a.createElement("br",null),"\u261e\u21e2 all gender",n.a.createElement("br",null),n.a.createElement("br",null),"\u261e\u21e2 fluent English or Korean speaker",n.a.createElement("br",null),n.a.createElement("br",null))))),n.a.createElement("div",{className:"carousel__cell"},n.a.createElement("div",{className:"carousel__cell_in"},n.a.createElement("div",{className:"carousel_title"},n.a.createElement("img",{src:"img/timeline.png",className:"each_title"})),n.a.createElement("div",{className:"carousel_content"},n.a.createElement("span",{className:"span_white"},"> application closed ",n.a.createElement("div",{className:"title_small_text"},"(July 31 2025)"),n.a.createElement("br",null),"> select candidates for interview",n.a.createElement("div",{className:"title_small_text"},"(Sep 2025)"),n.a.createElement("br",null),"> interview1",n.a.createElement("div",{className:"title_small_text"},"(Oct 2025)")," ",n.a.createElement("br",null),"> pregnancy",n.a.createElement("div",{className:"title_small_text"},"(Nov 2025 - Feb 2026)")," ",n.a.createElement("br",null),"> interview2",n.a.createElement("div",{className:"title_small_text"},"(Mar 2026)")," ",n.a.createElement("br",null),"> final selection ",n.a.createElement("div",{className:"title_small_text"},"(on the third month of pregrancy)")," "),"   "),"   ")),n.a.createElement("div",{className:"carousel__cell"},n.a.createElement("div",{className:"carousel__cell_in"},n.a.createElement("div",{className:"carousel_title"},n.a.createElement("img",{src:"img/faq.png",className:"each_title"})),n.a.createElement("div",{className:"carousel_content"},n.a.createElement("span",{className:"span_white"},"Q1) What\u2019s the difference between being a daddy resident and babysitting?",n.a.createElement("br",null),n.a.createElement("div",{className:"title_small_text"},"You will rear the baby with me. This residency is not for asking residents to care for the child instead of me. The actual time with the baby will be temporary but you will be one of the \u2018parents\u2019 of my child and will be asked to keep this relationship for the rest of your and my baby\u2019s life (if you want to).")," ",n.a.createElement("br",null),"Q2) Is a married person also eligible to apply?",n.a.createElement("br",null),n.a.createElement("div",{className:"title_small_text"},"yes"),n.a.createElement("br",null),"Q3) Why do you launch this open call seven years before the residency begins?",n.a.createElement("br",null),n.a.createElement("div",{className:"title_small_text"},"Becoming a parent is serious business and hard work. I want to give plenty of time to me and the applicants to think about whether they are ready to be a parent."),n.a.createElement("br",null),"Q4) What is daddy master class?",n.a.createElement("br",null),n.a.createElement("div",{className:"title_small_text"},"I plan to invite selected applicants\u2019 inspirational caregivers in one place and ask them to give classes to the residents. The classes could happen in any format in which they(inspirational daddies) want to share their experience and knowledge about having and caring a baby."),n.a.createElement("br",null),"Q5) Who\u2019s going to be the baby\u2019s biological father?",n.a.createElement("br",null),n.a.createElement("div",{className:"title_small_text"},"I'm working on creating Daddy.app which is artificial intelligence to help Nahee develop her dynamic family in real life. Nahee and Daddy.app will dream together about their ideal baby. The features of the biological father of the baby will be determined based on what they are dreaming."),n.a.createElement("br",null),"Q6) What if Nahee marries someone before the start of the residency?",n.a.createElement("br",null),n.a.createElement("div",{className:"title_small_text"},"Nahee will try best to make this residency happened. Let's hope that her partner can understand this situation."),n.a.createElement("br",null),n.a.createElement("br",null)))))))),n.a.createElement("div",{className:"carousel-options"},n.a.createElement("p",null,n.a.createElement("button",{className:"previous-button",onClick:function(a){return e.prevButtonClicked(a)}},n.a.createElement("img",{src:"img/arrowup2.png",className:"arrowup"})),n.a.createElement("button",{className:"next-button",onClick:function(a){return e.nextButtonClicked(a)}},n.a.createElement("img",{src:"img/arrowdown.png",className:"arrowdown"})),n.a.createElement("a",{href:"https://forms.gle/HacnLpYr6ZgwUf1U6",className:"next-button",target:"_blank"}," ",n.a.createElement("img",{src:"img/daddy_apply-14.png",className:"applybtn"}),n.a.createElement("img",{src:"img/daddy_arrow_apply.png",className:"applyarrowimg"}))))),n.a.createElement("div",{className:"container2",style:{position:"fixed",top:"0",left:"0",width:window.innerWidth,height:window.innerHeight,background:"transparent",pointerEvents:"none"}},n.a.createElement("div",{className:"scene2"},n.a.createElement("div",{className:"carousel2"},n.a.createElement("div",{className:"carousel__cell2"},n.a.createElement("div",{className:"carousel__cell_in2"},n.a.createElement("img",{src:"img/daddy_objects-04.png",style:{}}))),n.a.createElement("div",{className:"carousel__cell2"},n.a.createElement("div",{className:"carousel__cell_in2"},n.a.createElement("img",{src:"img/daddy_objects-06.png",style:{}}),n.a.createElement("img",{src:"img/daddy_objects-05.png",style:{}}),n.a.createElement("img",{src:"img/daddy_objects-07.png",style:{}}))),n.a.createElement("div",{className:"carousel__cell2"},n.a.createElement("div",{className:"carousel__cell_in2"},n.a.createElement("img",{src:"img/daddy_objects-05.png",style:{}}),n.a.createElement("img",{src:"img/daddy_objects-06.png",style:{}}),n.a.createElement("img",{src:"img/daddy_objects-07.png",style:{}}))),n.a.createElement("div",{className:"carousel__cell2"},n.a.createElement("div",{className:"carousel__cell_in2"},n.a.createElement("img",{src:"img/daddy_objects-07.png",style:{}}),n.a.createElement("img",{src:"img/daddy_objects-06.png",style:{}}))),n.a.createElement("div",{className:"carousel__cell2"},n.a.createElement("div",{className:"carousel__cell_in2"},n.a.createElement("img",{src:"img/daddy_objects-06.png",style:{}}),n.a.createElement("img",{src:"img/daddy_objects-07.png",style:{}}))),n.a.createElement("div",{className:"carousel__cell2"},n.a.createElement("div",{className:"carousel__cell_in2"},n.a.createElement("img",{src:"img/daddy_objects-07.png",style:{}}),n.a.createElement("img",{src:"img/daddy_objects-06.png",style:{}}),n.a.createElement("img",{src:"img/daddy_objects-05.png",style:{}})))))))}}]),a}(n.a.Component)),f=u()({render:function(){var e,a,t,r;return n.a.createElement(i.a,null,n.a.createElement("div",{id:"app",className:"App"},n.a.createElement(l.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(o.a,(e={exact:!0,path:"/"},Object(c.a)(e,"exact",!0),Object(c.a)(e,"render",function(){return n.a.createElement("div",{style:{margin:"0px auto"}},n.a.createElement("p",{className:"main_p"},"\xa0\xa0\xa0\xa0Nahee Kim is an artist and a web developer exploring programmability of human sexual behavior. She writes ",n.a.createElement("a",{href:"https://drive.google.com/drive/folders/17ntNWgN5T8fW_SojLe6I_qozPo9nQFFp?usp=sharing",target:"_blank",className:"inside"},"code poems"),", builds ",n.a.createElement("a",{href:"http://boobblobs.com",target:"_blank",className:"inside"},"web applications"),", draws ",n.a.createElement("a",{href:"https://drive.google.com/open?id=1DPqdjj9GuKj15twsIi_BXPxEUL89li1Q",target:"_blank",className:"inside"},"illustrations")," and makes ",n.a.createElement("a",{href:"http://instantbaby.store/",target:"_blank",className:"inside"},"videos")," regarding body images bound up with sexuality, power dynamics and communication protocols in sexual relationship and experimental approaches to human reproduction. She studies and teaches at Hunter College, studied at School for Poetic Computation, was a resident at MassMOCA, is a member of Soft Surplus which is collective workspace in Brooklyn and was a member of Eobchae which is an artist collective in South Korea. She is based in New York and Seoul."),n.a.createElement("p",{className:"not_main_p"},"nahbee10@gmail.com"),n.a.createElement("p",{className:"not_main_p"}," ",n.a.createElement("a",{href:"http://github.com/nahbee10/nahee.app",target:"_blank",className:"outside"},"github")," ",n.a.createElement("a",{href:"https://www.instagram.com/nahee.app/",target:"_blank",className:"outside"},"instagram")),n.a.createElement("p",{className:"main_p"},n.a.createElement("p",{className:"desc_title"},"Nahee.app"),n.a.createElement("p",{className:"desc_p"},"I have been working on the web-based performance project <Nahee.app>. In this project, I regard myself as a web application having sexual desire and speculate what would happen if that programmable entity can have sexual relationships as we do. With its programmability which is the biggest difference of <Nahee.app> from real human, <Nahee.app> approaches technology as a tool for redefining ingrained ways of having sexual relationship."),n.a.createElement("a",{href:"https://esoteric.codes/blog/nahee-app",target:"_blank",className:"outside"},"\u2197\ufe0e interview with esoteric.codes"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"desc_title"},"Daddy Residency"),n.a.createElement("p",{className:"desc_p"},"Nahee.app's family programming series : I plan to have a baby after seven years by artificial insemination. And I'd like to have a variety of companions for that rigorous but invaluable parenting experience. So I\u2019m launching this open call for daddy residents who want to raise the baby with me for a certain amount of time. The application deadline is 07.31.2025.\xa0"),n.a.createElement("img",{src:"https://lapses-screening.s3.amazonaws.com/daddy/daddy_illustration_tan_s-01.png",className:"port_imgs"}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("a",{href:"http://daddy-residency.com",target:"_blank",className:"outside"},"\u2197\ufe0e Go to the open call website"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"desc_title"},"Torrents of Sex"),n.a.createElement("p",{className:"desc_p"},"<Torrents of Sex> is one of the projects of Nahee.app about sex and network technology. Assuming that someday human can upload and download their somatic sensations onto the web, Nahee.app designed peer-to-peer polyamorous sexual relationship network protocol <Torrents of Sex>, inspired by BitTorrent\u2019s file distribution & peer selection algorithms. This work consists of two parts: one part is an illustration with detailed descriptions of the protocol and the other part is a mobile app as an implementation of the algorithm with a user-friendly interface."),n.a.createElement("img",{src:"https://lapses-screening.s3.amazonaws.com/web_l-02.png",className:"port_imgs"}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"desc_title",style:{fontSize:"48px"}},"Masturbating with ",n.a.createElement("br",null),n.a.createElement("br",null),"the randomly rearranged vulva"),n.a.createElement("p",{className:"desc_p"},"Nahee.app > My masturbation could end in 5 mins \u3030\ufe0f this plan for the randomly rearranged vulva might add a little bit more self-foreplay time to it before i get there"),n.a.createElement("img",{src:"https://lapses-screening.s3.amazonaws.com/mastu-01.png",className:"port_imgs"}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"desc_title"},"MyClit"),n.a.createElement("p",{className:"desc_p"},"e-clits for all \u2728 lick / shake / pinch them"),n.a.createElement("img",{src:"https://lapses-screening.s3.amazonaws.com/myclit.png",className:"port_imgs"}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"desc_title"},"Tactics"),n.a.createElement("p",{className:"desc_p"},"How to satisfy Nahee.app with various iOS touch gestures (EarViewController.swift, BoobViewController.swift, VulvaViewController.swift)"),n.a.createElement("img",{src:"https://lapses-screening.s3.amazonaws.com/tactics_i-01.png",className:"port_imgs_tactics"}),n.a.createElement("img",{src:"https://lapses-screening.s3.amazonaws.com/tactics_i-02.png",className:"port_imgs_tactics"}),n.a.createElement("img",{src:"https://lapses-screening.s3.amazonaws.com/tactics_i-03.png",className:"port_imgs_tactics"}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"desc_title",style:{fontSize:"48px"}},"Thinking myself lubricating",n.a.createElement("br",null),n.a.createElement("br",null),"makes myself lubricating"),n.a.createElement("img",{src:"https://lapses-screening.s3.amazonaws.com/flowchart_ss-07.png",className:"port_imgs"}),n.a.createElement("img",{src:"https://lapses-screening.s3.amazonaws.com/IMG_3315.JPG",className:"port_imgs"}),n.a.createElement("br",null)),n.a.createElement("br",null),n.a.createElement("br",null))}),e)),n.a.createElement(o.a,(a={exact:!0,path:"/shellhouse"},Object(c.a)(a,"exact",!0),Object(c.a)(a,"render",function(){return n.a.createElement("div",null,n.a.createElement("img",{src:"babycounter.png",style:{width:"100%"}}))}),a)),n.a.createElement(o.a,(t={exact:!0,path:"/torrents_of_sex"},Object(c.a)(t,"exact",!0),Object(c.a)(t,"render",function(){return n.a.createElement("div",null,n.a.createElement("br",null),"\xa0\xa0\xa0\xa0",n.a.createElement("a",{href:"https://lapses-screening.s3.amazonaws.com/torrents_of_sex.pdf",style:{width:"100%",margin:"36px"}},"Download"))}),t)),n.a.createElement(o.a,(r={exact:!0,path:"/"},Object(c.a)(r,"exact",!0),Object(c.a)(r,"render",function(){return n.a.createElement(_,null)}),r))))))}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.2ed74448.chunk.js.map