import React, { useState } from 'react'
import { useFirebase } from 'gatsby-plugin-firebase'

const GetPosts = Component => {
    return function GetPostsWrapper(props) {
        const [messages, setMessages] = useState({
            data: [],
            loading: true,
        })

        const databaseRef =
            props.path === '/music/' ? '/music' : '/transmissions'

        useFirebase(firebase => {
            firebase
                .database()
                .ref(databaseRef)
                .once('value')
                .then(snapshot => {
                    const messagesObject = snapshot.val() || {}

                    let messagesList = Object.keys(messagesObject).map(key => ({
                        ...messagesObject[key],
                        id: key,
                    }))

                    if (props.path !== '/music/') {
                        if (props.path === '/messages/') {
                            messagesList = messagesList.filter(
                                message =>
                                    message.type !== 'calendar' &&
                                    message.type !== 'code' &&
                                    message.type !== 'video'
                            )
                        } else if (props.path === '/code/') {
                            messagesList = messagesList.filter(
                                message => message.type === 'code'
                            )
                        } else if (props.path === '/video/') {
                            messagesList = messagesList.filter(
                                message => message.type === 'video'
                            )
                        } else {
                            const today = new Date()
                            messagesList = messagesList.filter(
                                message =>
                                    message.type === 'calendar' &&
                                    message.timestamp > today
                            )
                        }
                        messagesList.sort((a, b) =>
                            a.timestamp < b.timestamp ? 1 : -1
                        )
                    }

                    setMessages({
                        data: messagesList,
                        loading: false,
                    })
                })
        }, [])

        return <Component messages={messages.data} loading={messages.loading} />
    }
}

export default GetPosts
