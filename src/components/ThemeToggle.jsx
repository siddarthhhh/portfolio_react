import { Moon, Sun } from 'lucide-react';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { cn } from '../lib/utils';

const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check local storage for theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
                setIsDarkMode(true);
            } else {
                document.documentElement.classList.remove('dark');
                setIsDarkMode(false);
            }
        } else {
            // Default to light mode if no preference is saved
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, [])
    

    const toggleTheme = () => {
        if(isDarkMode){
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light') // Save theme preference
            setIsDarkMode(false)
        }
        else{
            document.documentElement.classList.add('dark')  
            localStorage.setItem('theme', 'dark') // Save theme preference
            setIsDarkMode(true)

        }
    }



  return (
    <button onClick={toggleTheme}
        className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}
      >
        {isDarkMode ? <Sun className='h-6 w-6 text-yellow-300'/>:<Moon className='h-6 w-6 text-blue-300'/>}
    </button>
  )
}

export default ThemeToggle