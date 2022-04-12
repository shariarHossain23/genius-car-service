import React from 'react';

const Fotter = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <footer>
            <p className='text-center mt-5'><small>&copy; copyright  {year}</small></p>
        </footer>
    );
};

export default Fotter;