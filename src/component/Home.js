import React from 'react'
import PropTypes from 'prop-types'
import 'react-table/react-table.css'
import Grid from '@material-ui/core/Grid'
import {Paper, withStyles} from '@material-ui/core'
import ReactTable from 'react-table'

const styles = theme => ({
    content: {
        flexGrow: 1,
        paddingTop: theme.spacing.unit * 10,
        height: '100vh',
        overflow: 'auto',
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    appBarSpacer: theme.mixins.toolbar
})

const Home = (props) => {
    const {classes, dispatch, state} = props
    const {pages, rates, loading} = state.retrieveRatesReducer
    const {baseCurrency, baseCurrencyList, alternateCurrency, alternateCurrencyList} = state.baseCurrencyReducer

    const columnsData = [{
        Header: '商戶',
        accessor: 'shop'
    }, {
        Header: '現鈔商戶買入',
        id: 'noteLong',
        accessor: d => d.noteLong
    }, {
        Header: '現鈔商戶賣出',
        id: 'noteShort',
        accessor: d => d.noteShort
    }]

    const defaultSorted = [{
        id: 'noteShort',
        desc: false
    }]

    if ("geolocation" in navigator)
        columnsData.push({
            Header: '距離 (km)',
            id: 'distance',
            accessor: d => d.distance
        })

    const columns = [{
        Header: baseCurrency + alternateCurrency,
        columns: columnsData
    }]

    const handleFetchData = () => {
        if ("geolocation" in navigator)
            navigator.geolocation.getCurrentPosition(function(position) {
                dispatch('SGA_RETRIEVE_RATES', {position: position})
            })
        else
            dispatch('SGA_RETRIEVE_RATES')

        dispatch('SGA_RETRIEVE_ALTERNATE_CURRENCY_LIST')
    }
    return (
        <main className={classes.content}>
            <Grid container>
                <Grid item lg={3}>{' '}</Grid>
                <Grid item lg={6} sm={12}>
                    <Paper className={classes.paper}>
                        <ReactTable
                            data={rates}
                            pages={pages}
                            columns={columns}
                            onFetchData={handleFetchData}
                            loading={loading}
                            defaultPageSize={20}
                            className='-striped -highlight'
                            defaultSorted={defaultSorted}
                        />
                    </Paper>
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

export default withStyles(styles, {withTheme: true})(Home)
