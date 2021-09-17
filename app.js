
$(document).ready(function() {
    console.log('++ jquery is working heyyyyy');

    $('.select-german').click(function(e) {
        e.preventDefault();
        $('.language-option').removeClass('selected');
        $(this).addClass('selected');
        $(".english").hide();
        $(".german").show();
    });
       $('.select-english').click(function(e) {
        e.preventDefault();
        $('.language-option').removeClass('selected');
        $(this).addClass('selected');
        $(".german").hide();
        $(".english").show();
    });
});



