import "./styles.css";
const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};
//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};
//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //li・div生成
  const li = document.createElement("li");
  const div = document.createElement("div");
  li.className = "list";
  div.className = "list-row";
  //console.log(li);

  //pタグの生成
  const p = document.createElement("p");
  p.textContent = text;
  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.textContent = "完了";
  completeButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);
    //未完了リストに追加する要素
    const addTarget = completeButton.parentNode.parentNode;
    const text = addTarget.firstChild.firstChild.textContent;
    //TODO内テキストを取得
    //div以下を初期化
    addTarget.firstChild.textContent = null;
    //console.log(addTarget.firstChild);
    const p = document.createElement("p");
    p.textContent = text;
    //buttonが具の作成
    const backButton = document.createElement("button");
    backButton.textContent = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      deleteFromCompleteList(backButton.parentNode.parentNode);

      //テキストを取得
      const text = backButton.parentNode.firstChild.textContent;
      console.log(text);
      createIncompleteList(text);
    });
    //
    addTarget.firstChild.appendChild(p);
    addTarget.firstChild.appendChild(backButton);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //削除ボタンの作成
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
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
