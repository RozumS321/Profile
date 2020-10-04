import Header from "../components/header";
import Main from "../components/main";
import { useDispatch } from "react-redux";
import { useEffect } from 'react'
import * as constants from '../redux/constants'


export default function Page() {
  const dispatch = useDispatch()

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user) return;

    const profileData = JSON.parse(user);
    dispatch({
      type: constants.SET_PROFILE_DATA,
      data: profileData
    })
  }, [])

  return (
    <div style={{ background: "url(./header_bg.svg) center 0 no-repeat" }}>
      <Header />
      <Main />
    </div>
  );
}
