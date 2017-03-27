const $ = window.$;
let submitted = false;

function start() {
  $('#callbackDetails').on('submit', submit);
  $('body').on('click', '#gotIt', gotIt);
  console.log('Value of submitted on page load', submitted);
}

function submit(e) {
  e.preventDefault();
  const name = $('#fullName').val();
  const phone = $('#phoneNumber').val();

  submitted = true;
  console.log('Once the form has been submitted, the value of submitted is', submitted);

  if(submitted) {
    $('form').remove();
    $('.right').append(`<br> <br> <br> <h5> Thanks ${name}!</h5> <br> We will contact you shortly on ${phone}. <br> Speak soon! <br> <br> <br>`);
    $('.right').append('<button class="btn waves-effect waves-light" id="gotIt"> Got it! </button>');
  }
}

function gotIt() {
  location.reload();
}

$(start);
