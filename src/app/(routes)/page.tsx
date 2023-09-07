'use client'
import { addUsers } from "@/app/_context/userSlice"
import { useDispatch, useSelector } from "react-redux"


const userTest = {
  id: 1,
  name: "Nguyen"
}

interface User {
  id: number;
  name: string;
  // Thêm các trường dữ liệu khác tùy ý
}

interface AppState {
  users: User[];
  // Định nghĩa thêm các trường dữ liệu khác nếu cần
}


export default function Home() {
  console.log("render");
  
  const dispatch = useDispatch();
  const users: User[] = useSelector((state: AppState) => state.users);

  const handleClick = () => {
    console.log("click");
    dispatch(addUsers(userTest));
  }

  return (
    <>
      <button onClick={handleClick}>add</button>
      <ul>
        {users && users.map((value, index) => <li key={index}>{value.name}</li>)}
      </ul>
    </>
  )
}

