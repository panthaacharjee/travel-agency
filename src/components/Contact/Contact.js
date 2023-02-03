import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`${data.name}, we contact with you very soon`);
  };

  return (
    <div className="contact">
      <h2>Any Question?</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-section">
        <div>
          <h3>Name</h3>
          <input placeholder="name" {...register("name", { required: true })} />
          {errors.name && <p>This field is required</p>}
        </div>
        <div>
          <h3>Email</h3>
          <input
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.name && <p>This field is required</p>}
        </div>
        <div>
          <h3>Comment</h3>
          <textarea
            className="comment"
            placeholder="comment"
            {...register("comment")}
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Contact;
