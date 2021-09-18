import './style.css'


function SideBar(){
    return (
        <div className="sidebar">
            <div className="title">
                Study Dashboard
            </div>
            <div className="item">
                <a href="/">Django</a>
            </div>
            <div className="item">
                <a href="/">React</a>
            </div>
            <div className="item">
                <a href="/">Flutter</a>
            </div>
            <div className="item">
                <a href="/">Algorithms</a>
            </div>
        </div>
    );
}

export default SideBar;