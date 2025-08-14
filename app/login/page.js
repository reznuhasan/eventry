import Link from "next/link"
import LoginForm from "../Sections/auth/LoginForm"

const LoginPage = () => {
    return (
        <>
            <section className="h-screen grid place-items-center">
                <div
                    className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md"
                >
                    <h4 className="font-bold text-2xl">Sign in</h4>
                    <LoginForm />

                    <span className="text-center text-sm pt-4 text-gray-300">
                        Don't have an account?
                        <Link href="/register" className="underline hover:text-indigo-600">Register</Link>
                    </span>
                </div>
            </section>
        </>

    )
}

export default LoginPage
