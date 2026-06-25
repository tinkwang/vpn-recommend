/**
 * 网站配置文件 — 只需修改这个文件即可
 *
 * ⚠️ 重要：请把 url 里的 YOUR_CODE 换成你在机场后台拿到的邀请码
 *   可乐云：登录后台 → 邀请返利 / 推广中心 → 复制邀请链接
 *   魔戒：登录后台 → 邀请返利 → 复制邀请链接
 */

const SITE_CONFIG = {
  title: "可乐云 & 魔戒机场推荐",
  subtitle: "随机排序，请自行试用。如无法访问，请自备梯子。",
  disclaimer: "本站仅作信息分享，请遵守当地法律法规。",

  contact: {
    email: "your-email@example.com",
    telegramGroup: "https://t.me/your_group",
    telegramChannel: "https://t.me/your_channel",
  },

  providers: [
    {
      name: "可乐云 ColaCloud",
      url: "https://colacloud.online/#/register?code=YOUR_CODE",
      desp: "【可乐云】IEPL 国际专线，Trojan/SS 协议，全球 20+ 国家 60+ 节点。新用户 500GB 免费试用 3 天，月付低至 ¥38/350G。解锁 Netflix、Disney+、ChatGPT 等流媒体，负载均衡自动切换，敏感期抗墙稳定。优惠码 HJLQXKTR 享 8 折。",
      weight: 85,
      badge: "推荐",
    },
    {
      name: "魔戒机场 Mojie",
      url: "https://mojie.app/#/register?code=YOUR_CODE",
      desp: "【魔戒机场】按量计费、不限时间，用多少买多少，适合轻度用户。邀请码注册可 ¥1 体验 2G 流量（无限期）。130G ¥14.9 起，支持 ChatGPT/Gemini 专线节点，晚高峰 4K 流畅，港/日/新/美/台等多地优化线路，流媒体全解锁。",
      weight: 90,
      badge: "热门",
    },
  ],

  clients: [
    {
      name: "v2rayN",
      platform: "Windows / Linux / macOS",
      url: "https://github.com/2dust/v2rayN/releases",
    },
    {
      name: "v2rayNG",
      platform: "Android",
      url: "https://github.com/2dust/v2rayNG/releases",
    },
    {
      name: "Clash Verge Rev",
      platform: "Windows / macOS / Linux",
      url: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
    },
    {
      name: "Clash Meta for Android",
      platform: "Android（魔戒/可乐均支持）",
      url: "https://github.com/MetaCubeX/ClashMetaForAndroid/releases",
    },
    {
      name: "Shadowrocket",
      platform: "iOS（小火箭）",
      url: "https://apps.apple.com/app/shadowrocket/id932747118",
    },
  ],
};