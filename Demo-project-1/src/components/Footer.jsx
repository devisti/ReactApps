import React from 'react'
import './footer.css'

function Footer() {
    return (
        <footer className="footer" id='about'>

            <p>© 2025 DevIsti. All rights reserved.</p>
            <nav>
                <a href="#home">Home</a> |
                <a href="#about">About</a> |
                <a href="#contact">Contact</a>
            </nav>
            <p>Email: contact@devisti.com | Phone: +91 9876543210</p>
            <div>
                <a href="#">Privacy Policy</a> |
                <a href="#">Terms of Service</a>
            </div>
            <a href="#top">⬆ Back to Top</a>

        </footer>
    )
}

export default Footer
