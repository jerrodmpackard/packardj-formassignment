'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const CreateAccountComponent = () => {

    const router = useRouter();

    const handlePageChange = () => {
        router.push('/Pages/Form');
    }

    return (
        <div className='flex flex-col'>

            <button onClick={() => handlePageChange()}>Move to new page</button>

        </div>
    )
}

export default CreateAccountComponent
