import * as React from 'react';
import { getConvertedDate } from '../../../utils';
import './Mortality.sass';

interface Props {
  expiry: string;
}

interface State {
  time: Date;
}

class Mortality extends React.PureComponent<Props, State> {
  static defaultProps = {
    expiry: '30/04/2080'
  };
  state: State = { time: getConvertedDate() };
  private interval: number;

  componentWillMount() {
    this.interval = window.setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <div className="Mortality">
        Potato!
      </div>
    );
  }

  private tick = () => {
    this.setState({ time: getConvertedDate() });
  }
}

export default Mortality;
