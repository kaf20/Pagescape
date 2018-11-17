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
import InfiniteScroll from 'react-infinite-scroller'
import classNames from 'classnames'

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
    containerClass: {
        paddingBottom: 20
    },
    loadMoreButton: {
        marginBottom: 15
    },
})

const methods = {
    componentDidMount(props) {
        const {classes, dispatch, state} = props
        const {products, hasMore, page, size} = state.retrieveProductReducer
        dispatch('SGA_RETRIEVE_PRODUCT', {
            page: page,
            size: size,
        })
        if ("geolocation" in navigator)
            navigator.geolocation.getCurrentPosition(function(position) {
                dispatch('RDX_RETRIEVE_CURRENT_POSITION', {position: position})
            })
    }
}

const Home = (props) => {
    const {classes, dispatch, state} = props
    const {products, hasMore, page, size} = state.retrieveProductReducer
    const handleLoadMore = page => {}
    const handleClickLoad = event => {
        dispatch('SGA_RETRIEVE_PRODUCT', {
            page: page,
            size: size,
        })
    }

    return (
        <main className={classes.content}>
            <Grid container>
                <Grid item lg={3}>{' '}</Grid>
                <Grid item lg={6} sm={12}>
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={handleLoadMore}
                        hasMore={hasMore}
                        loader={
                            <Button key="loaderButton-001" color="primary" className={classNames(classes.button, classes.loadMoreButton)} onClick={handleClickLoad}>
                                😬磨牙🤪
                            </Button>
                        }
                        useWindow={false}
                    >
                        <Grid container spacing={24} className={classes.containerClass}>
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
                    </InfiniteScroll>
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