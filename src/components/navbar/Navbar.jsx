import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='bottom-bar'>
        <div className="bottom-bar-wrapper">
            <div className="bottom-bar-item" onClick={()=> navigate("/")} >
              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" ><path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z"/></svg>
                <span className='item-label'>Home</span>
            </div>
            <div className="bottom-bar-item" onClick={()=> navigate("/products")}>
              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" ><path d="M465-613v-123H341v-60h124v-123h60v123h123v60H525v123h-60ZM289.79-80Q260-80 239-101.21t-21-51Q218-182 239.21-203t51-21Q320-224 341-202.79t21 51Q362-122 340.79-101t-51 21Zm404 0Q664-80 643-101.21t-21-51Q622-182 643.21-203t51-21Q724-224 745-202.79t21 51Q766-122 744.79-101t-51 21ZM62-820v-60h116l170 364h287.71L796-796h67L701-493q-11 19-28.56 30.5T634-451H331l-56 104h491v60H284q-37.66 0-57.33-30T224-378l64-118-148-324H62Z"/></svg>
                 <span className='item-label'>Products</span>
            </div>
            <div className="bottom-bar-item" onClick={()=> navigate("/transactions")} >
              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" ><path d="M531-260h85v-3L453-438l1-3h5q53 0 91.5-30t46.5-80h39v-47h-40q-3-15-10-29t-16-26h66v-47H324v47h132q34 0 53.5 15t26.5 40H324v47h212q-5 26-25.5 42.5T453-492h-86v54l164 178ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
                 <span className='item-label'>Earnings</span>
            </div>
            <div className="bottom-bar-item" onClick={()=> navigate("/profile")}>
              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" ><path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.92 44.69q31.3 14.13 50.19 40.97Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z"/></svg>
                 <span className='item-label'>Profile</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar