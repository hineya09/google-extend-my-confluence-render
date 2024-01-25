$(function () {
    // ページプロパティマクロの列幅を揃える
    $('table.metadata-summary-macro tr').find('th:nth-of-type(1), td:nth-of-type(1)').css('width','30%');
    $('table.metadata-summary-macro tr').find('th:nth-of-type(2), td:nth-of-type(2)').css('width','50%');
    $('table.metadata-summary-macro tr').find('th:nth-of-type(3), td:nth-of-type(3)').css('width','20%');

    // ラベルの省略表示をやめる
    $('table.metadata-summary-macro .pageLabel').css('max-width', 'none');
});
