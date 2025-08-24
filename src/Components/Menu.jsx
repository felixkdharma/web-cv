import Star from './LandPage.jsx';
import LandPage from './LandPage.jsx';
import Chapter1 from './Chapter1.jsx';
import Chapter2 from './Chapter2.jsx';

function Menu() {

    return (
        <div>
            <section id='landpage'>
                <LandPage />
            </section>
            <Chapter1
                section="chapter1"
                title="CHAPTER 1"
                subtitle="Introduction"
                description="Hello, My Name is Felix Kurniawan Dharma. 
                You can call me Felix. This is a little journey about me.
                What my background is and about my life."
            />
            <Chapter2 
                title="CHAPTER 2"
                subtitle="The Beginning"
            />
        </div>
    );
}

export default Menu;