import { useContext } from "react";
import { OpenMenuContext } from "../../contexts/menuContext";
import { 
    Container, MenuItem
} from "./styles";

const items = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

function Menu() {
    const { openMenu } = useContext(OpenMenuContext);
    
    return (
        <Container openMenu={ openMenu }>
            {items.map(() => (
                <MenuItem>
                    Início
                </MenuItem>
            ))}

        </Container>
    )
}

export default Menu;