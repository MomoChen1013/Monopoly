/* ============================================================
   Firebase 設定檔 — game.html 與 watch.html 共用
   如果之後 Firebase 設定有變，只要改這個檔案即可
   ============================================================ */

const firebaseConfig = {
  apiKey: "AIzaSyCZqOOXWaTDcduZECo8hQWepC7SjE2M7-w",
  authDomain: "monopoly2026-90f20.firebaseapp.com",
  databaseURL: "https://monopoly2026-90f20-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "monopoly2026-90f20",
  storageBucket: "monopoly2026-90f20.firebasestorage.app",
  messagingSenderId: "412061154774",
  appId: "1:412061154774:web:5d50d0649f6ad8edde7877"
};

/* 單一場次：所有資料存在這個固定路徑底下 */
const FIREBASE_GAME_PATH  = "game/current";
/* 跨裝置事件匯流：主持人 → 觀眾頁推送的事件（彈窗、抽牌請求…） */
const FIREBASE_EVENT_PATH = "game/lastEvent";
/* 觀眾頁 → 主持人：抽牌結果 */
const FIREBASE_DRAW_PATH  = "game/lastDraw";
/* 觀眾頁存活心跳，主持人據此判斷觀眾頁是否在線 */
const FIREBASE_WATCH_PATH = "game/watchHeartbeat";

/* 初始化（使用 CDN 載入的 compat 版 firebase 全域變數） */
let fbDB = null;
let fbReady = false;

try {
  if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    fbDB = firebase.database();
    fbReady = true;
    console.log('[Firebase] 初始化成功');
  } else {
    console.warn('[Firebase] firebase SDK 未載入，將只使用本機同步');
  }
} catch (e) {
  console.error('[Firebase] 初始化失敗：', e);
  fbReady = false;
}
