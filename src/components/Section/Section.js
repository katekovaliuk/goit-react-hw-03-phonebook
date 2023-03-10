import React from "react";
import PropTypes from "prop-types";
import { Container, Title } from "./Section.styled.js";

const Section = ({title, children}) => {
    return (
        <Container>
            <Title>{title}</Title>
            {children}
            
        </Container >
    );   
}

Section.defaulProps = {
    title: '',
    children: [],
};

Section.propPypes = {
    title: PropTypes.string,
    children: PropTypes.node,

};
                    

export default Section;