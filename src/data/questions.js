const QUESTIONS = [
	{
		question: 'What is ReactJS?',
		options: [
			'A database',
			'A JavaScript library for building user interfaces',
			'A CSS framework',
			'A backend language',
		],
		correctOption: 'A JavaScript library for building user interfaces',
	},
	{
		question: 'Who developed ReactJS?',
		options: ['Google', 'Microsoft', 'Facebook', 'Twitter'],
		correctOption: 'Facebook',
	},
	{
		question: 'What is the command to create a new React app?',
		options: [
			'npx create-react-app myApp',
			'npm install react',
			'react new app',
			'node start-react',
		],
		correctOption: 'npx create-react-app myApp',
	},
	{
		question: 'What does JSX stand for?',
		options: [
			'JavaScript Extension',
			'Java Standard XML',
			'JavaScript XML',
			'Java Syntax Exchange',
		],
		correctOption: 'JavaScript XML',
	},
	{
		question: 'Which method is used to render React content?',
		options: [
			'ReactDOM.display()',
			'React.show()',
			'ReactDOM.render()',
			'React.view()',
		],
		correctOption: 'ReactDOM.render()',
	},
	{
		question: 'How do you write a React component using a function?',
		options: [
			'function MyComponent() {}',
			'component MyComponent() {}',
			'class MyComponent() {}',
			'render MyComponent() {}',
		],
		correctOption: 'function MyComponent() {}',
	},
	{
		question:
			'Which hook is used to manage state in a functional component?',
		options: ['useEffect', 'useRef', 'useState', 'useMemo'],
		correctOption: 'useState',
	},
	{
		question: 'What is the correct syntax to pass a prop in React?',
		options: [
			"<MyComponent prop='value' />",
			"{MyComponent(prop='value')}",
			"[MyComponent prop='value']",
			"<MyComponent.prop = 'value' />",
		],
		correctOption: "<MyComponent prop='value' />",
	},
	{
		question: 'Which of these is used to add styles in React inline?',
		options: [
			"style='color: red'",
			"style={{color: 'red'}}",
			"styles='color: red'",
			"css={{color: 'red'}}",
		],
		correctOption: "style={{color: 'red'}}",
	},
	{
		question: 'What is the default port number React app runs on?',
		options: ['3000', '8080', '8000', '5000'],
		correctOption: '3000',
	},
];

export default QUESTIONS;
