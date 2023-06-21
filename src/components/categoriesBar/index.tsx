import { useContext, useRef } from 'react';
import { Container, CategoriesContainer, Categories, CategoriesButton } from "./styles";
import ArrowLeft from '../../assets/arrow-left.png';
import ArrowRight from '../../assets/arrow-right.png';
import { VideoContext } from '../../contexts/videoContext';
import { ICategories } from '../../types/types';
import { useNavigate } from 'react-router-dom';

function CategoriesBar() { 
    const { categories, setCategory } = useContext(VideoContext);
    
    const navigate = useNavigate();

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
            <CategoriesContainer ref={scrollRef}>
                {categories.map((item: ICategories) => (
                    <Categories key={item.id} onClick={() => {
                        if (item.name === 'Tudo') {
                            navigate('/');
                        } else {
                            navigate(`/categories/${item.id}`);
                        }
                        setCategory(item)
                    }}
                    >{item.name}</Categories>
                ))}
            </CategoriesContainer>
            <CategoriesButton onClick={scrollToRight}>
                <img src={ArrowRight} alt=''/>
            </CategoriesButton>
        </Container>
    )
}

export default CategoriesBar;