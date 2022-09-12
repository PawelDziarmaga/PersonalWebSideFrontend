import type { NextPage } from "next";
import Head from "next/head";
//import state
import { Provider } from "react-redux";
import { store } from "../state/store";
//import Components
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import StickyNotes from "../components/StickyNotes/StickyNotes";
import Contact from "../components/Contact/Contact";
import Nav from "../components/Nav/Nav";

//import styles
import { Div } from "../styles/global.style";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Paweł Dziarmaga</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />

				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>

				<link
					href='https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;700&family=Caveat:wght@400;500;700&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<Provider store={store}>
				<Div className='App'>
					<Nav />
					<Header />
					<About />
					<Projects />
					<StickyNotes />
					<Contact />
				</Div>
			</Provider>

			<footer></footer>
		</div>
	);
};

export default Home;
