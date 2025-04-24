import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header';
import { Contact } from './pages/contact';
import { Home } from './pages/home'; // Certifique-se de importar o componente Home corretamente
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

function App() {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    // Função para monitorar o scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Função para rolar ao topo
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            {showScrollToTop && (
                <div className="scroll-to-top" onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faChevronUp} />
                </div>
            )}
        </BrowserRouter>
    );
}

export default App;
