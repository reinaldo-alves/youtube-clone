import { useContext, useRef } from 'react';
import { MenuContext } from '../../contexts/menuContext';
import { Container, CategoriesContainer, Categories, CategoriesButton } from "./styles";
import ArrowLeft from '../../assets/arrow-left.png';
import ArrowRight from '../../assets/arrow-right.png';

const categories = ['Tudo', 'Mixes', 'Submarinos', 'Aviação', 'Forró', 'Ferramentas', 'Música Sertaneja', 'Marcenarias', 'Engenharia Elétrica', 'Voo', 'Copa do Mundo', 'Magníficos', 'Música', 'Arduino', 'Música brasileira', 'Jogos', 'Ao Vivo', 'História', 'Programa de computador', 'Máquinas', 'Notícias']

function CategoriesBar() { 
    const { openMenu } = useContext(MenuContext);

    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollToLeft = () => {
        if(scrollRef.current) {
            scrollRef.current.scrollLeft -= 350
        }
    }
    const scrollToRight = () => {
        if(scrollRef.current) {
            scrollRef.current.scrollLeft += 350
        }
    }
    
    return (
        <Container>
            <CategoriesButton onClick={scrollToLeft}>
                <img src={ArrowLeft} alt=''/>
            </CategoriesButton>
            <CategoriesContainer ref={scrollRef} openMenu={ openMenu }>
                {categories.map((item) => (
                    <Categories>{item}</Categories>
                ))}
            </CategoriesContainer>
            <CategoriesButton onClick={scrollToRight}>
                <img src={ArrowRight} alt=''/>
            </CategoriesButton>
        </Container>
    )
}

export default CategoriesBar;