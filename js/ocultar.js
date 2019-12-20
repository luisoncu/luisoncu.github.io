$(document).on( ' ready ' ,funtion()
{
    
    $("ocultar").click(funtion(event){
        event.preventDefault();
        $("palabras").hide("slow");
        
    });
    
    $("#mostrar").click(funtion(event){
        event.preventDefault();
        $("#oculto").show(1000);
        
});

});
