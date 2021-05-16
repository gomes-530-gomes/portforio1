(() => {
  const reset = document.getElementById("reset");
  let gSE = [];
  const quiz = [
    {
      question: "白くまの肌の色は何色でしょう？",
      answers: ["透明", "白色", "肌色", "黒色"],
      correct: "黒色",
    },
    {
      question:
        "飛行機の操縦士と副操縦士は、食事の際に絶対に同じメニューを食べません。その理由は何でしょうか？",
      answers: [
        "単純に好みが違う",
        "食材の減りの偏りを無くすため",
        "特に理由は無い",
        "食中毒対策",
      ],
      correct: "食中毒対策",
    },
    {
      question:
        "臭い靴にお金を入れると臭いがなくなります。何円玉を入れるとよいでしょうか？",
      answers: ["1円玉", "10円玉", "50円玉", "500円玉"],
      correct: "10円玉",
    },
    {
      question:
        "しゃっくりはある調味料をなめると止まります。ある調味料とはなんでしょう？",
      answers: ["お酢", "砂糖", "醤油", "塩"],
      correct: "砂糖",
    },
    {
      question: "お坊さんが木魚を叩く意味はなんでしょう？",
      answers: [
        "お経にリズムをつけるため",
        "亡くなった人が天国にいけるようにと祈るため",
        "眠くならないようにするため",
        "悪い霊を寄せ付けないため",
      ],
      correct: "眠くならないようにするため",
    },
    {
      question: "「アホウドリ」の名前の由来はなんでしょう？",
      answers: [
        "アホーと鳴くから",
        "人間にすぐつかまるから",
        "アホみたいな顔をしているから",
        "阿波踊りみたいに踊っているように飛ぶから",
      ],
      correct: "人間にすぐつかまるから",
    },
    {
      question: "有名な作曲家「ベートーベン」の癖はなんだったでしょう？",
      answers: [
        "目をパチパチさせる",
        "爪をかじる",
        "念入りに手を洗う",
        "頭をかく",
      ],
      correct: "念入りに手を洗う",
    },
    {
      question:
        "植物にも人間と同じようにあるものがあります。あるものとはなんでしょう？",
      answers: ["血液型", "脳みそ", "心臓", " 髪の毛"],
      correct: "血液型",
    },
    {
      question:
        "大根おろしはあるすり方をすると、辛くなります。そのすり方とはなんでしょう？",
      answers: ["ゆっくりする", "力を込めてする", "力を弱めてする", "早くする"],
      correct: "早くする",
    },
    {
      question: "日本で最初に販売されたアイスクリームの値段はいくらでしょう？",
      answers: ["200円", "800円", "4000円", "8000円"],
      correct: "8000円",
    },
  ];

  function SE() {
    let s = ["correctaudio.mp3", "missaudio.mp3", "questionaudio.mp3", "endaudio.mp3"];
    for (let i = 0; i < s.length; i++) {
      gSE[i] = new Audio();
      gSE[i].volume = 0.3;
      gSE[i].src = s[i];
    }
  }

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;
//クイズの問題文、選択肢を定義
const setupQuiz = () => {

  document.getElementById("js-question").textContent = quiz[quizIndex].question;

  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
  setupQuiz();


const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    gSE[0].currentTime = 0;
    gSE[0].play();
    window.alert("正解！");
    score++;
  } else {
    gSE[1].currentTime = 0;
    gSE[1].play();
    window.alert("不正解！\n正解は...「" + quiz[quizIndex].correct + "」です");
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    gSE[2].currentTime = 0;
    gSE[2].play();
    setupQuiz();
  } else {
reset.style.display = "block"
    gSE[3].currentTime = 0;
    gSE[3].play();
    window.alert("終了！あなたの正解数は" + score + "/" + quizLength+ "です");
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
  clickHandler(e);
  });
  handlerIndex++;
}
  window.onload = function () {
    SE();
  }
})();
