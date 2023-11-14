import React from 'react'
import "./Events.css";
const Events = () => {
    const eventList=[{date:"10/12/2022",name:"GDSC Annual Event", desc:"GDSC Silicon Chapter Annual event" },
    {date:"10/12/2023",name:"GDSC Annual Event", desc:"GDSC Silicon Chapter Annual event" }
]
  return (
    <>
    <div className='dekstop-events'>
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
                <div className='flex justify-center items-center text-xl font-bold text-[#00000071] mb-4'>
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
                <div className='flex justify-center items-center text-xl font-bold text-[#00000071] mb-4'>
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
    </div>

    <div className='mobile-events'>
        <div className='flex flex-col justify-center items-center mt-6 w-[100vw]'>
        {eventList.map((element,index)=>{
            return(
                <>
                {index%2==0 && (
                    <>
                    <div className='mt-6 flex justify-center items-center w-[100%] pl-6 pr-6 bg-[#eee9e996]'>
            <div className='flex justify-center items-center gap-10'>
                <div className='flex justify-center items-center'>
                    <img src='https://i.imgur.com/VlKwVWe.gif' className='w-[50vw]'  /></div>
                <div className='flex flex-col justify-center items-center'>
                <div className='flex justify-center pt-6 items-center text-xs font-bold text-[#00000071] mb-4'>
                        {element.date}
                    </div>
                    
                    <div className='flex justify-center items-center text-center text-sm font-bold text-[#729a3e]'>
                        {element.name}
                    </div>
                    <div className='flex justify-center items-center text-center pt-6 pb-4 text-xs'>
                        {element.desc}
                    </div>
                </div>
            </div>
            

        </div>
                    </>
                )}
                {index%2!=0 && (<>
                    <div className='mt-6 flex justify-center items-center w-[100%] pl-6 pr-6 bg-[#eee9e996]'>
            <div className='flex justify-center items-center gap-10'>
                
                <div className='flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center pt-6 text-xs font-bold text-[#00000071] mb-4'>
                        {element.date}
                    </div>
                    
                    <div className='flex justify-center items-center text-center text-sm font-bold text-[#729a3e]'>
                        {element.name}
                    </div>
                    <div className='flex justify-center items-center text-center text-xs pt-6 pb-4'>
                        {element.desc}
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img src='https://i.imgur.com/VlKwVWe.gif' className='rotate-180 w-[50vw]'  /></div>
            </div>
            

        </div>
                </>)}
                </>
            )
        })}
        </div>
    </div>
    </>
  )
}

export default Events
