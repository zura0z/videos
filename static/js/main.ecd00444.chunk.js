(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(16),c=a.n(r),s=a(6),l=a.n(s),m=a(17),o=a(2),u=a(3),d=a(5),p=a(4),v=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"search-bar ui segment"},i.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Video Search"),i.a.createElement("input",{type:"text",value:this.state.term,onChange:this.onInputChange}))))}}]),a}(i.a.Component),h=a(18),E=a.n(h).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:25,key:"AIzaSyCDsaH0IhGdVOiCFsxU2mc2dOTrWxTt-hc"}}),b=(a(42),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},i.a.createElement("img",{alt:t.snippet.title,className:"ui image",src:t.snippet.thumbnails.medium.url}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title)))}),f=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return i.a.createElement(b,{key:e.snippet.description,onVideoSelect:a,video:e})}));return i.a.createElement("div",{className:"ui relaxed divided list"},n)},g=function(e){var t=e.video;if(!t)return i.a.createElement("div",{style:{height:"400px"},className:"ui active dimmer"},i.a.createElement("div",{className:"ui big text loader"},"Loading..."));var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{title:"video player",src:a})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("h4",{className:"ui header"},t.snippet.title),i.a.createElement("small",null,t.snippet.publishTime.substring(0,10)),i.a.createElement("br",null),i.a.createElement("small",null,t.snippet.publishTime.substring(11,16)),i.a.createElement("hr",null),i.a.createElement("h5",{className:"ui header"},t.snippet.channelTitle),i.a.createElement("p",null,t.snippet.description)))},N=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(m.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.get("/search",{params:{q:a}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.onTermSubmit("dog")}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement(v,{onFormSubmit:this.onTermSubmit}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(g,{video:this.state.selectedVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(f,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})))))}}]),a}(i.a.Component);c.a.render(i.a.createElement(N,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ecd00444.chunk.js.map