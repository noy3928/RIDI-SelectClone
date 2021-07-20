import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2,0,0,0),
    minWidth: 5,
  },
  selectControl:{
    width:"100px", 
    height:"24px", 
    padding:"0px",
    fontSize:"12px",
    fontWeight:"700",
    color:"#545a60",
  }
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl} >
        <Select
          native
          onChange={handleChange}
          className={classes.selectControl}
        >
          <option value="">최신순</option>
          <option value={10}>인기순</option>
        </Select>
      </FormControl>
    </div>
  );
}
