import React from 'react';

const Footer = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-2">
                    <img src="/images/logo_dotnet.png" alt="dotnet" width="300" height="300" className="img-thumbnail animate__animated animate__backInRight animate__slower" />
                </div>
                <div className="col-md-2">
                    <img src="/images/logo_react.png" alt="react" width="300" height="300" className="img-thumbnail animate__animated animate__backInRight animate__slower animate__delay-1s" />
                </div>
                <div className="col-md-2">
                    <img src="/images/logo_sql_server.png" alt="mssql" width="300" height="300" className="img-thumbnail animate__animated animate__backInRight animate__slower animate__delay-2s" />
                </div>
                <div className="col-md-2">
                    <img src="/images/logo_mongodb.png" alt="mongodb" width="300" height="300" className="img-thumbnail animate__animated animate__backInRight animate__slower animate__delay-3s" />
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
}

export default Footer;