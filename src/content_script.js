$(function () {
    // ページプロパティマクロの列幅を揃える
    $('table.metadata-summary-macro tr').find('th:nth-of-type(1), td:nth-of-type(1)').css('width','30%');
    $('table.metadata-summary-macro tr').find('th:nth-of-type(2), td:nth-of-type(2)').css('width','50%');
    $('table.metadata-summary-macro tr').find('th:nth-of-type(3), td:nth-of-type(3)').css('width','20%');

    // ラベルの省略表示をやめる
    $('table.metadata-summary-macro .pageLabel').css('max-width', 'none');

    // ページ遷移はDOM操作しているだけみたい。ページ遷移しても追加した要素が残ってしまうので一旦消す。
    // ページ遷移はDOM操作（？）といいつつ、拡張機能は遷移ごとに動くのでよくわからない。
    $('#com-twistist-slide-toc').remove();

    // スライド目次の設定
    if ($('.table-of-contents').length > 0) {
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
        var $toggleButton = $('<img src="' + chrome.runtime.getURL('assets/arrow.svg') + '" id="com-twistist-slide-toc-toggle-button"/>')
                            .css({
                                'width': '30px',
                                'height': '30px',
                                'background-color': '#ccccff',
                                'border-radius': '15px',
                                'cursor': 'pointer',
                                'position': 'absolute',
                                'top': '15px',
                                'left': '-55px',
                                'z-index': '13',
                            })
                            .appendTo($slideToc);

        $('#com-twistist-slide-toc-toggle-button').click(e => {
            if ($('#com-twistist-slide-toc').hasClass('open')) {
                // アニメーション（閉めたときの状態を設定する）
                $('#com-twistist-slide-toc').animate({'right': '-415px'}, 300).toggleClass('open');
                $('#com-twistist-slide-toc-toggle-button')
                .css({
                    'transform': '',
                    'background-color': '#ccccff',
                })
                .animate({'left': '-55px'}, 300);
            } else {
                // アニメーション（開いたときの状態を設定する）
                $('#com-twistist-slide-toc').animate({'right': '0'}, 300).toggleClass('open');
                $('#com-twistist-slide-toc-toggle-button')
                .css({
                    'transform': 'scale(-1, 1)',
                    'background-color': '#ffd43b',
                })
                .animate({'left': '-20px'}, 300);
            }

        });
    }
});