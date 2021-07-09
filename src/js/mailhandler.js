$(document).ready(function() {

    $("form").on("submit", function (e) {
        let dataString = $(this).serialize();
        //alert(dataString);
        //return false;
        $.ajax({
            type: 'POST',
            url: 'email-process.php',
            data: dataString,
            success: function() {
                showSuccess();
            }
        })
        e.preventDefault();
    })   

    
    
    
    const showSuccess = () => {
        $('.btn-submit').addClass('btn--success');
        $('.submit-response').addClass('submit-response--active');
        $("form").off();
    }

    







})