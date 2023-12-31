'use client'
import { useCalcStore } from '../../store/CalcStore';
import { Card,CardHeader,CardBody } from '@nextui-org/card';
import { useState } from 'react';
import { Button } from '@nextui-org/react';

export default function Calculation() {
  const count = useCalcStore(state => state.count);
  const start = useCalcStore(state => state.start);
  const btncount = useCalcStore(state => state.btncount);
  const average = useCalcStore(state => state.average);
  const CalcAverage = useCalcStore(state => state.CalcAverage);
  const BtnCountInc = useCalcStore(state => state.BtnCountInc);
  const Reset = useCalcStore(state => state.Reset);
  const [data,setData] = useState<Array<number>[]>([]);
  const clickBtn = () => 
  {
    BtnCountInc();
    CalcAverage(count,start,btncount,average);
    const alldata = data.concat([[
      (btncount+1)*1000,
      count,
    ]]);
    setData(alldata);
  }

  const addLists = () => {
    return data.map((list,index) => {
      return <li key={index}>{list[1]}回転:{list[0]}円</li>
    })

  }


  return (
    <Card  className={` bg-slate-800 text-slate-300`}>
    <CardHeader className=' block text-slate-300'>
        <h2>Average:{average}</h2>
        <h3>Start:{start}</h3>
    </CardHeader>
    <CardBody>
      <div className=' p-2'>
        Start:<input type='number' className='text-slate-800' value={start}
        onChange={(e)=>{
            useCalcStore.setState({start:parseInt(e.target.value)});
        }} ></input>
          </div>
      <div className=' p-2'>
        総回転数:<input type="number" className='text-slate-800' value={count} 
        onChange={(e)=>{
            useCalcStore.setState({count:parseInt(e.target.value)});
        }}/>
      </div>
      <Button onClick={() =>clickBtn()} >計算</Button>
        <Button className=' bg-yellow-400' onClick={() =>{
            if(confirm("現在の情報をすべてリセットします。")){Reset(); setData([]);}
            }} >リセット</Button>
            </CardBody>
            {data.length>0? addLists():""}
    </Card>
  )
}