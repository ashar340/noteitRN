/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { ListItem, Icon, Avatar } from 'react-native-elements';
import React, { useState } from "react";

const NoteFolder = () => {
    const [expanded, setExpanded] = useState(false);
    const list2 = [{
        avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        name: "Amy Farha",
        subtitle: "Vice President"
    }]
    return (
        <ListItem.Accordion
            content={
                <>
                    <Icon name="place" size={30} />
                    <ListItem.Content>
                        <ListItem.Title>List Accordion</ListItem.Title>
                    </ListItem.Content>
                </>
            }
            isExpanded={expanded}
            onPress={() => {
                setExpanded(!expanded);
            }}>
            {list2.map((l, i) => (
                <ListItem key={i} onPress={console.log} bottomDivider>
                    <Avatar title={l.name} source={{ uri: l.avatar_url }} />
                    <ListItem.Content>
                        <ListItem.Title>{l.name}</ListItem.Title>
                        <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            ))}
        </ListItem.Accordion>
    )
}

export default NoteFolder;
