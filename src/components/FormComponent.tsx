'use client'
import React from 'react'

const FormComponent = () => {
    // Handles the submit event on form submit.
    const handleSubmit = async (event: any) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            first: event.target.first.value,
            last: event.target.last.value,
            email: event.target.emailAddress.value,
            dateOfBirth: event.target.birthDate.value,
            address: event.target.address.value,
            phoneNumber: event.target.phoneNumber.value,
            password: event.target.password.value,
            confirmPassword: event.target.confirmPassword.value
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
    return (
        // We pass the event to the handleSubmit() function on submit.
        <>
            <h1 className='text-4xl text-center mb-3'>Create an account</h1>

            <form onSubmit={handleSubmit} className='flex flex-col bg-stone-400 p-5 w-80 mx-auto'>
                <label htmlFor="first">First Name</label>
                <input type="text" id="first" name="first" className='border border-black mb-3' maxLength={100} required />

                <label htmlFor="last">Last Name</label>
                <input type="text" id="last" name="last" className='border border-black mb-3' maxLength={100} required />

                <label htmlFor="emailAddress">Email Address</label>
                <input type="email" name='emailAddress' id='emailAddress' className='border border-black mb-3' required />

                <label htmlFor="birthDate">Date of Birth</label>
                <input type="date" name="birthDate" id="birthDate" className='border border-black mb-3' required />

                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" className='border border-black mb-3' maxLength={100} />

                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" name="phoneNumber" id="phoneNumber" className='border border-black mb-3' maxLength={100} />

                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" className='border border-black mb-3' minLength={15} maxLength={100} required />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="text" name="confirmPassword" id="confirmPassword" className='border border-black mb-3' minLength={15} maxLength={100} required />

                <button type="submit" className='border border-black w-32 mx-auto bg-white'>Submit</button>
            </form>
        </>
    )
}

export default FormComponent
