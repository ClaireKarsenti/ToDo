import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoForm from './components/TodoForm';
import TodoFilterButton from './components/TodoFilterButton';
import TodoItems from './components/TodoItems';

//App
test('renders App component correctly', () => {
  render(<App />);
  const title = screen.getByText(/TODO/i);
  expect(title).toBeInTheDocument();
});

// Header component
test('renders Header component correctly', () => {
  render(<Header />);
  screen.debug();

  //Title display correctly
  const title = screen.getByText(/TODO/i);
  expect(title).toBeInTheDocument();
  expect(title).toHaveStyle('color: var(--dark-dark-grayish-blue)');

  //Sun and moon icons display correctly
  const icons = screen.getByAltText(/Theme/i);
  expect(icons).toBeInTheDocument();
  expect(icons.alt).toBe('Theme');
  expect(icons.alt).not.toBe('Sun');
});

// Footer component
test('renders Footer component correctly', () => {
  render(<Footer />);
  //screen.debug();
  const websiteLink = screen.getByText(/Claire Karsenti/i);
  expect(websiteLink).toBeInTheDocument();
  expect(websiteLink).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/claire-karsenti/'
  );
  expect(websiteLink).toHaveStyle('color: var(--dark-dark-grayish-blue)');
});

// TodoForm component
test('renders TodoForm component correctly', () => {
  const setListProp = jest.fn();

  render(<TodoForm list={''} setList={setListProp} />);

  screen.debug();

  // Input has a correct initial value
  const input = screen.getByPlaceholderText('Create a new todo...');
  expect(input.value).toBe('');
  expect(input.value).not.toBe('ok');

  // Checkbox works correctly
  const checkbox = screen.getByTestId('checkbox');
  expect(checkbox).toBeInTheDocument();
});

// TodoFilterButton component
test('renders TodoFilterButton component correctly', () => {
  const setFilterStatusProp = jest.fn();

  render(
    <TodoFilterButton filterStatus={''} setFilterStatus={setFilterStatusProp} />
  );

  // There should be three buttons filter
  const buttonsFilter = screen.getAllByTestId('btn');
  const all = screen.getAllByRole('btnItem')[0];
  const active = screen.getAllByRole('btnItem')[1];
  const completed = screen.getAllByRole('btnItem')[2];

  // All to be in the document
  expect(all).toBeInTheDocument();

  // Active to be in the document
  expect(active).toBeInTheDocument();

  // Completed to be in the document
  expect(completed).toBeInTheDocument();

  // Only one filter group
  expect(buttonsFilter.length).toBe(1);
  expect(buttonsFilter.length).not.toBe(2);
});

// TodoItems component
test('renders TodoItems component correctly', () => {
  const setListStatusProp = jest.fn();

  const fakeTodo = [
    {
      id: 1,
      title: 'sport',
      completed: true,
    },
    {
      id: 2,
      title: 'code',
      completed: false,
    },
  ];
  render(
    <TodoItems
      list={fakeTodo}
      setList={setListStatusProp}
      removeItem={jest.fn()}
      filteredTodos={[]}
    />
  );

  screen.debug();

  // CrossIcon
  const firstCrossIcon = screen.getByTestId('remove')[0];
  expect(firstCrossIcon).toBeInTheDocument();

  //First Todo
  const firstTodo = screen.getByText(/sport/i);
  expect(firstTodo).toBeInTheDocument();

  //Second Todo
  const secondTodo = screen.getByText(/code/i);
  expect(secondTodo).toBeInTheDocument();
});
