import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    appbar:{
        backgroundColor: "#fff",
    },
    toolbar: {
        display: "flex", //cho các object dàn 1 hàng ngang
        justifyContent: "space-between", //Chia bố cục các phần tử trong toolbar
    },
    colorLink: {
        color: "#212529",
        paddingLeft: 10,
        paddingRight: 10,
        "&:hover": {
            color: "#fa5238",
            textDecoration: "none",
        },
    },
    dangNhap: {
        paddingLeft: 10,
        paddingRight: 10,
        color:"grey",
    }
});

export default useStyles;