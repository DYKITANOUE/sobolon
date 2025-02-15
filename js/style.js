$(function(){

  //ハンバーガーメニュー
  jQuery ('.drawer-icon').on('click', function(e){
    e.preventDefault();
    
    jQuery('.drawer-icon').toggleClass('is-active');
    jQuery('.drawer-content').toggleClass('is-active');
    
    return false;
  });


  // wow
  new WOW(). init();

  //ページ内スムーススクロール
  jQuery('a[href^="#"').on('click', function(){

    var header = jQuery('.header').innerHeight();
    var id = jQuery(this).attr('href');
    var position = 0;
    if ( id != ('#')){
      position = jQuery(id).offset().top - header;
    }
    jQuery('html , body').animate({
      scrollTop: position
    },
    300);
    });

    //google form
    let $form = $( '#js-form' )
    $form.submit(function (e) {
      $.ajax({
       url: $form.attr('action'),
       data: $form.serialize(),
       type: "POST",
       dataType: "xml",
       statusCode: {
          0: function() {
            //送信に成功したときの処理
            $form.slideUp()
            $( '#js-success' ).slideDown()
          },
          200: function() {
            //送信に失敗したときの処理
            $form.slideUp()
            $( '#js-error' ).slideDown()
          }
        }
      });
      return false;
    });

    //form入力確認
    let $submit = $('#js-submit')
    $( '#js-submit input, #js-submit textarea').on( 'change', function(){
      if(
        $( 'js-form input[type="text"]').val() !=="" &&
        $( 'js-form input[type="email"]').val() !=="" &&
        $( 'js-form input[name="entry.31754746"]').prop( 'checked') === true
      ) {
        //全て入力されたとき
        $submit.prop( 'disabled', false)
        $submit.addClass( '-active')
      } else {
        //入力されていないとき
        $submit.prop( 'disabled', true)
        $submit.removeClass( '-active')
      }
    })
});
