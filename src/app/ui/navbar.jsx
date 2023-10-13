'use client';

import {Avatar ,Dropdown, Navbar } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

export function NavbarForAnon() {
    return (
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <Image src="/favicon.ico" width={40} height={40} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
        </Navbar.Brand>
       
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/links">Links</Navbar.Link>
          <Navbar.Link href="/register">Sign Up</Navbar.Link>
          <Navbar.Link href="/login">Log in</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    )
}


export default function NavbarForUser() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <Image src="/favicon.ico" width={40} height={40} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Image src="/favicon.ico" width={40} height={40} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        }
        >
          <Link href="/"> <Dropdown.Item>Dashboard</Dropdown.Item></Link>
          <Link href="/links"> <Dropdown.Item>Links</Dropdown.Item></Link> 
          <Dropdown.Divider />
          <Link href="/logout"> <Dropdown.Item>Sign out</Dropdown.Item></Link> 
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/links">Links</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


