function Header() {
    return (
        <header>
            <nav>
                <img src="https://miro.medium.com/fit/c/184/184/1*K0a7xINk0RM5gfXGSN68cw.png" width="40px" />
                <ul>
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
        <footer>
            <small>© 2023 Colios development. All right reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

ReactDOM.render(
<div>
    <Header />
    <MainContent />
    <Footer />
</div>
, document.getElementById("root"))