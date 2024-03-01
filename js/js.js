    // $( 'body' ).on( 'click', 'button.plus, button.minus', function() {
 
    //     var qty = $(this).parent().find( 'input' ),
    //         val = parseInt( qty.val() ),
    //         min = parseInt( qty.attr( 'min' ) ),
    //         max = parseInt( qty.attr( 'max' ) ),
    //         step = parseInt( qty.attr( 'step' ) );
    //         if(!max){
    //             max = 1000;
    //         }

    //     if ( $( this ).is( '.plus' ) ) {
    //         if ( max && ( max <= val ) ) {
    //             qty.val( max );
    //             qty.trigger("change");
    //         } else {
    //             qty.val( val + step );
    //             qty.trigger("change");
    //         }
    //     } else {
    //         if ( min && ( min >= val ) ) {
    //             qty.val( min );
    //             qty.trigger("change");
    //         } else if ( val > 1 ) {
    //             qty.val( val - step );
    //             qty.trigger("change");
    //         }
    //     }
     
    // });


    // $( 'body' ).on( 'keyup', '.input-text.qty.text', function() {
    //     var qtyInp = $(this),
    //     valInp = parseInt( qtyInp.val() ),
    //     maxInp = parseInt( qtyInp.attr( 'max' ) );
    //     if(!maxInp){
    //         maxInp = 1000;
    //     }
    //     if ( maxInp && ( maxInp <= valInp ) ) {
    //         qtyInp.val( maxInp );
    //         qtyInp.trigger("change");
    //     }
    // })