
export function validate(values) {
  const { firstname, surname, username } = values;
  const errors = {};

  if (!firstname) {
    errors.firstname = 'First name is required';
  }

  if (!surname) {
    errors.surname = 'Surname is required';
  }

  if (!username) {
    errors.username = 'Username is required';
  } else if (username.length < 4) {
    errors.username = 'Username must be at least 4 characters long';
  } else if (username.length > 10) {
    errors.username = 'Username is too long';
  }
  return { required };
}


export const required = value =>
value ? undefined : 'Value is required';

export const minLength = value =>
value.length < 4
  ? 'Value must be at least 4 characters'
  : undefined;

export const maxLength = value =>
value.length > 10 ? 'Value is too long' : undefined;

export const matchesPassword = (value, allValues) =>
  value === allValues.password ? undefined : 'Passwords must match';

export const asyncValidate = values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  return sleep(100).then(() => {
    if(['kent', 'andy', 'john', 'joel', 'pepe'].includes(values.username)){
      return Promise.reject({
        username: 'Username has been taken'
      })
    }
  });
}
  