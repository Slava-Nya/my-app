import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Office.css';
import logo from '../../resources/logo_man.png';
import sber_logo from '../../resources/sber_logo.png';
import News from '../News';

function Navbar(user, onLogout)
{
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light">
        <img className="navbar-brand" src={sber_logo} style={{width: "43px"}}/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#time-block">Время</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Погода</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Валюта</a>
                    </li>
                </ul>
                </div>
                <form className="form-inline my-2 my-lg-0" onSubmit={onLogout}>
                    <div className="navbar-brand" href="#"><img width="25" src={logo}/></div>
                    <a className="nav-link user_name" href="#"> {user}</a>
                    <input className="btn btn-success my-2 my-sm-0 exit_btn" type="submit" value="Выйти"></input>
                </form>
            
        </nav>
    );
}

function timeBlock()
{
    return (
        <section id="time-block" className="container-fluid">
            <div className="time-block-wrap">
                <div className="row">
                    <div className="col-4">
                    <div className="clock-wrap">
                            <h3>
                                <p>
                                    <span>Current local time in</span>
                                    <br />
                                Moscow city, Russia
                                </p>
                            </h3>
                            <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=medium&timezone=Europe%2FMoscow&show=hour_minute" width="100%" height="115" frameborder="0" seamless></iframe>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="clock-wrap">
                                <h3>
                                    <p>
                                        <span>Current local time in</span>
                                        <br />
                                    London city, United Kingdom
                                    </p>
                                </h3>
                                <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=medium&timezone=Europe%2FLondon&show=hour_minute" width="100%" height="115" frameborder="0" seamless></iframe>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="clock-wrap">
                            <h3>
                                <p>
                                    <span>Current local time in</span>
                                    <br />
                                    New York City, United States
                                </p>
                            </h3>
                            <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=medium&timezone=America%2FNew_York&show=hour_minute" width="100%" height="115" frameborder="0" seamless></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

class Office extends Component {

    render () {
        return (
            <div>
                {Navbar(this.props.user, this.props.onLogout)}
                {timeBlock()}
                <section id="news" className="container-fluid">
                <div className="container">
                    <h1 className="header-text">Новости</h1>
                    <div className="news-wrapper">
                        <News />
                    </div>
                </div>
                    
                </section>
            </div>
        );
    }
}

export default Office