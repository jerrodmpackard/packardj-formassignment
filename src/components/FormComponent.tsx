'use client'
import { Button, FormControl, IconButton, InputAdornment, TextField } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from 'react'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';

const today = dayjs();
const minDate = dayjs().subtract(100, 'year');

const FormComponent = () => {

    const [data, setData] = useState<{}>({});
    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [emailAddress, setEmailAddress] = useState<string>();
    const [birthDate, setBirthDate] = useState<Dayjs | null>(null);
    const [address, setAddress] = useState<string>();
    const [phoneNumber, setPhoneNumber] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();

    // Handles the submit event on form submit.
    const handleSubmit = async (event: any) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            first: setFirstName(event.target.first.value),
            last: setLastName(event.target.last.value),
            email: setEmailAddress(event.target.emailAddress.value),
            dateOfBirth: setBirthDate(event.target.birthDate.value),
            address: setAddress(event.target.address.value),
            phoneNumber: setPhoneNumber(event.target.phoneNumber.value),
            password: setPassword(event.target.password.value),
            confirmPassword: setConfirmPassword(event.target.confirmPassword.value)
        }

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        // API endpoint where we send form data.
        const endpoint = '/api/form'

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        }

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        alert(`You entered: ${result.data}`)
    }

    const [visible, setVisible] = useState(false);
    const [visibleTwo, setVisibleTwo] = useState(false);

    const handleEyeClick = () => { setVisible(!visible) }

    const handleEyeClickTwo = () => { setVisibleTwo(!visibleTwo) }


    return (
        <>
            <h1 className='text-4xl text-center mb-3'>Create an account</h1>

            {/* We pass the event to the handleSubmit() function on submit. */}
            {/* <form onSubmit={handleSubmit} className='flex flex-col bg-stone-400 p-5 w-80 mx-auto'>
                <label htmlFor="first">First Name</label>
                <input type="text" id="first" name="first" className='border border-black mb-3 px-1' maxLength={100} required />

                <label htmlFor="last">Last Name</label>
                <input type="text" id="last" name="last" className='border border-black mb-3 px-1' maxLength={100} required />

                <label htmlFor="emailAddress">Email Address</label>
                <input type="email" name='emailAddress' id='emailAddress' className='border border-black mb-3 px-1' required />

                <label htmlFor="birthDate">Date of Birth</label>
                <input type="date" name="birthDate" id="birthDate" className='border border-black mb-3 px-1' required />

                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" className='border border-black mb-3 px-1' maxLength={100} />

                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" name="phoneNumber" id="phoneNumber" className='border border-black mb-3 px-1' maxLength={100} />

                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" className='border border-black mb-3 px-1' minLength={15} maxLength={100} required />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="text" name="confirmPassword" id="confirmPassword" className='border border-black mb-3 px-1' minLength={15} maxLength={100} required />

                <button type="submit" className='border border-black w-32 mx-auto bg-white'>Submit</button>
            </form> */}

            <FormControl className='flex flex-col bg-white p-5 w-80 mx-auto'>
                <TextField
                    required
                    margin='normal'
                    autoComplete='off'
                    id='first'
                    name='first'
                    label='First name'
                    value={firstName}
                    variant='outlined'
                    helperText=''
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
                    helperText=''
                    inputProps={{ maxLength: 100 }}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <TextField
                    required
                    margin='normal'
                    autoComplete='off'
                    id='emailAddress'
                    name='emailAddress'
                    label='Email address'
                    value={emailAddress}
                    variant='outlined'
                    helperText=''
                    inputProps={{ maxLength: 100 }}
                    onChange={(e) => setEmailAddress(e.target.value)}
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DesktopDatePicker
                        disableFuture
                        className='w-full'
                        minDate={minDate}
                        maxDate={today}
                        name='birthDate'
                        label="Date of birth"
                        value={birthDate}
                        onChange={(newValue) => setBirthDate(newValue)}
                        />
                    </DemoContainer>
                </LocalizationProvider>

                <TextField
                    required
                    margin='normal'
                    autoComplete='off'
                    id='address'
                    name='address'
                    label='Address'
                    value={address}
                    variant='outlined'
                    helperText=''
                    inputProps={{ maxLength: 100 }}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <TextField
                    required
                    margin='normal'
                    autoComplete='off'
                    id='phoneNumber'
                    name='phoneNumber'
                    label='Phone number'
                    value={phoneNumber}
                    variant='outlined'
                    helperText=''
                    inputProps={{ maxLength: 100 }}
                    onChange={(e) => setPhoneNumber(e.target.value)}
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
                    helperText=''
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
                    helperText=''
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

                <Button variant="contained" color="info" className="underline w-32 mx-auto my-4" onClick={handleSubmit}>
                    Submit
                </Button>
            </FormControl>
        </>
    )
}

export default FormComponent
