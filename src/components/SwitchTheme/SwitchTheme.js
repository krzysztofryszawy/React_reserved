import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class SwitchTheme extends React.Component {
  state = {
    checked: true
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    this.state.checked
      ? this.props.themechangeHandler('light')
      : this.props.themechangeHandler('dark');
  };

  render() {
    return (
      <FormControlLabel
        control={
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange('checked')}
            value="checked"
          />
        }
      />
    );
  }
}

export default SwitchTheme;
