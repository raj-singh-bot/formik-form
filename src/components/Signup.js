import React from 'react'
import { Formik , Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import 'react-phone-number-input/style.css'
import FormikPhoneInput from './FormikPhoneInput'

export const Signup = () => {
    const ref = React.createRef();
    //const formik = new useFormikContext();
    const defaultValues = {
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"", 
        phone:"",
      }
      const validationSchema= Yup.object().shape({
        firstName: Yup.string().required("Please enter your first name"),
        lastName: Yup.string().required("Please enter your last name"),
        email:  Yup.string().required("Please enter your email address").email('Invalid email address'),
        password: Yup.string().required("Please enter your password").matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
        confirmPassword: Yup.string().required("Please enter your confirm password").oneOf([Yup.ref("password"), null], "Passwords must match"),
        phone: Yup.string().required("Please enter your phone number")
      })
    
      const handleSubmit = (values) => {
        console.log(values);
      }
  return (
    <div>
        <div className="container">
      <Formik initialValues={defaultValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      >{({setFieldValue})=>(
        <Form>
          <div className="row">
            <Field name="firstName" placeholder = "Enter Your First Name" type="text" className="form-control"/>
            <p className="text-danger">
              <ErrorMessage  name="firstName"/>
            </p>
            <Field name="lastName" placeholder = "Enter Your Last Name" type="text" className="form-control"/>
            <p className="text-danger">
              <ErrorMessage  name="lastName"/>
            </p>
            <Field name="email" placeholder = "Enter your email address" type="email" className="form-control"/>
            <p className="text-danger">
              <ErrorMessage  name="email"/>
            </p>
            <Field name="password" placeholder = "Enter your password" type="password" className="form-control"/>
            <p className="text-danger">
              <ErrorMessage  name="password"/>
            </p>
            <Field name="confirmPassword" placeholder = "Confirm Your Password" type="password" className="form-control"/>
            <p className="text-danger">
              <ErrorMessage  name="confirmPassword"/>
            </p>
            <FormikPhoneInput ref={ref} name="phone"   onChange={e => setFieldValue("phone",e)} />
            <p className="text-danger">
              <ErrorMessage  name="phone"/>
            </p>
            <button type="submit" className="btn btn-success">Submit</button>
          </div>
        </Form>
      )
        
      }
        
      </Formik>
        </div>
    </div>
  )
}


// import React from 'react';
// import { useFormik } from 'formik';
// import FormikPhoneInput from './FormikPhoneInput';

// const Signup = () => {
//   const ref = React.createRef();
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//     },
//     onSubmit: values => {
//       console.log(values);
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.firstName}
//       />
//       <label htmlFor="lastName">Last Name</label>
//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.lastName}
//       />
//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />
//       <FormikPhoneInput ref={ref} name="phone" formik={formik}  onChange={e => formik.setFieldValue("phone",e)} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };
// export default Signup;