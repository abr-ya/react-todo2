import React from 'react';

const AboutPage: React.FC = () => (
	<>
		<h1>About</h1>
		<p>Это простое приложение - To Do list. При его разработке использованы следующие инструменты:</p>
		<ul className="collection">
			<li className="collection-item">React, конечно,)</li>
			<li className="collection-item">Typescript - как более совершенный вариант JavaScript,</li>
			<li className="collection-item">Materialize CSS - как библиотека, которая позволяет не отвлекаться на верстку (просто подключена по CDN),</li>
			<li className="collection-item">React Router - для переключения между страницами,</li>
			<li className="collection-item">LocalStorage - для хранения данных - это делает приложение не совсем бесполезным, даже без бэка.)</li>
		</ul>
	</>
)

export default AboutPage;
