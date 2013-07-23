var ArreglodeTodos1 = ["human","ing","fish","SpyWare","email","devices","Multimedia","directContact", 
                                "antivirus","firewall","descargaMalware","click","se","ESET","MalwareBorrador","BarreM"];

var ArregloGanadores = ["fish","SpyWare","email","devices","Multimedia","antivirus","firewall","se","ESET"];




function comprovar(){
    var victoria = false;
    for(var i = 0; i<9;i++){
        alert(ArregloGanadores[i]);
        if(document.getElementById(ArregloGanadores[i]).checked === false)
            break;
        else
            var victoria = true;
    }
    
    if(victoria === false)
        alert("la paseaste");
    else
        alert("contestaste correctamente");
        
}