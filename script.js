$(document).ready(function(){
    $("sl-tab").on("click", function (){
        console.log("click")
        var panel = $(this).attr("panel")
        $("section").each(function(){
            var section = $(this).attr("id")
            if(section === panel){
                console.log()
                $(`#${section}`).removeClass("hidden").siblings().addClass("hidden")
            }
        })
    })







})