import React from "react";
import "./app.css"
import State from "./State";
import Validate from "./Validate";
import { BsExclamationCircle } from "react-icons/bs";
function App() {
  const { handleChange,handleSubmit, values, errors } = State(Validate);

  return (
    <div >
      <div >
        <div >
          <div><img src ="img.jpg"  alt="problem?" className="image"/></div>
          <div className="form">
          <div className="head"><h1>Let's level up your</h1><h1 className="h2">brand,together</h1></div>
          <form onSubmit={handleSubmit}>
            Name<br /><input
              id="Name"
              type="text"
              name="Name"
              value={values.Name}
              onChange={handleChange}
              placeholder="Name"
            />
            {errors.Name && (
              <p className="errors">
                <BsExclamationCircle /> {errors.Name}
              </p>
            )}
            <br />
            <br />
            Email<br /><input
              id="email"
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email ID"
            />
            {errors.email && (
              <p className="errors">
                <BsExclamationCircle /> {errors.email}
              </p>
            )}
            <br />
            <br />
            Phone number<br /><input
              id="mobile"
              type="text"
              name="mobile"
              value={values.mobile}
              onChange={handleChange}
              placeholder="Phone no."
            />
            {errors.mobile && (
              <p className="errors">
                <BsExclamationCircle /> {errors.mobile}
              </p>
            )}
            <br />
            <br />
            How can we help? <br />
            <textarea
             rows="7"
             cols="60"
            id="desc"
            type ="text"
            name="desc"
            value={values.desc}
            onChange={handleChange}
            placeholder="Tell us a little about the project"
            className="desc"
            />
             {errors.desc && (
              <p className="errors">
                <BsExclamationCircle /> {errors.desc}
              </p>
            )}
            <br/>
            <br />
            Services <br />
             <input 
             name="Website_design"
             type="checkbox"
             onChange={handleChange}
              />Website design &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <input 
              type ="checkbox"
              name="Content_creation"
              onChange={handleChange}
              />Content creation
              <br />
              <br />
              <input 
              type ="checkbox"
              name="Ux_design"
              onChange={handleChange}
              />Ux_design &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input 
              type ="checkbox"
              name="Stategy_and_consulting"
              onChange={handleChange}
              />Stategy&consulting
              <br />
              <br />
              <input 
              type ="checkbox"
              name="User_research"
              onChange={handleChange}
              />User_research &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input 
              type ="checkbox"
              name="Others"
              onChange={handleChange}
              />Others
              <br />
              <br />
            <button>Send message</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
