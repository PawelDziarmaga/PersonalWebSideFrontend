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
				},
				function (error) {
					console.log("FAILED...", error);
				}
			);
	};
	//Create a toast
	const notify = () => {
		toast.success(`Mail has been sent.`, { duration: 2500 });
	};

	return (
		<Div id='Contact'>
			<H1>
				If you want to ask me about something, write to me!<br></br> I&apos;ll be happy to
				answer you :)
			</H1>
			<Form id='contact-form'>
				<Container>
					<Label>
						<Input
							type='text'
							name='user_name'
							placeholder='Name...'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Label>
					<Label>
						<Input
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
						handleMailJS(e);
						notify();
					}}>
					Send mail
				</Button>
			</Form>
		</Div>
	);
}

export default Contact;
