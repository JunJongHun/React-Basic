import React, { useState } from "react";

function AppForm(props) {
  let [form, setForm] = useState({ name: "", email: "" });
  let onChange = (e) => {
    let { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };
  let onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <form className="flex flex-col " onSubmit={onSubmit}>
      <label className="" htmlFor="name">
        이름:
      </label>
      <input
        onChange={onChange}
        className=""
        type="text"
        id="name"
        name="name"
        value={form.name}
      />

      <label htmlFor="email">email:</label>
      <input
        onChange={onChange}
        type="email"
        id="email"
        name="email"
        value={form.email}
      />
      <button>서브밋</button>
    </form>
  );
}

export default AppForm;
