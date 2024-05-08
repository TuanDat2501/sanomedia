import './style.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="logo cursor-pointer">
                    <img src="https://i.ibb.co/w4nyGx5/logo.png" alt="logo"/>
                </div>
                <div className="nav">
                    <div className="link cursor-pointer">
                        <a href="">tuyển dụng</a>
                    </div>
                    <div className="link cursor-pointer">
                        <a href="">giới thiệu</a>
                    </div>
                    <div className="link cursor-pointer">
                        <a href="">sano life</a>
                    </div>
                </div>
                <div className="button">
                    <button>Tuyển dụng</button>
                </div>
            </div>
        </header>
    );
};

export default Header;