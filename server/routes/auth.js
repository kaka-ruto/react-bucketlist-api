///// Validate the signup form

function validateSignUpForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
        isFormValid = false;
        errors.email = 'Please provide a correct email address';
    }

    if (!payload || typeof payload.password !== 'string'|| payload.password.trim().length < 4) {
        isFormValid  = false;
        errors.password = 'Password must have atleast 4 characters'
    }

    if (!payload || typeof payload.username !== 'string' || payoad.username.trim().length === 0) {
        isFormValid = false;
        errors.name = 'Please provide your username'
    }

    if (!isFormValid) {
        message = 'Check the form for errors'
    }

    return {
        success: isFormValid,
        message,
        errors
    };
}

///// Validate the login form
function validateLoginForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
    isFormValid = false;
    errors.email = 'Please provide your email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = 'Please provide your password.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}