import styles from './StylesModules/Projetos.module.css'

import { Swiper } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import { Navigation } from 'swiper/modules';

import { dbcards } from '../data/dbcardsprojects';

import { useState, useEffect } from 'react';

import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';


register();
function Projetos() {
    const [slidesPerView, setSlidesPerView] = useState(3); // Defina o número inicial de slides por visualização

    useEffect(() => {
        // Verifique o tamanho da tela e atualize o número de slides exibidos conforme necessário
        const updateSlidesPerView = () => {
            if (window.innerWidth >= 975) {
                setSlidesPerView(3);
            }
            else if (window.innerWidth >= 650) {
                setSlidesPerView(2);
            }
            else {
                setSlidesPerView(1);
            }
        };

        // Execute a função de atualização quando a janela for redimensionada
        window.addEventListener('resize', updateSlidesPerView);

        // Execute a função de atualização uma vez quando o componente for montado para definir o valor inicial
        updateSlidesPerView();

        // Remova o ouvinte de evento ao desmontar o componente para evitar vazamento de memória
        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);
    return (
        <div id='projects' className={styles.container}>
            <h1>Projetos</h1>
            <swiper-container
                slides-per-view={`${slidesPerView}`}
                navigation={true}
            >
                {dbcards.map((item, index) => (
                    <swiper-slide>
                        <a href={`${item.link}`} target='_blank' rel="noreferrer">
                            <div key={index} className={styles.card}>
                                <img src={item.image} alt={`${item.title}`} />
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </a>
                    </swiper-slide>
                ))}
            </swiper-container>
        </div>
    );
}
export default Projetos