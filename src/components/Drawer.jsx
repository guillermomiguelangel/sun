import React, { useRef, useState } from 'react'
import { Sound } from './Sound'
import { Link, NavLink } from 'react-router-dom'
import cn from 'classnames'

export const Drawer = ({ children, layout }) => {
  return (
    <div className="drawer drawer-end">
      <input id="myDrawer" type="checkbox" className="drawer-toggle" />
      <main className="drawer-content flex flex-col">
        {/* Navbar */}
        <header className={cn("w-full navbar absolute z-10 top-0 left-0", {
          'max-w-[1200px] left-[50%] px-3 -translate-x-1/2': layout === 'BLUE'
        })}>
          <div className={cn("text-right w-full flex justify-end lg:mt-5", {
            'lg:pr-0': layout === 'BLUE',
            'lg:pr-24': layout !== 'BLUE',
          })}>
            <div className='relative mr-8 lg:mr-16'>
              <Sound />
            </div>
            <label htmlFor="myDrawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" viewBox="0 0 32 20" fill="none">
                <rect width="32" height="2.13334" rx="1.06667" fill="white" />
                <rect x="8.5332" y="8.5332" width="23.4667" height="2.13334" rx="1.06667" fill="white" />
                <rect y="17.0664" width="32" height="2.13334" rx="1.06667" fill="white" />
              </svg>
            </label>
          </div>
        </header>
        {/* Page content here */}
        <div className='relative z-0'>
          {children}
        </div>
      </main>
      <nav className="drawer-side z-20 overflow-hidden">
        <label htmlFor="myDrawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu px-8 pt-28 w-80 min-h-full bg-creme space-y-10 text-xl text-black relative">
          <label htmlFor="myDrawer" aria-label="close sidebar" className="absolute top-16 right-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
              <rect x="10.6865" y="31.8994" width="30" height="2" rx="1" transform="rotate(-45 10.6865 31.8994)" fill="black" />
              <rect x="31.8994" y="33.3135" width="30" height="2" rx="1" transform="rotate(-135 31.8994 33.3135)" fill="black" />
            </svg>
          </label>
          <NavLink style={isActive => ({
            color: isActive ? "active" : ""
          })} to={'/welcome'}>Participa</NavLink>
          <NavLink style={isActive => ({
            color: isActive ? "active" : ""
          })} to={'/gifts'}>Premios</NavLink>
          <NavLink style={isActive => ({
            color: isActive ? "active" : ""
          })} to={'/recipes'}>Recetas</NavLink>
          <Link>Bases Legales</Link>
        </ul>
      </nav>
    </div>
  )
}
