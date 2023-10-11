import React, { useState } from 'react';
import './styles/styles.css';
import { DataForm } from './parameters/form';



function LoginForm() {
  const [formState, setFormState] = useState({
    country: 'default'
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  }

  function handleCountryChange(event) {
    const { value } = event.target;
    setFormState(prevState => ({ ...prevState, country: value }));
  }

  function getInputClasses() {
    const { country } = formState;
    if (country === 'ven') return 'ven';
    if (country === 'chl') return 'chl';
    if (country === 'arg') return 'arg';
      return 'default';
  }

  function getCountrysToSelect(){
    const optionOfCountrys = DataForm.countrys
    const options = Object.values(optionOfCountrys).map((country) => (
      <option value={country.value}>
        {country.text}
      </option>
    ));
    return options;
  }
  return (
    <form className='form-section'>
      <select id="country" name="country" value={formState.country} onChange={handleCountryChange}>
        {getCountrysToSelect()}
      </select>

      <input type="email" id="email" name="email" placeholder={DataForm.place.email} onChange={handleInputChange} className={getInputClasses()} />

      <input type="password" id="password" name="password" placeholder={DataForm.place.pass} onChange={handleInputChange} className={getInputClasses()} />

      <button type="submit">{DataForm.button.name}</button>
    </form>
  );
}


export default LoginForm