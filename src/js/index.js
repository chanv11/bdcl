$(document).ready(function(){
    $("#hover2").hover(function(){
        $(".setting-detail").css({"display":"block","right":"106px","top":"37px"});
     },function(){
         setTimeout(function(){
            $(".setting-detail").css("display","none");  
         },500)
        // $(".setting-detail").css("display","none");           
     });
        $(".input").keydown(function(){ 
            $(".wrap").attr("class","change-wrap");
            $(".pic").attr("class","change-pic");
            $("#img1").attr("src","https://www.baidu.com/img/baidu_jgylogo3.gif")
            $("#img1").css("width","101px")
            $("#img1").css("height","33px")
            $("#img1").click(function(){
                $(".input").val("");
                $(".change-wrap").attr("class","wrap");
                $(".change-pic").attr("class","pic");
                $("#img1").attr("src","./src/images/bd_logo.png")
                $("#img1").css("width","270px")
                $("#img1").css("height","129px")
                $(".change-search").attr("class","search");
                $("change-.btn").attr("class","btn");
                $("#u1").show();
                $("#u2").css({"display":"none"});
            });
            $(".search").attr("class","change-search");
            $(".btn").attr("class","change-btn");
            $("#u1").hide();
            $("#u2").css({"display":"block","width":"156px","right":"0","margin":"18px 9px 5px 0"});
            $("#u2 .top-text").css({"text-decoration":"underline","color":"#333","margin":"0 7px","font-weight":"500"});
            $("#hover1").hover(function(){
                $(".setting-detail").css({"display":"block","right":"60px","top":"43px"});
             },function(){
                $(".setting-detail").css("display","none");           
             });
        })
    $("#click1").click(function(){
        $(".input").val("");
        $(".change-wrap").attr("class","wrap");
        $(".change-pic").attr("class","pic");
        $("#img1").attr("src","./src/images/bd_logo.png")
        $("#img1").css("width","270px")
        $("#img1").css("height","129px")
        $(".change-search").attr("class","search");
        $("change-.btn").attr("class","btn");
        $("#u1").show();
        $("#u2").css({"display":"none"});
    });
    $(".setting-detail").hover(function(){
        $(".setting-detail").css("display","block")}
    );
    $(".detail-li").hover(
        function(){
            $(this).addClass("li-hover");
        },function(){
            $(this).removeClass("li-hover")
        }
    );
    
})