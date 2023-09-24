const mockCourseList = [
	{
		title: 'title',
		description: 'description',
		creationDate: '9/3/2021',
		duration: 30,
		authors: ['9b87e8b8-6ba5-40fc-a439-c4e30a373d36'],
		id: '66cc289e-6de9-49b2-9ca7-8b4f409d6467',
	},
];
const mockAuthorsList = [
	{
		name: 'author',
		id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
	},
	{
		name: 'author2',
		id: '1c972c52-3198-4098-b6f7-799b45903199',
	},
	{
		name: 'author3',
		id: '072fe3fc-e751-4745-9af5-aa9eed0ea9ed',
	},
	{
		name: 'author4',
		id: '40b21bd5-cbae-4f33-b154-0252b1ae03a9',
	},
];
export const initialState = {
	user: {
		isAuth: true,
		name: 'My Profile',
		email: '',
		token: '',
		role: 'admin',
	},
	courses: mockCourseList,
	authors: mockAuthorsList,
};
