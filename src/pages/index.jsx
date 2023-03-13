import { useState, useEffect } from "react";
import withAuth from "../components/auth/withAuth";
import Head from 'next/head';
import Modal from '../components/modal';


const Home=()=> {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({
    name:'', dob:'', gender:'', matric:'', year:'', dept:'', cgpa:'',
  });

  const [error, setError] = useState('')

  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter((item)=>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(()=>{
    const fetchData = async()=>{
      const response = await fetch('/api/data');
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  console.log(data);

  function openModal(){
    let a = document.getElementById('modal');
    a.style.display = "flex"
  }
  function closeModal(){
    let a = document.getElementById('modal');
    a.style.display = "none"
  }
  
  const submitModal=async(e)=>{
    e.preventDefault();
    const newDataObj = {
      name:newData.name, 
      dob:newData.dob, 
      gender:newData.gender, 
      matric: newData.matric, 
      year:newData.year, 
      dept:newData.dept, 
      cgpa:newData.cgpa
    }
    if(data.find((student)=> student.name.toLowerCase() === newDataObj.name.toLowerCase()  || student.matric === newDataObj.matric)){
        alert('this name or matric number already exist in database');
    }else{
        try{
          const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newDataObj)
          })
          if(!response.ok){
            const errData = await response.json();
            throw new Error(errData.error);
          }else{
            useEffect(()=>{
              const fetchData = async()=>{
                const response = await fetch('/api/data');
                const data = await response.json();
                setData(data);
              };
              fetchData();
            }, []);
            setNewData({
              name:'', dob:'', gender:'', matric:'', year:'', dept:'', cgpa:'',
            })
          }
          
        }catch(error){
          console.log(error)
        }
    }  
  }



  return (
    <>
    <Modal
      students = {data}
      setStudent = {setData}
      newStudent = {newData}
      setNewStudent = {setNewData}
      closeModal = {closeModal}
      submit = {submitModal}
    />
    <div className="p-4">
      <Head>
        <title>Dashboard</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">IUB Record Portal - {data.length}</h1>

      <div className="flex flex-col justify-between md:flex-row mb-10">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={e=>setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full md:w-1/3 mb-2 md:mb-0"
        />
        <button onClick={openModal} className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">
          ADD NEW RECORD
        </button>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">S/N</th>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Gender</th>
            <th className="px-4 py-2">DOB</th>
            <th className="px-4 py-2">Matric No.</th>
            <th className="px-4 py-2">Department</th>
            <th className="px-4 py-2">Grad Year</th>
            <th className="px-4 py-2">CGPA</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, idx) => (
            <tr key={item._id}>
              <td className="border px-4 py-2 text-xs font-bold">{idx+1}</td>
              <td className="border px-4 py-2 text-xs">{item._id}</td>
              <td className="border px-4 py-2 text-sm">{item.name}</td>
              <td className="border px-4 py-2 text-sm">{item.gender}</td>
              <td className="border px-4 py-2 text-sm">{item.dob}</td>
              <td className="border px-4 py-2 text-sm">{item.matric}</td>
              <td className="border px-4 py-2 text-sm">{item.dept}</td>
              <td className="border px-4 py-2 text-sm">{item.year}</td>
              <td className="border px-4 py-2 text-sm">{item.cgpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default withAuth(Home);
