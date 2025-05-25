import styled from "styled-components";

const SidebarWrapper = styled.div`
    display : inline-flex;
    width : 20vw;
    max-width : 500px;
    height : 100vh;
    padding : 30px;
    flex-direction : column;
    color : black;
    background-color : #F6F6F6;
    gap : 20px; 

    ul {
        list-style : none;
        display : flex;
        flex-flow : column nowrap;
    }

    ul > li {
        display : flex;
        align-items : center;
        padding-left : 2em;
        border-radius : 1em;
        height : 3em;
        transition : .2s background-color ease-in-out;
    }

    li:hover {
        background-color : #E1E1E1;
    }
    li:active {
        background-color : gray;
    }
`;

function Sidebar() {
    return (
        <SidebarWrapper>
            <h1>Print Gibberish</h1>
            <ul>
                <li>print gibberish</li>
                <li>print new</li>
            </ul>
            
        </SidebarWrapper>
    );
}

export default Sidebar;