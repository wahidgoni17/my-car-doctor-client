import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, price, title, service_id, img } = service;
  const handleBookServices = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const booking = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id,
      price: price,
    };
    console.log(booking);
    fetch("http://localhost:4550/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.insertedId){
          alert('booking added successfully')
        }
      });
      form.reset()
  };

  return (
    <div>
      <h2 className="text-center text-3xl">Book Now: {title}</h2>
      <form onSubmit={handleBookServices}>
        <div className="card-body">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="Date"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                type="text"
                name="due"
                defaultValue={"$" + price}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
