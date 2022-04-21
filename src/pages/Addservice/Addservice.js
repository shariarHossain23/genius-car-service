import React from "react";
import { useForm } from "react-hook-form";

const Addservice = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
    fetch('http://localhost:5000/service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
          alert("your post is successfull")
        console.log('Success:', data);
      })
  };
  return (
    <div className="w-50 mx-auto">
        <h2>add service</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-3" placeholder="name"   {...register("name")} />

        <textarea className="mb-3" placeholder="description" {...register("description", { required: true })} />
        <input className="mb-3" placeholder="price" type="number" {...register("price", { required: true })} />
        <input className="mb-3" placeholder="photourl" type="text" {...register("img", { required: true })} />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" value="add service" />
      </form>
    </div>
  );
};

export default Addservice;
