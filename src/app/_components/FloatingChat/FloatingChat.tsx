// Produced by Duong Trung Nguyen

'use client';

import { Avatar, Fab, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { Socket, io } from 'socket.io-client';
import './styles.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/_context/store';
import { useDebouncedCallback } from 'use-debounce';
import { Message, MessageRequest } from '@/app/_types';

const FloatingChat = () => {
    const currentUser = useSelector((state) => (state as RootState).user);

    const [isDisplay, setIsDisplay] = useState(false);
    const [onChange, setOnChange] = useState(false);
    const [message, setMessage] = useState<MessageRequest>(new MessageRequest(currentUser.user?.id || -1, 'CUSTOMER'));
    const [messages, setMessasges] = useState<Message[]>([]);
    const socketRef = useRef<Socket | null>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const messagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        socketInit();

        return () => {
            socketRef.current?.disconnect();
        };
    }, []);

    const socketInit = () => {
        socketRef.current = io(`ws://localhost:8085`);

        socketRef.current?.emit('join-room', {
            admin: true,
            room: currentUser.user?.id,
        });

        socketRef.current.on('connected', (res: Message[]) => {
            console.log('chat service connected');
            setMessasges(res);
            scrollToBottom();
        });

        socketRef.current.on('receive', (res: Message) => {
            setMessasges((prevState) => {
                return [...prevState, res];
            });
            setOnChange(false);
            scrollToBottom();
        });

        socketRef.current.on('change', () => {
            console.log('changing');

            setOnChange(true);
            scrollToBottom();
        });

        socketRef.current.on('stop-change', () => {
            setOnChange(false);
        });
    };

    const handleOpen = () => {
        setIsDisplay(true);
    };

    const handleClose = () => {
        setIsDisplay(false);
    };

    const handleChange = useDebouncedCallback((event: ChangeEvent<HTMLInputElement>) => {
        setMessage((prevState) => {
            return {
                ...prevState,
                message: event.target.value,
            };
        });
    }, 200);

    const handleStartChange = () => {
        socketRef.current?.emit('change', null);
    };

    const handleStopChange = () => {
        socketRef.current?.emit('stop-change', null);
    };

    const handleSend = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setTimeout(() => {
            socketRef.current?.emit('send', message);
        }, 100);
        setMessasges((prevState) => {
            return [...prevState, new Message(message.message)];
        });
        setMessage(new MessageRequest(currentUser.user?.id || -1, 'CUSTOMER'));
        formRef.current?.reset();
        scrollToBottom();
    };
    const scrollToBottom = () => {
        setTimeout(() => {
            if (messagesRef.current) {
                messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
            }
        }, 100);
    };

    return (
        <div className="floating-chat-container rounded">
            {isDisplay ? (
                <Stack className="floating-chat">
                    <Stack direction="row" className="p-2 justify-content-between align-items-center chat-header">
                        <Typography variant="h6">
                            <b>Hỗ trợ</b>
                        </Typography>
                        <IconButton onClick={() => handleClose()}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                    <Stack ref={messagesRef} className="h-100 chat-body">
                        {messages.map((message, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`message-container ${message.role === 'ADMIN' ? 'sender' : 'receiver'}`}>
                                    <div className="message-wrapper">
                                        <Tooltip
                                            className={`message-sender ${
                                                messages[index - 1] && messages[index - 1].role === message.role
                                                    ? 'hide'
                                                    : ''
                                            }`}
                                            title={`${message.time} ${message.name}`}>
                                            <Avatar
                                                src={message.avatar}
                                                sizes="small"
                                                sx={{ width: '30px', height: '30px' }}
                                            />
                                        </Tooltip>
                                        <div className="message">{message.message}</div>
                                    </div>
                                </div>
                            );
                        })}
                        {onChange && (
                            <div className="message-container changing-message sender">
                                <div className="message-wrapper">
                                    <Avatar
                                        src={messages[0]?.avatar}
                                        sizes="small"
                                        sx={{ width: '30px', height: '30px' }}
                                    />
                                    <div className="message">
                                        <div className="dot" />
                                        <div className="dot" />
                                        <div className="dot" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </Stack>

                    <form ref={formRef} className="d-flex flex-row p-2 input-form gap-1" onSubmit={handleSend}>
                        <input
                            type="text"
                            placeholder="Aa"
                            onChange={handleChange}
                            onFocus={handleStartChange}
                            onBlur={handleStopChange}
                            required
                        />
                        <IconButton type="submit">
                            <SendIcon fontSize="small" color="primary" />
                        </IconButton>
                    </form>
                </Stack>
            ) : (
                <Tooltip title="chat" placement="left">
                    <Fab color="primary" aria-label="add" onClick={() => handleOpen()}>
                        <ChatRoundedIcon />
                    </Fab>
                </Tooltip>
            )}
        </div>
    );
};
export default FloatingChat;
