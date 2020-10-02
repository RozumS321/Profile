import NavBar from '../components/navbar'
import Main from '../components/main'


export default function Index() {

    return (
        <>
            <div style={{ background: 'url(./header_bg.svg) center 0 no-repeat', }}>

                <NavBar />
                <Main />

            </div>
        </>
    )
}