"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[6185],{5293:function(e,n,t){t.r(n),t.d(n,{assets:function(){return r},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c}});var s=t(5893),a=t(1151);const i={title:"Channels"},l=void 0,o={id:"development/channels",title:"Channels",description:"A channel is a method with which end users can communcate with the assistant application.  They have different characteristics and capabilities such as voice vs text inputs, browser availability and ability to display certain types of media (if any display is provided at all).  Example channels are chat widget, smart speakers, telephony, intelligent search, and social chat (e.g. Slack).",source:"@site/docs/development/channels.md",sourceDirName:"development",slug:"/development/channels",permalink:"/docs/development/channels",draft:!1,unlisted:!1,editUrl:"https://github.com/xapp-ai/documentation/edit/main/docs/development/channels.md",tags:[],version:"current",frontMatter:{title:"Channels"},sidebar:"docs",previous:{title:"Tokens",permalink:"/docs/development/tokens"},next:{title:"NLU",permalink:"/docs/development/nlu"}},r={},c=[{value:"Supported Channels",id:"supported-channels",level:2},{value:"Stentor",id:"stentor",level:3},{value:"Lex (v2)",id:"lex-v2",level:3},{value:"Lex as your NLU",id:"lex-as-your-nlu",level:4},{value:"Alexa",id:"alexa",level:3},{value:"Dialogflow",id:"dialogflow",level:3},{value:"Custom Channels",id:"custom-channels",level:2},{value:"Reasons for Building a Custom Channel",id:"reasons-for-building-a-custom-channel",level:3},{value:"Building a Custom Channel",id:"building-a-custom-channel",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"A channel is a method with which end users can communcate with the assistant application.  They have different characteristics and capabilities such as voice vs text inputs, browser availability and ability to display certain types of media (if any display is provided at all).  Example channels are chat widget, smart speakers, telephony, intelligent search, and social chat (e.g. Slack)."}),"\n",(0,s.jsx)(n.p,{children:"Channels are injected within the assistant application when you build the assistant."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"export const handler = new Assistant()\n    // Add the supported channels\n    .withChannels([Alexa(), Dialogflow(), LexConnect(), LexV2Channel(), Stentor()])\n    .lambda();\n"})}),"\n",(0,s.jsx)(n.p,{children:"The above application supports the Alexa, Dialogflow, Lex (V1 & V2) and Stentor channels.  At runtime, the payload that is sent to your assistant is tested against all of these channels and a channel is then selected based on which recognizes the shape of the payload."}),"\n",(0,s.jsx)(n.p,{children:"At a high level, channels are relatively straight forward.  They consist of:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"test(body: object)"})," - A function that is called that tests the incoming request payload to determine if it recognizes it"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"capabilities(body: Record<string, unknown>)"})," - A function that is passed the request payload and returns a set of the current channel capabilities"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"request"})," Translator - A class that translates the incoming request payload to an abstracted stentor request."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"response"})," Translator - A class that translates the outgoing response payload from a stentor response to one the channel understands."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"supported-channels",children:"Supported Channels"}),"\n",(0,s.jsx)(n.h3,{id:"stentor",children:"Stentor"}),"\n",(0,s.jsx)(n.p,{children:"The most basic of channels, it powers the chat widget and intelligent search bar.  It is able to understand the stentor requests and generates stentor responses."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install stentor-channel\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { Stentor } from "stentor-channel";\n'})}),"\n",(0,s.jsx)(n.p,{children:"The Stentor channel takes an optional NLU Service as a configuration parameter, which is required if you are calling the channel directly without first passing the request through an NLU."}),"\n",(0,s.jsx)(n.p,{children:"For example, we are setting up a LexV2 Bot instance as our NLU."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { LexServiceV2 } from "@xapp/stentor-service-lex";\n\n//...then\n\nconst nlu = new LexServiceV2({\n    botId: process.env.LEX_BOT_ID,\n    botAliasId: process.env.LEX_BOT_ALIAS_ID\n});\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["and then pass the nlu to your ",(0,s.jsx)(n.code,{children:"Stentor()"})," channel:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"\n    const assistant = new Assistant()\n        // the rest of your setup\n        .withChannels([\n            // with the nlu, you can use it directly behind API Gateway\n            Stentor(nlu)\n        ])\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This ",(0,s.jsx)(n.code,{children:"nlu"})," can be anything that implements ",(0,s.jsx)(n.code,{children:"NLUService"})," so you can extend LexServiceV2 or write your own."]}),"\n",(0,s.jsx)(n.h3,{id:"lex-v2",children:"Lex (v2)"}),"\n",(0,s.jsx)(n.p,{children:"The chatbot framework from AWS, Amazon Lex.  It enables a few channels such as Facebook, Slack, and Twilio SMS."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install @xapp/stentor-lex-v2\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { LexV2Channel } from "@xapp/stentor-lex-v2";\n'})}),"\n",(0,s.jsx)(n.h4,{id:"lex-as-your-nlu",children:"Lex as your NLU"}),"\n",(0,s.jsxs)(n.p,{children:["You can also use your Lex (v2) bot as a stand-alone NLU through the ",(0,s.jsx)(n.code,{children:"@xapp/stentor-service-lex"})," package."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install @xapp/stentor-service-lex\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { LexServiceV2 } from "@xapp/stentor-service-lex";\n\nconst nlu = new LexServiceV2({\n    botId: process.env.LEX_BOT_ID,\n    botAliasId: process.env.LEX_BOT_ALIAS_ID\n});\n'})}),"\n",(0,s.jsx)(n.h3,{id:"alexa",children:"Alexa"}),"\n",(0,s.jsx)(n.p,{children:"Smart speaker channel that supports multiple modalities; voice only, voice & screen, and voice & screen with touch."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install @xapp/stentor-alexa\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { Alexa } from "@xapp/stentor-alexa";\n'})}),"\n",(0,s.jsx)(n.p,{children:"Alexa comes with her own NLU, Speech to Text (STT) and Text to Speech (TTS)."}),"\n",(0,s.jsx)(n.h3,{id:"dialogflow",children:"Dialogflow"}),"\n",(0,s.jsx)(n.p,{children:"The Dialogflow channel provides integration to Dialogflow ES, which is an NLU with it's own set of supported channels.  Adding this gains access to those other Dialogflow supported channels."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install @xapp/stentor-dialogflow\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { Dialogflow } from "@xapp/stentor-dialogflow"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"custom-channels",children:"Custom Channels"}),"\n",(0,s.jsxs)(n.p,{children:["You can provide your own custom channels by implementing the ",(0,s.jsx)(n.code,{children:"test"})," and ",(0,s.jsx)(n.code,{children:"capabilities"})," functions as well as providing request and response translators."]}),"\n",(0,s.jsx)(n.h3,{id:"reasons-for-building-a-custom-channel",children:"Reasons for Building a Custom Channel"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Support channels not yet supported"}),"\n",(0,s.jsx)(n.li,{children:"Support existing/3rd party chat widget GUI"}),"\n",(0,s.jsx)(n.li,{children:"Support custom GUI"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"building-a-custom-channel",children:"Building a Custom Channel"}),"\n",(0,s.jsxs)(n.p,{children:["To build a custom channel, we recommend using the ",(0,s.jsx)(n.code,{children:"stentor-channel"})," ",(0,s.jsx)(n.a,{href:"https://github.com/stentorium/stentor/tree/master/packages/stentor-channel",children:"source"})," as a guide.  You can see the ",(0,s.jsx)(n.code,{children:"src/Channel.ts"})," file, reproduced below, to see how we can take the definition of a ",(0,s.jsx)(n.code,{children:"Channel"})," and create a wrapper function ",(0,s.jsx)(n.code,{children:"Stentor"})," to return a new copy of the stentor channel."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'/*! Copyright (c) 2019, XAPPmedia */\nimport { Channel, Device, NLUService } from "stentor-models";\n\nimport { DEFAULT_DEVICE, STENTOR_PLATFORM } from "./Constants";\nimport { isDeviceable, isStentorRequest } from "./Guards";\nimport { TranslateStentorRequest, TranslateStentorResponse } from "./Translators";\n\nexport function capabilities(body: Record<string, unknown>): Device {\n\n    if (isDeviceable(body)) {\n        return body.device;\n    }\n\n    return DEFAULT_DEVICE;\n}\n\nexport const STENTOR_CHANNEL: Channel = {\n    name: STENTOR_PLATFORM,\n    test: isStentorRequest,\n    request: new TranslateStentorRequest(),\n    response: new TranslateStentorResponse(),\n    capabilities\n};\n\nexport function Stentor(nlu?: NLUService): Channel {\n    return {\n        ...STENTOR_CHANNEL,\n        nlu\n    };\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var s=t(7294);const a={},i=s.createContext(a);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);