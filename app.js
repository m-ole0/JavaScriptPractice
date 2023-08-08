//let〇〇 = 数値もしくは"文字列"で変数を作れる。
//let hello = "Hello World";
//let int1 = 1;

//変数の使い方
//alert(hello);
//alert(int1);
//alert(4 + 3);

//alert("Hello" + "World");

//変数は下記のように記載する事で、合体させる事ができる。
//let str1 = "Hello";
//let str2 = "World!!";

//alert(str1 + str2);

//ifを使った条件式
//let orange = 100;
//let apple = 100;

//if (orange < apple){
//    alert("みかんの値段がりんごより安い");
//} else if (orange == apple){
//    alert("みかんとりんごが同じ値段");
//} else {
//    alert("みかんの値段がりんごより高い");
//}

//繰り返し処置（while文とfor文）

//while文(条件式が真である間は繰り返し処理が実行される)
//let max = 100;
//let num = 1;
//let count = 0;

//while (num < max){
//    num *= 2;
//    count += 1;
//}

//alert("2を掛け続けて" + max + "を超えるのに必要だった回数は"　+ count +"回です");

//for文（決められた回数の処理を繰り返す時に使われる）
//for (初期値;条件式;増減値){
//    繰り返し処理:
//}

//let i;
//let num = 0;

//for (i=1; i <= 10; i++){
//    num += i;
//}

//alert("1から10まで足し算した結果は" + num +"です");

//JavaScript2確認問題
//alert(1 + 1);
//alert(1 - 1);
//alert(2 * 3);
//alert(30 / 3);

//カリキュラム3

//関数
//let alertString;
//alertString = addString("WebCamp");
//alert(alertString);

//function addString(strA){
//  let addStr = "Hello" + strA;
//  return addStr;
//}

//入力ダイアログで値を入力する形
//let prompStr = prompt("何か好きな文字を入力してください");
//alert(prompStr);

let user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
while((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert("グー・チョキ・パーのいずれかを入力してください。");
  user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
}

let js_hand = getJShand();
let judge = winLose(user_hand, js_hand);

if (user_hand != null){
  alert(`あなたの選んだ手は${user_hand}です\nJavaScriptの選んだ手は${js_hand}です。\n結果は${judge}です。`);
} else {
  alert("またチャレンジしてね")
}

//ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor(Math.random() * 3);
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  }else if(js_hand_num == 1) {
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー"
  }
  return hand_name;
}

//ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    }else if(js == "チョキ"){
      winLoseStr = "勝ち";
    }else if(js == "パー"){
      winLoseStr = "負け";
    }
  }else if(user == "チョキ"){
    if (js == "グー"){
      winLoseStr = "負け"
    }else if(js == "チョキ"){
      winLoseStr = "あいこ";
    }else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  }else if(user == "パー"){
    if (js == "グー"){
      winLoseStr = "勝ち";
    }else if (js == "チョキ"){
      winLoseStr = "負け";
    }else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}