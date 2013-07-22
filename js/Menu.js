   var listaEnlaces=new Array(
       '<li id="p0" ><a href="inicio.html">Inicio</a></li>',
       '<li id="p2" ><a href="Historia.html">Concepto e Historia</a></li>',
       '<li id="p3"><a href="TiposMalware.html">Tipos de Malware</a></li>',
       '<li id="p4"><a href="Prevencion.html">¿Cómo combatirlos?</a></li>'
       );  
          
    var sublistaEnlaces=new Array(
       '<li id="p5" ><a href="JuegoEmparejamiento.html">Emparejamiento</a></li>',
       '<li id="p6" ><a href="SeleccionMultiple.html">Selección múltiple</a></li>',
       '<li id="p7" ><a href="VerdaderoFalso.html">Verdadero y Falso</a></li>',
       '<li id="p8"><a href="SopaDeLetras.html">Sopa de Letras</a></li>',
       '<li id="p9"><a href="RompeCabezas.html">Puzzle</a></li>'       
       );
    
    
    function agregarMenu(){
          $("<link/>",{rel:  "stylesheet", type: "text/css", href: "css/bootstrap.min.css", media: "screen" }).appendTo("head");
          $("<link/>",{rel:  "stylesheet", type: "text/css", href: "css/bootstrap-responsive.min.css" }).appendTo("head");
          var menu= '<p><h1>El Malware</h1></p> \
                     <div class="navbar "> \
                            <div class="navbar-inner"> \
                                <div class="container"> \
                                    <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">\
                                        <span class="icon-bar"></span>\
                                        <span class="icon-bar"></span>\
                                        <span class="icon-bar"></span>\
                                    </button>\
                                    <a class="brand">Navegacion</a> \
                                    <div class="nav-collapse collapse"> \
                                        <ul class="nav">'
                                              + listaEnlaces.join("")
                                              + '<li id="dd" class="dropdown">  \
                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Actividades <b class="caret"></b></a>\
                                                    <ul class="dropdown-menu"> '
                                                         +sublistaEnlaces.join("");
                                                  +'</ul> \
                                                 </li> \
                                        </ul> \
                                   </div> \
                                 </div> \
                            </div> \
                      </div>';  
            document.getElementById("mainMenu").innerHTML = menu;            
            $('.dropdown-toggle').dropdown();

        }
        
 