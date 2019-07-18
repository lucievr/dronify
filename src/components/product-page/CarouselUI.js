import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Icon from '../styles/Icon'


const Container = styled.div`
    position: relative;
    overflow: hidden;
    /* width: 70%; */
    margin: 0 auto;
    color: #000;
`
const Children = styled.div`
    height: 25rem;
    position: relative;
    left: 0;
`
const Arrow = styled.div`
    text-shadow: 1px 1px 1px #000;
    z-index: 100;
    line-height: 60vh;
    text-align: center;
    position: absolute;
    top: 0;
    width: 10%;
    font-size: 5rem;
    cursor: pointer;
    user-select: none;
    ${props =>
        props.right
            ? css`
                left: 90%;
              `
            : css`
                left: 0%;
              `}
`
const Dot = styled.span`
    font-size: 1rem;
    cursor: pointer;
    text-shadow: 1px 1px 1px #000;
    user-select: none;
`
const Dots = styled.span`
    text-align: center;
    width: 100%;
    z-index: 100;
`

const CarouselUI = ({ position, total, handleClick, children }) => (
    <Container>
        <Children>
            {children}
            <Arrow onClick={handleClick} data-position={position - 1}>
            <span className="carouselIcon"><Icon name="arrow-left-circle"/></span>
            </Arrow>
            <Arrow right onClick={handleClick} data-position={position + 1}>
                <span className="carouselIcon"><Icon name="arrow-right-circle"/></span>
            </Arrow>
        </Children>
        <Dots>
            {Array(...Array(total)).map((val, index) => (
                <Dot key={index} onClick={handleClick} data-position={index}>
                    {index === position ? "● " : "○ "}
                </Dot>
            ))}
        </Dots>
    </Container>
)

export default CarouselUI
