import React from 'react';
import './Register.css'; // Anda dapat menambahkan file CSS untuk styling
import Gambar from './bg.png'
import Logo from './logos.png'
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="register-container">
      <div className="left-side">
      <img src={Logo} alt="Logo" className="logo" />
        <img src={Gambar} alt="Gambar" />
      </div>
      <div className="right-side">
        <h2>Daftar</h2>
        <form>
          <div className="form-group">
            <input type="text" id="username" name="username" placeholder="Username" />
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="password" id="password" name="password" placeholder="Password" />
          </div>
          <Link to="/Dashboard">
            <button type="submit">Daftar</button>
          </Link>
          <p>Atau</p>
          <button type="button">Google</button>
          <p>Sudah Punya Akun? <Link to="/Login">Masuk</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Register;
