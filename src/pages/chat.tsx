import React from "react";

import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { Chat as ChatWidget, WidgetEnv } from "@xapp/chat-widget";
import "@xapp/chat-widget/dist/index.css";

export default function Chat() {
    const { siteConfig } = useDocusaurusContext();

    const config: WidgetEnv = {
        connection: {
            serverUrl: "https://5xacz5az7l.execute-api.us-east-1.amazonaws.com/prod/studio",
            type: "direct",
            accountKey: "a07b8e0d-e8f2-47f1-b099-5e3001c64b25",
        },
        attributes: {
            localTime: new Date().toISOString(),
            currentUrl: window.location.href
        },
        avatarUrl: "https://petehaas.s3.amazonaws.com/images/xapp/Xapp-icon-01.png",
        theme: {
            primaryColor: "#021f3b",
            border: {
                radius: "0px"
            }
        }
    };
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <div style={{ maxHeight: "100vh", display: "flex", flex: "1 1 auto", width: "100%" }}>
                <ChatWidget config={config} mode={"docked"} />;
            </div>
        </Layout>
    );
}