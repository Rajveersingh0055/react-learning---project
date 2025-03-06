import React from "react";

/**
 * Renders a form that captures an email address and a password.
 * When the form is submitted, it logs the email and password to the console.
 *
 * @returns {React.ReactElement} The signup form component.
 */
function Form() {
  // function handleSumbit(e){
  //   e.preventDefault();

  //   const formEL = e.currentTarget;
  //   const formData = new FormData(formEL);
  //   const email = formData.get("email");
  //       formEL.reset();
  // }

  /**
   * Handles form submission by retrieving email and password from formData.
   * Logs the email and password to the console.
   *
   * @param {FormData} formData - The FormData object containing form fields.
   */

  function SignUp(formData) {
    // event handler function form submit
    // const email = formData.get("email");
    // const password = formData.get("password");
    // const employmentStatus = formData.get("employmentStatus");
    // const dietoryname = formData.getAll("dietoryname");
    // const favColor = formData.get("favColor");
    // console.log(favColor);
const data = Object.fromEntries(formData)
   const dietoryname = formData.getAll("dietoryname");
   const allData = {...data, dietoryname}
    console.log(allData);
  }

  return (
    <section>
      <h1>Signup Form</h1>
      <form action={SignUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
        />
        <br />
        <label>
          Password:
          <input type="password" name="password" placeholder="password" />
        </label>
        <label htmlFor="Description">Description</label>
        <textarea id="Description" name="Description"></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="full-time" />
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="checkbox" name="dietoryname" value="koher" />
            koher
          </label>
          <label>
            <input type="checkbox" name="dietoryname" value="vegan" />
            vegan
          </label>
          <label>
            <input type="checkbox" name="dietoryname" value="glutenfree" />
            glutenfree
          </label>
        </fieldset>

        <label htmlFor="favColor">What is your favraite value</label>
        <select id="favColor" name="favColor" defaultValue="" required>
          <option value="">--Please choose an option--</option>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
          <option value="black">black</option>
        </select>
        <button>Submit</button>
      </form>
    </section>
  );
}

export default Form;
