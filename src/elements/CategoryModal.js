import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';
import CloseIcon from "../img/Close.svg"
import CheckBox from "../elements/CheckBox"
import { WholeCategory, giveCurrentCategoryName } from '../shared/CategoryList';
import { actionCreators as bookActions } from '../redux/modules/book';
import { useDispatch, useSelector } from "react-redux";
import DownArrow from "../img/downArrow.png"


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width:'320px',
    height:'414px',
    backgroundColor: theme.palette.background.paper,
    border: 'none;',
    borderRadius:"3px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0),
  },
}));

export default function TransitionsModal() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const currentCategory = useSelector(state => state.book.category);
  const currentCategoryName = giveCurrentCategoryName(currentCategory)
  console.log(currentCategoryName)

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const changeCategoryNum = (num) => {
    dispatch(bookActions.getCategoryNum(num))
    dispatch(bookActions.loadBookAPI())
    dispatch(bookActions.getPageNumAPI())
    handleClose()
}

  return (
    <div>
      <Modalbutton type="button" onClick={handleOpen}>
        {currentCategoryName}
        <ModalArrow src={DownArrow}/>
      </Modalbutton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <HeadLine>
              <CategoryTitle id="transition-modal-title">카테고리</CategoryTitle>
              <CloseIconBox><CloseIconImg onClick={handleClose} src={CloseIcon}/></CloseIconBox>
            </HeadLine>
            <CategoryListBox>
              {WholeCategory.map((l, idx) => {
                return(
                  <List key={idx} onClick={()=>{
                    changeCategoryNum(l.categoryNum);
                  }}><CheckBox /><CategoryName id="transition-modal-description">{l.categoryName}</CategoryName></List>
                )
              })}
            </CategoryListBox>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const ModalButtonWrapper = styled.div`

`

const ModalArrow = styled.img`
width:auto;
height:auto;
max-width:10px;
max-height:10px;
margin-left:7px;
`

const Modalbutton = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    font-size:19.5px;
    font-weight:600;
    padding: 10px 0px;
    color:#313538;
`

const HeadLine = styled.div`
width:100%;
height:64px;
padding: 0px 16px 0px 20px;
display:flex;
justify-content:space-between;
align-items:center;
`
const CategoryTitle = styled.div`
font-size:17px;
font-family: "NotoSansBold";
display:flex;
justify-content:center;
align-items:center;
`

const CloseIconBox = styled.div`

`

const CloseIconImg = styled.img`
width:24px;
height:24px;
cursor:pointer;
opacity:0.3;
`

const CategoryListBox = styled.div`
width:100%;
height:auto;
padding:0px 16px 0px 20px;
overflow-y:scroll;
font-size:16px;
`

const List = styled.div`
display:flex;
align-items:center;
cursor:pointer;
`

const CategoryName = styled.p`
margin:0px;
`