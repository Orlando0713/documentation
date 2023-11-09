"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[1145],{1985:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return l}});var r=n(5893),s=n(1151);const i={title:"Partner Integration",sidebar_label:"Integration"},a=void 0,o={id:"partners/partner-integration",title:"Partner Integration",description:"Our goal is to make integration with a partner's products and services as seemless as possible.  We can offer branded, and white label solutions that integrate with your APIs for lead capture, scheduling, etc.  We will then setup a bespoke runtime environment and necessary infrastructure that is specific to your services.  Your primary responsibility is send and receive the necessary events that allow us to automatically create the application and you receive the necessary information for installation.",source:"@site/docs/partners/partner-integration.md",sourceDirName:"partners",slug:"/partners/partner-integration",permalink:"/docs/partners/partner-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/xapp-ai/documentation/edit/main/docs/partners/partner-integration.md",tags:[],version:"current",frontMatter:{title:"Partner Integration",sidebar_label:"Integration"},sidebar:"docs",previous:{title:"Governance",permalink:"/docs/studio/governance"},next:{title:"Tools",permalink:"/docs/partners/partner-tools"}},c={},l=[{value:"Responsibility Matrix",id:"responsibility-matrix",level:3},{value:"Management Services",id:"management-services",level:2},{value:"Events",id:"events",level:3},{value:"Create Subscription Event",id:"create-subscription-event",level:4},{value:"Ready for Installation Event",id:"ready-for-installation-event",level:4},{value:"Cancellation Event",id:"cancellation-event",level:4},{value:"Runtime Services",id:"runtime-services",level:2},{value:"Assistant Application",id:"assistant-application",level:3},{value:"APIs",id:"apis",level:3},{value:"Answer Content",id:"answer-content",level:3},{value:"Analytic Services",id:"analytic-services",level:2}];function d(e){const t={code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Our goal is to make integration with a partner's products and services as seemless as possible.  We can offer branded, and white label solutions that integrate with your APIs for lead capture, scheduling, etc.  We will then setup a bespoke runtime environment and necessary infrastructure that is specific to your services.  Your primary responsibility is send and receive the necessary events that allow us to automatically create the application and you receive the necessary information for installation."}),"\n",(0,r.jsx)(t.h3,{id:"responsibility-matrix",children:"Responsibility Matrix"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Integration"}),(0,r.jsx)(t.th,{children:"XAPP"}),(0,r.jsx)(t.th,{children:"Partner"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Partner API Integration"}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Assistant Runtime"}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Assistant Management & QA"}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Assistant Infrastructure"}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Custom Templates"}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Event Setup"}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"\u2705"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Custom Analytics Endpoint"}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:"Optional"})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"management-services",children:"Management Services"}),"\n",(0,r.jsx)(t.p,{children:"Any item related to creation, deletion and updating can be handled through integration with our APIs.  We recommend using an event style approach for communication between our services and yours.  We run on AWS and typically use AWS EventBridge for communication between our account and a partner's account.  CRMs such as Salesforce make it easy to send workflow triggered events through EventBridge."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"integration status",src:n(1774).Z+"",width:"1231",height:"389"})}),"\n",(0,r.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,r.jsx)(t.h4,{id:"create-subscription-event",children:"Create Subscription Event"}),"\n",(0,r.jsx)(t.p,{children:"A create subscription event is sent from your environment to ours upon either the creation or upgrade of a subscription that includes our offering."}),"\n",(0,r.jsx)(t.p,{children:"When we receive it, we register the event in our CRM and also start the automation that creates the assistant application."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Sample Event Payload"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\r\n    "tier": "partner_tier",\r\n    "contract_length": 1, // number of months; 1, 12, 24 are common values\r\n    "id": "partner_customer_id",\r\n    "website": "https://customer-site.com",\r\n    "template": "existing_or_custom_template",\r\n    "company_name": "Customer Name"\r\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"We receive the event in a custom partner specific event receiver that understands the tier to determine which products are required.  We then crawl the website looking for content, metadata, logos, and color scheme that we use to generate the channels that will be installed for the customer."}),"\n",(0,r.jsx)(t.p,{children:"We then run the generated asset through a manual quality assurance before we mark it as ready to for install."}),"\n",(0,r.jsx)(t.h4,{id:"ready-for-installation-event",children:"Ready for Installation Event"}),"\n",(0,r.jsx)(t.p,{children:"We send a ready for installation event after we have completed the QA on the newly created assistant application and relevent channels."}),"\n",(0,r.jsx)(t.p,{children:"This QA includes but is not limited to:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Review of logo and color scheme to match customers website"}),"\n",(0,r.jsx)(t.li,{children:"Review of content and any calls to action"}),"\n",(0,r.jsx)(t.li,{children:"Review basic functionality & integrations"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Sample Event Payload"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\r\n    "id": "partner_customer_id",\r\n    "widget_snippet": "",\r\n    "widget_key": "",\r\n    "search_snippet": "",\r\n    "search_key": "",\r\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"We will return all the necessary information for installation of the widget to the customer's website.  For the widget and search channels, the installation can be done through a script snippet or our Wordpress Plugin."}),"\n",(0,r.jsx)(t.h4,{id:"cancellation-event",children:"Cancellation Event"}),"\n",(0,r.jsx)(t.p,{children:"Cancellations are also all automated.  When we receive the event, we cease all automations for the assistant (such as web crawling), clean up any assets and delete any necessary residual data."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Sample Event Payload"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\r\n    "id": "partner_customer_id",\r\n    "effective_date": "ISO-8601 of when cancellation is effective",\r\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"runtime-services",children:"Runtime Services"}),"\n",(0,r.jsx)(t.p,{children:"We define runtime services as anything that the virtual assistant will rely upon during an active session.  This can be the customers content from their website or from your APIs."}),"\n",(0,r.jsx)(t.h3,{id:"assistant-application",children:"Assistant Application"}),"\n",(0,r.jsx)(t.p,{children:"We will build a custom assistant application that is specific to and the services you offer your customers.  It is our responsibility to host and maintain the infrastructure as well as perform QA on each of the applications."}),"\n",(0,r.jsx)(t.h3,{id:"apis",children:"APIs"}),"\n",(0,r.jsx)(t.p,{children:"You, as a partner, most likely have APIs for the customer that help capture leads and facilitate scheduling.  We have abstracted workflows that we will hook up to your APIs for your customers."}),"\n",(0,r.jsx)(t.h3,{id:"answer-content",children:"Answer Content"}),"\n",(0,r.jsx)(t.p,{children:"We pull answers to questions for users from the customers website content.  We automatically crawl and index the publically available content at a regular cadence.  This does not require any additional integrations."}),"\n",(0,r.jsx)(t.h2,{id:"analytic-services",children:"Analytic Services"}),"\n",(0,r.jsx)(t.p,{children:"Integration with your APIs will help push captured leads and scheduled appointments to your services for the customer.  Additionally, we can provide more data to the customer such as unique users and recent queries for the customer.  We can help build a custom endpoint specific to you, the partner, that you can use to query analytics for a customer.  You can then choose to display the data in your platform or however you choose."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example Response"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\r\n    "partner_id": "3E7E87CB-447B-A150",\r\n    "startDate": "2023-02-28T22:13:58-05:00",\r\n    "endDate": "2023-03-08T03:13:55.700Z",\r\n    "widget": {\r\n        "totalUniqueSessions": 4,\r\n        "totalUniqueUsers": 4,\r\n        "queries": {\r\n            "total": 10,\r\n            "totalNoContent": 1,\r\n            "topQueriesNoContent": [\r\n                "do you have spanish speakers on staff"\r\n            ],\r\n            "topQueries": [\r\n                "connect me with someone",\r\n                "hi! i need a insurance card when i renewed it i did not get one",\r\n            ]\r\n        }\r\n    }\r\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1774:function(e,t,n){t.Z=n.p+"assets/images/studio-partner-status-integration-30c5f036fa950f9eb76cd459ae6c38d9.png"},1151:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var r=n(7294);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);