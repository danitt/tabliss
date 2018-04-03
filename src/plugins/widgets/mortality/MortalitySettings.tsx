import * as React from 'react';
import { Settings } from '../../interfaces';

interface Props {
  expiry: string;
  onChange: (settings: Settings) => void;
}

class MortalitySettings extends React.PureComponent<Props> {
  static defaultProps = {
    expiry: '30/04/2080'
  };

  render() {
    return (
      <div className="MortalitySettings">
        <label>
          Your expiry date
          <input
            type="text"
            value={this.props.expiry}
            onChange={event => this.props.onChange({ name: event.target.value })}
          />
        </label>
      </div>
    );
  }
}

export default MortalitySettings;
