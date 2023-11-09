"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[9598],{407:function(e,n,t){t.r(n),t.d(n,{assets:function(){return a},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return d},metadata:function(){return o},toc:function(){return c}});var s=t(5893),r=t(1151);const d={title:"Runtime Events"},i=void 0,o={id:"development/api/runtime-events",title:"Runtime Events",description:"Studio supports a wide variety of events, both standard and custom, that allows you keep track of runtime usage data.",source:"@site/docs/development/api/runtime-events.md",sourceDirName:"development/api",slug:"/development/api/runtime-events",permalink:"/docs/development/api/runtime-events",draft:!1,unlisted:!1,editUrl:"https://github.com/xapp-ai/documentation/edit/main/docs/development/api/runtime-events.md",tags:[],version:"current",frontMatter:{title:"Runtime Events"}},a={},c=[{value:"Event Keys",id:"event-keys",level:2},{value:"REQUEST Type Events",id:"request-type-events",level:2},{value:"LAUNCH_REQUEST",id:"launch_request",level:3},{value:"AnalyticsEvents Type Events",id:"analyticsevents-type-events",level:2},{value:"REQUEST_RESPONSE",id:"request_response",level:3},{value:"Events API",id:"events-api",level:2}];function l(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Studio supports a wide variety of events, both standard and custom, that allows you keep track of runtime usage data."}),"\n",(0,s.jsx)(n.h2,{id:"event-keys",children:"Event Keys"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"App ID"}),(0,s.jsx)(n.td,{children:"appId"}),(0,s.jsx)(n.td,{children:"Application ID"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Session ID"}),(0,s.jsx)(n.td,{children:"sessionId"}),(0,s.jsx)(n.td,{children:"Unique ID that persists throughout an entire session"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"User ID"}),(0,s.jsx)(n.td,{children:"userId"}),(0,s.jsx)(n.td,{children:"Unique ID that is specific to the user and persists across sessions"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"Type of event, a category for organizing events."}),(0,s.jsx)(n.td,{children:'"REQUEST", "ERROR", "AnalyticsEvent"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Name"}),(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"A subcategory of type."}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Payload"}),(0,s.jsx)(n.td,{children:"payload"}),(0,s.jsx)(n.td,{children:"The details of the event"}),(0,s.jsx)(n.td,{children:"string, boolean, object, number or undefined"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"request-type-events",children:"REQUEST Type Events"}),"\n",(0,s.jsx)(n.h3,{id:"launch_request",children:"LAUNCH_REQUEST"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"LAUNCH_REQUEST"})," is used to document if a new session has started."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Example Event"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "appId": "{{appId}}",\n    "channel": "postman",\n    "type": "REQUEST",\n    "name": "LAUNCH_REQUEST",\n    "platform": "postman",\n    "selectedHandler": "LaunchRequest",\n    "sessionId": "session-test-{{$randomUUID}}",\n    "userId": "user-test-{{$randomUUID}}"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"analyticsevents-type-events",children:"AnalyticsEvents Type Events"}),"\n",(0,s.jsx)(n.h3,{id:"request_response",children:"REQUEST_RESPONSE"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"REQUEST_RESPONSE"})," event is used to document both the request from the user and the response back from the application.  The payloadload is a stringified object that contains the request, response, and optional tag."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import {\n    Request,\n    Response\n} from "stentor-models";\n\nlet payload: { request: Request, response: Response, tag?: string };\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Example Event"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "events": [\n        {\n            "appId": "{{appId}}",\n            "channel": "my-channel",\n            "type": "AnalyticsEvent",\n            "name": "REQUEST_RESPONSE",\n            "platform": "my-platform",\n            "selectedHandler": "LaunchRequest",\n            "sessionId": "session-test-{{$randomUUID}}",\n            "userId": "user-test-{{$randomUUID}}",\n            "payload": {\n                "request": {\n                    "type": "INTENT_REQUEST",\n                    "intentId": "HelpIntent",\n                    "rawQuery": "i need help",\n                    "sessionId": "session-test-{{$randomUUID}}",\n                    "userId": "user-test-{{$randomUUID}}",\n                    "matchConfidence": 1\n                },\n                "response": {\n                    "outputSpeech": {\n                        "displayText": "Here is what I found...",\n                        "ssml": "<speak>Here is what I found...</speak>"\n                    },\n                    "displays": [\n                          {\n                            "type": "LIST",\n                            "title": "Results",\n                            "items": [\n                                {\n                                    "title": "Title 1",\n                                    "token": "token-one",\n                                    "description": "Description 1"\n                                }\n                            ]\n                          }\n                    ]\n                }\n            }\n        }\n    ]\n}\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"events-api",children:"Events API"}),"\n",(0,s.jsx)(n.p,{children:"You can PUT your own events to the API by using the following format:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PUT"})," ",(0,s.jsx)(n.code,{children:"https://{{url}}/cms/apps/events"})]}),"\n",(0,s.jsx)(n.p,{children:"Body"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "events": [\n        {\n            "appId": "{{appId}}",\n            "channel": "my-channel",\n            "type": "REQUEST",\n            "name": "LAUNCH_REQUEST",\n            "platform": "my-platform",\n            "selectedHandler": "LaunchRequest",\n            "sessionId": "session-test-{{$randomUUID}}",\n            "userId": "user-test-{{$randomUUID}}"\n        }\n    ]\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var s=t(7294);const r={},d=s.createContext(r);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);