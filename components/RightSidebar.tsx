import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BankCard from './BankCard'

const RightSidebar = ({ user, transactions}: RightSidebarProps) => {
  return (
    <aside className='right-sidebar'>
        <section className='flex flex-col pb-8'>
            <div className='profile-banner' />
            <div className='profile'>
                <div className='profile-img'>
                    <span className='text-5xl font-bold text-blue-500'>
                        {user.name[0]}
                    </span>
                    <div className='profile-details'>
                        <h1 className='profile-name'>
                            {user.name}
                        </h1>
                        <p className='profile-email'>
                            {user.email}
                        </p>
                    </div>
                </div>
            </div>

        </section>

        <section className='banks'>
            <div className='flex w-full justify-between'>
                <h2 className='header-2'>Meus Bancos</h2>
                <Link href="/" className='flex gap-2'>
                    <Image 
                        src="/icons/plus.svg"
                        width={20}
                        height={20}
                        alt="plus"
                                         
                                           
                    />
                    <h2 className="text-14 font-semibold text-gray-600">
                        Adicionar Banco

                    </h2>
                </Link>
            </div>

            
        </section>


    </aside>
  )
}

export default RightSidebar