Jerrod Packard
June 25, 2024
Form Practice
Created a form based upon client requirements with validation on each input field.

You must:
    - Upload to your github account and keep your repository private.
    - Add us as collaborators to your repository
        carolinehanaa
        Brand0nLe
    - Upload to vercel and post the vercel link in this thread by 5PM.
    - Must be Mobile, Tablet, and Laptop Responsive.
    - UI/UX is up to your discretion again.

Form Requirements:
    - First Name - REQUIRED
    - Last Name - REQUIRED
    - Email - REQUIRED
    - Date of Birth - REQUIRED
    - Address
    - Phone number
    - Password - REQUIRED
    - Confirm Password - REQUIRED
    - Submit Button - When you press submit there should be a "Success" message. You can use a toast for example to show the form was submitted successfully and also if the form is unable to be submitted.
    - After a successful submission, have the form reset and all input fields should be empty.

Each input will need validation:
    - First & Last Name - max char 100
    - Email - if user does not type in a valid email with the '@'
    - Date of Birth - should not allow future dates other than the day of, and you must use a date picker. Validation should still work if user manually changes the input without the date picker.
    - Address - limit to 100 chars
    - Phone number - validate the format to match: (123)-456-7890
    - Password - 15 characters minimum, 1 Uppercase, 1 Number, 1 Special Char only from the following: (? ! @ # $ % ^ & *) no other special chars should work
    - Confirm Password - must match the first input field.