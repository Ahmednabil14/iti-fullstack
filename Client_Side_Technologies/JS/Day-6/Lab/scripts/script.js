const userName = document.getElementById('user-name');
const userNamePattern = /^[a-zA-Z]\w{1,7}$/;
const password = document.getElementById('password');
const passwordPattern = /\w{6}/;
const email = document.getElementById('email');
const emailPattern = /\w@\w.\W/;
const phone = document.getElementById('tel');
const phonePattern = /^01(1|2|5|0)\d{8}$/;
const form = document.getElementsByTagName('form')[0];

// user name check
userName.addEventListener('blur', function (e) {
  const userNameError = document.getElementById('username-error');
  if (!(this.value.match(userNamePattern))) {
    userNameError.classList.add('errors');
    this.focus();
    this.select();
  } else {
    userNameError.classList.remove('errors');
  }
}
);

// password check
password.addEventListener('blur', function (e) {
  const passwordError = document.getElementById('pass-error');
  if (!(this.value.match(passwordPattern))) {
    passwordError.classList.add('errors');
    this.focus();
    this.select();
  } else {
    passwordError.classList.remove('errors');
  }
}
);

// email check
email.addEventListener('blur', function (e) {
  const emailError = document.getElementById('email-error');
  if (!(this.value.match(emailPattern))) {
    emailError.classList.add('errors');
    this.focus();
    this.select();
  } else {
    emailError.classList.remove('errors');
  }
}
);

// telephone check
phone.addEventListener('blur', function (e) {
  const phoneError = document.getElementById('tel-error');
  if (!(this.value.match(phonePattern))) {
    phoneError.classList.add('errors');
    this.focus();
    this.select();
  } else {
    phoneError.classList.remove('errors');
  }
}
);

// gender check
const checkGender = function () {
  let checked = false;
  const gender = document.getElementsByName('gender');
  for (const gend of gender) {
    if (gend.checked === true) {
      checked = true;
      break;
    }
  }
  return checked;
};

form.addEventListener('submit', function (e) {
  if (!(userName.value.match(userNamePattern)) ||
    !(password.value.match(passwordPattern)) ||
    !(email.value.match(emailPattern)) ||
    !(phone.value.match(phonePattern)) ||
    !(checkGender())) {
    e.preventDefault();
  }
});
