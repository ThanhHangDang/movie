import { AppBar, Link, Toolbar, Typography} from '@material-ui/core';
import React from 'react';
import useStyles from "./style";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.divNav}>
            <AppBar className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                    <Typography>
                        <img src="./img/headTixLogo.png" alt="logo" style={{height: 50}}></img>
                    </Typography>
                    <Typography>
                        <Link className={classes.colorLink}>
                            Lịch chiếu
                        </Link>
                        <Link className={classes.colorLink}>
                            Cụm rạp
                        </Link>
                        <Link className={classes.colorLink}>
                            Tin tức
                        </Link>
                        <Link className={classes.colorLink}>
                            Ứng dụng
                        </Link>
                    </Typography>
                    <Typography className={classes.auth}>
                        <Link className={classes.dangNhap}>
                            <AccountCircleTwoToneIcon/>
                            Đăng nhập
                        </Link>
                        <Link className={classes.dangNhap}>
                            Đăng kí
                        </Link>
                    </Typography>   
                </Toolbar>
            </AppBar> 
        </div>
        
    )
}
