import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className='bg-[#0E5AF2] h-[30px] w-[30px] rounded-md'>
          <div className='flex justify-center'><svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.82047 0.00833382C9.42714 0.0462511 9.0552 0.205128 8.75587 0.462802L0.717013 7.35325C0.312473 7.67741 0.056939 8.15194 0.00835045 8.66804C-0.0399804 9.18419 0.122903 9.69764 0.460152 10.0915C0.797135 10.4854 1.27962 10.7257 1.79689 10.7575C2.31437 10.7892 2.82252 10.6098 3.20539 10.26L10 4.4341L16.7946 10.26C17.1775 10.6095 17.6856 10.789 18.2031 10.7572C18.7203 10.7257 19.2028 10.4854 19.5398 10.0915C19.8771 9.69766 20.04 9.18393 19.9916 8.66776C19.9431 8.15161 19.6875 7.6774 19.283 7.35325L11.2441 0.462802C10.8508 0.124486 10.337 -0.0394691 9.82066 0.0080668L9.82047 0.00833382Z" fill="white"/>
          </svg></div>

        </button>
      )}
    </>
  );
};

// const buttonStyle = {
//   position: '',
//   bottom: '20px',
//   right: '20px',
//   padding: '10px 20px',
//   fontSize: '16px',
//   backgroundColor: '#007bff',
//   color: '#fff',
//   border: 'none',
//   borderRadius: '5px',
//   cursor: 'pointer',
// };

export default ScrollToTopButton;






// const ScrollToTopButton = () => {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth', // This makes the scroll smooth
//     });
//   };

//   return (
//     <button onClick={scrollToTop} style={buttonStyle}>
//       Back to Top
//     </button>
//   );
// };

// const buttonStyle = {
//   position: 'fixed',
//   bottom: '20px',
//   right: '20px',
//   padding: '10px 20px',
//   fontSize: '16px',
//   backgroundColor: '#007bff',
//   color: '#fff',
//   border: 'none',
//   borderRadius: '5px',
//   cursor: 'pointer',
// };

// export default ScrollToTopButton;