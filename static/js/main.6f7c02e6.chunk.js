(this.webpackJsonpmovie_app_1=this.webpackJsonpmovie_app_1||[]).push([[0],{45:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var n=s(2),a=s.n(n),i=s(14),c=s.n(i),r=s(5),o=s.n(r),l=s(15),m=s(16),d=s(17),j=s(20),u=s(19),v=s(18),p=s.n(v),h=(s(45),s(0));var b=function(e){e.id;var t=e.year,s=e.title,n=e.summary,a=e.poster,i=e.genres;return Object(h.jsxs)("div",{className:"movies_movie",children:[Object(h.jsx)("img",{src:a,alt:s,title:s}),Object(h.jsxs)("div",{className:"movie_data",children:[Object(h.jsx)("h3",{className:"movie_title",children:s}),Object(h.jsx)("h5",{className:"movie_year",children:t}),Object(h.jsx)("ul",{className:"genres",children:i.map((function(e,t){return Object(h.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(h.jsx)("p",{className:"movie_summary",children:n})]})]})},g=(s(47),function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(m.a)(this,s),(n=t.call(this,e)).state={isLoading:!0,movies:[]},n.getMovies=Object(l.a)(o.a.mark((function e(){var t,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:t=e.sent,s=t.data.data.movies,n.setState({movies:s,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),console.log("hello"),n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){console.log("componenr redndsdds"),this.getMovies()}},{key:"componentDidUpdate",value:function(){console.log("update")}},{key:"render",value:function(){console.log("render");var e=this.state,t=e.isLoading,s=e.movies;return Object(h.jsx)("section",{className:"container",children:t?Object(h.jsx)("div",{className:"loadaer",children:Object(h.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(h.jsx)("div",{className:"movies",children:s.map((function(e){return console.log(e.genres),Object(h.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(a.a.Component));c.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.6f7c02e6.chunk.js.map