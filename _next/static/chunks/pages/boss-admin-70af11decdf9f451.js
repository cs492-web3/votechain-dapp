(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6310],{75255:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/boss-admin",function(){return e(40191)}])},1358:function(t,n,e){"use strict";e.d(n,{Z:function(){return y}});var i=e(85893),r=e(69417),a=e(50657),o=e(31425),s=e(6514),l=e(58951),u=e(37645),c=e(90948);let d=(0,c.ZP)("div")(()=>({marginTop:5})),p=(0,c.ZP)("div")(()=>({marginTop:15,marginBottom:15,fontSize:"18px",color:"#0288d1"})),m=(0,c.ZP)(r.Z)(()=>({marginTop:30,fontSize:"15px",color:"#0288d1",border:"1px solid #0288d1"})),f=t=>{let{NFTCA:n,tokenId:e}=t,r="https://pixxiti.com/ethereum/goerli/nfts/"+n+"/"+e;return(0,i.jsxs)("div",{style:{marginTop:"10px"},children:[(0,i.jsx)(p,{children:"You got NFT as Reward! \uD83C\uDF07"}),(0,i.jsx)(d,{children:"Your NFT contract Address is ".concat(n," ")}),(0,i.jsx)(d,{children:"Your Token ID is ".concat(e)}),(0,i.jsx)(m,{onClick:()=>window.open(r,"_blank"),children:"Check Your NFT"})]})};function y(t){let{open:n,result:e,handleClose:c,onClickClose:d,NFTCA:p,tokenId:m}=t;return(0,i.jsx)("div",{children:(0,i.jsxs)(a.Z,{open:n,onClose:c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",maxWidth:"xl",fullWidth:!0,children:[(0,i.jsx)(u.Z,{id:"alert-dialog-title",children:"Transaction Result"}),(0,i.jsxs)(s.Z,{children:[0!=Object.entries(e).length?(0,i.jsxs)(l.Z,{id:"alert-dialog-description",children:[(0,i.jsx)("div",{children:"Transaction Result : ".concat(e.status)}),(0,i.jsx)("div",{children:e.message})]}):(0,i.jsx)(l.Z,{id:"alert-dialog-description",children:"Transaction ongoing"}),"success"==e.status&&p&&m&&(0,i.jsx)(f,{NFTCA:p,tokenId:m})]}),(0,i.jsx)(o.Z,{children:(0,i.jsx)(r.Z,{onClick:d,children:"CLOSE"})})]})})}},60226:function(t,n,e){"use strict";e.d(n,{Jy:function(){return u},qq:function(){return d},nD:function(){return c},TT:function(){return l},V3:function(){return p}});var i=e(68959),r=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"addressString","type":"string"}],"name":"addContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractInfos","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"contractAddress","type":"string"},{"internalType":"bool","name":"isDeleted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contracts","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"deleteContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllContracts","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"contractAddress","type":"string"},{"internalType":"bool","name":"isDeleted","type":"bool"}],"internalType":"struct admin_contract.ContractInfo[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getIsAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"reopenContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalContractNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');let a=(0,i.gL)("wss://eth-goerli.g.alchemy.com/v2/tzC7BEXGGRYsQDD6Qw8XkCYRNx3Ve4EL"),o="0x12D1FC33d8aa9b1E4bb1F2e8e2E97EC7efb28F94",s=new a.eth.Contract(r,o),l=async t=>{let n=await s.methods.getIsAdmin(t).call();return n},u=async(t,n,e)=>{let i=s.methods.addContract(n,e).encodeABI(),r=await m(t,i);return r},c=async()=>{let t=await s.methods.getAllContracts().call();return t},d=async(t,n)=>{let e=s.methods.deleteContract(n).encodeABI(),i=await m(t,e);return i},p=async(t,n)=>{let e=s.methods.reopenContract(n).encodeABI(),i=await m(t,e);return i};async function m(t,n){if(""==t)return{status:"fail",message:"\uD83D\uDCA1 Connect your Metamask wallet to vote on the blockchain."};try{let e=await window.ethereum.request({method:"eth_sendTransaction",params:[{to:o,from:t,data:n}]});return{status:"success",message:e}}catch(i){return{status:"fail",message:"\uD83D\uDE25 "+i.message}}}},46101:function(t,n,e){"use strict";e.d(n,{c:function(){return r}});var i=e(4480);let r=(0,i.atom)({key:"walletAddress",default:""})},40191:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return F}});var i=e(85893),r=e(67294),a=e(7297),o=e(90948),s=e(15861),l=e(69417);function u(){let t=(0,a.Z)(["\n  variant: h1;\n  align: center;\n  color: white;\n  font-size: 25px;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 40px;\n"]);return u=function(){return t},t}function c(){let t=(0,a.Z)(["\n  align: left;\n  color: white;\n  font-size: 20px;\n  margin: 20px;\n"]);return c=function(){return t},t}function d(){let t=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  min-height: 50vh;\n  padding: 30px;\n"]);return d=function(){return t},t}function p(){let t=(0,a.Z)(["\n  border: 1px solid #42a5f5;\n  background-color: rgba(25, 118, 210, 0.5);\n  border-radius: 30px;\n  padding: 15px;\n  color: white;\n"]);return p=function(){return t},t}let m=(0,o.ZP)(s.Z)(u()),f=(0,o.ZP)(s.Z)(c()),y=(0,o.ZP)("div")(d());(0,o.ZP)(l.Z)(p());var x=e(60226),h=e(4480),g=e(46101),b=e(89683);function Z(){let t=(0,a.Z)(["\n  margin-right: 20px;\n  & label.Mui-focused {\n    color: #1976d2;\n  }\n  & .MuiOutlinedInput-root {\n    fieldset {\n      border-color: #1976d2;\n    }\n  }\n"]);return Z=function(){return t},t}function w(){let t=(0,a.Z)(["\n  variant: h1;\n  color: white;\n  font-size: 20px;\n  margin-bottom: 10px;\n"]);return w=function(){return t},t}function C(){let t=(0,a.Z)(["\n  color: white;\n  font-size: 15px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]);return C=function(){return t},t}function v(){let t=(0,a.Z)(["\n  border: 1px solid #42a5f5;\n  background-color: rgba(25, 118, 210, 0);\n  border-radius: 30px;\n  padding: 15px;\n  color: white;\n"]);return v=function(){return t},t}(0,o.ZP)("div")(()=>({marginTop:40,marginLeft:"10px",marginRight:"10px",height:"100%"})),(0,o.ZP)("div")(()=>({display:"flex",flexDirection:"column"})),(0,o.ZP)("div")(()=>({display:"flex",flexDirection:"row"})),(0,o.ZP)("div")(()=>({border:"1px solid #fbc02d",backgroundColor:"rgba(251, 192, 45, 0.3)",color:"white",padding:10,margin:10,borderRadius:20}));let j=(0,o.ZP)("div")(()=>({marginTop:20})),T=(0,o.ZP)(b.Z)(Z());(0,o.ZP)(s.Z)(w());let P=(0,o.ZP)(s.Z)(C()),D=(0,o.ZP)(l.Z)(v());var k=e(1358);let A=()=>{let[t,n]=(0,r.useState)(""),[e,a]=(0,r.useState)(""),[o,s]=(0,r.useState)({}),[l,u]=(0,r.useState)(!1),c=(0,h.useRecoilValue)(g.c),d=async()=>{u(!0);let n=await (0,x.Jy)(c,t,e);s(n)},p=()=>{0!=Object.entries(s).length&&u(!1)},m=()=>{u(!1)};return(0,i.jsxs)("div",{children:[(0,i.jsxs)(j,{children:[(0,i.jsx)(P,{children:" Contract 추가하기 "}),(0,i.jsx)(T,{id:"outlined-basic",label:"Contract Name",variant:"outlined",value:t,onChange:t=>{n(t.target.value)},InputLabelProps:{style:{color:"grey"}},inputProps:{style:{color:"white"}}}),(0,i.jsx)(T,{id:"outlined-basic",label:"Contract Address",variant:"outlined",value:e,InputLabelProps:{style:{color:"grey"}},onChange:t=>{a(t.target.value.trim())},inputProps:{style:{color:"white"}}}),(0,i.jsx)(D,{onClick:d,children:"추가하기"})]}),(0,i.jsx)(k.Z,{open:l,handleClose:p,onClickClose:m,result:o})]})};function N(){let t=(0,a.Z)(["\n  variant: h1;\n  color: white;\n  font-size: 20px;\n  margin-bottom: 10px;\n"]);return N=function(){return t},t}function I(){let t=(0,a.Z)(["\n  color: white;\n  font-size: 15px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]);return I=function(){return t},t}function _(){let t=(0,a.Z)(["\n  border: 1px solid;\n  border-radius: 30px;\n  padding: 5px;\n  color: white;\n  width: 200px;\n  margin-top: 20px;\n  margin-bottom: 10px;\n"]);return _=function(){return t},t}let E=(0,o.ZP)("div")(()=>({display:"flex",flexDirection:"column",border:"1px solid #42a5f5",color:"white",padding:20,margin:10,borderRadius:20}));(0,o.ZP)(s.Z)(N());let M=(0,o.ZP)(s.Z)(I()),S=(0,o.ZP)(l.Z)(_());var R=e(11163);let z=t=>{let{data:n}=t,[e,a]=(0,r.useState)({}),[o,s]=(0,r.useState)(!1),l=(0,h.useRecoilValue)(g.c),u=(0,R.useRouter)(),c=()=>{0!=Object.entries(a).length&&(s(!1),u.reload())},d=()=>{s(!1),u.reload()},p=async()=>{if(s(!0),n.isDeleted){let t=await (0,x.V3)(l,Number(n.id));a(t)}else{let e=await (0,x.qq)(l,Number(n.id));a(e)}};return(0,i.jsxs)("div",{children:[(0,i.jsxs)(E,{children:[(0,i.jsx)(M,{children:"Contract ID : ".concat(n.id)}),(0,i.jsx)(M,{children:"Contract Name : ".concat(n.name)}),(0,i.jsx)(M,{children:"Contract Address : ".concat(n.contractAddress)}),(0,i.jsx)(M,{children:"Contract Inactivated : ".concat(n.isDeleted)}),(0,i.jsxs)(S,{onClick:p,children:[n.isDeleted?"Activate":"Inactivate"," Contract"]})]}),(0,i.jsx)(k.Z,{open:o,handleClose:c,onClickClose:d,result:e})]})};function F(){let[t,n]=(0,r.useState)(!1),[e,a]=(0,r.useState)([]),o=(0,h.useRecoilValue)(g.c);return(0,r.useEffect)(()=>{(async function(){if(""!=o){let t=await (0,x.TT)(o);n(t)}})()},[o]),(0,r.useEffect)(()=>{async function n(){let t=await (0,x.nD)();return a(t),t}t&&n()},[t]),(0,i.jsx)(y,{children:t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m,{children:"관리자 페이지에 오신 것을 환영합니다"}),(0,i.jsx)(f,{children:" 현재 등록된 투표들"}),e.map((t,n)=>(0,i.jsx)(z,{data:t},n)),(0,i.jsx)(A,{})]}):(0,i.jsx)(m,{children:"관리자가 아닙니다"})})}},46601:function(){}},function(t){t.O(0,[8543,8959,5378,9683,9774,2888,179],function(){return t(t.s=75255)}),_N_E=t.O()}]);