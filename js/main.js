'use strict'

{
  const year = 2021;
  const month = 0;
  

  function getCallenderHead() {
    const dates = [];
    // 日付dは先月の末日の日付を表す
    const d = new Date(year, month, 0).getDate();
    // 1日までの曜日の個数nは下記のように表す
    const n = new Date(year, month, 1).getDay();

    // ０からn回までループを回す（ここで先月分の日付を表示）
    for(let i = 0; i < n; i++) {
      // 先月分の日付は当月の1日よりi日前（31 ←1日１こ前　30 ←１日より2こ前）
      dates.unshift({
        date: d - i,
        isToday: false,
        isDisabled: true,
      });
    }

    console.log(dates);
  }
  // まずは今月分のカレンダー日付を取得していく
  function getCallenderBody() {
    // 日付の配列（空の配列を作る）
    const dates = [];
    // 末日を作る(末日＝翌月の0番目と同意)
    const lastDate = new Date(year, month + 1, 0).getDate();

    // １から末日までループを回してく
    for(let i = 1; i <= lastDate; i++) {
      // 空要素に日付を入れ込んでいく
      dates.push({
        date: i,
        isToday: false,
        isDisabled: false,
      });
    }

    console.log(dates);
  }

  getCallenderHead();
  // getCallenderBody();
}