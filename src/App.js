import './App.css';
import Navbar from './Navbar'
import {AiFillGithub, AiFillInstagram, AiFillMail, AiFillEnvironment, AiFillPhone} from 'react-icons/ai'
import { BsTelegram } from "react-icons/bs";


const openUrl = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}
/*Автономная система для школьных звонков. Работает на Raspberry Pi. Имеет веб адаптивный веб-интерфейс с возможностью изменять расписание, загружать и изменять мелодии звонка, а так же следить за состоянием системы. Сейчас работает 24/7 в одной школе без сбоев. Планируется расширить на комплекс школ.*/
function App() {
  return (
    <main className='px-8 md:px-20 lg:px-40'>
    
    <Navbar />

    <section id='home' className='min-h-screen text-center mt-4 flex flex-col justify-center '>
        <img src='/avatar.png' layout="fill" objectFit="cover" className="mx-auto rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2" alt="avatar"/>
        <h1 className='text-3xl md:text-5xl font-medium text-blue-500'>Stephan Zhdanov</h1>
        <h3 className='text-xl md:text-2xl'>Software Engineer</h3>
        <p className='text-md py-1 text-gray-800 md:text-xl'>Interesetd in: Machine Learning, Data Science, Computer Vision, Microcontrollers Firmware Development, Web Backend. Learning web FrontEnd via study projects. I advocate open source and develop open source projects myself.</p>
        <div className='text-5xl py-4 flex justify-center gap-10'>
          <AiFillGithub className='text-gray-500 hover:text-gray-900 cursor-pointer' onClick={() => {openUrl("https://github.com/ret7020")}}/>
          <BsTelegram className='text-gray-500 hover:text-blue-500 cursor-pointer'onClick={() => {openUrl("https://t.me/Rtyrdv")}}/>
        </div>
    </section>

    <section id='service' className=''>
      <h1 className='text-xl font-medium'>Techical Stack</h1>
      <p className='mt-1 text-md'>I have experience in building FullStack REST-API web applications, low level Arduino-RaspberryPI communication framework, machine-learning applications(images, audio, nlp)</p>

      <div className='mt-4 flex flex-col md:flex-row gap-8'>
        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='python.png' className='w-48' alt='python' />
          <h2 className='text-xl'>Python</h2>
          <p className='text-gray-500'>Develop neural networks, web backend, IoT high level software, data analyze, telegram bots.</p>
          <p className='text-xl '>Main Frameworks/tools</p>
          <ul>
            <li>FastAPI</li>
            <li>Flask</li>
            <li>Sqlalchemy</li>
            <li>OpenCV</li>
            <li>PyTorch</li>
            <li>SkLearn</li>
            <li>Yolo</li>
            <li>Matplotlib + Pandas</li>
            <li>Aiogram</li>
          </ul>
        </div>

        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='web.png' className='w-48' alt='gambar' />
          <h2 className='text-xl'>Web</h2>
          <p className='text-gray-500'>FullStack web development(learning modern FrontEnd now).</p>
          <p className='text-xl'>Main Frameworks/tools</p>
          <ul>
            <li>ReactJS</li>
            <li>Ant design</li>
            <li>Tailwind CSS</li>
            <li>React Router Dom</li>
            <li>Pure JS, HTML5, CSS3</li>
            <li>Figma</li>
          </ul>
        </div>

        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='ops.png' className='w-48' alt='gambar' />
          <h2 className='text-xl'>System Administration/DevOPS</h2>
          <p className='text-gray-500'>Hate Windows, use Linux everytime...</p>
          <p className='text-xl '>Tools</p>
          <ul>
            <li>Arch based + Debian based</li>
            <li>GitHub Actions CI</li>
            <li>Docker</li>
          </ul>
        </div>

      </div>

    </section>

    <section id='portfolio' className='mt-10'>
      <h1 className='text-xl font-medium'>Portfolio</h1>
      <p className='mt-1 text-md'>Some projects that I developed alone.</p>
      <div className='mt-4 flex flex-col md:flex-row gap-8'>
      <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='ProjectsPreviews/school_bells.png' className='w-100' alt='school_bells' />
          <h2 className='text-xl'>Autonomus Bells System</h2>
          <AiFillGithub className='text-lg text-gray-500 hover:text-gray-900 cursor-pointer items-center text-center' onClick={() => {openUrl("https://github.com/ret7020/SchoolBellProject")}}/>
          <p className='text-gray-500'>Offline system for school bells. Powered by Raspberry Pi. It has a web adaptive web interface with the ability to change the schedule, download and change ringtones, as well as monitor the system status. Now works 24/7 in one school without failures. It is planned to expand to a school complex.</p> 
          <p className='text-xl '>Built with</p>
          <ul>
            <li>Flask</li>
            <li>SQLite</li>
            <li>Jinja2</li>
            <li>Bootstrap</li>
            <li>Pure JS</li>
          </ul>
        </div>
        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='ProjectsPreviews/web_robo_block.png' className='w-100' alt='python' />
          <h2 className='text-xl'>Python</h2>
          <p className='text-gray-500'>Develop neural networks, web backend, IoT high level software, data analyze, telegram bots.</p>
          <p className='text-xl '>Main Frameworks/tools</p>
          <ul>
            <li>FastAPI</li>
            <li>Flask</li>
            <li>Sqlalchemy</li>
            <li>OpenCV</li>
            <li>PyTorch</li>
            <li>SkLearn</li>
            <li>Yolo</li>
            <li>Matplotlib + Pandas</li>
            <li>Aiogram</li>
          </ul>
        </div>
      </div>
      
    </section>

    

    <section id="footer" className='mt-5 rounded bg-black py-8 px-8'>
      <div className='text-white md:text-center'>
        <h1 className='font-medium text-lg'>Contact Me</h1>
        <p>Data to contact me</p>

        <ul className='md:flex justify-center gap-4'>
          <li className='flex items-center gap-2'>
            <AiFillMail />
            <p>step.zhdanoff2016@yandex.ru</p>
          </li>
          <li className='flex items-center gap-2'>
            <AiFillEnvironment />
            <p>Russia, Moscow</p>
          </li>
          <li className='flex items-center gap-2'>
            <AiFillPhone/>
            <p>+7(910)-XXX-XX-XX</p>
          </li>
        </ul>

        <div className='flex text-xl text-white gap-4 mt-2 md:justify-center'>
          <AiFillGithub className='text-white-500 hover:text-gray-400 cursor-pointer' onClick={() => {openUrl("https://github.com/ret7020")}}/>
          <BsTelegram className='text-white-500 hover:text-gray-400 cursor-pointer' onClick={() => {openUrl("https://t.me/Rtyrdv")}}/>
          <AiFillInstagram className='text-white-500 hover:text-gray-400 cursor-pointer' onClick={() => {openUrl("https://instagram.com/stephan.zhdanov")}}/>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>

        <p className="text-center text-sm text-gray-300 sm:text-center">
          © 2023
          <a href="https://github.com/ret7020"> Developed by @ret7020</a>.
        </p>

      </div>
      
    </section>

    </main>
  );
}

export default App;
