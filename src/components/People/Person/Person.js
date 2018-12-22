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

const Person = (props) => {

    return (
        <div>
            <Card className={props.classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={props.classes.media}
                    title="item to burn"
                    />
                    <CardContent>
                        <Typography component="p">
                            {props.icon}
                        </Typography>
                        <Typography color='primary' gutterBottom variant="h5" component="h2">
                            {props.name}
                        </Typography>
                        <Typography component="p">
                            {props.company}
                        </Typography>
                        <Typography component="p">
                            {/* {props.priority}priorytet? */}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={ () => props.click(props.name)} size="small" color="primary" variant="contained">
                        more info...
                    </Button>
                </CardActions>
            </Card>        
        </div>
    )
}

export default withStyles(styles)(Person)