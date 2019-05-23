$(document).ready(function(){

  // //uso handlebars
  var template_html = $('#entry-template').html();
  var template_function = Handlebars.compile(template_html);

  var data = '2018-01-01';
  var moment_data = moment(data);
  //console.log(moment_data);

  // ciclo esterno che itera su tutti i mesi

  for (var i = 0; i < 12; i++) {
    //tutti i mesi
    var tutti_mesi = moment_data.month(i).format('MM');
    //console.log(tutti_mesi);
    //creo contenitore per tutti i mesi


    var mese_scelto = tutti_mesi[i];
    //data-indice="0"

    var giorni = moment_data.month(i).daysInMonth();
    //console.log(giorni);
    // ciclo interno sui giorni

    for (var j = 0; j < giorni; j++) {
      //var giorni_mese_i = mese_scelto[0]
      var giorni_del_mese =  j;
      //console.log(j);
      if (i === 1 ){
        j ===1;
        console.log(j+1);
      }
      //$(.mese_visualizzato).append
    }



    // var html_finale = template_function(variabile_hldbar);
    // appendo questo var all id che è nell'html
    //$('.').append(html_finale);
    // aggiungo l'attributo che indica l'indice mese
    //tutti_mesi.attr('data-conversazione', i);

  }








//fine document ready
});
