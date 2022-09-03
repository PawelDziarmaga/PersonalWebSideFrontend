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

function Contact() {
	const [name, setName] = useState("");
	const [text, setText] = useState("");
	const [mail, setMail] = useState("");

	return (
		<Div id='Contact'>
			<H1>
				If you want to ask me something, write to me, I ll be happy to
				answer you
			</H1>
			<Form id='contact-form'>
				<Container>
					<Label>
						<Input
							type='text'
							name='user_name'
							placeholder='Name...'
							onChange={(e) => setName(e.target.value)}
						/>
					</Label>
					<Label>
						<Input
							type='email'
							name='user_email'
							placeholder='Email...'
							onChange={(e) => setMail(e.target.value)}
						/>
					</Label>
				</Container>

				<Label>
					<Textarea
						name='message'
						placeholder='How can I help you?'
						onChange={(e) => setText(e.target.value)}
					/>
				</Label>
				<Button
					type='submit'
					value='Send'
					onClick={(e) => e.preventDefault()}>
					Send mail
				</Button>
			</Form>
		</Div>
	);
}

export default Contact;
