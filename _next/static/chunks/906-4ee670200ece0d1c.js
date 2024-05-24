"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[906],{2906:function(e,t,a){a.d(t,{r:function(){return Contact}});var s=a(7573),n=a(5380),r=a(5772),o=a(4447),l=a(9417),i=a(9229),c=a(124),d=a(7653),u=a(4714),f=a(4508),m=a(1689),p=a(6073),x=a(1053),h=a(6632),g=a(4522),v=a(3831);function Email(e){let{className:t}=e;return(0,s.jsx)(n.z,{variant:"ghost",className:"hover:bg-transparent pr-1 pl-1 sm:pr-2 sm:pl-2",asChild:!0,children:(0,s.jsx)("a",{href:"mailto:contact@stopghg.com",children:(0,s.jsx)(g.Z,{className:(0,v.cn)("h-4 w-4",t)})})})}function Contact(e){let{noTitle:t}=e,{t:a}=(0,u.useLanguage)(),{toast:g}=(0,c.pm)(),{localState:v,setLocalState:b}=(0,f.useLocalState)(),j={email:"",name:"",message:"",company:"",title:"",...v.contactFormParams},w=(0,d.useCallback)(e=>{b({...v,contactFormParams:e})},[v,b]),{isMutating:y,error:N,trigger:S}=(0,m.N)({url:m.t,afterSuccess:async()=>{w({email:"",name:"",message:"",company:"",title:""}),g({title:a(p.sr.ContactSuccess)})}});if(N)throw N;return(0,s.jsxs)(r.Zb,{className:"border-none shadow-none w-full max-w-[600px] bg-xgreen3 flex-1",children:[!t&&(0,s.jsx)(r.Ol,{children:(0,s.jsx)(r.ll,{className:"font-alice",children:a(p.sr.ContactTitle)})}),(0,s.jsxs)(r.aY,{className:"flex flex-col gap-6 flex-1",children:[(0,s.jsxs)("div",{className:"flex flex-col w-full items-center",children:[(0,s.jsxs)("div",{className:"flex gap-1 w-full justify-center",children:[(0,s.jsx)(x.y,{}),(0,s.jsx)(h.X,{}),(0,s.jsx)(Email,{})]}),(0,s.jsx)("div",{children:"contact@stopghg.com"})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)(l._,{htmlFor:"name",children:a(p.sr.ContactName)}),(0,s.jsx)(o.I,{id:"name",disabled:y,value:j.name,onChange:e=>w({...j,name:e.target.value})})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)(l._,{htmlFor:"email",children:a(p.sr.ContactEmail)}),(0,s.jsx)(o.I,{id:"email",disabled:y,value:j.email,onChange:e=>w({...j,email:e.target.value})})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)(l._,{htmlFor:"company",children:a(p.sr.ContactCompany)}),(0,s.jsx)(o.I,{id:"company",disabled:y,value:j.company,onChange:e=>w({...j,company:e.target.value})})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)(l._,{htmlFor:"title",children:a(p.sr.ContactCompanyTitle)}),(0,s.jsx)(o.I,{id:"title",disabled:y,value:j.title,onChange:e=>w({...j,title:e.target.value})})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)(l._,{htmlFor:"message",children:a(p.sr.ContactMessage)}),(0,s.jsx)(i.g,{disabled:y,className:"resize-none",id:"message",rows:5,value:j.message,onChange:e=>w({...j,message:e.target.value})})]}),(0,s.jsx)("div",{className:"mt-2",children:(0,s.jsx)(n.z,{disabled:y,onClick:()=>{let e={text:[":wave: New contact form submission","*Timestamp*: ".concat(new Date().toISOString()),"*Source*: ".concat(window.location.pathname),"*Name*: ".concat(j.name),"*Email*: ".concat(j.email),"*Company*: ".concat(j.company),"*Title*: ".concat(j.title),"*Message*:",j.message].join("\n")};S(e)},"data-method":"submit-contact",children:a(p.sr.ContactSubmit)})})]})]})}},1053:function(e,t,a){a.d(t,{y:function(){return LinkedIn}});var s=a(7573),n=a(266),r=a(2056),o=a.n(r),l=a(5380),i=a(3831);function LinkedIn(e){let{className:t}=e;return(0,s.jsx)(l.z,{variant:"ghost",className:"hover:bg-transparent pr-1 pl-1 sm:pr-2 sm:pl-2",asChild:!0,children:(0,s.jsx)(o(),{href:"https://www.linkedin.com/company/stopghg/",target:"_blank",children:(0,s.jsx)(n.Z,{className:(0,i.cn)("h-4 w-4",t)})})})}},4508:function(e,t,a){a.r(t),a.d(t,{LocalStateContext:function(){return o},LocalStateProvider:function(){return LocalStateProvider},useLocalState:function(){return useLocalState}});var s=a(7573),n=a(7653);let r="You forgot to wrap your app in <LocalStateProvider>",o=(0,n.createContext)({get localState(){throw Error(r)},get setLocalState(){throw Error(r)}}),useLocalState=()=>(0,n.useContext)(o);function LocalStateProvider(e){let{children:t}=e,[a,r]=(0,n.useState)(void 0),l=(0,n.useCallback)(e=>{window.localStorage.setItem("app",JSON.stringify(e)),r(e)},[r]),i=(0,n.useMemo)(()=>({localState:a,setLocalState:l}),[a,l]);return(0,n.useEffect)(()=>{if(!a)try{let e=JSON.parse(window.localStorage.getItem("app")||"invalidJson");l(e)}catch(e){l({})}},[l,a]),a?(0,s.jsx)(o.Provider,{value:i,children:t}):(0,s.jsx)(s.Fragment,{})}},6632:function(e,t,a){a.d(t,{X:function(){return X}});var s=a(7573),n=a(2224),r=a(2056),o=a.n(r),l=a(5380),i=a(3831);function X(e){let{className:t}=e;return(0,s.jsx)(l.z,{variant:"ghost",className:"hover:bg-transparent pr-1 pl-1 sm:pr-2 sm:pl-2",asChild:!0,children:(0,s.jsx)(o(),{href:"https://x.com/stopghgnow",target:"_blank",children:(0,s.jsx)(n.Z,{className:(0,i.cn)("h-4 w-4",t)})})})}},1689:function(e,t,a){a.d(t,{N:function(){return useApiMutate},t:function(){return n}});var s=a(9681);let n="https://p7lbendfwmroyyey2k3jy5v4nu0xvelh.lambda-url.us-west-2.on.aws/";function useApiMutate(e){let{isMutating:t,error:a,data:n,trigger:r}=(0,s.Z)(e.url,async(t,a)=>{let{arg:s}=a;await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},mode:"no-cors",body:JSON.stringify(s)}),e.afterSuccess&&await e.afterSuccess()});return{isMutating:t,error:a,data:n,trigger:r}}},5772:function(e,t,a){a.d(t,{Ol:function(){return l},SZ:function(){return c},Zb:function(){return o},aY:function(){return d},ll:function(){return i}});var s=a(7573),n=a(7653),r=a(3831);let o=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",a),...n})});o.displayName="Card";let l=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("flex flex-col space-y-1.5 p-6",a),...n})});l.displayName="CardHeader";let i=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)("h3",{ref:t,className:(0,r.cn)("text-2xl font-semibold leading-none tracking-tight",a),...n})});i.displayName="CardTitle";let c=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)("p",{ref:t,className:(0,r.cn)("text-sm text-muted-foreground",a),...n})});c.displayName="CardDescription";let d=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("p-6 pt-0",a),...n})});d.displayName="CardContent";let u=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("flex items-center p-6 pt-0",a),...n})});u.displayName="CardFooter"},4447:function(e,t,a){a.d(t,{I:function(){return o}});var s=a(7573),n=a(7653),r=a(3831);let o=n.forwardRef((e,t)=>{let{className:a,type:n,...o}=e;return(0,s.jsx)("input",{type:n,className:(0,r.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...o})});o.displayName="Input"},9417:function(e,t,a){a.d(t,{_:function(){return c}});var s=a(7573),n=a(7653),r=a(1500),o=a(9484),l=a(3831);let i=(0,o.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(r.f,{ref:t,className:(0,l.cn)(i(),a),...n})});c.displayName=r.f.displayName},9229:function(e,t,a){a.d(t,{g:function(){return o}});var s=a(7573),n=a(7653),r=a(3831);let o=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)("textarea",{className:(0,r.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...n})});o.displayName="Textarea"},124:function(e,t,a){a.d(t,{pm:function(){return useToast}});var s=a(7653);let n=0,r=new Map,addToRemoveQueue=e=>{if(r.has(e))return;let t=setTimeout(()=>{r.delete(e),dispatch({type:"REMOVE_TOAST",toastId:e})},1e6);r.set(e,t)},reducer=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:a}=t;return a?addToRemoveQueue(a):e.toasts.forEach(e=>{addToRemoveQueue(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},o=[],l={toasts:[]};function dispatch(e){l=reducer(l,e),o.forEach(e=>{e(l)})}function toast(e){let{...t}=e,a=(n=(n+1)%Number.MAX_SAFE_INTEGER).toString(),dismiss=()=>dispatch({type:"DISMISS_TOAST",toastId:a});return dispatch({type:"ADD_TOAST",toast:{...t,id:a,open:!0,onOpenChange:e=>{e||dismiss()}}}),{id:a,dismiss,update:e=>dispatch({type:"UPDATE_TOAST",toast:{...e,id:a}})}}function useToast(){let[e,t]=s.useState(l);return s.useEffect(()=>(o.push(t),()=>{let e=o.indexOf(t);e>-1&&o.splice(e,1)}),[e]),{...e,toast,dismiss:e=>dispatch({type:"DISMISS_TOAST",toastId:e})}}}}]);