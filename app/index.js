// `id="js-form`の要素を取得
const formElement = document.querySelector("#js-form");
// form要素から発生したsubmitイベントを受け取る
formElement.addEventListener("submit", (event) => {
    // イベントが発生したときに呼ばれるコールバック関数（イベントリスナー）
});
import { App } from "./src/App.js";
const app = new App();
app.mount();