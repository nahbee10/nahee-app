(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(53)},23:function(e,t,a){},24:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(8),s=a.n(r),c=(a(23),a(3)),i=a(55),o=a(56),m=a(57),d=(a(24),a(9)),u=a.n(d),h=a(10),p=a(11),b=a(14),y=a(12),g=a(5),E=a(15),f=(a(28),function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(b.a)(this,Object(y.a)(t).call(this))).state={selectedIndex:0},e.prevButtonClicked=e.prevButtonClicked.bind(Object(g.a)(e)),e.nextButtonClicked=e.nextButtonClicked.bind(Object(g.a)(e)),e}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByTagName("body")[0].setAttribute("style","overflow-x:hidden;overflow-y:hidden;background:#d8e5f4;");var e=document.querySelector(".carousel"),t=document.querySelector(".carousel2"),a=e.offsetHeight,l=t.offsetHeight,n=Math.round(a/2/Math.tan(Math.PI/6)),r=Math.round(l/2/Math.tan(Math.PI/8)),s=60*this.state.selectedIndex*-1,c=45*this.state.selectedIndex*-1,i=e.querySelectorAll(".carousel__cell");e.style.transform="translateZ("+-n+"px) rotateX("+s+"deg)";var o=t.querySelectorAll(".carousel__cell2");t.style.transform="translateZ("+-r+"px) rotateX("+c+"deg)";for(var m=this.state.selectedIndex%6,d=this.state.selectedIndex%8,u=0;u<i.length;u++){var h=i[u];console.log("reminder",m),u==m||u==m-1?(h.style.zIndex=3e3,h.style.opacity=1):m<5&&u==m+1?(h.style.zIndex=2500,h.style.opacity=.5):5==u?(h.style.zIndex=2500,h.style.opacity=.5):(h.style.zIndex=2e3,h.style.opacity=.1)}for(u=0;u<o.length;u++){var p=o[u];console.log("reminder",d),p.style.zIndex=u==d||u==d-1?3e3:u==d+1?2500:2e3}for(u=0;u<i.length;u++){h=i[u];if(u<6){var b=60*u;h.style.transform="rotateX("+b+"deg) translateZ("+n+"px)"}else h.style.opacity=0,h.style.transform="none"}for(u=0;u<o.length;u++){p=o[u];if(u<8){b=45*u;p.style.transform="rotateX("+b+"deg) translateZ("+r+"px)"}else p.style.opacity=0,p.style.transform="none"}}},{key:"rotateCarousel",value:function(e){var t=document.querySelector(".carousel"),a=document.querySelector(".carousel2"),l=t.offsetHeight,n=a.offsetHeight;console.log("cellHeight",e);var r=60*this.state.selectedIndex*-1,s=45*this.state.selectedIndex*-1,c=l,i=n,o=Math.round(c/2/Math.tan(Math.PI/6)),m=Math.round(i/2/Math.tan(Math.PI/8));t.style.transform="translateZ("+-o+"px) rotateX("+r+"deg)",a.style.transform="translateZ("+-m+"px) rotateX("+s+"deg)";for(var d=t.querySelectorAll(".carousel__cell"),u=a.querySelectorAll(".carousel__cell2"),h=this.state.selectedIndex%6,p=this.state.selectedIndex%8,b=0;b<d.length;b++){var y=d[b];console.log("reminder",h),b==h||b==h-1?(y.style.zIndex=3e3,y.style.opacity=1):h<5&&b==h+1?(y.style.zIndex=2500,y.style.opacity=.5):5==h&&0==b?(y.style.zIndex=2500,y.style.opacity=.5):(y.style.zIndex=2e3,y.style.opacity=.1)}for(b=0;b<u.length;b++){var g=u[b];console.log("reminder",p),b==p||b==p-1?(g.style.zIndex=3e3,g.style.opacity=1):p<7&&b==p+1?(g.style.zIndex=2500,g.style.opacity=.5):7==p&&0==b?(g.style.zIndex=2500,g.style.opacity=.5):(g.style.zIndex=2e3,g.style.opacity=.1)}}},{key:"prevButtonClicked",value:function(){console.log("prevButtonClicked");this.state.selectedIndex;this.setState({selectedIndex:this.state.selectedIndex-1},function(){this.rotateCarousel(this.state.selectedIndex)})}},{key:"nextButtonClicked",value:function(){console.log("nextButtonClicked");this.state.selectedIndex;this.setState({selectedIndex:this.state.selectedIndex+1},function(){this.rotateCarousel(this.state.selectedIndex)})}},{key:"updateTransition",value:function(){var e=document.querySelector("div.inner_scene1");return e?e.className="inner_scene":(e=document.querySelector("div.inner_scene")).className="inner_scene1",e}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"opencall_container",style:{width:window.innerWidth,height:window.innerHeight}},n.a.createElement("img",{src:"img/ovum.png",style:{position:"fixed",top:"20px",right:"20px",zIndex:1e4,width:"22%"}}),n.a.createElement("div",{className:"container",style:{width:window.innerWidth,height:window.innerHeight}},n.a.createElement("div",{className:"scene"},n.a.createElement("div",{className:"inner_scene1"},n.a.createElement("img",{src:"img/daddy_opencall-11-11.png",className:"img_apply2"})),n.a.createElement("div",{className:"carousel"},n.a.createElement("div",{className:"carousel__cell"},n.a.createElement("div",{className:"carousel__cell_in"},"Be a part of the experimental family living aside beautiful nature.",n.a.createElement("br",null),"Prove your value as a prepared daddy to your partner.",n.a.createElement("br",null))),n.a.createElement("div",{className:"carousel__cell"},n.a.createElement("div",{className:"carousel__cell_in"},"Nahee Kim who is IRL extended version of Nahee.app plans to have a baby by herself 7 years later(around Summer 2025) with sperm donation. She is looking for daddy residents who are going to dedicate certain amount of time in their life to raise the baby whose prefetus name is Gaji(eggplant in Korean) together. Daddy residents will live together with Nahee and the baby in the same house which is supposed to be located in nice area either in South Korea(Jeju Island) or United States(tbd) close to nature and get stipend during their residency period. ")),n.a.createElement("div",{className:"carousel__cell"},n.a.createElement("div",{className:"carousel__cell_in"},"What Nahee offers",n.a.createElement("br",null),"> place to stay",n.a.createElement("br",null),"> opportunity to experience parenting in real life",n.a.createElement("br",null),"> stipend ($700/month)",n.a.createElement("br",null),"> daddy master class",n.a.createElement("br",null),"> family photo",n.a.createElement("br",null),"> invitation to annual family retreat",n.a.createElement("br",null),"> recommendation letter for each daddy\u2019s future partner about their acheivement",n.a.createElement("br",null))),n.a.createElement("div",{className:"carousel__cell"},n.a.createElement("div",{className:"carousel__cell_in"},"Eligibility",n.a.createElement("br",null),"> older than 30 by the time the residency starts",n.a.createElement("br",null),"> all gender",n.a.createElement("br",null),"> Fluent English or Korean speaker",n.a.createElement("br",null),"> healthy financial status(?)",n.a.createElement("br",null))),n.a.createElement("div",{className:"carousel__cell"},n.a.createElement("div",{className:"carousel__cell_in"},"selection process",n.a.createElement("br",null),"> select candidates for interview(Feb 2025) > interview1(March 2025) > pregnancy(April-August 2025) > interview2(Oct 2025) > final selection (third month of pregrancy) ")),n.a.createElement("div",{className:"carousel__cell"},n.a.createElement("div",{className:"carousel__cell_in"},"FAQ",n.a.createElement("br",null),"> what\u2019s the difference from baby sitting?",n.a.createElement("br",null),"You will rear the baby with me. This residency is not for asking residents to care the child instead of me. The actual time with the baby will be temporary but you will be one of the \u2018parents\u2019 of my child and will be asked to keep this relationship for the rest of your and my baby\u2019s life (if you want to). ",n.a.createElement("br",null),n.a.createElement("br",null),"> is married person also eligible to apply?",n.a.createElement("br",null),"yes ",n.a.createElement("br",null),n.a.createElement("br",null),"> why do you open call 7 year before the residency starts?",n.a.createElement("br",null),"Becoming a parent is serious business and hard work. I want to give plenty of time to me and the applicants to think about whether they really want this and why.",n.a.createElement("br",null),n.a.createElement("br",null),"> what is daddy master class?",n.a.createElement("br",null),"I plan to invite selected applicants\u2019 inspirational daddies in one place and ask them to give to the residents a lecture, talk or workshop - in any format they(inspirational daddies) want to share their experience and knowledge about having and caring a baby.",n.a.createElement("br",null),n.a.createElement("br",null),"> Who\u2019s going to be the baby\u2019s biological father?",n.a.createElement("br",null),"Daddy.app will be announced soon.",n.a.createElement("br",null),n.a.createElement("br",null),"> What happen if Nahee marry someone before the start of the residency?",n.a.createElement("br",null),n.a.createElement("br",null))))),n.a.createElement("div",{className:"carousel-options"},n.a.createElement("p",null,n.a.createElement("button",{className:"previous-button",onClick:function(t){return e.prevButtonClicked(t)}},"Previous"),n.a.createElement("button",{className:"next-button",onClick:function(t){return e.nextButtonClicked(t)}},"Next")))),n.a.createElement("div",{className:"container2",style:{position:"fixed",top:"0",left:"0",width:window.innerWidth,height:window.innerHeight,background:"transparent",pointerEvents:"none"}},n.a.createElement("div",{className:"scene2"},n.a.createElement("div",{className:"carousel2"},n.a.createElement("div",{className:"carousel__cell2"},n.a.createElement("div",{className:"carousel__cell_in2"},n.a.createElement("img",{src:"img/daddy_objects-04.png",style:{}}))),n.a.createElement("div",{className:"carousel__cell2"},n.a.createElement("div",{className:"carousel__cell_in2"},n.a.createElement("img",{src:"img/daddy_objects-06.png",style:{}}),n.a.createElement("img",{src:"img/daddy_objects-05.png",style:{}}),n.a.createElement("img",{src:"img/daddy_objects-07.png",style:{}}))),n.a.createElement("div",{className:"carousel__cell2"},n.a.createElement("div",{className:"carousel__cell_in2"},n.a.createElement("img",{src:"img/daddy_objects-06.png",style:{}}),n.a.createElement("img",{src:"img/daddy_objects-07.png",style:{}}))),n.a.createElement("div",{className:"carousel__cell2"},n.a.createElement("div",{className:"carousel__cell_in2"},n.a.createElement("img",{src:"img/daddy_objects-07.png",style:{}}),n.a.createElement("img",{src:"img/daddy_objects-06.png",style:{}}))),n.a.createElement("div",{className:"carousel__cell2"},n.a.createElement("div",{className:"carousel__cell_in2"},"selection process",n.a.createElement("br",null),"> select candidates for interview(Feb 2025) > interview1(March 2025) > pregnancy(April-August 2025) > interview2(Oct 2025) > final selection (third month of pregrancy) ")),n.a.createElement("div",{className:"carousel__cell2"},n.a.createElement("div",{className:"carousel__cell_in2"},"FAQ",n.a.createElement("br",null),"> what\u2019s the difference from baby sitting?",n.a.createElement("br",null),"You will rear the baby with me. This residency is not for asking residents to care the child instead of me. The actual time with the baby will be temporary but you will be one of the \u2018parents\u2019 of my child and will be asked to keep this relationship for the rest of your and my baby\u2019s life (if you want to). ",n.a.createElement("br",null),n.a.createElement("br",null),"> is married person also eligible to apply?",n.a.createElement("br",null),"yes ",n.a.createElement("br",null),n.a.createElement("br",null),"> why do you open call 7 year before the residency starts?",n.a.createElement("br",null),"Becoming a parent is serious business and hard work. I want to give plenty of time to me and the applicants to think about whether they really want this and why.",n.a.createElement("br",null),n.a.createElement("br",null),"> what is daddy master class?",n.a.createElement("br",null),"I plan to invite selected applicants\u2019 inspirational daddies in one place and ask them to give to the residents a lecture, talk or workshop - in any format they(inspirational daddies) want to share their experience and knowledge about having and caring a baby.",n.a.createElement("br",null),n.a.createElement("br",null),"> Who\u2019s going to be the baby\u2019s biological father?",n.a.createElement("br",null),"Daddy.app will be announced soon.",n.a.createElement("br",null),n.a.createElement("br",null),"> What happen if Nahee marry someone before the start of the residency?",n.a.createElement("br",null),n.a.createElement("br",null)))))))}}]),t}(n.a.Component)),w=u()({render:function(){var e,t,a,r;return n.a.createElement(i.a,null,n.a.createElement("div",{id:"app",className:"App"},n.a.createElement(l.Fragment,null,n.a.createElement(o.a,null,n.a.createElement(m.a,(e={exact:!0,path:"/"},Object(c.a)(e,"exact",!0),Object(c.a)(e,"render",function(){return n.a.createElement("div",{style:{margin:"0px auto"}},n.a.createElement("p",{className:"main_p"},"\xa0\xa0\xa0\xa0Nahee Kim is an artist and a web developer exploring programmability of human sexual behavior. She writes ",n.a.createElement("a",{href:"https://drive.google.com/drive/folders/17ntNWgN5T8fW_SojLe6I_qozPo9nQFFp?usp=sharing",target:"_blank",className:"inside"},"code poems"),", builds ",n.a.createElement("a",{href:"http://boobblobs.com",target:"_blank",className:"inside"},"web applications"),", draws ",n.a.createElement("a",{href:"https://drive.google.com/open?id=1DPqdjj9GuKj15twsIi_BXPxEUL89li1Q",target:"_blank",className:"inside"},"illustrations")," and makes ",n.a.createElement("a",{href:"http://instantbaby.store/",target:"_blank",className:"inside"},"videos")," regarding body images bound up with sexuality, power dynamics and communication protocols in sexual relationship and experimental approaches to human reproduction. She studies and teaches at Hunter College, studied at School for Poetic Computation, was a resident at MassMOCA, is a member of Soft Surplus which is collective workspace in Brooklyn and was a member of Eobchae which is an artist collective in South Korea. She is based in New York and Seoul."),n.a.createElement("p",{className:"not_main_p"},"nahbee10@gmail.com"),n.a.createElement("p",{className:"not_main_p"}," ",n.a.createElement("a",{href:"http://github.com/nahbee10/nahee.app",target:"_blank",className:"outside"},"github")," ",n.a.createElement("a",{href:"https://www.instagram.com/nahee.app/",target:"_blank",className:"outside"},"instagram")),n.a.createElement("p",{className:"main_p"},n.a.createElement("p",{className:"desc_title"},"Nahee.app"),n.a.createElement("p",{className:"desc_p"},"I have been working on the web-based performance project <Nahee.app>. In this project, I regard myself as a web application having sexual desire and speculate what would happen if that programmable entity can have sexual relationships as we do. With its programmability which is the biggest difference of <Nahee.app> from real human, <Nahee.app> approaches technology as a tool for redefining ingrained ways of having sexual relationship."),n.a.createElement("a",{href:"https://esoteric.codes/blog/nahee-app",target:"_blank",className:"outside"},"\u2197\ufe0e interview with esoteric.codes"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"desc_title"},"Torrents of Sex"),n.a.createElement("p",{className:"desc_p"},"<Torrents of Sex> is one of the projects of Nahee.app about sex and network technology. Assuming that someday human can upload and download their somatic sensations onto the web, Nahee.app designed peer-to-peer polyamorous sexual relationship network protocol <Torrents of Sex>, inspired by BitTorrent\u2019s file distribution & peer selection algorithms. This work consists of two parts: one part is an illustration with detailed descriptions of the protocol and the other part is a mobile app as an implementation of the algorithm with a user-friendly interface."),n.a.createElement("img",{src:"https://lapses-screening.s3.amazonaws.com/web_l-02.png",className:"port_imgs"}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"desc_title",style:{fontSize:"48px"}},"Masturbating with ",n.a.createElement("br",null),n.a.createElement("br",null),"the randomly rearranged vulva"),n.a.createElement("p",{className:"desc_p"},"Nahee.app > My masturbation could end in 5 mins \u3030\ufe0f this plan for the randomly rearranged vulva might add a little bit more self-foreplay time to it before i get there"),n.a.createElement("img",{src:"https://lapses-screening.s3.amazonaws.com/mastu-01.png",className:"port_imgs"}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"desc_title"},"MyClit"),n.a.createElement("p",{className:"desc_p"},"e-clits for all \u2728 lick / shake / pinch them"),n.a.createElement("img",{src:"https://lapses-screening.s3.amazonaws.com/myclit.png",className:"port_imgs"}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"desc_title"},"Tactics"),n.a.createElement("p",{className:"desc_p"},"How to satisfy Nahee.app with various iOS touch gestures (EarViewController.swift, BoobViewController.swift, VulvaViewController.swift)"),n.a.createElement("img",{src:"https://lapses-screening.s3.amazonaws.com/tactics_i-01.png",className:"port_imgs_tactics"}),n.a.createElement("img",{src:"https://lapses-screening.s3.amazonaws.com/tactics_i-02.png",className:"port_imgs_tactics"}),n.a.createElement("img",{src:"https://lapses-screening.s3.amazonaws.com/tactics_i-03.png",className:"port_imgs_tactics"}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"desc_title",style:{fontSize:"48px"}},"Thinking myself lubricating",n.a.createElement("br",null),n.a.createElement("br",null),"makes myself lubricating"),n.a.createElement("img",{src:"https://lapses-screening.s3.amazonaws.com/flowchart_ss-07.png",className:"port_imgs"}),n.a.createElement("img",{src:"https://lapses-screening.s3.amazonaws.com/IMG_3315.JPG",className:"port_imgs"}),n.a.createElement("br",null)),n.a.createElement("br",null),n.a.createElement("br",null))}),e)),n.a.createElement(m.a,(t={exact:!0,path:"/shellhouse"},Object(c.a)(t,"exact",!0),Object(c.a)(t,"render",function(){return n.a.createElement("div",null,n.a.createElement("img",{src:"babycounter.png",style:{width:"100%"}}))}),t)),n.a.createElement(m.a,(a={exact:!0,path:"/torrents_of_sex"},Object(c.a)(a,"exact",!0),Object(c.a)(a,"render",function(){return n.a.createElement("div",null,n.a.createElement("br",null),"\xa0\xa0\xa0\xa0",n.a.createElement("a",{href:"https://lapses-screening.s3.amazonaws.com/torrents_of_sex.pdf",style:{width:"100%",margin:"36px"}},"Download"))}),a)),n.a.createElement(m.a,(r={exact:!0,path:"/opencall"},Object(c.a)(r,"exact",!0),Object(c.a)(r,"render",function(){return n.a.createElement(f,null)}),r))))))}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.35ec02c3.chunk.js.map