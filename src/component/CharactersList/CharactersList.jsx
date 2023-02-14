import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Style from "./CharactersList.module.css"

export default function CharactersList({characterList, temporaryChosenCharacter, temporaryCharacter}) {

  
  return (
    <List sx={{ width: '100%', height: "100%", maxWidth: 360, bgcolor: 'transparent' }} className={Style.listContainer}>
      {
        characterList?.map((el, index) => (
          <>
            <ListItem className={temporaryChosenCharacter !== null && temporaryChosenCharacter  === el.id ? Style.listItemChosen : Style.listItem} key={index} onClick={() => temporaryCharacter(el.id)} >

              <ListItemAvatar >
                <Avatar alt="Remy Sharp" src={el.image} />
              </ListItemAvatar>

              <ListItemText
                primary={el.name}
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="white"
                    >
                      {el.species}
                    </Typography>
                    
                  </>
                }
              />
            </ListItem>
            
          <Divider variant="inset" component="li" />
          </>
        ))
      }
    </List>
  );
}