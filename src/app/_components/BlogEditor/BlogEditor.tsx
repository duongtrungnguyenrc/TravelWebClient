'use client';

import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Divider,
    List,
    ListItem,
    Modal,
    Stack,
    TextField,
    Typography,
    styled,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './styles.scss';
import { useDebouncedCallback } from 'use-debounce';
import { ChangeEvent, ReactEventHandler, useRef, useState } from 'react';
import { AllBlogsResponse, CreateBlogPostRequest } from '@/app/_types';
import { Paragraph } from '@/app/_types/request/CreateBlogPostRequest';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/_context/store';
import ImageIcon from '@mui/icons-material/Image';
import { CircularProgress } from '..';
import paragraphLayouts, { BlogParagraphLayoutTextOnly } from '../BlogParagraphLayout/BlogParagraphLayout';
import { toast } from 'react-toastify';
import { blogServices } from '@/app/_services';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '5px',
    height: 600,
    p: 4,
};

const BlogEditor = ({ data }: { data: AllBlogsResponse }) => {
    const currentUser = useSelector((state) => (state as RootState).user);
    const [post, setPost] = useState<CreateBlogPostRequest>(
        CreateBlogPostRequest.getEmptyInstance(currentUser.user?.fullName)
    );
    const [postImages, setPostImages] = useState<{ src: string; name: string; resource: File | null }[]>([]);
    const [modifyParagraph, setModifyParagraph] = useState<number>(-1);
    const [progress, setProgress] = useState(0);

    const quillRef = useRef<ReactQuill | null>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const previewRef = useRef<HTMLDivElement>(null);

    const handleContentChange = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setPost((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    }, 300);

    const handleParagraphContentChange = useDebouncedCallback((value) => {
        setPost((prevState) => {
            const lastParagraphIndex = prevState.paragraphs.length - 1;
            const updatedParagraphs = [...prevState.paragraphs];

            if (lastParagraphIndex >= 0) {
                const lastParagraph = updatedParagraphs[lastParagraphIndex];

                updatedParagraphs[lastParagraphIndex] = {
                    ...lastParagraph,
                    content: value,
                };
            }

            return {
                ...prevState,
                paragraphs: updatedParagraphs,
            };
        });
    }, 300);

    const handleAddParagraph = (newParagraph: Paragraph) => {
        setPost((prevState) => {
            return {
                ...prevState,
                paragraphs: [...prevState.paragraphs, newParagraph],
            };
        });

        setModifyParagraph(post.paragraphs.length);
        setOpen(false);
        quillRef?.current?.getEditor().setText('');

        if (previewRef.current) {
            previewRef.current.scrollTop = previewRef.current.scrollHeight;
        }

        setPostImages((prevState) => [...prevState, { src: '', name: '', resource: null }]);
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        const file = files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onprogress = (event) => {
                const percent = (event.loaded / event.total) * 100;
                setProgress(percent);
            };

            reader.onload = (event: ProgressEvent<FileReader>) => {
                setProgress(100);
                setPostImages((prevState) => {
                    if (prevState.length <= 1) {
                        return [
                            ...prevState,
                            {
                                src: event.target?.result + '',
                                name: file.name,
                                resource: file,
                            },
                        ];
                    } else {
                        const updatingPostImagesIndex = post.paragraphs.length;
                        const updatedPostImages = [...prevState];

                        if (post.paragraphs[updatingPostImagesIndex - 1].hasImage) {
                            updatedPostImages[updatingPostImagesIndex] = {
                                src: event.target?.result + '',
                                name: file.name,
                                resource: file,
                            };
                        }

                        return updatedPostImages;
                    }
                });
            };

            reader.readAsDataURL(file);
        }
    };

    const handleCreatePost: ReactEventHandler = async (e) => {
        e.preventDefault();

        const response = await toast.promise(blogServices.create(post, postImages, currentUser.accessToken), {
            pending: 'Đang xử lý...',
            success: 'Thêm bài viết thành công',
        });

        if (response.status) {
            setPost(CreateBlogPostRequest.getEmptyInstance());
            setPostImages([]);
            formRef?.current?.reset();
            quillRef?.current?.getEditor().setText('');
        } else {
            toast.error(response.message);
        }
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <b>CHỌN BỐ CỤC:</b>
                    </Typography>
                    <div className="paragraph-layout-list py-3">
                        {paragraphLayouts.map((LayoutComponent, index) => {
                            return (
                                <>
                                    <Typography variant="h6" className="mt-3 mb-2">
                                        <b>Bố cục {index + 1}</b>
                                    </Typography>
                                    <LayoutComponent
                                        onClick={() => {
                                            LayoutComponent === BlogParagraphLayoutTextOnly
                                                ? handleAddParagraph(
                                                      new Paragraph(post.paragraphs.length, '', '', index, false)
                                                  )
                                                : handleAddParagraph(
                                                      new Paragraph(post.paragraphs.length, '', '', index, true)
                                                  );
                                        }}
                                    />
                                    <hr />
                                </>
                            );
                        })}
                    </div>
                </Box>
            </Modal>
            <Stack direction="row" className="h-100 p-3 blog-editor-site">
                <List className="col-4 p-0 h-100 blog-post-list" style={{ overflowY: 'scroll' }}>
                    {data?.posts.map((post) => {
                        return (
                            <ListItem>
                                <Card className="d-flex w-100 gap-1 rounded" sx={{ boxShadow: 'none' }}>
                                    <CardMedia
                                        component="img"
                                        loading="lazy"
                                        alt={post.title}
                                        image={post.img}
                                        className="p-2 rounded"
                                        sx={{ maxWidth: '100px', height: '140px' }}
                                    />
                                    <CardContent className="p-0 d-flex flex-column justify-content-center">
                                        <Chip
                                            label={post.type}
                                            style={{ borderRadius: '3px', width: 'max-content', fontSize: '12px' }}
                                            size="small"
                                        />
                                        <Typography noWrap variant="h6" component="h6" className="mt-2" fontSize={14}>
                                            {post.title}
                                        </Typography>
                                        <Typography
                                            display="flex"
                                            variant="body2"
                                            color="text.secondary"
                                            marginBottom="10px"
                                            fontSize="12px"
                                            alignItems="center"
                                            gap="5px"
                                            className="mt-2">
                                            {post.author} | <CalendarTodayIcon sx={{ fontSize: '12px' }} />{' '}
                                            {post.time.split(' ')[0]}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </ListItem>
                        );
                    })}
                </List>
                <div className="col-8 pr-0">
                    <div className="h-100 p-3" style={{ background: '#fff' }}>
                        <h3>Xem trước:</h3>
                        <Divider />
                        <div ref={previewRef} className="preview">
                            <div className="default-preview">
                                {post?.type == '' ? (
                                    <div className="default-preview-tag" />
                                ) : (
                                    <Chip label={post.type} size="small" className="rounded" />
                                )}

                                {post?.title == '' ? (
                                    <div className="default-preview-title mt-2"></div>
                                ) : (
                                    <Typography variant="h5" className="mt-2">
                                        <b>{post.title}</b>
                                    </Typography>
                                )}

                                <div className="default-preview-author mt-3">
                                    <Avatar />
                                    <div className="author-name">
                                        {post.author} {new Date().toLocaleString('vn')}
                                    </div>
                                </div>

                                {post.title && post.author && post.type && (
                                    <div className="default-preview-thumnail mt-3">
                                        {postImages[0] ? (
                                            <img src={postImages[0].src} alt="Uploaded" />
                                        ) : progress > 0 && progress < 100 ? (
                                            <CircularProgress value={progress} />
                                        ) : (
                                            <ImageIcon sx={{ fontSize: '150px', color: '#e6e6e7' }} />
                                        )}
                                    </div>
                                )}

                                {post.paragraphs.map((paragraph, index) => {
                                    const Element = paragraphLayouts[paragraph.layout];
                                    return (
                                        <Element
                                            key={index}
                                            paragraph={paragraph as Paragraph}
                                            image={paragraph.hasImage ? postImages[index + 1]?.src : ''}
                                            acceptModify
                                        />
                                    );
                                })}
                                {
                                    <section className="blog-editor">
                                        <form ref={formRef} method="post" onSubmit={handleCreatePost}>
                                            {post.author && post.title && post.type && postImages[0] ? (
                                                <div className="input-group">
                                                    <label>Nội dung bài viết:</label>
                                                    <ReactQuill
                                                        ref={quillRef}
                                                        className="content-editor"
                                                        theme="snow"
                                                        onChange={handleParagraphContentChange}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="heading-editor">
                                                    <div className="input-group">
                                                        <label>Tiêu đề bài viết:</label>
                                                        <TextField
                                                            name="title"
                                                            onChange={handleContentChange}
                                                            placeholder="Tiêu đề"
                                                        />
                                                    </div>
                                                    <div className="multi-group">
                                                        <div className="input-group">
                                                            <label>Tên tác giả:</label>
                                                            <TextField
                                                                name="author"
                                                                onChange={handleContentChange}
                                                                defaultValue={currentUser?.user?.fullName}
                                                                placeholder="Tên tác giả"
                                                            />
                                                        </div>
                                                        <div className="input-group">
                                                            <label>Danh mục bài viết:</label>
                                                            <TextField
                                                                name="type"
                                                                onChange={handleContentChange}
                                                                placeholder="Danh mục"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {post.author && post.title && post.type && postImages[0] ? (
                                                <div className="d-flex justify-content-center gap-1 mt-5">
                                                    <Button type="reset" color="error" variant="contained">
                                                        HỦY
                                                    </Button>
                                                    <Button
                                                        component="label"
                                                        variant="contained"
                                                        startIcon={<CloudUploadIcon />}>
                                                        Chèn ảnh
                                                        <VisuallyHiddenInput
                                                            type="file"
                                                            accept=".png,.jpg,.jpeg,.JPEG"
                                                            onChange={handleFileChange}
                                                        />
                                                    </Button>
                                                    <Button
                                                        type="button"
                                                        color="primary"
                                                        variant="contained"
                                                        onClick={handleOpen}
                                                        disabled={postImages.length === 0}>
                                                        THÊM NỘI DUNG
                                                    </Button>
                                                    <Button
                                                        type="submit"
                                                        color="primary"
                                                        variant="contained"
                                                        disabled={post.paragraphs.length == 0 || !postImages?.[0]}>
                                                        LƯU
                                                    </Button>
                                                </div>
                                            ) : (
                                                <div className="d-flex justify-content-center my-3">
                                                    <Button
                                                        component="label"
                                                        variant="contained"
                                                        startIcon={<CloudUploadIcon />}>
                                                        Chèn ảnh
                                                        <VisuallyHiddenInput
                                                            type="file"
                                                            accept=".png,.jpg,.jpeg,.JPEG"
                                                            onChange={handleFileChange}
                                                        />
                                                    </Button>
                                                </div>
                                            )}
                                        </form>
                                    </section>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Stack>
        </>
    );
};
export default BlogEditor;
