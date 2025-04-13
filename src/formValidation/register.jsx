import * as yup from 'yup'
export  const registerValidation = yup.object({
    name: yup
      .string()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must not exceed 50 characters')
      .matches(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces')
      .required('Full name is required'),
    email: yup
      .string()
      .email('Please enter a valid email address')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(32, 'Password must not exceed 32 characters')
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least: 1 uppercase, 1 lowercase, 1 number, 1 special character'
      )
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
    // profile_pic: yup
    //   .mixed()
    //   .required('Profile picture is required')
    //   .test(
    //     'fileSize',
    //     'File too large (max 2MB)',
    //     value => value && value[0]?.size <= 2000000
    //   )
    //   .test(
    //     'fileType',
    //     'Only JPEG or PNG images are accepted',
    //     value => value && ['image/jpeg', 'image/png'].includes(value[0]?.type)
    //   )
  });
    
  