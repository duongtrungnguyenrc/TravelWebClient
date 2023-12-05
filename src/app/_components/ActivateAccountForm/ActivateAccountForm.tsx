'use client';

import { ChangeEvent, useEffect, useRef, useState } from 'react';
import './styles.scss';
import { Box, LinearProgress, Modal, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    borderRadius: 3,
    bgcolor: 'background.paper',
    overflow: 'hidden',
};

const ActivateAccount = ({ onFilled }: { onFilled: Function }) => {
    const [activateCode, setActivateCode] = useState<string>('');
    const [open, setOpen] = useState<boolean>(true);
    const [resultStatus, setResultStatus] = useState<boolean | null>(null);
    const [onProgress, setOnProgress] = useState<boolean>(false);
    const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(6).fill(null));

    const router = useRouter();
    const timeoutRef = useRef<any>(null);

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    useEffect(() => {
        const handleActivateAccount = async () => {
            setOnProgress(true);

            const result = await onFilled(activateCode);

            setOnProgress(false);

            if (result) {
                setResultStatus(true);
                timeoutRef.current = setTimeout(() => {
                    setOpen(false);
                    router.push('/login');
                }, 600);
            } else {
                setResultStatus(false);
                timeoutRef.current = setTimeout(() => {
                    setActivateCode('');
                    setResultStatus(null);
                }, 600);
            }
        };

        activateCode.length >= 6 && handleActivateAccount();

        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [activateCode]);

    const handleChange = async (
        e: ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const { value } = e.target;

        if (activateCode.length < 6) {
            setActivateCode((prevState) => {
                return prevState + value;
            });

            if (value !== '' && index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
                <div
                    className={
                        'activate-account-site flex-column flex-center ' +
                        (resultStatus === false ? 'ring' : '')
                    }>
                    <div className="d-flex activate-account-form">
                        {Array.from({ length: 6 }, (_, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type="number"
                                value={activateCode[index] || ''}
                                onChange={(e) => handleChange(e, index)}
                                maxLength={1}
                                disabled={onProgress}
                            />
                        ))}
                    </div>
                    {resultStatus === null ? (
                        <Typography variant="body2" className="mt-4">
                            VUI LÒNG NHẬP MÃ XÁC NHẬN ĐƯỢC GỬI VỀ EMAIL
                        </Typography>
                    ) : resultStatus === false ? (
                        <Typography
                            variant="body2"
                            className="mt-4 text-danger">
                            MÃ XÁC NHẬN KHÔNG CHÍNH XÁC!
                        </Typography>
                    ) : (
                        <Typography
                            variant="body2"
                            className="mt-4 text-success">
                            XÁC THỰC THÀNH CÔNG!
                        </Typography>
                    )}
                </div>
                {onProgress && <LinearProgress />}
            </Box>
        </Modal>
    );
};

export default ActivateAccount;
