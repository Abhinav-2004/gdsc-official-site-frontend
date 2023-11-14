import React from 'react'

const Events = () => {
    const eventList=[{date:"10:12:2022",name:"GDSC Annual Event", desc:"GDSC Silicon Chapter Annual event" },
    {date:"10:12:2023",name:"GDSC Annual Event", desc:"GDSC Silicon Chapter Annual event" }
]
  return (
    <div className='flex flex-col justify-center items-center mt-6 w-[100vw]'>
      {eventList.map((element,index)=>{
        return(
            <>
            {index%2==0 && (
                <>
                <div className='mt-6 flex justify-center items-center w-[80%] bg-[#eee9e996]'>
        <div className='flex justify-center items-center gap-10'>
            <div className='flex justify-center items-center'>
                <img src='https://i.imgur.com/VlKwVWe.gif' className='w-[30vw]'  /></div>
            <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center text-xl font-bold text-[#729a3e] mb-4'>
                    {element.date}
                </div>
                
                <div className='flex justify-center items-center text-2xl font-bold text-[#729a3e]'>
                    {element.name}
                </div>
                <div>
                    {element.desc}
                </div>
            </div>
        </div>
        

      </div>
                </>
            )}
            {index%2!=0 && (<>
                <div className='mt-6 flex justify-center items-center w-[80%] bg-[#eee9e996]'>
        <div className='flex justify-center items-center gap-10'>
            
            <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center text-xl font-bold text-[#729a3e] mb-4'>
                    {element.date}
                </div>
                
                <div className='flex justify-center items-center text-2xl font-bold text-[#729a3e]'>
                    {element.name}
                </div>
                <div>
                    {element.desc}
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img src='https://i.imgur.com/VlKwVWe.gif' className='rotate-180 w-[30vw]'  /></div>
        </div>
        

      </div>
            </>)}
            </>
        )
      })}
    </div>
  )
}

export default Events
