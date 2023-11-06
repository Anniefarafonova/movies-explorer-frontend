// const [inputFields, setInputFields] = useState({
//    email: "",
//    password: "",
//    age: null
//  });
//  const [errors, setErrors] = useState({});
//  const [submitting, setSubmitting] = useState(false);

//  const validateValues = (inputValues) => {
//   let errors = {};
//   if (inputValues.email.length < 15) {
//     errors.email = "Email is too short";
//   }
//   if (inputValues.password.length < 5) {
//     errors.password = "Password is too short";
//   }
//   if (!inputValues.age || inputValues.age < 18) {
//     errors.age = "Minimum age is 18";
//   }
//   return errors;
// };
// const handleChange = (e) => {
//   setInputFields({ ...inputFields, [e.target.name]: e.target.value });
// };

// const handleSubmit = (event) => {
//   event.preventDefault();
//   setErrors(validateValues(inputFields));
//   setSubmitting(true);
// };

// const finishSubmit = () => {
//   console.log(inputFields);
// };
// useEffect(() => {
//   if (Object.keys(errors).length === 0 && s) {
//     finishSubmit();
//   }
// }, [errors]);