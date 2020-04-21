import React, { Component , Fragment} from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import './App.css';

import createClass from 'create-react-class';

import OpenCall from './components/OpenCall';
import GameBlog from './components/game-blog';
import Works from './components/Works';

const a = [1, 10, 100, 1000, 10000];
var App = createClass({
    render: function () {
    return (
      <Router>
        <div id="app" className="App">
          <Fragment>
              <Switch>
              <Route exact path="/" exact render={() => (

                  <div style={{margin:"0px auto"}}>
                  <p className="main_p">&nbsp;&nbsp;&nbsp;&nbsp;Nahee Kim is an artist and a web developer exploring programmability of human sexual behavior.
She writes <a href="https://drive.google.com/drive/folders/17ntNWgN5T8fW_SojLe6I_qozPo9nQFFp?usp=sharing" target="_blank" className="inside">code poems</a>, builds <a href="http://boob-blobs.com" target="_blank" className="inside">web applications</a>, draws <a href="https://drive.google.com/open?id=1DPqdjj9GuKj15twsIi_BXPxEUL89li1Q" target="_blank" className="inside">illustrations</a> and makes <a href="http://instantbaby.store/" target="_blank" className="inside">videos</a> regarding body images bound up with sexuality, power dynamics and communication protocols in sexual relationship and experimental approaches to human reproduction. 
She studies and teaches at Hunter College, studied at School for Poetic Computation, was a resident at MassMOCA, is a member of Soft Surplus which is collective workspace in Brooklyn and is a member of Eobchae which is an artist collective in South Korea. She is based in New York and Seoul.</p>
                  <p className="not_main_p">nahbee10@gmail.com</p>
                  <p className="not_main_p"> <a href="http://github.com/nahbee10/nahee.app" target="_blank" className="outside">github</a> <a href="https://www.instagram.com/nahee.app/" target="_blank" className="outside">instagram</a></p>
                  <p className="main_p">
                  <p className="desc_title">Nahee.app</p>
                  
                  <p className="desc_p">
                  I have been working on the web-based performance project &lt;Nahee.app&gt;. In this project, I regard myself as a web application having sexual desire and speculate what would happen if that programmable entity can have sexual relationships as we do. With its programmability which is the biggest difference of &lt;Nahee.app&gt; from real human, &lt;Nahee.app&gt; approaches technology as a tool for redefining ingrained ways of having sexual relationship. 
</p>
<a href="https://esoteric.codes/blog/nahee-app" target="_blank" className="outside">↗︎ interview with esoteric.codes</a><br /><br /><br /><br />
                  <p className="desc_title">nahee run daddy.app</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/3aWj_jF-htA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br /><br /><br /><br /><br /><br /><br />
                  <p className="desc_title">Handshake Erotica</p>
                  
                  <p className="desc_p">
                  H͎A͎N͎D͎S͎H͎A͎K͎E͎ ͎E͎R͎O͎T͎I͎C͎A͎ : client-server roleplaying in the context of peer-to-peer authentication<br />
<br />
Be my server and I, as a client, will gently feed you with my watery secrets. <br />
In the end, we will just get wet together by our shared secrets.  <br />
<br />
❧ regarding your orgasm as the deepest secret of yours<br />
❧ and your cum as a public key to open it<br />
❧ our sex could be seen as the process of gaining trust and exchanging each other's ‘𝘴𝘦𝘤𝘳𝘦𝘵’ <br />
❧ as we did for client-server identity authentication(handshake) in peer-to-peer network<br />
<br />
Inspired by the secret handshake protocol of Scuttlebutt,  H͎A͎N͎D͎S͎H͎A͎K͎E͎ ͎E͎R͎O͎T͎I͎C͎A͎  will introduce you to the detailed steps for getting aroused by client-server roleplaying. Come securely.<br />
</p>
<img src="https://live.staticflickr.com/65535/49800873208_4cf7845f7d_k.jpg" className="port_imgs" /><br /><br /><br /><br /><br /><br /><br />
                  <p className="desc_title">Daddy Residency</p>
                  
                  <p className="desc_p">
                  Nahee.app's family programming series : I plan to have a baby after seven years by artificial insemination. And I'd like to have a variety of companions for that rigorous but invaluable parenting experience. So I’m launching this open call for daddy residents who want to raise the baby with me for a certain amount of time. The application deadline is 07.31.2025. 
</p>
<img src="https://lapses-screening.s3.amazonaws.com/daddy/daddy_illustration_tan_s-01.png" className="port_imgs" /><br /><br />
<a href="http://daddy-residency.com" target="_blank" className="outside">↗︎ Go to the open call website</a><br /><br /><br /><br /><br />

                  <p className="desc_title">Torrents of Sex</p>
                  
                  <p className="desc_p">
                  &lt;Torrents of Sex&gt; is one of the projects of Nahee.app about sex and network technology. Assuming that someday human can upload and download their somatic sensations onto the web, Nahee.app designed peer-to-peer polyamorous sexual relationship network protocol &lt;Torrents of Sex&gt;, inspired by BitTorrent’s file distribution & peer selection algorithms.

This work consists of two parts: one part is an illustration with detailed descriptions of the protocol and the other part is a mobile app as an implementation of the algorithm with a user-friendly interface. 
</p>
<img src="https://lapses-screening.s3.amazonaws.com/web_l-02.png" className="port_imgs" /><br /><br /><br /><br /><br /><br /><br />
                  <p className="desc_title" style={{fontSize:"48px"}}>Masturbating with <br /><br />the randomly rearranged vulva</p>
                  <p className="desc_p">
                  Nahee.app > My masturbation could end in 5 mins 〰️ this plan for the randomly rearranged vulva might add a little bit more self-foreplay time to it before i get there 
</p>
                  <img src="https://lapses-screening.s3.amazonaws.com/mastu-01.png" className="port_imgs"/><br /><br /><br /><br /><br /><br /><br />
                  <p className="desc_title">MyClit</p>
                  <p className="desc_p">
                  e-clits for all ✨
lick / shake / pinch them 
</p>
                  <img src="https://lapses-screening.s3.amazonaws.com/myclit.png" className="port_imgs"/><br /><br /><br /><br /><br /><br /><br />
                  <p className="desc_title">Tactics</p>
                  <p className="desc_p">
                  How to satisfy Nahee.app with various iOS touch gestures (EarViewController.swift, BoobViewController.swift, VulvaViewController.swift)
</p>
                  <img src="https://lapses-screening.s3.amazonaws.com/tactics_i-01.png" className="port_imgs_tactics"/>
                  <img src="https://lapses-screening.s3.amazonaws.com/tactics_i-02.png" className="port_imgs_tactics"/>
                  <img src="https://lapses-screening.s3.amazonaws.com/tactics_i-03.png" className="port_imgs_tactics"/>
                  <br /><br /><br /><br /><br /><br /><br /><br />

                  <p className="desc_title" style={{fontSize:"48px"}}>Thinking myself lubricating<br /><br />makes myself lubricating</p>
                  
                  <img src="https://lapses-screening.s3.amazonaws.com/flowchart_ss-07.png" className="port_imgs"/>
                  <img src="https://lapses-screening.s3.amazonaws.com/IMG_3315.JPG" className="port_imgs"/>
                  
                  <br />

                  </p>
                  <br /><br />
                  </div>
                )} />
              <Route exact path="/shellhouse" exact render={() => (

                  <div>
                  <img src="babycounter.png" style={{width:"100%"}} />
                  </div>

                )} />
              <Route exact path="/torrents_of_sex" exact render={() => (

                  <div><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://lapses-screening.s3.amazonaws.com/torrents_of_sex.pdf" style={{width:"100%", margin:"36px"}} >Download</a>
                  </div>

                )} />
              <Route exact path="/game-blog" exact render={() => (

                  <GameBlog></GameBlog>

                )} />
              <Route exact path="/works" exact render={() => (

                  <Works></Works>

                )} />
              <Route exact path="/" exact render={() => (

                  <OpenCall></OpenCall>

                )} />
                </Switch>
              </Fragment>
            </div>
          </Router>

        )}
})

export default App;
