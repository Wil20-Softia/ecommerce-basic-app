import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext.js";
import { runFireworks } from "../lib/utils.js";

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    },[])

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>¡Gracias por su orden de compra!</h2>
            <p className='email-msg'>Verifica el buzón del correo para ver el recibo</p>
            <p className='description'>
                Si tienes alguna duda, por favor al correo
                <a className='email' href='mailto:wilsonweenoo2013@gmail.com'>wilsonweenoo2013@gmail.com</a>
            </p>

            <Link href='/'>
                <button type='button' width='300px' className='btn'>Continuar comprando</button>
            </Link>
        </div>
    </div>
  )
}

export default Success;