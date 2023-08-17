const PortfolioData = [
  {
    imgSrc: "/images/ShiftHub.png",
    altText: "シフト管理アプリ「ShiftHub」",
    detailContent:
      "ReactとRailsで実装しました。シフト管理アプリです。管理者とユーザーでログインできます。管理者はユーザーのシフトを作成できます。ユーザーはシフトを確認できます。",
    gitUrl: process.env.REACT_APP_SHIFT_URL,
  },
  {
    imgSrc: "/images/RealWorld.png",
    altText: "RealWorldクローンアプリ",
    detailContent:
      "RealWorldのクローンアプリです。記事の投稿、編集、削除、ログイン、ログアウト機能があります。初めてAWSのEC2にてデプロイしたアプリになります。",
    gitUrl: process.env.REACT_APP_REAL_WORLD_URL,
  },
  {
    imgSrc: "/images/ProfileSite.png",
    altText: "PROFILE SITE",
    detailContent:
      "Reactとtailwindで実装しました。自己紹介、趣味、ポートフォリオ、学習歴、お問い合わせフォームの項目があります。",
    gitUrl: process.env.REACT_APP_PROFILE_URL,
  },
  {
    imgSrc: "/images/CalenderTop.png",
    altText: "Todoカレンダーアプリ",
    detailContent:
      "カレンダーの日付に応じてモーダル表示にてTODOの登録ができます。登録したTODOはカレンダーに表示されます。ReactとRailsで実装しました。",
    gitUrl: process.env.REACT_APP_CALENDER_URL,
  },
  {
    imgSrc: "/images/StockPractice.png",
    altText: "商品管理サイト",
    detailContent:
      "RailsとMySQLで商品管理システムを作成しました。基本的なCRUD機能とお気に入り登録、カート追加機能等を非同期で実装。デザインはBootstrapのみの実装。",
    gitUrl: process.env.REACT_APP_STOCK_URL,
  },
  {
    imgSrc: "/images/todo.png",
    altText: "Todoアプリ",
    detailContent:
      "Reactとtailwindで実装しました。Todoと計算機アプリがあります。この2つはSPAにて画面変化します。Reactで初めて作成したアプリになります。",
    gitUrl: process.env.REACT_APP_TODO_URL,
  },
  {
    imgSrc: "/images/IsaraTop.png",
    altText: "iSara模写",
    detailContent:
      "ReactとtailwindでiSaraのWEBサイトを模写しました。初めてtailwindを使用したアプリになります。模写になる為、Git Hubにはpushしていません。",
  },
  {
    imgSrc: "/images/ProGateTop.png",
    altText: "ProGate模写",
    detailContent:
      "ReactとSCSSにてProGateの模写をしました。模写になる為、Git Hubにはpushしていません。",
  },
];

export default PortfolioData;
