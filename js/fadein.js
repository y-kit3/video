$(function(){
    $(window).on('load scroll', function() {     //ロードした時とスクロールした時に処理を実行する
        var winScroll = $(window).scrollTop();   //スクロール量を取得して変数に入れる
        var winHeight = $(window).height();　    //ウィンドウの高さを取得して変数に入れる
        var scrollPos = winScroll + (winHeight * 0.8);　 //要素がウィンドウのどの位置まできたら処理を開始するか
        $(".fadein").each(function() {　　　　　　//fadeinクラスを発見する度に処理を実行する
        if($(this).offset().top < scrollPos) {　　//要素がウィンドウの指定した位置まできたらCSSを調整
            $(this).css({opacity: 1, transform: 'translate(0, 0)'});
            }
        console.log("winScroll=>" ,winScroll);
        console.log("winHeight=>",winHeight);
        console.log("scrollPos=>",scrollPos);
        });
    });
});