'use strict'

{
  const year = 2021;
  const month = 0;
  
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

  getCallenderBody();
}