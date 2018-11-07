import React from 'react'
import PropTypes from 'prop-types'
import "react-table/react-table.css"
import Grid from '@material-ui/core/Grid'
import {Paper, withStyles} from "@material-ui/core"
import ReactTable from "react-table"
import axios from "axios";

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

const range = len => {
    const arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr
}

const newPerson = () => {
    const statusChance = Math.random()
    return {
        shopName: 'Eight',
        noteLong: .9,
        noteShort: Math.random().toPrecision(4),
        distance: Math.random().toPrecision(4),
        visits: Math.floor(Math.random() * 100),
        status:
            statusChance > 0.66
                ? 'relationship'
                : statusChance > 0.33 ? 'complicated' : 'single'
    }
}

// TODO

const makeData = (len) => {
    return range(len).map(d => {
        return {
            ...newPerson(),
            children: range(20).map(newPerson)
        }
    })
}

// const data = makeData(5553)
// const data = []
// http://localhost:3000/data.json

const columns = [
    {
        Header: 'CNY',
        columns: [
            {
                Header: 'Shop',
                accessor: 'shopName'
            },
            {
                Header: 'Note Long',
                id: 'noteLong',
                accessor: d => d.noteLong
            },
            {
                Header: 'Note Short',
                id: 'noteShort',
                accessor: d => d.noteShort
            },
            {
                Header: 'Distance (KM)',
                id: 'distance',
                accessor: d => d.distance
            },
        ]
    }
]

const Home = (props) => {
    const {classes, dispatch, state} = props
    return (
        <main className={classes.content}>
            <Grid container spacing={24}>
                <Grid item xs={3}>state {JSON.stringify(state)}</Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <ReactTable
                            data={state.rates}
                            pages={state.pages}
                            columns={columns}
                            onFetchData={() => dispatch('SGA_RETRIEVE_RATES')}
                            defaultPageSize={20}
                            className='-striped -highlight'
                            defaultSorted={[
                                {
                                    id: "noteShort",
                                    desc: false
                                }
                            ]}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={3}>{' '}</Grid>
            </Grid>
        </main>
    )
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
