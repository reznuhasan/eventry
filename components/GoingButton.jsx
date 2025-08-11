'use client'

import { useRouter } from "next/navigation"

const GoingButton = () => {
    const router = useRouter()
    const handleGoing = () => {
        router.push("/payment")
    }
    return (
        <>
            <button onClick={handleGoing} className="w-full">Going</button>
        </>
    )
}

export default GoingButton
