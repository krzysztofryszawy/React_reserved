import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
    card: {
        maxWidth: 145,
        margin: '.5em'
    },
    media: {
        height: 100,
    },
};

const handleClick = (e) => {
    console.log(e.target)
}

const Thing = (props) => {

    return (
        <div>
            <Card className={props.classes.card}>
                <CardActionArea>
                    <CardMedia
                    image={require(`../../../assets/images/${props.img.toLowerCase()}.jpg`)}
                    className={props.classes.media}
                    title="item to burn"
                    />
                    <CardContent>
                        <Typography component="p">
                            {props.icon}
                        </Typography>
                        <Typography color='primary' gutterBottom variant="button">
                            {props.name}
                        </Typography>
                        <Typography component="p">
                            Owner: {props.company}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={ handleClick} size="small" color="primary" variant="contained">
                        more info...
                    </Button>
                </CardActions>
            </Card>        
        </div>
    )
}

export default withStyles(styles)(Thing)