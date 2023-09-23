import './AuthorItem.css';
import { useEffect, useState } from 'react';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_AUTHORS } from '../../../../store/authors/actions';
import { getAuthors, getCourses } from '../../../../store/selector';
import { INTERNAL_SERVER_ERR } from '../../../../constants';
import { makePostRequest } from '../../../../services';

function AuthorItem(props) {
	const dispatch = useDispatch();
	const authorData = useSelector(getAuthors);
	const courseData = useSelector(getCourses);
	const actualCourse = props.courseId
		? courseData.length && courseData.find((d) => d.id === props.courseId)
		: '';
	const initialAuthorsList = actualCourse
		? authorData.filter((e) => !actualCourse.authors.includes(e.id))
		: authorData;
	const initialCourseAuthorsList = actualCourse
		? authorData.filter((e) => actualCourse.authors.includes(e.id))
		: [];
	const [authorList, setAuthorList] = useState(initialAuthorsList);
	const [courseAuthorList, setCourseAuthorList] = useState(
		initialCourseAuthorsList
	);
	const [authorName, setAuthorName] = useState('');
	const [authorNameError, setAuthorNameError] = useState('');

	const addAuthors = (id) => {
		const author = authorList.find((doc) => doc.id === id);
		setAuthorList(authorList.filter((d) => d.id !== id));
		setCourseAuthorList((prevState) => [...prevState, author]);
	};

	const deleteAuthor = (id) => {
		const author = courseAuthorList.find((doc) => doc.id === id);
		setAuthorList((prevState) => [...prevState, author]);
		setCourseAuthorList(courseAuthorList.filter((d) => d.id !== id));
	};

	const updateAuthorName = (e) => {
		const name = e.target.value;
		setAuthorName(name);
	};

	const addNewAuthor = async () => {
		if (authorName.length < 2) {
			setAuthorNameError('Author name length should be at least 2 characters');
		} else {
			const payload = { name: authorName };
			try {
				const response = await makePostRequest(`/authors/add`, payload);
				const res = await response.json();
				setAuthorList((prevState) => [
					...prevState,
					{ id: res?.result?.id, name: authorName },
				]);
				dispatch(ADD_AUTHORS({ id: res?.result?.id, name: authorName }));
				setAuthorName('');
				setAuthorNameError('');
			} catch (err) {
				setAuthorNameError(INTERNAL_SERVER_ERR);
			}
		}
	};

	useEffect(() => {
		props.getAuthorIds(courseAuthorList);
	}, [courseAuthorList]);

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
					className='button'
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
