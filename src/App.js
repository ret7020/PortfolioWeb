import "./App.css";
import Navbar from "./Navbar";
import {
  AiFillGithub,
  AiFillMail,
  AiFillEnvironment,
  AiFillPhone,
} from "react-icons/ai";
import { BsTelegram, BsGlobe } from "react-icons/bs";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const openUrl = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const TechologyTag = ({ name }) => (
  <div
    className="ml-4 mb-2 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 rounded-full bg-white text-gray-700 border"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-archive mr-2"
    >
      <polyline points="21 8 21 21 3 21 3 8"></polyline>
      <rect x="1" y="3" width="22" height="5"></rect>
      <line x1="10" y1="12" x2="14" y2="12"></line>
    </svg>
    {name}
  </div>
);

function App() {
  const [lang, setLang] = useState("en");
  const [open, setOpen] = useState(false);
  const [slides_curr, SetSlidesCurr] = useState([]);

  const HACKATHONS = [
    {
      preview: "Hackathons/drive_hack.png",
      title: "DriveHack 2022",
      orgUrl: "https://ya-doma.ru/drivehack/",
      solutionUrl: "https://github.com/ret7020/DriveHackSolution",
      about: [
        "Develop of a case for classifying document scans. 3 classes: invoice payment, invoice, left document. 2 classification methods were implemented: Convolutional neural network on PyTorch, based on VGG16, as well as getting text from a scan via tesseract ocr.",
        "Разработка кейса по классификации сканов документов. 3 класса: счёт оплата, счёт фактура, левый документ. Было реализовано 2 метода классификации: Свёрточная нейросеть на PyTorch, на базе VGG16, а так же получение текста со скана через tesseract ocr.",
      ],
      status: 1, // 1 - win; 0 - lose
    },
    {
      preview: "Hackathons/poly_hack.png",
      title: "PolyHack 2023",
      orgUrl: "https://polyhack.codingprojects.ru/",
      solutionUrl: "https://github.com/ItClassDev",
      about: [
        "We continued to develop the school system for IT classes in Moscow. We have integrated the ability to log in through our platform account. We developed a system for automatic testing of programming tasks in a sandbox based on a Docker container. Backend-FastAPI; FrontEnd - ReactJS; Checker - Native C++",
        "Продолжили разработку школьной системы для IT классов Москвы. Интегрировали возможность входа, через аккаунт нашей платформы. Разработали систему автоматического тестирования задач по программированию в песочнице на основе Docker контейнера. Backend - FastAPI; FrontEnd - ReactJS; Checker - Native C++",
      ],
      status: 1, // 1 - win; 0 - lose
    },
  ];
  const PROJECTS = [
    {
      images: [
        "ProjectsPreviews/school_bells/0.png",
        "ProjectsPreviews/school_bells/1.png",
        "ProjectsPreviews/school_bells/2.png",
        "ProjectsPreviews/school_bells/3.png",
      ],
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
      images: [
        "ProjectsPreviews/robo_block/1.png",
        "ProjectsPreviews/robo_block/0.png",
      ],
      title: ["Web Robo-Block", "Веб Robo-Block"],
      url: "https://github.com/ret7020/WebRoboBlock",
      about: [
        "IDE for visual programming of robots on a special framework. A special educational robot consists of motors, servos, IR sensors connected to Arduino. The Raspberry PI controls the hardware via the Arduino, communicating with it via SPI. This IDE runs on the Raspberry PI. There is support for launching with ngrok and displaying video from the usb / csi camera on the robot",
        "IDE для визуального программирования роботов на специальном фреймворке. Специальный учебный робот состоит из двигателей, серво-приводов, ИК датчиков, подключённых к Arduino. Raspberry PI управляет 'железом' через Arduino, общаясь с ней через SPI. На Raspberry PI запускается данная IDE. Есть поддержка запуска с ngrok и отображение видео с usb/csi камеры на роботе",
      ],
      stack: [
        "Flask",
        "Pure JS",
        "Pure CSS",
        "SpiDev",
        "PyNgrok",
        "OpenCV",
        "pyTelegramBotAPI",
      ],
    },
    {
      images: ["ProjectsPreviews/eurobot_calculator/0.png", "ProjectsPreviews/eurobot_calculator/1.png", "ProjectsPreviews/eurobot_calculator/2.png", "ProjectsPreviews/eurobot_calculator/3.png"],
      title: ["Eurobot 2023 Calculator", "Калькулятор для Eurobot 2023"],
      url: "https://github.com/ret7020/EurobotCalculator",
      deploy: "https://ret7020.github.io/EurobotCalculator/",
      about: [
        "EUROBOT International Youth Robotic Competition is an open championship of mobile robots created by youth teams from all over the world. Every year a new theme is invented from the task. The goal of the team is to develop robots to score as many points as possible. Points are given for tasks completed by robots during the match. For quick and easy scoring, I wrote a calculator.",
        "Международные молодежные робототехнические соревнования EUROBOT – это открытый чемпионат мобильных роботов, созданных молодёжными командами со всего мира. Каждый год придумывается новая тематика из задача. Цель команды - разработать роботов для набора максимального количества очков. Баллы даются за выполненные роботами в течении матча задачи. Для быстрого и удобного подсчёта баллов я написал калькулятор.",
      ],
      stack: ["ReactJS", "Bootstrap5", "Github Pages"],
    },
    {
      images: ["ProjectsPreviews/eurobot_develop/2.png", "ProjectsPreviews/eurobot_develop/1.png", "ProjectsPreviews/eurobot_develop/0.png"],
      title: ["Eurobot Development 22/23", "Разработка кода для Eurobot 22/23"],
      url: "https://github.com/robotx-school",
      about: [
        "Description of the competition is in the project with a calculator. This year, our robots are controlled by a combination of Raspberry PI + Arduino Mega (communication via SPI). Raspberry PI solves top-level tasks: path planner, task scheduler, web interface. Arduino Mega solves low-level tasks: controlling motors, servos, and other hardware. Own architecture for the upper and lower levels, without the use of ROS.",
        "Описание соревнования есть в проекте с калькулятором. В этом году наши роботы управляются связкой из Raspberry PI + Arduino Mega (связь посредствам SPI). Raspberry PI решает задачи верхнего уровня: планировщик пути, планировщик задач, веб интерфейс. Arduino Mega решает задачи нижнего уровня: управление моторами, серво-приводами и другим железом. Своя архитектура для верхнего и нижнего уровней, без использования ROS.",
      ],
      stack: ["RPi 3", "RPi 4", "Arduino Mega", "Python", "C++", "Arduino", "Bootstrap 5", "OpenCV", "Flask", "Numpy", "OpenCV Aruco", "Shapely"],
    },
    {
      images: ["ProjectsPreviews/gpt3_chat_bot/0.png"],
      title: ["Ru GPT 3 ChatBot in TG", "Русский GPT 3 чат бот в телеграм"],
      url: "https://github.com/ret7020/RuChatGPT",
      about: [
        "This chat bot tries to replicate the communication style of people from my chats. Chats were taken from VK and Telegram. For VK, a special collector was written through their api. Telegram bot on the aiogram framework is used as an interface for the bot",
        "Данный чат бот пытается повторить стиль общения людей из моих чатов. Чаты брались из вк и телеграм. Для вк был написан специальный сборщик через их апи. В качестве интерфейса для бота используется телеграм бот на фреймворке aiogram",
      ],
      stack: ["PyTorch", "Requests", "Aiogram", "Transformers"],
    }

  ];

  const TECHNOLOGIES = [
    {
      name: ["Python", "Python"],
      image: "python.png",
      about: ["Develop neural networks, web backend, IoT high level software, data analyze, telegram bots.", "Разрабатываю нейронные сети, бэкэнд веб приложений, программное обеспечение для интернета вещей, анализ данных, телеграм боты."],
      tools: ["FastAPI", "Flask", "Sqlalchemy", "OpenCV", "PyTorch", "SkLearn", "Catboost", "Yolo", "Pandas", "Matplotlib", "Aiogram"]
    },
    {
      name: ["C++", "C++"],
      image: "cpp.svg",
      about: ["Develop fast and performace programs.", "Разрабатываю быстрые и производительные программы."],
      tools: ["Crow", "STL", "OpenCV", "ROS CPP", "Boost"]
    },
    {
      name: ["Web Frontend", "Веб фронтенд"],
      image: "web.png",
      about: ["FullStack web development(learning modern Frontend now).", "Фулл-стэк веб разработка (изучаю современную разработку фронтэнда)."],
      tools: ["ReactJS", "Ant Design", "Tailwind CSS", "Bootstrap 5", "React Router Dom", "Figma", "Native Stack", "EcmaScript (JS)"]
    },
    {
      name: ["System Administration/DevOPS", "Системное администрирование/DevOPS"],
      image: "ops.png",
      about: ["Use Linux at all computers", "Использую Линукс на всех своих компьютерах"],
      tools: ["Arch based + Debian based", "GitHub Actions CI", "Docker", "Nginx", "Git", "Docker Compose"]
    },
    
    
  ]

  return (
    <>
      <Lightbox open={open} close={() => setOpen(false)} slides={slides_curr} />
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
            {lang === "en" ? "Junior Software Engineer" : "Начинающий Инженер-программист"}
          </h3>
          <p className="text-md py-1 text-gray-800 md:text-xl">
            {lang === "en"
              ? "Interesetd in: Machine Learning, Data Science, Computer Vision, Microcontrollers Firmware Development, Web Backend. Learning web Frontend via study projects. I support open source and develop open source projects myself. True Linux user!"
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
              ? "I have experience in building FullStack REST-API web applications, low level Arduino-RaspberryPI communication framework(via SPI), machine-learning applications(images, audio, video, nlp)"
              : "У меня есть опыт в разработке фулл-стэк веб приложений с REST API, низкоуровневой разработки фреймворка для коммуникации Raspberry PI с ардуино(через SPI), приложения с машинным обучением (изображения, звук, видео, nlp)."}
          </p>
          <div className="mt-4 flex content-center grid lg:grid-cols-3 gap-8 md:flex-row md">
            {TECHNOLOGIES.map((item) => (
              <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
                <img src={item.image} className="w-48" alt={item.name[0]} />
                <h2 className="text-xl">{lang === "en" ? item.name[0] : item.name[1]}</h2>
                <p className="text-gray-500">
                  {lang === "en" ? item.about[0] : item.about[1]}
                </p>
                <p className="text-xl mb-2">
                  {lang === "en"
                    ? "Main Frameworks/tools"
                    : "Основные фреймворки/инструменты"}
                </p>
                <ul>
                  {item.tools.map((library) => (
                    <TechologyTag key={library} name={library} />
                  ))}
                </ul>
              </div>

            ))}
          </div>

        </section>

        <section id="portfolio" className="mt-10">
          <h1 className="text-xl font-medium">
            {lang === "en" ? "Portfolio" : "Портфолио"}
          </h1>
          <p className="mt-1 text-md">
            {lang === "en"
              ? "Projects I am working on. Click on preview to see extra screenshots."
              : "Проекты над которыми я работаю. Нажмите на превью, чтобы увидеть дополнительные скриншоты."}
          </p>

          <div className="mt-4 flex content-center grid lg:grid-cols-3 gap-8 md:flex-row md">
            {PROJECTS.map((project, index) => (
              <div
                className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1"
                key={index}
              >
                <img
                  src={project.images[0]}
                  style={{cursor: "pointer"}}
                  className="w-100"
                  alt={project.images[0]}
                  onClick={(e) => {
                    SetSlidesCurr([
                      ...project.images.map((image) => ({ src: image })),
                    ]);
                    setOpen(true);
                  }}
                />
                <h2 className="text-xl">
                  {lang === "en" ? project.title[0] : project.title[1]}
                </h2>
                <div className="text-5xl py-4 flex justify-center gap-2">
                  <AiFillGithub
                    className="text-lg text-gray-500 hover:text-gray-900 cursor-pointer items-center text-center"
                    onClick={() => {
                      openUrl(project.url);
                    }}
                  />
                  {"deploy" in project && (
                    <BsGlobe
                      className="text-lg text-gray-500 hover:text-gray-900 cursor-pointer items-center text-center"
                      onClick={() => {
                        openUrl(project.deploy);
                      }}
                    />
                  )}
                </div>
                <p className="text-gray-500">
                  {lang === "en" ? project.about[0] : project.about[1]}
                </p>
                <p className="text-xl mb-2">
                  {lang === "en" ? "Built with" : "Сделано с использованием"}
                </p>
                <ul>
                  {project.stack.map((library) => (
                    <TechologyTag key={library} name={library} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="mt-10">
          <h1 className="text-xl font-medium">
            {lang === "en" ? "Hackathons" : "Хакатоны"}
          </h1>
          <p className="mt-1 text-md">
            {lang === "en"
              ? "Hackathons I participated in."
              : "Хактоны, в которых я принял участие."}
          </p>

          <div className="mt-4 flex flex-col md:flex-row gap-8">
            {HACKATHONS.map((hackathon, index) => (
              <div
                className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1"
                key={index}
              >
                <img
                  src={hackathon.preview}
                  className="w-100"
                  alt={hackathon.preview}
                />
                <h2 className="text-xl">
                  {hackathon.title} -{" "}
                  {hackathon.status
                    ? lang === "en"
                      ? "Win"
                      : "Победа"
                    : lang === "en"
                      ? "Lose"
                      : "Не победа"}
                </h2>
                <div className="text-5xl py-4 flex justify-center gap-3">
                  <AiFillGithub
                    className="text-lg text-gray-500 hover:text-gray-900 cursor-pointer items-center text-center"
                    onClick={() => {
                      openUrl(hackathon.solutionUrl);
                    }}
                  />
                  <BsGlobe
                    className="text-lg text-gray-500 hover:text-gray-900 cursor-pointer items-center text-center"
                    onClick={() => {
                      openUrl(hackathon.orgUrl);
                    }}
                  />
                </div>
                <p className="text-gray-500">
                  {lang === "en" ? hackathon.about[0] : hackathon.about[1]}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="footer" className="mt-5 rounded bg-black py-8 px-8">
          <div className="text-white md:text-center">
            <h1 className="font-medium text-lg">
              {lang === "en" ? "Contact Me" : "Связь со мной"}
            </h1>
            

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
              {/* <AiFillInstagram
                className="text-white-500 hover:text-gray-400 cursor-pointer"
                onClick={() => {
                  openUrl("https://instagram.com/stephan.zhdanov");
                }}
              /> */}
            </div>

            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

            <p className="text-center text-sm text-gray-300 sm:text-center">
              © 2023
              <a href="https://github.com/ret7020"> Developed by @ret7020 with ReactJS and hosted on Github Pages</a>.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
