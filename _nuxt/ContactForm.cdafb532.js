import h from"./Input.958b0946.js";import b from"./Button.b69cbf70.js";import{d as x,x as v,l as S,r as F,a3 as w,b as l,c as u,e as d,F as B,Z as C,N as s,g as E,w as R,E as T,t as V,X as k,k as N}from"./entry.1cef28a9.js";const j=["action"],O={class:"inputs"},q=x({__name:"ContactForm",props:{submitButtonText:{type:String,default:"Send message"},fields:{type:Array,default:()=>[{type:"text",model:"name",name:"Name",placeholder:"Your name",required:!0,layout:"default"},{type:"email",model:"email",name:"Email",placeholder:"Your email",required:!0,layout:"default"},{type:"text",model:"text",name:"Subject",required:!1,layout:"default"},{type:"textarea",model:"message",name:"Message",placeholder:"Your message",required:!0,layout:"big"}]}},setup(c){const i=c,p=v().alpine,{FORMSPREE_URL:n}=S().public;n||console.warn("No FORMSPREE_URL provided");const t=F(),_=w(i.fields.map(e=>({...e,data:""}))),f=async e=>{e.preventDefault();const m=new FormData(e.target);t.value="Sending...",fetch(e.target.action,{method:e.target.method,body:m,headers:{Accept:"application/json"}}).then(r=>{r.ok?(t.value=p.form.successMessage,e.target.reset()):r.json().then(a=>{Object.hasOwn(a,"errors")?(t.value=a.errors[0].message,console.error(a.errors.map(o=>o.message).join(", ")),setTimeout(()=>{t.value="Send message"},2e3)):console.error("There was a problem submitting your form")})}).catch(()=>{console.error("There was a problem submitting your form")})};return(e,m)=>{const r=h,a=b;return l(),u("form",{class:"contact-form",method:"POST",action:s(n),onSubmit:f},[d("div",O,[(l(!0),u(B,null,C(s(_),(o,g)=>(l(),k(r,{key:g,modelValue:o.data,"onUpdate:modelValue":y=>o.data=y,field:o},null,8,["modelValue","onUpdate:modelValue","field"]))),128))]),d("div",null,[E(a,{type:"submit",disabled:!s(n)},{default:R(()=>[T(V(s(t)?s(t):c.submitButtonText),1)]),_:1},8,["disabled"])])],40,j)}}});const D=N(q,[["__scopeId","data-v-8d7ecaa7"]]);export{D as default};
