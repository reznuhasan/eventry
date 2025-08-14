import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const LoginForm = () => {
    return (
        <form className="login-form">
            <div className='pt-2'>
                <label htmlFor="email" className='pb-2'>Email Address</label>
                <Input type="email" name="email" id="email" />
            </div>
            <div className='pt-2'>
                <label htmlFor="password" className='pb-2'>Password</label>
                <Input type="password" name="password" id="password"/>
            </div>

            <Button
                type="submit"
                className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
            >
                Login
            </Button>
        </form>
    )
}

export default LoginForm
