/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { ListItem, Icon, Avatar } from 'react-native-elements';
import React, { useState, useEffect } from "react";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import { v4 as uuidv4 } from "uuid";
import { API, graphqlOperation } from 'aws-amplify';
import { listNotes, listFolders } from '../../graphql/queries';

// const getNotes = async () => {
//     const todos = await API.graphql(graphqlOperation(listNotes));
//     return todos.data.listNotes.items;
// };

const getData = (query) => async () => {
    const {data} = await API.graphql(graphqlOperation(query));
    return data;
};

const NoteFolder = () => {
    useEffect(() => {


        // effect runs one time and ever after the component is mounted
        console.log(query.data, 'query.data');
        // lazy load this data and ensure ir's captured by the chain


    }, [query]);

    const queryClient = useQueryClient();

    // some asunc stuff ? can't trust it
    const query = useQuery('notes', getData(listFolders));

    const [expanded, setExpanded] = useState(false);
    // limitN [slot1 slot2]

    const folders = [
        {
            name: 'Cooking',
            notes: [
                { title: 'Cakes', content: 'I love baking cakes!' },
                { title: 'Pies', content: 'I love making pies!' }]
        },
        {
            name: 'Marketing',
            notes: [
                { title: 'Social Media Marketing', content: 'Facebook, Twitter, Instagram' },
                { title: 'Blogs', content: 'WOW! I have experience writing blogs!' }]
        },
        {
            name: 'Startups',
            notes: [
                { title: 'VC', content: 'I wanna be a VC!' },
                { title: 'YC', content: 'I wanna start a new startup!' }]
        },
    ];

    return (
        <>
            {folders.map((folder, idx) =>
                <ListItem.Accordion
                    key={idx}
                    content={
                        <>
                            <Icon name="folder" size={30} />
                            <ListItem.Content>
                                <ListItem.Title>{folder.name}</ListItem.Title>
                            </ListItem.Content>
                        </>
                    }
                    isExpanded={expanded}
                    onPress={() => {
                        setExpanded(!expanded);
                    }}
                >
                    {folder.notes.map((n, i) => (
                        <ListItem key={i} onPress={console.log} bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>{n.title}</ListItem.Title>
                                <ListItem.Subtitle>{n.content}</ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    ))}
                </ListItem.Accordion>
            )
            }
        </>
    )
}

export default NoteFolder;
