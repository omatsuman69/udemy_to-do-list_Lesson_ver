import "./styles.css";
const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //li・div生成
  const li = document.createElement("li");
  const div = document.createElement("div");
  li.className = "list";
  div.className = "list-row";
  //console.log(li);

  //pタグの生成
  const p = document.createElement("p");
  p.textContent = inputText;
  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.textContent = "完了";
  completeButton.addEventListener("click", () => {
    //クリックしたら移動
    // const moveTarget = completeButton.parentNode.parentNode;
    // //戻すボタンを作成
    // const returnButton = document.createElement("button");
    // returnButton.textContent = "戻す";
    // div.appendChild(returnButton);
    // //完了ボタンと削除ボタンを削除
    // completeButton.remove();
    // deleteButton.remove();
    // document.getElementById("complete-list").append(moveTarget);
    // console.log(document.querySelector("#complete-list"));
  });

  //削除ボタンの作成
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });
  //divタグの子要素に各要素を設定していく。
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
