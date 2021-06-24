import React, { useState } from "react";

//create your first component

//funcion que genere la lista con useState
//funcion que añada en la lista
//funcion que elimine en la list

export function Home() {
	const [listaTareas, setListaTareas] = useState([
		"tarea prueba 1",
		"tarea prueba 2"
	]);

	function add(t) {
		console.log(t);
		if (t.key === "Enter" && t.target.value !== "") {
			setListaTareas(listaTareas.concat(t.target.value));
			t.target.value = "";
        } 
        
	}

	function accionEliminar(index) {
		if (index > -1) {
			const filterList = listaTareas.filter(
				item => item !== listaTareas[index]
			);
			setListaTareas(filterList);
		}
	}
	return (
		<div className="text-center mt-5 container">
			<h5>TO DO LIST</h5>
			<>
				<div className="inputValue">
					<input
						className="form-control form-control-lg"
						type="text"
						name="item"
						placeholder="¿Que necesitas hacer?"
						onKeyUp={t => add(t)}
					/>
					<div className="list">
						<br />
						<ul className="list-group">
							{listaTareas.map((item, index) => {
								return (
									<li key={index} className="list-group-item">
										{item}
										<button
											className="btn btn-light float-right"
											onClick={() => {
												accionEliminar(index);
											}}>
											<i className="far fa-star"></i>
										</button>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<div className="pendientes">
					{listaTareas.length} pendiente/s
				</div>
				{/* conteo tareas */}
			</>
		</div>
	);
}
