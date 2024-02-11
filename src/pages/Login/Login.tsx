import React, { useState } from 'react'
import { ChakraProvider, Input } from '@chakra-ui/react'
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div>
            <ChakraProvider>
                <p>
                    Username :
                </p>
                <Input value={username} onChange={(e) => {
                    setUsername(e.target.value)
                }}/>

            </ChakraProvider>

        </div>
    )
}

export default Login