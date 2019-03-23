


$(function(){
    
    
    
    'use strict ' ;
    $(".con-li ul li ").on('click',function(){
        
        $(this).addClass("active").siblings().removeClass("active");
        if($(this).data('class') === 'all')
            {
                $(".shuffle .col-sm").css('opacity','1');
            }
        else
        {
            $(".shuffle .col-sm").css('opacity','0.3');
            $($(this).data('class')).parent().css('opacity','1')
        }
        
    });
    
    
 var storeTimeInterval=setInterval(function(){timer()},1000);
    function timer(){
        
        
        
        if($.isNumeric($("#sec").html())) 
            {
                
            
          var sec = parseInt($("#sec").html());
        
        if(sec !== 0 )
            {
                $("#sec").html(sec - 1);
            }
        else{
            $("#sec").html(59);
                var min = parseInt($("#min").html()) ; 
                if(min !== 0)
                    {
                        $("#min").html(min- 1);
                       
                    }
                else
                    {
                        $("#min").html(59) ; 
                        var hour = parseInt($("#hour").html());
                        
                        if(hour !==0 )
                            {
                               $("#hour").html(hour - 1);  
                            }
                        else
                            {
                                $("#hour").html(24) ;
                                 var days = parseInt($("#days").html());
                                if(days !==0 )
                            {
                             $("#days").html(days - 1);  
                            }else
                                    {
                                        $("#sec").html(0) ;
                                        $("#min").html(0) ;
                                        $("#hour").html(0) ;
                                        $("#days").html(0) ;
                                    }
                            }
                    }
                    
                
        }
        
    }};
    
    
    
    
    
    
    
    
});


/****************************************start**************************/


    
    
    
    


