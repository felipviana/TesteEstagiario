$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault(); 
  
    $(this).find('.invalid-feedback').remove();
    $(this).find('input').removeClass('is-invalid');

    let isValid = true;

      $(this).find('input').each(function() {
        if ($(this).val() === '') {
          $(this).addClass('is-invalid');
          $(this).parent().append('<div class="invalid-feedback">Este campo é obrigatório.</div>');
          isValid = false;
        } else {
          $(this).removeClass('is-invalid');
          $(this).parent().find('.invalid-feedback').remove();
        }
      });
  
      if (isValid) {
        $('#alert_success').removeClass('d-none');
        setTimeout(function() {
            $('#alert_success').addClass('d-none');
        }, 3000);
      }
    });
    $('.ball').click(function (e) {
        e.target.classList.toggle('ball-move');
        document.querySelector('body').classList.toggle('dark-mode');
    });
  });