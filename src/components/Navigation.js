function Navigation() {
    return ( 
        <div>
            <nav>
                <ul>
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="sign-in">
                    <button className="sign-in-btn">Sign in</button>
                    
                </div>
            </nav>
        </div>
     );
}

export default Navigation;