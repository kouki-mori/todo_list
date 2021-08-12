// 入力したテキストを取得する
const button = document.querySelector('#add-button');

button.addEventListener('click', () => {
    const input = document.querySelector('#new-todo');


// テキストが空欄のときは処理をしない
    const textInput = input.value;
    if (textInput === '') {
        return;
    }


// liタグの作成、inputに入力したテキストをリストに表示する・liタグにclassを設定
    const ul = document.querySelector('#todo-list');
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.innerText = input.value;
    input.value = '';
    li.style.marginTop = "15px";
    li.style.marginLeft = "15px";

    ul.appendChild(li);

    

    

// 完了ボタンの追加・テキストに表示・liタグに付ける・完了ボタンにclass設定
    const doneButton = document.createElement('button');
    doneButton.innerText = '完了';
    li.appendChild(doneButton);
    doneButton.classList.add('donebutton-style');


    

// 完了ボタンを押した時に、完了状態にする
    doneButton.addEventListener('click', e => {
        const li = doneButton.closest('li');
        li.classList.add('done');

    });

// 削除ボタンの追加・テキストに表示・liタグに付ける・削除状態にする
    const endButton = document.createElement('button');
    endButton.innerText = '削除';
    li.appendChild(endButton);
    endButton.classList.add('endbutton-style');

    endButton.addEventListener('click', e => {
        ul.removeChild(e.target.closest('li'));

    });

// ゴミ箱ボタンを押したら一斉削除状態にする
    // const deleteButton = document.querySelector('#d-btn');

    // deleteButton.addEventListener('click', () => {
        // const ul = document.querySelector('#todo-list');
        // ul.remove();
    // });
    
    
   




});

