import Star from './LandPage.jsx';
import LandPage from './LandPage.jsx';
import Chapter1 from './Chapter1.jsx';
import Chapter2 from './Chapter2.jsx';
import Chapter3 from './Chapter3.jsx';

function Menu() {

    return (
        <div>
            <LandPage />
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

            <Chapter3
                title="CHAPTER 3"
                subtitle="Next Step" />
        </div>
    );
}

export default Menu;