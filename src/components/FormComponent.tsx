'use client'
import { Alert,Button, FormControl, IconButton, InputAdornment, InputLabel, Snackbar, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from 'react'
import useAuth from '@/hooks/useAuth';
import CustomTextField from './PhoneNumberComponent';

const FormComponent = () => {

    const {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        emailAddress,
        setEmailAddress,
        birthDate,
        setBirthDate,
        address,
        setAddress,
        phoneNumber,
        setPhoneNumber,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        firstNameError,
        lastNameError,
        emailError,
        birthDateError,
        addressError,
        phoneError,
        passwordError,
        confirmPasswordError,
        success,
        setSuccess,
        handleSubmit,
        resetFields
    } = useAuth();

    const [visible, setVisible] = useState(false);
    const [visibleTwo, setVisibleTwo] = useState(false);

    const handleEyeClick = () => { setVisible(!visible) }

    const handleEyeClickTwo = () => { setVisibleTwo(!visibleTwo) }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccess(false);
    };

    const date = new Date();
    let day: number = date.getDate();
    let month: number = date.getMonth() + 1;
    let year: number = date.getFullYear();

    const formattedDay: string = day < 10 ? `0${day}` : `${day}`;
    const formattedMonth: string = month < 10 ? `0${month}` : `${month}`;

    const currentDate: string = `${year}-${formattedMonth}-${formattedDay}`;

    date.setFullYear(date.getFullYear() - 100);


    return (
        <>
            <FormControl className='flex flex-col bg-white p-5 sm:p-8 w-80 sm:w-96 mx-auto rounded-xl'>
                <h1 className='text-3xl text-center mb-3'>Create an account</h1>

                <TextField
                    required
                    margin='normal'
                    autoComplete='off'
                    id='first'
                    name='first'
                    label='First name'
                    value={firstName}
                    variant='outlined'
                    error={!!firstNameError}
                    helperText={firstNameError}
                    inputProps={{ maxLength: 100 }}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <TextField
                    required
                    margin='normal'
                    autoComplete='off'
                    id='last'
                    name='last'
                    label='Last name'
                    value={lastName}
                    variant='outlined'
                    error={!!lastNameError}
                    helperText={lastNameError}
                    inputProps={{ maxLength: 100 }}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <TextField
                    required
                    type='email'
                    margin='normal'
                    autoComplete='off'
                    id='emailAddress'
                    name='emailAddress'
                    label='Email address'
                    value={emailAddress}
                    variant='outlined'
                    error={!!emailError}
                    helperText={emailError}
                    inputProps={{ maxLength: 100 }}
                    onChange={(e) => setEmailAddress(e.target.value)}
                />

                <FormControl>
                    <InputLabel
                        error={!!birthDateError}
                    >
                        Date of birth *
                    </InputLabel>

                    <TextField
                        required
                        type='date'
                        margin='normal'
                        autoComplete='off'
                        id='dateOfBirth'
                        name='dateOfBirth'
                        value={birthDate}
                        variant='outlined'
                        error={!!birthDateError}
                        helperText={birthDateError}
                        InputProps={{
                            inputProps: {
                                min: "1924-01-01",
                                max: currentDate
                            }
                        }}
                        onChange={(e) => setBirthDate(e.target.value)}
                    />
                </FormControl>

                <TextField
                    margin='normal'
                    autoComplete='off'
                    id='address'
                    name='address'
                    label='Address'
                    value={address}
                    variant='outlined'
                    error={!!addressError}
                    helperText={addressError}
                    inputProps={{ maxLength: 100 }}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <CustomTextField
                    className='mt-4 mb-2'
                    label="Phone number"
                    variant="outlined"
                    type="tel"
                    format="(###)-###-####"
                    mask="_"
                    value={phoneNumber}
                    error={!!phoneError}
                    helperText={phoneError}
                    onChange={setPhoneNumber}
                />

                <TextField
                    required
                    margin='normal'
                    autoComplete='off'
                    id='password'
                    name='password'
                    label='Password'
                    type={visible ? "text" : "password"}
                    value={password}
                    variant='outlined'
                    error={!!passwordError}
                    helperText={passwordError}
                    inputProps={{ maxLength: 100 }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleEyeClick}>
                                    {visible ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <TextField
                    required
                    margin='normal'
                    autoComplete='off'
                    id='confirmPassword'
                    name='confirmPassword'
                    label='Confirm password'
                    type={visibleTwo ? "text" : "password"}
                    value={confirmPassword}
                    variant='outlined'
                    error={!!confirmPasswordError}
                    helperText={confirmPasswordError}
                    inputProps={{ maxLength: 100 }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleEyeClickTwo}>
                                    {visibleTwo ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <div className='grid grid-cols-2'>
                    <Button variant="outlined" color="info" className="underline w-32 mx-auto my-4" onClick={resetFields}>
                        Reset
                    </Button>
                    
                    <Button variant="contained" color="info" className="underline w-32 mx-auto my-4" onClick={handleSubmit}>
                        Submit
                    </Button>

                </div>

            </FormControl>

            <Snackbar open={success} autoHideDuration={3500} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Thank you for your submission
                </Alert>
            </Snackbar>
        </>
    )
}

export default FormComponent
