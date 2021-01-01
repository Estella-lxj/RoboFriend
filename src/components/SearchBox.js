import React from 'react';

const SearchBox = ({ searchfiled, searchChange }) => {
	return (
		<div>
			<input
				className='pa3 ba b--green bg-lightest-blue'
				type='search'
				placeholder='Search robots'
				value={searchfiled}
				onChange={(e) => searchChange(e.target.value)}
			/>
		</div>
	);
}

export default SearchBox;