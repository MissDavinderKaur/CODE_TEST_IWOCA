const $ = window.$;
let submitted = false;

function start() {
  $('#loginLink').on('click', login);
  $('#modal1').modal();

  $('#callbackDetails').on('submit', submit);

  $('body').on('click', '#gotIt', gotIt);
}

function submit(e) {
  e.preventDefault();
  const name = $('#fullName').val();
  const phone = $('#phoneNumber').val();

  submitted = true;

  if(submitted) {
    $('form').remove();
    $('.right').append(`<br> <br> <br> <h5> Thanks ${name}!</h5> <br> We will contact you shortly on ${phone}. <br> Speak soon! <br> <br> <br>`);
    $('.right').append('<button class="btn waves-effect waves-light" id="gotIt"> Got it! </button>');
  }
}

function gotIt() {
  location.reload();
}

function login() {
  console.log('CLICKED');
  $('#loginModal').modal('open');
}

$(start);
