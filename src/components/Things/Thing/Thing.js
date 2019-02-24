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

const Thing = props => {
  const setCurrentThing = () => {
    props.changeCurrentThingHandler(props.id, props.name);
  };

  return (
    <div>
      <Card
        className={
          props.currentThingId === props.id
            ? `${props.classes.card} ${props.classes.selected}`
            : props.classes.card
        }
      >
        <CardActionArea>
          <CardMedia
            image={require(`../../../assets/images/${props.img.toLowerCase()}.jpg`)}
            className={props.classes.media}
            title="thing"
          />
          <CardContent>
            <Typography component="p">{props.icon}</Typography>
            <Typography color="primary" gutterBottom variant="button">
              {props.name}
            </Typography>
            <Typography component="p">Owner: {props.company}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={setCurrentThing}
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

export default withStyles(styles)(Thing);
