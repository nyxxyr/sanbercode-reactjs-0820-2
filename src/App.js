import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <form className="form-control">
        <header>
          <h1>Form Pembelian Buah</h1>
        </header>
        <div className="custom-flex">
          <div className="form-input">
            <label className="input-label">Nama Pelanggan</label>
            <input style={{marginLeft: '2rem'}} type="text" />
          </div>
          <div className="form-input choice">
            <label className="input-label">Daftar Item</label>
            <ul style={{marginLeft: '4rem'}} className="items">
              <li><input type="radio" name="pilihan" /> Semangka</li>
              <li><input type="radio" name="pilihan" /> Jeruk</li>
              <li><input type="radio" name="pilihan" />Nanas</li>
              <li><input type="radio" name="pilihan" />Salak</li>
              <li><input type="radio" name="pilihan" />Anggur</li>
            </ul>
          </div>
          <input className="btn" type="submit" value="Kirim" />
        </div>
      </form>
    </div>
  );
}

export default App;
