import React from 'react'
import PropTypes from 'prop-types'
import "react-table/react-table.css"
import Grid from '@material-ui/core/Grid'
import {Paper, withStyles} from "@material-ui/core"
import ReactTable from "react-table"

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
        firstName: 'Eight',
        lastName: 'Chan',
        age: Math.floor(Math.random() * 30),
        visits: Math.floor(Math.random() * 100),
        progress: Math.floor(Math.random() * 100),
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

const data = makeData(5553)

const columns = [
    {
        Header: 'Name',
        columns: [
            {
                Header: 'First Name',
                accessor: 'firstName'
            },
            {
                Header: 'Last Name',
                id: 'lastName',
                accessor: d => d.lastName
            }
        ]
    },
    {
        Header: 'Info',
        columns: [
            {
                Header: 'Age',
                accessor: 'age'
            },
            {
                Header: 'Status',
                accessor: 'status'
            }
        ]
    },
    {
        Header: 'Stats',
        columns: [
            {
                Header: 'Visits',
                accessor: 'visits'
            }
        ]
    }
]

const Home = (props) => {
    const {classes, dispatch, state} = props
    return (
        <main className={classes.content}>
            <Grid container spacing={24}>
                <Grid item xs={3}>{' '}</Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <ReactTable
                            data={data}
                            columns={columns}
                            defaultPageSize={20}
                            className='-striped -highlight'/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>{' '}</Grid>
            </Grid>
        </main>
    )
}

Home.propTypes = {
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
