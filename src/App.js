import "./App.css";
import Navbar from "./Navbar";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
  AiFillEnvironment,
  AiFillPhone,
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { useState } from "react";

const openUrl = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
function App() {
  const [lang, setLang] = useState("en");
  const PROJECTS = [
    {
      preview: "ProjectsPreviews/school_bells.png",
      title: [
        "Autonomus School Bells System",
        "Автономная система школьных звонков",
      ],
      url: "https://github.com/ret7020/SchoolBellProject",
      about: [
        "Autonomus system for school bells. Powered by Raspberry Pi. It has a web adaptive web interface with the ability to change the schedule, download and change ringtones, as well as monitor the system status. Now works 24/7 in one school without failures. It is planned to expand to a school complex.",
        "Автономная система для школьных звонков. Работает на Raspberry Pi. Имеет веб адаптивный веб-интерфейс с возможностью изменять расписание, загружать и изменять мелодии звонка, а так же следить за состоянием системы. Сейчас работает 24/7 в одной школе без сбоев. Планируется расширить на комплекс школ.",
      ],
      stack: ["Flask", "SQLite", "Jinja2", "Bootstrap", "Pure JS"],
    },
    {
      preview: "ProjectsPreviews/web_robo_block.png",
      title: [
        "Web Robo-Block",
        "Веб Robo-Block",
      ],
      url: "https://github.com/ret7020/WebRoboBlock",
      about: [
        "IDE for visual programming of robots on a special framework. A special educational robot consists of motors, servos, IR sensors connected to Arduino. The Raspberry PI controls the hardware via the Arduino, communicating with it via SPI. This IDE runs on the Raspberry PI. There is support for launching with ngrok and displaying video from the usb / csi camera on the robot",
        "IDE для визуального программирования роботов на специальном фреймворке. Специальный учебный робот состоит из двигателей, серво-приводов, ИК датчиков, подключённых к Arduino. Raspberry PI управляет 'железом' через Arduino, общаясь с ней через SPI. На Raspberry PI запускается данная IDE. Есть поддержка запуска с ngrok и отображение видео с usb/csi камеры на роботе",
      ],
      stack: ["Flask", "Pure JS", "Pure CSS", "SpiDev", "PyNgrok", "OpenCV", "pyTelegramBotAPI"],
    },
    {
      preview: "ProjectsPreviews/gpt3_ru_tg_chatbot.png",
      title: [
        "Ru GPT 3 ChatBot in TG",
        "Русский GPT 3 чат бот в телеграм",
      ],
      url: "https://github.com/ret7020/RuChatGPT",
      about: [
        "This chat bot tries to replicate the communication style of people from my chats. Chats were taken from VK and Telegram. For VK, a special collector was written through their api. Telegram bot on the aiogram framework is used as an interface for the bot",
        "Данный чат бот пытается повторить стиль общения людей из моих чатов. Чаты брались из вк и телеграм. Для вк был написан специальный сборщик через их апи. В качестве интерфейса для бота используется телеграм бот на фреймворке aiogram",
      ],
      stack: ["PyTorch", "Requests", "Aiogram", "Transformers"],
    }
  ];
  
  return (
    <main className="px-8 md:px-20 lg:px-40">
      <Navbar lang={lang} setLang={setLang} />

      <section
        id="home"
        className="min-h-screen text-center mt-4 flex flex-col justify-center "
      >
        <img
          src="avatar.png"
          layout="fill"
          objectFit="cover"
          className="mx-auto rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2"
          alt="avatar"
        />
        <h1 className="text-3xl md:text-5xl font-medium text-blue-500">
          {lang === "en" ? "Stephan Zhdanov" : "Степан Жданов"}
        </h1>
        <h3 className="text-xl md:text-2xl">
          {lang === "en" ? "Software Engineer" : "Инженер-программист"}
        </h3>
        <p className="text-md py-1 text-gray-800 md:text-xl">
          {lang === "en"
            ? "Interesetd in: Machine Learning, Data Science, Computer Vision, Microcontrollers Firmware Development, Web Backend. Learning web FrontEnd via study projects. I advocate open source and develop open source projects myself. True linux user!"
            : "Интересы: Машинное обучение, большие данные, компьютерное зрение, разработка под микроконтроллеры, бэкэнд веб-приложений. Изучаю фронтэнд разработку. Поддерживаю проекты с открым исходным кодом и сам их разрабатываю. Настоящий фанат Linux."}
        </p>
        <div className="text-5xl py-4 flex justify-center gap-10">
          <AiFillGithub
            className="text-gray-500 hover:text-gray-900 cursor-pointer"
            onClick={() => {
              openUrl("https://github.com/ret7020");
            }}
          />
          <BsTelegram
            className="text-gray-500 hover:text-blue-500 cursor-pointer"
            onClick={() => {
              openUrl("https://t.me/Rtyrdv");
            }}
          />
        </div>
      </section>

      <section id="service" className="">
        <h1 className="text-xl font-medium">
          {lang === "en" ? "Techical Stack" : "Технологии"}
        </h1>
        <p className="mt-1 text-md">
          {lang === "en"
            ? "I have experience in building FullStack REST-API web applications, low level Arduino-RaspberryPI communication framework, machine-learning applications(images, audio, nlp)"
            : "У меня есть опыт в разработке фулл-стэк веб приложений с REST API, низкоуровневой разработки фреймворка для коммуникации Raspberry PI с ардуино, приложения с машинным обучением (изображения, звук и текст)."}
        </p>

        <div className="mt-4 flex flex-col md:flex-row gap-8">
          <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
            <img src="python.png" className="w-48" alt="python" />
            <h2 className="text-xl">Python</h2>
            <p className="text-gray-500">
              {lang === "en"
                ? "Develop neural networks, web backend, IoT high level software, data analyze, telegram bots."
                : "Разрабатываю нейронные сети, бэкэнд веб приложений, программное обеспечение для интернета вещей, анализ данных, телеграм боты"}
            </p>
            <p className="text-xl ">
              {lang === "en"
                ? "Main Frameworks/tools"
                : "Основные фреймворки/инструменты"}
            </p>
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

          <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
            <img src="web.png" className="w-48" alt="gambar" />
            <h2 className="text-xl">{lang === "en" ? "Web" : "Веб"}</h2>
            <p className="text-gray-500">
              {lang === "en"
                ? "FullStack web development(learning modern FrontEnd now)."
                : "Фулл-стэк веб разработка (изучаю современную разработку фронтэнда)"}
            </p>
            <p className="text-xl">
              {lang === "en"
                ? "Main Frameworks/tools"
                : "Основные фреймворки/инструменты"}
            </p>
            <ul>
              <li>ReactJS</li>
              <li>Ant design</li>
              <li>Tailwind CSS</li>
              <li>React Router Dom</li>
              <li>Pure JS, HTML5, CSS3</li>
              <li>Figma</li>
            </ul>
          </div>

          <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
            <img src="ops.png" className="w-48" alt="gambar" />
            <h2 className="text-xl">
              {lang === "en"
                ? "System Administration/DevOPS"
                : "Системное администрирование/DevOPS"}
            </h2>
            <p className="text-gray-500">
              {lang === "en"
                ? "Hate Windows, use Linux everytime..."
                : "Против Windows, использую Linux всегда"}
            </p>
            <p className="text-xl ">
              {lang === "en" ? "Tools" : "Инструменты"}
            </p>
            <ul>
              <li>Arch based + Debian based</li>
              <li>GitHub Actions CI</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="portfolio" className="mt-10">
        <h1 className="text-xl font-medium">
          {lang === "en" ? "Portfolio" : "Портфолио"}
        </h1>
        <p className="mt-1 text-md">
          {lang === "en"
            ? "Some projects that I developed alone."
            : "Проекты, разработанные лично мной"}
        </p>

        <div className="mt-4 flex flex-col md:flex-row gap-8">
          {PROJECTS.map((project, index) => (
            <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1" key={index}>
              <img
                src={project.preview}
                className="w-100"
                alt={project.preview}
              />
              <h2 className="text-xl">
                {lang === "en"
                  ? project.title[0]
                  : project.title[1]}
              </h2>
              <AiFillGithub
                className="text-lg text-gray-500 hover:text-gray-900 cursor-pointer items-center text-center"
                onClick={() => {
                  openUrl(project.url);
                }}
              />
              <p className="text-gray-500">
                {lang === "en"
                  ? project.about[0]
                  : project.about[1]}
              </p>
              <p className="text-xl ">
                {lang === "en" ? "Built with" : "Сделано с использованием"}
              </p>
              <ul>
                {project.stack.map((library) => (
                  <li key={library}>{library}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="footer" className="mt-5 rounded bg-black py-8 px-8">
        <div className="text-white md:text-center">
          <h1 className="font-medium text-lg">
            {lang === "en" ? "Contact Me" : "Связь со мной"}
          </h1>
          <p>{lang === "en" ? "Data to contact me" : "Контактные данные"}</p>

          <ul className="md:flex justify-center gap-4">
            <li className="flex items-center gap-2">
              <AiFillMail />
              <p>step.zhdanoff2016@yandex.ru</p>
            </li>
            <li className="flex items-center gap-2">
              <AiFillEnvironment />
              <p>{lang === "en" ? "Russia, Moscow" : "Россия, Москва"}</p>
            </li>
            <li className="flex items-center gap-2">
              <AiFillPhone />
              <p>+7(910)-XXX-XX-XX</p>
            </li>
          </ul>

          <div className="flex text-xl text-white gap-4 mt-2 md:justify-center">
            <AiFillGithub
              className="text-white-500 hover:text-gray-400 cursor-pointer"
              onClick={() => {
                openUrl("https://github.com/ret7020");
              }}
            />
            <BsTelegram
              className="text-white-500 hover:text-gray-400 cursor-pointer"
              onClick={() => {
                openUrl("https://t.me/Rtyrdv");
              }}
            />
            <AiFillInstagram
              className="text-white-500 hover:text-gray-400 cursor-pointer"
              onClick={() => {
                openUrl("https://instagram.com/stephan.zhdanov");
              }}
            />
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

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