// Produced by Duong Trung Nguyen

'use client';

import { Avatar, Fab, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import io, { Socket } from 'socket.io-client';
import './styles.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/_context/store';
import { useDebouncedCallback } from 'use-debounce';
import { AllMessagesResponse, Message, MessageRequest } from '@/app/_types';
import { chatServices } from '@/app/_services';
import { toast } from 'react-toastify';

const AdminChat = () => {
    const currentUser = useSelector((state) => (state as RootState).user);
    const [onChange, setOnChange] = useState(false);
    const [rooms, setRooms] = useState<AllMessagesResponse[]>([]);
    const [currentRoom, setCurrentRoom] = useState<number>();
    const [messages, setMessasges] = useState<Message[]>([]);
    const [message, setMessage] = useState<MessageRequest>(new MessageRequest(19, 'ADMIN'));
    const [unreadMessage, setUnreadMessage] = useState<number[]>([]);

    const socketRef = useRef<Socket | null>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const messagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        socketInit();

        if (socketRef.current) {
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

            socketRef.current.on('new-message', (res: Message) => {
                const newRoom: AllMessagesResponse = {
                    roomId: res.room,
                    avatar: res.avatar,
                    name: res.name,
                    newestMessage: res,
                };

                if (newRoom.roomId != currentRoom) {
                    toast.warn(`Bạn có tin nhắn mới từ ${newRoom.name}`);
                }

                if (rooms.some((item) => item.roomId === newRoom.roomId)) {
                    setRooms((prevState) => {
                        return prevState.map((room) => {
                            if (room.roomId === newRoom.roomId) {
                                return newRoom;
                            } else {
                                return room;
                            }
                        });
                    });
                } else {
                    setRooms((prevState) => [...prevState, newRoom]);
                }
                setUnreadMessage((prevState) => [...prevState, newRoom.roomId]);
            });

            socketRef.current.on('change', () => {
                setOnChange(true);
                scrollToBottom();
            });

            socketRef.current.on('stop-change', () => {
                setOnChange(false);
            });
        }

        return () => {
            socketRef.current?.disconnect();
        };
    }, [currentRoom]);

    const socketInit = () => {
        socketRef.current = io(`ws://localhost:8085`);

        socketRef.current?.emit('join-room', {
            admin: true,
            room: currentRoom,
        });
    };

    useEffect(() => {
        fetchAllRooms();
    }, []);

    const fetchAllRooms = async () => {
        const response = await chatServices.get(currentUser.accessToken);

        if (response.status) {
            setRooms(response.data as AllMessagesResponse[]);
            setCurrentRoom((response.data as AllMessagesResponse[])[0]?.roomId);
        }
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

    const handleChangeRoom = (room: number) => {
        socketRef.current?.disconnect();
        setCurrentRoom(room);
        setMessage((prevState) => {
            return {
                ...prevState,
                room: room,
            };
        });
        setUnreadMessage((prevState) => {
            return prevState.filter((unreadRoom) => unreadRoom != room);
        })
    };

    return (
        <div className="d-flex h-100 p-0 admin-chat-container">
            <div className="col-3 rooms-container">
                {rooms.map((room) => {
                    return (
                        <div
                            key={room.roomId}
                            className={`d-flex gap-1 align-items-center room ${
                                currentRoom === room.roomId ? 'active' : ''
                            } ${unreadMessage.includes(room.roomId) ? "unread" : ""}`}
                            onClick={() => handleChangeRoom(room.roomId)}>
                            <Avatar src={room.avatar} sizes="small" />
                            <div>
                                <Typography className="room-name">
                                    {room.name}
                                    {
                                        unreadMessage.includes(room.roomId) && <span className='unread-point'></span>
                                    }
                                </Typography>
                                <Typography variant="body2">
                                    {room.newestMessage.message.substring(0, 25)} {room.newestMessage.message.length > 25 ? "..." : ""} {room.newestMessage.time.split(' ')[0]}
                                </Typography>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="col-9 p-0" style={{ maxHeight: '100%' }}>
                <Stack className="chat-container">
                    <Stack direction="row" className="p-2 chat-header">
                        <div className="d-flex align-items-center gap-1">
                            <Avatar src={messages[0]?.avatar} sizes="small" />
                            <Typography variant="h6">
                                <b>{messages[0]?.name}</b>
                            </Typography>
                        </div>
                    </Stack>
                    <Stack ref={messagesRef} className="h-100 chat-body">
                        {messages.map((message, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`message-container ${
                                        message.role === 'CUSTOMER' ? 'sender' : 'receiver'
                                    }`}>
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
            </div>
        </div>
    );
};
export default AdminChat;
