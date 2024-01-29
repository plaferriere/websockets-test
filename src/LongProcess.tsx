import { Button, Flex, Loader, Text, View } from '@aws-amplify/ui-react';
import React, { useState } from 'react';
import { RequestType, StatusType, UserRequest } from './API';
import { generateClient } from 'aws-amplify/api';
import { createUserRequest } from './graphql/mutations';
import { onUpdateUserRequest } from './graphql/subscriptions';

const client = generateClient();


const LongProcess = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [request, setRequest] = useState<UserRequest>()

    async function start() {
        setLoading(true);
        const data = await client.graphql({
            query: createUserRequest,
            variables: {
                input: {
                    requestType: RequestType.LONG_PROCESS
                }
            }
        });
        const userRequest = data.data.createUserRequest;
        setRequest(userRequest);
        const subscription = client.graphql({
            query: onUpdateUserRequest,
            variables: {
                filter: {
                    id: {
                        eq: userRequest.id
                    }
                }
            }
        })
        .subscribe({
            next: data => {
                const updated = data.data.onUpdateUserRequest;
                if (updated) setRequest(updated);
                if (updated.status === StatusType.COMPLETED) {
                    setLoading(false);
                    subscription.unsubscribe()
                }
            },
            error: err => {
                console.log(err);
            }
        })
    }

    return (
        <View>
            <Flex direction={"column"}>
                <Button onClick={start}>Test</Button>
                {loading ? <View>
                    <Loader size='large'/>
                    <Text>{request?.message}</Text>
                </View> : request?.status === StatusType.COMPLETED ? <Text>{request.message}</Text> : null}
            </Flex>
        </View>
    )
}

export default LongProcess