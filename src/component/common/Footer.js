import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    footerItem: {
        display: 'inline-block',
        padding: '3px 5px'
    }
})

const Footer = (props) => {
    const {classes, dispatch, state, theme} = props
    return (
        <Paper className={classes.root} elevation={1}>
            <Typography variant="h5" component="h3">
                <ul>
                    <li className={classes.footerItem}>
                        <a href="/#">關於我們</a>
                    </li>
                    <li className={classes.footerItem}>|</li>
                    <li className={classes.footerItem}>
                        <a href="/#">聯絡我們</a>
                    </li>
                    <li className={classes.footerItem}>|</li>
                    <li className={classes.footerItem}>
                        <a href="/#">私隱政策</a>
                    </li>
                    <li className={classes.footerItem}>|</li>
                    <li className={classes.footerItem}>
                        <a href="/#">服務條款</a>
                    </li>
                    <li className={classes.footerItem}>|</li>
                    <li className={classes.footerItem}>
                        <a href="/#">免責聲明</a>
                    </li>
                </ul>
            </Typography>
            <Typography component="p">
                所有資料只供參考用途及並不代表TTRate.com或任何人仕的提議、合約、或保證。請向有關銀行或機構查詢實際匯率。
            </Typography>
            <Typography component="p">
                Copyright © 2018 pric.me
            </Typography>
        </Paper>
    )
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
}

export default withStyles(styles, {withTheme: true})(Footer)
