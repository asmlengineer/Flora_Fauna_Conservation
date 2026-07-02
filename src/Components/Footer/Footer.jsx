import './Footer.css';

function Footer({setactive}){
    return(
        <>
            <footer class="footer">
                <div class="footer-container">

                    <div class="footer-box">
                        <h2>🌿 Flora & Fauna</h2>
                        <p>
                            Dedicated to protecting forests, wildlife, biodiversity,
                        and natural ecosystems. Together we can preserve nature
                        for future generations and create a greener planet.
                    </p>
                </div>

                <div class="footer-box">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#home" onClick={() =>{setactive('home')}}>Home</a></li>
                <li><a href="#flora" onClick={() =>{setactive('Flora')}}>Flora</a></li>
                <li><a href="#fauna" onClick={() =>{setactive('Fauna')}}>Fauna</a></li>
                <li><a href="#conservation" onClick={() =>{setactive('Conservation')}}>Conservation</a></li>
                <li><a href="#extinct" onClick={() =>{setactive('Extinct')}}>Extinct Species</a></li>
                <li><a href="#about" onClick={() =>{setactive('About')}}>About</a></li>    
                <li><a href="#contact" onClick={() =>{setactive('Contact')}}>Contact</a></li>
            </ul>
        </div>
        <div class="footer-box newsletter">
            <h3>Newsletter</h3>
            <p>
                Subscribe to receive updates about wildlife conservation,
                tree plantation drives, environmental awareness programs,
                and biodiversity news.
            </p>

            <input type="email" placeholder="Enter your email"/>
            <button>Subscribe</button>
        </div>
    </div>
    <div class="footer-bottom">
        © 2026 <strong>Flora & Fauna</strong> | Protect Nature • Preserve Wildlife • Save Earth 🌍
        <br/><br/>
        Designed with 💚 for a Sustainable Future.
        </div>
       </footer> 
        </>
    );
}
export default Footer;