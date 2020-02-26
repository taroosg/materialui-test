## material-uiのKeyboardDatePicker

### やりたいこと（予想）
- 親コンポーネントで日付のstateを管理する．
- 子コンポーネントではカレンダーから値を日付を選択し，親コンポーネントのstateに保存する．
- 子コンポーネントのカレンダーのvalueは子コンポーネントのstateと連動している．
- なので，子コンポーネントのstateを更新するタイミングで，親コンポーネントのstateに値を保存すれば良い．
- `App.jsx`と`components/Datepicker.jsx`のコメント参照．

### やったこと
- 子コンポーネントのstateを`JSON.stringify()`で表示し，stateに日付が保存されることを確認．
- firebaseに投げるデータを親コンポーネントで管理していた気がしたので，親コンポーネントのstateに保存する関数を`props`で渡す．
- 子コンポーネントで日付の保存ができていたので，`onChange`で動いている関数をチェック．
- `handleDateChange`が動いているので，引数の`date`に日付データが入っていることがわかる．
- `handleDateChange`関数の中で，親から渡された「親コンポーネントのstateを更新する関数」を実行するよう記述．
- 親コンポーネントのstateの値を表示して確認．
- やったぜ( `･ω･)b
