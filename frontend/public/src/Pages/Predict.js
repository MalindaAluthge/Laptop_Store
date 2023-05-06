import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Navbar";

const Predict = () => {
  const [data, setData] = useState({
    ram: "",
    weight: "",
    company: "",
    typeName: "",
    os: "",
    cpu: "",
    gpu: "",
    touch: false,
    ips: false,
  });
  const [result, setResult] = useState("");
  const { ram, weight, company, typeName, os, cpu, gpu, touch, ips } = data;
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if ((ram, weight, company, typeName, os, cpu, gpu, touch, ips)) {
      const requestData = {
        ram,
        weight,
        touch: touch ? 1 : 0,
        ips: ips ? 1 : 0,
        c_acer: company === "acer" ? 1 : 0,
        c_apple: company === "apple" ? 1 : 0,
        c_asus: company === "asus" ? 1 : 0,
        c_dell: company === "dell" ? 1 : 0,
        c_hp: company === "hp" ? 1 : 0,
        c_lenovo: company === "lenovo" ? 1 : 0,
        c_msi: company === "msi" ? 1 : 0,
        c_other: company === "other" ? 1 : 0,
        c_toshiba: company === "toshiba" ? 1 : 0,
        type_2in1: typeName === "2in1convertible" ? 1 : 0,
        type_gaming: typeName === "gaming" ? 1 : 0,
        type_netbook: typeName === "netbook" ? 1 : 0,
        type_notebook: typeName === "notebook" ? 1 : 0,
        type_ultrabook: typeName === "ultrabook" ? 1 : 0,
        type_workstation: typeName === "workstation" ? 1 : 0,
        os_linux: os === "linux" ? 1 : 0,
        os_mac: os === "mac" ? 1 : 0,
        os_other: os === "other" ? 1 : 0,
        os_windows: os === "windows" ? 1 : 0,
        cpu_amd: cpu === "amd" ? 1 : 0,
        cpu_intelcorei3: cpu === "intelcorei3" ? 1 : 0,
        cpu_intelcorei5: cpu === "intelcorei5" ? 1 : 0,
        cpu_intelcorei7: cpu === "intelcorei7" ? 1 : 0,
        cpu_other: cpu === "other" ? 1 : 0,
        gpu_amd: gpu === "amd" ? 1 : 0,
        gpu_intel: gpu === "intel" ? 1 : 0,
        gpu_nvidia: gpu === "amd" ? 1 : 0,
      };

      const res = await axios.post(
        "http://localhost:5010/predict",
        requestData
      );
      console.log(res);
      setResult(res.data.data);
    } else {
      alert("All fields are required");
    }
  };
  return (
    <div>
          <Navbar/>
  <div className="w-full bg-white py-16 px-4">
     
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-1">
        <form onSubmit={handleSubmit}>
          <div class="form first">
            <div class="details personal">
             

              <div className="card">
                <div className="card-header" style={{textAlign:"center"}}>  <span class="title" >Laptop Specs</span></div>
                <div className="card-body">
                <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="ram">Ram (GB)</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Prefered RAM"
                          name="ram"
                          required
                          value={ram}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="weight">Weight (Kg)</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Kg"
                          name="weight"
                          required
                          value={weight}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="company">Company</label>
                        <select
                          name="company"
                          id="company"
                          className="form-control"
                          value={company}
                          onChange={handleChange}
                          required
                        >
                          <option value="" selected hidden>
                            Select Company
                          </option>
                          <option value="acer">Acer</option>
                          <option value="apple">Apple</option>
                          <option value="asus">Asus</option>
                          <option value="dell">Dell</option>
                          <option value="hp">HP</option>
                          <option value="lenovo">Lenovo</option>
                          <option value="msi">MSI</option>
                          <option value="toshiba">Toshiba</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="typename">Type Name</label>
                        <select
                          className="form-control"
                          name="typeName"
                          id="typename"
                          required
                          value={typeName}
                          onChange={handleChange}
                        >
                          <option value="" selected hidden>
                            Select Type Name
                          </option>
                          <option value="2in1convertible">
                            2 in 1 Convertable
                          </option>
                          <option value="gaming">Gaming</option>
                          <option value="netbook">Net Book</option>
                          <option value="notebook">Note Book</option>
                          <option value="ultrabook">Ultra Book</option>
                          <option value="workstation">Workstation</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="os">Operating System</label>
                        <select
                          name="os"
                          id="opsys"
                          required
                          className="form-control"
                          value={os}
                          onChange={handleChange}
                        >
                          <option value="" selected hidden>
                            Select Operating System
                          </option>
                          <option value="windows">Windows</option>
                          <option value="mac">Mac</option>
                          <option value="linux">Linux</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="cpuname">CPU</label>
                        <select
                          name="cpu"
                          className="form-control"
                          id="cpuname"
                          required
                          value={cpu}
                          onChange={handleChange}
                        >
                          <option value="" selected hidden>
                            Select CPU
                          </option>
                          <option value="intelcorei3">Intel Core i3</option>
                          <option value="intelcorei5">Intel Core i5</option>
                          <option value="intelcorei7">Intel Core i7</option>
                          <option value="amd">AMD</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <label for="gpuname">GPU</label>
                      <select
                        name="gpu"
                        id="gpuname"
                        className="col-md-12"
                        value={gpu}
                        onChange={handleChange}
                      >
                        <option value="" selected hidden>
                          Select GPU
                        </option>
                        <option value="intel">Intel</option>
                        <option value="amd">AMD</option>
                        <option value="nvidia">Nvidia</option>
                      </select>

                      <div class="check">
                        <br></br>
                        <div>
                          <label for="touchscreen">Touch Screen</label>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="checkbox"
                            name="touch"
                            value={touch}
                            onChange={(e) =>
                              setData({ ...data, touch: !touch })
                            }
                          />
                        </div>
                        <br></br>
                        <div>
                          <label for="ips">IPS</label>{" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="checkbox"
                            name="ips"
                            value={ips}
                            onChange={(e) => setData({ ...data, ips: !ips })}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                          <button class="nextBtn col-md-12" style={{borderColor:'#00df9a', borderWidth: '6px'}}>
                            <span className="btnText">Predict</span>
                            <i class="uil uil-navigator"></i>
                          </button>
                        </div>
                        <div className="col-md-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
                </div>
                <div style={{ marginLeft: '380px',color: 'red', fontWeight: 'bold' , fontSize: '24px'}}>
                     {result && `Laptop Price Prediction is: ${(result && result)*360} LKR`}
                </div>
                <br></br>
              </div>
              <div class="fields"></div>    
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  
  );
};

export default Predict;
