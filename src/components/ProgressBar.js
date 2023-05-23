import React from "react";

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.progressBarRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      animated: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll(); 
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (this.isElementInView(this.progressBarRef.current)) {
      if (!this.state.animated) {
        this.setState({ animated: true });
      }
    } else {
      if (this.state.animated) {
        this.setState({ animated: false });
      }
    }
  }

  isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  render() {
    const { title, level, percent } = this.props;
    const { animated } = this.state;
    return (
      <div>
        <h4 className="progress-bar-label">{title}</h4>
        <div className="progress-bar">
          <div
            className={`progress ${animated ? "animated" : ""}`}
            style={{ width: animated ? percent : 0 }}
            ref={this.progressBarRef}
          >
            {level}
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;