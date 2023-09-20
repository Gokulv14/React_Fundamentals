import './AuthorItem.css';
import { mockedAuthorsList } from '../../../../constants';
import { useState } from 'react';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';
import { v4 as uuidv4 } from 'uuid';

function AuthorItem(props) {
	const [authorList, setAuthorList] = useState(mockedAuthorsList);
	const [courseAuthorList, setCourseAuthorList] = useState([]);
	const [authorName, setAuthorName] = useState('');
	const [authorNameError, setAuthorNameError] = useState('');

	const addAuthors = (id) => {
		const author = authorList.find((doc) => doc.id === id);
		setCourseAuthorList((prevState) => [...prevState, author]);
		setAuthorList(authorList.filter((d) => d.id !== id));
		console.log(authorList, courseAuthorList);
	};

	const deleteAuthor = (id) => {
		const author = courseAuthorList.find((doc) => doc.id === id);
		setAuthorList((prevState) => [...prevState, author]);
		setCourseAuthorList(courseAuthorList.filter((d) => d.id !== id));
	};

	const updateAuthorName = (e) => {
		const name = e.target.value;
		if (name.length) setAuthorName(name);
	};

	const addNewAuthor = () => {
		if (authorName.length < 2) {
			setAuthorNameError('Author name length should be at least 2 characters');
		} else {
			const authorId = uuidv4();
			console.log(authorId);
			setAuthorList((prevState) => [
				...prevState,
				{ id: authorId, name: authorName },
			]);
			setAuthorName('');
			setAuthorNameError('');
		}
	};

	return (
		<div>
			<div className='title-input'>
				<span className='author-heading-left'>Authors</span>
				<span className='author-heading-right'>Course Authors</span>
			</div>
			<div className='title-input'>
				<span className='author-list-empty'>
					{courseAuthorList.length ? (
						courseAuthorList.map((author) => {
							return (
								<div key={author.id}>
									<span>
										<span>{author.name} </span>
									</span>
									&nbsp;&nbsp;
									<span
										onClick={() => {
											deleteAuthor(author.id);
										}}
									>
										-
									</span>
								</div>
							);
						})
					) : (
						<p className='author-empty-list'>Author list is empty</p>
					)}
				</span>
				<br />
				<Input
					className='duration-input'
					placeholder='Input text'
					name='Author Name'
					type='text'
					id='authorName'
					value={authorName}
					onChange={updateAuthorName}
				/>
				<p className='validation-error'>{authorNameError}</p>
				<Button
					onClickFn={(e) => {
						addNewAuthor(e);
					}}
					name='CREATE AUTHOR'
				/>
			</div>
			<span className='author-list-left'>Authors List</span>
			{authorList.map((author) => {
				return (
					<p key={author.id}>
						<span>{author.name} </span>&nbsp;&nbsp;
						<span
							onClick={() => {
								addAuthors(author.id);
							}}
						>
							+
						</span>
					</p>
				);
			})}
		</div>
	);
}

export default AuthorItem;
