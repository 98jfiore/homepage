(this.webpackJsonpreact_mysite=this.webpackJsonpreact_mysite||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},22:function(e,t,a){e.exports=a(33)},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),o=a.n(i),l=(a(27),a(1)),c=a(2),s=a(4),m=a(3),u=(a(13),a(14),a(5)),h=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"banner-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"banner"},r.a.createElement("h2",null,"Joseph Fiore"),r.a.createElement("span",null,"Welcome to my personal site."))))}}]),a}(n.Component),p=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{id:"copyright"},"\xa9 Untitled. All rights reserved. | Design: ",r.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP")))}}]),a}(n.Component),d=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=[];return this.props.links.forEach((function(t){e.push(r.a.createElement("li",null,r.a.createElement("a",{href:t.link},t.text)))})),r.a.createElement("div",{className:"col-3 col-6-medium col-12-small"},r.a.createElement("ul",{className:"link-list"},e))}}]),a}(n.Component),b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-8 col-12-medium"},r.a.createElement("section",null,r.a.createElement("h2",null,"Personal Links"),r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement(d,{links:[{text:"Twitter",link:"https://twitter.com/ImFioreous"}]}),r.a.createElement(d,{links:[{text:"LinkedIn",link:"https://www.linkedin.com/in/joseph-fiore-151664175"}]}),r.a.createElement(d,{links:[]}),r.a.createElement(d,{links:[]})))))}}]),a}(n.Component),g=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"controls"},r.a.createElement("a",{href:this.props.link,className:"button"},this.props.text))}}]),a}(n.Component),f=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-4 col-12-medium"},r.a.createElement("section",null,r.a.createElement("h2",null,"This Site"),r.a.createElement("p",null,'This site is based on a template provided by htmltup.net call minimaxing. It has been translated into React and edited by me. If you would like to view the original template click on the "template" buton below. If you would like to contact me, please do so at 98jfiore@gmail.com.'),r.a.createElement(g,{link:"https://html5up.net/minimaxing",text:"Template"})))}}]),a}(n.Component),y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"footer-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null),r.a.createElement(f,null)),r.a.createElement(p,null)))}}]),a}(n.Component),E=a(10),v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return this.props.current===this.props.text?r.a.createElement("a",{href:this.props.link,className:"current-page-item"},this.props.text):r.a.createElement("a",{href:this.props.link},this.props.text)}}]),a}(n.Component),w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{id:"header"},r.a.createElement("h1",null,r.a.createElement(E.b,{to:"/react_mysite/home"},r.a.createElement("div",{id:"logo"},"Fiore"))),r.a.createElement("nav",{id:"nav"},r.a.createElement(E.b,{to:"/react_mysite/home"},r.a.createElement(v,{text:"Homepage",current:this.props.at})),r.a.createElement(E.b,{to:"/react_mysite/resume"},r.a.createElement(v,{text:"Resume",current:this.props.at})),r.a.createElement(E.b,{to:"/react_mysite/other_interests"},r.a.createElement(v,{text:"Personal Interests",current:this.props.at}))))}}]),a}(n.Component),j=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"header-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(w,{at:this.props.at})))))}}]),a}(n.Component),k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(E.b,{to:this.props.link},r.a.createElement("a",{href:"/#",className:"button"},this.props.text))}}]),a}(n.Component),O=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-6 col-12-medium"},r.a.createElement("article",{className:"blog-post"},r.a.createElement("h2",null,this.props.title),r.a.createElement("a",{href:this.props.imageLink},r.a.createElement("img",{src:this.props.image,alt:"",className:"top blog-post-image"})),r.a.createElement("h3",null,this.props.subtitle),r.a.createElement("p",null,this.props.children),r.a.createElement("footer",{className:"controls"},r.a.createElement(k,{link:this.props.link,text:this.props.linkText}))))}}]),a}(n.Component),I=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=[];return this.props.entries.forEach((function(t){e.push(r.a.createElement("li",null,r.a.createElement("a",{href:t.link},r.a.createElement("img",{src:t.image,alt:"",className:"left"})),r.a.createElement("h3",null,t.title),r.a.createElement("p",null,t.body)))})),r.a.createElement("div",{className:"col-6 col-12-medium"},r.a.createElement("section",null,r.a.createElement("h2",null,this.props.title),r.a.createElement("p",null,this.props.mainBody),r.a.createElement("ul",{className:"big-image-list"},e)))}}]),a}(n.Component),N=(n.Component,function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=[];return this.props.pics.forEach((function(t){e.push(r.a.createElement("li",null,r.a.createElement("img",{src:t.image,alt:"",className:"left"}),r.a.createElement("h4",null,t.name),r.a.createElement("p",null,t.body)))})),r.a.createElement("div",{className:"col-4 col-6-medium col-12-small"},r.a.createElement("section",null,r.a.createElement("h2",null,this.props.title),r.a.createElement("ul",{className:"small-image-list"},e)))}}]),a}(n.Component)),C=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-4 col-12-medium"},r.a.createElement("section",null,r.a.createElement("h2",null,this.props.title),r.a.createElement("p",null,this.props.children),r.a.createElement("footer",{className:"controls"},r.a.createElement(k,{link:this.props.link,text:this.props.buttonText}))))}}]),a}(n.Component),T=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("section",{className:"pdf_container"},r.a.createElement("embed",{src:this.props.pdfsource,className:"pdf"})))}}]),a}(n.Component),P=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"col-12"},r.a.createElement("section",null,r.a.createElement("h2",null,this.props.title),this.props.children))}}]),a}(n.Component),x=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-4 col-12-medium"},r.a.createElement("section",null,r.a.createElement("h2",null,this.props.title),r.a.createElement("p",null,this.props.children)))}}]),a}(n.Component),M=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-4 col-6-medium col-12-small"},r.a.createElement("section",null,r.a.createElement("ul",{className:"med-image-entry"},r.a.createElement("h4",null,this.props.title),r.a.createElement("img",{src:this.props.image,alt:"",className:"left"}),r.a.createElement("p",null,this.props.children))))}}]),a}(n.Component),J=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("hr",{style:{color:"#007294",backgroundColor:"#c8d2bc",height:5,marginTop:"25px",marginBottom:"25px"}})}}]),a}(n.Component),B=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-4 col-6-medium col-12-small"},r.a.createElement("section",null,r.a.createElement("ul",{className:"med-image-entry"},r.a.createElement("h4",null,this.props.title),r.a.createElement("p",null,this.props.children),r.a.createElement("footer",{className:"controls"},r.a.createElement("a",{href:this.props.link,className:"button"},this.props.buttonText)))))}}]),a}(n.Component),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"main"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row main-row"},r.a.createElement(N,{title:"Who am I?",pics:[{image:"images/NicePic.png",name:"Joseph Paul Fiore",body:"I am a current Honors student at NJIT Majoring in Computer Science and Minoring in Applied Mathematics."}]}),r.a.createElement(C,{title:"My Education",link:"https://www.youtube.com/channel/UCUIlwhmEF9lpBjBm5EUG3kA/videos",buttonText:"NJIT Math Club YouTube"},"I am currently working on my BS in Computer Science at ",r.a.createElement("a",{href:"https://www.njit.edu/"},"The New Jersey Institute of Technology"),".  I have been on the Dean's List in each semester since I started attending and currently have a 4.0 GPA. In fall 2020, I will begin taking Master's level courses in order to get a head start when I start working on my MS after graduating. Outside of Academics, I am a member of the NJIT chapter of the ACM and edit YouTube videos for the Math Club."),r.a.createElement(N,{title:"My Values",pics:[{image:"images/checklist.jpg",name:"Work Ethic",body:"I believe the before anything else, you must always fulfill your commitments.  Once you agree to do something you must see it through to its conclusion.  My assignments are always completed ahead of schedule."},{image:"images/comm.jpg",name:"Personal Values",body:"Honest and clear communication is one of the most important skills to have.  Before everything else, the ability to share ideas clearly and concisely, while remaining honest, will make any task significantly easier."}]}),r.a.createElement(I,{title:"Projects",mainBody:"Below are listed a few of the projects I have worked on and brief descriptions of what they were.",entries:[{image:"images/website.png",title:"Personal Site",body:"As written elsewhere on this page, this site is a personal project of mine.  I took a template site provided by html5up.net and translated it into React.  I also edited the some of the site's format to fit my needs better."},{image:"images/mssgServer.png",title:"Encrypted Messaging Project",body:"Written in Python, I programmed a server and client set up that would allow messaging between different clients.  I implemented a number of cybersecurity techniques to make the set up as secure as possible, including end-to-end encryption, user authentication, and server authentication."},{image:"images/hack2019.png",title:"Hack NJIT 2019 Project",body:"This project was completed in a three person team in 24 hours utilizing Python, SQL, HTML, CSS, and the Google Cloud.  The project would take in a user's Pizza order and output recomendations for movies to pair with it."},{image:"images/hack2017.png",title:"Hack NJIT 2017 Project",body:"This project was completed in a 4 person team utilizing Android Studio.  The team developed an app that would assist in studying by blocking incoming messages and alerts during a preset period of time."},{image:"images/books.png",title:"Logan Hall Library Project",body:"A non-programming project I conducted in 2016.  The project was collecting a large amount of books for the purpose of donating to the Logan Hall Halfway Home in Newark, NJ.  To conduct the project, I had to spend weeks spreading the word and eventually lead a group of over 50 people to sort and deliver the books."}]}),r.a.createElement(O,{title:"Non-Computer Interests",image:"images/movieScreen.jpg",subtitle:"What I enjoy",link:"/react_mysite/other_interests",linkText:"Reviews"},"Outside of academia and Computer Science I have other interests.  My biggest hobby is baking, I love spending hours on a recipe making sure I get everything right and being able to share the fruits of my labor at the end.  I'm always on the lookout for new things to make and expand my skils. I am also a big fan of animation and video games, I greatly enjoy analyzing the media that I enjoy so that I am able to have detailed, in depth discusions about my thoughts and feelings on specific subjects. Additionally, I enjoy reading theory behind these artforms so I can better appreciate the effort and skill that goes into crafting such incredible projects.  In general, I like breaking down my emotions on art, which is why I also enjoy writing brief reviews of the movies I see.  Whenever I see a movie in the year it comes out, I write a brief review going over my thoughts on the quality and meanning of the movie.  The page linked below contains links to all of these reviews."))))}}]),a}(n.Component),A=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"page-wrapper"},r.a.createElement(j,{at:"Homepage"}),r.a.createElement(h,null),r.a.createElement(S,null),r.a.createElement(y,null))}}]),a}(n.Component),R=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"main"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row main-row"},r.a.createElement(P,{title:"My Resume"},r.a.createElement("p",null,"Below you will find my resume, up to date as of Summer 2020.  If you have any questions or inquires please feel free to reach out at the contact information listed."),r.a.createElement("p",null,"In addition to what is listed, I have begun work towards my Master's Degree utilizing NJIT's BS/MS program although I am still only an undergraduate student.  While the expected graduation for my B.S. is correct, my expected graduation for my M.S. is May 2022.")),r.a.createElement(T,{pdfsource:"pdfs/JosephFiore_ResumeFall2020.pdf"}))))}}]),a}(n.Component),G=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"page-wrapper"},r.a.createElement(j,{at:"Resume"}),r.a.createElement(R,null),r.a.createElement(y,null))}}]),a}(n.Component),W=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"main"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row main-row"},r.a.createElement(P,{title:"Why Include other interests?"},r.a.createElement("p",null,"This website is a personal website meant to be shared to those interested in my abilities in professional capacity, so why should I include information not related to my career?  I believe that it's important to present a clear image of yourself in order for others to understand you deeper.  That is why this page is included, so that anyone who wishes to read this site can get to understand me as a person, and not just as a programmer, a little better."))),r.a.createElement(J,null),r.a.createElement("div",{className:"row main-row"},r.a.createElement(x,{title:"Cooking/Baking"},"I've been baking for a few years now and have been gradually improving at it. I believe that baking requires patience and practice in order to get correctly. You need to be prepared to fail when trying out something new in order to eventually create something great."),r.a.createElement(M,{image:"images/birthdayCake.JPG",title:"Birthday Cake"},"A vanilla sponge with a raspberry filling and buttercream icing."),r.a.createElement(M,{image:"images/saltwaterTaffy.JPG",title:"Saltwater Taffy"},"A bunch of vanilla saltwater taffy wrapped in parchment paper."),r.a.createElement(M,{image:"images/cinnamonRoll.JPG",title:"Cinnamon Roll"},"One of a batch of homemade cinnamon rolls with a cream cheese frosting."),r.a.createElement(M,{image:"images/keyLimePie.JPG",title:"Key Lime Pie"},"A key lime pie with a graham cracker crust and homemade whipped topping."),r.a.createElement(M,{image:"images/swissRoll.JPG",title:"Swiss Roll"},"A chocolate sponge roll with a cream filling and chocolate ganache."),r.a.createElement(M,{image:"images/bakedAlaska.JPG",title:"Baked Alaska"},"Vanilla, strawberry, and black raspberry ice cream covered in an Italian maringue and bruleed."),r.a.createElement(M,{image:"images/baklava.JPG",title:"Baklava"},"Filo dough with a walnut pistachio filling covered with a sugar syrup."),r.a.createElement(M,{image:"images/saltedCaramelChocolateTart.JPG",title:"Salted Caramel and Chocolate Tart"},"A chocolate tart crust with a salted caramel and peanuts filling topped with a chocolate ganache."),r.a.createElement(M,{image:"images/fruitTart.JPG",title:"Fruit Tart"},"Vanilla custard inside a tart crust decorated with strawberry, kiwi, raspberries, and blueberries."),r.a.createElement(M,{image:"images/cremeBrulee.JPG",title:"Creme Brulee"},"A vanilla custard with a bruleed top."),r.a.createElement(M,{image:"images/fudge.JPG",title:"Fudge"},"A simple chocolate fudge with peanuts."),r.a.createElement(M,{image:"images/pecanPie.JPG",title:"Pecan Pie"},"Pecan pie filling inside a homemade crust with vanilla ice cream on top."),r.a.createElement(M,{image:"images/peanutBrittle.JPG",title:"Peanut Brittle"},"Carefully made peanut brittle with cayenne pepper for spice."),r.a.createElement(M,{image:"images/pretzels.JPG",title:"Pretzels"},"Homemade pretzels topped with salt, cinnamon sugar, or nothing.")),r.a.createElement(J,null),r.a.createElement("div",{className:"row main-row"},r.a.createElement(x,{title:"Film Criticism"},"Communication is an immensly important skill and one that can be honed with practice.  The way I have gone about honing my ability to effectively communicate my thoughts is by writing my thoughts and feelings on movies I see. Whenever I watch a movie in the year it was released I briefly write my thoughts on it.  I have been doing this for a couple years now dozens of brief reviews written."),r.a.createElement(B,{title:"2020 Movies",link:"https://docs.google.com/document/d/1WwWDbsxdmSaYtQYygTmNgBSKFR5YyWPTtvxgZ2MIXaE/edit?usp=sharing",buttonText:"2020 Reviews"},"2020 has been a rough year for movies with so many delays and cancellations, however there still are some interesting films coming out that deserve to be talked about."),r.a.createElement(B,{title:"Best of 2019",link:"https://docs.google.com/document/d/1yYNhzpO_soYJtvyn2K5wqLThOCVcmqOq8YTBWDyzZV4/edit?usp=sharing",buttonText:"2019 Movies Ranked"},"2019 was a fantastic year at the movies and to commemorate it, I sorted every movie I saw that year in order of most to least favorite."),r.a.createElement(B,{title:"2019 Movies",link:"https://docs.google.com/document/d/1XRxtaIUPTpmU-U1AnqfraWD-kP7dZ0OixsAcZ8ucqtU/edit?usp=sharing",buttonText:"2019 Reviews"},"There were a ton of interesting movies in 2019, so many of which are worth discussing.  From collosal failures, to instant classics and groundbreaking blockbusters, there was a lot to break down."),r.a.createElement(B,{title:"Best of 2018",link:"https://docs.google.com/document/d/1-5lnrRWrXwOPT2BhuZfq2MqFETVMX21MZATc47tsux8/edit?usp=sharing",buttonText:"2018 Movies Ranked"},"In 2018, I did not write down detailed thoughts on the movies I saw, but I still marked everything I saw and sorted them accordingly."))))}}]),a}(n.Component),_=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"page-wrapper"},r.a.createElement(j,{at:"Personal Interests"}),r.a.createElement(W,null),r.a.createElement(y,null))}}]),a}(n.Component),F=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/react_mysite",component:A}),r.a.createElement(u.a,{path:"/react_mysite/home",component:A}),r.a.createElement(u.a,{path:"/react_mysite/resume",component:G}),r.a.createElement(u.a,{path:"/react_mysite/other_interests",component:_}))},H=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"page-wrapper"},r.a.createElement(F,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E.a,null,r.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.31e6d4f4.chunk.js.map