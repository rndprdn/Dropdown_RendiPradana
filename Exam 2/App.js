import React, { Component } from 'react';


class App extends Component {

    state = {
      namajenjang: 'Pilih Jenjang', 
      namatingkatan: 'Pilih Tingkatan',
      tingkatan: 
        <ul class="dropdown-menu" style={{left: 155}}>
          <li>
            <a href="#" onClick={()=>{this.kliknamatingkatan('Pilih jenjangnya dulu!');}}>
              Pilih jenjangnya dulu!
            </a>
          </li>
        </ul>,
    }

  kliknamatingkatan(nama){
    this.setState({
      namatingkatan: nama,
    })

  }

  klikprasekolah(){
    this.setState({
      namajenjang: 'Pendidikan Pra Sekolah', 

      tingkatan: 
      <ul class="dropdown-menu" style={{left: 155}}>
        <li class="dropdown-header">Pendidikan Pra Sekolah</li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('PAUD (Pendidikan Anak Usia Dini)');}}>PAUD (Pendidikan Anak Usia Dini)</a></li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('TK (Taman Kanak-kanak)');}}>TK (Taman Kanak-kanak)</a></li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('RA (Raudhatul Athfal)');}}>RA (Raudhatul Athfal)</a></li>
      </ul>,
    })
  }

  klikdasar(){
    this.setState({
      namajenjang: 'Pendidikan Dasar', 
      
      tingkatan: 
      <ul class="dropdown-menu" style={{left: 155}}>
        <li class="dropdown-header">Pendidikan Dasar</li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('SD (Sekolah Dasar)');}}>SD (Sekolah Dasar)</a></li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('MI (Madrasah Ibtidaiyah)');}}>MI (Madrasah Ibtidaiyah)</a></li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('SMP (Sekolah Menengah Pertama)');}}>SMP (Sekolah Menengah Pertama)</a></li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('MTs (Madrasah Tsanawiyah)');}}>MTs (Madrasah Tsanawiyah)</a></li>                      
      </ul>,
    })
  }

  klikmenengah(){
    this.setState({
      namajenjang: 'Pendidikan Menengah', 
      
      tingkatan: 
      <ul class="dropdown-menu" style={{left: 155}}>
        <li class="dropdown-header">Pendidikan Menengah</li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('SMA (Sekolah Menengah Atas)');}}>SMA (Sekolah Menengah Atas)</a></li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('MA (Madrasah Aliyah)');}}>MA (Madrasah Aliyah)</a></li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('SMK (Sekolah Menengah Kejuruan)');}}>SMK (Sekolah Menengah Kejuruan)</a></li>
      </ul>,
    })
  }

  kliktinggi(){
    this.setState({
      namajenjang: 'Pendidikan Tinggi', 
      
      tingkatan: 
      <ul class="dropdown-menu" style={{left: 155}}>
        <li class="dropdown-header">Pendidikan Tinggi</li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('D3 Diploma');}}>D3 Diploma</a></li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('S1/D4 Sarjana');}}>S1/D4 Sarjana</a></li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('S2 Magister');}}>S2 Magister</a></li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('S3 Doktoral');}}>S3 Doktoral</a></li>
      </ul>,
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Jenjang Pendidikan</h1>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-6">
            <div className="dropdown">
              <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style={{width: 250}}>
                {this.state.namajenjang} <span className="caret" />
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1" style={{left: 155}}>
                <li><a href="#" onClick={()=>{this.klikprasekolah();}}>Pendidikan Pra Sekolah</a></li>
                <li><a href="#" onClick={()=>{this.klikdasar();}}>Pendidikan Dasar</a></li>
                <li><a href="#" onClick={()=>{this.klikmenengah();}}>Pendidikan Menengah</a></li>
                <li><a href="#" onClick={()=>{this.kliktinggi();}}>Pendidikan Tinggi</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="dropdown">
              <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style={{width: 250}}>
                 {this.state.namatingkatan} <span className="caret" />
              </button>
              {this.state.tingkatan}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
