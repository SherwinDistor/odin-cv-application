function Footer() {
	return (
		<footer>
			<p>
				&copy; {new Date().getFullYear()} |{' '}
				<a href='/'>
					<img src='public/github-mark.svg' alt='GitHub Logo' /> Sherwin Distor
				</a>
			</p>
		</footer>
	);
}

export default Footer;
