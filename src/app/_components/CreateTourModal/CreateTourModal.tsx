// Produced by Duong Trung Nguyen

'use client';

import { ChangeEvent, FormEvent, memo, useState } from 'react';
import { Box, Button, LinearProgress, Modal, TextField } from '@mui/material';
import { useDebouncedCallback } from 'use-debounce';
import { authServices } from '@/app/_services';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/_context/store';
import { useRouter } from 'next/navigation';
import { initialState, set } from '@/app/_context/userSlice';
import { toast } from 'react-toastify';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    borderRadius: 3,
    bgcolor: 'background.paper',
    overflow: "hidden"
};

const CreateTourModal = ({ isOpen, dismiss }: { isOpen: boolean; dismiss: Function }) => {
    const currentUser = useSelector((state) => (state as RootState).user);
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const dispath = useDispatch();

    const handlePasswordChange = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }, 300);

    const handleRemoveAccount = async (e: FormEvent<HTMLFormElement>) => {
        setLoading(true);
        const response = await authServices.deactive(password, currentUser.accessToken);
        if(response.status) {
            dismiss(false);
            dispath(set(initialState));
            router.push("/login");
            toast.success("Vô hiệu hóa tài khoản thành công");
        }
        else  {
            toast.error(response.message);
        }
        setLoading(false);
    };

    return (
        <Modal open={isOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
                {
                    loading && <LinearProgress />
                }
                <form method="post" className='p-4' onSubmit={handleRemoveAccount}>
                    <div className="input-group">
                        <label className='mb-1'>Mật khẩu</label>
                        <TextField
                            type="password"
                            name="password"
                            placeholder="Mật khẩu"
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="d-flex justify-content-end gap-1">
                        <Button variant="outlined" type="reset" onClick={() => dismiss(false)}>
                            Hủy
                        </Button>
                        <Button variant="outlined" color="error" type="submit">
                            Vô hiệu hóa
                        </Button>
                    </div>
                </form>
            </Box>
        </Modal>
    );
};
export default memo(CreateTourModal);
