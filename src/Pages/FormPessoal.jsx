import * as C from "@chakra-ui/react"
import { useState } from "react"

const FormPessoal = () => {
    const [gender, setGender] = useState("")

    return (
        <C.VStack spacing={5} align="stretch">
            <C.Heading as="h3" size="lg" mb={4}>
                Informações Pessoais
            </C.Heading>
            <C.Input type="email" placeholder="Insira seu e-mail"/>
            <C.Input type="text" placeholder="Insira seu nome"/>
            <C.Input type="text" placeholder="Insira seu CPF"/>
            <C.Input type="text" placeholder="Insira seu telefone"/>

            <C.FormControl>
                <C.FormLabel>Gênero</C.FormLabel>
                <C.RadioGroup value={gender} onChange={setGender}>
                    <C.HStack spacing={5}>
                        <C.Radio value="masculino">Masculino</C.Radio>
                        <C.Radio value="feminino">Feminino</C.Radio>
                    </C.HStack>
                </C.RadioGroup>
            </C.FormControl>
        </C.VStack>
    )
}

export default FormPessoal
