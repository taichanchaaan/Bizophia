import{_ as w,i as C,o as n,c as l,b as t,e as m,F as u,r as v,d as _,f as k,v as y,l as f,j as h,k as p,t as i,m as g,g as b}from"./index-c0381769.js";const P={name:"CommunityView",data(){return{activeTab:"discussions",currentUser:"ユーザー",newComment:"",showNewPostModal:!1,newPost:{title:"",category:"discussion",content:""},posts:[{id:1,author:{name:"田中太郎",avatar:null},title:"マーケティング戦略について質問です",content:"新規事業のマーケティング戦略を考えています。BtoBビジネスでの効果的なマーケティング手法について、皆さんの経験や知見を教えていただけませんか？",time:"2時間前",category:"question",categoryName:"質問",likes:12,liked:!1,showComments:!1,comments:[{id:1,author:{name:"佐藤健",avatar:null},text:"BtoBマーケティングではコンテンツマーケティングが効果的です。専門性の高い記事やホワイトペーパーを作成して見込み顧客を集めるのがおすすめです。",time:"1時間前"},{id:2,author:{name:"鈴木一郎",avatar:null},text:"展示会やセミナーなどのイベントも重要です。オンラインウェビナーを定期的に開催すると、見込み顧客との接点を増やせます。",time:"45分前"}]},{id:2,author:{name:"山田花子",avatar:null},title:"おすすめのビジネス書籍を教えてください",content:"起業家精神やビジネス戦略について学べる良書を探しています。皆さんのおすすめの本を教えていただけると嬉しいです。",time:"1日前",category:"discussion",categoryName:"ディスカッション",likes:24,liked:!0,showComments:!1,comments:[{id:3,author:{name:"高橋誠",avatar:null},text:"「ゼロ・トゥ・ワン」はスタートアップの本質について学べる名著です。ピーター・ティールの洞察は非常に参考になります。",time:"1日前"},{id:4,author:{name:"村大輔",avatar:null},text:"「ゼロ・トゥ・ワン」は私も愛読しています！ピーター・ティールの視点は独特で刺激になりますよね。",time:"2日前"},{id:5,author:{name:"小林直子",avatar:null},text:"「FACTFULNESS（ファクトフルネス）」もおすすめです。データに基づいた世界の見方を学べて、ビジネス判断にも役立ちます。",time:"1日前"}]}],events:[{id:1,title:"スタートアップピッチイベント",month:"4月",day:"15",time:"18:00 - 20:00",location:"オンライン",description:"新進気鋭のスタートアップ5社によるピッチイベントです。革新的なビジネスアイデアを聞いて、フィードバックを提供する機会です。",participants:45,joined:!1},{id:2,title:"ビジネスモデルワークショップ",month:"4月",day:"22",time:"13:00 - 17:00",location:"渋谷ビジネスハブ",description:"ビジネスモデルキャンバスを使って、実際にビジネスアイデアを形にするワークショップです。参加者同士でフィードバックを行います。",participants:28,joined:!0},{id:3,title:"起業家との対談セッション",month:"5月",day:"5",time:"19:00 - 21:00",location:"オンライン",description:"成功した起業家をゲストに迎え、起業の苦労や成功の秘訣についてお話を伺います。質疑応答の時間もあります。",participants:72,joined:!1}],mentors:[{id:1,name:"佐々木隆",avatar:null,title:"シリアルアントレプレナー / エンジェル投資家",skills:["起業","資金調達","マーケティング"],bio:"IT業界で3社の起業経験があり、2社の成功EXIT実績を持つ。現在はエンジェル投資家として若手起業家の支援を行っている。マーケティングと資金調達が専門分野。"},{id:2,name:"中島恵",avatar:null,title:"マーケティングコンサルタント",skills:["デジタルマーケティング","ブランディング","顧客開発"],bio:"大手広告代理店でのマーケティング経験を活かし、現在は独立してスタートアップのマーケティング支援を行う。特にBtoBマーケティングとコンテンツ戦略が得意。"},{id:3,name:"吉田健一",avatar:null,title:"テクノロジーアドバイザー / CTO",skills:["テクノロジー戦略","プロダクト開発","チームビルディング"],bio:"複数のテック企業でCTOを務めた経験を持つ。技術選定からエンジニア採用、プロダクト開発プロセスの構築まで、技術面での幅広いアドバイスが可能。"}]}},methods:{toggleLike(a){a.liked=!a.liked,a.likes+=a.liked?1:-1},toggleComments(a){a.showComments=!a.showComments},addComment(a){this.newComment&&(a.comments.push({id:Date.now(),author:{name:this.currentUser,avatar:null},text:this.newComment,time:"たった今"}),this.newComment="")},createPost(){if(!this.newPost.title||!this.newPost.content)return;const a={question:"質問",discussion:"ディスカッション",resource:"リソース共有",idea:"アイデア"},s={id:Date.now(),author:{name:this.currentUser,avatar:null},title:this.newPost.title,content:this.newPost.content,time:"たった今",category:this.newPost.category,categoryName:a[this.newPost.category],likes:0,liked:!1,showComments:!1,comments:[]};this.posts.unshift(s),this.showNewPostModal=!1,this.newPost={title:"",category:"discussion",content:""}},joinEvent(a){a.joined=!a.joined,a.participants+=a.joined?1:-1},contactMentor(a){alert(`${a.name}へのメッセージ機能は現在開発中です。`)}}},x={class:"community-view"},T={class:"tab-navigation"},N={key:0,class:"tab-content"},j={class:"post-list"},M={class:"post-header"},B={class:"user-info"},U={class:"user-avatar"},V=["src"],A={key:1,class:"avatar-placeholder"},E={class:"user-name"},q={class:"post-time"},D={class:"post-content"},F={class:"post-title"},L={class:"post-text"},S={class:"post-footer"},I={class:"post-action"},K=["onClick"],z={class:"post-action"},O={key:0,class:"comments-section"},X={class:"user-avatar small"},G=["src"],H={key:1,class:"avatar-placeholder"},J={class:"comment-content"},Q={class:"user-name"},R={class:"comment-time"},W={class:"comment-input"},Y={class:"user-avatar small"},Z={class:"avatar-placeholder"},$=["onKeyup"],tt=["onClick","disabled"],st=["onClick"],et={key:0},ot={key:1},it={key:1,class:"tab-content"},nt={class:"events-list"},lt={class:"event-date"},at={class:"event-month"},dt={class:"event-day"},ct={class:"event-info"},rt={class:"event-title"},mt={class:"event-details"},ut={class:"event-description"},vt={class:"event-footer"},_t={class:"event-participants"},ht=["onClick"],pt={key:2,class:"tab-content"},kt={class:"mentors-list"},yt={class:"mentor-avatar"},bt=["src"],wt={key:1,class:"avatar-placeholder large"},Ct={class:"mentor-info"},ft={class:"mentor-name"},gt={class:"mentor-title"},Pt={class:"mentor-skills"},xt={class:"mentor-bio"},Tt=["onClick"],Nt={key:3,class:"modal"},jt={class:"modal-content"},Mt={class:"modal-header"},Bt={class:"modal-body"},Ut={class:"form-group"},Vt={class:"form-group"},At={class:"form-group"},Et={class:"modal-footer"},qt=["disabled"],Dt={class:"bottom-nav"};function Ft(a,s,Lt,St,o,c){const r=C("router-link");return n(),l("div",x,[s[28]||(s[28]=t("header",{class:"section-header"},[t("h1",null,"コミュニティ")],-1)),t("div",T,[t("div",{class:m(["tab-item",{active:o.activeTab==="discussions"}]),onClick:s[0]||(s[0]=e=>o.activeTab="discussions")}," ディスカッション ",2),t("div",{class:m(["tab-item",{active:o.activeTab==="events"}]),onClick:s[1]||(s[1]=e=>o.activeTab="events")}," イベント ",2),t("div",{class:m(["tab-item",{active:o.activeTab==="mentors"}]),onClick:s[2]||(s[2]=e=>o.activeTab="mentors")}," メンター ",2)]),o.activeTab==="discussions"?(n(),l("div",N,[t("div",{class:"new-post-button",onClick:s[3]||(s[3]=e=>o.showNewPostModal=!0)},s[11]||(s[11]=[t("i",{class:"mdi mdi-plus"},null,-1),t("span",null,"新規投稿",-1)])),t("div",j,[(n(!0),l(u,null,v(o.posts,e=>(n(),l("div",{key:e.id,class:"post-card"},[t("div",M,[t("div",B,[t("div",U,[e.author.avatar?(n(),l("img",{key:0,src:e.author.avatar,alt:"ユーザーアバター"},null,8,V)):(n(),l("div",A,i(e.author.name.charAt(0)),1))]),t("div",null,[t("div",E,i(e.author.name),1),t("div",q,i(e.time),1)])]),t("div",{class:m(["post-category",e.category])},i(e.categoryName),3)]),t("div",D,[t("h3",F,i(e.title),1),t("p",L,i(e.content),1)]),t("div",S,[t("div",I,[t("i",{class:m(["mdi mdi-thumb-up",{active:e.liked}]),onClick:d=>c.toggleLike(e)},null,10,K),t("span",null,i(e.likes),1)]),t("div",z,[s[12]||(s[12]=t("i",{class:"mdi mdi-comment-outline"},null,-1)),t("span",null,i(e.comments.length),1)]),s[13]||(s[13]=t("div",{class:"post-action"},[t("i",{class:"mdi mdi-share-variant-outline"})],-1))]),e.showComments?(n(),l("div",O,[(n(!0),l(u,null,v(e.comments,d=>(n(),l("div",{key:d.id,class:"comment-item"},[t("div",X,[d.author.avatar?(n(),l("img",{key:0,src:d.author.avatar,alt:"ユーザーアバター"},null,8,G)):(n(),l("div",H,i(d.author.name.charAt(0)),1))]),t("div",J,[t("div",Q,i(d.author.name),1),t("p",null,i(d.text),1),t("div",R,i(d.time),1)])]))),128)),t("div",W,[t("div",Y,[t("div",Z,i(o.currentUser.charAt(0)),1)]),k(t("input",{type:"text","onUpdate:modelValue":s[4]||(s[4]=d=>o.newComment=d),placeholder:"コメントを入力...",onKeyup:g(d=>c.addComment(e),["enter"])},null,40,$),[[y,o.newComment]]),t("button",{onClick:d=>c.addComment(e),disabled:!o.newComment},s[14]||(s[14]=[t("i",{class:"mdi mdi-send"},null,-1)]),8,tt)])])):_("",!0),t("div",{class:"show-comments",onClick:d=>c.toggleComments(e)},[e.showComments?(n(),l("span",ot,"コメントを非表示")):(n(),l("span",et,"コメントを表示 ("+i(e.comments.length)+")",1))],8,st)]))),128))])])):_("",!0),o.activeTab==="events"?(n(),l("div",it,[t("div",nt,[(n(!0),l(u,null,v(o.events,e=>(n(),l("div",{key:e.id,class:"event-card"},[t("div",lt,[t("div",at,i(e.month),1),t("div",dt,i(e.day),1)]),t("div",ct,[t("h3",rt,i(e.title),1),t("div",mt,[t("div",null,[s[15]||(s[15]=t("i",{class:"mdi mdi-clock-outline"},null,-1)),b(" "+i(e.time),1)]),t("div",null,[s[16]||(s[16]=t("i",{class:"mdi mdi-map-marker"},null,-1)),b(" "+i(e.location),1)])]),t("p",ut,i(e.description),1),t("div",vt,[t("div",_t,[s[17]||(s[17]=t("i",{class:"mdi mdi-account-group"},null,-1)),b(" "+i(e.participants)+" 人参加予定 ",1)]),t("button",{class:"btn btn-primary btn-sm",onClick:d=>c.joinEvent(e)},i(e.joined?"参加取消":"参加する"),9,ht)])])]))),128))])])):_("",!0),o.activeTab==="mentors"?(n(),l("div",pt,[t("div",kt,[(n(!0),l(u,null,v(o.mentors,e=>(n(),l("div",{key:e.id,class:"mentor-card"},[t("div",yt,[e.avatar?(n(),l("img",{key:0,src:e.avatar,alt:"メンターアバター"},null,8,bt)):(n(),l("div",wt,i(e.name.charAt(0)),1))]),t("div",Ct,[t("h3",ft,i(e.name),1),t("div",gt,i(e.title),1),t("div",Pt,[(n(!0),l(u,null,v(e.skills,d=>(n(),l("span",{key:d,class:"skill-tag"},i(d),1))),128))]),t("p",xt,i(e.bio),1),t("button",{class:"btn btn-outline btn-sm",onClick:d=>c.contactMentor(e)}," メッセージを送る ",8,Tt)])]))),128))])])):_("",!0),o.showNewPostModal?(n(),l("div",Nt,[t("div",jt,[t("div",Mt,[s[18]||(s[18]=t("h3",null,"新規投稿",-1)),t("i",{class:"mdi mdi-close",onClick:s[5]||(s[5]=e=>o.showNewPostModal=!1)})]),t("div",Bt,[t("div",Ut,[s[19]||(s[19]=t("label",{for:"post-title",class:"form-label"},"タイトル",-1)),k(t("input",{type:"text",id:"post-title","onUpdate:modelValue":s[6]||(s[6]=e=>o.newPost.title=e),class:"form-input",placeholder:"タイトルを入力"},null,512),[[y,o.newPost.title]])]),t("div",Vt,[s[21]||(s[21]=t("label",{for:"post-category",class:"form-label"},"カテゴリー",-1)),k(t("select",{id:"post-category","onUpdate:modelValue":s[7]||(s[7]=e=>o.newPost.category=e),class:"form-input"},s[20]||(s[20]=[t("option",{value:"question"},"質問",-1),t("option",{value:"discussion"},"ディスカッション",-1),t("option",{value:"resource"},"リソース共有",-1),t("option",{value:"idea"},"アイデア",-1)]),512),[[f,o.newPost.category]])]),t("div",At,[s[22]||(s[22]=t("label",{for:"post-content",class:"form-label"},"内容",-1)),k(t("textarea",{id:"post-content","onUpdate:modelValue":s[8]||(s[8]=e=>o.newPost.content=e),class:"form-input",rows:"5",placeholder:"投稿内容を入力"},null,512),[[y,o.newPost.content]])])]),t("div",Et,[t("button",{class:"btn btn-outline",onClick:s[9]||(s[9]=e=>o.showNewPostModal=!1)},"キャンセル"),t("button",{class:"btn btn-primary",onClick:s[10]||(s[10]=(...e)=>c.createPost&&c.createPost(...e)),disabled:!o.newPost.title||!o.newPost.content}," 投稿する ",8,qt)])])])):_("",!0),t("nav",Dt,[h(r,{to:"/home",class:"nav-item"},{default:p(()=>s[23]||(s[23]=[t("i",{class:"mdi mdi-home"},null,-1),t("span",null,"ホーム",-1)])),_:1}),h(r,{to:"/quiz-selection",class:"nav-item"},{default:p(()=>s[24]||(s[24]=[t("i",{class:"mdi mdi-book-open-variant"},null,-1),t("span",null,"クイズ",-1)])),_:1}),h(r,{to:"/community",class:"nav-item active"},{default:p(()=>s[25]||(s[25]=[t("i",{class:"mdi mdi-account-group"},null,-1),t("span",null,"コミュニティ",-1)])),_:1}),h(r,{to:"/progress",class:"nav-item"},{default:p(()=>s[26]||(s[26]=[t("i",{class:"mdi mdi-chart-line"},null,-1),t("span",null,"進捗",-1)])),_:1}),h(r,{to:"/profile",class:"nav-item"},{default:p(()=>s[27]||(s[27]=[t("i",{class:"mdi mdi-account"},null,-1),t("span",null,"プロフィール",-1)])),_:1})])])}const Kt=w(P,[["render",Ft],["__scopeId","data-v-197e3c0a"]]);export{Kt as default};
