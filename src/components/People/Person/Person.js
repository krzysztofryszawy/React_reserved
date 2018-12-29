import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    maxWidth: 135,
    margin: '.5em',
    opacity: 0.3,
    '&:hover': {
      opacity: 1
    }
  },
  media: {
    height: 100
  },
  selected: {
    opacity: 1,
    border: `2px dashed ${theme.palette.primary.main}`
  }
});

const Person = props => {
  //passing data by method provided by ContextAPI
  const setCurrentPerson = () => {
    props.changeCurrentPersonHandler(props.id, props.name);
  };

  return (
    <div>
      <Card
        className={
          props.currentPersonId == props.id
            ? `${props.classes.card} ${props.classes.selected}`
            : props.classes.card
        }
      >
        <CardActionArea>
          <CardMedia
            image={require(`../../../assets/images/${props.img.toLowerCase()}.jpg`)}
            className={props.classes.media}
            title="person"
          />
          <CardContent>
            <Typography component="p">{props.icon}</Typography>
            <Typography color="primary" gutterBottom variant="button">
              {props.name}
            </Typography>
            <Typography component="p">Company: {props.company}</Typography>
            <Typography component="p">
              {/* {props.priority}priorytet? */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={setCurrentPerson}
            size="small"
            color="secondary"
            variant="contained"
          >
            SELECT
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(styles)(Person);
