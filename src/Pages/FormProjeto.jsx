import * as C from "@chakra-ui/react"
import { useState } from "react"

const FormProjeto = () => {
    const [selectedOption, setSelectedOption] = useState("")


    const handleRadioChange = (value) => {
        setSelectedOption(value)
    }

    return (
        <C.VStack spacing={5} align="stretch">
            <C.Heading as="h2" size="lg" mb={4} textAlign="center">
                Projetos
            </C.Heading>
            <C.Input type="text" placeholder="Insira seu Projeto" />
            <C.Input type="text" placeholder="Área de Atuação" />

            <C.FormControl>
                <C.FormLabel>Selecione uma opção do projeto</C.FormLabel>
                <C.RadioGroup onChange={handleRadioChange} value={selectedOption}>
                    <C.Stack spacing={4} direction="row" align="start">
                        <C.Radio value="CETCC">
                            <C.Text fontSize="sm">CETCC</C.Text>
                        </C.Radio>
                        <C.Radio value="CETAFEST">
                            <C.Text fontSize="sm">CETAFEST</C.Text>
                        </C.Radio>
                        <C.Radio value="CETICC">
                            <C.Text fontSize="sm">CETICC</C.Text>
                        </C.Radio>
                        <C.Radio value="CETAFAJU">
                            <C.Text fontSize="sm">CETAFAJU</C.Text>
                        </C.Radio>
                    </C.Stack>
                </C.RadioGroup>
            </C.FormControl>

            <C.Input type="text" placeholder="Coordenador/Professor" />
        </C.VStack>
    )
}

export default FormProjeto
