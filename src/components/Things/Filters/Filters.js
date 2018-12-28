import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing.unit * 3
  }
});

class Filters extends React.Component {
  componentDidMount() {
    this.settingState();
  }

  state = {
    car: false,
    place: false,
    equipment: false
  };

  //initial setState from data provided with Context API (restoring data when component mounted again)
  settingState = () => {
    this.props.thingType.some(el => el == 'car') == 1 &&
      this.setState({ car: true });
    this.props.thingType.some(el => el == 'place') == 1 &&
      this.setState({ place: true });
    this.props.thingType.some(el => el == 'equipment') == 1 &&
      this.setState({ equipment: true });
  };

  // sending array with user selection
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked }, () =>
      this.props.changeThingTypeHandler([
        this.state.car && 'car',
        this.state.place && 'place',
        this.state.equipment && 'equipment'
      ])
    );
  };

  render() {
    const { classes } = this.props;
    const { car, place, equipment } = this.state;
    const error = [car, place, equipment].filter(v => v).length !== 2;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">What do you want to book?</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={car}
                  onChange={this.handleChange('car')}
                  value="car"
                />
              }
              label="Cars"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={place}
                  onChange={this.handleChange('place')}
                  value="place"
                />
              }
              label="Places"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={equipment}
                  onChange={this.handleChange('equipment')}
                  value="equipment"
                />
              }
              label="Equipment"
            />
          </FormGroup>
          <FormHelperText>Filter with multiple choice</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(Filters);
