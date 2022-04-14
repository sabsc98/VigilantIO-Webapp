import "./styles.css";
//useState & useEffect are used to retrieve data based on the function you give and 
//continue to do that after every update
import React, { useState, useEffect } from "react";

export const getRenderDataFromApi = () => {
	// this will get the text for the label/title
	var el = document.getElementById('selectList');
	var textForTitle = el.options[el.selectedIndex].innerHTML;
	
    var apiImgLine = 'http://prac-app.vigilantioe.com:8081/render/?target='+selectList.value+time.value+'&graphType=line&title='+textForTitle+'&format=png'
    var apiImgPie = 'http://prac-app.vigilantioe.com:8081/render/?target='+selectList.value+time.value+'&graphType=pie&title='+textForTitle+'&format=png'

 	apiImg1.src = apiImgLine
  	apiImg2.src = apiImgPie
 };
// Used when creating modules to export objects, functions, 
//variables from the module so they can be used by other programs 
//with the help of the import statements.
export default function App() {
	
 // this handles change of the dropdown lists
  const handleChange = (e) => {
    	console.log(e.target.value);
		console.log(selectList.value);
	  	getRenderDataFromApi()
  	};
  
  // useEffect is called all the time 
  useEffect(() => {
	  getRenderDataFromApi()
	  
	  // this is called every refreshInterval
	 const interval=setInterval(()=>{
	  	 getRenderDataFromApi()
		 console.log("Refreshing")
	  },refreshInterval.value)
       
       
	  return()=>clearInterval(interval)
	  
  }, []);

  
  return (
    <div className="App">
      <h1>Summer's VigilantIO Assignment</h1>
      <select name="selectList" id="selectList" onChange={handleChange}>
      <option value="virgil.vigilant-pracapp-01.host.hostalive.perfdata.pl.value" label="Packet Loss">Packet Loss</option>
      <option value="virgil.vigilant-pracapp-01.host.hostalive.perfdata.rta.value" label="Round Trip Average">Round Trip Average</option>
      <option value="virgil.vigilant-pracapp-01.services.Linux_CPU.check_nrpe.perfdata.idle.value">Linux CPU Idle</option>
	  <option value="virgil.vigilant-pracapp-01.services.Linux_CPU.check_nrpe.perfdata.iowait.value">Linux CPU IOwait</option>
	  <option value="virgil.vigilant-pracapp-01.services.Linux_CPU.check_nrpe.perfdata.steal.value">Linux CPU Steal</option>
	  <option value="virgil.vigilant-pracapp-01.services.Linux_CPU.check_nrpe.perfdata.system.value">Linux CPU System</option>
	  <option value="virgil.vigilant-pracapp-01.services.Linux_CPU.check_nrpe.perfdata.user.value">Linux CPU User</option>
	  <option value="virgil.vigilant-pracapp-01.services.Linux_Disk.check_nrpe.perfdata._.value">Linux Disk</option>
	  <option value="virgil.vigilant-pracapp-01.services.Linux_Memory.check_nrpe.perfdata.Active.value">Linux Memory Active</option>
	  <option value="virgil.vigilant-pracapp-01.services.Linux_Memory.check_nrpe.perfdata.MemCached.value">Linux Memory Cached</option>
	  <option value="virgil.vigilant-pracapp-01.services.Linux_Memory.check_nrpe.perfdata.MemUsed.value">Linux Memory Used</option>
	  <option value="virgil.vigilant-pracapp-01.services.Linux_Memory.check_nrpe.perfdata.SwapCached.value">Linux Memory Swap Cached</option>
	  <option value="virgil.vigilant-pracapp-01.services.Linux_Memory.check_nrpe.perfdata.SwapUsed.value">Linux Memory Swap Used</option>
	  <option value="virgil.vigilant-pracapp-01.services.Linux_Network.check_nrpe.perfdata.eth0_rxbyt.value">Linux Network Rxbyte</option>
	  <option value="virgil.vigilant-pracapp-01.services.Linux_Network.check_nrpe.perfdata.eth0_rxerrs.value">Linux Network Rxerrs</option>
	  <option value="virgil.vigilant-pracapp-01.services.Linux_Network.check_nrpe.perfdata.eth0_txbyt.value">Linux Network Txtbyt</option>
	  <option value="virgil.vigilant-pracapp-01.services.Linux_Network.check_nrpe.perfdata.eth0_txerrs.value">Linux Network Txerrs</option>
      </select>
	  
      <select name="time" id="time" onChange={handleChange}>
      <option value="&from=-24h&until=now">Last 24 hours</option>
      <option value="&from=-7d&until=now">Last 7 days</option>
      <option value="&from=-30d&until=yesterday">30days until yesterday</option>
      </select>
	  
	  <h5> Refresh Interval </h5>
      <select title="Refresh Time" name="refreshInterval" id="refreshInterval" onChange={handleChange}>
      <option value="300000">5 minutes</option> //5mins = 5*60*1000 (interval time in milliseconds)
      <option value="1800000">30 minutes</option> //30mins = 30*60
      <option value="3600000">1 hour</option>
      </select>	
	 
	 <br></br>
	 <br></br>
	  <h2> Line Graph </h2> 
	  
    <img name="apiImg1" src='' alt="graph line" />
	<br></br>
	
	 <h2> Pie Graph </h2> 
    <img name="apiImg2" src='' alt="graph pie" />
	 
    </div>
  );
}