   $('.hamburger>img').click(
    function () {
        $(".side-bar").toggle('1000')
        $(".ham2>img").css('display' , 'inline')
    }
    )
    $('.ham2>img').click(
        function () {
        $(".ham2>img").css('display' , 'none')
        $(".side-bar").hide('1000')
    }
)