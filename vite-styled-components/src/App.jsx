import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import { Container } from './components/styles/Container.styled'
import GlobalStyle from './components/styles/Global'

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
      <GlobalStyle />
      <Header />
      <Container>
        <h1>Testing vite and styled-components</h1>
      </Container>
    </ThemeProvider>
  )
}

export default App
