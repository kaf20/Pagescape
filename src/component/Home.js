import React from 'react'
import PropTypes from 'prop-types'
import 'react-table/react-table.css'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core'
import lifecycle from 'react-pure-lifecycle'
import {compose} from 'recompose'
import CurrencyFormat from 'react-currency-format'

const styles = theme => ({
    content: {
        flexGrow: 1,
        paddingTop: theme.spacing.unit * 10,
        height: '100vh',
        overflow: 'auto',
    },
    card: {
        // maxWidth: 445,
    },
    media: {
        height: 140,
    },
    action: {
        textAlign: 'right'
    },
})

const methods = {
    componentDidMount(props) {
        const {classes, dispatch, state} = props
        dispatch('SGA_RETRIEVE_PRODUCT')
        if ("geolocation" in navigator)
            navigator.geolocation.getCurrentPosition(function(position) {
                dispatch('RDX_RETRIEVE_CURRENT_POSITION', {position: position})
            })
    }
}

const Home = (props) => {
    const {classes, dispatch, state} = props
    const {products} = state.retrieveProductReducer

    return (
        <main className={classes.content}>
            <Grid container>
                <Grid item lg={3}>{' '}</Grid>
                <Grid item lg={6} sm={12}>
                    <Grid container spacing={24}>
                    {products.map(p =>
                        <Grid key={p.id} item xs={6}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <Tooltip title="未有圖😲" placement="top">
                                        <CardMedia
                                            className={classes.media}
                                            image={p.imageUrl || 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'}
                                        />
                                    </Tooltip>
                                    <CardContent>
                                        <Typography gutterBottom variant='h5' component='h2'>
                                            {p.name + ' '}
                                            <CurrencyFormat value={p.price} displayType={'text'} thousandSeparator={true} decimalScale={2} prefix={'$'}/>
                                            {' ' + p.place}
                                        </Typography>
                                        <Typography component='p'>
                                            {p.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className={classes.action}>
                                    <Button size='small' color='primary'>
                                        Share
                                    </Button>
                                    <Button size='small' color='primary'>
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )}
                    </Grid>
                </Grid>
                <Grid item lg={3}>{' '}</Grid>
            </Grid>
        </main>
    )
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired
}

export default compose(
    withStyles(styles, {withTheme: true}),
    lifecycle(methods),
)(Home)