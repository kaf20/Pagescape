import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css'
import Home from './component/Home'
import ErrorPage from './component/common/ErrorPage'
import Header from './component/common/Header'
import PropTypes from 'prop-types'
import './AxiosConfig'
import CssBaseline from '@material-ui/core/CssBaseline'
import Snackbar from '@material-ui/core/Snackbar'
import Fade from '@material-ui/core/Fade'
import ErrorDialog from './component/common/ErrorDialog'
import {ContextMenu, ContextMenuTrigger, MenuItem} from 'react-contextmenu'

const logo =
    "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n" +
    "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n" +
    "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n" +
    "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n" +
    "MMMMMMMMMMMMMMWX0O0XWMMMMMMMMNXXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXK0O0KNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n" +
    "MMMMMMMMMMMKl'  ... .;kWMMMMMc  oMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO;.       :MMMMMMMXOkxxk0NMMMMMMMMMMMMMN0kxxkONMMMMMMMMMMMM\n" +
    "MMMMMMMMMNl  c0WMMMNx. ,NMMMMc  oMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMo  .oOKXK0kOMMMMXl.        ,0MMMMMMMMWk,        ,kWMMMMMMMMM\n" +
    "MMMMMMMM0. 'XMMMMMMMMK. ,NMMMc  oMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK   KMMMMMMMMMMMWl 'oOKXKOc   oMMMMMMN;  .o0XX0d.  ,XMMMMMMMM\n" +
    "MMMMMMM0. 'NMMMMMMMMMMd  dMMMc  oMMMMMMM0dddOMMMMMMXOxolcccoxXMMMMMMMMMMMMk  .WMMMMMMMMMMMMMNMMMMMMMMd   KMMMMW:  :WMMMMMMN.  'NMMMMMMM\n" +
    "MMMMMMX. .XMMXdc;:llcXK. ;MMMc  oMMMMWk,  'xWMMMMMO   .....   ,0MMMMNOOOOOl  .OOOO0OO0WMMMMMMMMMMMMMMO   0MMMMk  .NMMMMMW0c.   kMMMMMMM\n" +
    "MMMMMMo  OMWc  ,l'  .NW. .WMMc  oMMWx.  ,OMMMMMMMMXOXWMMMMMNo  .KMMMk                 0MMMMMMMMMMMMMN,  cWMMMM:  oMMMW0l.  ,.  lMMMMMMM\n" +
    "MMMMMW' ,WMo  lWMo  cMW' .WMMc  oWk'  ;0MMMMMMMMMMMMMMMMMMMMM.  xMMMWXXXXXd  .KXXXXXXXWMMMMMMMMMMMMO.  lWMMMMM,  xMNd.  .cKM:  cMMMMMMM\n" +
    "MMMMMK  oMN. .NMW,  kMW. 'WMMc  ;'  .KMMMMMMMMMMMMMKdc;,'''''   xMMMMMMMMMk  .WMMMMMMMMMMMMMMMMMMO,  .OMMMMMMM;  ,,  .cOWMMM;  cMMMMMMM\n" +
    "MMMMMO  OMO  cMMK  .NMK  :MMMc  oO.  ,0MMMMMMMMMMX;  .;lodddo.  xMMMMMMMMMk  .WMMMMMMMMMMMMMMMM0;  'kWMMMMMMMMo    ,xNMMMMMN.  dMMMMMMM\n" +
    "MMMMMk  OMk  oMMd  :MMl  OMMMc  oMWx.  ;0MMMMMMMM;  ;NMMMMMMW.  xMMMMMMMMMk  .WMMMMMMMMMMMMMWk,  ,OWMMMMMMMMMMK.  oMMMMMMMWc  .XMMMMMMM\n" +
    "MMMMMO  kMK  'Oo.  'Oo  oMMMMc  oMMMNl.  ;KMMMMMW,  ;NMMMW0o'   xMMMMMMMMMk  .WMMMMMMMMMMMWk.  'xXXXXXXXXXNMMMMO.  cKMMMMK:  .0MMMMMMMM\n" +
    "MMMMMX. oMMx.  .dO'   ;OMMMMMc  oMMMMMNc   cXMMMM0.   .'.   ;'  xMMMMMMMMMk  .WMMMMMMMMMMMk               lMMMMM0'   .''.  .lNMMMMMMMMM\n" +
    "MMMMMM; .NMMWNNWMMMNXWMMMMMMMOll0MMMMMMMKolldNMMMMWOl:;;cokXMOllKMMMMMMMMMKlldMMMMMMMMMMMMKlllllllllllllllOMMMMMMMKxl:;:coOWMMMMMMMMMMM\n" +
    "MMMMMMO  ;NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n" +
    "MMMMMMMx. .xNMMMMMN0xNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n" +
    "MMMMMMMMNd,. ..'....:NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n" +
    "MMMMMMMMMMMWKOOO0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n" +
    "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNMMMMMMMMMMMMMMMMNNMMMMMMMMMMMMMMMMMMWXWMMMMMMMMMMMMMM\n" +
    "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW, xMMMMMMKlKMMMMMW.'MMMMMMMMMMMMMMMMMMk oMMMMMMMMMMMMMM\n" +
    "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXOxkOOONMW0OxlXMMMMKOc oOOONMW.,NOxkXMMMX0WMMMK0WMk oXkxONMMMMMMMMM\n" +
    "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWc.oOO; cXMNxx: xMMMMkx; cxxxXMW..:xOc xMMc 0MMM;.NMk .ckO;.OMMMMMMMM\n" +
    "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW,.0MWl OMMMMMk xMMMMMMd OMMMMMW.'WMMX.:MMc 0MMM;.NMk lMMMX.;MMMMMMMM\n" +
    "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN,'llloKMMMMMMk xMMMMMMd kMMMMMW.'MMMX.:MMc 0MMW,.NMk oMMMK :MMMMMMMM\n" +
    "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN..loodkXMMKdd: ;ddNMMM0.'xOxXMW.'MMMX.:MMk ;kd;..NMk ,kko.;XMMMMMMMM\n" +
    "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0.:000O, OMNO00O0O0WMMMMNOxxkNMM0KMMMW0XMMMXkxOWX0WMW0kxxOXMMMMMMMMMM\n" +
    "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK,,cllc,lNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n" +
    "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n" +
    "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n";


(function f() {
    setInterval(() => {
        const a = /./
        a.toString = function() {
            this.opened = true;
        }
        console.info(a)
        if (a.opened) {
            eval(eval(eval("'\"" + "6465627567676572".replace(/(\w{2})/g, "\\\\x$1") + "\"'")));
            console.info(logo)
        }
    }, 1)
})()

const styles = theme => ({
    snackBar: {
        width: 300,
        height: 100,
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'table-cell',
        fontSize: 'x-large',
    },
})

const App = (props) => {
    const {classes, store} = props
    const state = store.getState()
    const {isSnackBarDialogOpen, message} = state.snackbarReducer

    const dispatch = (type, payload) => store.dispatch({type, payload})
    const handleSnackbarClose = event => dispatch('RDX_TOGGLE_SNACKBAR_OPEN', {isSnackBarDialogOpen: !isSnackBarDialogOpen})
    const handleClick = (event, data) => {
        event.preventDefault()
        return false
    }
    const handleHide = (event) => {
        event.preventDefault()
        return false
    }

    return (
        <BrowserRouter>
            <div className='App'>
                <ContextMenuTrigger id='contentMenuId-000'>
                    <CssBaseline />
                    <Header dispatch={dispatch} state={state}/>
                    <Switch>
                        <Route exact path='/' render={() => (
                            <Home dispatch={dispatch} state={state}/>
                        )}/>
                        <Route component={ErrorPage}/>
                    </Switch>
                    <ErrorDialog dispatch={dispatch} state={state}/>
                    <Snackbar
                        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                        open={isSnackBarDialogOpen}
                        onClose={handleSnackbarClose}
                        TransitionComponent={Fade}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<div className={classes.snackBar} id='message-id'>{message}</div>}
                    />
                </ContextMenuTrigger>
                <ContextMenu id='contentMenuId-000' onHide={handleHide}>
                    <MenuItem data={{like: 1}} onClick={handleClick}>
                        <h1>👍 like</h1>
                    </MenuItem>
                    <MenuItem data={{appreciate: 1}} onClick={handleClick}>
                        <h1>🙇🏻‍ appreciate</h1>
                    </MenuItem>
                    <MenuItem divider />
                    <MenuItem data={{dislike: 1}} onClick={handleClick}>
                        <h1>👎 dislike</h1>
                    </MenuItem>
                </ContextMenu>
            </div>
        </BrowserRouter>
    )
}

App.propTypes = {
    store: PropTypes.object.isRequired
}

// export default App
export default withStyles(styles, {withTheme: true})(App)
