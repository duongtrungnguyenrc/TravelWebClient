// Produced by Duong Trung Nguyen

'use client'

import "./styles.scss";
import SettingsIcon from '@mui/icons-material/Settings';
import HistoryIcon from '@mui/icons-material/History';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useState } from "react";
import { useRouter } from "next/navigation";
import DeActiveAccountModal from "../DeActiveAccountModal/DeActiveAccountModal";

const SettingSideBar = () => {
    const [currentURL, setCurrentURL] = useState(location.href);
    const [isRemoveAccount, setIsRemoveAccount] = useState<boolean>(false);
    const router = useRouter();

    const handleNavigation = (route: string) => {
        router.push(route);
        setCurrentURL(route);
    }


    

    return (
        <>
            <DeActiveAccountModal isOpen={isRemoveAccount} dismiss={setIsRemoveAccount}/>
            <ul className="list-unstyled setting-nav-list">
                <li className="py-2 heading">
                    <b>Cài đặt chung</b>
                </li>
                <li className={(currentURL.includes("setting") && !currentURL.includes("setting/")) ? "active" : ""}>
                    <a className="text-decoration-none" onClick={() => handleNavigation("/setting")}>
                        <SettingsIcon/>
                        Thông tin cá nhân
                    </a>
                </li>
                <li className={(currentURL.includes("access-history")) ? "active" : ""}>
                    <a className="text-decoration-none"  onClick={() => handleNavigation("/setting/access-history")}>
                        <LockOpenIcon/>
                        Lịch sử truy cập
                    </a>
                </li>
                <li className={(currentURL.includes("booking-history")) ? "active" : ""}>
                    <a className="text-decoration-none" onClick={() => handleNavigation("/setting/booking-history")}>
                        <HistoryIcon/>
                        Lịch sử giao dịch
                    </a>
                </li>
                <hr />
                <li>
                    <a className="text-decoration-none text-danger" onClick={() => setIsRemoveAccount(true)}>
                        Khoá tài khoản
                    </a>
                </li>
            </ul>
        </>
    );
};
export default SettingSideBar;
