import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './App.css';

const useStyles = makeStyles(theme => ({
  content: {
	  display: 'table',
	  width: '689px',
	  border: '1px solid #cdd2d2',
	  fontFamily: 'Helvetica Neue,Helvetica,Apple SD Gothic Neo,AppleGothic,Dotum,Arial,Tahoma',
	  backgroundColor: '#e2b6b3',
  },
  gamestats: {
	  width: '70px',
	  textAlign: 'center',
	  fontSize: '11px',
	  color: '#555',
	  lineHeight: '16px',
  },
  gametype: {
	  fontWeight: 'bold',
  },
  bar: {
	  background: '#cea7a7',
	  display: 'block',
	  width: '27px',
	  margin: '5px auto;',
	  height: '2px',
  },
  gameresult: {
	  fontWeight: 'bold',
	  width: '70px',
	  whiteSpace: 'nowrap',
	  overflow: 'hidden',
	  textOverflow: 'ellipsis',
	  color: '#C6443F',
  }
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
  const classes = useStyles();

  return ( 
	<div className={classes.content}>
		<div className={classes.gamestats}>
			<div className={classes.gametype}>
				{/* queue type needs possible variable replacement */}
				Ranked Solo
			</div>
			<div className={classes.timestamp}>
				{/* time needs possible variable replacement */}
				4 hours ago
			</div>
			<div className={classes.bar}>
			</div>
			<div className={classes.gameresult}>
				{/* game result needs possible variable replacement */}
				Defeat
			</div>
			<div className={classes.gamelength}>
				24m 56s
			</div>
		</div>
	</div>
  );
}