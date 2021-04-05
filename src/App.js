import Routes from './routes';
import GlobalStyle from './styles/global';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

export default function App() {
    return (
        <React.Fragment>
            <GlobalStyle/>
            <Header>

            </Header>
            <Main>
                <Routes/>

            </Main>
            <Footer>

            </Footer>
        </React.Fragment>
    );
}
