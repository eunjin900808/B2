$(function(){
        // 메뉴

        // $(".main > li").mouseover(function(){
        //     $(".sub,.sub_bg").stop().slideDown();
        // })//mouseover
        // $(".main > li").mouseout(function(){
        //     $(".sub,.sub_bg").stop().slideUp();
        // })//mouseout

        $(".main > li").hover(function(){
            $(".sub,.sub_bg").stop().slideDown();
        }, function(){
            $(".sub,.sub_bg").stop().slideUp();
        })
    
    
        //슬라이드 탑 이동
    
        setInterval(function(){

            $(".top_move").animate({top: "-300px"}, 500, function(){
                $(".top_move").append( $(".top_move li").eq(0))
                $(".top_move").css({top: "0"})
            });
    
        },2000);
    
        //팝업
    
        $(".p_up").click(function(){
            $(".pop").show();
            $(".modal").show();
        })//click
    
        $(".close").click(function(){
            $(".pop").hide();
            $(".modal").hide();
        })//click
})