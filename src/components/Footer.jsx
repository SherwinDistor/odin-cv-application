function Footer() {
	return (
		<footer>
			<p>
				&copy; {new Date().getFullYear()} |{' '}
				<a href='/'>
					<img src='/github-mark.svg' alt='GitHub Logo' /> Sherwin Distor
				</a>
			</p>
		</footer>
	);
}

export default Footer;
