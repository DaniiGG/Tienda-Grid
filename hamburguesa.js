//--------------------HAMBURGUESA-------------------------------

	$(document).ready(function() {
    let blanco = true; // Establecemos un indicador de color inicial

    $('#menu_on').click(function() {
        $('body').toggleClass('visible_menu');

        // Alternar entre blanco y negro
        if (blanco) {
            $('span').css('background-color', 'white');
        } else {
            $('span').css('background-color', 'black');
        }
        
        // Cambiar el indicador al color opuesto para el próximo clic
        blanco = !blanco;
    });
});
