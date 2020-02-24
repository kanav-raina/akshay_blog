import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));




  const tileData = [
    {
      img: "https://raw.githubusercontent.com/kanav-raina/akshay/master/design1.png",
      title: 'MechanicalDesign',
      author: 'AkshayKumar',
    },
    {
        img: "https://raw.githubusercontent.com/kanav-raina/akshay/master/design2.jpg",
        title: '3D Experience',
        author: 'AkshayKumar',
    },
    {
        img: "https://raw.githubusercontent.com/kanav-raina/akshay/master/design3.jpg",
        title: 'CAD',
        author: 'AkshayKumar',
    },
    {
        img: "https://raw.githubusercontent.com/kanav-raina/akshay/master/design5.jpg",
        title: 'CAD',
        author: 'AkshayKumar',
    },
    {
        img: "https://raw.githubusercontent.com/kanav-raina/akshay/master/design7.png",
        title: 'Bughati',
        author: 'AkshayKumar',
    },
    {
        img: "https://raw.githubusercontent.com/kanav-raina/akshay/master/design8.jpeg",
        title: 'Car',
        author: 'AkshayKumar',
    },
    {
      img: "https://raw.githubusercontent.com/kanav-raina/akshay/master/design9.jpg",
      title: 'Conveyor System',
      author: 'AkshayKumar',
    },
    {
      img: "https://raw.githubusercontent.com/kanav-raina/akshay/master/design99.jpg",
      title: 'Auto CAD',
      author: 'AkshayKumar',
  },
  
  ];

export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"><h3>Designs by AkshayKumar</h3></ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
