import React, { Component } from "react";
import ParticleEffectButton from "react-particle-effect-button";
export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      s: 5,
      m: 30,
      h: 20,
      end: false,
    };
  }
  componentDidMount() {
    let intravel = setInterval(() => {
      let { s, m, h } = this.state;
      if (s === 0) {
        if (m === 0) {
          if (h === 0) {
            this.setState({
              end: true,
            });
            clearInterval(intravel);
            console.log("end");
          } else {
            this.setState({
              s: 59,
              m: 59,
              h: h - 1,
            });
          }
        } else {
          this.setState({
            s: 59,
            m: m - 1,
          });
        }
      } else {
        this.setState({
          s: s - 1,
        });
      }
    }, 1000);
  }
  force2digit(a) {
    let r = a;
    if (a < 10) {
      r = "0" + a;
    }
    return r;
  }
  render() {
    let s = this.state;
    return (
      <div>
        <ParticleEffectButton color="#121019" hidden={this.state.end}>
          {" "}
          <span className="timer">
            {this.force2digit(s.h)}:{this.force2digit(s.m)}:
            {this.force2digit(s.s)}
          </span>
          <br />
          <progress id="file" value={s.h} max="100" style={{ color: "red" }}>
            {" "}
            {s.h}{" "}
          </progress>
        </ParticleEffectButton>
      </div>
    );
  }
}
