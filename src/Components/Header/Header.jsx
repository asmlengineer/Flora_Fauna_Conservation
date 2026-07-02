function Header({setactive}){
    return(
        <>
            <header>
            <div class="logo">
            🌿 Flora & Fauna
            </div>
            <nav>
            <ul>
                <li><a href="#home" onClick={() =>{setactive('home')}}>Home</a></li>
                <li><a href="#flora" onClick={() =>{setactive('Flora')}}>Flora</a></li>
                <li><a href="#fauna" onClick={() =>{setactive('Fauna')}}>Fauna</a></li>
                <li><a href="#conservation" onClick={() =>{setactive('Conservation')}}>Conservation</a></li>
                <li><a href="#extinct" onClick={() =>{setactive('Extinct')}}>Extinct Species</a></li>
                <li><a href="#about" onClick={() =>{setactive('About')}}>About</a></li>    
                <li><a href="#contact" onClick={() =>{setactive('Contact')}}>Contact</a></li>
            </ul>
            </nav>

            </header>
        </>
    );
}
export default Header;