import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import lifecycle from 'react-pure-lifecycle'
import {compose} from 'recompose'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import classNames from 'classnames'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import AddProductDialog from "../AddProductDialog";

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
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n" +
"\n\n                                                                                          https://github.com/kaf20/ttcalc-ui \n\n\n\n\n"


const methods = {
    componentDidMount(props) {
        const {classes, dispatch, state} = props
        console.info(logo)
    }
}

const drawerWidth = 240

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
})

const Header = (props) => {
    const {classes, dispatch, state, theme} = props
    const {drawerOpen} = state.toggleDrawerOpenReducer
    const {isAddProductDialogOpen} = state.addProductDialogReducer

    const handleToggleDrawerOpen = event => dispatch('RDX_TOGGLE_DRAWER_OPEN', event.target.value)
    const handleToggleProductDialog = event => dispatch('RDX_TOGGLE_PRODUCT_DIALOG_OPEN', {isAddProductDialogOpen: !isAddProductDialogOpen})

    return (
        <div className={classes.root}>
            <AppBar position='fixed'>
                <Toolbar disableGutters={!drawerOpen}>
                    <IconButton
                        color='inherit'
                        aria-label='Open drawer'
                        onClick={handleToggleDrawerOpen}
                        className={classNames(classes.menuButton, drawerOpen && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' color='inherit' noWrap>
                        C9 Web 👗
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant='persistent'
                anchor='left'
                open={drawerOpen}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleToggleDrawerOpen}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['開心 ❤ Share'].map((text, index) => (
                        <ListItem button key={text} onClick={handleToggleProductDialog}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <AddProductDialog dispatch={dispatch} state={state}/>
        </div>
    )
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
}

// export default withStyles(styles, {withTheme: true})(Header)

export default compose(
    withStyles(styles, {withTheme: true}),
    lifecycle(methods),
)(Header)