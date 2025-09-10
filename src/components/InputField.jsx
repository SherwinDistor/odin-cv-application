function InputField({ label, field, value, handleChange }) {
	return (
		<>
			<h2 className='text-md font-medium'>{label}</h2>
			<input
				className='bg-zinc-200 p-1 rounded-lg w-full mb-2'
				type='text'
				name={field}
				id={field}
				onChange={handleChange}
				value={value}
			/>
		</>
	);
}

export default InputField;
