//le compteur du message
$('#count').text($('h6').length)
//evenement de type click sue le bouton Add
$("#btn-add").click( function(){
    //valeur du champ de saisie
    var message = $('#add-message').val()

    //rajout du mesage au body
    $("body").append(

    `<div class="row">
        <img class="avatar" src="./avatar-2.jpg">
            <div>
                <h6>Fatima Bouzidi</h6>
                <p>${message}  </p>
            </div>
        <img class="trash" src="trash.png">
    </div>`)
    //mettre le compteur à jour à chaque rajout du message
    $('#count').text($('h6').length)
    //vider le champ de saisie
    $('#add-message').val("") 

    //evenement du suupression en cliquant  sur la poubelle
//$('.trash').click( function(){
    //this:reference à la poubelle est en supprime son parent
   //$(this).parent().remove()

 //mettre le compteur à jour à  chaque suppression  du message
 //$('#count').text($('h6').length --)
 //})
 $(".trash").on("click", function(){
    $(this).parent().remove()
    $('#count').text($('h6').length --)
    alert("Le message viens d'être supprimé");



});
})

$('#btn-search').click(function (){
     $('h6').each( function(){

        if( $('#search-message').val() == $(this).text()){
           $(this).parent().closest($('.row')) ;

        }else {
            $(this).parent().closest($('.row')).remove() ;
        }

        $('#count').text($('h6').length)
})
})
