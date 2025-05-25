import styled from "styled-components";

const MainContentWrapper = styled.div`
    display : inline-flex;
    flex-flow : column nowrap;
`;

function MainContent() {
    return (
        <MainContentWrapper>
            <h1>Hello I am MainContent</h1>
        </MainContentWrapper>
    );
}

export default MainContent;