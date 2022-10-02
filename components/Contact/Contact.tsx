import React from "react";
// import styles
import {
	Div,
	H1,
	Form,
	Container,
	Label,
	Input,
	Textarea,
	Button,
} from "./Contact.styles";
//mail
import emailjs from "@emailjs/browser";
import { useState } from "react";
//Toasr
import { toast } from "react-hot-toast";

function Contact() {
	const [name, setName] = useState("");
	const [text, setText] = useState("");
	const [mail, setMail] = useState("");
		//Create a toast
		const notifySuccess = () => {
			toast.success(`Mail has been sent.`, { duration: 2500 });
		};
		const notifyErr = () => {
			toast.error(`An error occurred. Please try again later.`, { duration: 2500 });
		};
	const handleMailJS = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID as string,
				process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
				"#contact-form",
				process.env.NEXT_PUBLIC_PUBLIC_KEY as string
			)
			.then(
				function () {
					setName("");
					setText("");
					setMail("");
					notifySuccess()
				},
				function (error) {
					console.log("FAILED...", error);
					setName("");
					setText("");
					setMail("");
					notifyErr()
				}
			);
	};

	const handleButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
		if(name.length<= 0){
			document.getElementsByClassName("textForm")[0].classList.add("errInput")
			return;
		}else{
			document.getElementsByClassName("textForm")[0].classList.remove("errInput")
		}
		if(mail.length<= 0){
			document.getElementsByClassName("email")[0].classList.add("errInput")
			return;
		}else{
			document.getElementsByClassName("email")[0].classList.remove("errInput")
		}
		if(text.length<= 0){
			document.getElementsByClassName("message")[0].classList.add("errInput")
			return;
		}else{
			document.getElementsByClassName("message")[0].classList.remove("errInput")
		}
		handleMailJS(e);

	}

	return (
		<Div id='Contact'>
			<H1>
				If you want to ask me something, write to me!<br></br> I&apos;ll be happy to
				answer you :)
			</H1>
			<Form id='contact-form'>
				<Container>
					<Label>
						<Input
							className="textForm"
							type='text'
							name='user_name'
							placeholder='Name...'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Label>
					<Label>
						<Input
						className="email"
							type='email'
							name='user_email'
							placeholder='Email...'
							value={mail}
							onChange={(e) => setMail(e.target.value)}
						/>
					</Label>
				</Container>

				<Label>
					<Textarea
					className="message"
						name='message'
						placeholder='How can I help you?'
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</Label>
				<Button
					type='submit'
					value='Send'
					onClick={(
						e: React.MouseEvent<HTMLButtonElement, MouseEvent>
					) => {
						e.preventDefault()
						handleButton(e)
						}}>
					Send mail
				</Button>
			</Form>
		</Div>
	);
}

export default Contact;
