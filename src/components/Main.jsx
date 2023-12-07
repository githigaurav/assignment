import React from 'react'
import Card from './Card'
function Main() {
  return (
    <>
    
      {/* <div className=' flex justify-center p-10  w-full mt-4 flex-col'>
          <div>
            <h1 className='text-center p-2 font-bold text-2xl'>Let's visit and know the South Korea...</h1>
          </div>
           <div>
              <div className='flex justify-center'>
                    <div className='m-2'>
                      <Card style={"max-w-[800px] h-[400px] "} />
                    </div>
                    <div className='flex flex-col m-2'>
                      <Card style={"max-w-[400px] max-h-[200px]"}/>
                      <Card style={"max-w-[400px] max-h-[200px]"}/>
                    </div>                
                </div>
           </div>
           <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quisquam placeat mollitia dolores aut? Quasi debitis, quos ad vitae omnis cumque assumenda iure provident eveniet veritatis numquam recusandae obcaecati praesentium!</p>
           </div>
            
      </div> */}

      <div className='bg-blue-100  flex justify-center p-10'>
        <div className='w-full max-w-[1200px] '>
            <div className='w-full flex flex-col gap-6'>
                <div>
                  <h1 className='font-bold text-3xl '>Let's have a look in Korea Japan.</h1>
                </div>
                <div className='flex max-h-[800px]'>
                    <div>
                        <Card style={'h-[400px]'}/>
                    </div>
                    <div className='flex flex-col'>
                        <Card style={'h-[200px] w-auto'}/>
                        <Card style={'h-[200px] w-auto'}/>
                    </div>                
                </div>

                <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sequi? Aut hic enim nobis adipisci doloribus iste laudantium recusandae esse delectus perspiciatis assumenda, asperiores consequuntur, in quod illo, tempora odio.</p>
                </div>
            </div>
          </div>
      </div>
      
    </>
  )
}

export default Main