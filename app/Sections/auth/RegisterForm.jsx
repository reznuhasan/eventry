import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const RegisterForm = () => {
    return (
        <form className="login-form">
            <div>
                <label for="name">Full Name</label>
                <Input type="text" name="name" id="name" />
            </div>
            <div>
                <label for="email">Email Address</label>
                <Input type="email" name="email" id="email" />
            </div>
            <div>
                <label for="password">Password</label>
                <Input type="password" name="password" id="password" />
            </div>
            <div>
                <label for="phone">Phone Number</label>
                <Input type="tel" name="phone" id="phone" />
            </div>
            <div>
                <label for="bio">Bio</label>
                <Input className="min-h-16" type="text" name="bio" id="bio" />
            </div>

            <Button
                type="submit"
                className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
            >
                Register
            </Button>
        </form>
    )
}

export default RegisterForm
