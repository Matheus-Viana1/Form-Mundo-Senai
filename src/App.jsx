import * as C from '@chakra-ui/react'
import { useState } from 'react'
import Step from './components/Step'
import FormPessoal from './Pages/FormPessoal.jsx'
import FormEndereco from './Pages/FormEndereco.jsx'
import FormProjeto from './Pages/FormProjeto.jsx'

function App() {
  const [step, setStep] = useState(1)
  const Steps = [1, 2, 3]

  

  const getComStep = () => {
    switch (step) {
      case 1:
        return <FormPessoal />
      case 2:
        return <FormEndereco />
      case 3:
        return <FormProjeto />
      default:
        return <FormPessoal />
    }
  }

  return (
    <C.Flex h="100vh" align="center" justify="center">
      <C.Box
        border="2px"
        borderColor="blue.800"
        borderRadius="md"
        p={6}
        w="100%"
        maxW={600}
      >
        <C.Center flexDirection="column">
          <C.HStack spacing={4} mb={4}>
            {Steps.map((item) => (
              <Step key={item} index={item} active={step === item} />
            ))}
          </C.HStack>

          <C.Divider my={4} borderColor="blue.800"></C.Divider>

          <C.Box w="80%">{getComStep()}</C.Box>

          <C.HStack spacing={10} mt={4}>
            <C.Button
              bg="gray.200"
              onClick={() => step !== 1 && setStep(step - 1)}
              disabled={step === 1}
            >
              Voltar
            </C.Button>

            <C.Button
              bg="green"
              onClick={() => step !== 3 && setStep(step + 1)}
            >
              {step === 3 ? "Enviar" : "Próximo"}
            </C.Button>
          </C.HStack>
        </C.Center>
      </C.Box>
    </C.Flex>
  )
}

export default App
