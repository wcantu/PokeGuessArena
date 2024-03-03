// GoNext.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/tailwind.css';

const GoNext: React.FC = () => {
  return (
    <div className='next'>
      <Link to="mainpage">
        <button>
          <img src="/Images/nextbutton.png" />
        </button>
      </Link>
    </div>
  );
};

export default GoNext;
