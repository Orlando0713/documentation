"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[4479],{3522:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var i=n(5893),r=n(1151),a=n(9543);const o={title:"Model Best Practices",sidebar_label:"Best Practices"},s=void 0,l={id:"model/model-best-practices",title:"Model Best Practices",description:"Be Careful of Ambiguity",source:"@site/docs/model/model-best-practices.mdx",sourceDirName:"model",slug:"/model/model-best-practices",permalink:"/docs/model/model-best-practices",draft:!1,unlisted:!1,editUrl:"https://github.com/xapp-ai/documentation/edit/main/docs/model/model-best-practices.mdx",tags:[],version:"current",frontMatter:{title:"Model Best Practices",sidebar_label:"Best Practices"},sidebar:"docs",previous:{title:"Input Context",permalink:"/docs/model/input-context"},next:{title:"Handler",permalink:"/docs/content/handlers"}},c={},u=[{value:"Be Careful of Ambiguity",id:"be-careful-of-ambiguity",level:2},{value:"Remember Phonetic Ambiguity",id:"remember-phonetic-ambiguity",level:3},{value:"Asking for Clarification is Preferred",id:"asking-for-clarification-is-preferred",level:2},{value:"Naming",id:"naming",level:2},{value:"Slot Name Reuse",id:"slot-name-reuse",level:3},{value:"Plural Entity Names, Singular Slot Name",id:"plural-entity-names-singular-slot-name",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"be-careful-of-ambiguity",children:"Be Careful of Ambiguity"}),"\n",(0,i.jsx)(t.p,{children:"Utterances ambiguity can occur when you have too similar (or exact) sample utterances across multiple intents and the NLU is unable to determine which intent you want.  It will return it's best guess which may not be the intent you are expecting."}),"\n",(0,i.jsx)(t.p,{children:"Ensure your sample utterances for each intent are unique.  If there is overlap, you may want to split out the overlapping utterances into their own intent."}),"\n",(0,i.jsxs)(t.p,{children:["In some cases, you can solve ambiguity with ",(0,i.jsx)(t.a,{href:"/docs/model/input-context",children:"input contexts"})," which help the NLU better determine an intent based on the question you just asked the user."]}),"\n",(0,i.jsx)(t.h3,{id:"remember-phonetic-ambiguity",children:"Remember Phonetic Ambiguity"}),"\n",(0,i.jsx)(t.p,{children:'Beyond using the same words or phrases in multiple intents, you can also run into ambiguity with similar sounding words that are spelled different.  For example "for" and "four" sound alike but mean different things, which can be a problem when you are gathering information from a user.  A user can ask for the weather at different airports using their IATA location identifier, like DCA for Reagan Washington National Airport.  Some IATA codes can start with and contain numbers and either be 3 or 4 characters in length.  This may cause some phonetic ambiguity if you say:'}),"\n",(0,i.jsx)(a.x,{owner:"mine",hasTail:!0,children:(0,i.jsx)(t.p,{children:"weather for 4MD"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.p,{children:"where 4MD is the Baltimore Pier 7 helipad.  However, when the speech to text hears this they may have heard code 44MD, which is the helipad for Union Memorial Hospital in Baltimore."}),"\n",(0,i.jsx)(t.h2,{id:"asking-for-clarification-is-preferred",children:"Asking for Clarification is Preferred"}),"\n",(0,i.jsx)(t.p,{children:"In the ambiguity case above or similar situations where you might not fully understand what the user is asking for, you will need to ask for clarification.  You are saving the user trouble later on by ensuring you get the right information.  If a human needs to ask for clarification then an intelligent virtual assistant should as well."}),"\n",(0,i.jsxs)(t.p,{children:["To solve the example above dealing with phonetic ambiguity, you could first look up to make sure both ",(0,i.jsx)(t.code,{children:"4MD"})," and ",(0,i.jsx)(t.code,{children:"44MD"})," are valid airport codes, then respond with:"]}),"\n",(0,i.jsx)(a.x,{owner:"others",hasTail:!0,children:(0,i.jsx)(t.p,{children:"Did you mean 4MD or 44MD?"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.h2,{id:"naming",children:"Naming"}),"\n",(0,i.jsx)(t.p,{children:"A couple of naming conventions will help you more easily collaborate, maintain, and develop with your model."}),"\n",(0,i.jsx)(t.h3,{id:"slot-name-reuse",children:"Slot Name Reuse"}),"\n",(0,i.jsx)(t.p,{children:"Reuse the same slot name when it has the same type across intents.  This makes development much easier and easier to understand if you are new to the model."}),"\n",(0,i.jsx)(t.h3,{id:"plural-entity-names-singular-slot-name",children:"Plural Entity Names, Singular Slot Name"}),"\n",(0,i.jsxs)(t.p,{children:["Make your entity names plural, such as ",(0,i.jsx)(t.code,{children:"Brands"})," but when you use them as a slot, make it plural."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"show me more from ${brand}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In the above sample utterance, the slot ",(0,i.jsx)(t.code,{children:"${brand}"})," is of type Brands."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9543:function(e,t,n){n.d(t,{x:function(){return a}});var i=n(7294);function r(e){return"others"===e?"m 80 0 v 240 h -60 c 40 -40 60 -160 60 -240":"m 0 0 v 240 h 60 c -40 -40 -60 -160 -60 -240"}var a=function(e){return i.createElement("div",{className:"chat-text-bubble "+("mine"===e.owner?"chat-text-bubble--mine":"chat-text-bubble--others")},e.hasTail&&(t=e.owner,i.createElement("svg",{className:"chat-text-bubble__tail",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 80 240"},i.createElement("path",{d:r(t),fill:"currentColor"}))),e.children);var t}},1151:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return o}});var i=n(7294);const r={},a=i.createContext(r);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);