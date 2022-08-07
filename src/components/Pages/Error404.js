import {Link} from "react-router-dom";


export default function Error404(){
    return(
        <header className="masthead">
            <div className="container">
                <div className="masthead-subheading">Error 404</div>
                <div className="masthead-heading text-uppercase">Page not found</div>
                <Link className="btn btn-primary btn-xl text-uppercase" to="/services">Tell Me More</Link>
            </div>
        </header>
    )
}