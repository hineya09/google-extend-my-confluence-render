$(function () {
    // ページプロパティマクロの列幅を揃える
    $('table.metadata-summary-macro tr').find('th:nth-of-type(1), td:nth-of-type(1)').css('width','30%');
    $('table.metadata-summary-macro tr').find('th:nth-of-type(2), td:nth-of-type(2)').css('width','50%');
    $('table.metadata-summary-macro tr').find('th:nth-of-type(3), td:nth-of-type(3)').css('width','20%');

    // ラベルの省略表示をやめる
    $('table.metadata-summary-macro .pageLabel').css('max-width', 'none');

    // スライド目次の設定
    if (1 || $('.table-of-contents').length > 0) {
        // 目次
        var $slideToc = $('<div id="com-twistist-slide-toc"/>')
        .css({
            'width': '400px',
            'height': '100%',
            'background-color': '#ffffff',
            'box-shadow': '0px 0px 15px 0px rgba(0, 0, 0, 0.3)',
            'position': 'fixed',
            'top': '115px',
            'right': '-415px',
            'z-index': '12',
        })
        .appendTo('body');

        $('<div id="com-twistist-toc"/>')
        .css({
            'padding': '20px',
        })
        .append($('.table-of-contents').clone())
        .appendTo($slideToc);

        // 開閉ボタン
        var $toggleButton = $('<div id="com-twistist-slide-toc-toggle-button"/>').css({
            'width': '30px',
            'height': '30px',
            'border-radius': '15px 15px 15px 15px',
            'background-color': '#ffcccc',
            'position': 'absolute',
            'top': '15px',
            'left': '-55px',
            'z-index': '13',
        }).appendTo($slideToc);

        $('#com-twistist-slide-toc-toggle-button').click(e => {
            var slideTocRight, toggleButtonLeft;
            // スライドが開いている時
            if ($('#com-twistist-slide-toc').hasClass('open')) {
                // 閉めたときの値を入れる
                slideTocRight = '-415px';
                toggleButtonLeft = '-55px';
            } else {
                // 開いたときの値を入れる
                slideTocRight = '0';
                toggleButtonLeft = '-20px';
            }

            // アニメーション
            $('#com-twistist-slide-toc').animate({'right': slideTocRight}, 300).toggleClass('open');
            $('#com-twistist-slide-toc-toggle-button').animate({'left': toggleButtonLeft}, 300);
        });
    }
});