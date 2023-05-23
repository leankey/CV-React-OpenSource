import React, { useEffect } from "react";
import Header from "./components/Header";
import './css/main.css';
import BodyStart from "./components/BodyStart";
import BodyAboutMe from "./components/bodyAboutMe";
import BodySkills from "./components/bodySkills";
import BodyLanguages from "./components/bodyLanguages";
import BodyEducation from "./components/bodyEducation";
import AOS from 'aos';
import 'aos/dist/aos.css';

  

function App() {
   useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      const handleGithubBtnClick = () => {
        window.open("https://github.com/leankey?tab=repositories", "_blank");
      };

    return (
      <div>
        
        <Header Name="Ciornii Andrei" />

        <div data-aos="zoom-in-up" data-aos-duration="1000">
        <BodyStart  background="https://content.r9cdn.net/rimg/dimg/61/8e/45db2363-city-12658-16510570590.jpg?crop=true&width=1366&height=768&xhint=1926&yhint=1698"
        myPhoto="https://i.ibb.co/Dg7bc2d/profile.png"
        name="Ciornii Andrei"
        role="UI-Designer and front-end developer"
        inst="https://www.instagram.com/leankey.exe/"
        telegram="https://t.me/leankey"
        github="https://github.com/leankey"
        linkedin=""/>
        </div>
        <div className="content-container">


        <div data-aos="fade-right" data-aos-duration="1500" className="container">
        <BodyAboutMe  data-aos="fade-right" 
         AboutMeDescription="Hello! I'm Andrei Ciornii, a UI Designer and front-end developer with no experience in an IT company. I'm dedicated to honing my craft and have excellent interpersonal skills. I'm proficient in Photoshop, a valuable tool in my arsenal. With my fast learning abilities, I am prepared to be an efficient and promising asset to any company."
         age="18"
         email="ciorniiandrei373@gmail.com"
         phone="+37379806599"
         adress="Moldova, Chisinau"
         /></div>

         
         <div data-aos="fade-left" data-aos-duration="1500" className="container">
        <BodySkills > </BodySkills>
        </div>

        <div data-aos="flip-down" data-aos-duration="1500" className="container">
        <BodyLanguages ></BodyLanguages>
        </div>

        <div data-aos="flip-down" data-aos-duration="1500" className="container">
        <BodyEducation  ></BodyEducation>
        </div>

        <div className="container" data-aos="zoom-in-down" data-aos-duration="1500" id="Portfolio">
          <h1 className="item-header">Portfolio</h1>
          <p className="note-div">Although I do not have prior professional experience in an IT company or real-world projects, I have gained valuable practical knowledge through my learning process. I have actively worked on various projects, which can be found on my GitHub profile. I am confident in my ability to leverage my theoretical knowledge and hands-on projects . I am eager to embark on new challenges and continue growing as a professional in the IT field.
          </p>
          <button type="button" className="yellow-btn"  onClick={() => handleGithubBtnClick()}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg> Visit GitHub</button>
         
        </div>

        </div>
      </div>
    );
  

    
}



export default App;
