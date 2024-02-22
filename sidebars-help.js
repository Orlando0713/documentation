const sidebars = {
  help: [
    "getting-started",
    "technology",
    "use-cases",
    {
      type: "category",
      label: "Installation Guides",
      items: [
        "install",
        "install/wordpress",
        "install/wix",
        "install/shopify",
        "install/squarespace",
        "install/drupal",
        "install/joomla",
        "install/godaddy",
        "install/duda",
        "install/framer",
        "install/javascript",
      ],
    },
    {
      type: "category",
      label: "Channels",
      items: [
        /*"channels", */
        "channels/chat-widget",
        "channels/intelligent-search",
      ],
    },
    {
      type: "category",
      label: "Leads",
      items: ["leads/lead-alerts", "leads/lead-capture"],
    },
    "live-chat/overview",
    /*
    {
      type: "category",
      label: "Live Chat",
      items: ["live-chat/overview"],
    }, */
    {
      type: "category",
      label: "Videos",
      items: ["videos/chat", "videos/search", "videos/gbm"],
    },
    {
      type: "category",
      label: "Training-Series",
      items: [
        "training-series/welcome",
        "training-series/crawling",
        "training-series/content",
        "training-series/styling-chat",
        "training-series/deployment",
        "training-series/metrics",
      ],
    },
    "faqs",
  ],
};

module.exports = sidebars;
