import {Link} from "react-router-dom";


export default function Header(){
    return(
        <header className="masthead">
            <div className="container">
                <div className="masthead-subheading">Welcome To Our Studio!</div>
                <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <Link className="btn btn-primary btn-xl text-uppercase" to="/services">Tell Me More</Link>
            </div>
        </header>
    )
}