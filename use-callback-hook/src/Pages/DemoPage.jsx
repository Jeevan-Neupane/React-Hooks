
import { useState,useCallback } from "react"

import Title from "../Components/Title";
import Button from "../Components/Button";
import Count from "../Components/Count";

function DemoPage() {
    const [age,setAge]=useState(25);
    const [salary,setSalary]=useState(100000);

    const handleAge=useCallback(()=>{
        setAge(age+1);
        
    },[age]);

    const handleSalary=useCallback(()=>{
        setSalary(salary+1000);
    },[salary]);
  return (
    <div className="text-white h-screen flex justify-center items-center flex-col">
        <Title/>
        <Count count={salary} text="salary"/>
        <Button handleClick={handleSalary}>Salary</Button>
        <Count count={age} text="age"/>
        <Button handleClick={handleAge}>Age</Button>

      
    </div>
  )
}

export default DemoPage
