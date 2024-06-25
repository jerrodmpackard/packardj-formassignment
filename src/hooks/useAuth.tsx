'use client'
import React, { useState } from 'react'

const useAuth = () => {

    const [data, setData] = useState<{}>({});
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [emailAddress, setEmailAddress] = useState<string>("");
    const [birthDate, setBirthDate] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [firstNameError, setFirstNameError] = useState<string>("");
    const [lastNameError, setLastNameError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [birthDateError, setBirthDateError] = useState<string>("");
    const [addressError, setAddressError] = useState<string>("");
    const [phoneError, setPhoneError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

    const [success, setSuccess] = useState<boolean>(false);

    const validateInputs = () => {
        let valid = true;

        if (firstName === '') {
            setFirstNameError('First name is required');
            valid = false;
        } else {
            setFirstNameError('');
        }

        if (lastName === '') {
            setLastNameError('Last name is required');
            valid = false;
        } else {
            setLastNameError('');
        }

        if (emailAddress === '') {
            setEmailError('Email address is required');
            valid = false;
        } else if (!/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(emailAddress)) {
            setEmailError('Invalid email address format');
            valid = false;
        } else {
            setEmailError('');
        }

        const today = new Date().toISOString().split('T')[0];
        const hundredYearsAgo = new Date();
        hundredYearsAgo.setFullYear(hundredYearsAgo.getFullYear() - 100);

        if (birthDate === '') {
            setBirthDateError('Date of birth is required');
            valid = false;
        } else if (birthDate > today) {
            setBirthDateError('Birth date cannot be a future date');
            valid = false;
        } else if (birthDate < hundredYearsAgo.toISOString().split('T')[0]) {
            setBirthDateError('Birth date cannot be more than 100 years in the past');
            valid = false;
        } else {
            setBirthDateError('');
        }

        if (/^\(\d{3}\)-\d{3}-\d{4}$/.test(phoneNumber)) {
            setPhoneError('Invalid phone format');
            valid = false;
        } else {
            setPhoneError('');
        }

        if (password === '') {
            setPasswordError('Password is required');
            valid = false;
        } else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{15,}$/.test(password)) {
            setPasswordError('Password must be at least 15 characters long and include at least one uppercase letter, one number, and one special character');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (confirmPassword === '') {
            setConfirmPasswordError('Confirm password is required')
            valid = false;
        } else if (confirmPassword !== password) {
            setConfirmPasswordError('Passwords do not match')
            valid = false;
        } else {
            setConfirmPasswordError('')
        }

        return valid;
    }

    // Handles the submit event on form submit.
    const handleSubmit = async (event: React.FormEvent) => {

        if (!validateInputs()) return;

        // Stop the form from submitting and refreshing the page.
        event.preventDefault();

        // Get data from the form.
        const data = {
            first: firstName,
            last: lastName,
            email: emailAddress,
            dateOfBirth: birthDate,
            address: address,
            phoneNumber: phoneNumber,
            password: password,
            confirmPassword: confirmPassword
        }

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data);

        setData(JSONdata);

        // API endpoint where we send form data.
        const endpoint = '/api/form';

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
        const response = await fetch(endpoint, options);

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json();
        // alert(`Your submission was successful: ${result.data}`);

        setSuccess(true);

        resetFields();
    }

    const resetFields = () => {
        setFirstName('');
        setLastName('');
        setEmailAddress('');
        setBirthDate('');
        setAddress('');
        setPhoneNumber('');
        setPassword('');
        setConfirmPassword('');
        setFirstNameError('');
        setLastNameError('');
        setEmailError('');
        setBirthDateError('');
        setAddressError('');
        setPhoneError('');
        setPasswordError('');
        setConfirmPasswordError('');
    }

    return {
        data,
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
    }
}

export default useAuth
