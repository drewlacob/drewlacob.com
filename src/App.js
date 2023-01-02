import './App.css';
import Home from './pages';
import { useEffect } from 'react';

function App() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    {
      threshold: 0,
    }
  );

  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hidden'); //Observe objects with normal fade in and up
    hiddenElements.forEach((el) => observer.observe(el));

    const hiddenElementsStationary = document.querySelectorAll('.hiddenStationary'); //Observe objects with stationary fade in (lazy load)
    hiddenElementsStationary.forEach((el) => observer.observe(el));
  });

  return <Home />;
}

export default App;
