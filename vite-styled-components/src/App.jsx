import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import { Container } from './components/styles/Container.styled'

const theme = {
  colors: {
    header: '#ebabff',
    body: '#fff',
    footer: '#003333',
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <h1>Testing vite and styled-components</h1>
      </Container>
    </ThemeProvider>
  )
}

export default App
