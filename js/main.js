$(document).ready(function(){
    
    function menuMobile(){
      var menuButton = $(".wrapper-menu-mobile a i");
      var menu = $(".main-menu");
        $(".wrapper-menu-mobile a").click(function(e) {
            
             menu.slideToggle();
             menuButton.toggleClass("fas fa-times-circle fas fa-bars");
             $(".wrapper-menu-mobile").toggleClass("redBG"); 
             });
             
    }
    function autoHide(contenedor,boton){
        $(window).click(function (e) { 
            var target = $(e.target);
            if(!target.is(boton))
            if(!(target.is(contenedor)) && contenedor.is(":visible"))
               $("#config").slideToggle(200);
                
        });
    }
     
     function remove_container(){
        if($(window).width() < 900 ){
            $(".header-wrapper").removeClass("container row");
            
        }else{
            $(".header-wrapper").addClass("container row");
        }
    }
    function altura_hero() {
        altura = ($(".wrapper-hero .first-hero").css("height"));
        if($(window).width() > 600 ){  
        var altura;
     
     altura = (parseInt(altura) / 2)+.4;
        $(".wrapper-hero .item:nth-child(2),.wrapper-hero .item:nth-child(3)").css("height",altura);
    }
    else{
        
        $(".wrapper-hero .item:nth-child(2),.wrapper-hero .item:nth-child(3)").css("height",altura);
    }
    }
    function shop_adjustment_show(){
        $(".shop-adjust .search-main a").click

        (function () { 
            $(".shop-adjust .search-main a svg").toggleClass("far fa-times-circle fas fa-search");
            
           $(".wrapper-search").slideToggle();
            
        });
    }
    function show_menu(){
        if($(window).width() > 920){
            $(".main-menu").show();
         }
    }
    function showConfig(){
       var boton = $("#config-button a i");       
       var contenedor = $("#config div,#config div ul li");
       autoHide(contenedor,boton);
        boton.click
            (function(){
                $("#config").slideToggle(200);                
            });
            
        }
    

    $("#cart-button").mouseenter(function () { 
        $("#cart").stop().slideDown(400);        
    });
    $("#cart-button").mouseleave(function () { 
        $("#cart").stop().slideUp(400);        
    });

        $(window).resize(function(){
            remove_container();        
            altura_hero();
            show_menu();
            if($(window).width() < 768){
                $("#cart-button").mouseenter(function () { 
                    $("#cart").stop().slideUp(400);        
                });
                $("#cart-button").mouseleave(function () { 
                    $("#cart").stop().slideUp(400);        
                });
            }else{
                $("#cart-button").mouseenter(function () { 
                    $("#cart").stop().slideDown(400);        
                });
                $("#cart-button").mouseleave(function () { 
                    $("#cart").stop().slideUp(400);        
                });
            }
        });

        $(window).scroll(function(){
            if($(this).scrollTop() > 100)
                $("#to-up").fadeIn();
            else    
            $("#to-up").fadeOut();
        });


    // LLAMAR FUNCIONES
    remove_container();
    altura_hero();
    menuMobile();
    shop_adjustment_show();
    showConfig();    
    menu_mobile();     
    
});