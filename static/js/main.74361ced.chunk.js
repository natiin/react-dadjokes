(this.webpackJsonpcurrent=this.webpackJsonpcurrent||[]).push([[0],{27:function(e,t,s){},28:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var o=s(3),n=s.n(o),i=s(19),a=s.n(i),c=(s(27),s(28),s(4)),r=s.n(c),u=s(22),l=s(20),d=s(5),j=s(6),p=s(7),h=s(2),v=s(9),b=s(8),k=(s(30),s(31),s(0)),f=function(e){Object(v.a)(s,e);var t=Object(b.a)(s);function s(e){var o;return Object(j.a)(this,s),(o=t.call(this,e)).upvote=o.upvote.bind(Object(h.a)(o)),o.downvote=o.downvote.bind(Object(h.a)(o)),o}return Object(p.a)(s,[{key:"getColor",value:function(){return this.props.votes>=15?"#4CAF50":this.props.votes>=12?"#8BC34A":this.props.votes>=9?"#CDDC39":this.props.votes>=6?"#FFEB3B":this.props.votes>=3?"#FFC107":this.props.votes>=0?"#FF9800":"#f44336"}},{key:"getEmoji",value:function(){return this.props.votes>=15?"em em-rolling_on_the_floor_laughing":this.props.votes>=12?"em em-laughing":this.props.votes>=9?"em em-smiley":this.props.votes>=6?"em em-slightly_smiling_face":this.props.votes>=3?"em em-neutral_face":this.props.votes>=0?"em em-confused":"em em-angry"}},{key:"upvote",value:function(e){this.props.upvoteJoke(this.props.id)}},{key:"downvote",value:function(e){this.props.downvoteJoke(this.props.id)}},{key:"render",value:function(){return Object(k.jsxs)("div",{className:"Joke",children:[Object(k.jsxs)("div",{className:"Joke-voting",children:[Object(k.jsx)("button",{className:"btn-up",onClick:this.upvote,children:Object(k.jsx)("i",{className:"bi bi-arrow-up-short up"})}),Object(k.jsx)("span",{className:"circle",style:{borderColor:this.getColor()},children:this.props.votes}),Object(k.jsx)("button",{className:"btn-down",onClick:this.downvote,children:Object(k.jsx)("i",{className:"bi bi-arrow-down-short down"})})]}),Object(k.jsx)("div",{className:"Joke-text",children:Object(k.jsx)("p",{children:this.props.joke})}),Object(k.jsx)("div",{className:"Joke-smiles",children:Object(k.jsx)("i",{className:this.getEmoji()})})]})}}]),s}(o.Component),m=s(21),O=s.n(m),g=function(e){Object(v.a)(s,e);var t=Object(b.a)(s);function s(e){var o;return Object(j.a)(this,s),(o=t.call(this,e)).state={jokes:JSON.parse(window.localStorage.getItem("jokes")||"[]"),loading:!1},o.upvote=o.upvote.bind(Object(h.a)(o)),o.downvote=o.downvote.bind(Object(h.a)(o)),o.handleClick=o.handleClick.bind(Object(h.a)(o)),o}return Object(p.a)(s,[{key:"componentDidMount",value:function(){0===this.state.jokes.length&&this.getJokes()}},{key:"upvote",value:function(e){var t=this;this.setState((function(t){return{jokes:t.jokes.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{votes:t.votes+1}):t}))}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(t.state.jokes))}))}},{key:"downvote",value:function(e){var t=this;this.setState((function(t){return{jokes:t.jokes.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{votes:t.votes-1}):t}))}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(t.state.jokes))}))}},{key:"getJokes",value:function(){var e=Object(l.a)(r.a.mark((function e(){var t,s,o,n,i=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new Set(this.state.jokes.map((function(e){return e.id}))),e.prev=1,s={headers:{Accept:"application/json"}},o=[],n=r.a.mark((function e(){var n,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://icanhazdadjoke.com/",s);case 2:n=e.sent,i=n.data,t.has(i.id)||o.find((function(e){return e.id===i.id}))?console.log("Found a duplicate"):o.push({joke:i.joke,id:i.id,votes:0});case 5:case"end":return e.stop()}}),e)}));case 5:if(!(o.length<this.props.num)){e.next=9;break}return e.delegateYield(n(),"t0",7);case 7:e.next=5;break;case 9:this.setState((function(e){return{loading:!1,jokes:[].concat(Object(u.a)(e.jokes),o)}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(i.state.jokes))})),e.next=16;break;case 12:e.prev=12,e.t1=e.catch(1),alert(e.t1),this.setState({loading:!1});case 16:case"end":return e.stop()}}),e,this,[[1,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleClick",value:function(){this.setState({loading:!0},this.getJokes)}},{key:"render",value:function(){var e=this;if(this.state.loading)return Object(k.jsx)("div",{className:"JokesDisplay-loader",children:Object(k.jsx)("span",{className:"JokesDisplay-loader-text",children:"Loading"})});var t=this.state.jokes.sort((function(e,t){return t.votes-e.votes}));return t=t.map((function(t){return Object(k.jsx)(f,{joke:t.joke,id:t.id,votes:t.votes,upvoteJoke:e.upvote,downvoteJoke:e.downvote},t.id)})),Object(k.jsxs)("section",{className:"JokesDisplay-wrapper",children:[Object(k.jsxs)("div",{className:"JokesDisplay-sidebar",children:[Object(k.jsxs)("p",{children:[Object(k.jsx)("strong",{children:"Dad"}),Object(k.jsx)("br",{})," Jokes"]}),Object(k.jsx)("img",{src:"https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg",alt:"smile-logo"}),Object(k.jsx)("button",{onClick:this.handleClick,children:"Fetch Jokes"})]}),Object(k.jsx)("div",{className:"JokesDisplay-container",children:t}),";"]})}}]),s}(o.Component);g.defaultProps={num:25};var x=g;var w=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(x,{})})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,52)).then((function(t){var s=t.getCLS,o=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),o(e),n(e),i(e),a(e)}))};a.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(w,{})}),document.getElementById("root")),y()}},[[51,1,2]]]);
//# sourceMappingURL=main.74361ced.chunk.js.map