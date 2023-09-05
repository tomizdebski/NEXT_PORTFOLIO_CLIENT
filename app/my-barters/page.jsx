"use client";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { LessonBasketContext } from "@components/LessonBasketContext";
import { UserContext } from "@components/UserContext";
import { LessonsContext } from "@components/LessonsContext";
import { Tooltip } from "@material-tailwind/react";

const MyBarters = () => {
  const { basket, setBasket } = useContext(LessonBasketContext);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { lessons, setLessons } = useContext(LessonsContext);
  const [barterLessonActive , setBarterLessonActive] = useState([]);
  console.log("barter-active", barterLessonActive);

  useEffect(() => {
    axios
    .get("http://localhost:4000/api/barter-lessons")
    .then((response) => setBarterLessonActive(response.data));
  }, [])
  

  let arrayBarters = [];
  // all barters
  lessons.map((el) => {
    lessons.map((item) => {
      if (
        el.instructorId == item.studentId &&
        el.studentId == item.instructorId
      ) {
        arrayBarters.push({ el, item });
      }
    });
  });
  console.log(arrayBarters);

  const filterUser = arrayBarters.filter(
    (el) =>
      el.el.instructorId === userInfo.id || el.el.studentId === userInfo.id
  );

  return (
    <div className=" bg-gray-100 pt-20 w-full">
      <h1 className="head_text text-center p-5 blue_gradient">
        Oferty barteru
      </h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded md:w-2/3">
          {filterUser.map((el) => (
            <div className="m-10 bg-blue-gray-200 pl-10 pt-10 pb-5 pr-20 rounded glassmorphism shadow-2xl border-2 border-green-600 rounded">
              <div
                key={el.el.id}
                className="justify-between mb-6 rounded p-6 shadow-md sm:flex sm:justify-start bg-gradient-to-r from-green-200 to-white"
              >
                <Tooltip
                  content={
                    "Instruktor " +
                    el.el.instructor.firstName +
                    " " +
                    el.el.instructor.lastName
                  }
                  placement="top-end"
                  className="text-black bg-white px-4 py-3 shadow-xl shadow-black/10"
                >
                  <Image
                    src={"http://localhost:4000/" + el.el.instructor.avatar}
                    width={80}
                    height={80}
                    alt="Avatar"
                    className="h-12 w-12 rounded object-cover mr-4 shadow border border-sky-500"
                  />
                </Tooltip>
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      {el.el.name}
                    </h2>
                    <p className="mt-1 text-xs text-gray-700">
                      {el.el.content}
                    </p>
                    <p className="text-sm">{el.el.instructor.firstName}</p>
                  </div>
                </div>
              </div>

              <div
                key={el.item.id + el.item.name}
                className="justify-between mb-6 rounded p-6 shadow-md sm:flex sm:justify-start bg-gradient-to-r from-green-200 to-white"
              >
                <Tooltip
                  content={
                    "Instruktor " +
                    el.item.instructor.firstName +
                    " " +
                    el.item.instructor.lastName
                  }
                  placement="top-end"
                  className="text-black bg-white px-4 py-3 shadow-xl shadow-black/10"
                >
                  <Image
                    src={"http://localhost:4000/" + el.item.instructor.avatar}
                    width={80}
                    height={80}
                    alt="Avatar"
                    className="h-12 w-12 rounded object-cover mr-4 shadow border border-sky-500"
                  />
                </Tooltip>
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      {el.item.name}
                    </h2>
                    <p className="mt-1 text-xs text-gray-700">
                      {el.item.content}
                    </p>
                    <p className="text-sm">{el.item.instructor.firstName}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex-col justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <button
                  className="outline_btn w-full"
                  onClick={() => {
                    console.log("clik");
                    axios.post(`http://localhost:4000/api/barter-lessons/`, {
                      lessonId: +el.el.id,
                      lessonExId: +el.item.id,
                    });
                  }}
                >
                  
                  <Image
                    src="/assets/icons/barter_3.svg"
                    width={30}
                    height={30}
                    alt="Basket"
                    className="pr-1 transform hover:rotate-45"
                  />
                  Finalizuj
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <h1 className="head_text text-center p-5 blue_gradient">
        Bartery w trakcie realizacji
      </h1>

    </div>
  );
};

export default MyBarters;
