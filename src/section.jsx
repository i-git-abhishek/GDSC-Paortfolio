import Abhishek from "./assets/abhishek.jpg"
function Section() {
    return (
        <>
            <section class="home" id="home">
                <div class="home-img">
                    <img src={Abhishek} alt="Abhishek's Profile Image"/>
                </div>

                <div class="home-content">
                    <h1>Hi! I'm <span>Abhishek</span></h1>
                    <h3 class="typing-text">I'm a <span>Software Developer</span></h3>
                    <p>I'm a second-year Computer Science student at DTU, passionate about web development and constantly learning
                        new technologies. Currently a member of GDSC, I look forward to contributing to exciting projects!</p>
                    <a href="#socials" class="btn">Follow me on Socials</a>
                </div>
            </section>
        </>

    )
}

export default Section