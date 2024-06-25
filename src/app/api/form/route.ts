// app/api/form/route.js

// This route is is like the controller. It is what submits the data to the back end server and receives a response from the service. It then returns that response.

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const formData = await request.json();

    // console.log('Body: ', formData);

    // Process the form data here
    return NextResponse.json({ message: 'Form data received', data: `\nFirst name: ${formData.first}\nLast name: ${formData.last}\nEmail: ${formData.email}\nBirthdate: ${formData.dateOfBirth}\nAddress: ${formData.address}\nPhone number: ${formData.phoneNumber}` });
}
