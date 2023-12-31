import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';

const navigations = [
    {
        name: "Bảng điều khiển",
        path: "/admin",
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z"/>
            </svg>
        )
    },
    {
        name: "Quản lý tour",
        path: "/admin/trip",
        icon: CalendarMonthOutlinedIcon
    },
    {
        name: "Diễn đàn",
        path: "/admin/blog",
        icon: WysiwygIcon
    },
    {
        name: "Hỗ trợ",
        path: "/admin/support",
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h1zM4 8h12v8h-5.277L7 18.234V16H4V8z"></path><path d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"/>
            </svg>
        )
    },
]

export default navigations;