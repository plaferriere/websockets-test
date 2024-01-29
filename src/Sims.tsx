import {
    Button,
    Divider,
    Flex,
    Heading,
    Loader,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Text,
    View,
} from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/api';
import moment from 'moment';
import React, { useState } from 'react';

import { RequestType } from './API';
import { createUserRequest } from './graphql/mutations';
import { onUpdateUserRequest } from './graphql/subscriptions';

const client = generateClient();

const Sims = () => {
    const [message, setMessage] = useState<string>('Ready');
    const [loading, setLoading] = useState<boolean>(false);
    const [sims, setSims] = useState<any[]>();

    async function testAppSync() {
        try {
            setMessage('');
            setLoading(true);
            setSims([]);
            const start = new Date();
            const data = await client.graphql({
                query: createUserRequest,
                variables: {
                    input: {
                        requestType: RequestType.GET_SIMS,
                    },
                },
            });
            const post = data.data.createUserRequest;
            const subscription = await client
                .graphql({
                    query: onUpdateUserRequest,
                    variables: {
                        filter: {
                            id: {
                                eq: post.id,
                            },
                        },
                    },
                })
                .subscribe({
                    next: (data) => {
                        setLoading(false);
                        const ms = moment(new Date()).diff(start);
                        setMessage(`Done in ${(ms / 1000).toFixed(3)}s`);
                        subscription.unsubscribe();
                        const response = data.data.onUpdateUserRequest.response;
                        if (response) {
                            try {
                                const sims = JSON.parse(response);
                                if (sims) setSims(sims);
                            } catch (error) {}
                        }
                    },
                });
        } catch (err) {
            console.log('error creating todo:', err);
        }
    }
    
    return (
        <View>
            <Heading level={2}>Get Sims Demo</Heading>
            <Flex alignItems={'center'}>
                <Button onClick={testAppSync}>Get Sims</Button>
                &nbsp;
                {loading ? <Loader /> : <Text>{message}</Text>}
            </Flex>
            <Divider style={{ margin: '20px 0' }} orientation='horizontal' />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell as='th'>ID</TableCell>
                        <TableCell as='th'>ICCID</TableCell>
                        <TableCell as="th">Sim Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sims?.map((sim) => (
                        <TableRow>
                            <TableCell>{sim.id}</TableCell>
                            <TableCell>{sim.iccid}</TableCell>
                            <TableCell>{sim.simType}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </View>
    );
};

export default Sims
