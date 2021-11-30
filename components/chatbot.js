import styled from 'styled-components'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatBot from 'react-simple-chatbot';

const Chatbot = () => {
    return (
        <ChatBot
            steps={[
                {
                    id: 'hello-world',
                    message: 'Hello,what is not color here',
                    trigger: '2'
                },
                {
                    id: '2',
                    options: [
                        { value: 'blue', label:'blue', trigger: '4' },
                        { value: 'frog', label:'frog', trigger: '3' },
                        { value: 'white', label:'white', trigger:'4' },
                    ]
                },
                {
                    id: '3',
                    message: 'correct well done.',
                    trigger: '5',
                },
                {
                    id: '4',
                    message: 'oh no {previousValue} is a color.',
                    trigger: '2',
                },
                {
                    id: '5',
                    message: 'what is your name.',
                    trigger: '6',
                },
                {
                    id:'6',
                    user:true
                }
            ]}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Chatbot;