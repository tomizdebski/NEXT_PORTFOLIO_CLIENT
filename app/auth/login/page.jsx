"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useContext } from "react";
import { UserContext } from "@components/UserContext";

const Login = () => {
  const router = useRouter();
  const { userInfo, setUserInfo } = useContext(UserContext);
  console.log(userInfo);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .min(4, "Za krótki!")
      .max(50, "Za długi!")
      .required("Login jest wymagany"),
    password: Yup.string()
      .min(8, "Za krótki!")
      .max(50, "Za długi!")
      .required("Hasło jest wymwagane"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (data) => {
    try {
      console.log("przed fetch", data);
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      console.log("res",res);
      if (res.status !== 500) {
        setUserInfo(res);
        window.localStorage.setItem("user", JSON.stringify(res));
        console.log("localStorage", JSON.parse(window.localStorage.getItem("user")))
      }

      if (response) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-8 mx-8 shadow-2xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="reset"
        className="form_layout shadow-2xl border-2 border-green-600 rounded"
      >
        
        <div className="py-1">
          <h1 className="head_text text-left pb-10 text-center">
            <span className="blue_gradient">Zaloguj się w BARTER</span>
          </h1>
          <label className="text-gray-600 font-medium" htmlFor="first_name">
            Email :
          </label>
          <div className="py-2">
            <input
              {...register("email")}
              name="email"
              type="text"
              className="form_input"
              id="email"
            />
            <div className="text-red-500 ml-2 mt-2">
              {errors.email?.message}
            </div>
          </div>
        </div>

        <div className="py-1">
          <label className="text-gray-600 font-medium" htmlFor="password">
            Hasło :
          </label>
          <div className="py-2">
            <input
              {...register("password")}
              name="password"
              type="password"
              id="password"
              className="form_input"
            />
            <div className="text-red-500 ml-2 mt-2">
              {errors.password?.message}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="submit-btn"
        >
          Zaloguj
        </button>
      </form>
    </div>
  );
};

export default Login;
