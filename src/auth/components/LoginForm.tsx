import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, Icon, IconButton, InputAdornment, Typography } from 'ud-ui-toolkit';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../slice/loginSlice';
import * as yup from 'yup';
import isEmpty from 'lodash/isEmpty';
import { selectAuth } from "selectors";
import { LoginCredential } from 'models/LoginCredential';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  username: yup.string().required('Please enter your Username.'),
  password: yup
    .string()
    .required('Please enter your password.')
    .min(4, 'Password is too short - should be 4 chars minimum.'),
});

const defaultValues: LoginCredential = {
  username: '',
  password: '',
  source: 'crm'
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const { login } = useSelector(selectAuth);
  const { control, setValue, formState, handleSubmit, reset, trigger, setError } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setValue('username', '04partnerscrm', { shouldDirty: true, shouldValidate: true });
    setValue('password', '04N^t5Wd0fCF', { shouldDirty: true, shouldValidate: true });
  }, [reset, setValue, trigger]);

  // useEffect(() => {
  //   login.errors.forEach((error: any) => {
  //     setError(error.type, {
  //       type: 'manual',
  //       message: error.message,
  //     });
  //   });
  // }, [login.errors, setError]);

  function onSubmit(model: any) {
    console.log("login model", model);
    dispatch(loginAction.submitLogin(model));
  }

  return (
    <div className="w-full">
      <form className="flex flex-col justify-center w-full" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              size="small"
              margin="normal"
              error={!!errors.username}
              helperText={errors?.username?.message}
              label="Username"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon className="text-20" color="action" iconName='user' />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              type="password"
              size="small"
              margin="normal"
              error={!!errors.password}
              helperText={errors?.password?.message}
              variant="outlined"
              InputProps={{
                className: 'pr-2',
                type: showPassword ? 'text' : 'password',
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      <Icon className="text-20" color="action" iconName={showPassword ? 'visibility' : 'visibility_off'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              required
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="w-full mx-auto mt-16"
          aria-label="LOG IN"
          disabled={isEmpty(dirtyFields) || !isValid}
          value="legacy"
        >
          Login
        </Button>
      </form>

      <table className="w-full mt-32 text-center">
        <thead className="mb-4">
          <tr>
            <th>
              <Typography className="font-semibold text-11" color="textSecondary">
                application
              </Typography>
            </th>
            <th>
              <Typography className="font-semibold text-11" color="textSecondary">
                username
              </Typography>
            </th>
            <th>
              <Typography className="font-semibold text-11" color="textSecondary">
                Password
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Typography className="font-medium text-11" color="textSecondary">
                CRM
              </Typography>
            </td>
            <td>
              <Typography className="text-11">04partnerscrm</Typography>
            </td>
            <td>
              <Typography className="text-11">04N^t5Wd0fCF</Typography>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LoginForm;
