import Image from 'next/image'
import React from 'react'



const  NavbarSanity = (props: any) => {
  const { renderDefault,title }= props
  return (
    <div className='flex items-center p-2 space-x-2 '>
      <Image
      className='rounded-full object-cover hover:scale-105 transition-transform duration-200 ease-out '
       width={50}
       height={50}
      alt='logo'
       src="https://cdn.sanity.io/images/7n5v8za3/production/0e364800a83bff494b690520d1fe9543fa7fcd97-2048x2048.png"
      />
      {renderDefault && <>{renderDefault(props)} </>}
    </div>
  )
}

export default NavbarSanity