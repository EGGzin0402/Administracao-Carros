const inputSearch = document.getElementById("inputSearch");
const inputSelect = document.getElementById("SearchSelect");

$(function(){

	$.getJSON("js/automoveis.json", function(data) {

      	for(var i = 0; i <  data['automoveis'].length; i++){
      		$("#TableData").append("<tr id='trow"+[i]+"'>");
			$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['MARCA'] + "</td>");
			$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['CARRO'] + "</td>");
			$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MIN'] + "</td>");
			$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MAX'] + "</td>");
			$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MIN'] + "</td>");
			$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MAX'] + "</td>");
			$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MIN'] + "</td>");
			$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MAX'] + "</td>");
			$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MIN'] + "</td>");
			$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MAX'] + "</td>");
			$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MIN'] + "</td>");
			$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MAX'] + "</td>");
		}

  	});

	
});

function Search() {
	if(inputSearch.value != ""){
		
		$.getJSON("js/automoveis.json", function(data) {

			for(var i = 0; i <  data['automoveis'].length; i++){
				$("#trow"+[i]).remove();
			}

			for(var i = 0; i <  data['automoveis'].length; i++){
				if(data['automoveis'][i][inputSelect.value] == inputSearch.value){

					$("#TableData").append("<tr id='trow"+[i]+"'>");
					$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['MARCA'] + "</td>");
					$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['CARRO'] + "</td>");
					$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MIN'] + "</td>");
					$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MAX'] + "</td>");
					$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MIN'] + "</td>");
					$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MAX'] + "</td>");
					$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MIN'] + "</td>");
					$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MAX'] + "</td>");
					$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MIN'] + "</td>");
					$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MAX'] + "</td>");
					$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MIN'] + "</td>");
					$("#trow"+[i]).append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MAX'] + "</td>");

				}
		  }
  
		});

	}
}

function Test() {

	$.getJSON("js/automoveis.json", function(data) {

		for(var i = 0; i <  data['automoveis'].length; i++){
			$("#trow"+[i]).remove();
		}

	});
	
}
			   			






				