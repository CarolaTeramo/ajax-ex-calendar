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

    function zero_giorno (daygen){
      if (daygen <10){
        return '0' + daygen
      }
      return daygen;
    }

    var days_gen = zero_giorno (k);
    var data_modificata_gen = moment_data.month(0).format('YYYY-MM-') + days_gen;
    $('#calendario').append('<li data-indicegen="' + data_modificata_gen + '" >' + g_gennaio  + ' ' +'January' + '<span class="nome_festa_gen"></span>' +'</li>')
  }

  //chiamata ajax
  var dato_ajax =  {
    'year': 2018,
    'month': 0,
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

    var feste_gen = info.response;
    console.log(feste_gen);

    var list_gen= [];
    var ros_gen = [];
    for (var i = 0; i < feste_gen.length; i++) {
      var festa_gen = feste_gen[i].date;
      var nome_gen = feste_gen[i].name;
      list_gen.push(festa_gen);
      ros_gen.push(nome_gen);
      console.log(list_gen);
      console.log(ros_gen);
      var prova_gen = $('[data-indicegen="' + list_gen[i] + '"]');
      console.log(prova_gen);
      prova_gen.addClass('rosso');
      prova_gen.find('.nome_festa_gen').text(' ' + ros_gen[i])

    }

    //fine funz output ajax
  }


  $('.bt_dx').click(function() {

    if (contomese < 11) {
      //svuoto ul
      $('#calendario').empty();
    }
    contomese++;
    console.log(contomese);

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
        var data_modificata = moment_data.month(i).format('YYYY-MM-') + days;
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
      'month': i,
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

      var list= [];
      var ros = [];
      for (var i = 0; i < feste.length; i++) {
        var festa = feste[i].date;
        var nome = feste[i].name;
        list.push(festa);
        ros.push(nome);
        console.log(list);
        console.log(ros);
        var prova = $('[data-indice="' + list[i] + '"]');
        console.log(prova);
        prova.addClass('rosso');
        prova.find('.nome_festa').text(' ' + ros[i])

      }

      //fine funz output ajax
    }

    //fine click
  });


  $('.bt_sx').click(function() {

    if (contomese > -11) {
      //svuoto ul
      $('#calendario').empty();
    }
    contomese--;
    console.log(contomese);

    if (contomese <= -12 === false){
      var i = contomese;

      var tutti_mesi = moment_data.month(i).format('MM');
      //console.log(tutti_mesi);
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
        var data_modificata = moment_data.month(i).format('YYYY-MM-') + days;
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
      'month': 11,
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

      var list= [];
      var ros = [];
      for (var i = 0; i < feste.length; i++) {
        var festa = feste[i].date;
        var nome = feste[i].name;
        list.push(festa);
        ros.push(nome);
        console.log(list);
        console.log(ros);
        var prova = $('[data-indice="' + list[i] + '"]');
        console.log(prova);
        prova.addClass('rosso');
        prova.find('.nome_festa').text(' ' + ros[i])

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


//fine document ready
});
