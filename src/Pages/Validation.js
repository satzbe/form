const Validation = (gender, status, isChecked, name, email, isSubmit) => {
  let errors = {};

  if (!name) {
    errors.name = '* Please enter your name';
  }
  if (!email) {
    errors.email = '* Please enter your email';
  } else if (!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email)) {
    errors.email = '* Please enter valid email';
  }

  if (!gender) {
    errors.gender = '* Please select the gender';
  }
  if (!status) {
    errors.status = '* Please select the status';
  }

  if (isChecked === false) {
    errors.isChecked = '* Please check here';
  }

  return errors;
};
export default Validation;
