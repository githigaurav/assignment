import React from 'react'

function Card({
    style
}) {
  return (
    <>
         <div>
            <div>
                <img src={"https://media2.thrillophilia.com/images/photos/000/124/827/original/1620711872_shutterstock_1396013432.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true"} className={style} alt="img" />
            </div>
        </div>
   </>
  )
}

export default Card