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
  "真的不可以吗qwq…",
  "要不再想想？",
  "不要选这个嘛QwQ！ ",
  "我会很伤心o(╥﹏╥)o…",
  "不行嘛不行QWQ:(",
  "再考虑考虑宝宝QWQ",
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
  if (clickCount <= 6) {
    noButton.innerText = noTexts[clickCount - 1];
  }

  // 图片变化（前 5 次变化）
  if (clickCount === 1) mainImage.src = "images/maomisorry.jpg"; // 震惊
  if (clickCount === 2) mainImage.src = "images/baituo.jpg"; // 思考
  if (clickCount === 3) mainImage.src = "images/wcuole.gif"; // 生气
  if (clickCount === 4) mainImage.src = "images/zaiyebuganle.jpg"; // 哭
  if (clickCount === 5) mainImage.src = "images/OoSPGd1ei6xDZ4g.gif";
  if (clickCount >= 6) mainImage.src = "images/ad766b52304b12988fb15cbd30f3384d2910013b1c660-UuTotD_fw480.webp"; // 之后一直是哭
});

// Yes 按钮点击后，进入表白成功页面
const loveTest = `!!!我是大坏蛋o(╥﹏╥)o你最好了最喜欢最爱你了对不起然后谢谢最好的宝宝o(╥﹏╥)o!! ( >᎑<)♡︎ᐝ  ${
  username ? `${safeUsername}  ♡︎ᐝ(>᎑< )` : ""
}`;

yesButton.addEventListener("click", function () {
  // 先创建基础 HTML 结构
  document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text"></h1>
            <img src="images/hug.png" alt="拥抱" class="yes-image">
        </div>
    `;

  // 确保用户名安全地插入
  document.querySelector(".yes-text").innerText = loveTest;

  // 禁止滚动，保持页面美观
  document.body.style.overflow = "hidden";

});









