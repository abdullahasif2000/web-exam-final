import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FaCirclePlus } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FcLike } from "react-icons/fc";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TbMoodSad } from "react-icons/tb";
import { FaHandPointLeft } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";


export default function Home() {
  return (
    <main className="flex flex-col items-center bg-yellow-200  h-screen w-full">
      <h1 className="flex text-2xl"> Welcome To The Task Manager</h1>
      <div className="flex flex-row m-32 items-center justify-center gap-8">
        
        
        <div className="flex flex-col justify-between items-center bg-blue-300 rounded-lg p-5">
          <span>total tasks </span>
          <p className="flex text-lg text-bold">04</p>
          </div>

          <div className="flex flex-col justify-between items-center bg-green-200 rounded-lg p-5">
          <span>completed  </span>
          <p className="flex text-xl text-bold">02</p>
          </div>

          <div className="flex flex-col justify-between items-center bg-orange-200 rounded-lg p-5">
          <span>pending </span>
          <p className="flex text-lg text-bold">02</p>
          </div>
          
         
</div>
<div className="flex  max-w-sm items-center space-x-2">
      <Input type="Task" placeholder=" Enter task here..." />
      <Button type="submit" className="flex gap-2" >Add task <FaCirclePlus /></Button>
      
    </div>
      
    <Card className="flex flex-col justy items-center mt-10">
  
  <CardContent className=" flex flex-row justify-center items-center ml-10">
    <p className="flex items-center justify-center">This is a simple task 1...</p>
    <Button variant="outline" className="rounded-lg bg-green-200 ml-5 mt-4">Mark as completed <FcLike className="flex ml-2"/> <RiDeleteBin5Line className="flex ml-2" /></Button>
  </CardContent>
 
</Card>

<Card className="flex flex-col justy items-center mt-10">
  
  <CardContent className=" flex flex-row justify-center items-center ml-10">
    <p className="flex items-center justify-center">This is a simple task 2...</p>
    <Button variant="outline" className="rounded-lg bg-green-200 ml-5 mt-4">Mark as completed <FcLike className="flex ml-2"/> <RiDeleteBin5Line className="flex ml-2" /></Button>
  </CardContent>
 
</Card>

<Card className="flex flex-col justy items-center mt-10">
  
  <CardContent className=" flex flex-row justify-center items-center ml-10">
    <p className="flex items-center justify-center">This is a simple task 3...</p>
    <Button variant="outline" className="rounded-lg bg-orange-200 ml-5 mt-4">Mark as Incompleted <TbMoodSad className="ml-2" /> <RiDeleteBin5Line className="flex ml-2" /></Button>
  </CardContent>
 
</Card>

<Card className="flex flex-col justy items-center mt-10">
  
  <CardContent className=" flex flex-row justify-center items-center ml-10">
    <p className="flex items-center justify-center">This is a simple task 4...</p>
    <Button variant="outline" className="rounded-lg bg-orange-200 ml-5 mt-4">Mark as Incompleted <TbMoodSad className="ml-2"/> <RiDeleteBin5Line className="flex ml-2" /></Button>
  </CardContent>
 
</Card>

<div className="flex flex-row justify-between items-center  gap-52 mt-4">
<Button><FaHandPointLeft />
 Previous</Button>
<Button>next <FaHandPointRight /></Button>
</div>

         
    </main>
  );
}
