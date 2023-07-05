import {
  useLoaderData,
  useNavigation,
  Form,
  redirect,
  useActionData,
} from "react-router-dom";

import users from "../users.json";

// eslint-disable-next-line react-refresh/only-export-components
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";

  try {
    const account = users.find(
      (u) => u.user.email === email && u.user.password === password
    );

    if (account) {
      localStorage.setItem("loggedin", true);
      return redirect(pathname);
    }

    return redirect("/login?message=Email or password is wrong");
  } catch (error) {
    return error.message;
  }
}

export default function Login() {
  const msg = useLoaderData();
  const errorMsg = useActionData();
  const navigation = useNavigation();

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {msg && <h3 className="red">{msg}</h3>}
      {errorMsg && <h3 className="red">{errorMsg}</h3>}
      <Form method="post" className="login-form">
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={navigation.state === "submitting"}>Log in</button>
      </Form>
    </div>
  );
}

// import React from "react";
// import { useLoaderData, useNavigate } from "react-router-dom";

// import users from "../users.json";

// // eslint-disable-next-line react-refresh/only-export-components
// export function loader({ request }) {
//   return new URL(request.url).searchParams.get("message");
// }

// export default function Login() {
//   const [loginFormData, setLoginFormData] = React.useState({
//     email: "",
//     password: "",
//   });
//   const [msg, setMsg] = React.useState(useLoaderData());
//   const navigate = useNavigate();

//   function handleSubmit(e) {
//     e.preventDefault();
//     const account = users.find((u) => u.user.email === loginFormData.email);
//     setLoginFormData({
//       email: "",
//       password: "",
//     });
//     setMsg("");

//     account
//       ? navigate("/host", { replace: true })
//       : setMsg("No user with those credentials found!");
//   }

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setLoginFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   }

//   return (
//     <div className="login-container">
//       <h1>Sign in to your account</h1>
//       {msg && <h3 className="red">{msg}</h3>}
//       <form onSubmit={handleSubmit} className="login-form">
//         <input
//           name="email"
//           onChange={handleChange}
//           type="email"
//           placeholder="Email address"
//           value={loginFormData.email}
//         />
//         <input
//           name="password"
//           onChange={handleChange}
//           type="password"
//           placeholder="Password"
//           value={loginFormData.password}
//         />
//         <button>Log in</button>
//       </form>
//     </div>
//   );
// }
