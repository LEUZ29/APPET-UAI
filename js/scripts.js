$( document ).ready(function() {

        var btnMenuMobile = $('.btnmenumobile');

        $(btnMenuMobile).on('click', function() {
         
           $('.nav-container ul').toggleClass('open');
        });
});