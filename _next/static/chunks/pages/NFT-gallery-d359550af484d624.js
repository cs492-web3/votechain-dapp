(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3181],{63023:function(t,e){"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.module.reference")},76607:function(t,e,n){"use strict";n(63023)},75679:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/NFT-gallery",function(){return n(91191)}])},91191:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return B}});var a=n(85893),r=n(67294),o=n(63366),i=n(87462),s=n(94780),c=n(90512),l=n(90948),u=n(85845),m=n(1588),d=n(34867);function y(t){return(0,d.ZP)("MuiImageList",t)}(0,m.Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);let p=r.createContext({}),f=["children","className","cols","component","rowHeight","gap","style","variant"],h=t=>{let{classes:e,variant:n}=t;return(0,s.Z)({root:["root",n]},y,e)},g=(0,l.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:n}=t;return[e.root,e[n.variant]]}})(({ownerState:t})=>(0,i.Z)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===t.variant&&{display:"block"})),w=r.forwardRef(function(t,e){let n=(0,u.i)({props:t,name:"MuiImageList"}),{children:s,className:l,cols:m=2,component:d="ul",rowHeight:y="auto",gap:w=4,style:A,variant:C="standard"}=n,b=(0,o.Z)(n,f),v=r.useMemo(()=>({rowHeight:y,gap:w,variant:C}),[y,w,C]);r.useEffect(()=>{},[]);let T="masonry"===C?(0,i.Z)({columnCount:m,columnGap:w},A):(0,i.Z)({gridTemplateColumns:`repeat(${m}, 1fr)`,gap:w},A),I=(0,i.Z)({},n,{component:d,gap:w,rowHeight:y,variant:C}),S=h(I);return(0,a.jsx)(g,(0,i.Z)({as:d,className:(0,c.Z)(S.root,S[C],l),ref:e,style:T,ownerState:I},b,{children:(0,a.jsx)(p.Provider,{value:v,children:s})}))});n(76607);var A=n(50700);function C(t){return(0,d.ZP)("MuiImageListItem",t)}let b=(0,m.Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),v=["children","className","cols","component","rows","style"],T=t=>{let{classes:e,variant:n}=t;return(0,s.Z)({root:["root",n],img:["img"]},C,e)},I=(0,l.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:n}=t;return[{[`& .${b.img}`]:e.img},e.root,e[n.variant]]}})(({ownerState:t})=>(0,i.Z)({display:"block",position:"relative"},"standard"===t.variant&&{display:"flex",flexDirection:"column"},"woven"===t.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{[`& .${b.img}`]:(0,i.Z)({objectFit:"cover",width:"100%",height:"100%",display:"block"},"standard"===t.variant&&{height:"auto",flexGrow:1})})),S=r.forwardRef(function(t,e){let n=(0,u.i)({props:t,name:"MuiImageListItem"}),{children:s,className:l,cols:m=1,component:d="li",rows:y=1,style:f}=n,h=(0,o.Z)(n,v),{rowHeight:g="auto",gap:w,variant:C}=r.useContext(p),b="auto";"woven"===C?b=void 0:"auto"!==g&&(b=g*y+w*(y-1));let S=(0,i.Z)({},n,{cols:m,component:d,gap:w,rowHeight:g,rows:y,variant:C}),x=T(S);return(0,a.jsx)(I,(0,i.Z)({as:d,className:(0,c.Z)(x.root,x[C],l),ref:e,style:(0,i.Z)({height:b,gridColumnEnd:"masonry"!==C?`span ${m}`:void 0,gridRowEnd:"masonry"!==C?`span ${y}`:void 0,marginBottom:"masonry"===C?w:void 0,breakInside:"masonry"===C?"avoid":void 0},f),ownerState:S},h,{children:r.Children.map(s,t=>r.isValidElement(t)?"img"===t.type||(0,A.Z)(t,["Image"])?r.cloneElement(t,{className:(0,c.Z)(x.img,t.props.className)}):t:null)}))}),x=(0,l.ZP)("div")(()=>({height:"100%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"})),k=(0,l.ZP)("div")(()=>({color:"white",width:"100%",margin:5})),N=(0,l.ZP)("div")(()=>({color:"#cce8f4",width:"100%",marginTop:20,textAlign:"center",fontSize:"22px"})),Z=(0,l.ZP)("div")(()=>({color:"white",fontSize:"30px",marginTop:"30px"}));var D=n(25675),M=n.n(D),E={src:"https://cs492-web3.github.io/votechain-dapp//_next/static/media/question.e1020a1e.png",height:2048,width:2048,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAk0lEQVR42gGIAHf/AJkAoBeOW5t8nHuOWqAWmQAAm2qR7bL/4v/i/7T/kOycaQCZ2JX/o/jC/O78tfmR/5rYAJgYnLaJ/8r9x/6K/5usmBcAlACaYZK/sP+q/5PGm1eXAACYBpkAmlGT/5T/mlKZAJgHAJgClwCXNZnhmeKXN5cAmAIAmQCYAJgQmTKZMpgSmACZAa6MRxfyHGMUAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},R=n(62140),F=n(60226);let _=()=>{let[t,e]=(0,r.useState)([]),[n,o]=(0,r.useState)([]);return(0,r.useEffect)(()=>{(async function(){var t=await (0,F.nD)();o(t=t.filter(t=>!t.isDeleted))})()},[]),(0,r.useEffect)(()=>{async function t(t){let n=t.contractAddress.trim(),a=await (0,R.kh)(n),r=await (0,R.Uu)(a,n),o=await (0,R.w4)(a,n);o.map((t,n)=>{e(e=>[...e,{NFTCA:r,tokenId:t}])})}e([]),n.map(e=>t(e))},[n]),(0,a.jsxs)(x,{children:[(0,a.jsx)(Z,{children:"NFT GALLERY"}),(0,a.jsx)(N,{children:"You can Add NFT in your MetaMask with NFT Contract Address and TokenID \uD83E\uDD17"}),(0,a.jsx)(w,{sx:{margin:5},children:t.map((t,e)=>{let n="https://pixxiti.com/ethereum/goerli/nfts/"+t.NFTCA+"/"+t.tokenId;return(0,a.jsxs)(S,{sx:{border:"1px solid rgba(255,255,255,0.2)",borderRadius:10,justifyContent:"center",alignItems:"center",padding:2,margin:1},onClick:()=>window.open(n,"_blank"),children:[(0,a.jsx)(M(),{width:"200",height:"200",src:E,alt:"NFT"}),(0,a.jsxs)(k,{children:[" ","NFT Contract Address : ".concat(t.NFTCA)]}),(0,a.jsxs)(k,{children:[" ","tokenID : ".concat(t.tokenId)]})]},e)})})]})};var B=_},60226:function(t,e,n){"use strict";n.d(e,{Jy:function(){return l},qq:function(){return m},nD:function(){return u},TT:function(){return c},V3:function(){return d}});var a=n(68959),r=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"addressString","type":"string"}],"name":"addContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractInfos","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"contractAddress","type":"string"},{"internalType":"bool","name":"isDeleted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contracts","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"deleteContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllContracts","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"contractAddress","type":"string"},{"internalType":"bool","name":"isDeleted","type":"bool"}],"internalType":"struct admin_contract.ContractInfo[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getIsAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"reopenContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalContractNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');let o=(0,a.gL)("wss://eth-goerli.g.alchemy.com/v2/tzC7BEXGGRYsQDD6Qw8XkCYRNx3Ve4EL"),i="0x12D1FC33d8aa9b1E4bb1F2e8e2E97EC7efb28F94",s=new o.eth.Contract(r,i),c=async t=>{let e=await s.methods.getIsAdmin(t).call();return e},l=async(t,e,n)=>{let a=s.methods.addContract(e,n).encodeABI(),r=await y(t,a);return r},u=async()=>{let t=await s.methods.getAllContracts().call();return t},m=async(t,e)=>{let n=s.methods.deleteContract(e).encodeABI(),a=await y(t,n);return a},d=async(t,e)=>{let n=s.methods.reopenContract(e).encodeABI(),a=await y(t,n);return a};async function y(t,e){if(""==t)return{status:"fail",message:"\uD83D\uDCA1 Connect your Metamask wallet to vote on the blockchain."};try{let n=await window.ethereum.request({method:"eth_sendTransaction",params:[{to:i,from:t,data:e}]});return{status:"success",message:n}}catch(a){return{status:"fail",message:"\uD83D\uDE25 "+a.message}}}},62140:function(t,e,n){"use strict";n.d(e,{A5:function(){return f},BF:function(){return h},Eb:function(){return x},M3:function(){return y},TT:function(){return w},Tx:function(){return l},Uu:function(){return C},Zq:function(){return g},eX:function(){return S},hg:function(){return T},hh:function(){return u},je:function(){return v},kh:function(){return s},lL:function(){return A},o5:function(){return p},s4:function(){return m},sj:function(){return c},w4:function(){return I},wD:function(){return d},yr:function(){return b}});var a=n(68959),r=n(46101),o=n(43584);let i=(0,a.gL)("wss://eth-goerli.g.alchemy.com/v2/tzC7BEXGGRYsQDD6Qw8XkCYRNx3Ve4EL");async function s(t){let e=new URLSearchParams({module:"contract",action:"getabi",address:t,apikey:"34MSPWMQ2JYQ695W8F4B9KVYPF6KF2XVR5"}).toString(),n="".concat("https://api-goerli.etherscan.io/api","?").concat(e),a=await fetch(n),r=await a.json();if("1"==r.status){let o=JSON.parse(r.result);return o}}let c=async(t,e)=>{let n=(0,o.$l)(r.c),a=new i.eth.Contract(t,e),s=a.methods.startVoteSession().encodeABI(),c=await k(n,s,e);return c},l=async(t,e)=>{let n=(0,o.$l)(r.c),a=new i.eth.Contract(t,e),s=a.methods.endVoteSession().encodeABI(),c=await k(n,s,e);return c},u=async(t,e)=>{let n=(0,o.$l)(r.c),a=new i.eth.Contract(t,e),s=a.methods.restartVoteSession().encodeABI(),c=await k(n,s,e);return c},m=async(t,e,n)=>{let a=(0,o.$l)(r.c),s=new i.eth.Contract(t,e),c=s.methods.voteAndGetNFT(n).encodeABI(),l=await k(a,c,e);return l},d=async(t,e,n)=>{let a=(0,o.$l)(r.c),s=new i.eth.Contract(t,e),c=s.methods.registerCandidateAndGetNFT(n).encodeABI(),l=await k(a,c,e);return l},y=async(t,e)=>{let n=new i.eth.Contract(t,e),a=await n.methods.getTotalCandidateNum().call();return a},p=async(t,e,n)=>{let a=(0,o.$l)(r.c),s=new i.eth.Contract(t,e),c=await s.methods.getCandidateName(n).call({from:a});return c},f=async(t,e)=>{let n=new i.eth.Contract(t,e),a=await n.methods.getAllCandidateNames().call();return a},h=async(t,e,n)=>{let a=(0,o.$l)(r.c),s=new i.eth.Contract(t,e),c=await s.methods.getCandidateVoteCount(n).call({from:a});return c},g=async(t,e)=>{let n=(0,o.$l)(r.c),a=new i.eth.Contract(t,e),s=await a.methods.getTotalVoteCount().call({from:n});return s},w=async(t,e)=>{let n=(0,o.$l)(r.c),a=new i.eth.Contract(t,e),s=await a.methods.getIsAdmin(n).call();return s},A=async(t,e)=>{let n=(0,o.$l)(r.c),a=new i.eth.Contract(t,e),s=await a.methods.getRecentTokenId(n).call();return console.log(s),s},C=async(t,e)=>{let n=new i.eth.Contract(t,e),a=await n.methods.getNFTTokenCA().call();return a},b=async(t,e)=>{let n=new i.eth.Contract(t,e),a=await n.methods.getElectionStatus().call();return a},v=async(t,e)=>{let n=(0,o.$l)(r.c),a=new i.eth.Contract(t,e),s=await a.methods.getHasVoted(n).call();return s},T=async(t,e)=>{let n=(0,o.$l)(r.c),a=new i.eth.Contract(t,e),s=await a.methods.getRegisterNum(n).call();return s},I=async(t,e)=>{let n=(0,o.$l)(r.c),a=new i.eth.Contract(t,e),s=await a.methods.getTokenIds(n).call();return s},S=async(t,e)=>{let n=new i.eth.Contract(t,e),a=await n.methods.getIsShowResultImm().call();return a},x=async(t,e)=>{(0,o.$l)(r.c);let n=new i.eth.Contract(t,e),a=await n.methods.getDescription().call();return a};async function k(t,e,n){if(""==t)return{status:"fail",message:"\uD83D\uDCA1 Connect your Metamask wallet to vote on the blockchain."};try{let a=await window.ethereum.request({method:"eth_sendTransaction",params:[{to:n,from:t,data:e}]});return{status:"success",message:a}}catch(r){return{status:"fail",message:"\uD83D\uDE25 "+r.message}}}},46101:function(t,e,n){"use strict";n.d(e,{c:function(){return r}});var a=n(4480);let r=(0,a.atom)({key:"walletAddress",default:""})},46601:function(){}},function(t){t.O(0,[8543,8959,5675,9774,2888,179],function(){return t(t.s=75679)}),_N_E=t.O()}]);