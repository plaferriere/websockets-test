import React, { useEffect, useState } from 'react';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import {
    withAuthenticator,
    Flex,
    View,
    Heading,
    Divider,
    Link,
	Alert,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { BrowserRouter, Link as ReactRouterLink, Route, Switch } from 'react-router-dom';

import config from './amplifyconfiguration.json';
import Sims from './Sims';
import { Notification } from './API';
import { generateClient } from 'aws-amplify/api';
import { listNotifications } from './graphql/queries';
import { onCreateNotification } from './graphql/subscriptions';
import { updateNotification } from './graphql/mutations';
import LongProcess from './LongProcess';
Amplify.configure(config);

const client = generateClient();

const App = ({ signOut, user }: WithAuthenticatorProps) => {
	const [notifications, setNotifications] = useState<Notification[]>([]);

	useEffect(() => {
		fetchNotifications();
		const createSubscription =  client.graphql({
			query: onCreateNotification
		})
		.subscribe({
			next: data => {
				const notification = data.data.onCreateNotification;
				setNotifications(notifications => notifications.concat(notification));
			}
		})
		return () => {
			createSubscription.unsubscribe();
		}
	}, [])

	async function fetchNotifications() {
		const data = await client.graphql({
			query: listNotifications,
			variables: {
				filter: {
					cleared: {
						eq: false
					}
				}
			}
		});
		setNotifications(data.data.listNotifications.items)
	}

	async function dismissNotification(id: string) {
		await client.graphql({
			query: updateNotification,
			variables: {
				input: {
					id,
					cleared: true
				}
			}
		})
		setNotifications(notifications => notifications.filter(notification => notification.id !== id))
	}

    return (
		<Flex flex={1} height={"100vh"}>
        <BrowserRouter>
            <Flex>
                <View width={'200px'} padding="10px">
					<Flex direction={"column"}>
                    <Heading level={1}>Test App</Heading>
                    <Divider style={{ margin: '20px 0' }} orientation='horizontal' />
                    <ReactRouterLink to='/sims' component={Link}>
                        Sims
                    </ReactRouterLink>
                    <ReactRouterLink to='/long-process' component={Link}>
                        Long Process
                    </ReactRouterLink>
					</Flex>
                </View>
				<Divider orientation='vertical' />
                <View padding="20px">
					{notifications.map(notification => {
						return <Alert isDismissible={true} onDismiss={() => dismissNotification(notification.id)}>{notification.message}</Alert>
					})}
                    <Switch>
                        <Route path='/long-process'>
                            <LongProcess />
                        </Route>
                        <Route>
                            <Sims />
                        </Route>
                    </Switch>
                </View>
            </Flex>
        </BrowserRouter>
		</Flex>
    );
};

export default withAuthenticator(App);
