// ChartComponent.js
import React from 'react';
import {Chart as ReactChart} from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';



import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Chart} from 'chart.js';
// import StreamingPlugin from 'chartjs-plugin-streaming';

// Chart.register(StreamingPlugin);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Jul 21', 'Aug 21', 'Sep 21', 'Oct 21', 'Nov 21', 'Dec 21'];

export const serviceCost = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
          backgroundColor: 'rgb(255,193,7)',
      data: [60, 40, 70, 30, 60, 20, 10]
    },
  
  ],
};

export const totalCost = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [60, 40, 70, 30, 60, 20, 10],
      backgroundColor: 'rgb(81,159,208)',
      
    },
  
  ],
};
export const SubmissionsData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [60, 40, 70, 30, 60, 20, 10],
      fill: false,
      borderColor: 'rgb(10,169,186)',
      tension: 0.1
    },
    {
      label: 'Dataset 2',
      data: [30, 60, 70, 10, 60, 20, 10],
            fill: false,
      borderColor: '',
      tension: 0.1
      
    },
  ],
};

export const SummaryData = {
  labels: [
    'Red',
    'Blue',
    
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [30, 50],
    backgroundColor: [
      'rgb(35,200,150)',
      'rgb(251,119,87)',
      
    ],
    hoverOffset: 4
  }]


  // labels,
  // datasets: [
  //   {
  //     label: 'Dataset 1',
  //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
      
  //   },
  
  // ],
};

const StatusCard =()=>{
  let list = [
    {status:"Active",no:11,colorStatus:'active'},
    {status:"Inactive",no:15,colorStatus:'inactive'},
    {status:"In Shop",no:20,colorStatus:'inshop'},
    ]
  return(
    <>
     <div className='card'>
      <div className='statusCard'>

      <div className='cardTitle'>
        <p className='textTitle'>Vehicle Status</p>
        <a href="#" className='details'>Details</a>
      </div>

      <div>
        {list.map((item)=>(<>
        <div className='cardTitle'>
          <p className='listTxt'>{item.status}</p>
          <p className={`statusActive ${item.colorStatus}`}>{item.no}</p>
         
        </div>
        {
          item.no !== 20 && 
          <hr />
        }
        
        </>))}
      </div>
      </div>
    
    </div>

    
    </>
  )
}

const DisplayCard =({title,number1,number2,color1,color2,subTitle1,subTitle2,percent})=>{
  return(
    <>
    <div className='card displayBox'>
      <div className='cardTitle'>
        <p className='textTitle'>{title}</p>
        <a href="#" className='details'>Details</a>
      </div>


      <div className='numberCard'>
        <div className='textCenter'>
          <span className={`overDueTxt ${color1}`}>{number1} {subTitle1!== 'overdue' && percent}</span>
          <p className='subText'>{subTitle1}</p>
        </div>
        <div>
        <div className='textCenter'>
          <span className={`overDueTxt ${color2}`}>{number2} {percent}</span>
          <p className='subText'>{subTitle2}</p>
        </div>
        </div>

      </div>
    
    </div>
    </>
  )

}




const ChartComponent = () => {

  return(
    <>
  
    <div className='d-flex'>
      <div>
        <StatusCard />
      </div>
    <div className='card'>
      <div className='cardTitle'>
        <p className='textTitle'>Service Costs</p>
        <a href="#" className='details'>Details</a>
      </div>
    <Bar options={options} data={serviceCost} />;
    </div>

   <div>
    <DisplayCard color1={'red'} color2={'blue'} percent = '%' title={'Overdue Inspections'} number1={10} number2={83.3} subTitle1={"overdue"} subTitle2={'of Total Schema'}/>
   </div>

    </div>

    <div className='d-flex'>
      
    <div className='card'>
      <div className='cardTitle'>
        <p className='textTitle'>Total Cost</p>
        <a className='details' href='#'>Details</a>
      </div>
    <Bar options={options} data={totalCost} />;
    </div>

    <div className='card'>
      <div className='cardTitle'>
        <p className='textTitle'>Inspection Submissions</p>
        <a href="#" className='details'>Details</a>
      </div>
      <Line
  options={options} data={SubmissionsData}
/>
    </div>

    <div>
    <DisplayCard color1={'green'} color2={'yellow'} title={'Vehical Assignments'} number1={8} number2={4} subTitle1={"Assigned"} subTitle2={'Unassigned'}/>
   </div>
    

    </div>
    <div className='d-flex'>
    <div className='card'>
      <div className='cardTitle'>
        <p className='textTitle'>Inspections Summary</p>
      </div>
      <div className='summerySubtitle'>
      <span className='summerySubtitle subText'>Last 30 days</span>
      <Pie
  options={options} data={SummaryData}
/>

      </div>
    
    </div>
    <div>
    <DisplayCard color1={'blue'} color2={'red'} percent = '%' title={'Inspection Item Failure Rate'} number1={14.3} number2={14.3} subTitle1={"This Week"} subTitle2={'Change from last week'}/>
   </div>

    <div>
    <DisplayCard color1={'yellow'} color2={'green'} title={'Open Issues'} number1={3} number2={0} subTitle1={"Open"} subTitle2={'Overdue'}/>
   </div>

    </div>




</>
  )
}

export  default ChartComponent;
