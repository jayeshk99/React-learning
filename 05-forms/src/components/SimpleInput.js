import { useInput } from '../hooks/use-input';

const SimpleInput = (props) => {
  // -======== name
  const {
    value: enteredName,
    isValid: isNameValid,
    hasError: nameInputHasError,
    valueChangedHandler: nameChangeHandler,
    valueInputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  // const [enteredName, setEnteredName] = useState('');
  // // const [isNameValid, setIsNameValid] = useState(false);
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // ======== email
  const {
    value: enteredEmail,
    isValid: isEmailValid,
    hasError: emailInputHasError,
    valueChangedHandler: emailChangedHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@') && value.includes('.com'));
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // const isNameValid = enteredName.trim() !== '';
  // const isEmailValid =
  //   enteredEmail.includes('@') && enteredEmail.includes('.com');

  let formIsValid = false;
  if (isNameValid && isEmailValid) {
    formIsValid = true;
  }

  // ========= name
  // const nameChangedHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const nameInputBlurHandler = () => {
  //   setEnteredNameTouched(true);
  // };

  // ======== email
  // const emailChangedHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const emailInputBlurHandler = () => {
  //   setEnteredEmailTouched(true);
  // };

  const formSubmitHanler = (event) => {
    event.preventDefault();

    if (!isNameValid) {
      return;
    }

    // setIsNameValid(true);
    resetNameInput();
    resetEmailInput();
    // setEnteredEmail('');
    // setEnteredEmailTouched(false);

    console.log('form submitting');
  };
  return (
    <form onSubmit={formSubmitHanler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className='error-text'>Name must not be empty</p>
        )}
      </div>

      <div className='form-control'>
        <label htmlFor='name'>Your Email Address</label>
        <input
          type='email'
          id='email'
          value={enteredEmail}
          onChange={emailChangedHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email address</p>
        )}
      </div>

      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
