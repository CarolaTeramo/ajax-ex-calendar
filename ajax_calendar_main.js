$(document).ready(function(){


  // //uso handlebars
  var template_html = $('#entry-template').html();
  var template_function = Handlebars.compile(template_html);

  var data = '2018-01-01';
  var moment_data = moment(data);
  //console.log(moment_data);

  contomese = 0;


  $('.bt_dx').click(function() {

    contomese++;
    console.log(contomese);
    var i = contomese;
    //console.log(cliccato);
    // for (var i = contomese; i < contomese; i++) {
    //   //tutti i mesi
    //   //var i = 0; i < 12; i++
    //   var tutti_mesi = moment_data.month(i).format('MM');
    //   //console.log(tutti_mesi);
    //   //console.log(mese);
    //   //creo contenitore per tutti i mesi
    //
    //   mese_corrente = moment_data.month(i).format('MMMM');
    //   var tutti = moment_data.month(i).daysInMonth();
    //   //console.log(tutti); 31 28 30...
    // }

    var tutti_mesi = moment_data.month(i-1).format('MM');
    //console.log(tutti_mesi);
    //console.log(mese);
    //creo contenitore per tutti i mesi

    mese_corrente = moment_data.month(i-1).format('MMMM');
    var tutti = moment_data.month(i-1).daysInMonth();
    //console.log(tutti); 31 28 30...

    var days = [];
    //stampa dei giorni per singolo mese
    for (var j = 0; j < tutti; j++) {
      //var giorni_mese_i = mese_scelto[0]
      //x.push(j);
      //console.log(j);
      //var giorni = j;
      //console.log(giorni);
      //$('.calendario').append(j);
      days.push(j+1)
    }

    //costruisco un oggetto mese
    var variabile_hldbar = {
      'attributo': i ,
      'mese': mese_corrente,
      'giorno': days,
    }
    console.log(variabile_hldbar);

    var html_finale = template_function(variabile_hldbar);
    //appendo questo var all id che è nell'html
    $('.mese_visualizzato').html(html_finale);
    //fine click
  });












//fine document ready
});
