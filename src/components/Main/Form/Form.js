import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { CurrentCompanyConsumer } from '../../../context/CurrentCompanyName.context'



const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
  });
  


  class Form extends React.Component {
    state = {
      companyName: '',
      labelWidth: '1rem',
    };
  
    componentDidMount() {
      this.setState({
      });
    }
  
    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value },() => this.props.changeName(this.state.companyName));
    };
    
    render() {
      const { classes } = this.props;
      
  
      return (
          <form className={classes.root} autoComplete="off">
              <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="company-name-label-placeholder">
              Company Name 
              </InputLabel>
                <Select
                value={this.state.companyName}
                onChange={this.handleChange}
                input={<Input name="companyName" id="company-name-label-placeholder" />}
                name="companyName"
                className={classes.selectEmpty}
                >
                  <MenuItem value={'Emerald Forest'}>Emerald Forest</MenuItem>
                  <MenuItem value={'Aviation'}>Aviation</MenuItem>
                  <MenuItem value={'Greyhound'}>Greyhound</MenuItem>
                </Select>
              <FormHelperText>Please select</FormHelperText>
              </FormControl>
          </form>
      )
    }
}

export default withStyles(styles)(Form);
