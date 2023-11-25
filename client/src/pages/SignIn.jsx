import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { signInFailure,signInStart,signInSucess } from "../redux/user/userSlice";
const SignIn = () => {
  const [formData,setFormData] = useState({});
  const {loading,error} = useSelector((state)=> state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e)=>{
        setFormData({
          ...formData,
          [e.target.id] : e.target.value,
        })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    dispatch(signInStart());
    try {
      const res = await fetch('http://localhost:3000/api/auth/signIn',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      console.log(data);
      if(data.success === false)
      {
         dispatch(signInFailure(data.message));
         return;
      }
      dispatch(signInSucess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    } finally{
      setLoading(false);
    }
   
  }
  console.log(formData);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p> New User?</p>
        <Link to={"/signUp"}>
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default SignIn;
