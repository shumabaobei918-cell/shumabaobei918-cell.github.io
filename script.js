let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

const params = new URLSearchParams(window.location.search);
let username = params.get("name");

// 限制用户名长度，避免页面样式崩坏
const maxLength = 20;
const safeUsername = username ? username.substring(0, maxLength) : "???";

// 防止 `null` 变成 `"null"`
if (username) {
  questionText.innerText = questionText.innerText + safeUsername;
}

let clickCount = 0; // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
  "呵呵就是大坏蛋^_^…",
  "没见过这么坏的^_^",
  "坏到一定程度了^_^",
  "我要打爆这个大坏蛋^_^ ",
  "这种坏蛋我要暴揍死她^_^",
  "揍死这个大坏蛋^_^:(",
  "我要干死揍死抽死她^_^",
];

// No 按钮点击事件
noButton.addEventListener("click", function () {
  clickCount++;

  // 让 Yes 变大，每次放大 2 倍
  let yesSize = 1 + clickCount * 1.2;
  yesButton.style.transform = `scale(${yesSize})`;

  // 挤压 No 按钮，每次右移 50px
  let noOffset = clickCount * 50;
  noButton.style.transform = `translateX(${noOffset}px)`;

  // 让图片和文字往上移动
  let moveUp = clickCount * 25;
  mainImage.style.transform = `translateY(-${moveUp}px)`;
  questionText.style.transform = `translateY(-${moveUp}px)`;

  // No 文案变化（前 5 次变化）
  if (clickCount <= 7) {
    noButton.innerText = noTexts[clickCount - 1];
  }

  // 图片变化（前 5 次变化）
  if (clickCount === 1) mainImage.src = "images/zousini.gif"; // 很气
  if (clickCount === 2) mainImage.src = "images/shuairen.gif"; // 震惊
  if (clickCount === 3) mainImage.src = "images/maomidaren.gif"; // 思考
  if (clickCount === 4) mainImage.src = "images/nagunzida.jpg"; // 生气
  if (clickCount === 5) mainImage.src = "images/huocairendaren.gif"; // 哭
  if (clickCount === 6) mainImage.src = "images/tiren.gif";//酷
  if (clickCount === 7) mainImage.src = "images/qiaota.gif"; // 是哭
  if (clickCount >= 8) mainImage.src = "images/xiaoxiongdaren.gif"; // 小熊
});

// Yes 按钮点击后，进入表白成功页面
const loveTest = `!!!我对宝宝一点都不好 林晨欣就是个超级无敌大坏蛋欠揍欠干欠打欠收拾欠抽的最无敌坏的坏蛋(╬◣д◢)ps坏蛋改邪归正求原谅QwQ!! (QWQ)♡︎ᐝ  ${
  username ? `${safeUsername}  ♡︎ᐝ(QWQ )` : ""
}`;

yesButton.addEventListener("click", function () {
  // 先创建基础 HTML 结构
  document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text"></h1>
            <img src="images/guiliulian.png" alt="跪下" class="yes-image">
            <img src="images/xiagui.png" alt="跪吧" class="yes-image">
        </div>
    `;

  // 确保用户名安全地插入
  document.querySelector(".yes-text").innerText = loveTest;

  // 禁止滚动，保持页面美观
  document.body.style.overflow = "hidden";

});























