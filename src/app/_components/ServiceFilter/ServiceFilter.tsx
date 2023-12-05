import React, { ChangeEvent, FormEvent, memo, useState } from "react";
import styles from "./ProductsFilter.module.scss";
import classNames from "classnames/bind";
import { Box, Button, Checkbox, Modal } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { AllToursResponse, TourFilter } from "@/app/_types";
import { DatePicker } from "..";
import { useDebouncedCallback } from "use-debounce";
import { tourServices } from "@/app/_services";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 4
};

function ProductsFilter({ page, limit, onFilter, backupData } : { page: number, limit: number, onFilter: Function, backupData?: AllToursResponse }) {

    const [ filter, setFilter ] = useState<TourFilter>(TourFilter.getEmptyInstance());
    const [ activeOptions, setActiveOptions ] = useState<number[]>([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        if(filter.departDate != null || filter.endDate != null) {
            if(filter.departDate != null && filter.endDate != null) {
                setOpen(false);
            }
        }
        else {
            setOpen(false);
        }
    }

    const toggleFilterGroup = (activeOption: number) => {
        setActiveOptions((prevState) => {
            if (prevState.includes(activeOption)) {
                return prevState.filter((option) => option !== activeOption);
            } else {
                return [...prevState, activeOption];
            }
        });
    };

    const handleTimeFilterChange = (year: number, month: number, day: number, key: string) => {
                
        setFilter((prevState) => {
            return {
                ...prevState,
                [key]: `${day}-${month}-${year}`,
            }
        });
    }

    const handleFilterChange = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        if(name.trim() == "fromPrice" || name.trim() == "toPrice" || name.trim() == "star") {
            setFilter((prevState) => ({
                ...prevState,
                [name]: parseFloat(value),
            }));
        }
        else {
            setFilter((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    });

    const fetchAllTours = async (page: number) => {
        const response = await tourServices.getAllTours(page, 21);
    
        if (response.status) {
          onFilter(response.data as AllToursResponse);
        }
        else {
          toast.error(response.message);
        }
    };

    const handleApplyFilter = async (e: FormEvent) => {
        e.preventDefault();

        const response = await tourServices.filter(page, limit, filter);
        if(response.status) {
            onFilter(response.data as AllToursResponse);
        }
        else {
            toast.error(response.message);
        }
    }

    const handleResetFilter = () => {        
        backupData ? onFilter(backupData) : fetchAllTours(page);
    }

    const currentDate = new Date();
    
    return ( 
        <div className={cx("side-bar")}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style} className={cx("schedule-picker")}>
                    <DatePicker valueKey="departDate" title="Ngày đi" displayDate={(filter.departDate) || ""} onChange={handleTimeFilterChange}/>
                    <DatePicker valueKey="endDate" title="Ngày về" displayDate={filter.endDate || ""} onChange={handleTimeFilterChange}/>
                </Box>
            </Modal>
            <form method="post" onSubmit={handleApplyFilter}>
                    <ul>
                        <li>
                            <p className={cx({"active" : activeOptions?.includes(0)})}>Đánh giá
                                <button type="button" onClick={() => toggleFilterGroup(0)}>
                                    <span className={cx("show-icon")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                        </svg>
                                    </span>
                                    <span className={cx("hide-icon")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                                        </svg>
                                    </span>
                                </button>
                            </p>
                            <div className={cx("sub-list-side")}>
                                {
                                    [1, 2, 3, 4, 5].map((star) => {                                    
                                        return  <label key={star} className={cx("item-sub-list")}>
                                                    <input className="field-cat" type="radio" name="star" value={ star } onChange={handleFilterChange}/>
                                                    <span>{ star } <StarIcon fontSize="small"/></span>
                                                </label>
                                    })

                                }
                            </div>
                        </li>
                        <li>
                            <p className={cx({"active" : activeOptions?.includes(1)})}>Thời gian
                                <button type="button" onClick={() => toggleFilterGroup(1)}>
                                    <span className={cx("show-icon")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                        </svg>
                                    </span>
                                    <span className={cx("hide-icon")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                                        </svg>
                                    </span>
                                </button>
                            </p>
                            <div className={cx("sub-list-side")}>
                                <Button className={cx("date-group")} onClick={ handleOpen }>
                                    <CalendarMonthIcon fontSize="small"/>
                                    <span>{ (filter?.departDate || currentDate.toLocaleDateString("vn")) } </span> - 
                                    <span>{(filter?.endDate || currentDate.toLocaleDateString("vn")) }</span>
                                </Button>
                            </div>
                        </li>
                        <li>
                            <p className={cx({"active" : activeOptions?.includes(2)})}>Mức giá
                                <button type="button" onClick={() => toggleFilterGroup(2)}>
                                    <span className={cx("show-icon")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                        </svg>
                                    </span>
                                    <span className={cx("hide-icon")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                                        </svg>
                                    </span>
                                </button>
                            </p>
                            <div className={cx("sub-list-side")}>
                                <div className={cx("range-price")}>
                                    <div className="d-flex mt-3">
                                        <input type="range" name="fromPrice" className="w-100 form-range" min={0} max={5000000} onChange={handleFilterChange}/>
                                        <input type="range" name="toPrice" className="w-100 form-range" min={0} max={5000000} onChange={handleFilterChange}/>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <span>{ filter?.fromPrice?.toLocaleString("vn") || 0 }</span>
                                        <span>{filter?.toPrice?.toLocaleString("vn") || 10000000 }</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <p className={cx({"active" : activeOptions?.includes(3)})}>Hạng vé
                                <button type="button" onClick={() => toggleFilterGroup(3)}>
                                    <span className={cx("show-icon")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                        </svg>
                                    </span>
                                    <span className={cx("hide-icon")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                                        </svg>
                                    </span>
                                </button>
                            </p>
                            <div className={cx("sub-list-side", "flex-column")}>
                                <label className="d-flex align-items-center gap-2">
                                    <Checkbox size="small" name="type" value="SAVING"/>
                                    Tiết kiệm
                                </label>
                                <label className="d-flex align-items-center gap-2">
                                    <Checkbox size="small" name="type" value="POPULAR"/>
                                    Phổ thông
                                </label>
                                <label className="d-flex align-items-center gap-2">
                                    <Checkbox size="small" name="type" value="SPECIAL"/>
                                    Đặc biệt
                                </label>
                            </div>
                        </li>
                    </ul>
                    <div className={cx("btn-group")}>
                        <Button variant="contained" type="reset" onClick={handleResetFilter}>Bỏ lọc</Button>
                        <Button variant="contained" type="submit">Lọc</Button>
                    </div>
            </form>
        </div>
    );
}

export default memo(ProductsFilter);