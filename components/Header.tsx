import React, { Children } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = ({children, className}:HeaderProps) => {
    return (
        <div className={`header ${className}`}>
            <Link href='/' className='md:flex-1'>
                <Image
                    src="/assets/icons/logo.svg"
                    alt='Logo with name'
                    width={120}
                    height={32}
                    className='hidden md:block'
                />
                <Image
                    src="/assets/icons/logo-icon.svg"
                    alt='Logo with name'
                    width={32}
                    height={32}
                    className='md:hidden mr-2'
                />
            </Link>
            {children}
        </div>
    )
}

export default Header