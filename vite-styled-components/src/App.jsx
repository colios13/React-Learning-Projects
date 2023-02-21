import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import { Container } from './components/styles/Container.styled'
import GlobalStyle from './components/styles/Global'
import content from './content.js'

const theme = {
  colors: {
    header: '#ebabff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App
