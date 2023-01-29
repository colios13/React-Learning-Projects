function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="nav-logo" src="https://miro.medium.com/fit/c/184/184/1*K0a7xINk0RM5gfXGSN68cw.png"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <small className="footer-copyright">© 2023 Colios development. All right reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div className="main-content">
            <h1>Fun facts about React</h1>
            <ul className="facts-list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

function App(){
    return (
    <div>
        <Header />
        <MainContent />
        <Footer />
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))