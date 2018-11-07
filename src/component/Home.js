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
        paddingLeft: theme.spacing.unit * 30,
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
    const {pages, rates} = state.retrieveRatesReducer
    const {baseCurrency, baseCurrencyList, alternateCurrency, alternateCurrencyList} = state.baseCurrencyReducer

    const columns = [{
        Header: baseCurrency + alternateCurrency,
        columns: [{
            Header: 'Shop',
            accessor: 'shopName'
        }, {
            Header: 'Note Long',
            id: 'noteLong',
            accessor: d => d.noteLong
        }, {
            Header: 'Note Short',
            id: 'noteShort',
            accessor: d => d.noteShort
        }, {
            Header: 'Distance (KM)',
            id: 'distance',
            accessor: d => d.distance
        }]
        }]

    const handleFetchData = () => dispatch('SGA_RETRIEVE_RATES')
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
                            defaultPageSize={20}
                            className='-striped -highlight'
                            defaultSorted={[
                                {
                                    id: 'noteShort',
                                    desc: false
                                }
                            ]}
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
