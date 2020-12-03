import styled from 'styled-components';

export const Container = styled.div`
    position:relative;
    width:100%;
    height:144px;

    background:#28262E;

    display:flex;
    justify-content:space-evenly;
    align-items:center;

    img{
        width:138px;
    }

    .user-info{
        width:60%;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        img{
            width:75px;
            height:75px;
            border-radius:100%;
        }

        strong{
            font-size:17px;
            color:#ff9000;
        }
        p{
            margin-left:10px;
            width:200px;
            font-size:19px;
            font-family:'Roboto Slab', sans-serif!important;
            line-height:-10px;
            color:#F4EDE8;
        }
    }
    
    .comands{
        display:flex;
        align-items:center;

    }
    
    .power,.menu {
        border:0;
        padding:5px;
        background-color:transparent;
        border-radius:10px;
        transition:background 0.5s;
    }
    .menu{
        margin-left:10px;
    }


    .power:hover{
        background-color:#c53030;
        border-radius:10px;
        svg{
            color:white!important;
        }
    }

    .menu:hover{
        background-color:#ff9800;
        border-radius:10px;
        svg{
            color:white!important;
        }
    }
`;

export const MenuFloat = styled.div`
    position:absolute;
    z-index:2;
    right:0;

    width:250px;
    background-color:#3E3B47;

    border-radius:10px;
    box-shadow:1px 1px 10px rgba(0,0,0,0.6);

    margin-top:200px;
    margin-right:100px;

    ul{
        padding:20px;
        li{
            display:flex;
            align-items:center;
            padding:10px;
            margin:5px;
            svg{
                margin-right:10px;
            }
        }
    }
`