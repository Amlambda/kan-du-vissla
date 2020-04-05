import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isElder: false,
      isHelper: false,
      isElderHelper: false,
      isChildHelper: false,
      isSubmitted: false,
    };
  }

  handleShowElder = () => {
    this.setState({
      isElder: true,
    });
  };

  handleHideElder = () => {
    this.setState({
      isElder: false,
    });
  };

  handleShowHelper = () => {
    this.setState({
      isHelper: true,
    });
  };

  handleHideHelper = () => {
    this.setState({
      isHelper: false,
    });
  };

  handleShowElderHelper = () => {
    this.setState({
      isElderHelper: true,
    });
  };

  handleHideElderHelper = () => {
    this.setState({
      isElderHelper: false,
    });
  };

  handleShowChildHelper = () => {
    this.setState({
      isChildHelper: true,
    });
  };

  handleHideChildHelper = () => {
    this.setState({
      isChildHelper: false,
    });
  };

  handleIsSubmitted = () => {
    this.setState({
      isSubmitted: true,
    });
  };
  render() {
    return (
      <div className="content">
        <div className="wrapper">
          <h1>Kan du vissla?</h1>
          {!this.state.isElder &&
            !this.state.isHelper &&
            !this.state.isSubmitted && (
              <div className="landing">
                <div className="intro-text">
                  <h2>Barn behöver din hjälp!</h2>
                  <p className="description">
                    I och med COVID-19 tappar barn kontakt med trygga vuxna
                    utanför familjen, vilket kan leda till psykisk ohälsa.
                  </p>
                  <p className="description">
                    I projektet "Kan du vissla?" kan du som pensionär eller
                    lärare hjälpa barn som tappar kontakt med viktiga vuxna i
                    sina liv när skolor, idrott och andra aktiviteter blir
                    nedstängda genom att bli brevvän med ett barn.
                  </p>
                </div>
                <div
                  onClick={this.handleShowElder}
                  className="button"
                  tabIndex="0"
                  role="button"
                >
                  Jag är pensionär.
                </div>
                <div
                  onClick={this.handleShowHelper}
                  className="button"
                  tabIndex="1"
                  role="button"
                >
                  Jag är förmedlare.
                </div>
              </div>
            )}
          {this.state.isElder && !this.state.isSubmitted && (
            <div className="signup-elder">
              <form>
                <p className="label">Mitt namn är</p>
                <div className="input-row">
                  <input type="text" placeholder="Förnamn Efternamn"></input>
                </div>
                <p className="label">Tre grejer jag gillar</p>
                <div className="input-row">
                  <input className="one-col" type="text"></input>
                  <input className="one-col" type="text"></input>
                  <input className="one-col" type="text"></input>
                </div>
                <p className="label">Min adress är</p>
                <div className="input-row">
                  <input
                    className="two-col"
                    type="text"
                    placeholder="Gatunamn"
                  ></input>
                  <input
                    className="one-col"
                    type="text"
                    placeholder="Nummer"
                  ></input>
                </div>
                <div className="input-row">
                  <input
                    className="one-col"
                    type="text"
                    placeholder="Postnummer"
                  ></input>
                  <input
                    className="two-col"
                    type="text"
                    placeholder="Stad"
                  ></input>
                </div>
                <p className="label">Min epost-adress är </p>
                <div className="input-row">
                  <input type="email" placeholder="E-post"></input>
                </div>
                <div
                  onClick={this.handleIsSubmitted}
                  className="button submit"
                  tabIndex="1"
                  role="button"
                >
                  Jag ställer upp!
                </div>
              </form>
            </div>
          )}
          {this.state.isHelper &&
            !this.state.isElderHelper &&
            !this.state.isChildHelper &&
            !this.state.isSubmitted && (
              <div className="landing">
                <div className="helper-wrapper">
                  <div className="intro-text">
                    <p className="description">
                      Som hemtjänst, personal på äldreboende, fikaordnare,
                      granne, familjemedlem, klickar du här:
                    </p>
                  </div>
                  <div
                    onClick={this.handleShowElderHelper}
                    className="button"
                    tabIndex="1"
                    role="button"
                  >
                    Jag hjälper pensionärer.
                  </div>
                </div>
                <div className="helper-wrapper">
                  <div className="intro-text">
                    <p className="description">
                      Som lärare, fritidspedagog, granne,tränare, förälder
                      klickar du här:
                    </p>
                  </div>
                  <div
                    onClick={this.handleShowChildHelper}
                    className="button"
                    tabIndex="0"
                    role="button"
                  >
                    Jag hjälper barn.
                  </div>
                </div>
              </div>
            )}
          {(this.state.isElderHelper || this.state.isChildHelper) &&
            !this.state.isSubmitted && (
              <div className="signup-elder">
                <form>
                  <p className="label">Mitt namn är</p>
                  <div className="input-row">
                    <input type="text" placeholder="Förnamn Efternamn"></input>
                  </div>
                  <p className="label">Så många brev kan vi skriva</p>
                  <div className="input-row">
                    <input className="one-col" type="text"></input>
                  </div>
                  <p className="label">Min adress är</p>
                  <div className="input-row">
                    <input
                      className="two-col"
                      type="text"
                      placeholder="Gatunamn"
                    ></input>
                    <input
                      className="one-col"
                      type="text"
                      placeholder="Nummer"
                    ></input>
                  </div>
                  <div className="input-row">
                    <input
                      className="one-col"
                      type="text"
                      placeholder="Postnummer"
                    ></input>
                    <input
                      className="two-col"
                      type="text"
                      placeholder="Stad"
                    ></input>
                  </div>
                  <p className="label">Min epost-adress är</p>
                  <div className="input-row">
                    <input type="email" placeholder="E-post"></input>
                  </div>
                  <div
                    onClick={this.handleIsSubmitted}
                    className="button submit"
                    tabIndex="1"
                    role="button"
                  >
                    Jag ställer upp!
                  </div>
                </form>
              </div>
            )}
          {this.state.isSubmitted && (
            <div className="submitted">
              <p className="description">
                Snart får du ett brev eller blir kontaktad av oss.
              </p>
              <p className="description">Tack för att du ställer upp!</p>

              <div className="heart"></div>
              <h2>Du är värdefull!</h2>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Message;
