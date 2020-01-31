$(document).ready(function() {
  if(window.location.href.indexOf('index')>-1)//solo se ejecuta cuando estemos en el index
  {

	//Slider
	$('.galeria').bxSlider({
		mode: 'fade',
		captions: true,
		slideWidth: 1200
    });
  }
  if(window.location.href.indexOf('index')>-1)//solo se ejecuta cuando estemos en el index
  {
    //Post
    var posts=[
       {
       	title:'Prueba de titulo 1',
        date:'Publicado el día '+ moment().format("dddd")+" "+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),//fecha actual
        content:'El mocasín (del idioma powhatan, makasin, zapato) es un tipo de zapato masculino de cuero y suela dura. El término proviene del calzado que utilizaban los nativos americanos fabricado de piel sin curtir. Los mocasines son zapatos que se caracterizan por carecer de cordones, hebillas u otra forma de sujeción. Cuentan con una pala ancha cosida al resto que forma una sola pieza y se calzan en un solo gesto.'
       },
       {
       	title:'Prueba de titulo 2',
        date:'Publicado el día '+ moment().format("dddd")+" "+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
        content:'El mocasín (del idioma powhatan, makasin, zapato) es un tipo de zapato masculino de cuero y suela dura. El término proviene del calzado que utilizaban los nativos americanos fabricado de piel sin curtir. Los mocasines son zapatos que se caracterizan por carecer de cordones, hebillas u otra forma de sujeción. Cuentan con una pala ancha cosida al resto que forma una sola pieza y se calzan en un solo gesto.'
       
       },
       {
       	title:'Prueba de titulo 3',
        date:'Publicado el día '+ moment().format("dddd")+" "+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
        content:'El mocasín (del idioma powhatan, makasin, zapato) es un tipo de zapato masculino de cuero y suela dura. El término proviene del calzado que utilizaban los nativos americanos fabricado de piel sin curtir. Los mocasines son zapatos que se caracterizan por carecer de cordones, hebillas u otra forma de sujeción. Cuentan con una pala ancha cosida al resto que forma una sola pieza y se calzan en un solo gesto.'
       },
       {
       	title:'Prueba de titulo 4',
        date:'Publicado el día '+ moment().format("dddd")+" "+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
        content:'El mocasín (del idioma powhatan, makasin, zapato) es un tipo de zapato masculino de cuero y suela dura. El término proviene del calzado que utilizaban los nativos americanos fabricado de piel sin curtir. Los mocasines son zapatos que se caracterizan por carecer de cordones, hebillas u otra forma de sujeción. Cuentan con una pala ancha cosida al resto que forma una sola pieza y se calzan en un solo gesto.'
       },
       {
       	title:'Prueba de titulo 5',
        date:'Publicado el día '+ moment().format("dddd")+" "+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
        content:'El mocasín (del idioma powhatan, makasin, zapato) es un tipo de zapato masculino de cuero y suela dura. El término proviene del calzado que utilizaban los nativos americanos fabricado de piel sin curtir. Los mocasines son zapatos que se caracterizan por carecer de cordones, hebillas u otra forma de sujeción. Cuentan con una pala ancha cosida al resto que forma una sola pieza y se calzan en un solo gesto.'
       },
    ];
    posts.forEach((item, index)=>{
    	var post=`
    	<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					<a href="#" class="button-more">Leer más</a>
		</article>
		`;
		$("#posts").append(post);
    });  

    } 

    //selector de tema
   var theme=$("#theme");
    $("#to-green").click(function(){
      theme.attr("href","css/green.css");//sustituyo lo que hay en href="css/green.css"
    });
    $("#to-red").click(function(){
      theme.attr("href","css/red.css");//sustituyo lo que hay en href por href="css/red.css"
    });
    $("#to-blue").click(function(){
      theme.attr("href","css/blue.css");//sustituyo lo que hay en href por href="css/blue.css"
    });

    //
    $(".subir").click(function(e){
      e.preventDefault();//para que el link no me lleve a otro lado
      $('html,body').animate({//efecto sobre los elementos html y body de la pagina
        scrollTop:0//subir al px 0
      },500);//tiempo
      return false;
    });

    //login falso
    $("#login form").submit(function(){
      var form_name =$("#form_name").val();
      localStorage.setItem("form_name", form_name);

    });
    var form_name=localStorage.getItem("form_name");
    if (form_name !=null && form_name!="undefine") {
      var about_parrafo=$("#about p");
      about_parrafo.html("<br><strong>Bienvenido, "+form_name+" </strong>");
      about_parrafo.append("<a href='#'id='logout'>Cerrar Sesión</a>");

      $("#login").hide();//oculta el login
      $("#logout").click(function(){
        localStorage.clear();//borra lo que hay en local storage
        location.reload();//Acualiza la pagina
      });

    };

    //Acordeon
    if(window.location.href.indexOf('about')>-1){//solo se ejecuta cuando estemos en el index
      $("#acordeon").accordion();    
    }

    //Reloj
    if(window.location.href.indexOf('reloj')>-1){//solo se ejecuta cuando estemos en el reloj

      setInterval(function(){//se ejecuta o muestra cada segundo
        var reloj=moment().format("hh:mm:ss a");
        $("#reloj").html(reloj);
      }, 1000);  
    }

    //Plugin Validacion
    if(window.location.href.indexOf('contact')>-1){//solo se ejecuta cuando estemos en contacto
      $("form input[name='date']").datepicker({
        dateFormat:'dd-mm-yy'
      });
      $.validate({
        lang:"es",
        errorMessagePosition:'top',
        scrollTotopOnerror:true
      });
    }
     
});

