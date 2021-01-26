import React from 'react';
import { useRecoilState } from 'recoil';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import { coverageState, usState } from '../atoms';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function PickCoverage() {
  const classes = useStyles();
  const [coverage, setCoverage] = useRecoilState(coverageState);
  const [usaState, setUsaState] = useRecoilState(usState);

  const handleCoverage = (event) => {
    setCoverage(event.target.value);
  };

  const handleUsaState = (event) => {
    setUsaState(event.target.value);
  };

  return (
    <div>
      <h2>Coverage Elections</h2>
      <FormControl className={classes.formControl}>
        <Select
          value={coverage}
          onChange={handleCoverage}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" disabled>
            Type
          </MenuItem>
          <MenuItem value={'auto'}>Auto</MenuItem>
          <MenuItem value={'fire'}>Fire</MenuItem>
          <MenuItem value={'flood'}>Flood</MenuItem>
          <MenuItem value={'apts'}>Apts</MenuItem>
        </Select>
        <FormHelperText>Coverage Type</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select
          value={usaState}
          onChange={handleUsaState}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" disabled>
            State
          </MenuItem>
          <MenuItem value={'IL'}>Illinois</MenuItem>
          <MenuItem value={'IN'}>Indiana</MenuItem>
          <MenuItem value={'MI'}>Michigan</MenuItem>
        </Select>
        <FormHelperText>US State</FormHelperText>
      </FormControl>
    </div>
  );
}
