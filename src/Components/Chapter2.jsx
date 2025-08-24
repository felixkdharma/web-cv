import { Card } from '@mui/material';
import '../styles/chapter2.css';
import '../styles/chapter1.css';
import CardSchool from './CardSchool.jsx';

function Chapter2(props) {

    const goToChapter1 = () => {
        window.scrollTo({
            top: document.getElementById('chapter1').offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <section id="chapter2">

            <div className='previous-button-container'>
                <div className='bounce-up'>
                    <img style={{ cursor: 'pointer' }} onClick={goToChapter1} className='rotate-image' src='/arrowup.png' alt='arrowhead' />
                    <h3 style={{
                        color: '#ffeb00',
                        fontFamily: "'Press Start 2P, system-ui'",
                        padding: 0,
                        margin: 0,
                        position: 'absolute',
                        left: -0.2 + 'vw',
                    }}> TITLE </h3>
                </div>
            </div>

            <div className='container'>
                <h1> {props.title} </h1>
                <h2> {props.subtitle}</h2>

                <div className='content-container'>

                    <CardSchool
                        title="SENIOR HIGH SCHOOL"
                        subtitle="SMAK BPK PENABUR BANDAR LAMPUNG"
                        point1="Graduated in 2018"
                        point2="Student at Science Major"
                        point3="Active in extracurricular activities and Student Council"
                    />

                </div>
            </div>
        </section>
    )
}

export default Chapter2;