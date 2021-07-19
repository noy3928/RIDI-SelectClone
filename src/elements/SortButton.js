import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 10,
  },
  selectEmpty: {
    marginTop: theme.spacing(10),
  },
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
          style={{width:"100px", height:"25px", padding:"0px"}}
        >
          <option value="">최신순</option>
          <option value={10}>인기순</option>
        </Select>
      </FormControl>
    </div>
  );
}
