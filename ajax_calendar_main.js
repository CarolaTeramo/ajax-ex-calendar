$(document).ready(function(){

  // //uso handlebars
  var template_html = $('#entry-template').html();
  var template_function = Handlebars.compile(template_html);

  var data = '2018-01-01';
  var moment_data = moment(data);
  //console.log(moment_data);
  contomese = 0;
  var gennaio = moment_data.month(contomese).daysInMonth();
  for (var k = 1; k <= gennaio; k++) {
    var g_gennaio = k;
    $('#calendario').append('<li>' + g_gennaio  + ' ' +'January' + '</li>')
  }



  $('.bt_dx').click(function() {

    if (contomese < 11) {
      //svuoto ul
      $('#calendario').empty();
    }

    contomese++;
    //console.log(contomese);

    if (contomese >= 12 === false){
      var i = contomese;

      var tutti_mesi = moment_data.month(i).format('MM');
      //console.log(tutti_mesi);
      //console.log(mese);
      //creo contenitore per tutti i mesi

      mese_corrente = moment_data.month(i).format('MMMM');
      var giorni_nel_mese = moment_data.month(i).daysInMonth();
      //console.log(tutti); 31 28 30...

      $('#mese_corrente').text(mese_corrente + ' ' + '2018')



      var prova = [];

      //stampa dei giorni per singolo mese
      for (var j = 1; j <= giorni_nel_mese; j++) {

        function zero_giorno (day){
          if (day <10){
            return '0' + day
          }
          return day;
        }
        var days = zero_giorno (j);
        //console.log(days);
        //console.log(zero_giorno (j));
        var data_modificata = moment_data.month(3).format('YYYY-MM-') + days;
        prova.push(data_modificata)
        //console.log(prova);




        var variabile_hldbar = {
          'giorno': j + ' ' +mese_corrente,
          'format_giorno': data_modificata
        }
        //console.log(variabile_hldbar);

        var html_finale = template_function(variabile_hldbar);
        //appendo questo var all id che è nell'html
        $('#calendario').append(html_finale);


        //fine for
      }
    //fine if
    }
    // var fi = $('#calendario .elenco_giorni').attr('data-indice[]');
    // console.log(fi);

    //chiamata ajax
    var dato_ajax =  {
      'year': 2018,
      'month': 3,
    };
    console.log(dato_ajax);

    $.ajax({
      'url': 'https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0',
      'method': 'GET',
      'data' : dato_ajax,
      'success': function(data){
        output(data);
        //console.log(data);
      },
      'error': function(){
        alert('no');
      }
      //fine chiamata ajax
    });

    function output(info){

      var feste = info.response;
      console.log(feste);



      for (var i = 0; i < feste.length; i++) {
        var festa = (feste[i].date);


        //console.log(festa);
        if (festa[i] = data_modificata) {
          //alert('ok');
          // var dove = prova.indexOf(festa);
          // console.log(dove);


          //$('.nome_festa').text(feste[i].name)
        }
        // if (j= 1) {
        //   alert('no');
        //   //.addClass('rosso');
        // }
      }

      //fine funz output ajax
    }




    //fine click
  });






  // //BOTTONE INDIETRO
  //
  // $('.bt_sx').click(function() {
  //
  //   contomese--;
  //   console.log(contomese);
  //   var i = contomese;
  //
  //   var tutti_mesi = moment_data.month(i).format('MM');
  //   //console.log(tutti_mesi);
  //   //console.log(mese);
  //   //creo contenitore per tutti i mesi
  //
  //   mese_corrente = moment_data.month(i).format('MMMM');
  //   var tutti = moment_data.month(i).daysInMonth();
  //   //console.log(tutti); 31 28 30...
  //
  //   var days = [];
  //   //stampa dei giorni per singolo mese
  //   for (var j = 0; j < tutti; j++) {
  //     //var giorni_mese_i = mese_scelto[0]
  //     //x.push(j);
  //     //console.log(j);
  //     //var giorni = j;
  //     //console.log(giorni);
  //     //$('.calendario').append(j);
  //     //days.push(j+1)
  //
  //     //costruisco un oggetto mese
  //     var variabile_hldbar = {
  //       'giorno': j,
  //     }
  //     console.log(variabile_hldbar);
  //
  //     var html_finale = template_function(variabile_hldbar);
  //     //appendo questo var all id che è nell'html
  //     $('#calendario').append(html_finale);
  //
  //   }
  //
  //
  //   //fine click
  // });




  // var variabile_hldbar = {
  //   'attributo': i ,
  //   'mese': mese_corrente,
  //   'giorno': j,
  // }





//fine document ready
});
