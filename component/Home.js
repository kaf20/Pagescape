import React, {PropTypes} from 'react'
import ReactTable from 'react-table';

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const newPerson = () => {
    const statusChance = Math.random();
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
    };
};

const makeData = (len) => {
    return range(len).map(d => {
        return {
            ...newPerson(),
            children: range(10).map(newPerson)
        };
    });
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

const tableStyle = {
    backgroundImage: 'url(\'https://upload.wikimedia.org/wikipedia/commons/7/70/Solid_white.svg\')',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}

const Home = ({dispatch, state}) =>
    <div className='mdl-grid'>
        <div className='mdl-cell mdl-cell--3-col'/>
        <div className='mdl-cell mdl-cell--6-col' style={tableStyle}>
            <ReactTable
                data={data}
                columns={columns}
                defaultPageSize={10}
                className='-striped -highlight'/>
        </div>
        <div className='mdl-cell mdl-cell--3-col'/>
    </div>

Home.propTypes = {
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.number.isRequired
}

export default Home
