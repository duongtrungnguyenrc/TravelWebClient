import { Button } from '@mui/material';
import './styles.scss';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import Link from 'next/link';

const ForbiddenStatus = () => {
    return (
        <div className="forbidden-status flex-center flex-column">
            <div className="lock-wrapper">
                <LockPersonIcon sx={{fontSize: 150}}/>
            </div>
            <div className="message text-center">
                <h1>Quyền truy cập vào trang này bị hạn chế</h1>
                <p>Tài khoản của bạn không có quyền truy cập vào trang này.</p>
            </div>
            <Link href="/" className='mt-4 link'>
                Trở về trang chủ
            </Link>
        </div>
    );
};
export default ForbiddenStatus;
