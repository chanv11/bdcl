$(document).ready(function(){
    $(".input").keydown(function(){ 
        $(".wrap").attr("class","change-wrap");
        $(".pic").attr("class","change-pic");
        $("#img1 img").attr("src","https://www.baidu.com/img/baidu_jgylogo3.gif")
        $("#img1 img").css("width","101px")
        $("#img1 img").css("height","33px")
        $(".search").attr("class","change-search");
        $(".btn").attr("class","change-btn");
        $("#u1").hide();
        $("#u2").css({"display":"block","width":"150px","right":"0","margin":"21px 9px 5px 0"});
        $("#u2 .top-text").css({"text-decoration":"underline","color":"#333","margin":"0 7px","font-weight":"500"});
    })
})