import Menu from './Menu';

function Topbar() {
    return ( 
        <div className="topbar-container">
            <div className="indices-container">
                <div className="nifty">
                    <p className="index">NIFTY</p>
                    <p className="index-points">{100.2}</p>
                    <div className="percent"> </div>
                </div>
                <div className="sensex">
                    <p className="index">SENSEX</p>
                    <p className="index-points">{100.2}</p>
                    <div className="percent"> </div>
                </div>
            </div>

            <Menu />
        </div>
     );
}

export default Topbar;